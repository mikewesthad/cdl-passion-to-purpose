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

## Deploying a New Version

Copy the .sample.env file, rename to .env and fill out the appropriate information.

Responses are stored by the front-end version number so it is important to keep the version number in sync for substantial changes to the API:

```
npm run release-it [patch, minor, major, or specific versiom]
```

For deploying:

```
npm run deploy
```
