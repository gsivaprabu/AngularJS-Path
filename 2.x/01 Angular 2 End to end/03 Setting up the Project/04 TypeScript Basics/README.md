# 04 Setting up the Project - TypeScript Basics

- Angular2 Developement languages
 - Dart
 - JavaScript
 - TypeScript


### TypeScript

- Compiles to standard JavaScript
- Uses ES6 syntax (Classes,modules..etc)
- Easy to learn if you know JavaScript
- Static Typing

```javascript
let isDone: boolean = false; //boolean
```

```javascript
let decimal: number = 6; //number
let hex: number = 0xf00d;
let binary: number = 0b1010
let octal: number = 0o744;
```

```javascript
let color: string = 'blue'; //string
let sentence: string = 'My favorite color is ${ color }';

let list: number[] = [1, 2,3];//Array
let list: Array<number> = [1,2, 3];

let theValue: any = 5; //any type

```

```javascript
function a(){
	let first = 1;
if(first) {
	let second = 2; //scoped to if statement
}
return second; // error, not available
}
```

```javascript
const appID = 123456; // cannot be changed

```

#### Decorator
- Added @ symbol

```javascript
@component({
selector: 'my-app',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
```

#### Classes
- Classes is backbone of Angular
- Component based approach

```javascript
class Greeter {
greeting: string;
constructor(message: string){
this.greeting = message;
}
greet() {
return `Hello,this.greeting`;
}
}
```

#### Interfaces

```javascript

interface LabelledValue { //interface
label: string;
}
function printLabel(labelledObj:LabelledValue) {
console.log(labelledObj.label);
}

let myObj = {size: 10, // size is optional,label is required
label:"Size 10 Object"};
printLabel(myObj);

```

#### Export

```javascript
export class someClass { }

```

#### Import
```javascript
import { someClass } from "./someClass";

```

#### tsconfig.json file

```json
{
	"compilerOptions": {
	"target": "es5",
	"module": "commonjs",
	"moduleResolution": "node",
	"sourceMap": true,
	"emitDecoratorMetadata": true,
	"experimentalDecorators": true,
	"removeComments": false,
	"noImplicitAny": true,
	"suppressImplicitAnyIndexErrors": true
	}
}
```