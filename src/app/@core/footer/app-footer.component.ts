import { Component, Input } from '@angular/core';
import { LayoutService } from '../service/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
})
export class AppFooterComponent {
  @Input() visInicioFooter = false;
  constructor(public layoutService: LayoutService) { }

}
