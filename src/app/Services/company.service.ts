import { Injectable } from '@angular/core';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api/company"
@Injectable()
export class CompanyService {

  constructor(private _http: HttpClient, private _router:Router) {
    

   }
  getHeaders(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', localStorage.getItem('token') )
  }
  
  // registerCompany(companyInfo){
  //   return this._http.post(`${Sql_Api}/company/`, companyInfo ,{headers:this.getHeaders()})
  // }
  fetchcompany(){
    return this._http.get(`${Sql_Api}`, {headers:this.getHeaders()})
  }
  updateCompany(image){
    
    return this._http
      .put(
        `${Sql_Api}/image`, image , {
          headers: new HttpHeaders({
            'Authorization': localStorage.getItem('token'),
            'Key':'companyLogo'
          })
        })
  }

  deleteCompany(){
    return this._http.delete(`${Sql_Api}`, {headers:this.getHeaders()})
  }
}
