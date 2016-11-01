import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroDaoService } from '../hero-data/hero-dao.service';

@Component( {
    providers: [HeroDaoService],
    selector: 'hero-dashboard',
    styles: [require('./hero-dashboard.component.css')],
    template: require( './hero-dashboard.component.html' )
})

export class HeroDashboardComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(
        private heroDaoService: HeroDaoService,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.heroDaoService.getHeroes()
            .then( heroes => this.heroes = heroes.slice( 1, 5 ) );
    }

    public gotoDetail( selectedHero: Hero ): void {
        const heroDetailsById = ['/hero', selectedHero.id];
        this.router.navigate( heroDetailsById );
    }
}