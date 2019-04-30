# 06 Angular 2 End to end - Setting up Authentication - Configuring the Sign-up Component

- Import the modules

```javascript
import { UserService } from "../adminShared/user.service";
import { Router } from "@angular/router";
```

- Then check the password match and return as if fail means **this.passwordFail = true;**
- If password match pass the
	- email and
	- password value to **this.userSVC.register(this.email, this.password1)** function
	- verify the authenticated user is available or not.
	- cancel means call the router and navigate to **/admin/login** page

```javascript
export class SignUpComponent {
  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;

  constructor(private userSVC: UserService, private router: Router) {}

  signUp() {
    if (this.password1 !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.userSVC.register(this.email, this.password1);
      this.userSVC.verifyUser();
    }
  }

  cancel() {
    this.router.navigate(["/admin/login"]);
  }
}
```

- Developed the sign-up.component.html page
- Go through below topics
	- [(ngModel)]
	- #em
	- click events
	- [hidden]

```html
<div class="row expanded align-center">
    <h1>Register an Account</h1>
</div>

<div class="row align-center">
<form>
    <div class="small-12  columns">
        <label>Username
            <input type="text" placeholder="Enter Email Address" id="email"
                [(ngModel)]="email" name="email" required #em="ngModel">
            <div [hidden]="em.valid || em.pristine" class="alert callout">
                Email is required
            </div>
        </label>
    </div>

    <div class="small-12 columns">
      <label>Password
        <input type="password" placeholder="Enter Password" id="password1"
            [(ngModel)]="password1" name="password1" required #pwd1="ngModel">
        <div [hidden]="pwd1.valid || pwd1.pristine" class="alert callout">
          Password required
        </div>
      </label>
    </div>

    <div class="small-12  columns">
      <label>Confirm
        <input type="password" placeholder="Confirm Password" id="password2"
            [(ngModel)]="password2" name="password2" required #pwd2="ngModel">
        <div [hidden]="pwd2.valid || pwd2.pristine" class="alert callout">
          Confirm Password
        </div>
      </label>
    </div>

    <div *ngIf="passwordFail" class="alert callout">
      Passwords Do Not Match
    </div>
    <div class="small-12 columns">
      <div class="expanded button-group">
        <a class="success button" (click)="signUp()">Sign Up</a>
        <a class="cancel button" (click)="cancel()">Cancel</a>
      </div>
    </div>
</form>
</div>

```