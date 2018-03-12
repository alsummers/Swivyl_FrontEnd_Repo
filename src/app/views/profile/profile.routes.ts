import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CompanyWelcomeProfileComponent } from './company-profile/company-profile/company-profile.component'

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
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}