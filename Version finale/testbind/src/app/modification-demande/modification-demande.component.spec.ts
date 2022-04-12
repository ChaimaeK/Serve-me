import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDemandeComponent } from './modification-demande.component';

describe('ModificationDemandeComponent', () => {
  let component: ModificationDemandeComponent;
  let fixture: ComponentFixture<ModificationDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
