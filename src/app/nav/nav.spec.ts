import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nav } from './nav';

describe('Nav', () => {
  let component: nav;
  let fixture: ComponentFixture<nav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [nav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(nav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
