import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 // To DO: Generate cards based on data w/ update elements
@Component({
  selector: 'app-insured',
  template: `
  <div class="row">
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>3 Pending Claims</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>36 Employees</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>27 Vehicles</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>$1.37M in Value</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>$148K Premium</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>6 Active Members</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      <p>4 Days to Renewal</p>
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="customize-insure">
        <a href="#">+ Customize</a>
      </div>
    </div>
  </div>
    
  `
})
export class DashboardInsuredComponent implements OnInit {


  ngOnInit() { }



}