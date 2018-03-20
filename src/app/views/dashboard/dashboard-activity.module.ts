import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../Services/log.service';
import { CompanyService } from '../../Services/company.service';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-activity-timeline',
  template: `
  <div class="card activity-timeline dashboard-card">
    <div class="card-header to-do-header dashboard-header">
          ACTIVITY TIMELINE
    </div>
    <div class="card-body">
      <div *ngFor="let log of logs">
      {{log.message}}
      </div>
    </div>
    <div class="card-footer to-do-footer dashboard-footer"><a href="#" class="card-link">View all activity</a></div>
  </div>
  `
})
export class DashboardActivityComponent implements OnInit {
  companyId: number
  logs: object
  constructor(private _logService: LogService, private _companyService: CompanyService, private _auth: AuthService ) {}
  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0])
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
       return this.grabAllCompanyLogs()
      // return console.log("Company",this.companyId)
    })
  }
   grabAllCompanyLogs() {
     this._logService.fetchAllLogs(this.companyId).subscribe(e => {
      console.log(e)
       this.logs = e
     })
  }
}

@Component({
  selector: 'app-quick-connect',
  template: `
    <div class="card dashboard-card quick-connect">
      <div class="card-header to-do-header dashboard-header">
        <p class="card-title">QUICK CONNECT</p>
      </div>
      <div class="card-body connect-box">
        <div class="row justify-content-center">
        <style>::placeholder {
          color: blue;
          opacity: 0.35;
          font-weight: bold;
      }</style>
          <textarea class="connect-textbox" rows="8" cols="75" placeholder="Need to contact your broker?&#10;Enter your message here."></textarea>
        </div>
      </div>
      <div class="card-footer to-do-footer dashboard-footer">
      <button id="submit" class="btn btn-dark">Submit</button>
      </div>
    </div>
  `
})
export class DashboardQuickConnectComponent implements OnInit {


  ngOnInit() {}
  

  
}