'use strict';

define('ember-quickstart/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/blog-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/blog-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/coffee-slider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/coffee-slider.js should pass ESLint\n\n');
  });

  QUnit.test('components/gantt-chart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/gantt-chart.js should pass ESLint\n\n');
  });

  QUnit.test('components/google-doc.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/google-doc.js should pass ESLint\n\n');
  });

  QUnit.test('components/logo-svg.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/logo-svg.js should pass ESLint\n\n');
  });

  QUnit.test('components/pentagon-graph.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/pentagon-graph.js should pass ESLint\n\n54:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/svg-tooltip.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/svg-tooltip.js should pass ESLint\n\n9:9 - Unexpected console statement. (no-console)\n10:5 - \'$\' is not defined. (no-undef)\n11:5 - \'$\' is not defined. (no-undef)\n18:7 - Unexpected console statement. (no-console)\n18:19 - \'$\' is not defined. (no-undef)\n19:5 - \'$\' is not defined. (no-undef)\n19:48 - \'$\' is not defined. (no-undef)\n20:5 - \'$\' is not defined. (no-undef)\n20:49 - \'$\' is not defined. (no-undef)\n24:5 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/tag-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tag-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/year-graph.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/year-graph.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/app.js should pass ESLint\n\n9:13 - \'$\' is not defined. (no-undef)\n10:13 - \'$\' is not defined. (no-undef)\n11:13 - \'$\' is not defined. (no-undef)\n12:13 - \'$\' is not defined. (no-undef)\n13:13 - \'$\' is not defined. (no-undef)\n14:13 - \'$\' is not defined. (no-undef)\n15:13 - \'$\' is not defined. (no-undef)\n18:13 - \'$\' is not defined. (no-undef)\n18:41 - \'$\' is not defined. (no-undef)\n19:13 - \'$\' is not defined. (no-undef)\n19:41 - \'$\' is not defined. (no-undef)\n20:13 - \'$\' is not defined. (no-undef)\n20:40 - \'$\' is not defined. (no-undef)\n21:13 - \'$\' is not defined. (no-undef)\n21:41 - \'$\' is not defined. (no-undef)\n22:13 - \'$\' is not defined. (no-undef)\n22:46 - \'$\' is not defined. (no-undef)\n23:13 - \'$\' is not defined. (no-undef)\n23:42 - \'$\' is not defined. (no-undef)\n24:13 - \'$\' is not defined. (no-undef)\n24:47 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/app/blog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/app/blog.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/app/blog/archive.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/app/blog/archive.js should pass ESLint\n\n2:8 - \'groupBy\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/app/blog/post.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/app/blog/post.js should pass ESLint\n\n11:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/app/blog/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/app/blog/tag.js should pass ESLint\n\n2:8 - \'groupBy\' is defined but never used. (no-unused-vars)\n14:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/app/documentation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/app/documentation.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/app/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/app/home.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/app/team.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/app/team.js should pass ESLint\n\n33:13 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/date.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/divide.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/divide.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/htmlString.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/htmlString.js should pass ESLint\n\n6:9 - \'str1\' is assigned a value but never used. (no-unused-vars)\n7:9 - \'str2\' is assigned a value but never used. (no-unused-vars)\n8:9 - \'ignore\' is assigned a value but never used. (no-unused-vars)\n11:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/mmddyy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/mmddyy.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/app.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/app/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/app/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/app/blog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/app/blog.js should pass ESLint\n\n5:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/app/blog/archive.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/app/blog/archive.js should pass ESLint\n\n');
  });

  QUnit.test('routes/app/blog/post.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/app/blog/post.js should pass ESLint\n\n8:17 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/app/blog/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/app/blog/tag.js should pass ESLint\n\n5:9 - Unexpected console statement. (no-console)\n13:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/app/documentation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/app/documentation.js should pass ESLint\n\n');
  });

  QUnit.test('routes/app/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/app/home.js should pass ESLint\n\n6:13 - \'$\' is not defined. (no-undef)\n7:13 - \'$\' is not defined. (no-undef)\n8:13 - \'$\' is not defined. (no-undef)\n9:13 - \'$\' is not defined. (no-undef)\n10:13 - \'$\' is not defined. (no-undef)\n11:13 - \'$\' is not defined. (no-undef)\n12:13 - \'$\' is not defined. (no-undef)\n15:13 - \'$\' is not defined. (no-undef)\n15:41 - \'$\' is not defined. (no-undef)\n16:13 - \'$\' is not defined. (no-undef)\n16:41 - \'$\' is not defined. (no-undef)\n17:13 - \'$\' is not defined. (no-undef)\n17:40 - \'$\' is not defined. (no-undef)\n18:13 - \'$\' is not defined. (no-undef)\n18:41 - \'$\' is not defined. (no-undef)\n19:13 - \'$\' is not defined. (no-undef)\n19:46 - \'$\' is not defined. (no-undef)\n20:13 - \'$\' is not defined. (no-undef)\n20:42 - \'$\' is not defined. (no-undef)\n21:13 - \'$\' is not defined. (no-undef)\n21:47 - \'$\' is not defined. (no-undef)\n22:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/app/loading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/app/loading.js should pass ESLint\n\n');
  });

  QUnit.test('routes/app/play.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/app/play.js should pass ESLint\n\n');
  });

  QUnit.test('routes/app/team.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/app/team.js should pass ESLint\n\n6:39 - \'route\' is defined but never used. (no-unused-vars)\n7:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/app/web.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/app/web.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });
});
define('ember-quickstart/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-quickstart/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('ember-quickstart/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('ember-quickstart/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-quickstart/tests/helpers/start-app', 'ember-quickstart/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('ember-quickstart/tests/helpers/resolver', ['exports', 'ember-quickstart/resolver', 'ember-quickstart/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ember-quickstart/tests/helpers/start-app', ['exports', 'ember-quickstart/app', 'ember-quickstart/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-quickstart/tests/integration/components/blog-card-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('blog-card', 'Integration | Component | blog card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ID72GdI0",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"blog-card\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tfldmkTJ",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"blog-card\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/coffee-slider-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('coffee-slider', 'Integration | Component | coffee slider', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "4W8RvCIR",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"coffee-slider\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "HhUbyMTk",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"coffee-slider\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/gantt-chart-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('gantt-chart', 'Integration | Component | gantt chart', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "jdJ2/G6Z",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"gantt-chart\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "lKG0mnMe",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"gantt-chart\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/google-doc-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('google-doc', 'Integration | Component | google doc', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7A+3zeP2",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"google-doc\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "bonVS0Dt",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"google-doc\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/logo-svg-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('logo-svg', 'Integration | Component | logo svg', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "sn9h5l5X",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"logo-svg\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "/aG5Y1aT",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"logo-svg\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/pentagon-graph-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('pentagon-graph', 'Integration | Component | pentagon graph', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "IfGMppnu",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"pentagon-graph\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "IWk2Cugg",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"pentagon-graph\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/svg-tooltip-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('svg-tooltip', 'Integration | Component | svg tooltip', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "J9Y4D9Rn",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"svg-tooltip\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "1lqmyUr+",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"svg-tooltip\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/tag-list-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('tag-list', 'Integration | Component | tag list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "vMwZh07f",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"tag-list\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "zvcOWP3W",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"tag-list\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/components/year-graph-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('year-graph', 'Integration | Component | year graph', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "dGJhgIMg",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"year-graph\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "dVfzFY5t",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"year-graph\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-quickstart/tests/integration/helpers/date-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('date', 'helper:date', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "EaLEHYdq",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"date\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('ember-quickstart/tests/integration/helpers/divide-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('divide', 'helper:divide', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "J93MCYQd",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"divide\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('ember-quickstart/tests/test-helper', ['ember-quickstart/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ember-quickstart/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/blog-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/blog-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/coffee-slider-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/coffee-slider-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/gantt-chart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/gantt-chart-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/google-doc-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/google-doc-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/logo-svg-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/logo-svg-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/pentagon-graph-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pentagon-graph-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/svg-tooltip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-tooltip-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/tag-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tag-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/year-graph-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/year-graph-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/date-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/divide-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/divide-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app/blog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app/blog-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app/blog/archive-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app/blog/archive-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app/blog/archive/tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app/blog/archive/tag-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app/blog/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app/blog/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app/documentation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app/documentation-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/app/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/app/team-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/app/blog/archive-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/app/blog/archive-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/app/blog/archive/tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/app/blog/archive/tag-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/app/blog/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/app/blog/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/app/documentation-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/app/documentation-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/app/loading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/app/loading-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/app/web-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/app/web-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home/blog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/blog-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home/nestedhome-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/nestedhome-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home/play-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/play-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/team-test.js should pass ESLint\n\n');
  });
});
define('ember-quickstart/tests/unit/controllers/app-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app', 'Unit | Controller | app', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/controllers/app/blog-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app/blog', 'Unit | Controller | app/blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/controllers/app/blog/archive-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app/blog/archive', 'Unit | Controller | app/blog/archive', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/controllers/app/blog/archive/tag-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app/blog/archive/tag', 'Unit | Controller | app/blog/archive/tag', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/controllers/app/blog/post-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app/blog/post', 'Unit | Controller | app/blog/post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/controllers/app/documentation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app/documentation', 'Unit | Controller | app/documentation', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/controllers/app/team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:app/team', 'Unit | Controller | app/team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-quickstart/tests/unit/routes/app/blog/archive-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:app/blog/archive', 'Unit | Route | app/blog/archive', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/app/blog/archive/tag-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:app/blog/archive/tag', 'Unit | Route | app/blog/archive/tag', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/app/blog/post-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:app/blog/post', 'Unit | Route | app/blog/post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/app/documentation-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:app/documentation', 'Unit | Route | app/documentation', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/app/loading-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:app/loading', 'Unit | Route | app/loading', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/app/web-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:app/web', 'Unit | Route | app/web', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/home/about-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home/about', 'Unit | Route | home/about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/home/blog-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home/blog', 'Unit | Route | home/blog', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/home/nestedhome-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home/nestedhome', 'Unit | Route | home/nestedhome', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/home/play-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home/play', 'Unit | Route | home/play', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-quickstart/tests/unit/routes/home/team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home/team', 'Unit | Route | home/team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
