import { Component, OnInit, Injectable, } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm, FormsModule } from '@angular/forms'
import { AuthService } from '../Services/auth.service'
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'


declare const gapi: any;



@Component({
  selector: 'app-app-login-register',
  templateUrl: './app-login-register.component.html',
  styleUrls: ['./app-login-register.component.scss']
})
export class AppLoginRegisterComponent implements OnInit {
//sanitze inputs
  constructor(private authService: AuthService, private router: Router ) { 


  }

  ngOnInit() {

  }
  loginUser(e){
    //keep the page from reloading
    e.preventDefault()
    var loginInfo ={
      email: e.target.elements[0].value,
      password: e.target.elements[1].value
    }
    return this.authService.login(loginInfo)
  }
  googleUser(e){
    this.router.navigate(['http://localhost:3000/auth/google'])
  }

//   private clientId: string = '1010280495541-7bpornr688b32rqj145v91vhd7672h7r';

//   public auth2: any;
//   public googleInit() {
//     gapi.load('auth2', () => {
//       this.auth2 = gapi.auth2.init({
//         client_id: '1010280495541-7bpornr688b32rqj145v91vhd7672h7r',
//         cookiepolicy: 'single_host_origin',
//         scope: 'profile email'
//       });
//       this.attachSignin(document.getElementById('googleBtn'));
//     });
//   }
//   public attachSignin(element) {
//     this.auth2.attachClickHandler(element, {},
//       (googleUser) => {

//         let profile = googleUser.getBasicProfile();
//         console.log('profile: ', googleUser)
//         console.log('Token || ' + googleUser.getAuthResponse().id_token);
//         console.log('ID: ' + profile.getId());
//         console.log('Name: ' + profile.getName());
//         console.log('Image URL: ' + profile.getImageUrl());
//         console.log('Email: ' + profile.getEmail());
//         //YOUR CODE HERE


//       }, (error) => {
//         alert(JSON.stringify(error, undefined, 2));
//       });
//   }

// ngAfterViewInit(){
//       this.googleInit();
// }

}
