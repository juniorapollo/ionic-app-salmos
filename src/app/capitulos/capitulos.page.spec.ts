import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitulosPage } from './capitulos.page';

describe('CapitulosPage', () => {
  let component: CapitulosPage;
  let fixture: ComponentFixture<CapitulosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitulosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
