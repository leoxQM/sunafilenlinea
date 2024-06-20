import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CServiciosSunafilComponent } from './c-servicios-sunafil.component';

describe('CServiciosSunafilComponent', () => {
  let component: CServiciosSunafilComponent;
  let fixture: ComponentFixture<CServiciosSunafilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CServiciosSunafilComponent]
    });
    fixture = TestBed.createComponent(CServiciosSunafilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
