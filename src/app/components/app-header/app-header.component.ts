import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  firstName:string
  lastName:string
  constructor(){}
  ngOnInit(){
    this.firstName=localStorage.getItem('firstName')
    this.lastName=localStorage.getItem('lastName')
  }
 }

