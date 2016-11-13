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
        this.normalColor = colorName;
    }

    private _defaultColor = 'red';
    @Input() set defaultColor(colorName: string) {
        this.normalColor = colorName;
    }
    
    private _normalColor;
    private set normalColor(colorName: string){
        if (colorName) {
            this._normalColor = colorName;
            this.highlight( this._normalColor );
        }
    }

    private mouseOverColor = 'gold';

    
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        @Optional() config: HighlightDirectiveConfig
    ) {
        if ( config ) {
            this.tourHighlight = this._normalColor || config.color || this._defaultColor;
        }
    }

    
    @HostListener( 'mouseenter' ) onMouseEnter() {
        this.highlight( this.mouseOverColor );
    }

    @HostListener( 'mouseleave' ) onMouseLeave() {
        this.highlight( this._normalColor );
    }

    private highlight( color: string ) {
        this.renderer.setElementStyle(
            this.elementRef.nativeElement,
            'backgroundColor',
            color
        );
    }
    
}
