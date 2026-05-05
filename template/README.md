# MasterTemplate

A **React Native** template for building and running an **Android** app. Tool versions used in CI are pinned in this repo; deviating from them often leads to Metro/Gradle issues or Node incompatibilities.

## Recommended environment

| Tool | Version / requirement |
|------|------------------------|
| **Node.js** | **≥ 20.19.4** (see `engines` in `package.json`) — required for React Native 0.81 and Metro |
| **npm** | **10.x** — bundled with Node 20; you usually do not need to downgrade or swap it |
| **JDK (Java)** | **17** — required for Android Gradle Plugin and Android builds (avoid JDK 8/11; JDK 21 may work, but **17** matches AGP 8, this template, and CI) |
| **Android SDK** | Install via Android Studio or `cmdline-tools`; you need the platform/target and build-tools (this project uses `compileSdk` / `targetSdk` **36**, `buildToolsVersion` **36.0.0** — see `android/build.gradle`) |
| **Gradle** | Pinned by the **Gradle wrapper** in the repo (`android/gradle/wrapper`); no standalone install needed |

Before your first build, run `npm install` in the project directory (or `yarn` / `pnpm` if you use them — keep it consistent with your lockfile).

## Scripts

- `npm run android` — `react-native run-android` (build and run on a device or emulator)  
- `npm run ios` — `react-native run-ios` (build and run on the iOS Simulator)  
- `npm run lint` — `eslint .`  
- `npm start` — `react-native start` (Metro bundler)  
- `npm run clean` — `npx react-native-clean` (clear caches)
