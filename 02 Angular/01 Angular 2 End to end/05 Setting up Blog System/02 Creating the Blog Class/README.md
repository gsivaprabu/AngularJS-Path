# 01 Angular 2 End to end - 01 Setting up Blog System - 02 Creating the Blog Class

- Addin g the new class for Blog
- Add the properties for Blog

```javascript
export class Blog {
  constructor(
    public title: string,
    public content: string,
    public imgTitle?: string,
    public img?: any,
    public id?: string
  ) {}
}
```