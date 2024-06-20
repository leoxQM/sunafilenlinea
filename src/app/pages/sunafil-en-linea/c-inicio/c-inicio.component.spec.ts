import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInicioComponent } from './c-inicio.component';

describe('CInicioComponent', () => {
  let component: CInicioComponent;
  let fixture: ComponentFixture<CInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CInicioComponent]
    });
    fixture = TestBed.createComponent(CInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
