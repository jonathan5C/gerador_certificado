import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondButton } from './second-button';

describe('SecondButton', () => {
  let component: SecondButton;
  let fixture: ComponentFixture<SecondButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
