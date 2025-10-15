import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegsPage } from './legs.page';

describe('LegsPage', () => {
  let component: LegsPage;
  let fixture: ComponentFixture<LegsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
