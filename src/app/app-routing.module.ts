import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
