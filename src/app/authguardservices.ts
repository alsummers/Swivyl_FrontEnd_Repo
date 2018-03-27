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

    constructor(private _router: Router) {
        
    }

    public canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            console.log('HEEEEEOOOOOO')
            if(!localStorage.getItem('token')) {
                this._router.navigate(['/login'])
                return observer.next(false)
            } else {
                return observer.next(true)
            }
        })
    }

    
    
}
