import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroRoutingModule } from './hero-routing.module';

import { HeroComponent } from './hero/hero.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroDaoService } from './hero-data/hero-dao.service';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule( {
    declarations: [
        HeroComponent,
        HeroDashboardComponent,
        HeroDetailsComponent,
        HeroListComponent,
        HeroSearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    providers: [HeroDaoService]
})

export class HeroesModule { }