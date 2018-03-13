import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PropertyService {

  constructor(private _http: HttpClient, private _router:Router) { }

}
