import { Component, OnInit } from '@angular/core';



//services import (these are the api calls)
import { EntityService } from '../../../../Services/entity.service';
import { PropertyService } from '../../../../Services/property.service';



@Component({
  templateUrl: './company-profile-risk.component.html',
})
export class CompanyProfileRiskComponent implements OnInit {
  //define where the get call will store the property data, and where the entities will be stored
  //since both of these will be objects they need to be defined as such.
  
  properties:object
  entities: object
  // both can be reassigned like this
  // properties = somethingThatIsAnObject
  constructor(private _entityService: EntityService, private _propertService: PropertyService) { }
  //for ngOnInit put any functions such as the get all function that will populate the lists,
  //you would also want to call any functions that store any data you may need
  ngOnInit() {



  }
  postProperty(e){
    //11 inputs accepted 
    //elements are targetable by calling the function on form submit and using 
    // e.target.elements[#]
    //elements are indexed starting at [0]

  }
}
