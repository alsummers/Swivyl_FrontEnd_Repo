import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-timeline',
  template: `
  <div class="col">
  <div class="card">
      <div class="card-body">
        <h4 class="card-title">Activity Timeline</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">View all history</a>
      </div>
    </div>
</div>
  `
})
export class DashboardActivityComponent implements OnInit {


  ngOnInit() {}
  

  
}