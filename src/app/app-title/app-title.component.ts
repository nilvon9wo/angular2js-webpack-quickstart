import { Component, Input } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
    selector: 'app-title',
    styles: [require('./app-title.component.css')],
    template: require( './app-title.component.html' )
})

export class AppTitleComponent {
    @Input() subtitle = '';
    public title = 'Tour of Heroes';
    user = '';
    
    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}

