# hike one

Website for Hike One

## Getting Started

This project requires [NodeJS](http://nodejs.org/) and NPM (comes with NodeJS) to be installed. All other project dependencies can be installed via NPM.

Install node packages:  
`npm install`

Build and serve the website  
`npm start`

The site will now be served on   
`http://localhost:5000`

## Development

For development instead of `npm start` run:  
`npm run dev`

This will build and then serve the website with **webpack-dev-server** on:  
`http://localhost:8080`

**webpack-dev-server** is also watching for changes and automatically reloads the page.


## Stack
[Webpack](https://webpack.js.org/concepts/)
for bundling and other build tasks (see the `webpack.config.babel.js` file in the root directory)  
[Babel](https://babeljs.io/) 
for transpiling es6 JavaScript Code  
[Preact](https://github.com/developit/preact) super lightweight version of React.js  
[Preact-Router](https://github.com/developit/preact-router) URL router for Preact  
[Preact-Compat](https://github.com/developit/preact-compat) React compatibility layer for Preact  
[Less](http://lesscss.org/) as css pre-processor  
[CSS-modules](## CSS-modules) for real modular css

## Structure
* `package.json` contains i.a. all npm dependencies and executable scripts    
* `webpack.config.babel.js` file in the root contains webpack build files 
* `dist`folder containing production build (after `npm run build` is done)   
* `src`folder containing all project specific files  
* `src/index.js` main javascript file where preact app gets initialised
* `src/index.html` main html file. Copied to dist by a webpack task
* `src/views` all main routes with their own folder, containing `.js`, `.less` and other assets. All assets are imported in the `.js` file   
* `src/components` all components that can be imported in views or other components. Also with their own folder containing `.js`, `.less` and other assets. All assets are imported in the `.js` file 
* `src/components/app.js` main routes are defined here
* `src/assets` for all general assets, like fonts, icons etc. Copied to `dist` by a webpack task
* `src/vendor` location for vendor assets like `normalize.css`
* `src/styles` general global styles and also helpers, mixins & variables that can be used in other css-modules


## CSS-modules

This project is set up to support [CSS Modules](https://github.com/css-modules/css-modules).  By default, styles in `src/styles` are **global** (not using CSS Modules) to make global declarations, imports and helpers easy to declare.  Styles in `src/components` and `src/views` are loaded as CSS Modules via [Webpack's css-loader](https://github.com/webpack/css-loader#css-modules).  Modular CSS namespaces class names, and when imported into JavaScript returns a mapping of canonical (unmodified) CSS classes to their local (namespaced/suffixed) counterparts.

When imported, this LESS/CSS:

```css
.redText { color:red; }
.blueText { color:blue; }
```

... returns the following map:

```js
import styles from './style.css';
console.log(styles);
// {
//   redText: 'redText_local_9gt72',
//   blueText: 'blueText_local_9gt72'
// }
```

Note that the suffix for local classNames is generated based on an md5 hash of the file. Changing the file changes the hash. 
You can read more about css-modules on [CSS-tricks](https://css-tricks.com/css-modules-part-1-need/)

## Git Commit Messages

Follows the [Angular git commit guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) 

