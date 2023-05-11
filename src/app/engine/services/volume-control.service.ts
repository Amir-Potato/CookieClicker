import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolumeControlService {
  private musicVolumeSource = new BehaviorSubject<number>(0.5);
  private sfxVolumeSource = new BehaviorSubject<number>(0.5);

  musicVolume$ = this.musicVolumeSource.asObservable();
  sfxVolume$ = this.sfxVolumeSource.asObservable();

  constructor() {}

  setMusicVolume(value: number): void {
    this.musicVolumeSource.next(value);
  }

  setSfxVolume(value: number): void {
    this.sfxVolumeSource.next(value);
  }
}