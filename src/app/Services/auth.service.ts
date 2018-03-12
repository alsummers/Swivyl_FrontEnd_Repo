import { Injectable } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';

const Sql_Url = ""
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _router:Router) {}
  login(loginInfo){
    console.log(loginInfo)
    return this._http.post(`${Sql_Url}/login`, loginInfo).subscribe((e) => {
      console.log(e)
    })
  }

  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('id_token')}` )
  }





}
