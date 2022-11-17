import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoContaComponent } from './saldo-conta.component';

describe('SaldoContaComponent', () => {
  let component: SaldoContaComponent;
  let fixture: ComponentFixture<SaldoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
