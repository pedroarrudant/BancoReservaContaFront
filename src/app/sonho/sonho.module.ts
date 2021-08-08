import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonhoPageRoutingModule } from './sonho-routing.module';

import { SonhoPage } from './sonho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonhoPageRoutingModule
  ],
  declarations: [SonhoPage]
})

export class SonhoPageModule {}
