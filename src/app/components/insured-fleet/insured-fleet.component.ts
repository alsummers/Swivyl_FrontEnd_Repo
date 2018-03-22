import { Component, OnInit, NgIterable } from '@angular/core';
import {FleetService} from '../../Services/fleet.service';
import { EntityService } from '../../Services/entity.service';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CompanyFleetComponent} from '../../views/profile/company-profile/company-fleet/company-fleet.component'
@Component({
  selector: 'app-insured-fleet',
  templateUrl:'./insured-fleet.component.html',
  styleUrls: ['./insured-fleet.component.scss']
})
export class InsuredFleetComponent implements OnInit {
  companyId:string = localStorage.getItem('company')
  fleets:object
  entities:object

  constructor(private _fleetService: FleetService, private _entityService: EntityService, private modalService: NgbModal, private _companyFleet: CompanyFleetComponent) { }

  ngOnInit() {

  this.grabAllFleets()

  this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
    this.entities =e
    

  })
  }

  open(content) {
    this.modalService.open(content)
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
  

}
