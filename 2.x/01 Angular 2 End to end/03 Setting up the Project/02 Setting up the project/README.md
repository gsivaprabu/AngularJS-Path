# 02 Setting up the Project - Setting up the Project

- Configure Angular 2
- Webpack and TypeScript
- Routing


### Angular-CLI
Allows you to generate Angular 2 Components, Services, and Routes

### Starter Project
Webpack and Foundation based project, manual install

- karma configuration files
	- testing library
- packages.json is a configuration file
	- with npm,nodejs package manager
	- start script allows to start the webserver.
	- test for karma test
	- build to compile project using webpack
	- dependencies for require to make angular work
	- dev dependencies only for developement.
	- typescript for typscript compiler
- tsconfig.json configuration of typescript compiler
	- emitDecoratorMetadata and experimentalDecorators is important
- webpack.config.js for web pack configuration
- helper.js generate correct path for webpack.
- karma-test-shim.js for karma libraries included
- karma.conf.js for actual configuration of karma
- webpack.common.js for all webpack configurations.
- webpack.dev.js for developement purpose only.
- webpack.prod.js for production purpose only.
- webpack.test.js for testing purpose only.
- sass folder for styles
	- style.scss
	- _settings.scss
- source folder
	- all sources
	- index.html starting point
	- main.ts
	- polyfill.ts
	- vendor.ts
- app folder
	- all components modules and services
	- Each component one folder