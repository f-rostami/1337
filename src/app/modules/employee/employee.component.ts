import { Component, OnInit } from '@angular/core';
import { IEmployee } from './models/employee.interface';
import { IFilterOption } from './models/filter-option.interface';
import { ISortOptions } from './models/sort-option.interface';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  items: IEmployee[] = [];
  filter: string;

  constructor(private _employeeSrvc: EmployeeService) { }

  ngOnInit(): void {
    this._employeeSrvc.getRandomEmployees()
      .subscribe({
        next: ((employees: IEmployee[]) => this.items = employees),
        error: console.log
      })
  }

  sortDt(event: any) {
    if (event === '') {
      this.items = this._employeeSrvc.employees;
      return;
    }
    const sortOption: ISortOptions[] = [
      {
        direction: event,
        field: 'name'
      },
      {
        direction: event,
        field: 'office'
      }
    ]
    this.items = this._employeeSrvc.sortEmployees(sortOption);
  }

  filterOptions: IFilterOption[] = [
    {
      field: 'name',
      value: ''
    },
    {
      field: 'office',
      value: ''
    }
  ]

  // filterHandle() {
  //   const filterOptions: IFilterOption[] = [
  //     {
  //       field: 'name',
  //       value: this.filter
  //     },
  //     {
  //       field: 'office',
  //       value: this.filter
  //     }
  //   ]
  //   console.log(this._employeeSrvc._filterBy(this.items, filterOptions))
  // }

  applyFilter(event: boolean) {
    // let hasValFilter = false;
    // this.filterOptions.forEach(x => {
    //   if (x.value !== '') {
    //     hasValFilter = true;
    //   }
    // })

    // if (!hasValFilter) {
    //   this.items = this._employeeSrvc.employees;
    //   return;
    // }

    if (event) {
      this.items = this._employeeSrvc._filterBy(this._employeeSrvc.employees, this.filterOptions);
    }
  }

}
