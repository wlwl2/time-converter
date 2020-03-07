# time-converter

An Offline Web Time Converter.

## Publishing to GitHub

### Updating Published App

Run `npm run deploy`.

Note: See "First-Time Set Up" if the app has not been published to GitHub yet. 

**Do not change to the gh-pages branch. There is no .gitignore file there.
Things might crash.**

When you run `npm run deploy` all contents of the public folder will be moved to
your repository’s gh-pages branch.

### First-Time Set-Up

1. Update `./gatsby-config.js`.
```js
// In gatsby-config.js:
module.exports = {
  pathPrefix: "/reponame",
}
```

2. Update `./package.json`
```js
// package.json
"scripts": {
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
}
```

3. Run `npm run deploy`.


