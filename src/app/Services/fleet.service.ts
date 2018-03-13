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
    return new HttpHeaders().set( 'Authorization', `Bearer ${localStorage.getItem('id_token')}` )
  }

  fetchFleet(){
    
    return this._http.get(`${Sql_Api}/fleet/all/3`, {headers: this.setHeader() } )
  }
}
  

