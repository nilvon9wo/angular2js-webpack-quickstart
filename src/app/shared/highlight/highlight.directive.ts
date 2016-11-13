import { Directive, ElementRef, Optional, Renderer } from '@angular/core';
import { HighlightDirectiveConfig } from './highlight-directive-config';

@Directive( { selector: '[tourHighlight]' })

export class HighlightDirective {
    private color: string = 'yellow';

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() config: HighlightDirectiveConfig
    ) {
        if ( config ) {
            this.color = config.color;
        }
        renderer.setElementStyle(
            elementRef.nativeElement,
            'backgroundColor',
            this.color
        );
    }
}
