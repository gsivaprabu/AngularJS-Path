# Angular Getting Started - 06 Data Binding & Pipes - 06 Checklists and Summary

### Data Binding

Interpolation:
```html
{{pageTitle}}
```

Property Binding:
```html
<img [src]='product.imageUrl'>
```

Event Binding:
```html
<button (click)='toggleImage()'>
```

Two-Way Binding:
```html
<input [(ngModel)]='listFilter'/>
```

### ngModel

- Banana in the box.
- FormsModule from the ANgular Forms package.
- Imports array of an appropriate module.


### Pipes

- Pipe character |
- Pipe name
- Pipe parameters
- Separated with colons

#### Example

```html
{{ product.price |currency:'USD':true:'1.2-2' }}
```

### Summary

- Property Binding
- Handling Events with Event Binding
- Handling Input with Two-way Binding
- Transforming Data with Pipes