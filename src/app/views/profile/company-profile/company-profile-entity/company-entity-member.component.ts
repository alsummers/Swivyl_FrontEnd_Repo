import { Component, OnInit } from '@angular/core';


@Component({
  selector: "app-entity-member",
  template: `  <div class="row justify-content-center">
  <h4>WHO IN YOUR COMPANY WILL NEED ACCESS TO SWIVYL?</h4>
  </div>
  <div class="row justify-content-center">
  <div class="col-sm-8">
  <div class="row">
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
      <div class="col">
      <div class="input-group">
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        </div>
    </div>
  </div>
</div>
<div class="row justify-content-end">
<a routerLink="../company-shareholder">NEXT</a>
</div>`,
  
})
export class CompanyEntityMemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}