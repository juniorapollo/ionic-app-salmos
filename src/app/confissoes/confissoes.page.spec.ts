import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfissoesPage } from './confissoes.page';

describe('ConfissoesPage', () => {
  let component: ConfissoesPage;
  let fixture: ComponentFixture<ConfissoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfissoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfissoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
