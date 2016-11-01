import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDashboardComponent } from './heroes/hero-dashboard/hero-dashboard.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

const routes: Routes = [
                        { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
                        { path: 'dashboard', component: HeroDashboardComponent  },
                        { path: 'hero/:id', component: HeroDetailsComponent  },
                        { path: 'heroes', component: HeroListComponent }
                        ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
