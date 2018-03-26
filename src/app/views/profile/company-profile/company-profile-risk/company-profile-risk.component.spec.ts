import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileRiskComponent } from './company-profile-risk.component';

describe('CompanyProfileRiskComponent', () => {
  let component: CompanyProfileRiskComponent;
  let fixture: ComponentFixture<CompanyProfileRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
