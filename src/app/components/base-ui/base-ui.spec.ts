import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUi } from './base-ui';

describe('BaseUi', () => {
  let component: BaseUi;
  let fixture: ComponentFixture<BaseUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
