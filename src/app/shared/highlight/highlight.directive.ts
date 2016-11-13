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
    @Input() set tourHighlight(colorName: string) {
        if (colorName) {
            this.normalColor = colorName;
            this.highlight( this.normalColor );
        }
    }

    private _defaultColor = 'red';
    @Input() set defaultColor(colorName: string) {
        if (colorName) {
            this.normalColor = colorName;
            this.highlight( this.normalColor );
        }
    }
    
    private normalColor;
    private mouseOverColor = 'gold';

    
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        @Optional() config: HighlightDirectiveConfig
    ) {
        if ( config ) {
            this.tourHighlight = this.normalColor || config.color || this._defaultColor;
            this.highlight( this.normalColor );
        }
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
