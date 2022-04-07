import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ItemModule } from '../item/item.module';



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
