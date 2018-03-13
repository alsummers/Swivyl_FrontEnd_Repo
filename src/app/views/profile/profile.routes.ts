import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CompanyWelcomeProfileComponent } from './company-profile/company-profile-welcome/company-profile.component'
import { CompanyProfileEntityComponent } from './company-profile/company-profile-entity/company-profile-entity.component'
import { CompanyFleetComponent } from './company-profile/company-fleet/company-fleet.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    },
    
    children: [
      {
        path: 'company-welcome',
        component: CompanyWelcomeProfileComponent,
        children: [
      
        ]
      },
      {
        path: 'company-entity',
        component: CompanyProfileEntityComponent
      },
      {
        path: 'fleet',
        component: CompanyFleetComponent
      }
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}