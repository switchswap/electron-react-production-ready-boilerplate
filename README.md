# electron-react-production-ready-boilerplate
Finally an electron-react-typescript boilerplate that works!

A boilerplate for a React based Electron app using Parcel and Typescript. It outputs a production-ready build with an installer and obfuscated code and has been tested to work in Windows and MacOS.

## How to use

```
yarn dev
```
or
```
Terminal 1> yarn:bundle
Terminal 2> yarn:electron
```

To start the development version with hot module reloading.
The two terminal setup is if you'll be rebuilding the main process code frequently

```
yarn package
```

To build the distributable application with obfuscation.

All bundled code will be in the `build` folder and the distributable application will be in the `dist` folder.

## Folder Structure

| Folder | Description                                                                     |
| ------ | ------------------------------------------------------------------------------- |
| build  | Folder created by parcel for the bundled code                                   |
| dist   | Folder created by electron-builder for the finished electron app distributables |
| src    | All source code goes here                                                       |

The src folder contains:

| Folder   | Description                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
| @types   | Source code for shared types between the main and render process goes here                  |
| main     | Source code for the electron main process goes here (This creates the main window)          |
| renderer | Source code for the electron renderer process goes here (This is your front end react code) |

### src/main/preload.js

This script exposes `ipcRenderer` to the renderer process for IPC callback support.

## Scripts

| Command        | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| build:main     | Bundle the main TS for release                                     |
| build:renderer | Bundle the renderer TS for release                                 |
| build          | Parcel will bundle everything for release                          |
| clean:build    | Removes all files from build/                                      |
| clean:dist     | Removes all files from dist/                                       |
| copy:preload   | Copy the preload script used by electron to the build folder       |
| copy:all       | Run all copy scripts (If you define additional, just add to this)  |
| dev:bundle     | Concurrently runs dev:main and dev:renderer                        |
| dev:main       | Bundle the main TS                                                 |
| dev:electron   | Starts up the electron process                                     |
| dev:renderer   | Bundle and watch the renderer TS and start Parcel's dev server     |
| dev:wait       | Waits for the main TS to bundle and dev server to start            |
| dev            | Develop the electron app - Parcel will start a server with HMR     |
| package        | Build the electron app - Parcel will bundle everything for release |
| lint:js        | Lint JS/TS with ESLint and fix errors                              |
| lint:prettier  | Lint JS/TS with Prettier                                           |
| lint:ts        | Lint TS files                                                      |
| lint           | Run all linters                                                    |

## About

This boilerplate uses:

- ESLint
- Parcel JS
- Prettier
- React
- Typescript
- Parcel-Obfuscator
