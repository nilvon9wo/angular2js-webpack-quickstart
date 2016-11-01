import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Crisis } from '../crisis';

const FETCH_LATENCY = 500;

@Injectable()
export class CrisisDaoService {
    private headers = new Headers( { 'Content-Type': 'application/json' });
    private CrisesUrl = 'api/crisis';

    constructor( private http: Http ) { }

    public getCrisis( id: number | string ) {
        return this.getCrises()
            .then( heroes => heroes.find( hero => hero.id === +id ) );
    }

    public getCrises(): Promise<Crisis[]> {
        return new Promise<Crisis[]>( resolve => setTimeout( resolve, FETCH_LATENCY ) )
            .then(() => this._getCrises() );
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'CrisisDaoService: An error occurred', error );
        return Promise.reject( error.message || error );
    }

    private _getCrises(): Promise<Crisis[]> {
        return this.http.get( this.CrisesUrl )
            .toPromise()
            .then( response => response.json().data as Crisis[] )
            .catch( this.handleError );
    }

}