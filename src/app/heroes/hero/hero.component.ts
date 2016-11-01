import { Component }   from '@angular/core';

import { HeroDaoService } from '../hero-data/hero-dao.service';
import { UserService } from '../../users/user.service';

@Component({
    template: require( './hero.component.html' ),
})

export class HeroComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
