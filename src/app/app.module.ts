import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { BetterHighLightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
