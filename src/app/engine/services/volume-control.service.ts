import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VolumeControlService {
  private musicVolumeSource = new BehaviorSubject<number>(
    this.getStoredVolume('musicVolume', 1)
  );
  private sfxVolumeSource = new BehaviorSubject<number>(
    this.getStoredVolume('sfxVolume', 1)
  );

  musicVolume$ = this.musicVolumeSource.asObservable();
  sfxVolume$ = this.sfxVolumeSource.asObservable();

  constructor() {}

  private getStoredVolume(key: string, defaultValue: number): number {
    const storedValue = localStorage.getItem(key);
    return storedValue ? parseFloat(storedValue) : defaultValue;
  }
  setMusicVolume(value: number): void {
    this.musicVolumeSource.next(value);
    localStorage.setItem('musicVolume', value.toString());
  }

  setSfxVolume(value: number): void {
    this.sfxVolumeSource.next(value);
    localStorage.setItem('sfxVolume', value.toString());
  }
}