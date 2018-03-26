import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CompanyWelcomeProfileComponent } from './company-profile/company-profile-welcome/company-profile.component'
import { CompanyProfileEntityComponent } from './company-profile/company-profile-entity/company-profile-entity.component'
import { CompanyFleetComponent } from './company-profile/company-fleet/company-fleet.component';
import { CompanyProfileRiskComponent } from './company-profile/company-profile-risk/company-profile-risk.component'
import { CompanyShareholderComponent } from './company-profile/company-shareholder/company-shareholder.component';
import { CompanyProfileSetupComponent } from './company-profile/company-profile-setup/company-profile-setup.component';
import { LoggedInAuthGuard } from "../../authguardservices";


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [LoggedInAuthGuard],
    data: {
      title: 'Profile'
    },
    
    children: [
      {
        path: 'company-welcome',
        component: CompanyWelcomeProfileComponent,
        canActivate: [LoggedInAuthGuard]
      },
      {
        path: 'company-entity',
        component: CompanyProfileEntityComponent,
        canActivate: [LoggedInAuthGuard]
      },
      {
        path: 'fleet',
        component: CompanyFleetComponent,
        canActivate: [LoggedInAuthGuard]
      },
      {
        path: 'risk',
        component: CompanyProfileRiskComponent,
        canActivate: [LoggedInAuthGuard]
      },
      {
        path: 'company-shareholder',
        component: CompanyShareholderComponent,
        canActivate: [LoggedInAuthGuard]
      }
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}