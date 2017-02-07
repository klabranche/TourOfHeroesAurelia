import { customElement } from 'aurelia-framework';

import { Hero } from './hero';
import { HeroService } from './hero-service';

@customElement('my-dashboard')
export class Dashboard {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    activate(): void {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }

}