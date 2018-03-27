import { Component, OnInit, Injectable, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, NgForm, FormsModule } from '@angular/forms'
import { AuthService } from '../Services/auth.service'
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { AppLoginRegisterComponent } from './app-login-register.component'


@Component({
  selector: 'app-app-login-register',
  templateUrl: './app-login-register.component.html',
  styleUrls: ['./app-login-register.component.scss']
})
export class GoogleLoginComponent implements OnInit {
//sanitze inputs
token: string;
lastname: string;
firstname: string;
  constructor(private route: ActivatedRoute, private _router: Router, private _login: AppLoginRegisterComponent) { 
    this.route.queryParams.subscribe(params => {
        this.token = params['token'];
        this.firstname = params['firstname'];
        this.lastname = params['lastname'];
    });
  }

  ngOnInit() {
    localStorage.setItem('token', this.token)
    localStorage.setItem('firstName', this.firstname)
    localStorage.setItem('lastName', this.lastname)
    return this._router.navigate(['profile/company-welcome'])
  }
  

  loginUser(e) {
    this._login.loginUser(e)
  }
}