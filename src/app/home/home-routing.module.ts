import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
    {
      path: 'pokemon/:action',
      component: HomeComponent,
      data: { title: 'Home' },
    },
    { path: 'pokemon', component: HomeComponent, data: { title: marker('Cadena Evolutiva') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
