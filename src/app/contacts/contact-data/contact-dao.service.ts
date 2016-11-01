import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../contact';

const FETCH_LATENCY = 500;

@Injectable()
export class ContactDaoService {
    private headers = new Headers( { 'Content-Type': 'application/json' });
    private contactsUrl = 'api/contacts';

    constructor( private http: Http ) { }

    public getContact( id: number | string ) {
        return this.getContacts()
            .then( heroes => heroes.find( hero => hero.id === +id ) );
    }

    public getContacts(): Promise<Contact[]> {
        return new Promise<Contact[]>( resolve => setTimeout( resolve, FETCH_LATENCY ) )
            .then(() => this._getContacts() );
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'ContactDaoService: An error occurred', error );
        return Promise.reject( error.message || error );
    }

    private _getContacts(): Promise<Contact[]> {
        return this.http.get( this.contactsUrl )
            .toPromise()
            .then( response => response.json().data as Contact[] )
            .catch( this.handleError );
    }

}