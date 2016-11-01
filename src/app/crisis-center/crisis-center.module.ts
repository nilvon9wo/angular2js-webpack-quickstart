import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisDaoService } from './crisis-data/crisis-dao.service';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisRoutingModule } from './crisis-routing.module';

@NgModule( {
    imports: [CommonModule, CrisisRoutingModule],
    declarations: [CrisisDetailsComponent, CrisisListComponent],
    providers: [CrisisDaoService]
})
export class CrisisCenterModule { }
