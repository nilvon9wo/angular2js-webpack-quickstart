import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroDaoService } from '../hero-dao/hero-dao.service';

@Component( {
    selector: 'hero-details',
    template: require( './hero-details.component.html' )
})

export class HeroDetailsComponent implements OnInit {
    @Input()
    public hero: Hero;

    constructor(
        private activatedRoute: ActivatedRoute,
        private heroDaoService: HeroDaoService,
        private location: Location
    ) { }
    
    public ngOnInit(): void {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroDaoService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    
    public goBack(): void {
        this.location.back();
    }
}
