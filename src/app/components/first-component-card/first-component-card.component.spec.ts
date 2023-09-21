import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentCardComponent } from './first-component-card.component';

describe('FirstComponentCardComponent', () => {
  let component: FirstComponentCardComponent;
  let fixture: ComponentFixture<FirstComponentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponentCardComponent]
    });
    fixture = TestBed.createComponent(FirstComponentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
