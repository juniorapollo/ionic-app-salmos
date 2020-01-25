import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeidelbergModalPage } from './heidelberg-modal.page';

describe('HeidelbergModalPage', () => {
  let component: HeidelbergModalPage;
  let fixture: ComponentFixture<HeidelbergModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeidelbergModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeidelbergModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
