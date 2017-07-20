# Directive Scopes

- How to connect two different scopes in same directives.
- Same directives in same page means looking same object only
- So added the scope to **true**
```javascript
		scope:true
```
- There are **three** different way to setup the relationship between the directive scope and the containing controller scope.

### Isolated scopes

- Using different scope

```javascript
        scope: {
        	user:'='
        }
```

```html
<data-user:info-card user="user1"></data-user:info-card>
<data-user:info-card user="user2"></data-user:info-card>
```
#### Using multiplie Object

```javascript
    $scope.user1 = {
            name: 'Pranav Sivaprabu',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Sivaprabu',
                'Naveena',
                'Karthick'
            ]
        },
        $scope.user2 = {
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ]
        }
```