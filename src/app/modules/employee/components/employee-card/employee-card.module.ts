import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    EmployeeCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    EmployeeCardComponent
  ]
})
export class EmployeeCardModule { }
