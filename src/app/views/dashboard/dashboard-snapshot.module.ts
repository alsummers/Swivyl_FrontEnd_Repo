import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../Services/log.service';
import { CompanyService } from '../../Services/company.service';
import { AuthService } from '../../Services/auth.service';
@Component({ //placeholder until used
  selector: 'app-snapshot',
  template: `
  <div class="card activity-timeline dashboard-card">
    <div class="card-header to-do-header dashboard-header">
          YOUR PREMIUM SNAPSHOT
    </div>
      <div class="card-body">
      </div>
      <div class="card-footer to-do-footer dashboard-footer"></div>
    </div>
  `
})
export class DashboardSnapshotComponent implements OnInit {

  ngOnInit() {

    }
  }