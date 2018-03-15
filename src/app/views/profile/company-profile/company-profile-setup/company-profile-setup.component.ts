import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../Services/company.service';

@Component({
  selector: 'app-company-profile-setup',
  templateUrl: './company-profile-setup.component.html',
  styleUrls: ['./company-profile-setup.component.scss']
})
export class CompanyProfileSetupComponent implements OnInit {

  constructor(private _companyService:CompanyService ) { }

  ngOnInit() {
  }
  registerCompany(e){
    e.preventDefault()
    console.log(e.target.elements[0].value)

    //test image for upload https://i.imgur.com/Ilitki0.jpg
    console.log(e.target.elements[1].value)
    var companyInfo ={
      name: e.target.elements[0].value,
      img: e.target.elements[1].value
    }

    return this._companyService.registerCompany(companyInfo)

  }
}
