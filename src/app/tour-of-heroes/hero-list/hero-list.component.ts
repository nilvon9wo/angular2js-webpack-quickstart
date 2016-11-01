import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDaoService } from '../hero-dao/hero-dao.service';

@Component({
    providers: [HeroDaoService],
    selector: 'hero-list',
    styles: [require('./hero-list.component.css')],
    template: require( './hero-list.component.html' )
})

export class HeroListComponent implements OnInit {
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
