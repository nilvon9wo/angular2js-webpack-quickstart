import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisDaoService } from '../crisis-data/crisis-dao.service';


@Component( {
    template: require( './crisis-list.component.html' )
})

export class CrisisListComponent implements OnInit {
    crises: Promise<Crisis[]>;

    constructor( private crisisDaoService: CrisisDaoService ) { }

    ngOnInit() {
        this.crises = this.crisisDaoService.getCrises();
    }
}
