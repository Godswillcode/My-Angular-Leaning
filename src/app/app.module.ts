import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { BetterHighLightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { ActiveUsersComponent } from './services/assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services/assignment/inactive-users/inactive-users.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    UnlessDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [BrowserModule],
  providers: [AccountsService, LoggingService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
