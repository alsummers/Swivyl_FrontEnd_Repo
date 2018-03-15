import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardActivityComponent } from './dashboard-activity.component';
import { DashboardQuickConnectComponent } from './dashboard-quickconnect.component';
import { DashboardToDoComponent } from './dashboard-to-do.component'

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent, DashboardActivityComponent, DashboardQuickConnectComponent, DashboardToDoComponent]
})
export class DashboardModule { }
