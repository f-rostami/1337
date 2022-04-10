import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/shared/list/services/layout.service';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  productMode: boolean = false;
  itemDt: IEmployee;

  constructor(public _layoutSrvc: LayoutService) {
    this.productMode = environment.production
  }




}
