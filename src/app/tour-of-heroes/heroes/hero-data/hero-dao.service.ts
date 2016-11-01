import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../hero';

@Injectable()
export class HeroDaoService {
    private heroesUrl = 'api/heroes';

    constructor( private http: Http ) { }

    public getHero( id: number ): Promise<Hero> {
        return this.getHeroes()
            .then( heroes => heroes.find( hero => hero.id === id ) );
    }

    public getHeroes(): Promise<Hero[]> {
        return this.http.get( this.heroesUrl )
            .toPromise()
            .then( response =>  response.json().data as Hero[] )
            .catch( this.handleError );
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'HeroDaoService: An error occurred', error );
        return Promise.reject( error.message || error );
    }
}
