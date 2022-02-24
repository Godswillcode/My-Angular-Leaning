import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { UsersComponent } from './routing/users/users.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UserComponent } from './routing/users/user/user.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { ServersService } from './routing/servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard.service';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { ObsHomeComponent } from './observables/home/home.component';
import { ObsUserComponent } from './observables/user/user.component';
import { ObservableComponent } from './observables/observables-component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormTdAssignComponent } from './form-td-assign/form-td-assign.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpClientModule } from '@angular/common/http';

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
    RoutingComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ObsHomeComponent,
    ObsUserComponent,
    ObservableComponent,
    FormTdComponent,
    FormTdAssignComponent,
    FormReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    HttpRequestComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    AccountsService,
    LoggingService,
    CounterService,
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
