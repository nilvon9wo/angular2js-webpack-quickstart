import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

@NgModule({
    bootstrap: [ TourOfHeroesComponent ],
    declarations: [ TourOfHeroesComponent ],
    imports: [ BrowserModule, FormsModule ]
})

export class AppModule {}
