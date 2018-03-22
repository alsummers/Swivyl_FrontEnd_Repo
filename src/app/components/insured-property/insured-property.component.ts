import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/property.service'
import { EntityService } from '../../Services/entity.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CompanyProfileRiskComponent } from '../../views/profile/company-profile/company-profile-risk/company-profile-risk.component'
@Component({
  selector: 'app-insured-property',
  templateUrl: './insured-property.component.html',
  styleUrls: ['./insured-property.component.scss']
})
export class InsuredPropertyComponent implements OnInit {
  companyId:string = localStorage.getItem('company')
  properties:object
  entities:object 
  constructor(private _propertyService: PropertyService, private _entityService: EntityService, private _companyProperty: CompanyProfileRiskComponent, private modalService: NgbModal) { }

  ngOnInit() {
   this.grabAllProperties()

  this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
    this.entities =e
    

  })

}


open(content) {
  this.modalService.open(content)
}

grabAllProperties() {
  this._propertyService.fetchAllProperty(this.companyId).subscribe(e =>{
    this.properties = e
    console.log('properties', this.properties)
  
})
}
propertyCreate(e) {
  e.preventDefault()
  this._companyProperty.postProperty(e)
  this.grabAllProperties()
}

removeProperty(e){
  this._propertyService.deleteProperty(e.target.id).subscribe(e => {
    this.grabAllProperties()
  })
  
}



}
