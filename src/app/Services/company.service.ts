import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api"
@Injectable()
export class CompanyService {

  constructor(private _http: HttpClient, private _router:Router) { }
  getHeaders(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('id_token')}` )
  }
  registerCompany(companyInfo){
    this._http.post(`${Sql_Api}/company`, companyInfo ,{headers:this.getHeaders()})
  }
  fetchAllCompanies(){
    this._http.get( `${Sql_Api}/company`, {headers:this.getHeaders()} )
  }
  fetchcompany(companyId){
    this._http.get(`${Sql_Api}/company/${companyId}`, {headers:this.getHeaders()})
  }
  updateCompany(companyId){
    this._http.put(`${Sql_Api}/company/${companyId}`, {headers:this.getHeaders()} )
  }

  deleteCompany(companyId){
    this._http.delete(`${Sql_Api}/company`, {headers:this.getHeaders()})
  }
}
