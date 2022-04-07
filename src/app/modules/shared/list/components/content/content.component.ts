import { Component, Input } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input() items: { name: string }[];

  constructor(public _layoutSrvc: LayoutService) { }

}
