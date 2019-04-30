# 05 Setting up the Project - Understanding the Root Module


- The root module
	- app.module.ts is a root module in the app.
	- Multiple modules must have one Root Module!

	- Import **ngModule** from @angular/core

	- **BrowserModule** for browser based Events
		- **ngIf and ngFor ...**
	- AppComponent where the app starts.

	- @NgModule decorative
		- imports the modules
			- Browser Module (Always need for browser Apps)
		- declarations
			- View classes
			 	- directive
				- pipe
				- component
		- bootstrap
			- App component



## main.ts

- Runs the bootstrap method against app.module.ts
- Then app.module.ts launches the app.component.ts
- app.component.ts initial component displayed by App.
- export content - export component used in other component
- Providers are another one module import services into their module.
-