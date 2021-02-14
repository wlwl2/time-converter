# time-converter

An Offline Web Time Converter. Built using Gatsby.js.

Meant to be a very static site. Only using front-end/client-side/browser 
features.

See "Updating Published App" for details on how to update the app if you are 
customizing your own copy of this repository.

## Contributing/Customizing this application

DSTs and locations might change over time, so one way to make a significant
contribution would be to keep these things updated.

### Locations

Currently, each location and linked time-zone follows this format:

```js
{ 
  location: 'Boston', 
  timeZone: 'America/New_York' 
}
```

The current time zones are from tzdb-2019c -> zone1970.tab.
(https://www.iana.org/time-zones)

It would be nice to have a **separate** set of data which includes more
locations. 

**Just replace how all of this is done currently with that 
updated version.**

### DST

If Luxon/browser APIs/existing sources are already handling this, I'll see if I
can update this in the future to handle DST changes down to the hour.

### Other things to be done

- Accessibility
- Testing/Support for low-price devices
- Format customization (as in DD MM YYYY etc.)

## Publishing to GitHub

If you encounter any problems, you can try to
remove the `node_modules` directory and `package-lock.json` file.

Then run `npm i` again to reinstall node modules.

See https://github.com/babel/babel/issues/11216#issuecomment-595400322

### Updating Published App

Run `npm run deploy`.

Note: See "First-Time Set Up" if the app has not been published to GitHub yet. 

**Do not change to the gh-pages branch. There is no .gitignore file there.
Things might crash. The only time you ever need to touch the gh-pages branch 
is when you first create it (with nothing inside it) on the remote/local.**

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

Your app should automatically appear at:

https://yourusername.github.io/reponame/

All contents of the **public** folder will be moved to your repository’s
gh-pages branch. A commit is automatically created and pushed to the 
remote gh-pages branch.

## Development

Run `gatsby develop`.

## Building and Production

Run `gatsby build` to build the project and output to the root `./public`
folder.

Run `gatsby serve` after building to serve the build.

