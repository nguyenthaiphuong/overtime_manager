import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

import { PositionsComponent } from './positions/positions.component'
import { PositionFormComponent } from './positions/position-form/position-form.component'

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  { path: '', pathMatch: 'full', component: PositionsComponent},
  { path: 'positions/new', component: PositionFormComponent},
  { path: 'positions/:id', component: PositionFormComponent },
  { path: 'positions/:id/edit', component: PositionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes)