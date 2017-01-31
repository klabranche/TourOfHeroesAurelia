define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.title = 'Tour of Heroes';
            this.hero = { id: 1, name: 'Windstorm' };
        }
        return App;
    }());
    exports.App = App;
    var Hero = (function () {
        function Hero() {
        }
        return Hero;
    }());
    exports.Hero = Hero;
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

define('hero',["require", "exports"], function (require, exports) {
    "use strict";
    var Hero = (function () {
        function Hero() {
        }
        return Hero;
    }());
    exports.Hero = Hero;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${title}</h1><h2>${hero.name} details!</h2><div><label>id:</label>${hero.id}</div><div><label>name:</label><input value.bind=\"hero.name\" placeholder=\"name\"></div></template>"; });
//# sourceMappingURL=app-bundle.js.map