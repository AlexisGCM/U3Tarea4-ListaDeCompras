import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewInsumoPage } from './new-insumo.page';

const routes: Routes = [
  {
    path: '',
    component: NewInsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewInsumoPageRoutingModule {}
