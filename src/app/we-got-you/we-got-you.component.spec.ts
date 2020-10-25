/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeGotYouComponent } from './we-got-you.component';

describe('WeGotYouComponent', () => {
  let component: WeGotYouComponent;
  let fixture: ComponentFixture<WeGotYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeGotYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeGotYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
