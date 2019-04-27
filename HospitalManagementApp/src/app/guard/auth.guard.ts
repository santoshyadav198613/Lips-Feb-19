import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  CanActivateChild, CanLoad,
  Route, UrlSegment, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';
import { PatientRegistrationComponent } from '../patient/patient-registration/patient-registration.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<PatientRegistrationComponent> {

  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isAdmin ? true : false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canDeactivate(component: PatientRegistrationComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.isChanged ? false : true; 
  }
}
