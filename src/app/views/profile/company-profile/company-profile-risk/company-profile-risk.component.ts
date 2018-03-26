import { Component, OnInit } from '@angular/core';



//services import (these are the api calls)
import { EntityService } from '../../../../Services/entity.service';
import { PropertyService } from '../../../../Services/property.service';



@Component({
  templateUrl: './company-profile-risk.component.html',
})
export class CompanyProfileRiskComponent implements OnInit {
  added: Boolean
  dismissible = true;
  alert: any = 'Property has been added'
  //define where the get call will store the property data, and where the entities will be stored
  //since both of these will be objects they need to be defined as such.
  companyId:string = localStorage.getItem('company')
  properties:object
  entities:object 
  // both can be reassigned like this
  // properties = somethingThatIsAnObject
  constructor(private _entityService: EntityService, private _propertService: PropertyService) { }
  //for ngOnInit put any functions such as the get all function that will populate the lists,
  //you would also want to call any functions that store any data you may need
  ngOnInit() {
    this.added = false
    this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
      this.entities = e
    })

  }
  postProperty(e){
    this.added = false
    //11 inputs accepted 
    //elements are targetable by calling the function on form submit and using 
    // e.target.elements[#]
    //elements are indexed starting at [0]
    console.log(e)

    let address = `${e.target.elements[0].value} ${e.target.elements[1].value} ${e.target.elements[2].value}, ${e.target.elements[3].value}`
    var propertyInfo = {
      properties: {
      address: address,
      building_sprink: e.target.elements[4].value,
      building_owner: e.target.elements[5].value,
      sqft_of_building: e.target.elements[6].value,
      building_occ: e.target.elements[7].value,
      location_employees: e.target.elements[8].value,
      location_contents: e.target.elements[9].value,
      location_inventory: e.target.elements[10].value
      },
      entity: {
        uid: e.target.elements[11].value

      },
      company: {
        uid: this.companyId
      }

    }
    e.target.reset()
    this._propertService.createProperty(propertyInfo).subscribe(e=>{
      this.added = true
  })
}

onClosed(dismissedAlert: any): void {
  this.alert = this.alert !== dismissedAlert;
}

}
