import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets.routes';

@NgModule({
  imports: [
    FormsModule,
    AssetsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AssetsComponent ]
})
export class AssetsModule { }