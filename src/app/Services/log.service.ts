import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
const Sql_Api = "https://swivylback.herokuapp.com/api"
@Injectable()
export class LogService {

  constructor(private _http: HttpClient, private _router: Router) { }
  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', localStorage.getItem('token') )
  }
  fetchAllLogs(companyId) {
    return this._http.get(`${Sql_Api}/log/all/${companyId}`, {headers: this.setHeader() })
  }
  fetchAllClients() {
    return this._http.get(`${Sql_Api}/client/all`, {headers: this.setHeader()})
  }
}
