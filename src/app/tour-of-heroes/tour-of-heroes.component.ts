import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
    selector: 'tour-of-heroes',
    styles: [require('./tour-of-heroes.component.css')],
    template: require( './tour-of-heroes.component.html' )
})

export class TourOfHeroesComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
                  id: 1,
                  name: 'Windstorm'
    };
}
