# Passion to Purpose

Connect your passions to your purposes to uncover new project ideas. Passion to Purpose (P2P) is a tool by [Convergence Design Lab](https://convergencedesignlab.org). Check it out [here](https://convergencedesignlab.org/p2p).

## Installing

This project uses the node and npm ecosystem to build the tool. Before attempting to install this project, make sure you have [node](https://nodejs.org/en/download/) installed. After that, clone this repository to your local machine, open up a terminal inside of the project folder and run

```
npm install
```

This will install the dependencies and make a `.env` file which contains environment variables (only needed for deploying, see deploying section).

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

## Development

### Creating a New Version

Responses are stored under the front-end version number that the player was using, so it is important to keep the version number in package.json in sync for substantial changes, like language tweaks or updates to the data structure:

```
npm run release-it [patch, minor, major, or specific versiom]
```

This will create a new release and tag on GitHub for future reference.

### Deploying

Copy the .sample.env file, rename to .env and fill out the appropriate information. Then run:

```
npm run deploy
```
