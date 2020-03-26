import { Injectable } from '@angular/core';
import { Insumo } from '../models/insumos';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class insumosService {

  private insumos: Insumo[] = new Array();

  constructor() {
    this.insumos.push({
      name: 'Tortillas',
      cantidad: '1 kilos',
      active: true
    });
    this.insumos.push({
      name: 'Huevos',
      cantidad: '2 kilos',
      active: false
    });
    this.insumos.push({
      name: 'Jabon',
      cantidad: '2',
      active: true
    });
  }

  changeStatus(position: number) {
    this.insumos[position].active = !this.insumos[position].active;
  }

  getInsumos(): Insumo[] {
    return this.insumos;
  }

  newInsumo(insumo: Insumo): void {
    this.insumos.push(insumo);
  }
}