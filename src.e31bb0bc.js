// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\montserrat-v15-latin_cyrillic-regular.eot":[["montserrat-v15-latin_cyrillic-regular.3e574077.eot","fonts/montserrat-v15-latin_cyrillic-regular.eot"],"fonts/montserrat-v15-latin_cyrillic-regular.eot"],"./..\\fonts\\montserrat-v15-latin_cyrillic-regular.woff2":[["montserrat-v15-latin_cyrillic-regular.3e67f4a5.woff2","fonts/montserrat-v15-latin_cyrillic-regular.woff2"],"fonts/montserrat-v15-latin_cyrillic-regular.woff2"],"./..\\fonts\\montserrat-v15-latin_cyrillic-regular.woff":[["montserrat-v15-latin_cyrillic-regular.e9840e03.woff","fonts/montserrat-v15-latin_cyrillic-regular.woff"],"fonts/montserrat-v15-latin_cyrillic-regular.woff"],"./..\\fonts\\montserrat-v15-latin_cyrillic-regular.ttf":[["montserrat-v15-latin_cyrillic-regular.e3ed366f.ttf","fonts/montserrat-v15-latin_cyrillic-regular.ttf"],"fonts/montserrat-v15-latin_cyrillic-regular.ttf"],"./..\\fonts\\montserrat-v15-latin_cyrillic-regular.svg":[["montserrat-v15-latin_cyrillic-regular.8f6b7439.svg","fonts/montserrat-v15-latin_cyrillic-regular.svg"],"fonts/montserrat-v15-latin_cyrillic-regular.svg"],"./..\\fonts\\montserrat-v15-latin_cyrillic-500.eot":[["montserrat-v15-latin_cyrillic-500.6a937511.eot","fonts/montserrat-v15-latin_cyrillic-500.eot"],"fonts/montserrat-v15-latin_cyrillic-500.eot"],"./..\\fonts\\montserrat-v15-latin_cyrillic-500.woff2":[["montserrat-v15-latin_cyrillic-500.ebe978ac.woff2","fonts/montserrat-v15-latin_cyrillic-500.woff2"],"fonts/montserrat-v15-latin_cyrillic-500.woff2"],"./..\\fonts\\montserrat-v15-latin_cyrillic-500.woff":[["montserrat-v15-latin_cyrillic-500.602df506.woff","fonts/montserrat-v15-latin_cyrillic-500.woff"],"fonts/montserrat-v15-latin_cyrillic-500.woff"],"./..\\fonts\\montserrat-v15-latin_cyrillic-500.ttf":[["montserrat-v15-latin_cyrillic-500.a18ae3d2.ttf","fonts/montserrat-v15-latin_cyrillic-500.ttf"],"fonts/montserrat-v15-latin_cyrillic-500.ttf"],"./..\\fonts\\montserrat-v15-latin_cyrillic-500.svg":[["montserrat-v15-latin_cyrillic-500.2589dbf2.svg","fonts/montserrat-v15-latin_cyrillic-500.svg"],"fonts/montserrat-v15-latin_cyrillic-500.svg"],"./..\\fonts\\montserrat-v15-latin_cyrillic-600.eot":[["montserrat-v15-latin_cyrillic-600.123a6017.eot","fonts/montserrat-v15-latin_cyrillic-600.eot"],"fonts/montserrat-v15-latin_cyrillic-600.eot"],"./..\\fonts\\montserrat-v15-latin_cyrillic-600.woff2":[["montserrat-v15-latin_cyrillic-600.fb160d05.woff2","fonts/montserrat-v15-latin_cyrillic-600.woff2"],"fonts/montserrat-v15-latin_cyrillic-600.woff2"],"./..\\fonts\\montserrat-v15-latin_cyrillic-600.woff":[["montserrat-v15-latin_cyrillic-600.f60cf320.woff","fonts/montserrat-v15-latin_cyrillic-600.woff"],"fonts/montserrat-v15-latin_cyrillic-600.woff"],"./..\\fonts\\montserrat-v15-latin_cyrillic-600.ttf":[["montserrat-v15-latin_cyrillic-600.951c97f1.ttf","fonts/montserrat-v15-latin_cyrillic-600.ttf"],"fonts/montserrat-v15-latin_cyrillic-600.ttf"],"./..\\fonts\\montserrat-v15-latin_cyrillic-600.svg":[["montserrat-v15-latin_cyrillic-600.1b9fbe68.svg","fonts/montserrat-v15-latin_cyrillic-600.svg"],"fonts/montserrat-v15-latin_cyrillic-600.svg"],"./..\\fonts\\montserrat-v15-latin_cyrillic-700.eot":[["montserrat-v15-latin_cyrillic-700.750bddb8.eot","fonts/montserrat-v15-latin_cyrillic-700.eot"],"fonts/montserrat-v15-latin_cyrillic-700.eot"],"./..\\fonts\\montserrat-v15-latin_cyrillic-700.woff2":[["montserrat-v15-latin_cyrillic-700.9f86b2aa.woff2","fonts/montserrat-v15-latin_cyrillic-700.woff2"],"fonts/montserrat-v15-latin_cyrillic-700.woff2"],"./..\\fonts\\montserrat-v15-latin_cyrillic-700.woff":[["montserrat-v15-latin_cyrillic-700.1c598198.woff","fonts/montserrat-v15-latin_cyrillic-700.woff"],"fonts/montserrat-v15-latin_cyrillic-700.woff"],"./..\\fonts\\montserrat-v15-latin_cyrillic-700.ttf":[["montserrat-v15-latin_cyrillic-700.700357be.ttf","fonts/montserrat-v15-latin_cyrillic-700.ttf"],"fonts/montserrat-v15-latin_cyrillic-700.ttf"],"./..\\fonts\\montserrat-v15-latin_cyrillic-700.svg":[["montserrat-v15-latin_cyrillic-700.4320c7b4.svg","fonts/montserrat-v15-latin_cyrillic-700.svg"],"fonts/montserrat-v15-latin_cyrillic-700.svg"],"./..\\fonts\\montserrat-v15-latin_cyrillic-800.eot":[["montserrat-v15-latin_cyrillic-800.85504974.eot","fonts/montserrat-v15-latin_cyrillic-800.eot"],"fonts/montserrat-v15-latin_cyrillic-800.eot"],"./..\\fonts\\montserrat-v15-latin_cyrillic-800.woff2":[["montserrat-v15-latin_cyrillic-800.738e2c9c.woff2","fonts/montserrat-v15-latin_cyrillic-800.woff2"],"fonts/montserrat-v15-latin_cyrillic-800.woff2"],"./..\\fonts\\montserrat-v15-latin_cyrillic-800.woff":[["montserrat-v15-latin_cyrillic-800.3f6dcb5f.woff","fonts/montserrat-v15-latin_cyrillic-800.woff"],"fonts/montserrat-v15-latin_cyrillic-800.woff"],"./..\\fonts\\montserrat-v15-latin_cyrillic-800.ttf":[["montserrat-v15-latin_cyrillic-800.8b70ad98.ttf","fonts/montserrat-v15-latin_cyrillic-800.ttf"],"fonts/montserrat-v15-latin_cyrillic-800.ttf"],"./..\\fonts\\montserrat-v15-latin_cyrillic-800.svg":[["montserrat-v15-latin_cyrillic-800.96af01e4.svg","fonts/montserrat-v15-latin_cyrillic-800.svg"],"fonts/montserrat-v15-latin_cyrillic-800.svg"],"./..\\images\\fire.png":[["fire.c12083a8.png","images/fire.png"],"images/fire.png"],"./..\\images\\header-vector.png":[["header-vector.9942dd0c.png","images/header-vector.png"],"images/header-vector.png"],"./..\\images\\fon\\fon-mobile@x2.png":[["fon-mobile@x2.de562f5d.png","images/fon/fon-mobile@x2.png"],"images/fon/fon-mobile@x2.png"],"./..\\images\\fon\\fon-tablet.png":[["fon-tablet.4ca70f35.png","images/fon/fon-tablet.png"],"images/fon/fon-tablet.png"],"./..\\images\\fon\\fon-tablet@x2.png":[["fon-tablet@x2.d36688ea.png","images/fon/fon-tablet@x2.png"],"images/fon/fon-tablet@x2.png"],"./..\\images\\fon\\fon-desktop.png":[["fon-desktop.1df375c1.png","images/fon/fon-desktop.png"],"images/fon/fon-desktop.png"],"./..\\images\\fon\\fon-desktop@x2.png":[["fon-desktop@x2.4475ddd9.png","images/fon/fon-desktop@x2.png"],"images/fon/fon-desktop@x2.png"],"./..\\images\\mobile\\classroom-mobile.png":[["classroom-mobile.64ed6926.png","images/mobile/classroom-mobile.png"],"images/mobile/classroom-mobile.png"],"./..\\images\\mobile\\classroom-mobile@2x.png":[["classroom-mobile@2x.ca1d939c.png","images/mobile/classroom-mobile@2x.png"],"images/mobile/classroom-mobile@2x.png"],"./..\\images\\tablet\\classroom-tablet.png":[["classroom-tablet.df69bd02.png","images/tablet/classroom-tablet.png"],"images/tablet/classroom-tablet.png"],"./..\\images\\tablet\\classroom-tablet@2x.png":[["classroom-tablet@2x.0e67d610.png","images/tablet/classroom-tablet@2x.png"],"images/tablet/classroom-tablet@2x.png"],"./..\\images\\desktop\\classroom-desktop.png":[["classroom-desktop.f963170a.png","images/desktop/classroom-desktop.png"],"images/desktop/classroom-desktop.png"],"./..\\images\\desktop\\classroom-desktop@2x.png":[["classroom-desktop@2x.23c32a68.png","images/desktop/classroom-desktop@2x.png"],"images/desktop/classroom-desktop@2x.png"],"./..\\images\\mobile\\check-logo.svg":[["check-logo.7296ee69.svg","images/mobile/check-logo.svg"],"images/mobile/check-logo.svg"],"./..\\images\\mobile\\campfire.svg":[["campfire.e2e180aa.svg","images/mobile/campfire.svg"],"images/mobile/campfire.svg"],"./..\\images\\mobile\\dashline.svg":[["dashline.d575baae.svg","images/mobile/dashline.svg"],"images/mobile/dashline.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52571" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map