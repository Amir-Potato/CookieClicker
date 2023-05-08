import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ViewsModule} from './views/views.module';
import { ComponentsModule } from './components/components.module';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { backIcon } from './svg/back';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    ComponentsModule
  ],
  providers: [
    provideSvgIcons([backIcon])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
