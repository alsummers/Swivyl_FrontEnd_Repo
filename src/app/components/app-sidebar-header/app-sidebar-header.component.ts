
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar-header',
  templateUrl: './app-sidebar-header.component.html'
})
export class AppSidebarHeaderComponent {

  companyImage:string
  firstName:string
  lastName:string
  constructor(){}
  // https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png
  ngOnInit(){
  this.companyImage ='http://localhost:3000/profile/'+localStorage.getItem('img')
  this.firstName=localStorage.getItem('firstName')
  this.lastName=localStorage.getItem('lastName')
  console.log(this.firstName)
}

 }
