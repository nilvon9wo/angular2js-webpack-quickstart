import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Optional,
    Renderer
} from '@angular/core';
import { HighlightDirectiveConfig } from './highlight-directive-config';

@Directive( { selector: '[tourHighlight]' })
export class HighlightDirective {
    private normalColor: string = 'yellow';
    private mouseOverColor: string = 'gold';

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        @Optional() config: HighlightDirectiveConfig
    ) {
        if ( config ) {
            this.normalColor = config.color;
        }
        this.highlight( this.normalColor );
    }

    @HostListener( 'mouseenter' ) onMouseEnter() {
        this.highlight( this.mouseOverColor );
    }

    @HostListener( 'mouseleave' ) onMouseLeave() {
        this.highlight( this.normalColor );
    }

    private highlight( color: string ) {
        this.renderer.setElementStyle(
            this.elementRef.nativeElement,
            'backgroundColor',
            color
        );
    }
}
