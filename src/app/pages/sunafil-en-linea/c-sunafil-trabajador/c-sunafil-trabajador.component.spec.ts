import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSunafilTrabajadorComponent } from './c-sunafil-trabajador.component';

describe('CSunafilTrabajadorComponent', () => {
  let component: CSunafilTrabajadorComponent;
  let fixture: ComponentFixture<CSunafilTrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CSunafilTrabajadorComponent]
    });
    fixture = TestBed.createComponent(CSunafilTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
