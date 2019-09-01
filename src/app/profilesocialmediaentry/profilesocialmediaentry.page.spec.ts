import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesocialmediaentryPage } from './profilesocialmediaentry.page';

describe('ProfilesocialmediaentryPage', () => {
  let component: ProfilesocialmediaentryPage;
  let fixture: ComponentFixture<ProfilesocialmediaentryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesocialmediaentryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesocialmediaentryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
