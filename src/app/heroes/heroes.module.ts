import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroDaoService } from './hero-data/hero-dao.service';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule( {
    declarations: [
        HeroCardComponent,
        HeroDashboardComponent,
        HeroDetailsComponent,
        HeroEditorComponent,
        HeroHeaderComponent,
        HeroListComponent,
        HeroListBasicComponent,
        HeroSearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        SharedModule.forChild( { color: '#885C39' })
    ],
    providers: [HeroDaoService]
})

export class HeroesModule { }