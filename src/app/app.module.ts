import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroDetailsComponent } from './tour-of-heroes/heroes/hero-details/hero-details.component';
import { HeroDaoService } from './tour-of-heroes/heroes/hero-dao/hero-dao.service';
import { HeroListComponent } from './tour-of-heroes/heroes/hero-list/hero-list.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

@NgModule({
    bootstrap: [ TourOfHeroesComponent ],
    declarations: [ DashboardComponent, HeroDetailsComponent, HeroListComponent, TourOfHeroesComponent ],
    imports: [
              BrowserModule,
              FormsModule,
              RouterModule.forRoot([
                                    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
                                    { path: 'dashboard', component: DashboardComponent  },
                                    { path: 'detail/:id', component: HeroDetailsComponent  },
                                    { path: 'heroes', component: HeroListComponent }
                                    ])
            ],
    providers: [ HeroDaoService ]
})

export class AppModule {}
