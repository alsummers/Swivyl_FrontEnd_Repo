import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AssetsComponent } from './assets.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsComponent,
    data: {
      title: 'Assets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {}