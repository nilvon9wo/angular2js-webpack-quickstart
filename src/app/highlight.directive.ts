import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({selector: '[highlight]'})

export class HighlightDirective {
    constructor(renderer: Renderer, elementRef: ElementRef) {
        renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'gold');
        console.info(`& AppRoot highlight called for ${elementRef.nativeElement.tagName}`);
    }
}