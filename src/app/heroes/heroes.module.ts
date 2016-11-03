import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroDaoService } from './hero-data/hero-dao.service';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule( {
    declarations: [
        HeroDashboardComponent,
        HeroDetailsComponent,
        HeroHeaderComponent,
        HeroListComponent,
        HeroSearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        SharedModule.forChild( { color: 'powderblue' })
    ],
    providers: [HeroDaoService]
})

export class HeroesModule { }