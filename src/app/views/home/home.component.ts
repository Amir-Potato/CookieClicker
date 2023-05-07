import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/engine/window.service';
import { app-credits } from src/app/credits/credits.component;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  windowService = inject(WindowService);
  submenuActive:boolean = false;
  subCredits:boolean = false;
  subOptions:boolean = false;

  
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

  }


  loadOptions() {
    console.log('load options');
    this.submenuActive = true;
    this.subOptions = true; 
  }


  loadCredits() {
    console.log('load credits');
    this.submenuActive = true;
    this.subCredits = true;
  }

  closeSubmenu() {
    this.submenuActive = false;
    this.subCredits = false;
    this.subOptions = false;
  }
  
  ngOnDestroy(): void {
    this.windowSubscription.unsubscribe();
  }



}