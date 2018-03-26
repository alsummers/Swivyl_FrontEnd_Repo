import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './company-profile.component.html',
  
})
export class CompanyWelcomeProfileComponent implements OnInit {

  // constructor(){}

  // ngOnInit() {}
token: string;
lastname: string;
firstname: string;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.firstname = params['firstname'];
      this.lastname = params['lastname'];
  });
  }

  ngOnInit() {

    // localStorage.setItem('token', this.token)
    // localStorage.setItem('firstName', this.firstname)
    // localStorage.setItem('lastName', this.lastname)

  }
  

}
