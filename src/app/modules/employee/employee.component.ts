import { Component, OnInit } from '@angular/core';
import { IEmployee } from './models/employee.interface';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  items: IEmployee[] = [];

  constructor(private _employeeSrvc: EmployeeService) { }

  ngOnInit(): void {
    this._employeeSrvc.getRandomEmployees()
      .subscribe({
        next: ((employees: IEmployee[]) => this.items = employees),
        error: console.log
      })
  }

}
