import {bindable, customElement} from 'aurelia-framework';

import {Hero} from './hero';

@customElement('my-hero-detail')
export class HeroDetail {
    @bindable hero: Hero = null;

}