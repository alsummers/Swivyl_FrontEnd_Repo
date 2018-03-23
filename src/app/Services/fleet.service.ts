import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api"
@Injectable()
export class FleetService {

  constructor(private _http: HttpClient, private _router:Router) { }

  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', localStorage.getItem('token') )
  }
  createFleet(fleetInfo){
    return this._http.post(`${Sql_Api}/fleet`, fleetInfo ,{headers:this.setHeader() })
  }
  fetchAllFleet(){
    return this._http.get(`${Sql_Api}/fleet/all/3`, {headers: this.setHeader() })
  }
  fetchFleet(fleetId){
    return this._http.get(`${Sql_Api}/fleet/${fleetId}`, {headers: this.setHeader() })
  }
  fetchCompanyFleet(companyId){
    return this._http.get(`${Sql_Api}/fleet/company/${companyId}`, {headers: this.setHeader()})
  }
  updateFleet(fleetInfo){
    return this._http.put(`${Sql_Api}/fleet/${fleetInfo.id}`, fleetInfo, {headers:this.setHeader()})
  }

  deleteFleet(fleetId){
    return this._http.delete(`${Sql_Api}/fleet/${fleetId}`, {headers:this.setHeader()})
  }
}
  

