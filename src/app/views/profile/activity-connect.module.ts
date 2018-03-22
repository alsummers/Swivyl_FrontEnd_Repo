import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
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
      <div *ngFor="let log of logs | slice: 0:8">
      {{log.createdAt | date:"MM/dd/yy"}}
      {{log.clientName}}
      {{log.message}}
      </div>
    </div>
    <div class="card-footer to-do-footer dashboard-footer">
    <button class="btn btn-lg btn-dark" (click)="open(viewall)">View All Activity</button>
        </div>
  </div>
  <ng-template #viewall let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Activity Timeline</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div *ngFor="let log of logs">
      {{log.clientName}}
      {{log.message}}
      </div>
      </div>
    </ng-template>
  `
})
export class DashboardActivityComponent implements OnInit {
  companyId: number
  logs: Object[]
  clients: Object[]
  constructor(private modalService: NgbModal, private _logService: LogService, private _companyService: CompanyService, private _auth: AuthService) { }
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
    this._logService.fetchAllLogs(this.companyId).subscribe((e: Object[]) => {
      console.log(typeof e)
      this.logs = e
      console.log(this.logs)
      this.grabAllClients()

    })
  }
  grabAllClients() {
    this._logService.fetchAllClients().subscribe((e: Object[]) => {
      this.clients = e
      console.log(typeof e, 'clients', this.clients)
      this.getClientName()

    })
  }
  getClientName() {
    console.log('getclientname')
    this.logs.map((log: LogInterface) => {
      const clientName: any[] = this.clients.filter((client: Client) => {
        if (client.uid === log.clientUid) {
          return client
        }
      })
      log.clientName = clientName[0].firstname
    })
  }
   open(content) {
    this.modalService.open(content)
  }
} 
interface LogInterface {
  clientUid: String;
  companyId: String;
  description: String;
  message: String;
  uid: String;
  clientName: string;

}
interface Client {
  uid: String;
  firstname: String;
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