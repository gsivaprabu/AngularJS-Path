# Angular Getting Started - 07 More on Components - 05 Building Custom Pipes

### Transforming Data with Pipes
- Transform bound properties before display
-	Built-in pipes
	• date
	• number, decimal,percent, currency
	• json, slice
	• etc
- Custom pipes

### Building a Custom Pipe

```javascript
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'convertToSpaces'
})
export class ConvertToSpacesPipe
implements PipeTransform {
	transform(value: string,
	character: string): string {
	}
}
```

### Using a Custom Pipe
### Template

```html
<td>{{ product.productCode | convertToSpaces:'-'}}</td>
```

###Pipe
```javascript
transform(value: string, character: string): string {
}
```