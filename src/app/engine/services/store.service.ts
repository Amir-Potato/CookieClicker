import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import type { menuItems } from '../types/menuItems';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  currentSubmenu: BehaviorSubject<menuItems> = new BehaviorSubject<menuItems>('title');
}
