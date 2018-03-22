import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';
import { ShareholderService } from '../../../../Services/shareholder.service';


//ngFor is to iterate over sharholders and display them as cards everytime it is created (via next button)
@Component({
  selector: 'app-shareholder-card',
  templateUrl: './company-shareholder-card.component.html'
})
export class CompanyShareholderCardComponent implements OnInit {
  companyId: string = localStorage.getItem('company')
  shareholders: object
  constructor(private _companyService: CompanyService, private _auth: AuthService, private _sholderService: ShareholderService) { }

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0])
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
      return this.grabAllShareholders(this.companyId)
    })
  }

  grabAllShareholders(companyId) {
    this._sholderService.fetchAllShareholders(companyId).subscribe(e => {
      this.shareholders = e
    })
  }
  createShareholder(sholderInfo) {
    
  }
}
