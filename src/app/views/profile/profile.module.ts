import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routes';

@NgModule({
  imports: [
    FormsModule,
    ProfileRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }