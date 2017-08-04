# 04 Angular 2 End to end - Setting up Authentication - Creating a Service

- Services in Angular we can push the data to the components
- Inject the Dependency
- CanActivate **We can check the user logined or not**
- ActivatedRouteSnapshot,RouterStateSnapshot would be processed the router.

```javascript
import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
```

- Add the interface CanActive in UserService

```javascript
@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
}
```
- Can active and Inactive

```javascript
@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
    if (this.userLoggedIn) {
      return true;
    }

    this.router.navigate(["/admin/login"]);
    return false;
  }
}
```

- Add navbar component template below code

```html
 <li class="nav-menu"><a [routerLink]="['/admin']">Admin Area</a></li>
```