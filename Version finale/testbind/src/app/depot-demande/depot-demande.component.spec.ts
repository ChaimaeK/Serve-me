import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotDemandeComponent } from './depot-demande.component';

describe('DepotDemandeComponent', () => {
  let component: DepotDemandeComponent;
  let fixture: ComponentFixture<DepotDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
