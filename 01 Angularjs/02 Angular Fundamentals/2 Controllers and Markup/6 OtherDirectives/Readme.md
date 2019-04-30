# Other Directives - I

- ngApp
- ngBind
- ngBindTemplate
- ngBindHtml
- ngBindHtmlUnsafe


## ng-bind

Bind single value

<h2 ng-bind="{{event.name}}"> </h2>


## ng-bind-template

Bind multiple values

<h2 ng-bind-template="{{event.name}} {{event.date}}"> </h2>


## ng-bind-html and ng-bind-html-unsafe

* Need to call  <script src="/lib/angular/angular-sanitize.js"></script> library

<div ng-bind-html="snippet">
	some title
</div>

$scope.snippet ='<<span style="color:red">Hi ngBindHtml</span>';

- ngHide
- ngShow

- ng-cloak


- ng-style
- ngClass

We used in ng-repeat.
- ngClassEven
- ngClassOdd


#Quiz

1. What is the purpose of ng-cloak directive ?

To avoid a flash of unbound html

2. ng-bind supports multiple binds?

No, ng-bind not supported.
The ng-bind-template directive is the directive only support multiple bindings

3. The ngClass directive has two companion directives. What are they ?

- ngClassEven
- ngClassOdd

# Other Directives - II

- ngDisabled
- ngChecked
- ngMultiple
- ngReadonly
- ngSelected

The above directives are  will either add or remove their respective attributes. when you set true or false



- ng-Form

**HTML spec does not allow forms to be nested.** So we use ng-Form nested in other form.Create smaller section of forms

- ng-submit
	- Call method on your scope


- ng-href => Immediately request the URL
- ng-src => After Angular is loaded.

- ng-non-bindable

#Quiz


1. What does ng-form allow you to do ?

	Nested Forms , nest forms within each other forms.

2. Which directives delays fetching an image until after binding has occurred ?

	ng-src

3. Why do we need the ngDisabled directive ?

	Because of ambiguities in th HTML spec [Control in many browsers]
