import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaAddComponent } from './factura-add.component';

describe('FacturaAddComponent', () => {
  let component: FacturaAddComponent;
  let fixture: ComponentFixture<FacturaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
