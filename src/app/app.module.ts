import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule, NgIf, NgForOf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {GoogleSignInComponent} from 'angular-google-signin';


// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
} from './containers';

import {
  AppLoginRegisterComponent
} from './app-login-register/app-login-register.component'

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  APP_SIDEBAR_NAV
  
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  APP_SIDEBAR_NAV,
  AppLoginRegisterComponent,
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AuthService } from './Services/auth.service';
import { FleetService } from './Services/fleet.service';
import { PropertyService } from './Services/property.service';

import { EntityService } from './Services/entity.service';
import { CompanyService } from './Services/company.service';
import { UserService } from './Services/user.service';
import { LoggedInAuthGuard } from './authguardservices';
import { GoogleLoginComponent } from './app-login-register/google-login.component';
import { PolicyCornerComponent } from './views/policy-corner/policy-corner.component';
import { ContactComponent } from './views/contact/contact.component';







@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    AppLoginRegisterComponent,
    GoogleSignInComponent,
    GoogleLoginComponent,
    PolicyCornerComponent,
    ContactComponent,
    

  ],
  providers: [
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    },
    AuthService,
    FleetService,
    PropertyService,
    EntityService,
    CompanyService,
    UserService,
    CompanyService,
    LoggedInAuthGuard

],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
