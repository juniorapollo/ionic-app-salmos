import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinarioPage } from './hinario.page';

describe('HinarioPage', () => {
  let component: HinarioPage;
  let fixture: ComponentFixture<HinarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
