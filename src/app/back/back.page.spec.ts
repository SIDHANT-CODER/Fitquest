import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackPage } from './back.page';

describe('BackPage', () => {
  let component: BackPage;
  let fixture: ComponentFixture<BackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
