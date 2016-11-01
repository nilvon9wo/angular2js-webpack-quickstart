import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule( {
    exports: [RouterModule],
    imports: [RouterModule.forChild( [
        { path: 'contact', component: ContactDetailComponent }
    ] )]
})

export class ContactRoutingModule {}