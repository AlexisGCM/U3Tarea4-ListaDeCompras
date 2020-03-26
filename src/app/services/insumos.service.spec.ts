import { TestBed } from '@angular/core/testing';

import { insumosService } from './insumos.service';

describe('InsumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: insumosService = TestBed.get(insumosService);
    expect(service).toBeTruthy();
  });
});
