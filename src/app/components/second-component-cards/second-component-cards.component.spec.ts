import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentCardsComponent } from './second-component-cards.component';

describe('SecondComponentCardsComponent', () => {
  let component: SecondComponentCardsComponent;
  let fixture: ComponentFixture<SecondComponentCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondComponentCardsComponent]
    });
    fixture = TestBed.createComponent(SecondComponentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
