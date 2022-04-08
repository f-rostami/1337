import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() itemType: string;
  @Input() items: any[];
  @Output() onSort = new EventEmitter<string>();

  constructor(private _layoutSrvc: LayoutService) {
  }

  ngOnInit(): void {
    this._layoutSrvc.setCmptType(this.itemType);
  }

  sortHandle(event: any) {
    this.onSort.next(event);
  }

}
