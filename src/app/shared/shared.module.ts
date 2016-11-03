import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight/highlight.directive';
import { HighlightDirectiveConfig } from './highlight/highlight-directive-config';

@NgModule( {
    declarations: [AwesomePipe, HighlightDirective],
    exports: [AwesomePipe, CommonModule, FormsModule, HighlightDirective],
    imports: [CommonModule]
})

export class SharedModule { 
    static forChild( config: HighlightDirectiveConfig ): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [{
                provide: HighlightDirectiveConfig,
                useValue: config
            }]
        }
    }
}