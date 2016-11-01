/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/* App Root */
import { AppTitleComponent } from './app-title/app-title.component';
import { HighlightDirective } from './highlight.directive';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { UserService } from './users/user.service';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module';

/* Misc */
import './rxjs-extensions';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule( {
    bootstrap: [TourOfHeroesComponent],
    declarations: [
        AppTitleComponent,
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
    providers: [UserService]
})

export class AppModule { }
