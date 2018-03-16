import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../../Services/entity.service';
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';
import { UserService } from '../../../../Services/user.service';
import { NgModel } from '@angular/forms'

@Component({
  selector: "app-entity-member",
  template: `  
  <div class="row justify-content-center">
    <h4>WHO IN YOUR COMPANY WILL NEED ACCESS TO SWIVYL?</h4>
  </div>
  <div class="row justify-content-center" *ngFor="let user of users">
  <div class="col-sm-8">
  <div class="row">
  <div class="col">
  <div class="card">
  <div class="card-body">
    {{user.firstname}}
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <div class="card-body">
    {{user.email}}
  </div>
</div>
      </div>
      <div class="col">
      <div class="card">
  <div class="card-body">
    {{user.password}}
  </div>
</div>
        </div>
    </div>
  </div>
</div>
  <form (submit)="addSupervisor($event)">
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <div class="row">
          <div class="col">
            <div class="input-group">
              <input placeholder=" Name Last " type="text" class="form-control"  aria-describedby="basic-addon3">
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <input placeholder="email@email.com" type="email" class="form-control"  aria-describedby="basic-addon3">
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <input placeholder="@dmin123" type="password" class="form-control" aria-describedby="basic-addon3">
            </div>
          </div>
          <div class="col-sm-1">
            <div class="input-group">
              <select>
                
                <option *ngFor="let entity of enteties" value="{{entity.id}}" >{{entity.entity_name}}</option>  
                
              </select>
            </div>
          </div>
        </div>
      </div>
    
  </div>
  <div class="row justify-content-end">
      <button class="btn btn-dark" >Next</button>
    </div>
</form>
`,
  
})
export class CompanyEntityMemberComponent implements OnInit {

  constructor(private _entityService:EntityService, private _companyService:CompanyService, private _auth:AuthService, private _userService:UserService) { }
  companyId:string = localStorage.getItem('company')
  enteties:object 
  supervisors: object
  ngOnInit() {
    this._entityService.fetchAllEntities(this.companyId).subscribe(e =>{
      this.enteties =e
    
    return this.fetchAllSupervisors()
    })
  }
  
  addSupervisor(e){
    let 
      nameWithSpaces= e.target.elements[0].value,
      firstName = nameWithSpaces.split(" ", 2)[0],
      lastName = nameWithSpaces.split(" ", 2)[1],

      email = e.target.elements[1].value,
      password = e.target.elements[2].value
      console.log(e.target.elements[3].value)


    var userInfo={
      firstname:firstName,
      lastname:lastName,
      email:email,
      password:password,
      entity:{
        id:e.target.elements[3].value
      },
      company:{
        id:this.companyId
      }
    }

    console.log(userInfo)
    console.log(this.companyId,this.enteties)
    return this._userService.createUser(userInfo).subscribe(e=>{
      console.log(e)
    })
  }
  fetchAllSupervisors(){

    return this._userService.fetchAllUsers(this.companyId).subscribe(e=>{
      console.log(e)
    })
  }

}