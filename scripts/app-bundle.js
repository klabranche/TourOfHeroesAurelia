define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.title = 'Tour of Heroes';
            this.heroes = HEROES;
            this.selectedHero = null;
        }
        App.prototype.onSelect = function (hero) {
            this.selectedHero = hero;
        };
        return App;
    }());
    exports.App = App;
    var HEROES = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('hero-detail',["require", "exports", "aurelia-framework", "./hero"], function (require, exports, aurelia_framework_1, hero_1) {
    "use strict";
    var HeroDetail = (function () {
        function HeroDetail() {
            this.hero = null;
        }
        return HeroDetail;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", hero_1.Hero)
    ], HeroDetail.prototype, "hero", void 0);
    HeroDetail = __decorate([
        aurelia_framework_1.customElement('my-hero-detail')
    ], HeroDetail);
    exports.HeroDetail = HeroDetail;
});

define('hero',["require", "exports"], function (require, exports) {
    "use strict";
    var Hero = (function () {
        function Hero() {
        }
        return Hero;
    }());
    exports.Hero = Hero;
});

define('text!app.css', ['module'], function(module) { module.exports = "  .selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .heroes {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .heroes li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .heroes li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .heroes li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .heroes .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n  .heroes .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./hero-detail\"></require><h1>${title}</h1><h2>My Heroes</h2><ul class=\"heroes\"><li repeat.for=\"hero of heroes\" class=\"${hero === selectedHero ? 'selected':''}\" click.delegate=\"onSelect(hero)\"><span class=\"badge\">${hero.id}</span> ${hero.name}</li></ul><my-hero-detail hero.bind=\"selectedHero\"></my-hero-detail></template>"; });
define('text!hero-detail.html', ['module'], function(module) { module.exports = "<template><div if.bind=\"hero\"><h2>${hero.name} details!</h2><div><label>id:</label>${hero.id}</div><div><label>name:</label><input value.bind=\"hero.name\" placeholder=\"name\"></div></div><template></template></template>"; });
//# sourceMappingURL=app-bundle.js.map