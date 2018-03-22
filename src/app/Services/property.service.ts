import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api"

@Injectable()
export class PropertyService {

  constructor(private _http: HttpClient, private _router:Router) { }
  getHeaders(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization',localStorage.getItem('token') )
  }
  createProperty(propertyInfo){
    return this._http.post(`${Sql_Api}/property`, propertyInfo, {headers:this.getHeaders()})
  }
  fetchAllProperty(entityId){
    return this._http.get(`${Sql_Api}/property/company/${entityId}`, {headers:this.getHeaders()})
  }
  deleteProperty(propertyId){
    return this._http.delete(`${Sql_Api}/property/${propertyId}`, {headers:this.getHeaders()})
  }

}
