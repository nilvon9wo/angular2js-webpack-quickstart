import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroDaoService } from './hero/hero-dao.service';

@Component({
    providers: [HeroDaoService],
    selector: 'tour-of-heroes',
    styles: [require('./tour-of-heroes.component.css')],
    template: require( './tour-of-heroes.component.html' )
})

export class TourOfHeroesComponent {
    public heroes: Hero[];
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    
    constructor(private heroDaoService: HeroDaoService) { 
    }
    
    ngOnInit(): void {
        this.initHeroes();
    }
    
    public initHeroes(): void {
        this.heroDaoService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    
    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
