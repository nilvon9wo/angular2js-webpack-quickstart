import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    bootstrap: [ TourOfHeroesComponent ],
    declarations: [ TourOfHeroesComponent ],
    imports: [ BrowserModule ]
})

export class AppModule {}
