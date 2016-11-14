import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditRestoreService } from '../../editable/edit-restore.service';
import { Hero } from '../hero';

@Component( {
    selector: 'hero-editor',
    providers: [EditRestoreService],
    template: require( './hero-editor.component.html' )
})

export class HeroEditorComponent {
    @Output() canceled = new EventEmitter();
    @Output() saved = new EventEmitter();

    constructor( private restoreService: EditRestoreService<Hero> ) { }

    @Input() set hero( hero: Hero ) {
        this.restoreService.setItem( hero );
    }

    get hero() {
        return this.restoreService.getItem();
    }

    onSaved() {
        this.saved.next( this.restoreService.getItem() );
    }

    onCanceled() {
        this.hero = this.restoreService.restoreItem();
        this.canceled.next( this.hero );
    }
}