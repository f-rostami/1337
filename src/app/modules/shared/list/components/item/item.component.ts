import { AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterViewInit {

  @Input() item: any;
  @ViewChild('entry', {  static: false,read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _layoutSrvc: LayoutService
  ) { }

  ngAfterViewInit(): void {
    const factory = this._resolver.resolveComponentFactory<any>(this._layoutSrvc.getComponentType());
    const createdCmpt = this.entry.createComponent(factory);
    createdCmpt.instance.itemDt = this.item;
    createdCmpt.changeDetectorRef.detectChanges();
  }

}
