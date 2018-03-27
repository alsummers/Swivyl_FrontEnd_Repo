import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EntityService } from '../../../../Services/entity.service';
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';


@Component({
selector: "app-entity-name",
template: ` 
<form  (submit)="entitiyCreate($event)">
  <div class="row justify-content-center">
    <h4>WHAT IS YOUR ENTITY NAME?</h4>
  </div>
  <div class="row justify-content-center" *ngFor="let entity of entities">
    <ng-template #content let-c="close" let-d="dismiss" >
    <form (submit)="updateEntity($event)" >
      <div class="modal-header">
      <h4 class="modal-title">Edit Entity</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>

          <div id="{{entity.uid}}" class="modal-body">
            <input class="form-control" value="{{entity.entity_name}}">
          </div>
          <div class="modal-footer" style="border-top:0">
            <button type="submit" class="btn btn-outline-dark" id="{{entity.uid}}">Edit</button>
          </div>
      
    </form>
    </ng-template>
  <div class="col-sm-5">
    <div class="entity-card card">
      <div class="card-newcard-body" style="text-align:center; padding:.5em 1em; font-size: 1rem;">
        <div class="row">
          <div class="col">{{entity.entity_name}}</div>
            <div class="col-1"><i class="fa fa-trash " id="{{entity.uid}}" (click)="open(deleteLocation)"></i></div>
              <div class="col-1"><i class="fa fa-pencil"  (click)="open(content)"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <div class="input-group">
              <input type="text" style="text-align:center; max-height:1rem; padding:1em 2em 1.5em" placeholder="Insert your new entity name here" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <button (click)="grabAllCompanyEntities()" class="btn btn-dark">Add Entity</button>
        </div>
        <ng-template #deleteLocation let-c="close" let-d="dismiss">
        <div class="modal-header">
          <h4 class="modal-title">Delete Location</h4>
          <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="risk container">
            <form (submit)="removeEntity($event)">
              <div class="row justify-content-center">
                <h4>Are you sure you want to delete?</h4>
              </div>
              <br>
              <div class="row justify-content-end">
                <div class="col-7"></div>
                <div class="col">
                  <button type="submit" class="btn btn-outline-danger delete" value="delete" (click)="confirm = 'true'"> Delete </button>
                  <button class="btn btn-outline-dark" (click)="confirm = 'false'" (click)="d('Cross click')"> Cancel </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ng-template>
</form>

`,
})
export class CompanyEntityNameComponent implements OnInit {

companyId: string
entities: object
closeResult: string
targetedEntity: string
modalRef: any;
updateId: any

constructor(private _entityService: EntityService, private _companyService: CompanyService, private _auth: AuthService, private modalService: NgbModal) { }
ngOnInit() {
this._companyService.fetchcompany().subscribe(e => {
console.log(e[0])
this.companyId = e[0].uid
localStorage.setItem('company', e[0].uid)
return this.grabAllCompanyEntities()
// return console.log("Company",this.companyId)
})
}
entitiyCreate(e) {
console.log(e.target.elements[0].value)
console.log('Create', this.companyId)
var entityInfo = {
entity: {
name: e.target.elements[0].value
},
company: {
uid: this.companyId
}
}
e.target.reset()
this._entityService.createEntity(entityInfo).subscribe(e => {
console.log(e)
this.grabAllCompanyEntities()
})
}
grabAllCompanyEntities() {
this._entityService.fetchAllEntities(this.companyId).subscribe(e => {
console.log(e)
this.entities = e
})
}
updateEntity(e) {
console.log(this.entities[0].uid)
var entityTask = {
entity: {
name: e.target.elements[1].value,
uid: e.target.elements[2].id
},
company: {
uid: this.companyId
}
}
e.target.reset()
this._entityService.updateEntity(entityTask).subscribe(e => {
console.log(e)
let entities = this.grabAllCompanyEntities()
console.log('tasks', entityTask)
this.closeEntityModal()
})
}
removeEntity(e) {
  console.log('entity id', this.updateId)
  if (this.confirm === 'true') {
    this._entityService.deleteEntity(this.updateId).subscribe(e => {
      this.grabAllCompanyEntities()
    this.closeEntityModal()
    })
  }
}
open(content) {
  this.modalRef = this.modalService.open(content)
  this.updateId = event.srcElement.id
}
closeEntityModal() { this.modalRef.close(); }





}
