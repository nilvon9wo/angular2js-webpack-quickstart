import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDaoService } from '../hero-data/hero-dao.service';

@Component({
    providers: [HeroDaoService],
    selector: 'hero-list',
    styles: [require('./hero-list.component.css')],
    template: require( './hero-list.component.html' )
})

export class HeroListComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;
    
    constructor(
        private heroDaoService: HeroDaoService,
        private router: Router
    ) { }
    
    public add(name: String): void {
        name = name.trim();
        if (!name) {
            return;
        }
        
        this.heroDaoService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
    
    public gotoDetail( hero: Hero ): void {
        const heroDetailsById = ['/hero', this.selectedHero.id];
        this.router.navigate( heroDetailsById );
    }
    
    public initHeroes(): void {
        this.heroDaoService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    
    public ngOnInit(): void {
        this.initHeroes();
    }
    
    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
