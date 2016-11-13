import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'contact' },
    {
        path: 'crisis-center', loadChildren: () => new Promise( resolve => {
            ( require as any ).ensure( [], require => {
                resolve( require( './crisis-center/crisis-center.module' ).CrisisCenterModule );
            })
        })
    },
    {
        path: 'heroes', loadChildren: () => new Promise( resolve => {
            ( require as any ).ensure( [], require => {
                resolve( require( './heroes/heroes.module' ).HeroesModule );
            })
        })
    },
    {
        path: 'shared', loadChildren: () => new Promise( resolve => {
            ( require as any ).ensure( [], require => {
                resolve( require( './shared/shared.module' ).SharedModule );
            })
        })
    }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
})

export class AppRoutingModule { }
