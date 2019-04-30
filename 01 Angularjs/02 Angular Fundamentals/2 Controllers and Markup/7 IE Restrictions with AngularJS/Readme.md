# IE Restrictions with AngularJS

- Support old browser means you have to done **Polyfill JSON.stringify**
- [Refer here](http://www.codeproject.com/Articles/369858/Writing-polyfills-in-Javascript)
- IE have some restrictions on custom tags.
- Custom tags not recognized in older IE browsers.


For Example:-

<ng-test>
</ng-test>

Use instead of above

<div ng-test>

</div>

## Quiz

1. What do you need to do to support older versions of IE with Angular ?

	- Polyfill.JSON.stringify
	- Avoid custom tags

2. What are the three ways directives can be written ?

	- Tags
	- Attributes
	- Class Names
	***All Directives not supported all formats***