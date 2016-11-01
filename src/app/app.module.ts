import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryHeroDataService } from './tour-of-heroes/heroes/hero-data/in-memory-hero-data.service';

import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroDetailsComponent } from './tour-of-heroes/heroes/hero-details/hero-details.component';
import { HeroDaoService } from './tour-of-heroes/heroes/hero-data/hero-dao.service';
import { HeroListComponent } from './tour-of-heroes/heroes/hero-list/hero-list.component';
import { HeroSearchComponent } from './tour-of-heroes/heroes/hero-search/hero-search.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

import { HighlightDirective } from './highlight.directive';

@NgModule( {
    bootstrap: [TourOfHeroesComponent],
    declarations: [
        DashboardComponent,
        HeroDetailsComponent,
        HeroListComponent,
        HeroSearchComponent,
        HighlightDirective,
        TourOfHeroesComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot( InMemoryHeroDataService )
    ],
    providers: [HeroDaoService]
})

export class AppModule { }
