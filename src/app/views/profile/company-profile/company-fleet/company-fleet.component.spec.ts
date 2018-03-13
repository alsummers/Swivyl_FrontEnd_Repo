import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFleetComponent } from './company-fleet.component';

describe('CompanyFleetComponent', () => {
  let component: CompanyFleetComponent;
  let fixture: ComponentFixture<CompanyFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
