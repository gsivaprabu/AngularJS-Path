#Controllers and Modules & Creating a Module

- Main controller living in the global namespace.
	- Avoids the global namespace.
- Mainly always controllers inside the module only.
	- Module Pattern.
	- Revealing Module Pattern.
- Multiple modules in one application
- Register your controllers in the model.
- Create a module with Angular API **angular-module**

	var app = angular.module("githubViewer",[])