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
import { InsuredFleetComponent} from '../../components/insured-fleet/insured-fleet.component'
import { InsuredPropertyComponent } from '../../components/insured-property/insured-property.component';
@NgModule({
  imports: [
    FormsModule,
    ProfileRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ 
    InsuredFleetComponent,
    InsuredPropertyComponent,
    ProfileComponent,

    CompanyWelcomeProfileComponent,
    CompanyProfileEntityComponent,
    CompanyProfileRiskComponent,
    
    CompanyEntityNameComponent,
    CompanyEntityMemberComponent,
    CompanyShareholderComponent
   ]
})
export class ProfileModule { }