import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalmosPage } from './salmos.page';

describe('SalmosPage', () => {
  let component: SalmosPage;
  let fixture: ComponentFixture<SalmosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalmosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalmosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
