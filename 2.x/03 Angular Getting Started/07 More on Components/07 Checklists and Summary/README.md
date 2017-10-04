# Angular Getting Started - 07 More on Components - 07 Checklists and Summary

### Checklist: Interfaces

Defines custom types

Creating interfaces:
- **interface** keyword
- export it

Implementing interfaces:
- **implements** keyword & interface name
- Write code for each property & method

### Checklist: Encapsulating Styles

styles **property**
- Specify an array of style strings

styleUrls **property**
- Specify an array of stylesheet paths

### Checklist: Using Lifecycle Hooks

- Import the lifecycle hook interface
- Implement the lifecycle hook interface
- Write code for the hook method

### Checklist: Building a Custom Pipe

- Import Pipe and PipeTransform
- Create a class that implementsPipeTransform
  - export the class
- Write code for the Transform method
- Decorate the class with the Pipe decorator


### Checklist: Using a Custom Pipe

- Import the custom pipe
- Add the pipe to the declarations array of an Angular module
- Any template associated with a component that is also declared in that Angular module can use that pipe 
- Use the Pipe in the template
  - Pipe character
  - Pipe name
  - Pipe arguments (separated with colons)

## Summary

- Defining an Interface
- Encapsulating Component Styles
- Using Lifecycle Hooks
- Building a Custom Pipe