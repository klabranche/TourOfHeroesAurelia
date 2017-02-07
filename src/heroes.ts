import { customElement, autoinject } from 'aurelia-framework';

import {Hero} from './hero';
import { HeroService } from './hero-service';

/* aurelia by convention would use element name equal to the class name of heroes.  
 Modified to keep with the ng2 example.
 Using a different element name required importing customElement
 */
@customElement('my-heroes')
@autoinject()
export class Heroes {
  heroes: Hero[];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService) {
    this.getHeroes();
  }

/* 
activate is part of the route lifecycle. Worked while part of the app.ts/html.
Now that is it's own element we must use the component life cycle.
moved the getHeroes call to the constructor as activate would never be used....

  activate(): void {
    this.getHeroes();
  }
*/

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