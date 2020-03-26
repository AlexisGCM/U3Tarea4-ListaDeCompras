import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewInsumoPageRoutingModule } from './new-insumo-routing.module';

import { NewInsumoPage } from './new-insumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewInsumoPageRoutingModule
  ],
  declarations: [NewInsumoPage]
})
export class NewInsumoPageModule {}
