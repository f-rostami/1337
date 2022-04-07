import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterViewInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _layoutSrvc: LayoutService
  ) { }

  ngAfterViewInit(): void {
    const factory = this._resolver.resolveComponentFactory(this._layoutSrvc.getComponentType())
    this.entry.createComponent(factory)
  }

}
