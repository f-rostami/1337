import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilterOption } from 'src/app/modules/employee/models/filter-option.interface';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeLayout: string = 'grid';
  activeSortDirection: string = '';

  @Output() onSort = new EventEmitter<string>();
  @Output() onFilter = new EventEmitter<boolean>();
  @Input() filters: any[];

  constructor(private _layoutSrvc: LayoutService) { }

  ngOnInit(): void {
    this._layoutSrvc.setActiveLayout(this.activeLayout)
  }

  toggleActiveLayout(layout: string) {
    this._layoutSrvc.setActiveLayout(layout);
    this.activeLayout = layout;
  }

  sort() {

    if (this.activeSortDirection === '') {
      this.activeSortDirection = 'asc';
    } else if (this.activeSortDirection === 'asc') {
      this.activeSortDirection = 'desc'
    } else {
      this.activeSortDirection = ''
    }

    this.onSort.next(this.activeSortDirection);

  }

  applyFilter() {
    this.onFilter.next(true);
  }

}
