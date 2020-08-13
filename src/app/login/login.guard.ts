import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
  })


export class LoginGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            let lodgged = this.authService.loggedIn();
            if(lodgged){
                return true;
            }
           this.router.navigate(["login"]);
           return false;
    }





}