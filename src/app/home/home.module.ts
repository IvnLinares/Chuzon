import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { AgmCoreModule } from '@agm/core';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY6yxUzxs5xxBpdX0jvN7livb08_YqCBU',})
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
