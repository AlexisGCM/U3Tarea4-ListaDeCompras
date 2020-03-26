import { Component } from '@angular/core';
import { Insumo } from '../models/insumos';
import { insumosService } from '../services/insumos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  insumos: Insumo[];

  constructor(private insumosService: insumosService) {
    this.insumos = this.insumosService.getInsumos();
  }
}
