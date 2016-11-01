import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroDaoService } from '../heroes/hero-dao/hero-dao.service';

@Component( {
    providers: [HeroDaoService],
    selector: 'dashboard',
    styles: [require('./dashboard.component.css')],
    template: require( './dashboard.component.html' )
})

export class DashboardComponent implements OnInit {
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