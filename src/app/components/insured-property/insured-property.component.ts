import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../Services/property.service'
import { EntityService } from '../../Services/entity.service';

@Component({
  selector: 'app-insured-property',
  templateUrl: './insured-property.component.html',
  styleUrls: ['./insured-property.component.scss']
})
export class InsuredPropertyComponent implements OnInit {
  companyId:string = localStorage.getItem('company')
  properties:object
  entities:object 
  constructor(private _propertyService: PropertyService, private _entityService: EntityService) { }

  ngOnInit() {

    this._propertyService.fetchAllProperty(this.companyId).subscribe(e =>{
      this.properties = e
      console.log('properties', this.properties)
  })

  this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
    this.entities =e
    

  })

}



}
