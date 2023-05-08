import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription, startWith } from 'rxjs';
import { WindowService } from '../../engine/services/window.service';
import { StoreService } from '../../engine/services/store.service';
import { CreditsComponent } from '../../components/credits/credits.component';
import { NgSwitch, NgSwitchCase, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchCase, NgFor, CreditsComponent, AsyncPipe]
})
export class HomeComponent implements OnDestroy {
  windowService = inject(WindowService);
  store = inject(StoreService);
  actions = [
    { text: 'New Game', action: () => this.newGame() },
    { text: 'Load Game', action: () => this.loadGame() },
    { text: 'Options', action: () => this.loadOptions() },
    { text: 'Credits', action: () => this.loadCredits() },
  ];

  windowSubscription: Subscription;

  constructor() {
    this.windowSubscription = this.windowService.window$.subscribe((window) => {
      window.document.title = 'Home';
    });
  }

  newGame() {
    console.log('new game');
  }

  loadGame() {
    console.log('load game');
    this.store.currentSubmenu.next('load');
  }

  loadOptions() {
    console.log('load options');
    this.store.currentSubmenu.next('options');
  }

  loadCredits() {
    console.log('load credits');
    this.store.currentSubmenu.next('credits');
  }

  ngOnDestroy(): void {
    this.windowSubscription.unsubscribe();
  }
}
