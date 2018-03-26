import { Component, OnInit } from '@angular/core';
import { FleetService } from '../../../../Services/fleet.service';
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';
import { EntityService } from '../../../../Services/entity.service';
import { UserService } from '../../../../Services/user.service';

@Component({

  templateUrl: './company-fleet.component.html',
  styles: ['button{margin-top:11px}']
})
export class CompanyFleetComponent implements OnInit {
  companyId:string = localStorage.getItem('company')
    fleets: Object[]
  entities: object
 

  constructor(private _fleetService: FleetService, private _companyService: CompanyService, private _auth: AuthService, private _enitiyService: EntityService) { }

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0])
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
    })
    this._enitiyService.fetchAllEntities(this.companyId).subscribe(e => {
      this.entities = e
    })
  }

fleetCreate(e) {
    const fleetInfo = {
      fleets: {
        year: e.target.elements[0].value,
        make: e.target.elements[1].value,
        model: e.target.elements[2].value,
        vin: e.target.elements[3].value,
        driver: e.target.elements[4].value,
        gzip: e.target.elements[5].value,
        date: e.target.elements[6].value,
        titledto: e.target.elements[7].value,
      },
      entity: {
        uid: e.target.elements[8].value
      },
      company: {
        uid: this.companyId
      }
    }
    e.target.reset()
    this._fleetService.createFleet(fleetInfo).subscribe(e => {
      console.log(e)
    })
  }
}
