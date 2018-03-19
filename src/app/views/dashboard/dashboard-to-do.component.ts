import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ToDoService} from '../../Services/to-do.service';
import { CompanyService } from '../../Services/company.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-to-do',
  template: `
  <div class="card to-do dashboard-card">
      <div class="card-header to-do-header dashboard-header">
          TO DO LIST
      </div>
        <div class="card-body">
        <h6>OVERDUE:</h6>
      <span>Review claim</span><br /> <br /> <br />


        <h6>UPCOMING:</h6>
        <div *ngFor="let task of tasks | slice:0:5">
        {{task.dateDue}}: 
        {{task.description}} 
        </div>
        </div>
      <div class="card-footer to-do-footer dashboard-footer">
      <button class="btn btn-lg btn-dark" (click)="open(viewall)">View all items</button>

      <button class="btn btn-lg btn-dark" (click)="open(content)">+Add Task</button>

      </div>


        <ng-template #content let-c="close" let-d="dismiss">
        <div class="modal-header">
          <h4 class="modal-title">To-Do Task</h4>
          <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form (submit)="taskCreate($event)">
          <input type="text" placeholder="to-do task">
          <input type="date" placeholder="due date">
          <button type="submit">Submit</button>
        </form>

        </div>
      </ng-template>
    

      <ng-template #viewall let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">To-Do Task</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h6>ALL TASKS:</h6>
      <div *ngFor="let task of tasks">
      {{task.dateDue}}: 
      {{task.description}} 
      </div>

      </div>
    </ng-template>


  </div>

  
  




  `
})
export class DashboardToDoComponent implements OnInit {
  closeResult: string;
  companyId: number
  tasks: object

  constructor(private modalService: NgbModal, private _toDoService: ToDoService, private _companyService: CompanyService, private _auth: AuthService ) {}

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0].id)
      this.companyId = e[0].id
      localStorage.setItem('company', e[0].id)
      return this.grabAllCompanyTasks()
    })
  }
  
  open(content) {
    this.modalService.open(content)
  }

  taskCreate(e){
    console.log(this.companyId)
    // console.log(e.target.elements[0].value)
    var toDoTask = {
      todo: {
      description: e.target.elements[0].value,
      dateDue: e.target.elements[1].value
      },
      company:{
        id:this.companyId
      }
    }
    e.target.reset()
    this._toDoService.createToDo(toDoTask).subscribe(e=>{
      console.log(e)
      let tasks = this.grabAllCompanyTasks()
      console.log('tasks', tasks)
    })

      }

      grabAllCompanyTasks(){
        this._toDoService.fetchCompanyTasks(this.companyId).subscribe(e=>{
          console.log(e)
          this.tasks = e
        })
      }
  
}