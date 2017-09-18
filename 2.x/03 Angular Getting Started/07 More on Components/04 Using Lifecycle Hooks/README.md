# Angular Getting Started - 07 More on Components - 04 Using Lifecycle Hooks

Component Lifecycle
- Create
- Render
- Create and render children
- Process changes
- Destroy

### Component Lifecycle Hooks
- OnInit: Perform component initialization,retrieve data
- OnChanges: Perform action after change to input properties
- OnDestroy: Perform cleanup

### Using a Lifecycle Hook

```typescript
import { Component, OnInit } from '@angular/core';
export class ProductListComponent
implements OnInit {
	pageTitle: string = 'Product List';
	showImage: boolean = false;
	listFilter: string = 'cart';
	products: IProduct[] = […];
	ngOnInit(): void {
		console.log('In OnInit');
	}
}
```