import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeSrvc: EmployeeService) { }

  ngOnInit(): void {
    this._employeeSrvc.getRandomEmployees()
      .subscribe(console.log)
  }

}