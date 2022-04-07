import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { HeaderModule } from './components/header/header.module';
import { ContentModule } from './components/content/content.module';




@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ContentModule,

  ],
  exports: [
    ListComponent
  ],

})
export class ListModule { }
