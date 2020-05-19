import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinginPage } from './singin.page';

const routes: Routes = [
  {
    path: '',
    component: SinginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinginPageRoutingModule {}
