import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../pages/auth/services/auth.service";
import {ROUTER_UTILS} from "../utils/router.utils";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanLoad {

  constructor(private router: Router, private authService: AuthService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.authService.isLoggedIn;

    if (isLoggedIn) {
      this.router.navigate([ROUTER_UTILS.config.base.home]);
      return false;
    }

    return true;
  }
}
