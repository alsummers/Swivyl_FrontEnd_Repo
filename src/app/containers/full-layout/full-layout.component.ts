import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../Services/company.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})

export class FullLayoutComponent {
  constructor(private _companyService: CompanyService){}
  companyId:string
  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0])
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
      localStorage.setItem('img', e[0].img)
      
      // return console.log("Company",this.companyId)
    })

  }
  
 }
