import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChestPage } from './chest.page';

describe('ChestPage', () => {
  let component: ChestPage;
  let fixture: ComponentFixture<ChestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
