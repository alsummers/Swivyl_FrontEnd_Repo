import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyShareholderComponent } from './company-shareholder.component';

describe('CompanyShareholderComponent', () => {
  let component: CompanyShareholderComponent;
  let fixture: ComponentFixture<CompanyShareholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyShareholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
