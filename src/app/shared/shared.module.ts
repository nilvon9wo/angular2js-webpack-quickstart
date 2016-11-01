import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule( {
    declarations: [AwesomePipe, HighlightDirective],
    exports: [AwesomePipe, CommonModule, FormsModule, HighlightDirective],
    imports: [CommonModule]
})

export class SharedModule { }