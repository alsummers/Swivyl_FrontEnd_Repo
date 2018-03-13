import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWelcomeProfileComponent } from './company-profile.component';

describe('CompanyProfileComponent', () => {
  let component: CompanyWelcomeProfileComponent;
  let fixture: ComponentFixture<CompanyWelcomeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyWelcomeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWelcomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
