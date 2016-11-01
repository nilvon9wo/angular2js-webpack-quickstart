/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/* App Root */
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module';
import { CoreModule } from './core/core.module';

/* Misc */
import './rxjs-extensions';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule( {
    bootstrap: [TourOfHeroesComponent],
    declarations: [TourOfHeroesComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContactsModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        HttpModule,
        InMemoryWebApiModule.forRoot( InMemoryDataService )
    ],
})

export class AppModule { }
