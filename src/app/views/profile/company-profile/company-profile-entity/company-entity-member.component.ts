import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../../Services/entity.service';
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';
import { UserService } from '../../../../Services/user.service';
import { NgModel } from '@angular/forms'

@Component({
  selector: "app-entity-member",
  templateUrl: './company-entity-member.component.html',
  
})
export class CompanyEntityMemberComponent implements OnInit {

  constructor(private _entityService:EntityService, private _companyService:CompanyService, private _auth:AuthService, private _userService:UserService) { }
  companyId:string = localStorage.getItem('company')
  entities:object 
  supervisors: object
  ngOnInit() {
    this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
      this.entities = e
    return this.fetchAllSupervisors()
    })
  }
  addSupervisor(e) {
    // e is the event linked to the submit all elements are targetable through e.target.elements[#]
    let 
      nameWithSpaces= e.target.elements[0].value,
      firstName = nameWithSpaces.split(" ", 2)[0],
      lastName = nameWithSpaces.split(" ", 2)[1],

      email = e.target.elements[1].value,
      password = e.target.elements[2].value

    // since we need to include the company and the entity related 
    //to the new users in question those need to be passed as properties of the request object
    // since entity varies we need to include some way to target the specific entity, 
    // currently I incuded a dropdown on user creation
    var userInfo={
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      entity: {
        uid: e.target.elements[3].value
      },
      company: {
        uid: this.companyId
      }
    }

    console.log(userInfo)
    console.log(this.companyId, this.entities)
    return this._userService.createUser(userInfo).subscribe(e => {
    })
  }
  fetchAllSupervisors(){
    //call this function when the users need to be reloaded ie: when their info is updated or submited
    return this._userService.fetchAllUsers(this.companyId).subscribe(e => {
      this.supervisors = e
    })
  }

}