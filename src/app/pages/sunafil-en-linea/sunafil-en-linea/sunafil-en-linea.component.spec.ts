import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunafilEnLineaComponent } from './sunafil-en-linea.component';

describe('SunafilEnLineaComponent', () => {
  let component: SunafilEnLineaComponent;
  let fixture: ComponentFixture<SunafilEnLineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SunafilEnLineaComponent]
    });
    fixture = TestBed.createComponent(SunafilEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
