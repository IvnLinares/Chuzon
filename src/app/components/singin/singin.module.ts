import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinginPageRoutingModule } from './singin-routing.module';

import { SinginPage } from './singin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinginPageRoutingModule
  ],
  declarations: [SinginPage]
})
export class SinginPageModule {}
