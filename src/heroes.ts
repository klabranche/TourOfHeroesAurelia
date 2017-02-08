import { customElement, autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import {Hero} from './hero';
import { HeroService } from './hero-service';

@customElement('my-heroes')
@autoinject()
export class Heroes {
  heroes: Hero[];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService,
              private router: Router) {

  }

/* 
  now that a router has been introduced to get to heroes, activate can be used....
*/
  activate(): void {
    this.getHeroes();
  }

  getHeroes(): void {

     this.heroService.getHeroes()
                    .then(heroes => this.heroes = heroes);    
                    
    /* this.heroService.getHeroesSlowly()
                    .then(heroes => this.heroes = heroes);
    */                    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigateToRoute('hero-detail', {id: this.selectedHero.id});
  }
}