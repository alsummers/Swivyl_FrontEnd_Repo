import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToDoService } from '../../Services/to-do.service';
import { CompanyService } from '../../Services/company.service';
import { AuthService } from '../../Services/auth.service';
import { elementAt } from 'rxjs/operators/elementAt';

@Component({
  selector: 'app-to-do',
  templateUrl: './dashboard-to-do.html'
})
export class DashboardToDoComponent implements OnInit {
  closeResult: string;
  companyId: number;
  tasks: object;
  show: boolean = true;
  taskValue: string = ''
  date: any = new Date().toLocaleDateString("sq-AL")
  currentId: any; 
  modalRef: any;
  confirm: any;



  constructor(private modalService: NgbModal, private modalActive: NgbActiveModal, private _toDoService: ToDoService, private _companyService: CompanyService, private _auth: AuthService) { }

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0].uid)
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
      return this.grabAllCompanyTasks()
    })
  }



  open(content) {
    this.modalRef = this.modalService.open(content)
    this.currentId = event.srcElement.id
    console.log('target id:', this.currentId)
    }
  closeTaskModal() { this.modalRef.close(); }


  taskCreate(e) {
    console.log(this.companyId)
    console.log(this.date)
    this.closeTaskModal()
    // console.log(e.target.elements[0].value)

    var toDoTask = {
      todo: {
        description: e.target.elements[0].value,
        dateDue: e.target.elements[1].value,

      },
      company: {
        uid: this.companyId
      }
    }
    e.target.reset()
    this._toDoService.createToDo(toDoTask).subscribe(e => {
      console.log(e)
      let tasks = this.grabAllCompanyTasks()
      console.log('tasks', tasks)
      this.closeTaskModal()
    })

  }

  grabAllCompanyTasks() {
    this._toDoService.fetchCompanyTasks(this.companyId).subscribe(e => {
      console.log('what is this', e)
      this.tasks = e
    })
  }


  updateTaskInfo(e) {
    console.log(e)
    
    var toDoTask = {
      todo: {
        description: e.target.elements[1].value,
        dateDue: e.target.elements[0].value,
        uid: this.currentId,
      },
      company: {
        uid: this.companyId
      }
    }
    e.target.reset()
    this._toDoService.updateTask(toDoTask).subscribe(e => {
      console.log(e)
      let tasks = this.grabAllCompanyTasks()
      console.log('tasks', tasks)      
    })
    this.closeTaskModal()
   
  }


  removeTask(e) {
    
    this._toDoService.deleteTask(e.target.id).subscribe(e => {
      this.grabAllCompanyTasks()
   
    })
    this.closeTaskModal()
  }
}