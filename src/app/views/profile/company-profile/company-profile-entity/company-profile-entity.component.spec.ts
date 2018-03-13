import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEntityComponent } from './company-profile-entity.component';

describe('CompanyProfileEntityComponent', () => {
  let component: CompanyProfileEntityComponent;
  let fixture: ComponentFixture<CompanyProfileEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
