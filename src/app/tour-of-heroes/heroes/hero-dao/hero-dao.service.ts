import { Hero } from '../hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroDaoService {
    public getHero( id: number ): Promise<Hero> {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.id === id ) );
    }

    public getHeroes(): Promise<Hero[]> {
        return Promise.resolve( HEROES );
    }
}
