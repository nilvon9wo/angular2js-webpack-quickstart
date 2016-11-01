import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactDaoService } from '../contact-data/contact-dao.service';
import { UserService } from '../../core/users/user.service';

@Component( {
    selector: 'contact-detail',
    styles: [require( './contact-detail.component.css' )],
    template: require( './contact-detail.component.html' )
})

export class ContactDetailComponent implements OnInit {
    public contact: Contact;
    public contacts: Contact[];
    public message = 'Loading contacts ...';
    public userName = '';

    constructor(
        private contactDaoService: ContactDaoService,
        userService: UserService
    ) {
        this.userName = userService.userName;
    }

    public displayMessage( message: string ) {
        this.message = message;
        setTimeout(() => this.message = '', 1500 );
    }

    public next() {
        let nextIndex = 1 + this.contacts.indexOf( this.contact );
        if ( nextIndex >= this.contacts.length ) {
            nextIndex = 0;
        }
        this.contact = this.contacts[nextIndex];
    }
    
    public newContact() {
        this.displayMessage('New contact');
        this.contact = { id: 42, name: '' };
        this.contacts.push(this.contact);
    }

    public ngOnInit() {
        this.contactDaoService.getContacts()
            .then( contacts => {
                this.message = '';
                this.contacts = contacts;
                this.contact = contacts[0];
            });
    }

    public onSubmit() {
        // TODO: POST-DEMO: do something like save it
        this.displayMessage( `Saved ${this.contact.name}` );
    }
}