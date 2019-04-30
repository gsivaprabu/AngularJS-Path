# 02 Setting up the Project - Webpack Basics

- Module Bundler

- Alternate to system.js

- Dynamically added script

- JS and CSS files

- Webpack can handle various file types
	- sass,css,html.js..etc

- Loaders will handle compilation

- Compile modules into a bundle
	- one big file
- Imports vendor libraries such as Angular1,Foundation, and jQuery

- webpack.common.js common webpack settings
	- export statement
	- entry point is the bundle project
	- app bundle create all files.
	- resolve (module directory navigates to node_modules)
	- module  any ts files
	- html loader
	- sass loader
	- images loader

- polyfill.ts included compatibility library for ANgular2 works.
- vendor.ts import (from node_modules)) the third part libraries
- styles.scss files
	- custom settings file
- plugins for added advantage
	- Avoid duplicate coding
	- Optimization

- webpack.dev.js file
	- set the dev server and bundle name

- Webpack production/Test Configuration later.
