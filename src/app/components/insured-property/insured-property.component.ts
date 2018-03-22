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
  currentId: any 
  constructor(private _propertyService: PropertyService, private _entityService: EntityService, private _companyProperty: CompanyProfileRiskComponent, private modalService: NgbModal) { }

  ngOnInit() {
   this.grabAllProperties()

  this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
    this.entities =e
    

  })

}


open(content) {
  this.modalService.open(content)
  this.currentId = event.srcElement.id
  console.log('target id:', this.currentId)
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


updateProperty(e) {
  let address = `${e.target.elements[0].value} ${e.target.elements[1].value} ${e.target.elements[2].value}, ${e.target.elements[3].value}`
  var propertyUpdatedInfo = {
    properties: {
    address: address,
    building_sprink: e.target.elements[4].value,
    building_owner: e.target.elements[5].value,
    sqft_of_building: e.target.elements[6].value,
    building_occ: e.target.elements[7].value,
    location_employees: e.target.elements[8].value,
    location_contents: e.target.elements[9].value,
    location_inventory: e.target.elements[10].value,
    uid: this.currentId
    },
    entity: {
      uid: e.target.elements[11].value

    },
    company: {
      uid: this.companyId
    }

  }
  this._propertyService.updatePropertyInfo(propertyUpdatedInfo).subscribe(e=>{
    console.log(e)
    let properties = this.grabAllProperties()
    console.log('properties', properties)
  })

}



}
