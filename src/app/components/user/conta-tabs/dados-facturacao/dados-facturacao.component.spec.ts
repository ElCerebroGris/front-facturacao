import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFacturacaoComponent } from './dados-facturacao.component';

describe('DadosFacturacaoComponent', () => {
  let component: DadosFacturacaoComponent;
  let fixture: ComponentFixture<DadosFacturacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosFacturacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosFacturacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
