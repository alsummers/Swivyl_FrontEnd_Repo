import { Component, OnInit } from '@angular/core';


//ngFor is to iterate over sharholders and display them as cards everytime it is created (via next button)
@Component({
  selector: 'app-shareholder-card',  
  template: `
  <div class="row justify-content-center" *ngFor="let shareholder of sharholders">
    <div class = "col col-10">
      <div class="row">
      <div class="col">
      <div class="card">
  <div class="card-body">
    {{shareholder}}
  </div>
</div>
      </div>
      <div class="col">
      <div class="card">
      <div class="card-body">
        {{shareholder}}
      </div>
    </div>
      </div>
      <div class="col">
      <div class="card">
  <div class="card-body">
    {{shareholder}}
  </div>
</div>
      </div>
      </div>
      <br />
      <div class="row">
      <div class="col col-4">
      <div class="card">
      <div class="card-body">
        {{shareholder}}
      </div>
    </div>
      </div>
      <div class="col col-4">
      <div class="card">
      <div class="card-body">
        {{shareholder}}
      </div>
    </div>
      </div>
      <div class="col col-2">
      <div class="card">
  <div class="card-body">
    {{shareholder}}
  </div>
</div>
      </div>
      <div class="col col-2">
      <div class="card">
  <div class="card-body">
  {{shareholder}}
  </div>
</div>
      </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class = "col col-10">
      <div class="row">
      <div class="col">
      <input type="text" class="form-control">
      </div>
      <div class="col">
      <input type="text" class="form-control">
      </div>
      <div class="col">
      <input type="text" class="form-control">
      </div>
      </div>
      <br />
      <div class="row">
      <div class="col col-4">
      <input type="text" class="form-control">
      </div>
      <div class="col col-4">
      <input type="text" class="form-control">
      </div>
      <div class="col col-2">
      <input type="text" class="form-control">
      </div>
      <div class="col col-2">
      <input type="text" class="form-control">
      </div>
      </div>
    </div>
  </div>
  `
})
export class CompanyShareholderCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
