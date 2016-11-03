import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero } from '../hero';
import { HeroSearchService } from './hero-search.service';

@Component( {
    providers: [HeroSearchService],
    selector: 'hero-search',
    styles: [require( './hero-search.component.css' )],
    template: require( './hero-search.component.html' )
})

export class HeroSearchComponent implements OnInit {
    public heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) { }

    public gotoDetail(hero: Hero): void {
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
    
    public ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime( 300 )
            .distinctUntilChanged()
            .switchMap( term => term
                ? this.heroSearchService.search( term )
                : Observable.of<Hero[]>( [] )
            )
            .catch( error => {
                console.error( error );
                return Observable.of<Hero[]>( [] );
            });
    }

    public search( term: string ): void {
        this.searchTerms.next( term );
    }

}
