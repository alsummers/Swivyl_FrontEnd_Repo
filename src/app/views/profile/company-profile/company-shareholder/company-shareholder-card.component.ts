import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareholder-card',  
  template: `
  <div class="row justify-content-center">
    <div class="col-sm-8">
    <div class="row">
<div class="container">
<div class="row">
      <div class="col">
        <div class ="card">
          <span>{{fleets.year}}</span>
        </div>
      </div>
      <div class="col">
        <div class="card">
            <span>{{vehicle.id}}</span>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <span>{{vehicle.id}}</span>
        </div>
      </div>
      </div>
      <div class = "row">
      <div class="col-sm-4">
        <div class="card">
          <span>{{vehicle.id}}</span>
          </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <span>{{vehicle.id}}</span>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card">
          <span>{{vehicle.id}}</span>
        </div>
        <div class="col-sm-2">
        <div class="card">
          <span>{{vehicle.id}}</span>
        </div>
      </div>
      </div> 
    </div>
  </div>
  `
})
export class CompanyShareholderCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
