import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common'
import { FleetService } from '../../Services/fleet.service'
import { InsuredPropertyComponent } from '../../components/insured-property/insured-property.component'
import { InsuredFleetComponent } from '../../components/insured-fleet/insured-fleet.component'
@Component({
  templateUrl: 'assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {


  ngOnInit() {}
  

  
}
