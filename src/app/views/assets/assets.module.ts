import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets.routes';
import { InsuredPropertyComponent } from './insured-property/insured-property.component';
import { InsuredFleetComponent } from './insured-fleet/insured-fleet.component';

@NgModule({
  imports: [
    FormsModule,
    AssetsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AssetsComponent, InsuredPropertyComponent, InsuredFleetComponent ]
})
export class AssetsModule { }