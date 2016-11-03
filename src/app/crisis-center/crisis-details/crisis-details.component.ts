import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CrisisDaoService } from '../crisis-data/crisis-dao.service';

@Component( {
    template: require( './crisis-details.component.html' )
})
export class CrisisDetailsComponent implements OnInit {
    public id: number;
    public name: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private crisisDaoService: CrisisDaoService
    ) { }

    public ngOnInit() {
        this.id = parseInt( this.activatedRoute.snapshot.params['id'], 10 );

        this.crisisDaoService.getCrisis( this.id )
            .then( crisis => this.name = crisis.name );
    }
}
