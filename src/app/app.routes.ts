import { RouterModule } from '@angular/router';
import { HeroListComponent } from './tour-of-heroes/hero-list/hero-list.component';

RouterModule.forRoot([{
    component: HeroListComponent, 
    path: 'heroes'
}])