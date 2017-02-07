import {autoinject, bindable, customElement} from 'aurelia-framework';
import { Router } from 'aurelia-router';

import {Hero} from './hero';
import { HeroService } from './hero-service';

@autoinject()
@customElement('my-hero-detail')
export class HeroDetail {
    @bindable hero: Hero = null;

    constructor(private heroService: HeroService,
                private route: Router){
    }

    activate(params): void | Promise<Hero>{
        return this.heroService.getHero(Number(params.id))
            .then(hero=> this.hero = hero);
    }

    goBack(): void {
        this.route.navigateBack();
    }

}