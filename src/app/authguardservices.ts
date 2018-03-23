import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router'
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable, Observer, Subject } from 'rxjs/Rx';
import { AuthService } from './Services/auth.service';

@Injectable()

export class LoggedInAuthGuard implements CanActivate {

    public isLoggedIn: boolean = false;

    public redirectUrl: string

    constructor(private _router: Router, private _authService: AuthService) {

    }

    public canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot){
        this.redirectUrl = _state.url;
        return this.checkLogin(this.redirectUrl)
    }

    checkLogin(url: string): boolean {
        if (this.isLoggedIn) {
            return true
        } else {
            this._authService.isLoggedIn().subscribe(
                res => {
                    this.isLoggedIn = true;
                    this._router.navigateByUrl(url)
                },
                err => {
                    this.isLoggedIn = false;
                    this._authService.redirectUrl = url;
                    this._router.navigateByUrl('/login')
                }

            )
        }
    }
}