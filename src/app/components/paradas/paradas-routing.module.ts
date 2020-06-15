import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParadasPage } from './paradas.page';

const routes: Routes = [
  {
    path: '',
    component: ParadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParadasPageRoutingModule {}
