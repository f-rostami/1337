import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent  {

  employee: IEmployee;

  constructor() { }




}
