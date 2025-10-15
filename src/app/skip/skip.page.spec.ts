import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkipPage } from './skip.page';

describe('SkipPage', () => {
  let component: SkipPage;
  let fixture: ComponentFixture<SkipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
