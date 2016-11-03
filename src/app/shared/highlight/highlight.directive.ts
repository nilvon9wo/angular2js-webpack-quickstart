import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({selector: '[highlight]'})

/*
 * TODO:
 * app => gold
 * contact => powderblue
 * hero => biege
 */

export class HighlightDirective {
    constructor(renderer: Renderer, elementRef: ElementRef) {
        renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'gold'); //'powderblue', 'biege'
        console.info(`& Contact highlight called for ${elementRef.nativeElement.tagName}`);
    }
}