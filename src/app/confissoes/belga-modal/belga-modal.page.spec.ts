import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgaModalPage } from './belga-modal.page';

describe('BelgaModalPage', () => {
  let component: BelgaModalPage;
  let fixture: ComponentFixture<BelgaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelgaModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
