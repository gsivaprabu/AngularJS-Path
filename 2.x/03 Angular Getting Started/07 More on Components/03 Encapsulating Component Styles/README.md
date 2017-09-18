# Angular Getting Started - 07 More on Components - 03 Encapsulating Component Styles


#### Handling Unique Component Styles
- Templates sometimes require unique styles
- We can inline the styles directly into the HTML
- We can build an external stylesheet and link it in index.html
- There is a better way!

#### styles

```typescript
@Component({
selector: 'pm-products',
templateUrl: './product-list.component.html',
styles: ['thead {color: #337AB7;}']})
```

#### styleUrls

```typescript
@Component({
selector: 'pm-products',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']})
```