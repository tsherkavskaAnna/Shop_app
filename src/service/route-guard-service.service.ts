import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateFn, UrlTree, Router} from '@angular/router';
import { AuthappService } from './authapp.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authBasis: AuthappService , private route: Router) {}
  
canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> =>{
    if(!this.authBasis.isLogged()) {
      this.route.navigate(['login']);
      return false;
    }
    else {
      return true;
    }
  }
}
