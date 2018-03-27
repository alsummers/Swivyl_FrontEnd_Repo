import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import {
  AppLoginRegisterComponent,
} from './app-login-register/app-login-register.component'
import { LoggedInAuthGuard } from './authguardservices';
import { GoogleLoginComponent } from './app-login-register/google-login.component';
import { PolicyCornerComponent } from './views/policy-corner/policy-corner.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard]
  },
  {
    path: '',
    component: FullLayoutComponent,
    // canActivate: [LoggedInAuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'assets',
        loadChildren: './views/assets/assets.module#AssetsModule'
      },
      {
        path: 'policy-corner',
        component: PolicyCornerComponent
      },
      {
        path: 'contact-agent',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'login',
    component: AppLoginRegisterComponent
  },
  {
    path: 'googlelogin',
    component: GoogleLoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
             
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
