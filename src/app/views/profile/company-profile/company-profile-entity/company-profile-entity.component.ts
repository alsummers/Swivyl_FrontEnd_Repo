import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../Services/company.service';


@Component({
  
  templateUrl: './company-profile-entity.component.html',
  
})
export class CompanyProfileEntityComponent implements OnInit {

  constructor(private _companyService: CompanyService ) { }
  companyId: string
  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0].uid)
      this.companyId = e[0].uid
      
    })
  }
  
}
