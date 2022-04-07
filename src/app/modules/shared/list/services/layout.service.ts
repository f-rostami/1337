import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private activeLayout: string;

  setActiveLayout(name: string) {
    this.activeLayout = name;
  }

  getActiveLayout() {
    return this.activeLayout;
  }

}
