import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDaoService } from '../hero-data/hero-dao.service';
import { EditItem } from '../../editable/edit-item';

@Component( {
    providers: [HeroDaoService],
    selector: 'hero-list',
    styles: [require( './hero-list.component.css' )],
    template: require( './hero-list.component.html' )
})

export class HeroListComponent implements OnInit {
    public heroes: Array<EditItem<Hero>> = new Array<EditItem<Hero>>();
    public selectedHero: Hero;

    constructor(
        private heroDaoService: HeroDaoService,
        private router: Router
    ) { }

    public add( name: String ): void {
        name = name.trim();
        if ( !name ) {
            return;
        }
        this.heroDaoService.create( name )
            .then( hero => {
                this.heroes.push( new EditItem( hero ) );
                this.selectedHero = null;
            });
    }

    public delete( deletedHero: Hero ): void {
        this.heroDaoService.delete( deletedHero.id )
            .then(() => {
                this.heroes = this.heroes.filter( hero => hero.item !== deletedHero );
                if ( this.selectedHero === deletedHero ) {
                    this.selectedHero = null;
                }
            });
    }

    public gotoDetail( hero: Hero ): void {
        const heroDetailsById = ['/hero', this.selectedHero.id];
        this.router.navigate( heroDetailsById );
    }

    public initHeroes(): void {
        this.heroDaoService.getHeroes()
            .then( daoHeroes => {
                this.heroes = daoHeroes.map(item => new EditItem( item )); 
            }); 
    }

    public ngOnInit(): void {
        this.initHeroes();
    }

    public onCanceled( editItem: EditItem<Hero> ) {
        editItem.editing = false;
    }

    public onSaved( editItem: EditItem<Hero>, updatedHero: Hero ) {
        editItem.item = updatedHero;
        editItem.editing = false;
    }

    public onSelect( hero: Hero ): void {
        this.selectedHero = hero;
    }
}
