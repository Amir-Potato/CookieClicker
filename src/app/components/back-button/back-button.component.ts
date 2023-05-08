import { Component, Input, inject } from '@angular/core';
import { StoreService } from '../../engine/services/store.service';
import type { menuItems } from 'src/app/engine/types/menuItems';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
    imports: [SvgIconComponent],
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
    standalone: true
})
export class BackButtonComponent {
  @Input('sub-menu') subMenu: menuItems = 'title';
  store = inject(StoreService);

  constructor() {}

  back() {
    this.store.currentSubmenu.next(this.subMenu);
  }
}
