import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeLayout: string = 'list';

  constructor(private _layoutSrvc: LayoutService) { }

  ngOnInit(): void {
    this._layoutSrvc.setActiveLayout(this.activeLayout)
  }

  toggleActiveLayout(layout: string) {
    this._layoutSrvc.setActiveLayout(layout);
    this.activeLayout = layout;
  }

}
