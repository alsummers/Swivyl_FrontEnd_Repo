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
      <div *ngFor="let log of logs | slice: 0:6">
      {{log.createdAt | date:"MM/dd/yy"}}
      {{log.clientName}}
      {{log.message}}
      </div>
    </div>
    <div class="card-footer dashboard-footer">
    <a style="color:#a5c856; text-align: left; width:49%; display: inline-block; cursor: pointer;" (click)="open(viewall)">View All Activity</a>
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
      {{log.createdAt | date:"MM/dd/yy"}}
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
      this.logs = e
      this.grabAllClients()

    })
  }
  grabAllClients() {
    this._logService.fetchAllClients().subscribe((e: Object[]) => {
      this.clients = e
      this.getClientName()

    })
  }
  getClientName() {
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
      <div class="card-header to-do-header dashboard-header">
        <p class="card-title">QUICK CONNECT</p>
      </div>
      <div class="card-body connect-box">
    
        <select (change)="onChange($event.target.value)" style="width: 100% !important; background-color: #fff">
          <option value='default' > Select</option>
          <option *ngFor="let option of options" value="{{option.id}}"> {{option.title}} </option>
        </select>
        <div *ngIf="!currentId || currentId === 'default'">
          <textarea class="connect-textbox" rows="8" cols="75" placeholder="Please select whom to contact from above" disabled></textarea>
        </div>
        <div *ngFor="let description of descriptions">  
            <textarea class="connect-textbox" rows="8" cols="75" placeholder={{description.description}} *ngIf="currentId === description.id"></textarea>
        </div>
      </div>

      <div class="card-footer dashboard-footer">
      <button class="btn btn-dark">Submit</button>
      </div>
    </div>
  `
})
export class DashboardQuickConnectComponent implements OnInit {
currentId: any
options: Object[] = [
  {
    "id": 1,
    "title": 'broker'
    },
  {
    "id": 2,
    "title": 'accountant'
  },
  {
    "id": 3,
    "title": 'HR'
  }
]
descriptions: Object[] = [

  {
    "id": '1',
    "description": 'Please type all broker related questions here.'
  },
  {
    "id": '2',
    "description": 'Please type all accountant related questions here.'
  },
  {
    "id": '3',
    "description": 'Please type all HR related questions here.'
  }
]


  ngOnInit() {
    
   }


  onChange(e) {
    this.currentId = e
    console.log(this.currentId)
  }

}