# User Info card Directive

- Four ways to specify the directive

- Attribute
```html
<input my-directive>
```
- Brand new custom tags.
```html
<user-info-card></user-info-card>
```
- using Class
```html
<div class="my-directive" />
```
- Comment method
```html
<!-- directive: my-directive>
```

- Change the camelCase to achieve by using **-**
- This is called dasherization or snake-casing

- Using this method also acceptable
- Assign **prefix** and **-** or **:**
```html
<data-user:info-card></data-user:info-card>
<!-- <user-info-card></user-info-card> -->
```
- return template also
```javascript
return
{
	templete:"User Info Card"
}
```