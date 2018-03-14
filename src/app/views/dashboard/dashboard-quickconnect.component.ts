import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-connect',
  template: `
    <div class="card dashboard-card">
      <div class="card-body">
        <h4 class="card-title">Quick Connect</h4>
        <div class="row justify-content-center">
        <textarea rows="4" cols="70">
Need to contact your broker? Enter your message here.
</textarea>
</div>
  <div class="row">
        <button id="submit" class="btn btn-dark">Submit</button>
      </div>
    </div>
</div>
  `
})
export class DashboardQuickConnectComponent implements OnInit {


  ngOnInit() {}
  

  
}