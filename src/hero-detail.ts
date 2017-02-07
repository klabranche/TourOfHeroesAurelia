import {bindable, customElement} from 'aurelia-framework';

import {Hero} from './hero';

/* aurelia by convention would use element name of heroes.  
 Modified to keep with the ng2 example.
 Using a different element name required importing customElement
 */
@customElement('my-hero-detail')
export class HeroDetail {
    @bindable hero: Hero = null;

}