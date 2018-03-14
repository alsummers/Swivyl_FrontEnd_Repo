import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do',
  template: `
  <div class="card to-do dashboard-card">
      <div class="card-header to-do-header dashboard-header">
          Card title
      </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </div>
      <div class="card-footer to-do-footer dashboard-footer">Card footer</div>
  </div>
  `
})
export class DashboardToDoComponent implements OnInit {


  ngOnInit() {}
  

  
}