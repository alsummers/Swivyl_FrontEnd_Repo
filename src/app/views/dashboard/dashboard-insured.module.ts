import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insured',
  template: `
  <div class="row">
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
      </div>
    </div>
    <div class="insure-col col-sm-3 col-md-3">
      <div class="card insured-card">
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