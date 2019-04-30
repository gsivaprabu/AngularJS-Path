# 03 Angular 2 End to end - Setting up Authentication - Configuring the Admin Module

- Importing all modules to admin.modules.ts

```javascript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AdminComponent } from "./adminComponent/admin.component";
import { AdminMenuComponent } from "./adminMenu/admin-menu.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signUp/sign-up.component";

import { UserService } from "./adminShared/user.service";
```

- Then add router concept

```javascript
const AdminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignUpComponent },
      { path: "", component: AdminMenuComponent, canActivate: [UserService] }
    ]
  }
];
```
- Adding import,export,declarations and providers in @NgModule

```javascript
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    LoginComponent,
    SignUpComponent
  ],
  providers: [UserService]
})
```


- Adding  <router-outlet> template in admin.component.ts

```javascript
import { Component } from "@angular/core";
@Component({
  template: "<router-outlet></router-outlet>"
})
export class AdminComponent { }
```

- In app.module.ts we can add the below things
- Include AdminModule at @NgModule

```javascript
import {AdminModule} from './admin/admin.module';

@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
```