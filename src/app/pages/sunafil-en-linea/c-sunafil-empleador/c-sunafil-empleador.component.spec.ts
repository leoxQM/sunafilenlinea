import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSunafilEmpleadorComponent } from './c-sunafil-empleador.component';

describe('CSunafilEmpleadorComponent', () => {
  let component: CSunafilEmpleadorComponent;
  let fixture: ComponentFixture<CSunafilEmpleadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CSunafilEmpleadorComponent]
    });
    fixture = TestBed.createComponent(CSunafilEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
