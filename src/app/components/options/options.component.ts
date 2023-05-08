import { Component } from '@angular/core';
import { BackButtonComponent } from "../back-button/back-button.component";

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss'],
    standalone: true,
    imports: [BackButtonComponent]
})
export class OptionsComponent {

}
