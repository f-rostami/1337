import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilterOption } from '../../employee/models/filter-option.interface';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() itemType: string;
  @Input() items: any[];
  @Input() filterOptions: IFilterOption[];
  @Output() onSort = new EventEmitter<string>();
  @Output() onApplyFilter = new EventEmitter<boolean>();

  constructor(private _layoutSrvc: LayoutService) {
  }

  ngOnInit(): void {
    this._layoutSrvc.setCmptType(this.itemType);
  }

  sortHandle(event: any) {
    this.onSort.next(event);
  }

  onFilter(event: any) {
    this.onApplyFilter.next(event)
  }

}
