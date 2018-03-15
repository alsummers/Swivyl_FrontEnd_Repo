import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api/user"
@Injectable()
export class UserService {

  constructor(private _http: HttpClient, private _router:Router) { }
  getHeaders(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('token')}` )
  }
  createUser(userInfo){
    this._http.post(`${Sql_Api}/register`, userInfo, {headers:this.getHeaders()})
  }
  loginUser(userInfo){
    this._http.post(`${Sql_Api}/login`, userInfo, {headers: this.getHeaders()})
  }
  fetchAllUsers(companyId){
    this._http.get(`${Sql_Api}`)
  }
}
