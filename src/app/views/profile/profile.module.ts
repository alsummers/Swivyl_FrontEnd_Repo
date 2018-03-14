import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routes';
import { CompanyWelcomeProfileComponent } from './company-profile/company-profile-welcome/company-profile.component';
import { CompanyProfileEntityComponent } from './company-profile/company-profile-entity/company-profile-entity.component'
import { CompanyProfileRiskComponent } from './company-profile/company-profile-risk/company-profile-risk.component'
import { CompanyEntityNameComponent } from './company-profile/company-profile-entity/company-entity-name.component'
import { CompanyEntityMemberComponent } from './company-profile/company-profile-entity/company-entity-member.component';
import { CompanyShareholderComponent } from './company-profile/company-shareholder/company-shareholder.component'
import { CompanyFleetComponent } from './company-profile/company-fleet/company-fleet.component';

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
    CompanyProfileRiskComponent,
    CompanyFleetComponent,
    CompanyEntityNameComponent,
    CompanyEntityMemberComponent,
    CompanyShareholderComponent
   ]
})
export class ProfileModule { }