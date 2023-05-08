import { Component, Input, inject } from '@angular/core';
import { StoreService } from '../../engine/services/store.service';
import type { menuItems } from '../../engine/types/menuItems';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {
  @Input('sub-menu') subMenu: menuItems = 'title';
  store = inject(StoreService);

  constructor() {}

  back() {
    this.store.currentSubmenu.next(this.subMenu);
  }
}
