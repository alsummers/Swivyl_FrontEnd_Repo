import { Injectable } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';

const Sql_Url = "http://localhost:3000/api/client/login"
@Injectable()
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  login(loginInfo){
    return this._http.post(`${Sql_Url}`, loginInfo).subscribe((loginInfo: Response) => {
      console.log(loginInfo.client.firstName)
      localStorage.setItem('token', `${loginInfo.client.token}`  )
      this._router.navigate(['/profile/company-welcome'])
    })
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





}
interface Response {
  client:{
    token:String
  }
}