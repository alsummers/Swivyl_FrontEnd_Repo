import { Component, OnInit } from '@angular/core';


@Component({
  selector: "app-entity-name",
  template: `  <div class="row justify-content-center">
  <h4>WHAT IS YOUR ENTITY NAME?</h4>
  </div>
  <div class="row justify-content-center">
  <div class="col-sm-5">
  <div class="input-group">
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>
  </div>
</div>`,
  
})
export class CompanyEntityNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
