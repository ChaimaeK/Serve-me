import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotOffreComponent } from './depot-offre.component';

describe('DepotOffreComponent', () => {
  let component: DepotOffreComponent;
  let fixture: ComponentFixture<DepotOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
