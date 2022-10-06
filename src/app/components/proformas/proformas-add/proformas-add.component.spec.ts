import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformasAddComponent } from './proformas-add.component';

describe('ProformasAddComponent', () => {
  let component: ProformasAddComponent;
  let fixture: ComponentFixture<ProformasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProformasAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProformasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
