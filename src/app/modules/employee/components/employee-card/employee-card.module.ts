import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    EmployeeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeCardComponent
  ]
})
export class EmployeeCardModule { }
