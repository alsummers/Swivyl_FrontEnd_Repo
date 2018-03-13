import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf, CommonModule } from '@angular/common'
import {FleetService} from '../../../Services/fleet.service'
@Component({
  selector: 'app-insured-fleet',
  templateUrl: './insured-fleet.component.html',
  styleUrls: ['./insured-fleet.component.scss']
})
export class InsuredFleetComponent implements OnInit {

  constructor(private _fleetService: FleetService) { }
  private fleet:{}
  ngOnInit() {
    this.refreshList()
  }
  refreshList(){
    console.log('clicked')
    this._fleetService.fetchFleet().subscribe(e => {
       this.fleet = e
       console.log(this.fleet)
      
    })
  }
  
}
