import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContaComponent } from './user-conta.component';

describe('UserContaComponent', () => {
  let component: UserContaComponent;
  let fixture: ComponentFixture<UserContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
