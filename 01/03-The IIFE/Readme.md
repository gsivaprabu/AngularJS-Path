#The IIFE

- Local variables we can access only inside the function.
- Avoid Global Variables.
- Anonymous function.
	An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.

-


###Abstraction

Abstraction is a mechanism that allows you to model the current part of the working problem, either by inheritance (specialization) or composition. JavaScript achieves specialization by inheritance, and composition by letting class instances be the values of other objects' attributes.

The JavaScript Function class inherits from the Object class (this demonstrates specialization of the model) and the Function.prototype property is an instance of Object (this demonstrates composition).

var foo = function () {};

// logs "foo is a Function: true"
console.log('foo is a Function: ' + (foo instanceof Function));

// logs "foo.prototype is an Object: true"
console.log('foo.prototype is an Object: ' + (foo.prototype instanceof Object));
