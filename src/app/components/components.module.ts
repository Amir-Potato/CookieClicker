import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsComponent } from './credits/credits.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { OptionsComponent } from './options/options.component';
import { LoadComponent } from './load/load.component';


@NgModule({
  declarations: [CreditsComponent, BackButtonComponent, OptionsComponent, LoadComponent],
  imports: [CommonModule],
  exports: [CreditsComponent],
})
export class ComponentsModule {}
