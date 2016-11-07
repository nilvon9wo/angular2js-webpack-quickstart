import { animate, Component, group, Input, keyframes, OnInit, state, style, transition, trigger } from '@angular/core';
import { Hero } from '../hero';
import { HeroDaoService } from '../hero-data/hero-dao.service';

@Component( {
    animations: [
        trigger( 'flyInOut', [
            state( 'in', style( { opacity: 1, transform: 'translateX(0)', width: 120 }) ),
            transition( 'void => *', [
                style( { opacity: 0, transform: 'translateX(50%)', offset: 0, width: 10 }),
                group( [
                    animate( '0.3s 0.1s ease', style( { transform: 'translateX(0px)', width: 120 }) ),
                    animate( '0.3s ease', style( { opacity: 1 }) ),
                ] ),
                animate( 300, keyframes( [


                    style( { opacity: 1, transform: 'translateX(0%)', offset: 1.0 }),
                ] ) )
            ] ),
            transition( '* => void', [
                group( [
                    animate( '0.3s ease', style( { transform: 'translateX(50px)', width: 10 }) ),
                    animate( '0.3s 0.2s ease', style( { opacity: 0 }) ),
                ] ),
            ] )
        ] ),
        trigger( 'heroState', [
            state( 'active', style( { backgroundColor: '#cfd8dc', transform: 'translatex(0) scale(1.1)' }) ),
            state( 'inactive', style( { backgroundColor: '#eee', transform: 'translatex(0) scale(1)' }) ),
            transition( 'active => inactive', animate( '100ms ease-out' ) ),
            transition( 'active => void', [animate( 200, style( { transform: 'translatex(0) scale(0)' }) )] ),
            transition( 'inactive => active', animate( '100ms ease-in' ) ),
            transition( 'inactive => void', [animate( 100, style( { transform: 'translatex(-100%) scale(1)' }) )] ),
            transition( 'void => active', [style( { transform: 'translatex(0) scale(0)' }), animate( 200 )] ),
            transition( 'void => inactive', [style( { transform: 'translatex(-100%) scale(1)' }), animate( 100 )] )
        ] ),
        trigger( 'shrinkout', [
            state( 'in', style( { height: '*' }) ),
            transition( '* => void', [style( { height: '*' }), animate( 240, style( { height: 0 }) )] )
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

    public animationStarted($event){
        console.log('#### started', $event);
    }
    public animationDone($event){
        console.log('#### done', $event);
    }
    
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