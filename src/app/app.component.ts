import { Component, HostListener } from '@angular/core';
import { LayoutService } from './modules/shared/list/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // host: {
  //   '(window:resize)': 'onResize($event)'
  // }
})
export class AppComponent {
  title = '1337';

  constructor(private _layoutSrvc: LayoutService) { }

  // onResize(event: any) {
  //   event.target.innerWidth < 678
  //     ? this._layoutSrvc.setActiveLayout('grid')
  //     : this._layoutSrvc.setActiveLayout('list');

  // }
}
