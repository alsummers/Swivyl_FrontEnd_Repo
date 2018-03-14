import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-connect',
  template: `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Quick Connect</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-dark">Save</button>
      </div>
    </div>
  </div>
  `
})
export class DashboardQuickConnectComponent implements OnInit {


  ngOnInit() {}
  

  
}