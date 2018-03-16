import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../../Services/entity.service';

@Component({
  templateUrl: './company-profile-risk.component.html',
})
export class CompanyProfileRiskComponent implements OnInit {

  constructor(private _entityService: EntityService) { }

  ngOnInit() {

  }
  postProperty(e){
    //11 inputs accepted
    
  }
}
