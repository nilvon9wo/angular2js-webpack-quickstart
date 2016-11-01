import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppTitleComponent } from './app-title/app-title.component';
import { ContactsModule } from './contacts/contacts.module';
import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroDetailsComponent } from './tour-of-heroes/heroes/hero-details/hero-details.component';
import { HeroDaoService } from './tour-of-heroes/heroes/hero-data/hero-dao.service';
import { HeroListComponent } from './tour-of-heroes/heroes/hero-list/hero-list.component';
import { HeroSearchComponent } from './tour-of-heroes/heroes/hero-search/hero-search.component';
import { HighlightDirective } from './highlight.directive';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { UserService } from './users/user.service';


@NgModule( {
    bootstrap: [TourOfHeroesComponent],
    declarations: [
        AppTitleComponent,
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
        ContactsModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot( InMemoryDataService)
    ],
    providers: [HeroDaoService, UserService]
})

export class AppModule { }
