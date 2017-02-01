import { autoinject } from 'aurelia-framework';

import {Hero} from './hero';
import { HeroService } from './hero-service';

@autoinject()
export class App {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService) {

  }

  activate() {
    this.getHeroes();
  }

  getHeroes(): void {

    /* original version, pre appendix: take it slow in https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
      this.heroService.getHeroes()
                    .then(heroes => this.heroes = heroes);    
    */                    
    this.heroService.getHeroesSlowly()
                    .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}