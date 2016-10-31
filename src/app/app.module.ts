import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';
import { HeroDetailComponent } from './tour-of-heroes/hero-detail/hero-detail.component';

@NgModule({
    bootstrap: [ TourOfHeroesComponent ],
    declarations: [ TourOfHeroesComponent, HeroDetailComponent ],
    imports: [ BrowserModule, FormsModule ]
})

export class AppModule {}
