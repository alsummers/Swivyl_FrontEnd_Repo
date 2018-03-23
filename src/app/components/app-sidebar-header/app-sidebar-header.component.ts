import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar-header',
  templateUrl: './app-sidebar-header.component.html'
})
export class AppSidebarHeaderComponent {
  companyLogo:string
  constructor(){}
  ngOnInit(){
    this.companyLogo = 'http://localhost:3000/profile/'+localStorage.getItem('img')
  }
 }
