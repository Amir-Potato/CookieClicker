import { Component } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { VolumeSliderComponent } from '../volume-slider/volume-slider.component';
import { VolumeControlService } from 'src/app/engine/services/volume-control.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
  standalone: true,
  imports: [BackButtonComponent, VolumeSliderComponent],
})
export class OptionsComponent {
    musicVolume!: number;
    sfxVolume!: number;

  constructor(private volumeControlService: VolumeControlService) {}

  ngOnInit(): void {
    this.volumeControlService.musicVolume$.subscribe(volume => {
      this.musicVolume = volume;
    });

    this.volumeControlService.sfxVolume$.subscribe(volume => {
      this.sfxVolume = volume;
    });
  }

  onMusicVolumeChange(newValue: number): void {
    this.volumeControlService.setMusicVolume(newValue);
  }

  onSfxVolumeChange(newValue: number): void {
    this.volumeControlService.setSfxVolume(newValue);
  }
}
