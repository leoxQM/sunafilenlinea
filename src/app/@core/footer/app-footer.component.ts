import { Component, inject, Input } from '@angular/core';
import { LayoutService } from '../service/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
})
export class AppFooterComponent {
  @Input() visInicioFooter = false;
  public layoutService = inject(LayoutService)
  constructor() { }

}
