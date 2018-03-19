import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-timeline',
  template: `
  <div class="card activity-timeline dashboard-card">
    <div class="card-header to-do-header dashboard-header">
          ACTIVITY TIMELINE
    </div>
      <div class="card-body">
        <p class="card-title">fdjksalfjdkl; fjdksla; fdjskl;f jdsklaf djskla;f jdskal; fjdksl;f jdskl;a</p>
      </div>
      <div class="card-footer to-do-footer dashboard-footer"><a href="#" class="card-link">View all activity</a></div>
    </div>
  `
})
export class DashboardActivityComponent implements OnInit {


  ngOnInit() {}
  

  
}

@Component({
  selector: 'app-quick-connect',
  template: `
    <div class="card dashboard-card quick-connect">
      <div class="card-body">
        <h4 class="card-title">Quick Connect</h4>
        <div class="row justify-content-center">
        <textarea rows="8" cols="75" placeholder="Need to contact your broker? Enter your message here.">
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