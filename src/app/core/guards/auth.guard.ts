import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route, Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../pages/auth/services/auth.service";
import {ROUTER_UTILS} from "../utils/router.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad{

  constructor(private router: Router, private authService: AuthService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn;

    if (isLoggedIn) {
      return true;
    }

    const returnUrl = segments.map((s) => s.path).join('/');

    const { root, signIn } = ROUTER_UTILS.config.auth;

    this.router.navigate(['/', root, signIn], {
      queryParams: { returnUrl },
    });

    return false;
  }


}
