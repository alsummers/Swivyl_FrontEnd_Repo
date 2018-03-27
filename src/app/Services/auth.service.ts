import { Injectable } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
import { first } from 'rxjs/operator/first';

const Sql_Url = "https://swivylback.herokuapp.com/api/client/login"
@Injectable()
export class AuthService {
  constructor(private _http: HttpClient, private _router:Router) {}
  token: string 
  public redirectUrl: string

  login(loginInfo){
    return this._http.post(`${Sql_Url}`, loginInfo)
  }
  Register(userInfo){
    console.log(userInfo)
    return this._http.post(`${Sql_Url}/register`, userInfo).subscribe(e => {
      this.login(userInfo)
      this._router.navigate(['/dashboard'])
    })
  }
  logout(){ 
    localStorage.removeItem('token')
    return this._router.navigate(['/login'])
  }

  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', localStorage.getItem('token'))
  }
  public isLoggedIn(): Observable<boolean>{
    return this._http.get(`${Sql_Url}`).map((res: Response) => res)
    .catch((err: any) => Observable.throw(err || 'Server Error'))
  }

  
  





}
interface Response {
  client:{
    token:String,
    firstName:String,
    lastName:String
  }
}