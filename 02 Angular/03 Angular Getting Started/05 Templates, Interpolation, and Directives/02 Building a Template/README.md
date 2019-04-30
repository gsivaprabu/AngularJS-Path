# Angular Getting Started - 05 Templates, Interpolation, and Directives - 02 Building a Template

## Defining a Template in a Component

## Inline Template

```javascript
template:
"<h1>{{pageTitle}}</h1>"
```
### Inline Template (ES2015 Back Ticks method)

```javascript
template: `
<div>
<h1>{{pageTitle}}</h1>
<div>
My First Component
</div>
</div>
`
//ES 2015 Back Ticks
```
### Linked Template

```javascript
templateUrl: './product-list.component.html'
```

- Adding template