import { Injectable } from '@angular/core';
import { EmployeeCardComponent } from 'src/app/modules/employee/components/employee-card/employee-card.component';
import { EmptyComponent } from '../../empty/empty.component';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private activeLayout: string;
  private cmptType: string;

  cmpts = [
    {
      name: 'EmployeeCard',
      type: EmployeeCardComponent
    }
  ]

  setActiveLayout(name: string) {
    this.activeLayout = name;
  }

  getActiveLayout() {
    return this.activeLayout;
  }

  setCmptType(cmptTypeName: string) {
    this.cmptType = cmptTypeName;
  }

  getComponentType(): typeof EmptyComponent | typeof EmployeeCardComponent {
    const tp = this.cmpts.find(x => x.name === this.cmptType);
    if (tp)
      return tp.type
    return EmptyComponent;
  }

}
