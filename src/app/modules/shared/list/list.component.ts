import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() itemType: string;
  @Input() items: any[];

  constructor(private _layoutSrvc: LayoutService) {
  }

  ngOnInit(): void {
    this._layoutSrvc.setCmptType(this.itemType);
  }

}
