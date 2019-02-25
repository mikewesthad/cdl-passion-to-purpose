# Passion to Purpose

Convergence Design Lab - interactive tool for connecting passions to purpose

## Installing

```
npm install
```

## Running

```
npm run start
```

## Creating a New Version

Responses are stored under the front-end version number that the player was using, so it is important to keep the version number in package.json in sync for substantial changes, like language tweaks or updates to the data structure:

```
npm run release-it [patch, minor, major, or specific versiom]
```

This will create a new release and tag on GitHub for future reference.

## Deploying

Copy the .sample.env file, rename to .env and fill out the appropriate information. Then run:

```
npm run deploy
```
