import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCertificado } from './item-certificado';

describe('ItemCertificado', () => {
  let component: ItemCertificado;
  let fixture: ComponentFixture<ItemCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCertificado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
