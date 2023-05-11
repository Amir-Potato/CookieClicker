import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.scss'],
  standalone: true
})
export class VolumeSliderComponent {
  @Input() label: string = 'Volume';
  @Input() value: number = 1.0;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  onSliderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    this.value = newValue;
    this.valueChange.emit(newValue);
    
  }
}
