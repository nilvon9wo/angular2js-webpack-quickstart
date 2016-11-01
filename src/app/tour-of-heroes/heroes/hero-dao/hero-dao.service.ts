import { Hero } from '../hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroDaoService {
    public getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
