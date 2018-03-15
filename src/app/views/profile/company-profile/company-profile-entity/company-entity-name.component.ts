import { Component, OnInit } from '@angular/core';
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
  <div class="row justify-content-center" *ngFor="let entity of enteties">
  <div class="col-sm-5">
  <div class="entity-card card">
  <div class="card-body" style="max-height:1rem; text-align:center">

  <div class="row">
  <div class="col-1"><i class="fa fa-trash" (click)="deleteEntity(entityId)"></i></div>

  <div class="col">{{entity.entity_name}}</div>
  
  <div class="col-1"><i class="fa fa-pencil" (click)="updateEntity(entityInfo)"></i></div>
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
    <button (click)="grabAllCompanyEntities()" class="btn">Next</button>
  </div>
  </form>`,
  
})
export class CompanyEntityNameComponent implements OnInit {
  companyId: number
  enteties: object
  constructor( private _entityService:EntityService, private _companyService: CompanyService, private _auth: AuthService ) { }

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0].id)
      this.companyId = e[0].id
      return this.grabAllCompanyEntities()
    })
    
      }
  entitiyCreate(e){
    console.log(this.companyId)
    console.log(e.target.elements[0].value)
    var entityInfo = {
      entity:{
      name: e.target.elements[0].value
      },
      company:{
        id:this.companyId
      }
    }
    e.target.reset()
    this._entityService.createEntity(entityInfo).subscribe(e=>{
      console.log(e)
      this.grabAllCompanyEntities()
      
    })

  }
  grabAllCompanyEntities(){
    this._entityService.fetchAllEntities(this.companyId).subscribe(e=>{
      console.log(e)
      this.enteties = e
    })
  }

  
  

}
