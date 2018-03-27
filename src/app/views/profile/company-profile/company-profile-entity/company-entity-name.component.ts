import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EntityService } from '../../../../Services/entity.service';
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';


@Component({
selector: "app-entity-name",
template: ` 
<form (submit)="entitiyCreate($event)">
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
            <div class="col-1"><i class="fa fa-trash " id="{{entity.uid}}" (click)="removeEntity($event)"></i></div>
              <div class="col-1"><i class="fa fa-pencil" (click)="open(content)"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <div class="input-group">
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <button (click)="grabAllCompanyEntities()" class="btn btn-dark">Add Entity</button>
        </div>
      
</form>

`,
})
export class CompanyEntityNameComponent implements OnInit {

companyId: string
entities: object
closeResult: string
targetedEntity: string
modalRef: any;

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
this._entityService.deleteEntity(e.target.id).subscribe(e => {
this.grabAllCompanyEntities()
})
}
open(content) {
  this.modalRef = this.modalService.open(content)
}
closeEntityModal() { this.modalRef.close(); }





}
