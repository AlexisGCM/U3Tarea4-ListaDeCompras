import { Component } from '@angular/core';
import { Insumo } from '../models/insumos';
import { insumosService } from '../services/insumos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  insumos: Insumo[];

  constructor(private insumosService: insumosService) {
    this.insumos = this.insumosService.getInsumos();
  }
}
