import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title',
    styles: [require('./app-title.component.css')],
    template: require( './app-title.component.html' )
})

export class AppTitleComponent {
    @Input() subtitle = '';
    public title = 'Tour of Heroes';
}

