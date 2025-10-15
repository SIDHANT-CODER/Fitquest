import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CARDIOPage } from './cardio.page';

describe('CARDIOPage', () => {
  let component: CARDIOPage;
  let fixture: ComponentFixture<CARDIOPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CARDIOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
