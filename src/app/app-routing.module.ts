import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroDetailsComponent } from './tour-of-heroes/heroes/hero-details/hero-details.component';
import { HeroListComponent } from './tour-of-heroes/heroes/hero-list/hero-list.component';

const routes: Routes = [
                        { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
                        { path: 'dashboard', component: DashboardComponent  },
                        { path: 'hero/:id', component: HeroDetailsComponent  },
                        { path: 'heroes', component: HeroListComponent }
                        ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
