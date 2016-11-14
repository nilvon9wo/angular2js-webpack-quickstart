import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component( {
    selector: 'hero-card',
    template: require( './hero-card.component.html' )
})

export class HeroCardComponent {
    @Input() hero: Hero;
}