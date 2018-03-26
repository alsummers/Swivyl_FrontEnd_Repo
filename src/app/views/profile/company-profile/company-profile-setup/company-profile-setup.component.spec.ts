import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileSetupComponent } from './company-profile-setup.component';

describe('CompanyProfileSetupComponent', () => {
  let component: CompanyProfileSetupComponent;
  let fixture: ComponentFixture<CompanyProfileSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
