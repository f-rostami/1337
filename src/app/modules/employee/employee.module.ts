import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { ListModule } from '../shared/list/list.module';
import { EmployeeCardModule } from './components/employee-card/employee-card.module';



@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EmployeeComponent
    }]),
    ListModule,
    EmployeeCardModule
  ]
})
export class EmployeeModule { }
