import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/hero';
import { HeroDaoService } from '../heroes/hero-dao/hero-dao.service';

@Component({
    providers: [HeroDaoService],
    selector: 'dashboard',
    template: require( './dashboard.component.html' )
})

export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(private heroDaoService: HeroDaoService) { }
    
    public ngOnInit(): void {
        this.heroDaoService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    public gotoDetail(hero: Hero): void {
        // TODO
    }
}