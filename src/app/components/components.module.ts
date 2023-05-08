import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsComponent } from './credits/credits.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [CreditsComponent, BackButtonComponent],
  imports: [CommonModule],
  exports: [CreditsComponent],
})
export class ComponentsModule {}
