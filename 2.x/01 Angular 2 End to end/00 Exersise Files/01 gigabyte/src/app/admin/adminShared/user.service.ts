import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import * as  firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
  userLoggedIn: boolean = false;
  constructor(private router: Router) {
    firebase.initializeApp({
      apiKey: "AIzaSyDThsQmdNX_2rIADIttnanzlIjM7UegC18",
      authDomain: "gigabytegames-6f4af.firebaseapp.com",
      databaseURL: "https://gigabytegames-6f4af.firebaseio.com",
      projectId: "gigabytegames-6f4af",
      storageBucket: "gigabytegames-6f4af.appspot.com",
      messagingSenderId: "793776193913"
    });
  }

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
