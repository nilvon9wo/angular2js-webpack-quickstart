import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDemoComponent } from './highlight-demo/highlight-demo.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { HighlightDirectiveConfig } from './highlight/highlight-directive-config';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule( {
    declarations: [AwesomePipe, HighlightDemoComponent, HighlightDirective],
    exports: [AwesomePipe, CommonModule, FormsModule, HighlightDemoComponent, HighlightDirective],
    imports: [CommonModule, SharedRoutingModule]
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