import { Component } from '@angular/core';
import { BackButtonComponent } from "../back-button/back-button.component";

@Component({
    selector: 'app-load',
    templateUrl: './load.component.html',
    styleUrls: ['./load.component.scss'],
    standalone: true,
    imports: [BackButtonComponent]
})
export class LoadComponent {

}
