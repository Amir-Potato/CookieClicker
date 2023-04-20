import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/engine/window.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  windowService = inject(WindowService);

  windowSubscription: Subscription;

  constructor() {
    this.windowSubscription = this.windowService.window$.subscribe((window) => {
      window.document.title = 'Home';
  });
}
  ngOnDestroy(): void {
    this.windowSubscription.unsubscribe();
  }



}