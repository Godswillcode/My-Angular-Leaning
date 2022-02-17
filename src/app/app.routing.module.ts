import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard.service";
import { ObsHomeComponent } from "./observables/home/home.component";
import { ObsUserComponent } from "./observables/user/user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./routing/home/home.component";
import { CanDeactivateGuard } from "./routing/servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./routing/servers/edit-server/edit-server.component";
import { ServerResolver } from "./routing/servers/server/server-resolver.service";
import { ServerComponent } from "./routing/servers/server/server.component";
import { ServersComponent } from "./routing/servers/servers.component";
import { UserComponent } from "./routing/users/user/user.component";
import { UsersComponent } from "./routing/users/users.component";

// == ROUTING LECTURE
/* const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'users',
      component: UsersComponent,
      children: [{ path: ':id/:name', component: UserComponent }],
    },
    {
      path: 'servers',
    //  canActivate: [AuthGuard],//
     canActivateChild: [AuthGuard],
      component: ServersComponent,
      children: [
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
      ],
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
  ]; */

// == OBSERVABLES LECTURE
  const appRoutes: Routes = [
    {path: '', component: ObsHomeComponent},
    {path: 'user/:id', component: ObsUserComponent}
  ];
  

@NgModule({
 imports: [
    //  RouterModule.forRoot(appRoutes, {useHash: true})
     RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})

export class AppRoutingModule {

}