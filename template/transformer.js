/**
 * Custom Metro transformer — obfuscates all manager entry modules in release.
 * Convention: files named like PIN-MANAGER-*.tsx | PIN-WEBVIEW-*.tsx |
 * RD-MANAGER-*.tsx | RD-WEBVIEW-*.tsx (any suffix, dash-separated).
 * Compatible with RN 0.81+ / Metro 0.83+
 */
const upstreamTransformer = require('@react-native/metro-babel-transformer');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Metro's collectDependencies only accepts static require specifiers: require("pkg").
// - splitStrings / stringArray on those literals → require("a"+"b") → Invalid call (build fails).
// - Catching errors and continuing used to ship an unobfuscated bundle (looked like "obfuscation off").
// Keep every module specifier out of the string array by listing them in reservedStrings (exact strings).
function collectRequireSpecifiers(code) {
  const set = new Set();
  const re = /require\(\s*["']([^"']+)["']\s*\)/g;
  let m;
  while ((m = re.exec(code))) {
    set.add(m[1]);
  }
  return [...set];
}

const OBFUSCATION_OPTIONS_BASE = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.5,
  numbersToExpressions: true,
  simplify: true,
  splitStrings: false,
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,
  selfDefending: false,
  debugProtection: false,
  disableConsoleOutput: false,
  stringArray: true,
  stringArrayThreshold: 1,
  // base64 hides literals in the source text; avoid "rc4" here — can break RN/Metro in some setups.
  stringArrayEncoding: ['base64'],
  stringArrayShuffle: true,
};

// PIN-MANAGER-ANDROID-WHITE, PIN-MANAGER-IOS-NO-SDK,
// PIN-WEBVIEW-ANDROID-BLACK, PIN-WEBVIEW-IOS-BLACK,
// RD-MANAGER-ANDROID-WHITE, RD-MANAGER-IOS-NO-SDK,
// RD-WEBVIEW-ANDROID-BLACK, RD-WEBVIEW-IOS-BLACK.
// One segment: (PIN|RD)-(MANAGER|WEBVIEW)-* with extension ts/tsx/js/jsx (no spaces in filename).
const MANAGER_MODULE_RE =
  /(^|[\\/])(PIN|RD)-(MANAGER|WEBVIEW)-[^\\/]+\.(tsx|ts|jsx|js)$/i;

function shouldObfuscate(filename) {
  if (!filename) return false;
  return MANAGER_MODULE_RE.test(filename.replace(/\\/g, '/'));
}

function isManagerObfuscationDisabled() {
  const v =
    process.env.DISABLE_MANAGER_OBFUSCATION ||
    process.env.DISABLE_PIN_MANAGER_OBFUSCATION ||
    process.env.DISABLE_MASTER_OBFUSCATION;
  return v === '1' || v === 'true';
}

module.exports.transform = async function (params) {
  const result = await upstreamTransformer.transform(params);

  if (
    shouldObfuscate(params.filename) &&
    !params.options.dev &&
    !isManagerObfuscationDisabled()
  ) {
    console.log(`[OBFUSCATOR] Obfuscating: ${params.filename}`);

    try {
      let code = result.output?.[0]?.data?.code || result.code;

      if (!code && result.ast) {
        const generate = require('@babel/generator').default;
        code = generate(result.ast, {filename: params.filename}).code;
      }

      if (code) {
        const obfuscationOptions = {
          ...OBFUSCATION_OPTIONS_BASE,
          reservedStrings: collectRequireSpecifiers(code),
        };
        const obfuscated = JavaScriptObfuscator.obfuscate(
          code,
          obfuscationOptions,
        ).getObfuscatedCode();

        if (result.output?.[0]?.data?.code) {
          result.output[0].data.code = obfuscated;
        } else if (typeof result.code === 'string') {
          result.code = obfuscated;
        }

        const babel = require('@babel/core');
        result.ast = babel.parseSync(obfuscated, {
          filename: params.filename,
          sourceType: 'module',
        });

        console.log(
          `[OBFUSCATOR] ✅ Successfully obfuscated: ${params.filename}`,
        );
      } else {
        console.warn(
          `[OBFUSCATOR] ⚠️ Skipped: Unable to extract code for ${params.filename}`,
        );
      }
    } catch (err) {
      console.error(
        `[OBFUSCATOR] ❌ Error obfuscating ${params.filename}:`,
        err,
      );
      throw err;
    }
  } else if (
    shouldObfuscate(params.filename) &&
    !params.options.dev &&
    isManagerObfuscationDisabled()
  ) {
    console.log(
      `[OBFUSCATOR] Skipped (DISABLE_MANAGER_OBFUSCATION): ${params.filename}`,
    );
  }

  return result;
};
