import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepasswordchangePage } from './profilepasswordchange.page';

describe('ProfilepasswordchangePage', () => {
  let component: ProfilepasswordchangePage;
  let fixture: ComponentFixture<ProfilepasswordchangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepasswordchangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepasswordchangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
