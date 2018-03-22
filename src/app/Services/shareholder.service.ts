import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
const Sql_Api = "http://localhost:3000/api"
@Injectable()
export class ShareholderService {

  constructor(private _http: HttpClient, private _router: Router) { }
  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', localStorage.getItem('token') )
  }
  createShareholder(sholderInfo){
    return this._http.post(`${Sql_Api}/shareholders`, sholderInfo, {headers: this.setHeader()})
  }
  fetchAllShareholders(companyId){
    return this._http.get(`${Sql_Api}/shareholders/all/${companyId}`, {headers: this.setHeader()})
  }
  fetchShareholder(sholderId){
    return this._http.get(`${Sql_Api}/shareholders/${sholderId}`, {headers:this.getHeaders()})
  }
  updateShareholder(sholderInfo){
    return this._http.put(`${Sql_Api}/shareholders`, sholderInfo, {headers:this.getHeaders()})
  }
  deleteShareholder(sholderId){
    return this._http.delete(`${Sql_Api}/shareholders/${sholderId}`, {headers:this.getHeaders()})
  }
}
