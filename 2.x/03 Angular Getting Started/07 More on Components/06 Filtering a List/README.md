# Angular Getting Started - 07 More on Components - 06 Filtering a List

- Filtering Data

```html
<tr*ngFor='let product of products | productFilter: listFilter'>
```

- Angular doesn't offer such pipes because they perform poorly and prevent aggressive minification.
- The Angular team and many experienced Angular developers strongly recommend moving filtering and sorting logic into the component itself.


- Using getter and setter properties

```javascript
  
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
  }
  
  ```

  - When the data bindings need the value use **getter**
  - When the user modifies the value use **setter**


```javascript
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

```

  - For more about [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


  - Change in template also
  ```html
  	<tr *ngFor='let product of filteredProducts'>
  ```