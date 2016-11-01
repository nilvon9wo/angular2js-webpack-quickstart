import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'hero-details',
    template: require( './hero-details.component.html' )
})

export class HeroDetailsComponent {
    @Input()
    public hero: Hero;
}
