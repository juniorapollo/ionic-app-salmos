import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBibliaPage } from './list-biblia.page';

describe('ListBibliaPage', () => {
  let component: ListBibliaPage;
  let fixture: ComponentFixture<ListBibliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBibliaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBibliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
