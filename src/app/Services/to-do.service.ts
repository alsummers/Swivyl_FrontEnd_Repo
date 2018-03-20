import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
const Sql_Api = "http://localhost:3000/api"

@Injectable()
export class ToDoService {

  constructor(private _http: HttpClient, private _router:Router) { }

  setHeader(): HttpHeaders {
    return new HttpHeaders().set( 'Authorization', localStorage.getItem('token') )
  }
  createToDo(toDoTask){
    return this._http.post(`${Sql_Api}/todo`, toDoTask ,{headers:this.setHeader() })
  }
  fetchCompanyTasks(companyId){
    return this._http.get(`${Sql_Api}/todo/all/${companyId}`, {headers: this.setHeader()})
  }
  updateTask(toDoTask){
    return this._http.put(`${Sql_Api}/todo/${toDoTask.uid}`, toDoTask, {headers:this.setHeader()})
  }
  deleteTask(toDoTask){
    return this._http.delete(`${Sql_Api}/todo/${toDoTask.uid}`, {headers:this.setHeader()})
  }
}
