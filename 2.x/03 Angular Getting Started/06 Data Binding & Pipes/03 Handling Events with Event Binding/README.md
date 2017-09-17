# Angular Getting Started - 06 Data Binding & Pipes - 03 Handling Events with Event Binding

- User events
- Refer more events [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)

```html
<button (click)='toggleImage()' class="btn btn-primary">{{showImage ? 'Hide':'Show'}} Image</button>
```

```javascript

showImage:boolean=false;

toggleImage(){
  	this.showImage=!this.showImage;
  }

```