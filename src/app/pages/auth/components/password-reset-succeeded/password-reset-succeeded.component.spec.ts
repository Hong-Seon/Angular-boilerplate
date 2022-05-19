import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetSucceededComponent } from './password-reset-succeeded.component';

describe('PasswordResetSucceededComponent', () => {
  let component: PasswordResetSucceededComponent;
  let fixture: ComponentFixture<PasswordResetSucceededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetSucceededComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetSucceededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
