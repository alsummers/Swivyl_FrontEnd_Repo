import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './app-sidebar-header.component.html'
})
export class AppSidebarHeaderComponent {
  companyImage:string
  constructor(){}
  // https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png
  NgOnInit(){
  this.companyImage ='http://localhost:3000/api/company/profile/'+localStorage.getItem('img')
}
 }
