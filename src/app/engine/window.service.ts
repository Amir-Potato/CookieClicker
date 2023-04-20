import { Injectable, Renderer2, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mouse, MouseButtons } from './types/mouse';
import { WindowData } from './types/window';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  readonly renderer = inject(Renderer2);

  window$ = new Observable<Window>((ob) => {
    this.renderer.listen('window', 'load', (win) => {
      ob.next(win.currentTarget as Window);
      ob.complete();
    });
  });

  mouseData$ = new BehaviorSubject<Mouse>({
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    button: MouseButtons.NONE,
    alt: false,
    shift: false,
    ctrl: false,
    command: false,
  });

  windowData$ = new BehaviorSubject<WindowData>({
    width: 0,
    height: 0,
  });

  constructor() {
    this.window$.subscribe((win) => {
      win.addEventListener('mousemove', (ev) => {
        this.updateMouse(ev);
      });
      win.addEventListener('mousedown', (ev) => {
        this.updateMouse(ev);
      });
      win.addEventListener('mouseup', (ev) => {
        this.updateMouse(ev);
      });

      this.updateWindow(win);

      win.addEventListener('resize', (ev) => {
        this.updateWindow(ev.currentTarget as Window);
      });
    });
  }

  updateMouse(ev: MouseEvent): void {
    this.mouseData$.next({
      x: ev.clientX,
      y: ev.clientY,
      dx: ev.movementX,
      dy: ev.movementY,

      button: ev.buttons,
      alt: ev.altKey,
      shift: ev.shiftKey,
      ctrl: ev.ctrlKey,
      command: ev.metaKey,
    });
  }

  updateWindow(win: Window): void {
    this.windowData$.next({
      width: win.innerWidth,
      height: win.innerHeight,
    });
  }
}
