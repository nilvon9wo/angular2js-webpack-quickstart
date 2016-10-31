import { Component } from '@angular/core';

@Component({
    selector: 'tour-of-heroes',
    styles: [require('./tour-of-heroes.component.css')],
    template: require( './tour-of-heroes.component.html' )
})

export class TourOfHeroesComponent {
    title = 'Tour of Heroes';
    hero = 'windstorm';
}
