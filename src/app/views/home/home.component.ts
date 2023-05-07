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
  submenuActive:boolean = false;

  
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
  }


  loadCredits() {
    console.log('load credits');
    this.submenuActive = true;
  }

  closeSubmenu() {
    this.submenuActive = false;
  }
  
  ngOnDestroy(): void {
    this.windowSubscription.unsubscribe();
  }



}