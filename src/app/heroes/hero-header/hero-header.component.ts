import { Component }   from '@angular/core';

import { HeroDaoService } from '../hero-data/hero-dao.service';
import { UserService } from '../../core/users/user.service';

@Component({
    template: require( './hero-header.component.html' ),
})

export class HeroHeaderComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
