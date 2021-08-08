import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonhoPage } from './sonho.page';

const routes: Routes = [
  {
    path: '',
    component: SonhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonhoPageRoutingModule {}
