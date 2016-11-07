import { animate, Component, Input, OnInit, state, style, transition, trigger } from '@angular/core';
import { Hero } from '../hero';
import { HeroDaoService } from '../hero-data/hero-dao.service';

@Component( {
    animations: [
        trigger( 'heroState', [
            state( 'inactive', style( {
                backgroundColor: '#eee',
                transform: 'scale(1)'
            }) ),
            state( 'active', style( {
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            }) ),
            transition( 'inactive => active', animate( '100ms ease-in' ) ),
            transition( 'active => inactive', animate( '100ms ease-out' ) )
        ] )
    ],
    providers: [HeroDaoService],
    selector: 'hero-list-basic',
    styles: [require( './hero-list-basic.component.css' )],
    template: require( './hero-list-basic.component.html' )
})

export class HeroListBasicComponent {
    @Input()
    public heroes: Hero[] = [];

    constructor( private heroDaoService: HeroDaoService ) { }

    public initHeroes(): void {
        const self = this;
        this.heroDaoService.getHeroes()
            .then( heroes =>
                heroes.forEach( hero => {
                    self.heroes.push( new Hero( hero ) );
                })
            );
    }

    public ngOnInit(): void {
        this.initHeroes();
    }

}