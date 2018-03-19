import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {CommonModule} from '@angular/common';
import { SlicePipe } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardActivityComponent, DashboardQuickConnectComponent } from './dashboard-activity.module'
import { DashboardToDoComponent } from './dashboard-to-do.component'


import {ToDoService} from '../../Services/to-do.service';
import { CompanyService } from '../../Services/company.service';
import { AuthService } from '../../Services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [ DashboardComponent, DashboardActivityComponent, DashboardQuickConnectComponent, DashboardToDoComponent],
  providers: [
    AuthService,
    ToDoService,
    CompanyService
 
  ]
})
export class DashboardModule { }
