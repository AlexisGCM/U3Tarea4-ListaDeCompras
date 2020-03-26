import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewInsumoPage } from './new-insumo.page';

describe('NewInsumoPage', () => {
  let component: NewInsumoPage;
  let fixture: ComponentFixture<NewInsumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInsumoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewInsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
