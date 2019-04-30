# Getting Started - Working with JavaScript Modules and SystemJs

- Javascript Modules organized your code into small
- Application slitted into lot of small files.
- export {} and
- import {} for module management.

### What is **SystemJS** ?

- No need to include all files like
```js
<script src="/javascripts/application.js" type="text/javascript" charset="utf-8" async defer></script>
```

- Just need to call
```js
<script src="system.js">
<script src="config.js">
```
***system.config.js***

```js
var config = {
    map: {
        'app': '/folder/app'
    },
    packages: {
        'app': { main: 'main.js' }
    }
}

```