import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm, FormsModule } from '@angular/forms'
import { AuthService } from '../Services/auth.service'
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-app-login-register',
  templateUrl: './app-login-register.component.html',
  styleUrls: ['./app-login-register.component.scss']
})
export class AppLoginRegisterComponent implements OnInit {
//sanitze inputs
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }
  loginUser(e){
    e.preventDefault()
    var loginInfo ={
      email: e.target.elements[0].value,
      password: e.target.elements[1].value
    }
    console.log(loginInfo)
    return this.authService.login(loginInfo)
  }
}
