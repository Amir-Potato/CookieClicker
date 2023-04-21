import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Save } from './types/save';
import { Settings } from './types/settings';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  currentSave$ = new BehaviorSubject<Save>(new Save(1));
  currentSettings$ = new BehaviorSubject<Settings>({
    volume: 100,
    sfx: 100,
    music: 100,
  });

  constructor() {}
}
