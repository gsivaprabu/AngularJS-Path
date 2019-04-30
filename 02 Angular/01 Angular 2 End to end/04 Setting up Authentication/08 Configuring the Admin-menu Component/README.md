# 08 Angular 2 End to end - Setting up Authentication - Configuring the Admin-menu Component

- Import the angular core and services
- Import roter also
- **OnInit()** for Angular2

- Using **ngOnInit()** we can get the logged in user.

```javascript
export class AdminMenuComponent implements OnInit {
  theUser: string;

  constructor(private userSVC: UserService, private router: Router) {}

  ngOnInit() {
    this.theUser = this.userSVC.loggedInUser;
    console.log("this.theUser ", this.theUser);
  }

  logout() {
    this.userSVC.logout();
    this.router.navigate([""]);
  }
}
```