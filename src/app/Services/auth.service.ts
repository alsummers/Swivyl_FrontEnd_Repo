import { Injectable } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';

const Sql_Url = "http://localhost:3000/api/client/login"
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router:Router) {}
  login(loginInfo){
    console.log(loginInfo)
    return this._http.post(`${Sql_Url}`, loginInfo).subscribe((e) => {
      console.log(e)
      this._router.navigate(['/dashboard'])
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
    console.log()
    localStorage.removeItem('id_token')
    this._router.navigate(['/login'])  
  }

  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }





}
