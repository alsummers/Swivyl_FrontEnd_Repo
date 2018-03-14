import { Component, OnInit, NgIterable } from '@angular/core';
import {FleetService} from '../../Services/fleet.service'
@Component({
  selector: 'app-insured-fleet',
  templateUrl:'./insured-fleet.component.html',
  styleUrls: ['./insured-fleet.component.scss']
})
export class InsuredFleetComponent implements OnInit {

  constructor(private _fleetService: FleetService) { }
  private fleets: {}
  ngOnInit() {
    this.refreshList()
  }
  refreshList(){
    console.log('clicked')
    this._fleetService.fetchFleet(2).subscribe(e => {
       this.fleets = e
       console.log(this.fleets)
      
    })
  }
  clickyDoo(){
    console.log(this.fleets)
  }
}
