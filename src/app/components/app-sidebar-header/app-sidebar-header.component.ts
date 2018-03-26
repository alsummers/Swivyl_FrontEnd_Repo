import { Component, OnInit} from '@angular/core';
import { CompanyService } from '../../Services/company.service';


@Component({
  selector: 'app-sidebar-header',
  templateUrl: './app-sidebar-header.component.html'
})
export class AppSidebarHeaderComponent {
  companyImage:string
  firstName:string
  lastName:string
  constructor(private _companyService:CompanyService){}
  // https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png
  ngOnInit(){
    this.companyImage ='http://localhost:3000/profile/'+localStorage.getItem('img')
    this.firstName=localStorage.getItem('firstName')
    this.lastName=localStorage.getItem('lastName')
  }
  ImageSubmitClick(){
    let input = document.getElementById('ImageSelect')
   console.log(input)
   input.click()
  }
  ImageSubmit(e){
    let formData= new FormData();
    console.log('------',formData)
    formData.append('companyLogo', e.target.files[0] , 'companyLogo.jpg')
    console.log(formData)
    location.reload()
    this._companyService.updateCompany(formData).subscribe(e=>{
      console.log(e)
      
    })
  }
  
 }
