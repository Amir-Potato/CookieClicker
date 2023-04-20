import { Component, inject } from '@angular/core';
import { WindowService } from 'src/app/engine/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  windowService = inject(WindowService);

  constructor() {
    this.windowService.mouseData$.subscribe((mouse) => {
      
    })
  }
}
