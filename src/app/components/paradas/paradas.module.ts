import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParadasPageRoutingModule } from './paradas-routing.module';

import { ParadasPage } from './paradas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParadasPageRoutingModule
  ],
  declarations: [ParadasPage]
})
export class ParadasPageModule {}
