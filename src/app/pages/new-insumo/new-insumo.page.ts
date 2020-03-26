import { Component, OnInit } from '@angular/core';

import {Insumo } from '../../models/insumos';
import { insumosService } from '../../services/insumos.service';

import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-insumo',
  templateUrl: './new-insumo.page.html',
  styleUrls: ['./new-insumo.page.scss'],
})
export class NewInsumoPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private service: insumosService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      cantidad: ['', Validators.compose([Validators.required])]
    });
  }

  saveInsumo() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newInsumo({
        name: this.myForm.get('name').value,
        cantidad: this.myForm.get('cantidad').value,
        active: false
      });
    }
  }
}
