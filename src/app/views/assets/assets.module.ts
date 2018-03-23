import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets.routes';
import { InsuredPropertyComponent } from '../../components/insured-property/insured-property.component';
import { InsuredFleetComponent } from '../../components/insured-fleet/insured-fleet.component';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { CompanyFleetComponent } from '../../views/profile/company-profile/company-fleet/company-fleet.component'
import { CompanyProfileRiskComponent } from '../../views/profile/company-profile/company-profile-risk/company-profile-risk.component'

@NgModule({
  imports: [
    FormsModule,
    AssetsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    NgbModule.forRoot()
    
  ],
  declarations: [ AssetsComponent, InsuredPropertyComponent, InsuredFleetComponent ],
  providers: [ CompanyFleetComponent, CompanyProfileRiskComponent]
})
export class AssetsModule { }