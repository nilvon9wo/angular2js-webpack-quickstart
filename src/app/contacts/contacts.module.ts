import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContactDaoService } from './contact-data/contact-dao.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule( {
    declarations: [ContactDetailComponent],
    imports: [
        ContactRoutingModule,
        SharedModule
    ],
    providers: [ContactDaoService]
})

export class ContactsModule { }
