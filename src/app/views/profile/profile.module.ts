import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routes';
import { CompanyWelcomeProfileComponent } from './company-profile/company-profile-welcome/company-profile.component';
import { CompanyProfileEntityComponent } from './company-profile/company-profile-entity/company-profile-entity.component'
import { CompanyFleetComponent } from './company-profile/company-fleet/company-fleet.component'
import { InsuredFleetComponent } from '../assets/insured-fleet/insured-fleet.component'

@NgModule({
  imports: [
    FormsModule,
    ProfileRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ 
    ProfileComponent,
    CompanyWelcomeProfileComponent,
    CompanyProfileEntityComponent,
    CompanyFleetComponent,
    InsuredFleetComponent
   ]
})
export class ProfileModule { }