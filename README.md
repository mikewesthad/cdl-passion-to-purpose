# Passion to Purpose

Connect your passions to your purposes to uncover new project ideas. Passion to Purpose (P2P) is a tool by [Convergence Design Lab](https://convergencedesignlab.org). Check it out [here](https://convergencedesignlab.org/p2p).

## Installing

This project uses the node and npm ecosystem to build the tool. Before attempting to install this project, make sure you have [node](https://nodejs.org/en/download/) installed. After that, clone this repository to your local machine, open up a terminal inside of the project folder and run

```
npm install
```

This will install the dependencies and make a `.env` file which contains environment variables, which are needed for deploying and connecting to a Firebase database for saving responses. You can skip the `FTP_*` variables until deploying, but you need to fill out the `REACT_APP_FIREBASE_*` variables. You can find the appropriate settings by creating a free account with [Firebase](https://firebase.google.com/) and following the "Add Firebase to your app" steps [here](https://firebase.google.com/docs/web/setup).

## Running

To build P2P and open up a local development server, open up a terminal inside of the project folder and run:

```
npm run dev
```

You will now be able to open a browser to http://localhost:3000/ to view P2P. Any changes you make to the source code will be live reloaded in the browser.

## General Application Info

This project is build with [create-react-app](https://github.com/facebook/create-react-app) and uses:

- [React](https://reactjs.org/) for DOM management
- [SASS](https://sass-lang.com/) modules for styling
- [MobX](https://mobx.js.org/) for state management
- [GSAP](https://greensock.com/gsap) for optimized animations in certain places
- [Firebase](https://firebase.google.com/) as a data store

## Development

### Workflow

There are two main branches in this repository:

- "Master" represents the latest version that has been released live.
- "Develop" is the working branch where all features should be merged.

You can create your own branch off of develop, work on a new feature and then merge it back into develop when its ready. When a new release is tested and ready to be pushed live:

1. develop should be merged into master.
2. A new version should be created (see below).
3. The deploy command can be run (see below).

### Creating a New Version

Any time a player's responses are recorded (with their permission), they are tagged with the version number (from package.json) of P2P that the player was using. It is important to keep the version number in sync for substantial changes, like language tweaks or updates to the data structure. This way, when analyzing the responses, we can tell what P2P looked like for the player at the time they played it.

```
npm run release-it [patch, minor, major, or specific version]
```

This will create a new release and tag on GitHub for easy future reference.

### Deploying

Copy the .sample.env file, rename to .env and fill out the appropriate server information. Then run:

```
npm run deploy
```

## Other Repositories

There are two other repositories related to the project - an internal visualization front-end and the back-end that powers it. Get in touch with @mikewesthad for access.
