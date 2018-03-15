import { Component, OnInit } from '@angular/core';


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
  <div class="row justify-content-center">
    <div class="col-sm-8">
      <div class="row">
        <div class="col">
          <div class="input-group">
            <input placeholder="First Name" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col">
          <div class="input-group">
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          </div>
        </div>
        <div class="col">
          <div class="input-group">
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-end">
    <a>Next</a>
  </div>
`,
  
})
export class CompanyEntityMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}