import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginRegisterComponent } from './app-login-register.component';

describe('AppLoginRegisterComponent', () => {
  let component: AppLoginRegisterComponent;
  let fixture: ComponentFixture<AppLoginRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoginRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
