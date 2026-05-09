# MasterTemplate

## Recommended environment

| Tool | Version / requirement |
|------|------------------------|
| **Node.js** | **≥ 20.19.4** (`engines` in this folder’s `package.json`) |
| **npm** | **10.x** (with Node 20) |
| **JDK** | **17** |
| **Android SDK** | See `android/build.gradle` (`compileSdk` / `targetSdk` **36**) |

**JS/UI stack:** versions are pinned in `package.json` for RN **0.81.5**; upgrade RN and related libs together.

## Scripts

- `npm run android` / `npm run ios` — run the app  
- `npm start` — Metro  
- `npm run lint` — ESLint  
- `npm run clean` — `npx react-native-clean`
