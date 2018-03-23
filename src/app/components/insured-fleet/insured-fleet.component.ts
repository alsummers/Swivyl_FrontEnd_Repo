import { Component, OnInit, NgIterable } from '@angular/core';
import {FleetService} from '../../Services/fleet.service';
import { EntityService } from '../../Services/entity.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CompanyFleetComponent} from '../../views/profile/company-profile/company-fleet/company-fleet.component'

interface FleetInterface {
  uid: String;
  entityName: String;
  entityId: String;
  owner: String;
}

interface Entity {
  uid: String;
  entity_name: String;
}


@Component({
  selector: 'app-insured-fleet',
  templateUrl:'./insured-fleet.component.html',
  styleUrls: ['./insured-fleet.component.scss']
})
export class InsuredFleetComponent implements OnInit {
  companyId:string = localStorage.getItem('company')
  fleets:any
  entities:any 
  currentId: any 


  constructor(private _fleetService: FleetService, private _entityService: EntityService, private modalService: NgbModal, private _companyFleet: CompanyFleetComponent) { }

  ngOnInit() {

  this.grabAllFleets()

  this.grabAllEntities()
  }


  grabAllEntities() {
    this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
      this.entities =e
      this.getEntityName()
  
    })
  }

  getEntityName() {
    this.fleets.map((fleets: FleetInterface) => {
      const entityName: any[] = this.entities.filter((entity: Entity) => {
  
        if (entity.uid === fleets.entityId) {
          return entity
        }
      })
      fleets.entityName = entityName[0].entity_name
    })
  }
  open(content) {
    this.modalService.open(content)
    this.currentId = event.srcElement.id
    console.log('target id:', this.currentId)
  }


  grabAllFleets() {
    this._fleetService.fetchCompanyFleet(this.companyId).subscribe(e =>{
      this.fleets = e
      console.log('fleets', this.fleets)
  })
  }

  fleetCreate(e) {
    e.preventDefault()
    this._companyFleet.fleetCreate(e)
    this.grabAllFleets()
  }
  removeFleet(e){
    this._fleetService.deleteFleet(e.target.id).subscribe(e => {
      this.grabAllFleets()
    })
    
  }

  updateFleet(e) {
    const fleetUpdatedInfo = {
      fleets: {
        year: e.target.elements[0].value,
        make: e.target.elements[1].value,
        model: e.target.elements[2].value,
        vin: e.target.elements[3].value,
        driver: e.target.elements[4].value,
        gzip: e.target.elements[5].value,
        date: e.target.elements[6].value,
        titledto: e.target.elements[7].value,
        uid: this.currentId
      },
      entity: {
        uid: e.target.elements[8].value
      },
      company: {
        uid: this.companyId
      }
    }
    this._fleetService.updateFleet(fleetUpdatedInfo).subscribe(e=>{
      console.log(e)
      let fleets = this.grabAllFleets()
      console.log('fleets', fleets)
    })
  
  }
  

}
