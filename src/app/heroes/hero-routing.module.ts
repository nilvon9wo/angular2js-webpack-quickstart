import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent }from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  { path: '',
    component: HeroComponent,
    children: [
      { path: '',    component: HeroListComponent },
      { path: ':id', component: HeroDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}