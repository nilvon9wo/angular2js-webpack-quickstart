import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailsComponent }from './hero-details/hero-details.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';

const routes: Routes = [
  { path: '',
    component: HeroHeaderComponent,
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