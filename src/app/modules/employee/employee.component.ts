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
  filterOptions: IFilterOption[] = [
    {
      field: 'name',
      value: ''
    },
    {
      field: 'office',
      value: ''
    }
  ];


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
    // this.items = this._employeeSrvc.sortEmployees(sortOption);
    this.items = this._employeeSrvc.sortBy([...this.items],sortOption);
  }



  applyFilter(event: boolean) {
    if (event) {
      this.items = this._employeeSrvc.filterBy(this._employeeSrvc.employees, this.filterOptions);
    }
  }

}
