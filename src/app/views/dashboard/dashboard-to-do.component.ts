import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
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
        {{task.dateDue | date:"MM/dd/yy"}}: 
        {{task.description}} 
        </div>
        </div>
      <div class="card-footer to-do-footer dashboard-footer">
      <button class="btn btn-lg btn-dark" (click)="open(viewall)">View all items</button>

      <button class="btn btn-lg btn-dark" (click)="open(content)">+Add Task</button>

      </div>


        <ng-template #content let-c="close" let-d="dismiss">
        <div class="modal-header">
          <h4 class="modal-title">Add a Task</h4>
          <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form (submit)="taskCreate($event)">
          <input type="text" placeholder="to-do task" class="btn btn-outline-dark">
          <input type="date" placeholder="due date" class="btn btn-outline-dark">
          <button type="submit" class="btn btn-outline-dark">Submit</button>
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
        <div *ngIf="show">
          {{task.dateDue | date:"MM/dd/yy"}}: 
          {{task.description}} <button class="btn btn-outline-dark" id="{{task.uid}}" (click)="show = !show">U</button> <button class="btn btn-outline-dark" id="{{task.uid}}" (click)="removeTask($event)">X</button>
        </div>
        <div *ngIf="!show" >
          <form (submit)="updateTask($event)">
              <input type="date" class="btn btn-outline-dark">
              <input type="text" placeholder="{{task.description}}" id="{{task.uid}}" (keyup)="onKey($event)" class="btn btn-outline-dark">
              <button type="submit" class="btn btn-outline-dark" *ngIf="edit">Edit</button>
              <button type="button" class="btn btn-outline-dark" (click)="show = !show">Go Back</button>
          </form>  
        </div>
      </div>
     

      </div>
    </ng-template>


  </div>

  
  




  `
})
export class DashboardToDoComponent implements OnInit {
  closeResult: string;
  companyId: number;
  tasks: object;
  show: boolean = true;
  edit: boolean = false;
  taskValue: string = ''
  constructor(private modalService: NgbModal, private modalActive: NgbActiveModal,private _toDoService: ToDoService, private _companyService: CompanyService, private _auth: AuthService ) {}

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0].uid)
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
      return this.grabAllCompanyTasks()
    })
  }
  
  open(content) {
    this.modalService.open(content)
  }
  close(result: any) {}

  onKey(event: any) {
    if(event.target.value.length > 0) {
      this.edit = true
    } else {
      this.edit = false
    }
  }

  taskCreate(e){
    console.log(this.companyId)
   close()
    // console.log(e.target.elements[0].value)
  
    var toDoTask = {
      todo: {
      description: e.target.elements[0].value,
      dateDue: e.target.elements[1].value,
      
      },
      company:{
        uid:this.companyId
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
          console.log('what is this', e)
          this.tasks = e
        })
      }
  

      // updateTask(e) {
      //   console.log('e.target.id: ', e.target.id)
      //   this._toDoService.updateTask(e.target.id).subscribe ( e => {
      //     console.log('what is this e ', e)
      //     this.grabAllCompanyTasks()
      //   }
      //   )
        
      // }



      updateTask(e) {
        console.log(e)
      var toDoTask = {
        todo: {
        description: e.target.elements[1].value,
        dateDue: e.target.elements[0].value,
        uid: e.target.elements[1].id
        },
        company:{
          uid:this.companyId
        }
      }
      e.target.reset()
      this._toDoService.updateTask(toDoTask).subscribe(e=>{
        console.log(e)
        let tasks = this.grabAllCompanyTasks()
        console.log('tasks', tasks)
      })

    }


      removeTask(e){
        this._toDoService.deleteTask(e.target.id).subscribe(e => {
          this.grabAllCompanyTasks()
        })
        
      }
}