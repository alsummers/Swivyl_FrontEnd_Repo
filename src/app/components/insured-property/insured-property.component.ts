import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/property.service'
import { EntityService } from '../../Services/entity.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CompanyProfileRiskComponent } from '../../views/profile/company-profile/company-profile-risk/company-profile-risk.component'



interface PropertyInterface {
  clientUid: String;  
  uid: String;
  entityName: String;
  address: String;
  building_sprink: Boolean;
  building_owner: String;
  sqft_of_building: Number;
  building_occ: Number;
  location_employees: Number;
  location_contents: Number;
  location_inventory: Number;
  entityId: String;
  companyId: String;
  owner: String;
}

interface Entity {
  uid: String;
  entity_name: String;
}

@Component({
  selector: 'app-insured-property',
  templateUrl: './insured-property.component.html',
  styleUrls: ['./insured-property.component.scss']
})
export class InsuredPropertyComponent implements OnInit {
  companyId:string = localStorage.getItem('company')
  properties: any
  entities: any
  currentId: any 
  confirm: any
  modalRef: any

  constructor(private _propertyService: PropertyService, private _entityService: EntityService, private _companyProperty: CompanyProfileRiskComponent, private modalService: NgbModal) { }

  ngOnInit() {
   this.grabAllProperties()

  this.grabAllEntities()

    }


grabAllEntities() {
  this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
    this.entities =e
    this.getEntityName()

  })
}

open(content) {
  this.modalRef =this.modalService.open(content)
  this.currentId = event.srcElement.id
  console.log('target id:', this.currentId)
}

closeModal() { this.modalRef.close(); }

grabAllProperties() {
  this._propertyService.fetchAllProperty(this.companyId).subscribe(e =>{
    this.properties = e
    console.log('properties', this.properties)
  
})
}
propertyCreate(e) {
  this._companyProperty.postProperty(e)
  this.grabAllProperties()
  this.closeModal()
}



removeProperty(e){
  if(this.confirm === 'true'){
  this._propertyService.deleteProperty(this.currentId).subscribe(e => {
    this.grabAllProperties()
    this.closeModal()
  })
  }
}


getEntityName() {
  this.properties.map((properties: PropertyInterface) => {
    const entityName: any[] = this.entities.filter((entity: Entity) => {

      if (entity.uid === properties.entityId) {
        return entity
      }
    })
    properties.entityName = entityName[0].entity_name
  })
}


updateProperty(e) {
  var propertyUpdatedInfo = {
    properties: {
    address: e.target.elements[0].value,
    building_sprink: e.target.elements[1].value,
    building_owner: e.target.elements[2].value,
    sqft_of_building: e.target.elements[3].value,
    building_occ: e.target.elements[4].value,
    location_employees: e.target.elements[5].value,
    location_contents: e.target.elements[6].value,
    location_inventory: e.target.elements[7].value,
    uid: this.currentId
    },
    entity: {
      uid: e.target.elements[8].value

    },
    company: {
      uid: this.companyId
    }

  }
  this._propertyService.updatePropertyInfo(propertyUpdatedInfo).subscribe(e=>{
    console.log(e)
    let properties = this.grabAllProperties()
    console.log('properties', properties)
    this.closeModal()
    this.getEntityName()
    this.grabAllEntities()
  })

}





}
