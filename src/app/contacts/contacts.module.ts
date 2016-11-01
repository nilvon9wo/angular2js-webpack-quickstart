import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AwesomePipe } from './awesome.pipe';
import { ContactDaoService } from './contact-data/contact-dao.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HighlightDirective } from './highlight.directive';

@NgModule( {
    declarations: [
        AwesomePipe,
        ContactDetailComponent,
        HighlightDirective
    ],
    exports: [ContactDetailComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [ContactDaoService]
})

export class ContactsModule { }
