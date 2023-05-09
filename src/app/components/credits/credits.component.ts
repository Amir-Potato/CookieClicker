import { Component } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    standalone: true,
    imports: [BackButtonComponent]
})
export class CreditsComponent {
  
}
