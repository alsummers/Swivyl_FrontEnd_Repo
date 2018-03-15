import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../../Services/entity.service';
import { CompanyService } from '../../../../Services/company.service';


@Component({
  selector: "app-entity-name",
  template: `  
  <form (submit)="entitiyCreate($event)">
  <div class="row justify-content-center">
    <h4>WHAT IS YOUR ENTITY NAME?</h4>
  </div>
  <div class="row justify-content-center" *ngFor="let entity of entities">
  <div class="col-sm-5">
  <div class="card">
  <div class="card-body">
    {{entity.name}}
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
  constructor( private _entityService:EntityService, private _companyService: CompanyService ) { }

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
    this._entityService.fetchAllEntities(this.companyId).subscribe(e=>{console.log(e)})
  }
  
  

}
