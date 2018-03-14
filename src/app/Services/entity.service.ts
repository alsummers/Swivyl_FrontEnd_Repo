import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api"

@Injectable()
export class EntityService {

  constructor(private _http: HttpClient, private _router:Router) { }
  getHeaders(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('id_token')}` )
  }
  createEntity(entityInfo){
    return this._http.post(`${Sql_Api}/entity`, entityInfo, {headers:this.getHeaders()})
  }
  fetchAllEntities(companyId){
    return this._http.get(`${Sql_Api}/entity/all/${companyId}`, {headers:this.getHeaders()})
  }
  fetchEntity(entityId){
    return this._http.get(`${Sql_Api}/entity/${entityId}`, {headers:this.getHeaders()})
  }
  updateEntity(entityInfo){
    return this._http.put(`${Sql_Api}/entity`, entityInfo, {headers:this.getHeaders()})
  }
  deleteEntity(entityId){
    return this._http.delete(`${Sql_Api}/entity/${entityId}`, {headers:this.getHeaders()})
  }
}
