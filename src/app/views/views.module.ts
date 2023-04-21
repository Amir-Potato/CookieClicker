import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
