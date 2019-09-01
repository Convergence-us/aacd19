import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsamplePage } from './loginsample.page';

describe('LoginsamplePage', () => {
  let component: LoginsamplePage;
  let fixture: ComponentFixture<LoginsamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
