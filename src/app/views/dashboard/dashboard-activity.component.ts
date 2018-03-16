import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-timeline',
  template: `
  <div class="card activity-timeline dashboard-card">
      <div class="card-body">
        <h4 class="card-title">Activity Timeline</h4>
        {{user.log}}
        <a href="#" class="card-link">View all history</a>
      </div>
    </div>
  `
})
export class DashboardActivityComponent implements OnInit {


  ngOnInit() {}
  

  
}