const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro: custom transformer obfuscates PIN_* / RD_* manager modules in release (see transformer.js)
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('./transformer'),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
