# Getting Started - Introduction to TypeScript

##Typescript Overview

- Super set of **JavaScript**
- Transpilation
- Typescript only in developement environment
- Few topic we used
	- Static Typing
	- Interfaces
	- Class Properties
	- Public/Private Accessibility

###Static Typing
 - Specify Data Types
		- let name:string
		- let dateOfBirth:date
		- let age:number

###TypeScript Interfaces
	- Craete the same interface property
```javascript
interface Icat{
	name:string
	age:number
}
```

You can declare above like

```js
let fluffy:Icat
```


- In case use interfaces all the values are included , otherwise add using **?** symbol

```javascript
interface Icat{
	name:string
	age?:number
}
```

###TypeScript Class

#### ES2015 Class

```js
class Cat {
	constructor (name){
	}
}
```

#### Typescript Class

```js
class Cat {
	name:string
	color:string
	constructor (name){
		this.name = name
	}
}
```

#### TypeScript public private accessibility

