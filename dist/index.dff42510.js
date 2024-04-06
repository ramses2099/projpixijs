// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1ROjY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "083e61f3dff42510";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"u4Zar":[function(require,module,exports) {
/*!
 * PixiJS - v8.0.5
 * Compiled Tue, 02 Apr 2024 16:14:29 UTC
 *
 * PixiJS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var global = arguments[3];
var PIXI = function(d) {
    "use strict";
    "use strict";
    var Vb = Object.defineProperty, Wb = Object.defineProperties, Yb = Object.getOwnPropertyDescriptors, tu = Object.getOwnPropertySymbols, Kb = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, eu = (r1, t, e)=>t in r1 ? Vb(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, ru = (r1, t)=>{
        for(var e in t || (t = {}))Kb.call(t, e) && eu(r1, e, t[e]);
        if (tu) for (var e of tu(t))qb.call(t, e) && eu(r1, e, t[e]);
        return r1;
    }, Zb = (r1, t)=>Wb(r1, Yb(t)), x = ((r1)=>(r1.Application = "application", r1.WebGLPipes = "webgl-pipes", r1.WebGLPipesAdaptor = "webgl-pipes-adaptor", r1.WebGLSystem = "webgl-system", r1.WebGPUPipes = "webgpu-pipes", r1.WebGPUPipesAdaptor = "webgpu-pipes-adaptor", r1.WebGPUSystem = "webgpu-system", r1.CanvasSystem = "canvas-system", r1.CanvasPipesAdaptor = "canvas-pipes-adaptor", r1.CanvasPipes = "canvas-pipes", r1.Asset = "asset", r1.LoadParser = "load-parser", r1.ResolveParser = "resolve-parser", r1.CacheParser = "cache-parser", r1.DetectionParser = "detection-parser", r1.MaskEffect = "mask-effect", r1.BlendMode = "blend-mode", r1.TextureSource = "texture-source", r1.Environment = "environment", r1))(x || {});
    const Us = (r1)=>{
        if (typeof r1 == "function" || typeof r1 == "object" && r1.extension) {
            const t = typeof r1.extension != "object" ? {
                type: r1.extension
            } : r1.extension;
            r1 = Zb(ru({}, t), {
                ref: r1
            });
        }
        if (typeof r1 == "object") r1 = ru({}, r1);
        else throw new Error("Invalid extension type");
        return typeof r1.type == "string" && (r1.type = [
            r1.type
        ]), r1;
    }, Qe = (r1, t)=>{
        var e;
        return (e = Us(r1).priority) != null ? e : t;
    }, U = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove (...r1) {
            return r1.map(Us).forEach((t)=>{
                t.type.forEach((e)=>{
                    var i, s;
                    return (s = (i = this._removeHandlers)[e]) == null ? void 0 : s.call(i, t);
                });
            }), this;
        },
        add (...r1) {
            return r1.map(Us).forEach((t)=>{
                t.type.forEach((e)=>{
                    var i, s;
                    const n = this._addHandlers, o = this._queue;
                    n[e] ? (s = n[e]) == null || s.call(n, t) : (o[e] = o[e] || [], (i = o[e]) == null || i.push(t));
                });
            }), this;
        },
        handle (r1, t, e) {
            var i;
            const s = this._addHandlers, n = this._removeHandlers;
            s[r1] = t, n[r1] = e;
            const o = this._queue;
            return o[r1] && ((i = o[r1]) == null || i.forEach((a)=>t(a)), delete o[r1]), this;
        },
        handleByMap (r1, t) {
            return this.handle(r1, (e)=>{
                e.name && (t[e.name] = e.ref);
            }, (e)=>{
                e.name && delete t[e.name];
            });
        },
        handleByNamedList (r1, t, e = -1) {
            return this.handle(r1, (i)=>{
                t.findIndex((s)=>s.name === i.name) >= 0 || (t.push({
                    name: i.name,
                    value: i.ref
                }), t.sort((s, n)=>Qe(n.value, e) - Qe(s.value, e)));
            }, (i)=>{
                const s = t.findIndex((n)=>n.name === i.name);
                s !== -1 && t.splice(s, 1);
            });
        },
        handleByList (r1, t, e = -1) {
            return this.handle(r1, (i)=>{
                t.includes(i.ref) || (t.push(i.ref), t.sort((s, n)=>Qe(n, e) - Qe(s, e)));
            }, (i)=>{
                const s = t.indexOf(i.ref);
                s !== -1 && t.splice(s, 1);
            });
        }
    };
    var GA = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function ks(r1) {
        return r1 && r1.__esModule && Object.prototype.hasOwnProperty.call(r1, "default") ? r1.default : r1;
    }
    function BA(r1) {
        return r1 && Object.prototype.hasOwnProperty.call(r1, "default") ? r1.default : r1;
    }
    function IA(r1) {
        return r1 && Object.prototype.hasOwnProperty.call(r1, "default") && Object.keys(r1).length === 1 ? r1.default : r1;
    }
    function FA(r1) {
        if (r1.__esModule) return r1;
        var t = r1.default;
        if (typeof t == "function") {
            var e = function i() {
                return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
            };
            e.prototype = t.prototype;
        } else e = {};
        return Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.keys(r1).forEach(function(i) {
            var s = Object.getOwnPropertyDescriptor(r1, i);
            Object.defineProperty(e, i, s.get ? s : {
                enumerable: !0,
                get: function() {
                    return r1[i];
                }
            });
        }), e;
    }
    var Ls = {
        exports: {}
    }, DA = Ls.exports;
    (function(r1) {
        "use strict";
        var t = Object.prototype.hasOwnProperty, e = "~";
        function i() {}
        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (e = !1));
        function s(l, u, c) {
            this.fn = l, this.context = u, this.once = c || !1;
        }
        function n(l, u, c, h, p) {
            if (typeof c != "function") throw new TypeError("The listener must be a function");
            var f = new s(c, h || l, p), m = e ? e + u : u;
            return l._events[m] ? l._events[m].fn ? l._events[m] = [
                l._events[m],
                f
            ] : l._events[m].push(f) : (l._events[m] = f, l._eventsCount++), l;
        }
        function o(l, u) {
            --l._eventsCount === 0 ? l._events = new i : delete l._events[u];
        }
        function a() {
            this._events = new i, this._eventsCount = 0;
        }
        a.prototype.eventNames = function() {
            var u = [], c, h;
            if (this._eventsCount === 0) return u;
            for(h in c = this._events)t.call(c, h) && u.push(e ? h.slice(1) : h);
            return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(c)) : u;
        }, a.prototype.listeners = function(u) {
            var c = e ? e + u : u, h = this._events[c];
            if (!h) return [];
            if (h.fn) return [
                h.fn
            ];
            for(var p = 0, f = h.length, m = new Array(f); p < f; p++)m[p] = h[p].fn;
            return m;
        }, a.prototype.listenerCount = function(u) {
            var c = e ? e + u : u, h = this._events[c];
            return h ? h.fn ? 1 : h.length : 0;
        }, a.prototype.emit = function(u, c, h, p, f, m) {
            var _ = e ? e + u : u;
            if (!this._events[_]) return !1;
            var g = this._events[_], b = arguments.length, v, y;
            if (g.fn) {
                switch(g.once && this.removeListener(u, g.fn, void 0, !0), b){
                    case 1:
                        return g.fn.call(g.context), !0;
                    case 2:
                        return g.fn.call(g.context, c), !0;
                    case 3:
                        return g.fn.call(g.context, c, h), !0;
                    case 4:
                        return g.fn.call(g.context, c, h, p), !0;
                    case 5:
                        return g.fn.call(g.context, c, h, p, f), !0;
                    case 6:
                        return g.fn.call(g.context, c, h, p, f, m), !0;
                }
                for(y = 1, v = new Array(b - 1); y < b; y++)v[y - 1] = arguments[y];
                g.fn.apply(g.context, v);
            } else {
                var T = g.length, E;
                for(y = 0; y < T; y++)switch(g[y].once && this.removeListener(u, g[y].fn, void 0, !0), b){
                    case 1:
                        g[y].fn.call(g[y].context);
                        break;
                    case 2:
                        g[y].fn.call(g[y].context, c);
                        break;
                    case 3:
                        g[y].fn.call(g[y].context, c, h);
                        break;
                    case 4:
                        g[y].fn.call(g[y].context, c, h, p);
                        break;
                    default:
                        if (!v) for(E = 1, v = new Array(b - 1); E < b; E++)v[E - 1] = arguments[E];
                        g[y].fn.apply(g[y].context, v);
                }
            }
            return !0;
        }, a.prototype.on = function(u, c, h) {
            return n(this, u, c, h, !1);
        }, a.prototype.once = function(u, c, h) {
            return n(this, u, c, h, !0);
        }, a.prototype.removeListener = function(u, c, h, p) {
            var f = e ? e + u : u;
            if (!this._events[f]) return this;
            if (!c) return o(this, f), this;
            var m = this._events[f];
            if (m.fn) m.fn === c && (!p || m.once) && (!h || m.context === h) && o(this, f);
            else {
                for(var _ = 0, g = [], b = m.length; _ < b; _++)(m[_].fn !== c || p && !m[_].once || h && m[_].context !== h) && g.push(m[_]);
                g.length ? this._events[f] = g.length === 1 ? g[0] : g : o(this, f);
            }
            return this;
        }, a.prototype.removeAllListeners = function(u) {
            var c;
            return u ? (c = e ? e + u : u, this._events[c] && o(this, c)) : (this._events = new i, this._eventsCount = 0), this;
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r1.exports = a;
    })(Ls);
    var Qb = Ls.exports, dt = ks(Qb), Jb = {
        grad: .9,
        turn: 360,
        rad: 360 / (2 * Math.PI)
    }, Ht = function(r1) {
        return typeof r1 == "string" ? r1.length > 0 : typeof r1 == "number";
    }, ot = function(r1, t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * r1) / e + 0;
    }, At = function(r1, t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = 1), r1 > e ? e : r1 > t ? r1 : t;
    }, iu = function(r1) {
        return (r1 = isFinite(r1) ? r1 % 360 : 0) > 0 ? r1 : r1 + 360;
    }, su = function(r1) {
        return {
            r: At(r1.r, 0, 255),
            g: At(r1.g, 0, 255),
            b: At(r1.b, 0, 255),
            a: At(r1.a)
        };
    }, $s = function(r1) {
        return {
            r: ot(r1.r),
            g: ot(r1.g),
            b: ot(r1.b),
            a: ot(r1.a, 3)
        };
    }, tv = /^#([0-9a-f]{3,8})$/i, qr = function(r1) {
        var t = r1.toString(16);
        return t.length < 2 ? "0" + t : t;
    }, nu = function(r1) {
        var t = r1.r, e = r1.g, i = r1.b, s = r1.a, n = Math.max(t, e, i), o = n - Math.min(t, e, i), a = o ? n === t ? (e - i) / o : n === e ? 2 + (i - t) / o : 4 + (t - e) / o : 0;
        return {
            h: 60 * (a < 0 ? a + 6 : a),
            s: n ? o / n * 100 : 0,
            v: n / 255 * 100,
            a: s
        };
    }, ou = function(r1) {
        var t = r1.h, e = r1.s, i = r1.v, s = r1.a;
        t = t / 360 * 6, e /= 100, i /= 100;
        var n = Math.floor(t), o = i * (1 - e), a = i * (1 - (t - n) * e), l = i * (1 - (1 - t + n) * e), u = n % 6;
        return {
            r: 255 * [
                i,
                a,
                o,
                o,
                l,
                i
            ][u],
            g: 255 * [
                l,
                i,
                i,
                a,
                o,
                o
            ][u],
            b: 255 * [
                o,
                o,
                l,
                i,
                i,
                a
            ][u],
            a: s
        };
    }, au = function(r1) {
        return {
            h: iu(r1.h),
            s: At(r1.s, 0, 100),
            l: At(r1.l, 0, 100),
            a: At(r1.a)
        };
    }, lu = function(r1) {
        return {
            h: ot(r1.h),
            s: ot(r1.s),
            l: ot(r1.l),
            a: ot(r1.a, 3)
        };
    }, uu = function(r1) {
        var t, e, i;
        return ou((e = (t = r1).s, {
            h: t.h,
            s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0,
            v: i + e,
            a: t.a
        }));
    }, Je = function(r1) {
        var t, e, i, s;
        return {
            h: (t = nu(r1)).h,
            s: (s = (200 - (e = t.s)) * (i = t.v) / 100) > 0 && s < 200 ? e * i / 100 / (s <= 100 ? s : 200 - s) * 100 : 0,
            l: s / 2,
            a: t.a
        };
    }, ev = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, rv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, iv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, sv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Ns = {
        string: [
            [
                function(r1) {
                    var t = tv.exec(r1);
                    return t ? (r1 = t[1]).length <= 4 ? {
                        r: parseInt(r1[0] + r1[0], 16),
                        g: parseInt(r1[1] + r1[1], 16),
                        b: parseInt(r1[2] + r1[2], 16),
                        a: r1.length === 4 ? ot(parseInt(r1[3] + r1[3], 16) / 255, 2) : 1
                    } : r1.length === 6 || r1.length === 8 ? {
                        r: parseInt(r1.substr(0, 2), 16),
                        g: parseInt(r1.substr(2, 2), 16),
                        b: parseInt(r1.substr(4, 2), 16),
                        a: r1.length === 8 ? ot(parseInt(r1.substr(6, 2), 16) / 255, 2) : 1
                    } : null : null;
                },
                "hex"
            ],
            [
                function(r1) {
                    var t = iv.exec(r1) || sv.exec(r1);
                    return t ? t[2] !== t[4] || t[4] !== t[6] ? null : su({
                        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                        a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
                    }) : null;
                },
                "rgb"
            ],
            [
                function(r1) {
                    var t = ev.exec(r1) || rv.exec(r1);
                    if (!t) return null;
                    var e, i, s = au({
                        h: (e = t[1], i = t[2], i === void 0 && (i = "deg"), Number(e) * (Jb[i] || 1)),
                        s: Number(t[3]),
                        l: Number(t[4]),
                        a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
                    });
                    return uu(s);
                },
                "hsl"
            ]
        ],
        object: [
            [
                function(r1) {
                    var t = r1.r, e = r1.g, i = r1.b, s = r1.a, n = s === void 0 ? 1 : s;
                    return Ht(t) && Ht(e) && Ht(i) ? su({
                        r: Number(t),
                        g: Number(e),
                        b: Number(i),
                        a: Number(n)
                    }) : null;
                },
                "rgb"
            ],
            [
                function(r1) {
                    var t = r1.h, e = r1.s, i = r1.l, s = r1.a, n = s === void 0 ? 1 : s;
                    if (!Ht(t) || !Ht(e) || !Ht(i)) return null;
                    var o = au({
                        h: Number(t),
                        s: Number(e),
                        l: Number(i),
                        a: Number(n)
                    });
                    return uu(o);
                },
                "hsl"
            ],
            [
                function(r1) {
                    var t = r1.h, e = r1.s, i = r1.v, s = r1.a, n = s === void 0 ? 1 : s;
                    if (!Ht(t) || !Ht(e) || !Ht(i)) return null;
                    var o = function(a) {
                        return {
                            h: iu(a.h),
                            s: At(a.s, 0, 100),
                            v: At(a.v, 0, 100),
                            a: At(a.a)
                        };
                    }({
                        h: Number(t),
                        s: Number(e),
                        v: Number(i),
                        a: Number(n)
                    });
                    return ou(o);
                },
                "hsv"
            ]
        ]
    }, cu = function(r1, t) {
        for(var e = 0; e < t.length; e++){
            var i = t[e][0](r1);
            if (i) return [
                i,
                t[e][1]
            ];
        }
        return [
            null,
            void 0
        ];
    }, hu = function(r1) {
        return typeof r1 == "string" ? cu(r1.trim(), Ns.string) : typeof r1 == "object" && r1 !== null ? cu(r1, Ns.object) : [
            null,
            void 0
        ];
    }, UA = function(r1) {
        return hu(r1)[1];
    }, Hs = function(r1, t) {
        var e = Je(r1);
        return {
            h: e.h,
            s: At(e.s + 100 * t, 0, 100),
            l: e.l,
            a: e.a
        };
    }, Xs = function(r1) {
        return (299 * r1.r + 587 * r1.g + 114 * r1.b) / 1e3 / 255;
    }, du = function(r1, t) {
        var e = Je(r1);
        return {
            h: e.h,
            s: e.s,
            l: At(e.l + 100 * t, 0, 100),
            a: e.a
        };
    }, Zr = function() {
        function r1(t) {
            this.parsed = hu(t)[0], this.rgba = this.parsed || {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            };
        }
        return r1.prototype.isValid = function() {
            return this.parsed !== null;
        }, r1.prototype.brightness = function() {
            return ot(Xs(this.rgba), 2);
        }, r1.prototype.isDark = function() {
            return Xs(this.rgba) < .5;
        }, r1.prototype.isLight = function() {
            return Xs(this.rgba) >= .5;
        }, r1.prototype.toHex = function() {
            var t, e, i, s, n, o;
            return t = $s(this.rgba), e = t.r, i = t.g, s = t.b, o = (n = t.a) < 1 ? qr(ot(255 * n)) : "", "#" + qr(e) + qr(i) + qr(s) + o;
        }, r1.prototype.toRgb = function() {
            return $s(this.rgba);
        }, r1.prototype.toRgbString = function() {
            var t, e, i, s, n;
            return t = $s(this.rgba), e = t.r, i = t.g, s = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + s + ", " + n + ")" : "rgb(" + e + ", " + i + ", " + s + ")";
        }, r1.prototype.toHsl = function() {
            return lu(Je(this.rgba));
        }, r1.prototype.toHslString = function() {
            var t, e, i, s, n;
            return t = lu(Je(this.rgba)), e = t.h, i = t.s, s = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + s + "%, " + n + ")" : "hsl(" + e + ", " + i + "%, " + s + "%)";
        }, r1.prototype.toHsv = function() {
            var t;
            return t = nu(this.rgba), {
                h: ot(t.h),
                s: ot(t.s),
                v: ot(t.v),
                a: ot(t.a, 3)
            };
        }, r1.prototype.invert = function() {
            var t;
            return Ut({
                r: 255 - (t = this.rgba).r,
                g: 255 - t.g,
                b: 255 - t.b,
                a: t.a
            });
        }, r1.prototype.saturate = function(t) {
            return t === void 0 && (t = .1), Ut(Hs(this.rgba, t));
        }, r1.prototype.desaturate = function(t) {
            return t === void 0 && (t = .1), Ut(Hs(this.rgba, -t));
        }, r1.prototype.grayscale = function() {
            return Ut(Hs(this.rgba, -1));
        }, r1.prototype.lighten = function(t) {
            return t === void 0 && (t = .1), Ut(du(this.rgba, t));
        }, r1.prototype.darken = function(t) {
            return t === void 0 && (t = .1), Ut(du(this.rgba, -t));
        }, r1.prototype.rotate = function(t) {
            return t === void 0 && (t = 15), this.hue(this.hue() + t);
        }, r1.prototype.alpha = function(t) {
            var e;
            return typeof t == "number" ? Ut({
                r: (e = this.rgba).r,
                g: e.g,
                b: e.b,
                a: t
            }) : ot(this.rgba.a, 3);
        }, r1.prototype.hue = function(t) {
            var e = Je(this.rgba);
            return typeof t == "number" ? Ut({
                h: t,
                s: e.s,
                l: e.l,
                a: e.a
            }) : ot(e.h);
        }, r1.prototype.isEqual = function(t) {
            return this.toHex() === Ut(t).toHex();
        }, r1;
    }(), Ut = function(r1) {
        return r1 instanceof Zr ? r1 : new Zr(r1);
    }, pu = [], nv = function(r1) {
        r1.forEach(function(t) {
            pu.indexOf(t) < 0 && (t(Zr, Ns), pu.push(t));
        });
    }, kA = function() {
        return new Zr({
            r: 255 * Math.random(),
            g: 255 * Math.random(),
            b: 255 * Math.random()
        });
    };
    function ov(r1, t) {
        var e = {
            white: "#ffffff",
            bisque: "#ffe4c4",
            blue: "#0000ff",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            azure: "#f0ffff",
            whitesmoke: "#f5f5f5",
            papayawhip: "#ffefd5",
            plum: "#dda0dd",
            blanchedalmond: "#ffebcd",
            black: "#000000",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gainsboro: "#dcdcdc",
            cornsilk: "#fff8dc",
            cornflowerblue: "#6495ed",
            burlywood: "#deb887",
            aquamarine: "#7fffd4",
            beige: "#f5f5dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkkhaki: "#bdb76b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            peachpuff: "#ffdab9",
            darkmagenta: "#8b008b",
            darkred: "#8b0000",
            darkorchid: "#9932cc",
            darkorange: "#ff8c00",
            darkslateblue: "#483d8b",
            gray: "#808080",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            wheat: "#f5deb3",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            ghostwhite: "#f8f8ff",
            darkviolet: "#9400d3",
            magenta: "#ff00ff",
            green: "#008000",
            dodgerblue: "#1e90ff",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            blueviolet: "#8a2be2",
            forestgreen: "#228b22",
            lawngreen: "#7cfc00",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            fuchsia: "#ff00ff",
            brown: "#a52a2a",
            maroon: "#800000",
            mediumblue: "#0000cd",
            lightcoral: "#f08080",
            darkturquoise: "#00ced1",
            lightcyan: "#e0ffff",
            ivory: "#fffff0",
            lightyellow: "#ffffe0",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            linen: "#faf0e6",
            mediumaquamarine: "#66cdaa",
            lemonchiffon: "#fffacd",
            lime: "#00ff00",
            khaki: "#f0e68c",
            mediumseagreen: "#3cb371",
            limegreen: "#32cd32",
            mediumspringgreen: "#00fa9a",
            lightskyblue: "#87cefa",
            lightblue: "#add8e6",
            midnightblue: "#191970",
            lightpink: "#ffb6c1",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            mintcream: "#f5fffa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            navajowhite: "#ffdead",
            navy: "#000080",
            mediumvioletred: "#c71585",
            powderblue: "#b0e0e6",
            palegoldenrod: "#eee8aa",
            oldlace: "#fdf5e6",
            paleturquoise: "#afeeee",
            mediumturquoise: "#48d1cc",
            mediumorchid: "#ba55d3",
            rebeccapurple: "#663399",
            lightsteelblue: "#b0c4de",
            mediumslateblue: "#7b68ee",
            thistle: "#d8bfd8",
            tan: "#d2b48c",
            orchid: "#da70d6",
            mediumpurple: "#9370db",
            purple: "#800080",
            pink: "#ffc0cb",
            skyblue: "#87ceeb",
            springgreen: "#00ff7f",
            palegreen: "#98fb98",
            red: "#ff0000",
            yellow: "#ffff00",
            slateblue: "#6a5acd",
            lavenderblush: "#fff0f5",
            peru: "#cd853f",
            palevioletred: "#db7093",
            violet: "#ee82ee",
            teal: "#008080",
            slategray: "#708090",
            slategrey: "#708090",
            aliceblue: "#f0f8ff",
            darkseagreen: "#8fbc8f",
            darkolivegreen: "#556b2f",
            greenyellow: "#adff2f",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            tomato: "#ff6347",
            silver: "#c0c0c0",
            sienna: "#a0522d",
            lavender: "#e6e6fa",
            lightgreen: "#90ee90",
            orange: "#ffa500",
            orangered: "#ff4500",
            steelblue: "#4682b4",
            royalblue: "#4169e1",
            turquoise: "#40e0d0",
            yellowgreen: "#9acd32",
            salmon: "#fa8072",
            saddlebrown: "#8b4513",
            sandybrown: "#f4a460",
            rosybrown: "#bc8f8f",
            darksalmon: "#e9967a",
            lightgoldenrodyellow: "#fafad2",
            snow: "#fffafa",
            lightgrey: "#d3d3d3",
            lightgray: "#d3d3d3",
            dimgray: "#696969",
            dimgrey: "#696969",
            olivedrab: "#6b8e23",
            olive: "#808000"
        }, i = {};
        for(var s in e)i[e[s]] = s;
        var n = {};
        r1.prototype.toName = function(o) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
            var a, l, u = i[this.toHex()];
            if (u) return u;
            if (o != null && o.closest) {
                var c = this.toRgb(), h = 1 / 0, p = "black";
                if (!n.length) for(var f in e)n[f] = new r1(e[f]).toRgb();
                for(var m in e){
                    var _ = (a = c, l = n[m], Math.pow(a.r - l.r, 2) + Math.pow(a.g - l.g, 2) + Math.pow(a.b - l.b, 2));
                    _ < h && (h = _, p = m);
                }
                return p;
            }
        }, t.string.push([
            function(o) {
                var a = o.toLowerCase(), l = a === "transparent" ? "#0000" : e[a];
                return l ? new r1(l).toRgb() : null;
            },
            "name"
        ]);
    }
    var av = Object.defineProperty, fu = Object.getOwnPropertySymbols, lv = Object.prototype.hasOwnProperty, uv = Object.prototype.propertyIsEnumerable, mu = (r1, t, e)=>t in r1 ? av(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, cv = (r1, t)=>{
        for(var e in t || (t = {}))lv.call(t, e) && mu(r1, e, t[e]);
        if (fu) for (var e of fu(t))uv.call(t, e) && mu(r1, e, t[e]);
        return r1;
    };
    nv([
        ov
    ]);
    const we = class Yr {
        constructor(t = 16777215){
            this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t;
        }
        get red() {
            return this._components[0];
        }
        get green() {
            return this._components[1];
        }
        get blue() {
            return this._components[2];
        }
        get alpha() {
            return this._components[3];
        }
        setValue(t) {
            return this.value = t, this;
        }
        set value(t) {
            if (t instanceof Yr) this._value = this._cloneSource(t._value), this._int = t._int, this._components.set(t._components);
            else {
                if (t === null) throw new Error("Cannot set Color#value to null");
                (this._value === null || !this._isSourceEqual(this._value, t)) && (this._normalize(t), this._value = this._cloneSource(t));
            }
        }
        get value() {
            return this._value;
        }
        _cloneSource(t) {
            return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? cv({}, t) : t;
        }
        _isSourceEqual(t, e) {
            const i = typeof t;
            if (i !== typeof e) return !1;
            if (i === "number" || i === "string" || t instanceof Number) return t === e;
            if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length !== e.length ? !1 : t.every((s, n)=>s === e[n]);
            if (t !== null && e !== null) {
                const s = Object.keys(t), n = Object.keys(e);
                return s.length !== n.length ? !1 : s.every((o)=>t[o] === e[o]);
            }
            return t === e;
        }
        toRgba() {
            const [t, e, i, s] = this._components;
            return {
                r: t,
                g: e,
                b: i,
                a: s
            };
        }
        toRgb() {
            const [t, e, i] = this._components;
            return {
                r: t,
                g: e,
                b: i
            };
        }
        toRgbaString() {
            const [t, e, i] = this.toUint8RgbArray();
            return `rgba(${t},${e},${i},${this.alpha})`;
        }
        toUint8RgbArray(t) {
            const [e, i, s] = this._components;
            return this._arrayRgb || (this._arrayRgb = []), t = t || this._arrayRgb, t[0] = Math.round(e * 255), t[1] = Math.round(i * 255), t[2] = Math.round(s * 255), t;
        }
        toArray(t) {
            this._arrayRgba || (this._arrayRgba = []), t = t || this._arrayRgba;
            const [e, i, s, n] = this._components;
            return t[0] = e, t[1] = i, t[2] = s, t[3] = n, t;
        }
        toRgbArray(t) {
            this._arrayRgb || (this._arrayRgb = []), t = t || this._arrayRgb;
            const [e, i, s] = this._components;
            return t[0] = e, t[1] = i, t[2] = s, t;
        }
        toNumber() {
            return this._int;
        }
        toBgrNumber() {
            const [t, e, i] = this.toUint8RgbArray();
            return (i << 16) + (e << 8) + t;
        }
        toLittleEndianNumber() {
            const t = this._int;
            return (t >> 16) + (t & 65280) + ((t & 255) << 16);
        }
        multiply(t) {
            const [e, i, s, n] = Yr._temp.setValue(t)._components;
            return this._components[0] *= e, this._components[1] *= i, this._components[2] *= s, this._components[3] *= n, this._refreshInt(), this._value = null, this;
        }
        premultiply(t, e = !0) {
            return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this._refreshInt(), this._value = null, this;
        }
        toPremultiplied(t, e = !0) {
            if (t === 1) return -16777216 + this._int;
            if (t === 0) return e ? 0 : this._int;
            let i = this._int >> 16 & 255, s = this._int >> 8 & 255, n = this._int & 255;
            return e && (i = i * t + .5 | 0, s = s * t + .5 | 0, n = n * t + .5 | 0), (t * 255 << 24) + (i << 16) + (s << 8) + n;
        }
        toHex() {
            const t = this._int.toString(16);
            return `#${"000000".substring(0, 6 - t.length) + t}`;
        }
        toHexa() {
            const t = Math.round(this._components[3] * 255).toString(16);
            return this.toHex() + "00".substring(0, 2 - t.length) + t;
        }
        setAlpha(t) {
            return this._components[3] = this._clamp(t), this;
        }
        _normalize(t) {
            let e, i, s, n;
            if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
                const o = t;
                e = (o >> 16 & 255) / 255, i = (o >> 8 & 255) / 255, s = (o & 255) / 255, n = 1;
            } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4) t = this._clamp(t), [e, i, s, n = 1] = t;
            else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4) t = this._clamp(t, 0, 255), [e, i, s, n = 255] = t, e /= 255, i /= 255, s /= 255, n /= 255;
            else if (typeof t == "string" || typeof t == "object") {
                if (typeof t == "string") {
                    const a = Yr.HEX_PATTERN.exec(t);
                    a && (t = `#${a[2]}`);
                }
                const o = Ut(t);
                o.isValid() && ({ r: e, g: i, b: s, a: n } = o.rgba, e /= 255, i /= 255, s /= 255);
            }
            if (e !== void 0) this._components[0] = e, this._components[1] = i, this._components[2] = s, this._components[3] = n, this._refreshInt();
            else throw new Error(`Unable to convert color ${t}`);
        }
        _refreshInt() {
            this._clamp(this._components);
            const [t, e, i] = this._components;
            this._int = (t * 255 << 16) + (e * 255 << 8) + (i * 255 | 0);
        }
        _clamp(t, e = 0, i = 1) {
            return typeof t == "number" ? Math.min(Math.max(t, e), i) : (t.forEach((s, n)=>{
                t[n] = Math.min(Math.max(s, e), i);
            }), t);
        }
        static isColorLike(t) {
            return typeof t == "number" || typeof t == "string" || t instanceof Number || t instanceof Yr || Array.isArray(t) || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Float32Array || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 || t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 || t.h !== void 0 && t.s !== void 0 && t.l !== void 0 && t.a !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 || t.h !== void 0 && t.s !== void 0 && t.v !== void 0 && t.a !== void 0;
        }
    };
    we.shared = new we, we._temp = new we, we.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
    let Y = we;
    const gu = {
        cullArea: null,
        cullable: !1,
        cullableChildren: !0
    }, _u = Math.PI * 2, bu = 180 / Math.PI, vu = Math.PI / 180;
    class V {
        constructor(t = 0, e = 0){
            this.x = 0, this.y = 0, this.x = t, this.y = e;
        }
        clone() {
            return new V(this.x, this.y);
        }
        copyFrom(t) {
            return this.set(t.x, t.y), this;
        }
        copyTo(t) {
            return t.set(this.x, this.y), t;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        set(t = 0, e = t) {
            return this.x = t, this.y = e, this;
        }
        static get shared() {
            return zs.x = 0, zs.y = 0, zs;
        }
    }
    const zs = new V;
    class B {
        constructor(t = 1, e = 0, i = 0, s = 1, n = 0, o = 0){
            this.array = null, this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = o;
        }
        fromArray(t) {
            this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
        }
        set(t, e, i, s, n, o) {
            return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = o, this;
        }
        toArray(t, e) {
            this.array || (this.array = new Float32Array(9));
            const i = e || this.array;
            return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i;
        }
        apply(t, e) {
            e = e || new V;
            const i = t.x, s = t.y;
            return e.x = this.a * i + this.c * s + this.tx, e.y = this.b * i + this.d * s + this.ty, e;
        }
        applyInverse(t, e) {
            e = e || new V;
            const i = this.a, s = this.b, n = this.c, o = this.d, a = this.tx, l = this.ty, u = 1 / (i * o + n * -s), c = t.x, h = t.y;
            return e.x = o * u * c + -n * u * h + (l * n - a * o) * u, e.y = i * u * h + -s * u * c + (-l * i + a * s) * u, e;
        }
        translate(t, e) {
            return this.tx += t, this.ty += e, this;
        }
        scale(t, e) {
            return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
        }
        rotate(t) {
            const e = Math.cos(t), i = Math.sin(t), s = this.a, n = this.c, o = this.tx;
            return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this;
        }
        append(t) {
            const e = this.a, i = this.b, s = this.c, n = this.d;
            return this.a = t.a * e + t.b * s, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * s, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this;
        }
        appendFrom(t, e) {
            const i = t.a, s = t.b, n = t.c, o = t.d, a = t.tx, l = t.ty, u = e.a, c = e.b, h = e.c, p = e.d;
            return this.a = i * u + s * h, this.b = i * c + s * p, this.c = n * u + o * h, this.d = n * c + o * p, this.tx = a * u + l * h + e.tx, this.ty = a * c + l * p + e.ty, this;
        }
        setTransform(t, e, i, s, n, o, a, l, u) {
            return this.a = Math.cos(a + u) * n, this.b = Math.sin(a + u) * n, this.c = -Math.sin(a - l) * o, this.d = Math.cos(a - l) * o, this.tx = t - (i * this.a + s * this.c), this.ty = e - (i * this.b + s * this.d), this;
        }
        prepend(t) {
            const e = this.tx;
            if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
                const i = this.a, s = this.c;
                this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = s * t.a + this.d * t.c, this.d = s * t.b + this.d * t.d;
            }
            return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
        }
        decompose(t) {
            const e = this.a, i = this.b, s = this.c, n = this.d, o = t.pivot, a = -Math.atan2(-s, n), l = Math.atan2(i, e), u = Math.abs(a + l);
            return u < 1e-5 || Math.abs(_u - u) < 1e-5 ? (t.rotation = l, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = l), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(s * s + n * n), t.position.x = this.tx + (o.x * e + o.y * s), t.position.y = this.ty + (o.x * i + o.y * n), t;
        }
        invert() {
            const t = this.a, e = this.b, i = this.c, s = this.d, n = this.tx, o = t * s - e * i;
            return this.a = s / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - s * n) / o, this.ty = -(t * this.ty - e * n) / o, this;
        }
        isIdentity() {
            return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.tx === 0 && this.ty === 0;
        }
        identity() {
            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
        }
        clone() {
            const t = new B;
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
        }
        copyTo(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
        }
        copyFrom(t) {
            return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
        }
        equals(t) {
            return t.a === this.a && t.b === this.b && t.c === this.c && t.d === this.d && t.tx === this.tx && t.ty === this.ty;
        }
        static get IDENTITY() {
            return dv.identity();
        }
        static get shared() {
            return hv.identity();
        }
    }
    const hv = new B, dv = new B;
    class it {
        constructor(t, e, i){
            this._x = e || 0, this._y = i || 0, this._observer = t;
        }
        clone(t) {
            return new it(t != null ? t : this._observer, this._x, this._y);
        }
        set(t = 0, e = t) {
            return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this._observer._onUpdate(this)), this;
        }
        copyFrom(t) {
            return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this._observer._onUpdate(this)), this;
        }
        copyTo(t) {
            return t.set(this._x, this._y), t;
        }
        equals(t) {
            return t.x === this._x && t.y === this._y;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x !== t && (this._x = t, this._observer._onUpdate(this));
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y !== t && (this._y = t, this._observer._onUpdate(this));
        }
    }
    const tr = {
        default: -1
    };
    function Q(r1 = "default") {
        return tr[r1] === void 0 && (tr[r1] = -1), ++tr[r1];
    }
    function pv() {
        for(const r1 in tr)delete tr[r1];
    }
    function js(r1, t, e) {
        const i = r1.length;
        let s;
        if (t >= i || e === 0) return;
        e = t + e > i ? i - t : e;
        const n = i - e;
        for(s = t; s < n; ++s)r1[s] = r1[s + e];
        r1.length = n;
    }
    const yu = {
        allowChildren: !0,
        removeChildren (r1 = 0, t) {
            const e = t != null ? t : this.children.length, i = e - r1, s = [];
            if (i > 0 && i <= e) {
                for(let n = e - 1; n >= r1; n--){
                    const o = this.children[n];
                    o && (this.renderGroup && this.renderGroup.removeChild(o), s.push(o), o.parent = null);
                }
                js(this.children, r1, e);
                for(let n = 0; n < s.length; ++n)this.emit("childRemoved", s[n], this, n), s[n].emit("removed", this);
                return s;
            } else if (i === 0 && this.children.length === 0) return s;
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
        },
        removeChildAt (r1) {
            const t = this.getChildAt(r1);
            return this.removeChild(t);
        },
        getChildAt (r1) {
            if (r1 < 0 || r1 >= this.children.length) throw new Error(`getChildAt: Index (${r1}) does not exist.`);
            return this.children[r1];
        },
        setChildIndex (r1, t) {
            if (t < 0 || t >= this.children.length) throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
            this.getChildIndex(r1), this.addChildAt(r1, t);
        },
        getChildIndex (r1) {
            const t = this.children.indexOf(r1);
            if (t === -1) throw new Error("The supplied Container must be a child of the caller");
            return t;
        },
        addChildAt (r1, t) {
            const { children: e } = this;
            if (t < 0 || t > e.length) throw new Error(`${r1}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);
            if (r1.parent) {
                const i = r1.parent.children.indexOf(r1);
                if (r1.parent === this && i === t) return r1;
                i !== -1 && r1.parent.children.splice(i, 1);
            }
            return t === e.length ? e.push(r1) : e.splice(t, 0, r1), r1.parent = this, r1.didChange = !0, r1.didViewUpdate = !1, r1._updateFlags = 15, this.renderGroup && this.renderGroup.addChild(r1), this.sortableChildren && (this.sortDirty = !0), this.emit("childAdded", r1, this, t), r1.emit("added", this), r1;
        },
        swapChildren (r1, t) {
            if (r1 === t) return;
            const e = this.getChildIndex(r1), i = this.getChildIndex(t);
            this.children[e] = t, this.children[i] = r1;
        },
        removeFromParent () {
            var r1;
            (r1 = this.parent) == null || r1.removeChild(this);
        }
    };
    class Qr {
        constructor(t){
            this.pipe = "filter", this.priority = 1, this.filters = t == null ? void 0 : t.filters, this.filterArea = t == null ? void 0 : t.filterArea;
        }
        destroy() {
            for(let t = 0; t < this.filters.length; t++)this.filters[t].destroy();
            this.filters = null, this.filterArea = null;
        }
    }
    class Jr {
        constructor(t, e){
            this._pool = [], this._count = 0, this._index = 0, this._classType = t, e && this.prepopulate(e);
        }
        prepopulate(t) {
            for(let e = 0; e < t; e++)this._pool[this._index++] = new this._classType;
            this._count += t;
        }
        get(t) {
            var e;
            let i;
            return this._index > 0 ? i = this._pool[--this._index] : i = new this._classType, (e = i.init) == null || e.call(i, t), i;
        }
        return(t) {
            var e;
            (e = t.reset) == null || e.call(t), this._pool[this._index++] = t;
        }
        get totalSize() {
            return this._count;
        }
        get totalFree() {
            return this._index;
        }
        get totalUsed() {
            return this._count - this._index;
        }
    }
    class xu {
        constructor(){
            this._poolsByClass = new Map;
        }
        prepopulate(t, e) {
            this.getPool(t).prepopulate(e);
        }
        get(t, e) {
            return this.getPool(t).get(e);
        }
        return(t) {
            this.getPool(t.constructor).return(t);
        }
        getPool(t) {
            return this._poolsByClass.has(t) || this._poolsByClass.set(t, new Jr(t)), this._poolsByClass.get(t);
        }
        stats() {
            const t = {};
            return this._poolsByClass.forEach((e)=>{
                const i = t[e._classType.name] ? e._classType.name + e._classType.ID : e._classType.name;
                t[i] = {
                    free: e.totalFree,
                    used: e.totalUsed,
                    size: e.totalSize
                };
            }), t;
        }
    }
    const X = new xu;
    class Tu {
        constructor(){
            this._effectClasses = [], this._tests = [], this._initialized = !1;
        }
        init() {
            this._initialized || (this._initialized = !0, this._effectClasses.forEach((t)=>{
                this.add({
                    test: t.test,
                    maskClass: t
                });
            }));
        }
        add(t) {
            this._tests.push(t);
        }
        getMaskEffect(t) {
            this._initialized || this.init();
            for(let e = 0; e < this._tests.length; e++){
                const i = this._tests[e];
                if (i.test(t)) return X.get(i.maskClass, t);
            }
            return t;
        }
        returnMaskEffect(t) {
            X.return(t);
        }
    }
    const ti = new Tu;
    U.handleByList(x.MaskEffect, ti._effectClasses);
    const Su = {
        _mask: null,
        _filters: null,
        effects: [],
        addEffect (r1) {
            this.effects.indexOf(r1) === -1 && (this.effects.push(r1), this.effects.sort((t, e)=>t.priority - e.priority), this.renderGroup && (this.renderGroup.structureDidChange = !0), this._updateIsSimple());
        },
        removeEffect (r1) {
            const t = this.effects.indexOf(r1);
            t !== -1 && (this.effects.splice(t, 1), !this.isRenderGroupRoot && this.renderGroup && (this.renderGroup.structureDidChange = !0), this._updateIsSimple());
        },
        set mask (r){
            if (this._mask || (this._mask = {
                mask: null,
                effect: null
            }), this._mask.mask === r || (this._mask.effect && (this.removeEffect(this._mask.effect), ti.returnMaskEffect(this._mask.effect), this._mask.effect = null), this._mask.mask = r, r == null)) return;
            const t = ti.getMaskEffect(r);
            this._mask.effect = t, this.addEffect(t);
        },
        get mask () {
            var r1;
            return (r1 = this._mask) == null ? void 0 : r1.mask;
        },
        set filters (r){
            !Array.isArray(r) && r && (r = [
                r
            ]), r, this._filters || (this._filters = {
                filters: null,
                effect: null,
                filterArea: null
            });
            const t = (r == null ? void 0 : r.length) > 0, e = this._filters.effect && !t || !this._filters.effect && t;
            if (r = Array.isArray(r) ? r.slice(0) : r, this._filters.filters = Object.freeze(r), e) {
                if (t) {
                    const i = X.get(Qr);
                    this._filters.effect = i, this.addEffect(i);
                } else {
                    const i = this._filters.effect;
                    this.removeEffect(i), i.filterArea = null, i.filters = null, this._filters.effect = null, X.return(i);
                }
            }
            t && (this._filters.effect.filters = r, this._filters.effect.filterArea = this.filterArea);
        },
        get filters () {
            var r2;
            return (r2 = this._filters) == null ? void 0 : r2.filters;
        },
        set filterArea (r){
            this._filters || (this._filters = {
                filters: null,
                effect: null,
                filterArea: null
            }), this._filters.filterArea = r;
        },
        get filterArea () {
            var r3;
            return (r3 = this._filters) == null ? void 0 : r3.filterArea;
        }
    }, Eu = {
        label: null,
        get name () {
            return this.label;
        },
        set name (r){
            this.label = r;
        },
        getChildByName (r1, t = !1) {
            return this.getChildByLabel(r1, t);
        },
        getChildByLabel (r1, t = !1) {
            const e = this.children;
            for(let i = 0; i < e.length; i++){
                const s = e[i];
                if (s.label === r1 || r1 instanceof RegExp && r1.test(s.label)) return s;
            }
            if (t) for(let i = 0; i < e.length; i++){
                const s = e[i].getChildByLabel(r1, !0);
                if (s) return s;
            }
            return null;
        },
        getChildrenByLabel (r1, t = !1, e = []) {
            const i = this.children;
            for(let s = 0; s < i.length; s++){
                const n = i[s];
                (n.label === r1 || r1 instanceof RegExp && r1.test(n.label)) && e.push(n);
            }
            if (t) for(let s = 0; s < i.length; s++)i[s].getChildrenByLabel(r1, !0, e);
            return e;
        }
    }, ei = [
        new V,
        new V,
        new V,
        new V
    ];
    class j {
        constructor(t = 0, e = 0, i = 0, s = 0){
            this.type = "rectangle", this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(s);
        }
        get left() {
            return this.x;
        }
        get right() {
            return this.x + this.width;
        }
        get top() {
            return this.y;
        }
        get bottom() {
            return this.y + this.height;
        }
        isEmpty() {
            return this.left === this.right || this.top === this.bottom;
        }
        static get EMPTY() {
            return new j(0, 0, 0, 0);
        }
        clone() {
            return new j(this.x, this.y, this.width, this.height);
        }
        copyFromBounds(t) {
            return this.x = t.minX, this.y = t.minY, this.width = t.maxX - t.minX, this.height = t.maxY - t.minY, this;
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        contains(t, e) {
            return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
        }
        strokeContains(t, e, i) {
            const { width: s, height: n } = this;
            if (s <= 0 || n <= 0) return !1;
            const o = this.x, a = this.y, l = o - i / 2, u = o + s + i / 2, c = a - i / 2, h = a + n + i / 2, p = o + i / 2, f = o + s - i / 2, m = a + i / 2, _ = a + n - i / 2;
            return t >= l && t <= u && e >= c && e <= h && !(t > p && t < f && e > m && e < _);
        }
        intersects(t, e) {
            if (!e) {
                const w = this.x < t.x ? t.x : this.x;
                if ((this.right > t.right ? t.right : this.right) <= w) return !1;
                const S = this.y < t.y ? t.y : this.y;
                return (this.bottom > t.bottom ? t.bottom : this.bottom) > S;
            }
            const i = this.left, s = this.right, n = this.top, o = this.bottom;
            if (s <= i || o <= n) return !1;
            const a = ei[0].set(t.left, t.top), l = ei[1].set(t.left, t.bottom), u = ei[2].set(t.right, t.top), c = ei[3].set(t.right, t.bottom);
            if (u.x <= a.x || l.y <= a.y) return !1;
            const h = Math.sign(e.a * e.d - e.b * e.c);
            if (h === 0 || (e.apply(a, a), e.apply(l, l), e.apply(u, u), e.apply(c, c), Math.max(a.x, l.x, u.x, c.x) <= i || Math.min(a.x, l.x, u.x, c.x) >= s || Math.max(a.y, l.y, u.y, c.y) <= n || Math.min(a.y, l.y, u.y, c.y) >= o)) return !1;
            const p = h * (l.y - a.y), f = h * (a.x - l.x), m = p * i + f * n, _ = p * s + f * n, g = p * i + f * o, b = p * s + f * o;
            if (Math.max(m, _, g, b) <= p * a.x + f * a.y || Math.min(m, _, g, b) >= p * c.x + f * c.y) return !1;
            const v = h * (a.y - u.y), y = h * (u.x - a.x), T = v * i + y * n, E = v * s + y * n, R = v * i + y * o, M = v * s + y * o;
            return !(Math.max(T, E, R, M) <= v * a.x + y * a.y || Math.min(T, E, R, M) >= v * c.x + y * c.y);
        }
        pad(t = 0, e = t) {
            return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this;
        }
        fit(t) {
            const e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), s = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
            return this.x = e, this.width = Math.max(i - e, 0), this.y = s, this.height = Math.max(n - s, 0), this;
        }
        ceil(t = 1, e = .001) {
            const i = Math.ceil((this.x + this.width - e) * t) / t, s = Math.ceil((this.y + this.height - e) * t) / t;
            return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = s - this.y, this;
        }
        enlarge(t) {
            const e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), s = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
            return this.x = e, this.width = i - e, this.y = s, this.height = n - s, this;
        }
        getBounds(t) {
            return t = t || new j, t.copyFrom(this), t;
        }
    }
    const Au = new B;
    class ut {
        constructor(t = 1 / 0, e = 1 / 0, i = -1 / 0, s = -1 / 0){
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Au, this.minX = t, this.minY = e, this.maxX = i, this.maxY = s;
        }
        isEmpty() {
            return this.minX > this.maxX || this.minY > this.maxY;
        }
        get rectangle() {
            this._rectangle || (this._rectangle = new j);
            const t = this._rectangle;
            return this.minX > this.maxX || this.minY > this.maxY ? (t.x = 0, t.y = 0, t.width = 0, t.height = 0) : t.copyFromBounds(this), t;
        }
        clear() {
            return this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.matrix = Au, this;
        }
        set(t, e, i, s) {
            this.minX = t, this.minY = e, this.maxX = i, this.maxY = s;
        }
        addFrame(t, e, i, s, n) {
            n || (n = this.matrix);
            const o = n.a, a = n.b, l = n.c, u = n.d, c = n.tx, h = n.ty;
            let p = this.minX, f = this.minY, m = this.maxX, _ = this.maxY, g = o * t + l * e + c, b = a * t + u * e + h;
            g < p && (p = g), b < f && (f = b), g > m && (m = g), b > _ && (_ = b), g = o * i + l * e + c, b = a * i + u * e + h, g < p && (p = g), b < f && (f = b), g > m && (m = g), b > _ && (_ = b), g = o * t + l * s + c, b = a * t + u * s + h, g < p && (p = g), b < f && (f = b), g > m && (m = g), b > _ && (_ = b), g = o * i + l * s + c, b = a * i + u * s + h, g < p && (p = g), b < f && (f = b), g > m && (m = g), b > _ && (_ = b), this.minX = p, this.minY = f, this.maxX = m, this.maxY = _;
        }
        addRect(t, e) {
            this.addFrame(t.x, t.y, t.x + t.width, t.y + t.height, e);
        }
        addBounds(t, e) {
            this.addFrame(t.minX, t.minY, t.maxX, t.maxY, e);
        }
        addBoundsMask(t) {
            this.minX = this.minX > t.minX ? this.minX : t.minX, this.minY = this.minY > t.minY ? this.minY : t.minY, this.maxX = this.maxX < t.maxX ? this.maxX : t.maxX, this.maxY = this.maxY < t.maxY ? this.maxY : t.maxY;
        }
        applyMatrix(t) {
            const e = this.minX, i = this.minY, s = this.maxX, n = this.maxY, { a: o, b: a, c: l, d: u, tx: c, ty: h } = t;
            let p = o * e + l * i + c, f = a * e + u * i + h;
            this.minX = p, this.minY = f, this.maxX = p, this.maxY = f, p = o * s + l * i + c, f = a * s + u * i + h, this.minX = p < this.minX ? p : this.minX, this.minY = f < this.minY ? f : this.minY, this.maxX = p > this.maxX ? p : this.maxX, this.maxY = f > this.maxY ? f : this.maxY, p = o * e + l * n + c, f = a * e + u * n + h, this.minX = p < this.minX ? p : this.minX, this.minY = f < this.minY ? f : this.minY, this.maxX = p > this.maxX ? p : this.maxX, this.maxY = f > this.maxY ? f : this.maxY, p = o * s + l * n + c, f = a * s + u * n + h, this.minX = p < this.minX ? p : this.minX, this.minY = f < this.minY ? f : this.minY, this.maxX = p > this.maxX ? p : this.maxX, this.maxY = f > this.maxY ? f : this.maxY;
        }
        fit(t) {
            return this.minX < t.left && (this.minX = t.left), this.maxX > t.right && (this.maxX = t.right), this.minY < t.top && (this.minY = t.top), this.maxY > t.bottom && (this.maxY = t.bottom), this;
        }
        fitBounds(t, e, i, s) {
            return this.minX < t && (this.minX = t), this.maxX > e && (this.maxX = e), this.minY < i && (this.minY = i), this.maxY > s && (this.maxY = s), this;
        }
        pad(t, e = t) {
            return this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e, this;
        }
        ceil() {
            return this.minX = Math.floor(this.minX), this.minY = Math.floor(this.minY), this.maxX = Math.ceil(this.maxX), this.maxY = Math.ceil(this.maxY), this;
        }
        clone() {
            return new ut(this.minX, this.minY, this.maxX, this.maxY);
        }
        scale(t, e = t) {
            return this.minX *= t, this.minY *= e, this.maxX *= t, this.maxY *= e, this;
        }
        get x() {
            return this.minX;
        }
        set x(t) {
            const e = this.maxX - this.minX;
            this.minX = t, this.maxX = t + e;
        }
        get y() {
            return this.minY;
        }
        set y(t) {
            const e = this.maxY - this.minY;
            this.minY = t, this.maxY = t + e;
        }
        get width() {
            return this.maxX - this.minX;
        }
        set width(t) {
            this.maxX = this.minX + t;
        }
        get height() {
            return this.maxY - this.minY;
        }
        set height(t) {
            this.maxY = this.minY + t;
        }
        get left() {
            return this.minX;
        }
        get right() {
            return this.maxX;
        }
        get top() {
            return this.minY;
        }
        get bottom() {
            return this.maxY;
        }
        get isPositive() {
            return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
        }
        get isValid() {
            return this.minX + this.minY !== 1 / 0;
        }
        addVertexData(t, e, i, s) {
            let n = this.minX, o = this.minY, a = this.maxX, l = this.maxY;
            s || (s = this.matrix);
            const u = s.a, c = s.b, h = s.c, p = s.d, f = s.tx, m = s.ty;
            for(let _ = e; _ < i; _ += 2){
                const g = t[_], b = t[_ + 1], v = u * g + h * b + f, y = c * g + p * b + m;
                n = v < n ? v : n, o = y < o ? y : o, a = v > a ? v : a, l = y > l ? y : l;
            }
            this.minX = n, this.minY = o, this.maxX = a, this.maxY = l;
        }
        containsPoint(t, e) {
            return this.minX <= t && this.minY <= e && this.maxX >= t && this.maxY >= e;
        }
        toString() {
            return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
        }
    }
    const kt = new Jr(B), Lt = new Jr(ut);
    function er(r1, t, e) {
        e.clear();
        let i, s;
        return r1.parent ? t ? i = r1.parent.worldTransform : (s = kt.get().identity(), i = rr(r1, s)) : i = B.IDENTITY, Vs(r1, e, i, t), s && kt.return(s), e.isValid || e.set(0, 0, 0, 0), e;
    }
    function Vs(r1, t, e, i) {
        var s, n;
        if (!r1.visible || !r1.measurable) return;
        let o;
        i ? o = r1.worldTransform : (r1.updateLocalTransform(), o = kt.get(), o.appendFrom(r1.localTransform, e));
        const a = t, l = !!r1.effects.length;
        if (l && (t = Lt.get().clear()), r1.boundsArea) t.addRect(r1.boundsArea, o);
        else {
            r1.addBounds && (t.matrix = o, r1.addBounds(t));
            for(let u = 0; u < r1.children.length; u++)Vs(r1.children[u], t, o, i);
        }
        if (l) {
            for(let u = 0; u < r1.effects.length; u++)(n = (s = r1.effects[u]).addBounds) == null || n.call(s, t);
            a.addBounds(t, B.IDENTITY), Lt.return(t);
        }
        i || kt.return(o);
    }
    function rr(r1, t) {
        const e = r1.parent;
        return e && (rr(e, t), e.updateLocalTransform(), t.append(e.localTransform)), t;
    }
    function ri(r1, t, e) {
        return t.clear(), e || (e = B.IDENTITY), Pu(r1, t, e, r1, !0), t.isValid || t.set(0, 0, 0, 0), t;
    }
    function Pu(r1, t, e, i, s) {
        var n, o;
        let a;
        if (s) a = kt.get(), a = e.copyTo(a);
        else {
            if (!r1.visible || !r1.measurable) return;
            r1.updateLocalTransform();
            const c = r1.localTransform;
            a = kt.get(), a.appendFrom(c, e);
        }
        const l = t, u = !!r1.effects.length;
        if (u && (t = Lt.get().clear()), r1.boundsArea) t.addRect(r1.boundsArea, a);
        else {
            r1.renderPipeId && (t.matrix = a, r1.addBounds(t));
            const c = r1.children;
            for(let h = 0; h < c.length; h++)Pu(c[h], t, a, i, !1);
        }
        if (u) {
            for(let c = 0; c < r1.effects.length; c++)(o = (n = r1.effects[c]).addLocalBounds) == null || o.call(n, t, i);
            l.addBounds(t, B.IDENTITY), Lt.return(t);
        }
        kt.return(a);
    }
    function Ru(r1, t, e) {
        const i = r1.parent;
        i && i !== t && (Ru(i, t, e), i.updateLocalTransform(), e.append(i.localTransform));
    }
    function Ws(r1, t) {
        const e = r1.children;
        for(let i = 0; i < e.length; i++){
            const s = e[i], n = (s.uid & 255) << 24 | s._didChangeId & 16777215;
            t.data[t.index] !== n && (t.data[t.index] = n, t.didChange = !0), t.index++, s.children.length && Ws(s, t);
        }
        return t.didChange;
    }
    const fv = new B, wu = {
        _localBoundsCacheId: -1,
        _localBoundsCacheData: null,
        _setWidth (r1, t) {
            const e = Math.sign(this.scale.x) || 1;
            t !== 0 ? this.scale.x = r1 / t * e : this.scale.x = e;
        },
        _setHeight (r1, t) {
            const e = Math.sign(this.scale.y) || 1;
            t !== 0 ? this.scale.y = r1 / t * e : this.scale.y = e;
        },
        getLocalBounds () {
            this._localBoundsCacheData || (this._localBoundsCacheData = {
                data: [],
                index: 1,
                didChange: !1,
                localBounds: new ut
            });
            const r1 = this._localBoundsCacheData;
            return r1.index = 1, r1.didChange = !1, r1.data[0] !== this._didChangeId >> 12 && (r1.didChange = !0, r1.data[0] = this._didChangeId >> 12), Ws(this, r1), r1.didChange && ri(this, r1.localBounds, fv), r1.localBounds;
        },
        getBounds (r1, t) {
            return er(this, r1, t || new ut);
        }
    }, Mu = {
        _onRender: null,
        set onRender (r){
            const t = this.renderGroup;
            if (!r) {
                this._onRender && (t == null || t.removeOnRender(this)), this._onRender = null;
                return;
            }
            this._onRender || t == null || t.addOnRender(this), this._onRender = r;
        },
        get onRender () {
            return this._onRender;
        }
    }, Cu = {
        _zIndex: 0,
        sortDirty: !1,
        sortableChildren: !1,
        get zIndex () {
            return this._zIndex;
        },
        set zIndex (r){
            this._zIndex !== r && (this._zIndex = r, this.depthOfChildModified());
        },
        depthOfChildModified () {
            this.parent && (this.parent.sortableChildren = !0, this.parent.sortDirty = !0), this.renderGroup && !this.isRenderGroupRoot && (this.renderGroup.structureDidChange = !0);
        },
        sortChildren () {
            this.sortDirty && (this.sortDirty = !1, this.children.sort(mv));
        }
    };
    function mv(r1, t) {
        return r1._zIndex - t._zIndex;
    }
    const Ou = {
        getGlobalPosition (r1 = new V, t = !1) {
            return this.parent ? this.parent.toGlobal(this._position, r1, t) : (r1.x = this._position.x, r1.y = this._position.y), r1;
        },
        toGlobal (r1, t, e = !1) {
            if (!e) {
                this.updateLocalTransform();
                const i = rr(this, new B);
                return i.append(this.localTransform), i.apply(r1, t);
            }
            return this.worldTransform.apply(r1, t);
        },
        toLocal (r1, t, e, i) {
            if (t && (r1 = t.toGlobal(r1, e, i)), !i) {
                this.updateLocalTransform();
                const s = rr(this, new B);
                return s.append(this.localTransform), s.applyInverse(r1, e);
            }
            return this.worldTransform.applyInverse(r1, e);
        }
    };
    class Ys {
        constructor(){
            this.uid = Q("instructionSet"), this.instructions = [], this.instructionSize = 0;
        }
        reset() {
            this.instructionSize = 0;
        }
        add(t) {
            this.instructions[this.instructionSize++] = t;
        }
        log() {
            this.instructions.length = this.instructionSize, console.table(this.instructions, [
                "type",
                "action"
            ]);
        }
    }
    class Gu {
        constructor(t){
            this.renderPipeId = "renderGroup", this.root = null, this.canBundle = !1, this.renderGroupParent = null, this.renderGroupChildren = [], this._children = [], this.worldTransform = new B, this.worldColorAlpha = 4294967295, this.worldColor = 16777215, this.worldAlpha = 1, this.childrenToUpdate = Object.create(null), this.updateTick = 0, this.childrenRenderablesToUpdate = {
                list: [],
                index: 0
            }, this.structureDidChange = !0, this.instructionSet = new Ys, this._onRenderContainers = [], this.root = t, this.addChild(t);
        }
        get localTransform() {
            return this.root.localTransform;
        }
        addRenderGroupChild(t) {
            t.renderGroupParent && t.renderGroupParent._removeRenderGroupChild(t), t.renderGroupParent = this, this.onChildUpdate(t.root), this.renderGroupChildren.push(t);
        }
        _removeRenderGroupChild(t) {
            t.root.didChange && this._removeChildFromUpdate(t.root);
            const e = this.renderGroupChildren.indexOf(t);
            e > -1 && this.renderGroupChildren.splice(e, 1), t.renderGroupParent = null;
        }
        addChild(t) {
            if (this.structureDidChange = !0, t !== this.root && (this._children.push(t), t.updateTick = -1, t.parent === this.root ? t.relativeRenderGroupDepth = 1 : t.relativeRenderGroupDepth = t.parent.relativeRenderGroupDepth + 1, t._onRender && this.addOnRender(t)), t.renderGroup) {
                if (t.renderGroup.root === t) {
                    this.addRenderGroupChild(t.renderGroup);
                    return;
                }
            } else t.renderGroup = this, t.didChange = !0;
            const e = t.children;
            t.isRenderGroupRoot || this.onChildUpdate(t);
            for(let i = 0; i < e.length; i++)this.addChild(e[i]);
        }
        removeChild(t) {
            if (this.structureDidChange = !0, t._onRender && this.removeOnRender(t), t.renderGroup.root !== t) {
                const i = t.children;
                for(let s = 0; s < i.length; s++)this.removeChild(i[s]);
                t.didChange && t.renderGroup._removeChildFromUpdate(t), t.renderGroup = null;
            } else this._removeRenderGroupChild(t.renderGroup);
            const e = this._children.indexOf(t);
            e > -1 && this._children.splice(e, 1);
        }
        onChildUpdate(t) {
            let e = this.childrenToUpdate[t.relativeRenderGroupDepth];
            e || (e = this.childrenToUpdate[t.relativeRenderGroupDepth] = {
                index: 0,
                list: []
            }), e.list[e.index++] = t;
        }
        updateRenderable(t) {
            t.globalDisplayStatus < 7 || (t.didViewUpdate = !1, this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t));
        }
        onChildViewUpdate(t) {
            this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = t;
        }
        _removeChildFromUpdate(t) {
            const e = this.childrenToUpdate[t.relativeRenderGroupDepth];
            if (!e) return;
            const i = e.list.indexOf(t);
            i > -1 && e.list.splice(i, 1), e.index--;
        }
        get isRenderable() {
            return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
        }
        addOnRender(t) {
            this._onRenderContainers.push(t);
        }
        removeOnRender(t) {
            this._onRenderContainers.splice(this._onRenderContainers.indexOf(t), 1);
        }
        runOnRender() {
            for(let t = 0; t < this._onRenderContainers.length; t++)this._onRenderContainers[t]._onRender();
        }
    }
    function Bu(r1, t, e = {}) {
        for(const i in t)!e[i] && t[i] !== void 0 && (r1[i] = t[i]);
    }
    const Ks = new it(null), qs = new it(null), Zs = new it(null, 1, 1), ii = 1, Qs = 2, ir = 4, gv = 8;
    class W extends dt {
        constructor(t = {}){
            var e, i;
            super(), this.uid = Q("renderable"), this._updateFlags = 15, this.isRenderGroupRoot = !1, this.renderGroup = null, this.didChange = !1, this.didViewUpdate = !1, this.relativeRenderGroupDepth = 0, this.children = [], this.parent = null, this.includeInBuild = !0, this.measurable = !0, this.isSimple = !0, this.updateTick = -1, this.localTransform = new B, this.relativeGroupTransform = new B, this.groupTransform = this.relativeGroupTransform, this.destroyed = !1, this._position = new it(this, 0, 0), this._scale = Zs, this._pivot = qs, this._skew = Ks, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._rotation = 0, this.localColor = 16777215, this.localAlpha = 1, this.groupAlpha = 1, this.groupColor = 16777215, this.groupColorAlpha = 4294967295, this.localBlendMode = "inherit", this.groupBlendMode = "normal", this.localDisplayStatus = 7, this.globalDisplayStatus = 7, this._didChangeId = 0, this._didLocalTransformChangeId = -1, Bu(this, t, {
                children: !0,
                parent: !0,
                effects: !0
            }), (e = t.children) == null || e.forEach((s)=>this.addChild(s)), this.effects = [], (i = t.parent) == null || i.addChild(this);
        }
        static mixin(t) {
            Object.defineProperties(W.prototype, Object.getOwnPropertyDescriptors(t));
        }
        addChild(...t) {
            if (t.length > 1) {
                for(let i = 0; i < t.length; i++)this.addChild(t[i]);
                return t[0];
            }
            const e = t[0];
            return e.parent === this ? (this.children.splice(this.children.indexOf(e), 1), this.children.push(e), this.renderGroup && !this.isRenderGroupRoot && (this.renderGroup.structureDidChange = !0), e) : (e.parent && e.parent.removeChild(e), this.children.push(e), this.sortableChildren && (this.sortDirty = !0), e.parent = this, e.didChange = !0, e.didViewUpdate = !1, e._updateFlags = 15, this.renderGroup && this.renderGroup.addChild(e), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this), e._zIndex !== 0 && e.depthOfChildModified(), e);
        }
        removeChild(...t) {
            if (t.length > 1) {
                for(let s = 0; s < t.length; s++)this.removeChild(t[s]);
                return t[0];
            }
            const e = t[0], i = this.children.indexOf(e);
            return i > -1 && (this.children.splice(i, 1), this.renderGroup && this.renderGroup.removeChild(e), e.parent = null, this.emit("childRemoved", e, this, i), e.emit("removed", this)), e;
        }
        _onUpdate(t) {
            if (t && t === this._skew && this._updateSkew(), this._didChangeId++, !this.didChange) {
                if (this.didChange = !0, this.isRenderGroupRoot) {
                    const e = this.renderGroup.renderGroupParent;
                    e && e.onChildUpdate(this);
                } else this.renderGroup && this.renderGroup.onChildUpdate(this);
            }
        }
        set isRenderGroup(t) {
            if (this.isRenderGroupRoot && t === !1) throw new Error("[Pixi] cannot undo a render group just yet");
            t && this.enableRenderGroup();
        }
        get isRenderGroup() {
            return this.isRenderGroupRoot;
        }
        enableRenderGroup() {
            if (this.renderGroup && this.renderGroup.root === this) return;
            this.isRenderGroupRoot = !0;
            const t = this.renderGroup;
            if (t && t.removeChild(this), this.renderGroup = new Gu(this), t) {
                for(let e = 0; e < t.renderGroupChildren.length; e++){
                    const i = t.renderGroupChildren[e];
                    let s = i.root;
                    for(; s;){
                        if (s === this) {
                            this.renderGroup.addRenderGroupChild(i);
                            break;
                        }
                        s = s.parent;
                    }
                }
                t.addRenderGroupChild(this.renderGroup);
            }
            this._updateIsSimple(), this.groupTransform = B.IDENTITY;
        }
        _updateIsSimple() {
            this.isSimple = !this.isRenderGroupRoot && this.effects.length === 0;
        }
        get worldTransform() {
            return this._worldTransform || (this._worldTransform = new B), this.renderGroup && (this.isRenderGroupRoot ? this._worldTransform.copyFrom(this.renderGroup.worldTransform) : this._worldTransform.appendFrom(this.relativeGroupTransform, this.renderGroup.worldTransform)), this._worldTransform;
        }
        get x() {
            return this._position.x;
        }
        set x(t) {
            this._position.x = t;
        }
        get y() {
            return this._position.y;
        }
        set y(t) {
            this._position.y = t;
        }
        get position() {
            return this._position;
        }
        set position(t) {
            this._position.copyFrom(t);
        }
        get rotation() {
            return this._rotation;
        }
        set rotation(t) {
            this._rotation !== t && (this._rotation = t, this._onUpdate(this._skew));
        }
        get angle() {
            return this.rotation * bu;
        }
        set angle(t) {
            this.rotation = t * vu;
        }
        get pivot() {
            return this._pivot === qs && (this._pivot = new it(this, 0, 0)), this._pivot;
        }
        set pivot(t) {
            this._pivot === qs && (this._pivot = new it(this, 0, 0)), typeof t == "number" ? this._pivot.set(t) : this._pivot.copyFrom(t);
        }
        get skew() {
            return this._skew === Ks && (this._skew = new it(this, 0, 0)), this._skew;
        }
        set skew(t) {
            this._skew === Ks && (this._skew = new it(this, 0, 0)), this._skew.copyFrom(t);
        }
        get scale() {
            return this._scale === Zs && (this._scale = new it(this, 1, 1)), this._scale;
        }
        set scale(t) {
            this._scale === Zs && (this._scale = new it(this, 0, 0)), typeof t == "number" ? this._scale.set(t) : this._scale.copyFrom(t);
        }
        get width() {
            return Math.abs(this.scale.x * this.getLocalBounds().width);
        }
        set width(t) {
            const e = this.getLocalBounds().width;
            this._setWidth(t, e);
        }
        get height() {
            return Math.abs(this.scale.y * this.getLocalBounds().height);
        }
        set height(t) {
            const e = this.getLocalBounds().height;
            this._setHeight(t, e);
        }
        getSize(t) {
            t || (t = {});
            const e = this.getLocalBounds();
            return t.width = Math.abs(this.scale.x * e.width), t.height = Math.abs(this.scale.y * e.height), t;
        }
        setSize(t, e) {
            var i;
            const s = this.getLocalBounds();
            let n, o;
            typeof t != "object" ? (n = t, o = e != null ? e : t) : (n = t.width, o = (i = t.height) != null ? i : t.width), n !== void 0 && this._setWidth(n, s.width), o !== void 0 && this._setHeight(o, s.height);
        }
        _updateSkew() {
            const t = this._rotation, e = this._skew;
            this._cx = Math.cos(t + e._y), this._sx = Math.sin(t + e._y), this._cy = -Math.sin(t - e._x), this._sy = Math.cos(t - e._x);
        }
        updateTransform(t) {
            return this.position.set(typeof t.x == "number" ? t.x : this.position.x, typeof t.y == "number" ? t.y : this.position.y), this.scale.set(typeof t.scaleX == "number" ? t.scaleX || 1 : this.scale.x, typeof t.scaleY == "number" ? t.scaleY || 1 : this.scale.y), this.rotation = typeof t.rotation == "number" ? t.rotation : this.rotation, this.skew.set(typeof t.skewX == "number" ? t.skewX : this.skew.x, typeof t.skewY == "number" ? t.skewY : this.skew.y), this.pivot.set(typeof t.pivotX == "number" ? t.pivotX : this.pivot.x, typeof t.pivotY == "number" ? t.pivotY : this.pivot.y), this;
        }
        setFromMatrix(t) {
            t.decompose(this);
        }
        updateLocalTransform() {
            if ((this._didLocalTransformChangeId & 15) === this._didChangeId) return;
            this._didLocalTransformChangeId = this._didChangeId;
            const t = this.localTransform, e = this._scale, i = this._pivot, s = this._position, n = e._x, o = e._y, a = i._x, l = i._y;
            t.a = this._cx * n, t.b = this._sx * n, t.c = this._cy * o, t.d = this._sy * o, t.tx = s._x - (a * t.a + l * t.c), t.ty = s._y - (a * t.b + l * t.d);
        }
        set alpha(t) {
            t !== this.localAlpha && (this.localAlpha = t, this._updateFlags |= ii, this._onUpdate());
        }
        get alpha() {
            return this.localAlpha;
        }
        set tint(t) {
            const e = Y.shared.setValue(t != null ? t : 16777215).toBgrNumber();
            e !== this.localColor && (this.localColor = e, this._updateFlags |= ii, this._onUpdate());
        }
        get tint() {
            const t = this.localColor;
            return ((t & 255) << 16) + (t & 65280) + (t >> 16 & 255);
        }
        set blendMode(t) {
            this.localBlendMode !== t && (this.renderGroup && !this.isRenderGroupRoot && (this.renderGroup.structureDidChange = !0), this._updateFlags |= Qs, this.localBlendMode = t, this._onUpdate());
        }
        get blendMode() {
            return this.localBlendMode;
        }
        get visible() {
            return !!(this.localDisplayStatus & 2);
        }
        set visible(t) {
            const e = t ? 1 : 0;
            (this.localDisplayStatus & 2) >> 1 !== e && (this.renderGroup && !this.isRenderGroupRoot && (this.renderGroup.structureDidChange = !0), this._updateFlags |= ir, this.localDisplayStatus ^= 2, this._onUpdate());
        }
        get culled() {
            return !(this.localDisplayStatus & 4);
        }
        set culled(t) {
            const e = t ? 1 : 0;
            (this.localDisplayStatus & 4) >> 2 !== e && (this.renderGroup && !this.isRenderGroupRoot && (this.renderGroup.structureDidChange = !0), this._updateFlags |= ir, this.localDisplayStatus ^= 4, this._onUpdate());
        }
        get renderable() {
            return !!(this.localDisplayStatus & 1);
        }
        set renderable(t) {
            const e = t ? 1 : 0;
            (this.localDisplayStatus & 1) !== e && (this._updateFlags |= ir, this.localDisplayStatus ^= 1, this.renderGroup && !this.isRenderGroupRoot && (this.renderGroup.structureDidChange = !0), this._onUpdate());
        }
        get isRenderable() {
            return this.localDisplayStatus === 7 && this.groupAlpha > 0;
        }
        destroy(t = !1) {
            if (this.destroyed) return;
            this.destroyed = !0, this.removeFromParent(), this.parent = null, this._mask = null, this._filters = null, this.effects = null, this._position = null, this._scale = null, this._pivot = null, this._skew = null, this.emit("destroyed", this), this.removeAllListeners();
            const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children, i = this.removeChildren(0, this.children.length);
            if (e) for(let s = 0; s < i.length; ++s)i[s].destroy(t);
        }
    }
    W.mixin(yu), W.mixin(Ou), W.mixin(Mu), W.mixin(wu), W.mixin(Su), W.mixin(Eu), W.mixin(Cu), W.mixin(gu);
    class Me {
        constructor(t){
            this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = Me.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new V, this.page = new V, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t;
        }
        get layerX() {
            return this.layer.x;
        }
        get layerY() {
            return this.layer.y;
        }
        get pageX() {
            return this.page.x;
        }
        get pageY() {
            return this.page.y;
        }
        get data() {
            return this;
        }
        composedPath() {
            return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
        }
        initEvent(t, e, i) {
            throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
        }
        initUIEvent(t, e, i, s, n) {
            throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
        }
        preventDefault() {
            this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0;
        }
        stopImmediatePropagation() {
            this.propagationImmediatelyStopped = !0;
        }
        stopPropagation() {
            this.propagationStopped = !0;
        }
    }
    var Js = /iPhone/i, Iu = /iPod/i, Fu = /iPad/i, Du = /\biOS-universal(?:.+)Mac\b/i, tn = /\bAndroid(?:.+)Mobile\b/i, Uu = /Android/i, Ce = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, si = /Silk/i, Xt = /Windows Phone/i, ku = /\bWindows(?:.+)ARM\b/i, Lu = /BlackBerry/i, $u = /BB10/i, Nu = /Opera Mini/i, Hu = /\b(CriOS|Chrome)(?:.+)Mobile/i, Xu = /Mobile(?:.+)Firefox\b/i, zu = function(r1) {
        return typeof r1 != "undefined" && r1.platform === "MacIntel" && typeof r1.maxTouchPoints == "number" && r1.maxTouchPoints > 1 && typeof MSStream == "undefined";
    };
    function _v(r1) {
        return function(t) {
            return t.test(r1);
        };
    }
    function ju(r1) {
        var t = {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
        };
        !r1 && typeof navigator != "undefined" ? t = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        } : typeof r1 == "string" ? t.userAgent = r1 : r1 && r1.userAgent && (t = {
            userAgent: r1.userAgent,
            platform: r1.platform,
            maxTouchPoints: r1.maxTouchPoints || 0
        });
        var e = t.userAgent, i = e.split("[FBAN");
        typeof i[1] != "undefined" && (e = i[0]), i = e.split("Twitter"), typeof i[1] != "undefined" && (e = i[0]);
        var s = _v(e), n = {
            apple: {
                phone: s(Js) && !s(Xt),
                ipod: s(Iu),
                tablet: !s(Js) && (s(Fu) || zu(t)) && !s(Xt),
                universal: s(Du),
                device: (s(Js) || s(Iu) || s(Fu) || s(Du) || zu(t)) && !s(Xt)
            },
            amazon: {
                phone: s(Ce),
                tablet: !s(Ce) && s(si),
                device: s(Ce) || s(si)
            },
            android: {
                phone: !s(Xt) && s(Ce) || !s(Xt) && s(tn),
                tablet: !s(Xt) && !s(Ce) && !s(tn) && (s(si) || s(Uu)),
                device: !s(Xt) && (s(Ce) || s(si) || s(tn) || s(Uu)) || s(/\bokhttp\b/i)
            },
            windows: {
                phone: s(Xt),
                tablet: s(ku),
                device: s(Xt) || s(ku)
            },
            other: {
                blackberry: s(Lu),
                blackberry10: s($u),
                opera: s(Nu),
                firefox: s(Xu),
                chrome: s(Hu),
                device: s(Lu) || s($u) || s(Nu) || s(Xu) || s(Hu)
            },
            any: !1,
            phone: !1,
            tablet: !1
        };
        return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n;
    }
    var Vu;
    const Wu = ((Vu = ju.default) != null ? Vu : ju)(globalThis.navigator), bv = 9, ni = 100, vv = 0, yv = 0, Yu = 2, Ku = 1, xv = -1000, Tv = -1000, Sv = 2;
    class en {
        constructor(t, e = Wu){
            this._mobileInfo = e, this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this._pool = [], this._renderId = 0, this._children = [], this._androidUpdateCount = 0, this._androidUpdateFrequency = 500, this._hookDiv = null, (e.tablet || e.phone) && this._createTouchHook();
            const i = document.createElement("div");
            i.style.width = `${ni}px`, i.style.height = `${ni}px`, i.style.position = "absolute", i.style.top = `${vv}px`, i.style.left = `${yv}px`, i.style.zIndex = Yu.toString(), this._div = i, this._renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1);
        }
        get isActive() {
            return this._isActive;
        }
        get isMobileAccessibility() {
            return this._isMobileAccessibility;
        }
        get hookDiv() {
            return this._hookDiv;
        }
        _createTouchHook() {
            const t = document.createElement("button");
            t.style.width = `${Ku}px`, t.style.height = `${Ku}px`, t.style.position = "absolute", t.style.top = `${xv}px`, t.style.left = `${Tv}px`, t.style.zIndex = Sv.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", ()=>{
                this._isMobileAccessibility = !0, this._activate(), this._destroyTouchHook();
            }), document.body.appendChild(t), this._hookDiv = t;
        }
        _destroyTouchHook() {
            this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
        }
        _activate() {
            var t;
            this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this._renderer.runners.postrender.add(this), (t = this._renderer.view.canvas.parentNode) == null || t.appendChild(this._div));
        }
        _deactivate() {
            var t;
            !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this._renderer.runners.postrender.remove(this), (t = this._div.parentNode) == null || t.removeChild(this._div));
        }
        _updateAccessibleObjects(t) {
            if (!t.visible || !t.accessibleChildren) return;
            t.accessible && t.isInteractive() && (t._accessibleActive || this._addChild(t), t._renderId = this._renderId);
            const e = t.children;
            if (e) for(let i = 0; i < e.length; i++)this._updateAccessibleObjects(e[i]);
        }
        init(t) {
            var e;
            this.debug = (e = t == null ? void 0 : t.debug) != null ? e : this.debug, this._renderer.runners.postrender.remove(this);
        }
        postrender() {
            const t = performance.now();
            if (this._mobileInfo.android.device && t < this._androidUpdateCount || (this._androidUpdateCount = t + this._androidUpdateFrequency, !this._renderer.renderingToScreen || !this._renderer.view.canvas)) return;
            this._renderer.lastObjectRendered && this._updateAccessibleObjects(this._renderer.lastObjectRendered);
            const { x: e, y: i, width: s, height: n } = this._renderer.view.canvas.getBoundingClientRect(), { width: o, height: a, resolution: l } = this._renderer, u = s / o * l, c = n / a * l;
            let h = this._div;
            h.style.left = `${e}px`, h.style.top = `${i}px`, h.style.width = `${o}px`, h.style.height = `${a}px`;
            for(let p = 0; p < this._children.length; p++){
                const f = this._children[p];
                if (f._renderId !== this._renderId) f._accessibleActive = !1, js(this._children, p, 1), this._div.removeChild(f._accessibleDiv), this._pool.push(f._accessibleDiv), f._accessibleDiv = null, p--;
                else {
                    h = f._accessibleDiv;
                    let m = f.hitArea;
                    const _ = f.worldTransform;
                    f.hitArea ? (h.style.left = `${(_.tx + m.x * _.a) * u}px`, h.style.top = `${(_.ty + m.y * _.d) * c}px`, h.style.width = `${m.width * _.a * u}px`, h.style.height = `${m.height * _.d * c}px`) : (m = f.getBounds().rectangle, this._capHitArea(m), h.style.left = `${m.x * u}px`, h.style.top = `${m.y * c}px`, h.style.width = `${m.width * u}px`, h.style.height = `${m.height * c}px`, h.title !== f.accessibleTitle && f.accessibleTitle !== null && (h.title = f.accessibleTitle || ""), h.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && h.setAttribute("aria-label", f.accessibleHint || "")), (f.accessibleTitle !== h.title || f.tabIndex !== h.tabIndex) && (h.title = f.accessibleTitle || "", h.tabIndex = f.tabIndex, this.debug && this._updateDebugHTML(h));
                }
            }
            this._renderId++;
        }
        _updateDebugHTML(t) {
            t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
        }
        _capHitArea(t) {
            t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
            const { width: e, height: i } = this._renderer;
            t.x + t.width > e && (t.width = e - t.x), t.y + t.height > i && (t.height = i - t.y);
        }
        _addChild(t) {
            let e = this._pool.pop();
            e || (e = document.createElement("button"), e.style.width = `${ni}px`, e.style.height = `${ni}px`, e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = Yu.toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? e.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (e.title = `container ${t.tabIndex}`), t.accessibleHint && t.accessibleHint !== null && e.setAttribute("aria-label", t.accessibleHint), this.debug && this._updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.container = t, this._children.push(t), this._div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
        }
        _dispatchEvent(t, e) {
            const { container: i } = t.target, s = this._renderer.events.rootBoundary, n = Object.assign(new Me(s), {
                target: i
            });
            s.rootTarget = this._renderer.lastObjectRendered, e.forEach((o)=>s.dispatchEvent(n, o));
        }
        _onClick(t) {
            this._dispatchEvent(t, [
                "click",
                "pointertap",
                "tap"
            ]);
        }
        _onFocus(t) {
            t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, [
                "mouseover"
            ]);
        }
        _onFocusOut(t) {
            t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, [
                "mouseout"
            ]);
        }
        _onKeyDown(t) {
            t.keyCode === bv && this._activate();
        }
        _onMouseMove(t) {
            t.movementX === 0 && t.movementY === 0 || this._deactivate();
        }
        destroy() {
            this._destroyTouchHook(), this._div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this._pool = null, this._children = null, this._renderer = null;
        }
    }
    en.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem
        ],
        name: "accessibility"
    };
    const qu = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: null,
        accessibleType: "button",
        accessiblePointerEvents: "auto",
        accessibleChildren: !0,
        _renderId: -1
    };
    U.add(en), W.mixin(qu);
    class rn {
        static init(t) {
            Object.defineProperty(this, "resizeTo", {
                set (e) {
                    globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = e, e && (globalThis.addEventListener("resize", this.queueResize), this.resize());
                },
                get () {
                    return this._resizeTo;
                }
            }), this.queueResize = ()=>{
                this._resizeTo && (this._cancelResize(), this._resizeId = requestAnimationFrame(()=>this.resize()));
            }, this._cancelResize = ()=>{
                this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
            }, this.resize = ()=>{
                if (!this._resizeTo) return;
                this._cancelResize();
                let e, i;
                if (this._resizeTo === globalThis.window) e = globalThis.innerWidth, i = globalThis.innerHeight;
                else {
                    const { clientWidth: s, clientHeight: n } = this._resizeTo;
                    e = s, i = n;
                }
                this.renderer.resize(e, i), this.render();
            }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
        }
        static destroy() {
            globalThis.removeEventListener("resize", this.queueResize), this._cancelResize(), this._cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
        }
    }
    rn.extension = x.Application;
    var zt = ((r1)=>(r1[r1.INTERACTION = 50] = "INTERACTION", r1[r1.HIGH = 25] = "HIGH", r1[r1.NORMAL = 0] = "NORMAL", r1[r1.LOW = -25] = "LOW", r1[r1.UTILITY = -50] = "UTILITY", r1))(zt || {});
    class oi {
        constructor(t, e = null, i = 0, s = !1){
            this.next = null, this.previous = null, this._destroyed = !1, this._fn = t, this._context = e, this.priority = i, this._once = s;
        }
        match(t, e = null) {
            return this._fn === t && this._context === e;
        }
        emit(t) {
            this._fn && (this._context ? this._fn.call(this._context, t) : this._fn(t));
            const e = this.next;
            return this._once && this.destroy(!0), this._destroyed && (this.next = null), e;
        }
        connect(t) {
            this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
        }
        destroy(t = !1) {
            this._destroyed = !0, this._fn = null, this._context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
            const e = this.next;
            return this.next = t ? null : e, this.previous = null, e;
        }
    }
    const Zu = class Et {
        constructor(){
            this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new oi(null, null, 1 / 0), this.deltaMS = 1 / Et.targetFPMS, this.elapsedMS = 1 / Et.targetFPMS, this._tick = (t)=>{
                this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
            };
        }
        _requestIfNeeded() {
            this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
        }
        _cancelIfNeeded() {
            this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
        }
        _startIfPossible() {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start();
        }
        add(t, e, i = zt.NORMAL) {
            return this._addListener(new oi(t, e, i));
        }
        addOnce(t, e, i = zt.NORMAL) {
            return this._addListener(new oi(t, e, i, !0));
        }
        _addListener(t) {
            let e = this._head.next, i = this._head;
            if (!e) t.connect(i);
            else {
                for(; e;){
                    if (t.priority > e.priority) {
                        t.connect(i);
                        break;
                    }
                    i = e, e = e.next;
                }
                t.previous || t.connect(i);
            }
            return this._startIfPossible(), this;
        }
        remove(t, e) {
            let i = this._head.next;
            for(; i;)i.match(t, e) ? i = i.destroy() : i = i.next;
            return this._head.next || this._cancelIfNeeded(), this;
        }
        get count() {
            if (!this._head) return 0;
            let t = 0, e = this._head;
            for(; e = e.next;)t++;
            return t;
        }
        start() {
            this.started || (this.started = !0, this._requestIfNeeded());
        }
        stop() {
            this.started && (this.started = !1, this._cancelIfNeeded());
        }
        destroy() {
            if (!this._protected) {
                this.stop();
                let t = this._head.next;
                for(; t;)t = t.destroy(!0);
                this._head.destroy(), this._head = null;
            }
        }
        update(t = performance.now()) {
            let e;
            if (t > this.lastTime) {
                if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                    const n = t - this._lastFrame | 0;
                    if (n < this._minElapsedMS) return;
                    this._lastFrame = t - n % this._minElapsedMS;
                }
                this.deltaMS = e, this.deltaTime = this.deltaMS * Et.targetFPMS;
                const i = this._head;
                let s = i.next;
                for(; s;)s = s.emit(this);
                i.next || this._cancelIfNeeded();
            } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = t;
        }
        get FPS() {
            return 1e3 / this.elapsedMS;
        }
        get minFPS() {
            return 1e3 / this._maxElapsedMS;
        }
        set minFPS(t) {
            const e = Math.min(this.maxFPS, t), i = Math.min(Math.max(0, e) / 1e3, Et.targetFPMS);
            this._maxElapsedMS = 1 / i;
        }
        get maxFPS() {
            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
        }
        set maxFPS(t) {
            if (t === 0) this._minElapsedMS = 0;
            else {
                const e = Math.max(this.minFPS, t);
                this._minElapsedMS = 1 / (e / 1e3);
            }
        }
        static get shared() {
            if (!Et._shared) {
                const t = Et._shared = new Et;
                t.autoStart = !0, t._protected = !0;
            }
            return Et._shared;
        }
        static get system() {
            if (!Et._system) {
                const t = Et._system = new Et;
                t.autoStart = !0, t._protected = !0;
            }
            return Et._system;
        }
    };
    Zu.targetFPMS = .06;
    let ht = Zu;
    class sn {
        static init(t) {
            t = Object.assign({
                autoStart: !0,
                sharedTicker: !1
            }, t), Object.defineProperty(this, "ticker", {
                set (e) {
                    this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, zt.LOW);
                },
                get () {
                    return this._ticker;
                }
            }), this.stop = ()=>{
                this._ticker.stop();
            }, this.start = ()=>{
                this._ticker.start();
            }, this._ticker = null, this.ticker = t.sharedTicker ? ht.shared : new ht, t.autoStart && this.start();
        }
        static destroy() {
            if (this._ticker) {
                const t = this._ticker;
                this.ticker = null, t.destroy();
            }
        }
    }
    sn.extension = x.Application, U.add(rn), U.add(sn);
    let Ev = class {
        constructor(){
            this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0;
        }
        init(t) {
            this.removeTickerListener(), this.events = t, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this._tickerAdded = !1, this._pauseUpdate = !0;
        }
        get pauseUpdate() {
            return this._pauseUpdate;
        }
        set pauseUpdate(t) {
            this._pauseUpdate = t;
        }
        addTickerListener() {
            this._tickerAdded || !this.domElement || (ht.system.add(this._tickerUpdate, this, zt.INTERACTION), this._tickerAdded = !0);
        }
        removeTickerListener() {
            this._tickerAdded && (ht.system.remove(this._tickerUpdate, this), this._tickerAdded = !1);
        }
        pointerMoved() {
            this._didMove = !0;
        }
        _update() {
            if (!this.domElement || this._pauseUpdate) return;
            if (this._didMove) {
                this._didMove = !1;
                return;
            }
            const t = this.events._rootPointerEvent;
            this.events.supportsTouchEvents && t.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
                clientX: t.clientX,
                clientY: t.clientY
            }));
        }
        _tickerUpdate(t) {
            this._deltaTime += t.deltaTime, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this._update());
        }
    };
    const jt = new Ev;
    class sr extends Me {
        constructor(){
            super(...arguments), this.client = new V, this.movement = new V, this.offset = new V, this.global = new V, this.screen = new V;
        }
        get clientX() {
            return this.client.x;
        }
        get clientY() {
            return this.client.y;
        }
        get x() {
            return this.clientX;
        }
        get y() {
            return this.clientY;
        }
        get movementX() {
            return this.movement.x;
        }
        get movementY() {
            return this.movement.y;
        }
        get offsetX() {
            return this.offset.x;
        }
        get offsetY() {
            return this.offset.y;
        }
        get globalX() {
            return this.global.x;
        }
        get globalY() {
            return this.global.y;
        }
        get screenX() {
            return this.screen.x;
        }
        get screenY() {
            return this.screen.y;
        }
        getLocalPosition(t, e, i) {
            return t.worldTransform.applyInverse(i || this.global, e);
        }
        getModifierState(t) {
            return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t);
        }
        initMouseEvent(t, e, i, s, n, o, a, l, u, c, h, p, f, m, _) {
            throw new Error("Method not implemented.");
        }
    }
    class Pt extends sr {
        constructor(){
            super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1;
        }
        getCoalescedEvents() {
            return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [
                this
            ] : [];
        }
        getPredictedEvents() {
            throw new Error("getPredictedEvents is not supported!");
        }
    }
    class ae extends sr {
        constructor(){
            super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
        }
    }
    ae.DOM_DELTA_PIXEL = 0, ae.DOM_DELTA_LINE = 1, ae.DOM_DELTA_PAGE = 2;
    const Av = 2048, Pv = new V, nr = new V;
    class Qu {
        constructor(t){
            this.dispatch = new dt, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
                trackingData: {}
            }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
        }
        addEventMapping(t, e) {
            this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
                fn: e,
                priority: 0
            }), this.mappingTable[t].sort((i, s)=>i.priority - s.priority);
        }
        dispatchEvent(t, e) {
            t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, e), this.dispatch.emit(e || t.type, t);
        }
        mapEvent(t) {
            if (!this.rootTarget) return;
            const e = this.mappingTable[t.type];
            if (e) for(let i = 0, s = e.length; i < s; i++)e[i].fn(t);
        }
        hitTest(t, e) {
            jt.pauseUpdate = !0;
            const i = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", s = this[i](this.rootTarget, this.rootTarget.eventMode, Pv.set(t, e), this.hitTestFn, this.hitPruneFn);
            return s && s[0];
        }
        propagate(t, e) {
            if (!t.target) return;
            const i = t.composedPath();
            t.eventPhase = t.CAPTURING_PHASE;
            for(let s = 0, n = i.length - 1; s < n; s++)if (t.currentTarget = i[s], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped) return;
            if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, e), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
                t.eventPhase = t.BUBBLING_PHASE;
                for(let s = i.length - 2; s >= 0; s--)if (t.currentTarget = i[s], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped) return;
            }
        }
        all(t, e, i = this._allInteractiveElements) {
            if (i.length === 0) return;
            t.eventPhase = t.BUBBLING_PHASE;
            const s = Array.isArray(e) ? e : [
                e
            ];
            for(let n = i.length - 1; n >= 0; n--)s.forEach((o)=>{
                t.currentTarget = i[n], this.notifyTarget(t, o);
            });
        }
        propagationPath(t) {
            const e = [
                t
            ];
            for(let i = 0; i < Av && t !== this.rootTarget && t.parent; i++){
                if (!t.parent) throw new Error("Cannot find propagation path to disconnected target");
                e.push(t.parent), t = t.parent;
            }
            return e.reverse(), e;
        }
        hitTestMoveRecursive(t, e, i, s, n, o = !1) {
            let a = !1;
            if (this._interactivePrune(t)) return null;
            if ((t.eventMode === "dynamic" || e === "dynamic") && (jt.pauseUpdate = !1), t.interactiveChildren && t.children) {
                const c = t.children;
                for(let h = c.length - 1; h >= 0; h--){
                    const p = c[h], f = this.hitTestMoveRecursive(p, this._isInteractive(e) ? e : p.eventMode, i, s, n, o || n(t, i));
                    if (f) {
                        if (f.length > 0 && !f[f.length - 1].parent) continue;
                        const m = t.isInteractive();
                        (f.length > 0 || m) && (m && this._allInteractiveElements.push(t), f.push(t)), this._hitElements.length === 0 && (this._hitElements = f), a = !0;
                    }
                }
            }
            const l = this._isInteractive(e), u = t.isInteractive();
            return u && u && this._allInteractiveElements.push(t), o || this._hitElements.length > 0 ? null : a ? this._hitElements : l && !n(t, i) && s(t, i) ? u ? [
                t
            ] : [] : null;
        }
        hitTestRecursive(t, e, i, s, n) {
            if (this._interactivePrune(t) || n(t, i)) return null;
            if ((t.eventMode === "dynamic" || e === "dynamic") && (jt.pauseUpdate = !1), t.interactiveChildren && t.children) {
                const l = t.children, u = i;
                for(let c = l.length - 1; c >= 0; c--){
                    const h = l[c], p = this.hitTestRecursive(h, this._isInteractive(e) ? e : h.eventMode, u, s, n);
                    if (p) {
                        if (p.length > 0 && !p[p.length - 1].parent) continue;
                        const f = t.isInteractive();
                        return (p.length > 0 || f) && p.push(t), p;
                    }
                }
            }
            const o = this._isInteractive(e), a = t.isInteractive();
            return o && s(t, i) ? a ? [
                t
            ] : [] : null;
        }
        _isInteractive(t) {
            return t === "static" || t === "dynamic";
        }
        _interactivePrune(t) {
            return !t || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren;
        }
        hitPruneFn(t, e) {
            if (t.hitArea && (t.worldTransform.applyInverse(e, nr), !t.hitArea.contains(nr.x, nr.y))) return !0;
            if (t.effects && t.effects.length) for(let i = 0; i < t.effects.length; i++){
                const s = t.effects[i];
                if (s.containsPoint && !s.containsPoint(e, this.hitTestFn)) return !0;
            }
            return !1;
        }
        hitTestFn(t, e) {
            return t.hitArea ? !0 : t != null && t.containsPoint ? (t.worldTransform.applyInverse(e, nr), t.containsPoint(nr)) : !1;
        }
        notifyTarget(t, e) {
            var i, s;
            e = e != null ? e : t.type;
            const n = `on${e}`;
            (s = (i = t.currentTarget)[n]) == null || s.call(i, t);
            const o = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
            this._notifyListeners(t, o), t.eventPhase === t.AT_TARGET && this._notifyListeners(t, e);
        }
        mapPointerDown(t) {
            if (!(t instanceof Pt)) return;
            const e = this.createPointerEvent(t);
            if (this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch") this.dispatchEvent(e, "touchstart");
            else if (e.pointerType === "mouse" || e.pointerType === "pen") {
                const s = e.button === 2;
                this.dispatchEvent(e, s ? "rightdown" : "mousedown");
            }
            const i = this.trackingData(t.pointerId);
            i.pressTargetsByButton[t.button] = e.composedPath(), this.freeEvent(e);
        }
        mapPointerMove(t) {
            var e, i, s;
            if (!(t instanceof Pt)) return;
            this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
            const n = this.createPointerEvent(t);
            this._isPointerMoveEvent = !1;
            const o = n.pointerType === "mouse" || n.pointerType === "pen", a = this.trackingData(t.pointerId), l = this.findMountedTarget(a.overTargets);
            if (((e = a.overTargets) == null ? void 0 : e.length) > 0 && l !== n.target) {
                const h = t.type === "mousemove" ? "mouseout" : "pointerout", p = this.createPointerEvent(t, h, l);
                if (this.dispatchEvent(p, "pointerout"), o && this.dispatchEvent(p, "mouseout"), !n.composedPath().includes(l)) {
                    const f = this.createPointerEvent(t, "pointerleave", l);
                    for(f.eventPhase = f.AT_TARGET; f.target && !n.composedPath().includes(f.target);)f.currentTarget = f.target, this.notifyTarget(f), o && this.notifyTarget(f, "mouseleave"), f.target = f.target.parent;
                    this.freeEvent(f);
                }
                this.freeEvent(p);
            }
            if (l !== n.target) {
                const h = t.type === "mousemove" ? "mouseover" : "pointerover", p = this.clonePointerEvent(n, h);
                this.dispatchEvent(p, "pointerover"), o && this.dispatchEvent(p, "mouseover");
                let f = l == null ? void 0 : l.parent;
                for(; f && f !== this.rootTarget.parent && f !== n.target;)f = f.parent;
                if (!f || f === this.rootTarget.parent) {
                    const m = this.clonePointerEvent(n, "pointerenter");
                    for(m.eventPhase = m.AT_TARGET; m.target && m.target !== l && m.target !== this.rootTarget.parent;)m.currentTarget = m.target, this.notifyTarget(m), o && this.notifyTarget(m, "mouseenter"), m.target = m.target.parent;
                    this.freeEvent(m);
                }
                this.freeEvent(p);
            }
            const u = [], c = (i = this.enableGlobalMoveEvents) != null ? i : !0;
            this.moveOnAll ? u.push("pointermove") : this.dispatchEvent(n, "pointermove"), c && u.push("globalpointermove"), n.pointerType === "touch" && (this.moveOnAll ? u.splice(1, 0, "touchmove") : this.dispatchEvent(n, "touchmove"), c && u.push("globaltouchmove")), o && (this.moveOnAll ? u.splice(1, 0, "mousemove") : this.dispatchEvent(n, "mousemove"), c && u.push("globalmousemove"), this.cursor = (s = n.target) == null ? void 0 : s.cursor), u.length > 0 && this.all(n, u), this._allInteractiveElements.length = 0, this._hitElements.length = 0, a.overTargets = n.composedPath(), this.freeEvent(n);
        }
        mapPointerOver(t) {
            var e;
            if (!(t instanceof Pt)) return;
            const i = this.trackingData(t.pointerId), s = this.createPointerEvent(t), n = s.pointerType === "mouse" || s.pointerType === "pen";
            this.dispatchEvent(s, "pointerover"), n && this.dispatchEvent(s, "mouseover"), s.pointerType === "mouse" && (this.cursor = (e = s.target) == null ? void 0 : e.cursor);
            const o = this.clonePointerEvent(s, "pointerenter");
            for(o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)o.currentTarget = o.target, this.notifyTarget(o), n && this.notifyTarget(o, "mouseenter"), o.target = o.target.parent;
            i.overTargets = s.composedPath(), this.freeEvent(s), this.freeEvent(o);
        }
        mapPointerOut(t) {
            if (!(t instanceof Pt)) return;
            const e = this.trackingData(t.pointerId);
            if (e.overTargets) {
                const i = t.pointerType === "mouse" || t.pointerType === "pen", s = this.findMountedTarget(e.overTargets), n = this.createPointerEvent(t, "pointerout", s);
                this.dispatchEvent(n), i && this.dispatchEvent(n, "mouseout");
                const o = this.createPointerEvent(t, "pointerleave", s);
                for(o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)o.currentTarget = o.target, this.notifyTarget(o), i && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
                e.overTargets = null, this.freeEvent(n), this.freeEvent(o);
            }
            this.cursor = null;
        }
        mapPointerUp(t) {
            if (!(t instanceof Pt)) return;
            const e = performance.now(), i = this.createPointerEvent(t);
            if (this.dispatchEvent(i, "pointerup"), i.pointerType === "touch") this.dispatchEvent(i, "touchend");
            else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                const a = i.button === 2;
                this.dispatchEvent(i, a ? "rightup" : "mouseup");
            }
            const s = this.trackingData(t.pointerId), n = this.findMountedTarget(s.pressTargetsByButton[t.button]);
            let o = n;
            if (n && !i.composedPath().includes(n)) {
                let a = n;
                for(; a && !i.composedPath().includes(a);){
                    if (i.currentTarget = a, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch") this.notifyTarget(i, "touchendoutside");
                    else if (i.pointerType === "mouse" || i.pointerType === "pen") {
                        const l = i.button === 2;
                        this.notifyTarget(i, l ? "rightupoutside" : "mouseupoutside");
                    }
                    a = a.parent;
                }
                delete s.pressTargetsByButton[t.button], o = a;
            }
            if (o) {
                const a = this.clonePointerEvent(i, "click");
                a.target = o, a.path = null, s.clicksByButton[t.button] || (s.clicksByButton[t.button] = {
                    clickCount: 0,
                    target: a.target,
                    timeStamp: e
                });
                const l = s.clicksByButton[t.button];
                if (l.target === a.target && e - l.timeStamp < 200 ? ++l.clickCount : l.clickCount = 1, l.target = a.target, l.timeStamp = e, a.detail = l.clickCount, a.pointerType === "mouse") {
                    const u = a.button === 2;
                    this.dispatchEvent(a, u ? "rightclick" : "click");
                } else a.pointerType === "touch" && this.dispatchEvent(a, "tap");
                this.dispatchEvent(a, "pointertap"), this.freeEvent(a);
            }
            this.freeEvent(i);
        }
        mapPointerUpOutside(t) {
            if (!(t instanceof Pt)) return;
            const e = this.trackingData(t.pointerId), i = this.findMountedTarget(e.pressTargetsByButton[t.button]), s = this.createPointerEvent(t);
            if (i) {
                let n = i;
                for(; n;)s.currentTarget = n, this.notifyTarget(s, "pointerupoutside"), s.pointerType === "touch" ? this.notifyTarget(s, "touchendoutside") : (s.pointerType === "mouse" || s.pointerType === "pen") && this.notifyTarget(s, s.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
                delete e.pressTargetsByButton[t.button];
            }
            this.freeEvent(s);
        }
        mapWheel(t) {
            if (!(t instanceof ae)) return;
            const e = this.createWheelEvent(t);
            this.dispatchEvent(e), this.freeEvent(e);
        }
        findMountedTarget(t) {
            if (!t) return null;
            let e = t[0];
            for(let i = 1; i < t.length && t[i].parent === e; i++)e = t[i];
            return e;
        }
        createPointerEvent(t, e, i) {
            var s;
            const n = this.allocateEvent(Pt);
            return this.copyPointerData(t, n), this.copyMouseData(t, n), this.copyData(t, n), n.nativeEvent = t.nativeEvent, n.originalEvent = t, n.target = (s = i != null ? i : this.hitTest(n.global.x, n.global.y)) != null ? s : this._hitElements[0], typeof e == "string" && (n.type = e), n;
        }
        createWheelEvent(t) {
            const e = this.allocateEvent(ae);
            return this.copyWheelData(t, e), this.copyMouseData(t, e), this.copyData(t, e), e.nativeEvent = t.nativeEvent, e.originalEvent = t, e.target = this.hitTest(e.global.x, e.global.y), e;
        }
        clonePointerEvent(t, e) {
            const i = this.allocateEvent(Pt);
            return i.nativeEvent = t.nativeEvent, i.originalEvent = t.originalEvent, this.copyPointerData(t, i), this.copyMouseData(t, i), this.copyData(t, i), i.target = t.target, i.path = t.composedPath().slice(), i.type = e != null ? e : i.type, i;
        }
        copyWheelData(t, e) {
            e.deltaMode = t.deltaMode, e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ;
        }
        copyPointerData(t, e) {
            t instanceof Pt && e instanceof Pt && (e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist);
        }
        copyMouseData(t, e) {
            t instanceof sr && e instanceof sr && (e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.copyFrom(t.client), e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.copyFrom(t.movement), e.screen.copyFrom(t.screen), e.shiftKey = t.shiftKey, e.global.copyFrom(t.global));
        }
        copyData(t, e) {
            e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.detail = t.detail, e.view = t.view, e.which = t.which, e.layer.copyFrom(t.layer), e.page.copyFrom(t.page);
        }
        trackingData(t) {
            return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
                pressTargetsByButton: {},
                clicksByButton: {},
                overTarget: null
            }), this.mappingState.trackingData[t];
        }
        allocateEvent(t) {
            this.eventPool.has(t) || this.eventPool.set(t, []);
            const e = this.eventPool.get(t).pop() || new t(this);
            return e.eventPhase = e.NONE, e.currentTarget = null, e.path = null, e.target = null, e;
        }
        freeEvent(t) {
            if (t.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
            const e = t.constructor;
            this.eventPool.has(e) || this.eventPool.set(e, []), this.eventPool.get(e).push(t);
        }
        _notifyListeners(t, e) {
            const i = t.currentTarget._events[e];
            if (i && t.currentTarget.isInteractive()) {
                if ("fn" in i) i.once && t.currentTarget.removeListener(e, i.fn, void 0, !0), i.fn.call(i.context, t);
                else for(let s = 0, n = i.length; s < n && !t.propagationImmediatelyStopped; s++)i[s].once && t.currentTarget.removeListener(e, i[s].fn, void 0, !0), i[s].fn.call(i[s].context, t);
            }
        }
    }
    var Rv = Object.defineProperty, Ju = Object.getOwnPropertySymbols, wv = Object.prototype.hasOwnProperty, Mv = Object.prototype.propertyIsEnumerable, tc = (r1, t, e)=>t in r1 ? Rv(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Cv = (r1, t)=>{
        for(var e in t || (t = {}))wv.call(t, e) && tc(r1, e, t[e]);
        if (Ju) for (var e of Ju(t))Mv.call(t, e) && tc(r1, e, t[e]);
        return r1;
    };
    const Ov = 1, Gv = {
        touchstart: "pointerdown",
        touchend: "pointerup",
        touchendoutside: "pointerupoutside",
        touchmove: "pointermove",
        touchcancel: "pointercancel"
    }, nn = class Wl {
        constructor(t){
            this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = t, this.rootBoundary = new Qu(null), jt.init(this), this.autoPreventDefault = !0, this._eventsAdded = !1, this._rootPointerEvent = new Pt(null), this._rootWheelEvent = new ae(null), this.cursorStyles = {
                default: "inherit",
                pointer: "pointer"
            }, this.features = new Proxy(Cv({}, Wl.defaultEventFeatures), {
                set: (e, i, s)=>(i === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = s), e[i] = s, !0)
            }), this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._onPointerOverOut = this._onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
        }
        static get defaultEventMode() {
            return this._defaultEventMode;
        }
        init(t) {
            var e, i;
            const { canvas: s, resolution: n } = this.renderer;
            this.setTargetElement(s), this.resolution = n, Wl._defaultEventMode = (e = t.eventMode) != null ? e : "passive", Object.assign(this.features, (i = t.eventFeatures) != null ? i : {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
        }
        resolutionChange(t) {
            this.resolution = t;
        }
        destroy() {
            this.setTargetElement(null), this.renderer = null, this._currentCursor = null;
        }
        setCursor(t) {
            t = t || "default";
            let e = !0;
            if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (e = !1), this._currentCursor === t) return;
            this._currentCursor = t;
            const i = this.cursorStyles[t];
            if (i) switch(typeof i){
                case "string":
                    e && (this.domElement.style.cursor = i);
                    break;
                case "function":
                    i(t);
                    break;
                case "object":
                    e && Object.assign(this.domElement.style, i);
                    break;
            }
            else e && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t);
        }
        get pointer() {
            return this._rootPointerEvent;
        }
        _onPointerDown(t) {
            if (!this.features.click) return;
            this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
            const e = this._normalizeToPointerData(t);
            this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();
            for(let i = 0, s = e.length; i < s; i++){
                const n = e[i], o = this._bootstrapEvent(this._rootPointerEvent, n);
                this.rootBoundary.mapEvent(o);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        _onPointerMove(t) {
            if (!this.features.move) return;
            this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, jt.pointerMoved();
            const e = this._normalizeToPointerData(t);
            for(let i = 0, s = e.length; i < s; i++){
                const n = this._bootstrapEvent(this._rootPointerEvent, e[i]);
                this.rootBoundary.mapEvent(n);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        _onPointerUp(t) {
            if (!this.features.click) return;
            this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
            let e = t.target;
            t.composedPath && t.composedPath().length > 0 && (e = t.composedPath()[0]);
            const i = e !== this.domElement ? "outside" : "", s = this._normalizeToPointerData(t);
            for(let n = 0, o = s.length; n < o; n++){
                const a = this._bootstrapEvent(this._rootPointerEvent, s[n]);
                a.type += i, this.rootBoundary.mapEvent(a);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        _onPointerOverOut(t) {
            if (!this.features.click) return;
            this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
            const e = this._normalizeToPointerData(t);
            for(let i = 0, s = e.length; i < s; i++){
                const n = this._bootstrapEvent(this._rootPointerEvent, e[i]);
                this.rootBoundary.mapEvent(n);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        onWheel(t) {
            if (!this.features.wheel) return;
            const e = this.normalizeWheelEvent(t);
            this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(e);
        }
        setTargetElement(t) {
            this._removeEvents(), this.domElement = t, jt.domElement = t, this._addEvents();
        }
        _addEvents() {
            if (this._eventsAdded || !this.domElement) return;
            jt.addTickerListener();
            const t = this.domElement.style;
            t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this._onPointerMove, !0), this.domElement.addEventListener("pointerdown", this._onPointerDown, !0), this.domElement.addEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this._onPointerOverOut, !0), globalThis.addEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this._onPointerMove, !0), this.domElement.addEventListener("mousedown", this._onPointerDown, !0), this.domElement.addEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this._onPointerOverOut, !0), globalThis.addEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this._onPointerDown, !0), this.domElement.addEventListener("touchend", this._onPointerUp, !0), this.domElement.addEventListener("touchmove", this._onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, {
                passive: !0,
                capture: !0
            }), this._eventsAdded = !0;
        }
        _removeEvents() {
            if (!this._eventsAdded || !this.domElement) return;
            jt.removeTickerListener();
            const t = this.domElement.style;
            t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = "")), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this._onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this._onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this._onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this._onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this._onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this._onPointerMove, !0), this.domElement.removeEventListener("mousedown", this._onPointerDown, !0), this.domElement.removeEventListener("mouseout", this._onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this._onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this._onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this._onPointerDown, !0), this.domElement.removeEventListener("touchend", this._onPointerUp, !0), this.domElement.removeEventListener("touchmove", this._onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this._eventsAdded = !1;
        }
        mapPositionToPoint(t, e, i) {
            const s = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
                x: 0,
                y: 0,
                width: this.domElement.width,
                height: this.domElement.height,
                left: 0,
                top: 0
            }, n = 1 / this.resolution;
            t.x = (e - s.left) * (this.domElement.width / s.width) * n, t.y = (i - s.top) * (this.domElement.height / s.height) * n;
        }
        _normalizeToPointerData(t) {
            const e = [];
            if (this.supportsTouchEvents && t instanceof TouchEvent) for(let i = 0, s = t.changedTouches.length; i < s; i++){
                const n = t.changedTouches[i];
                typeof n.button == "undefined" && (n.button = 0), typeof n.buttons == "undefined" && (n.buttons = 1), typeof n.isPrimary == "undefined" && (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"), typeof n.width == "undefined" && (n.width = n.radiusX || 1), typeof n.height == "undefined" && (n.height = n.radiusY || 1), typeof n.tiltX == "undefined" && (n.tiltX = 0), typeof n.tiltY == "undefined" && (n.tiltY = 0), typeof n.pointerType == "undefined" && (n.pointerType = "touch"), typeof n.pointerId == "undefined" && (n.pointerId = n.identifier || 0), typeof n.pressure == "undefined" && (n.pressure = n.force || .5), typeof n.twist == "undefined" && (n.twist = 0), typeof n.tangentialPressure == "undefined" && (n.tangentialPressure = 0), typeof n.layerX == "undefined" && (n.layerX = n.offsetX = n.clientX), typeof n.layerY == "undefined" && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, n.type = t.type, e.push(n);
            }
            else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
                const i = t;
                typeof i.isPrimary == "undefined" && (i.isPrimary = !0), typeof i.width == "undefined" && (i.width = 1), typeof i.height == "undefined" && (i.height = 1), typeof i.tiltX == "undefined" && (i.tiltX = 0), typeof i.tiltY == "undefined" && (i.tiltY = 0), typeof i.pointerType == "undefined" && (i.pointerType = "mouse"), typeof i.pointerId == "undefined" && (i.pointerId = Ov), typeof i.pressure == "undefined" && (i.pressure = .5), typeof i.twist == "undefined" && (i.twist = 0), typeof i.tangentialPressure == "undefined" && (i.tangentialPressure = 0), i.isNormalized = !0, e.push(i);
            } else e.push(t);
            return e;
        }
        normalizeWheelEvent(t) {
            const e = this._rootWheelEvent;
            return this._transferMouseData(e, t), e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ, e.deltaMode = t.deltaMode, this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.nativeEvent = t, e.type = t.type, e;
        }
        _bootstrapEvent(t, e) {
            return t.originalEvent = null, t.nativeEvent = e, t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist, this._transferMouseData(t, e), this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.isTrusted = e.isTrusted, t.type === "pointerleave" && (t.type = "pointerout"), t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")), t.type.startsWith("touch") && (t.type = Gv[t.type] || t.type), t;
        }
        _transferMouseData(t, e) {
            t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.x = e.clientX, t.client.y = e.clientY, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.x = e.movementX, t.movement.y = e.movementY, t.page.x = e.pageX, t.page.y = e.pageY, t.relatedTarget = null, t.shiftKey = e.shiftKey;
        }
    };
    nn.extension = {
        name: "events",
        type: [
            x.WebGLSystem,
            x.CanvasSystem,
            x.WebGPUSystem
        ],
        priority: -1
    }, nn.defaultEventFeatures = {
        move: !0,
        globalMove: !0,
        click: !0,
        wheel: !0
    };
    let on = nn;
    const ec = {
        onclick: null,
        onmousedown: null,
        onmouseenter: null,
        onmouseleave: null,
        onmousemove: null,
        onglobalmousemove: null,
        onmouseout: null,
        onmouseover: null,
        onmouseup: null,
        onmouseupoutside: null,
        onpointercancel: null,
        onpointerdown: null,
        onpointerenter: null,
        onpointerleave: null,
        onpointermove: null,
        onglobalpointermove: null,
        onpointerout: null,
        onpointerover: null,
        onpointertap: null,
        onpointerup: null,
        onpointerupoutside: null,
        onrightclick: null,
        onrightdown: null,
        onrightup: null,
        onrightupoutside: null,
        ontap: null,
        ontouchcancel: null,
        ontouchend: null,
        ontouchendoutside: null,
        ontouchmove: null,
        onglobaltouchmove: null,
        ontouchstart: null,
        onwheel: null,
        get interactive () {
            return this.eventMode === "dynamic" || this.eventMode === "static";
        },
        set interactive (r){
            this.eventMode = r ? "static" : "passive";
        },
        _internalEventMode: void 0,
        get eventMode () {
            var r4;
            return (r4 = this._internalEventMode) != null ? r4 : on.defaultEventMode;
        },
        set eventMode (r){
            this._internalEventMode = r;
        },
        isInteractive () {
            return this.eventMode === "static" || this.eventMode === "dynamic";
        },
        interactiveChildren: !0,
        hitArea: null,
        addEventListener (r1, t, e) {
            const i = typeof e == "boolean" && e || typeof e == "object" && e.capture, s = typeof e == "object" ? e.signal : void 0, n = typeof e == "object" ? e.once === !0 : !1, o = typeof t == "function" ? void 0 : t;
            r1 = i ? `${r1}capture` : r1;
            const a = typeof t == "function" ? t : t.handleEvent, l = this;
            s && s.addEventListener("abort", ()=>{
                l.off(r1, a, o);
            }), n ? l.once(r1, a, o) : l.on(r1, a, o);
        },
        removeEventListener (r1, t, e) {
            const i = typeof e == "boolean" && e || typeof e == "object" && e.capture, s = typeof t == "function" ? void 0 : t;
            r1 = i ? `${r1}capture` : r1, t = typeof t == "function" ? t : t.handleEvent, this.off(r1, t, s);
        },
        dispatchEvent (r1) {
            if (!(r1 instanceof Me)) throw new Error("Container cannot propagate events outside of the Federated Events API");
            return r1.defaultPrevented = !1, r1.path = null, r1.target = this, r1.manager.dispatchEvent(r1), !r1.defaultPrevented;
        }
    };
    U.add(on), W.mixin(ec);
    var gt = ((r1)=>(r1[r1.Low = 0] = "Low", r1[r1.Normal = 1] = "Normal", r1[r1.High = 2] = "High", r1))(gt || {});
    const rc = {
        createCanvas: (r1, t)=>{
            const e = document.createElement("canvas");
            return e.width = r1, e.height = t, e;
        },
        getCanvasRenderingContext2D: ()=>CanvasRenderingContext2D,
        getWebGLRenderingContext: ()=>WebGLRenderingContext,
        getWebGL2RenderingContext: ()=>WebGL2RenderingContext,
        getNavigator: ()=>navigator,
        getBaseUrl: ()=>{
            var r1;
            return (r1 = document.baseURI) != null ? r1 : window.location.href;
        },
        getFontFaceSet: ()=>document.fonts,
        fetch: (r1, t)=>fetch(r1, t),
        parseXML: (r1)=>new DOMParser().parseFromString(r1, "text/xml")
    };
    let ic = rc;
    const z = {
        get () {
            return ic;
        },
        set (r1) {
            ic = r1;
        }
    };
    function Ot(r1) {
        if (typeof r1 != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(r1)}`);
    }
    function or(r1) {
        return r1.split("?")[0].split("#")[0];
    }
    function Bv(r1) {
        return r1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function Iv(r1, t, e) {
        return r1.replace(new RegExp(Bv(t), "g"), e);
    }
    function Fv(r1, t) {
        let e = "", i = 0, s = -1, n = 0, o = -1;
        for(let a = 0; a <= r1.length; ++a){
            if (a < r1.length) o = r1.charCodeAt(a);
            else {
                if (o === 47) break;
                o = 47;
            }
            if (o === 47) {
                if (!(s === a - 1 || n === 1)) {
                    if (s !== a - 1 && n === 2) {
                        if (e.length < 2 || i !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                            if (e.length > 2) {
                                const l = e.lastIndexOf("/");
                                if (l !== e.length - 1) {
                                    l === -1 ? (e = "", i = 0) : (e = e.slice(0, l), i = e.length - 1 - e.lastIndexOf("/")), s = a, n = 0;
                                    continue;
                                }
                            } else if (e.length === 2 || e.length === 1) {
                                e = "", i = 0, s = a, n = 0;
                                continue;
                            }
                        }
                        t && (e.length > 0 ? e += "/.." : e = "..", i = 2);
                    } else e.length > 0 ? e += `/${r1.slice(s + 1, a)}` : e = r1.slice(s + 1, a), i = a - s - 1;
                }
                s = a, n = 0;
            } else o === 46 && n !== -1 ? ++n : n = -1;
        }
        return e;
    }
    const pt = {
        toPosix (r1) {
            return Iv(r1, "\\", "/");
        },
        isUrl (r1) {
            return /^https?:/.test(this.toPosix(r1));
        },
        isDataUrl (r1) {
            return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r1);
        },
        isBlobUrl (r1) {
            return r1.startsWith("blob:");
        },
        hasProtocol (r1) {
            return /^[^/:]+:/.test(this.toPosix(r1));
        },
        getProtocol (r1) {
            Ot(r1), r1 = this.toPosix(r1);
            const t = /^file:\/\/\//.exec(r1);
            if (t) return t[0];
            const e = /^[^/:]+:\/{0,2}/.exec(r1);
            return e ? e[0] : "";
        },
        toAbsolute (r1, t, e) {
            if (Ot(r1), this.isDataUrl(r1) || this.isBlobUrl(r1)) return r1;
            const i = or(this.toPosix(t != null ? t : z.get().getBaseUrl())), s = or(this.toPosix(e != null ? e : this.rootname(i)));
            return r1 = this.toPosix(r1), r1.startsWith("/") ? pt.join(s, r1.slice(1)) : this.isAbsolute(r1) ? r1 : this.join(i, r1);
        },
        normalize (r1) {
            if (Ot(r1), r1.length === 0) return ".";
            if (this.isDataUrl(r1) || this.isBlobUrl(r1)) return r1;
            r1 = this.toPosix(r1);
            let t = "";
            const e = r1.startsWith("/");
            this.hasProtocol(r1) && (t = this.rootname(r1), r1 = r1.slice(t.length));
            const i = r1.endsWith("/");
            return r1 = Fv(r1, !1), r1.length > 0 && i && (r1 += "/"), e ? `/${r1}` : t + r1;
        },
        isAbsolute (r1) {
            return Ot(r1), r1 = this.toPosix(r1), this.hasProtocol(r1) ? !0 : r1.startsWith("/");
        },
        join (...r1) {
            var t;
            if (r1.length === 0) return ".";
            let e;
            for(let i = 0; i < r1.length; ++i){
                const s = r1[i];
                if (Ot(s), s.length > 0) {
                    if (e === void 0) e = s;
                    else {
                        const n = (t = r1[i - 1]) != null ? t : "";
                        this.joinExtensions.includes(this.extname(n).toLowerCase()) ? e += `/../${s}` : e += `/${s}`;
                    }
                }
            }
            return e === void 0 ? "." : this.normalize(e);
        },
        dirname (r1) {
            if (Ot(r1), r1.length === 0) return ".";
            r1 = this.toPosix(r1);
            let t = r1.charCodeAt(0);
            const e = t === 47;
            let i = -1, s = !0;
            const n = this.getProtocol(r1), o = r1;
            r1 = r1.slice(n.length);
            for(let a = r1.length - 1; a >= 1; --a)if (t = r1.charCodeAt(a), t === 47) {
                if (!s) {
                    i = a;
                    break;
                }
            } else s = !1;
            return i === -1 ? e ? "/" : this.isUrl(o) ? n + r1 : n : e && i === 1 ? "//" : n + r1.slice(0, i);
        },
        rootname (r1) {
            Ot(r1), r1 = this.toPosix(r1);
            let t = "";
            if (r1.startsWith("/") ? t = "/" : t = this.getProtocol(r1), this.isUrl(r1)) {
                const e = r1.indexOf("/", t.length);
                e !== -1 ? t = r1.slice(0, e) : t = r1, t.endsWith("/") || (t += "/");
            }
            return t;
        },
        basename (r1, t) {
            Ot(r1), t && Ot(t), r1 = or(this.toPosix(r1));
            let e = 0, i = -1, s = !0, n;
            if (t !== void 0 && t.length > 0 && t.length <= r1.length) {
                if (t.length === r1.length && t === r1) return "";
                let o = t.length - 1, a = -1;
                for(n = r1.length - 1; n >= 0; --n){
                    const l = r1.charCodeAt(n);
                    if (l === 47) {
                        if (!s) {
                            e = n + 1;
                            break;
                        }
                    } else a === -1 && (s = !1, a = n + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = n) : (o = -1, i = a));
                }
                return e === i ? i = a : i === -1 && (i = r1.length), r1.slice(e, i);
            }
            for(n = r1.length - 1; n >= 0; --n)if (r1.charCodeAt(n) === 47) {
                if (!s) {
                    e = n + 1;
                    break;
                }
            } else i === -1 && (s = !1, i = n + 1);
            return i === -1 ? "" : r1.slice(e, i);
        },
        extname (r1) {
            Ot(r1), r1 = or(this.toPosix(r1));
            let t = -1, e = 0, i = -1, s = !0, n = 0;
            for(let o = r1.length - 1; o >= 0; --o){
                const a = r1.charCodeAt(o);
                if (a === 47) {
                    if (!s) {
                        e = o + 1;
                        break;
                    }
                    continue;
                }
                i === -1 && (s = !1, i = o + 1), a === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1);
            }
            return t === -1 || i === -1 || n === 0 || n === 1 && t === i - 1 && t === e + 1 ? "" : r1.slice(t, i);
        },
        parse (r1) {
            Ot(r1);
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (r1.length === 0) return t;
            r1 = or(this.toPosix(r1));
            let e = r1.charCodeAt(0);
            const i = this.isAbsolute(r1);
            let s;
            const n = "";
            t.root = this.rootname(r1), i || this.hasProtocol(r1) ? s = 1 : s = 0;
            let o = -1, a = 0, l = -1, u = !0, c = r1.length - 1, h = 0;
            for(; c >= s; --c){
                if (e = r1.charCodeAt(c), e === 47) {
                    if (!u) {
                        a = c + 1;
                        break;
                    }
                    continue;
                }
                l === -1 && (u = !1, l = c + 1), e === 46 ? o === -1 ? o = c : h !== 1 && (h = 1) : o !== -1 && (h = -1);
            }
            return o === -1 || l === -1 || h === 0 || h === 1 && o === l - 1 && o === a + 1 ? l !== -1 && (a === 0 && i ? t.base = t.name = r1.slice(1, l) : t.base = t.name = r1.slice(a, l)) : (a === 0 && i ? (t.name = r1.slice(1, o), t.base = r1.slice(1, l)) : (t.name = r1.slice(a, o), t.base = r1.slice(a, l)), t.ext = r1.slice(o, l)), t.dir = this.dirname(r1), n && (t.dir = n + t.dir), t;
        },
        sep: "/",
        delimiter: ":",
        joinExtensions: [
            ".html"
        ]
    }, Rt = (r1, t, e = !1)=>(Array.isArray(r1) || (r1 = [
            r1
        ]), t ? r1.map((i)=>typeof i == "string" || e ? t(i) : i) : r1);
    function sc(r1, t, e, i, s) {
        const n = t[e];
        for(let o = 0; o < n.length; o++){
            const a = n[o];
            e < t.length - 1 ? sc(r1.replace(i[e], a), t, e + 1, i, s) : s.push(r1.replace(i[e], a));
        }
    }
    function nc(r1) {
        const t = /\{(.*?)\}/g, e = r1.match(t), i = [];
        if (e) {
            const s = [];
            e.forEach((n)=>{
                const o = n.substring(1, n.length - 1).split(",");
                s.push(o);
            }), sc(r1, s, 0, e, i);
        } else i.push(r1);
        return i;
    }
    const ar = (r1)=>!Array.isArray(r1);
    var Dv = Object.defineProperty, Uv = Object.defineProperties, kv = Object.getOwnPropertyDescriptors, oc = Object.getOwnPropertySymbols, Lv = Object.prototype.hasOwnProperty, $v = Object.prototype.propertyIsEnumerable, ac = (r1, t, e)=>t in r1 ? Dv(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Oe = (r1, t)=>{
        for(var e in t || (t = {}))Lv.call(t, e) && ac(r1, e, t[e]);
        if (oc) for (var e of oc(t))$v.call(t, e) && ac(r1, e, t[e]);
        return r1;
    }, Nv = (r1, t)=>Uv(r1, kv(t));
    class qt {
        constructor(){
            this._defaultBundleIdentifierOptions = {
                connector: "-",
                createBundleAssetId: (t, e)=>`${t}${this._bundleIdConnector}${e}`,
                extractAssetIdFromBundle: (t, e)=>e.replace(`${t}${this._bundleIdConnector}`, "")
            }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
        }
        setBundleIdentifier(t) {
            var e, i, s;
            if (this._bundleIdConnector = (e = t.connector) != null ? e : this._bundleIdConnector, this._createBundleAssetId = (i = t.createBundleAssetId) != null ? i : this._createBundleAssetId, this._extractAssetIdFromBundle = (s = t.extractAssetIdFromBundle) != null ? s : this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
        }
        prefer(...t) {
            t.forEach((e)=>{
                this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params));
            }), this._resolverHash = {};
        }
        set basePath(t) {
            this._basePath = t;
        }
        get basePath() {
            return this._basePath;
        }
        set rootPath(t) {
            this._rootPath = t;
        }
        get rootPath() {
            return this._rootPath;
        }
        get parsers() {
            return this._parsers;
        }
        reset() {
            this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
        }
        setDefaultSearchParams(t) {
            if (typeof t == "string") this._defaultSearchParams = t;
            else {
                const e = t;
                this._defaultSearchParams = Object.keys(e).map((i)=>`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&");
            }
        }
        getAlias(t) {
            const { alias: e, src: i } = t;
            return Rt(e || i, (s)=>typeof s == "string" ? s : Array.isArray(s) ? s.map((n)=>{
                    var o;
                    return (o = n == null ? void 0 : n.src) != null ? o : n;
                }) : s != null && s.src ? s.src : s, !0);
        }
        addManifest(t) {
            this._manifest, this._manifest = t, t.bundles.forEach((e)=>{
                this.addBundle(e.name, e.assets);
            });
        }
        addBundle(t, e) {
            const i = [];
            let s = e;
            Array.isArray(e) || (s = Object.entries(e).map(([n, o])=>typeof o == "string" || Array.isArray(o) ? {
                    alias: n,
                    src: o
                } : Oe({
                    alias: n
                }, o))), s.forEach((n)=>{
                const o = n.src, a = n.alias;
                let l;
                if (typeof a == "string") {
                    const u = this._createBundleAssetId(t, a);
                    i.push(u), l = [
                        a,
                        u
                    ];
                } else {
                    const u = a.map((c)=>this._createBundleAssetId(t, c));
                    i.push(...u), l = [
                        ...a,
                        ...u
                    ];
                }
                this.add(Nv(Oe({}, n), {
                    alias: l,
                    src: o
                }));
            }), this._bundles[t] = i;
        }
        add(t) {
            const e = [];
            Array.isArray(t) ? e.push(...t) : e.push(t);
            let i;
            Rt(e).forEach((s)=>{
                const { src: n } = s;
                let { data: o, format: a, loadParser: l } = s;
                const u = Rt(n).map((p)=>typeof p == "string" ? nc(p) : Array.isArray(p) ? p : [
                        p
                    ]), c = this.getAlias(s), h = [];
                u.forEach((p)=>{
                    p.forEach((f)=>{
                        var m, _, g;
                        let b = {};
                        if (typeof f != "object") {
                            b.src = f;
                            for(let v = 0; v < this._parsers.length; v++){
                                const y = this._parsers[v];
                                if (y.test(f)) {
                                    b = y.parse(f);
                                    break;
                                }
                            }
                        } else o = (m = f.data) != null ? m : o, a = (_ = f.format) != null ? _ : a, l = (g = f.loadParser) != null ? g : l, b = Oe(Oe({}, b), f);
                        if (!c) throw new Error(`[Resolver] alias is undefined for this asset: ${b.src}`);
                        b = this._buildResolvedAsset(b, {
                            aliases: c,
                            data: o,
                            format: a,
                            loadParser: l
                        }), h.push(b);
                    });
                }), c.forEach((p)=>{
                    this._assetMap[p] = h;
                });
            });
        }
        resolveBundle(t) {
            const e = ar(t);
            t = Rt(t);
            const i = {};
            return t.forEach((s)=>{
                const n = this._bundles[s];
                if (n) {
                    const o = this.resolve(n), a = {};
                    for(const l in o){
                        const u = o[l];
                        a[this._extractAssetIdFromBundle(s, l)] = u;
                    }
                    i[s] = a;
                }
            }), e ? i[t[0]] : i;
        }
        resolveUrl(t) {
            const e = this.resolve(t);
            if (typeof t != "string") {
                const i = {};
                for(const s in e)i[s] = e[s].src;
                return i;
            }
            return e.src;
        }
        resolve(t) {
            const e = ar(t);
            t = Rt(t);
            const i = {};
            return t.forEach((s)=>{
                if (!this._resolverHash[s]) {
                    if (this._assetMap[s]) {
                        let n = this._assetMap[s];
                        const o = this._getPreferredOrder(n);
                        o == null || o.priority.forEach((a)=>{
                            o.params[a].forEach((l)=>{
                                const u = n.filter((c)=>c[a] ? c[a] === l : !1);
                                u.length && (n = u);
                            });
                        }), this._resolverHash[s] = n[0];
                    } else this._resolverHash[s] = this._buildResolvedAsset({
                        alias: [
                            s
                        ],
                        src: s
                    }, {});
                }
                i[s] = this._resolverHash[s];
            }), e ? i[t[0]] : i;
        }
        hasKey(t) {
            return !!this._assetMap[t];
        }
        hasBundle(t) {
            return !!this._bundles[t];
        }
        _getPreferredOrder(t) {
            for(let e = 0; e < t.length; e++){
                const i = t[0], s = this._preferredOrder.find((n)=>n.params.format.includes(i.format));
                if (s) return s;
            }
            return this._preferredOrder[0];
        }
        _appendDefaultSearchParams(t) {
            if (!this._defaultSearchParams) return t;
            const e = /\?/.test(t) ? "&" : "?";
            return `${t}${e}${this._defaultSearchParams}`;
        }
        _buildResolvedAsset(t, e) {
            var i, s;
            const { aliases: n, data: o, loadParser: a, format: l } = e;
            return (this._basePath || this._rootPath) && (t.src = pt.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = (i = n != null ? n : t.alias) != null ? i : [
                t.src
            ], t.src = this._appendDefaultSearchParams(t.src), t.data = Oe(Oe({}, o || {}), t.data), t.loadParser = a != null ? a : t.loadParser, t.format = (s = l != null ? l : t.format) != null ? s : lc(t.src), t;
        }
    }
    qt.RETINA_PREFIX = /@([0-9\.]+)x/;
    function lc(r1) {
        return r1.split(".").pop().split("?").shift().split("#").shift();
    }
    const ai = (r1, t)=>{
        const e = t.split("?")[1];
        return e && (r1 += `?${e}`), r1;
    }, le = [
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1
    ], ue = [
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1
    ], ce = [
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1
    ], he = [
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1
    ], an = [], uc = [], li = Math.sign;
    function Hv() {
        for(let r1 = 0; r1 < 16; r1++){
            const t = [];
            an.push(t);
            for(let e = 0; e < 16; e++){
                const i = li(le[r1] * le[e] + ce[r1] * ue[e]), s = li(ue[r1] * le[e] + he[r1] * ue[e]), n = li(le[r1] * ce[e] + ce[r1] * he[e]), o = li(ue[r1] * ce[e] + he[r1] * he[e]);
                for(let a = 0; a < 16; a++)if (le[a] === i && ue[a] === s && ce[a] === n && he[a] === o) {
                    t.push(a);
                    break;
                }
            }
        }
        for(let r1 = 0; r1 < 16; r1++){
            const t = new B;
            t.set(le[r1], ue[r1], ce[r1], he[r1], 0, 0), uc.push(t);
        }
    }
    Hv();
    const k = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: (r1)=>le[r1],
        uY: (r1)=>ue[r1],
        vX: (r1)=>ce[r1],
        vY: (r1)=>he[r1],
        inv: (r1)=>r1 & 8 ? r1 & 15 : -r1 & 7,
        add: (r1, t)=>an[r1][t],
        sub: (r1, t)=>an[r1][k.inv(t)],
        rotate180: (r1)=>r1 ^ 4,
        isVertical: (r1)=>(r1 & 3) === 2,
        byDirection: (r1, t)=>Math.abs(r1) * 2 <= Math.abs(t) ? t >= 0 ? k.S : k.N : Math.abs(t) * 2 <= Math.abs(r1) ? r1 > 0 ? k.E : k.W : t > 0 ? r1 > 0 ? k.SE : k.SW : r1 > 0 ? k.NE : k.NW,
        matrixAppendRotationInv: (r1, t, e = 0, i = 0)=>{
            const s = uc[k.inv(t)];
            s.tx = e, s.ty = i, r1.append(s);
        }
    }, ln = ()=>{};
    function de(r1) {
        return r1 += r1 === 0 ? 1 : 0, --r1, r1 |= r1 >>> 1, r1 |= r1 >>> 2, r1 |= r1 >>> 4, r1 |= r1 >>> 8, r1 |= r1 >>> 16, r1 + 1;
    }
    function un(r1) {
        return !(r1 & r1 - 1) && !!r1;
    }
    function Xv(r1) {
        let t = (r1 > 65535 ? 1 : 0) << 4;
        r1 >>>= t;
        let e = (r1 > 255 ? 1 : 0) << 3;
        return r1 >>>= e, t |= e, e = (r1 > 15 ? 1 : 0) << 2, r1 >>>= e, t |= e, e = (r1 > 3 ? 1 : 0) << 1, r1 >>>= e, t |= e, t | r1 >> 1;
    }
    function Zt(r1) {
        const t = {};
        for(const e in r1)r1[e] !== void 0 && (t[e] = r1[e]);
        return t;
    }
    var zv = Object.defineProperty, cc = Object.getOwnPropertySymbols, jv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, hc = (r1, t, e)=>t in r1 ? zv(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, dc = (r1, t)=>{
        for(var e in t || (t = {}))jv.call(t, e) && hc(r1, e, t[e]);
        if (cc) for (var e of cc(t))Vv.call(t, e) && hc(r1, e, t[e]);
        return r1;
    };
    const pc = Object.create(null);
    function Wv(r1) {
        const t = pc[r1];
        return t === void 0 && (pc[r1] = Q("resource")), t;
    }
    const fc = class Tb extends dt {
        constructor(t = {}){
            var e, i, s, n, o, a, l;
            super(), this._resourceType = "textureSampler", this._touched = 0, this._maxAnisotropy = 1, t = dc(dc({}, Tb.defaultOptions), t), this.addressMode = t.addressMode, this.addressModeU = (e = t.addressModeU) != null ? e : this.addressModeU, this.addressModeV = (i = t.addressModeV) != null ? i : this.addressModeV, this.addressModeW = (s = t.addressModeW) != null ? s : this.addressModeW, this.scaleMode = t.scaleMode, this.magFilter = (n = t.magFilter) != null ? n : this.magFilter, this.minFilter = (o = t.minFilter) != null ? o : this.minFilter, this.mipmapFilter = (a = t.mipmapFilter) != null ? a : this.mipmapFilter, this.lodMinClamp = t.lodMinClamp, this.lodMaxClamp = t.lodMaxClamp, this.compare = t.compare, this.maxAnisotropy = (l = t.maxAnisotropy) != null ? l : 1;
        }
        set addressMode(t) {
            this.addressModeU = t, this.addressModeV = t, this.addressModeW = t;
        }
        get addressMode() {
            return this.addressModeU;
        }
        set wrapMode(t) {
            this.addressMode = t;
        }
        get wrapMode() {
            return this.addressMode;
        }
        set scaleMode(t) {
            this.magFilter = t, this.minFilter = t, this.mipmapFilter = t;
        }
        get scaleMode() {
            return this.magFilter;
        }
        set maxAnisotropy(t) {
            this._maxAnisotropy = Math.min(t, 16), this._maxAnisotropy > 1 && (this.scaleMode = "linear");
        }
        get maxAnisotropy() {
            return this._maxAnisotropy;
        }
        get _resourceId() {
            return this._sharedResourceId || this._generateResourceId();
        }
        update() {
            this.emit("change", this), this._sharedResourceId = null;
        }
        _generateResourceId() {
            const t = `${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;
            return this._sharedResourceId = Wv(t), this._resourceId;
        }
        destroy() {
            this.emit("destroy", this), this.removeAllListeners();
        }
    };
    fc.defaultOptions = {
        addressMode: "clamp-to-edge",
        scaleMode: "linear"
    };
    let mc = fc;
    var Yv = Object.defineProperty, gc = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, qv = Object.prototype.propertyIsEnumerable, _c = (r1, t, e)=>t in r1 ? Yv(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, bc = (r1, t)=>{
        for(var e in t || (t = {}))Kv.call(t, e) && _c(r1, e, t[e]);
        if (gc) for (var e of gc(t))qv.call(t, e) && _c(r1, e, t[e]);
        return r1;
    };
    const vc = class Sb extends dt {
        constructor(t = {}){
            var e, i, s;
            super(), this.options = t, this.uid = Q("textureSource"), this._resourceType = "textureSource", this._resourceId = Q("resource"), this.uploadMethodId = "unknown", this._resolution = 1, this.pixelWidth = 1, this.pixelHeight = 1, this.width = 1, this.height = 1, this.sampleCount = 1, this.mipLevelCount = 1, this.autoGenerateMipmaps = !1, this.format = "rgba8unorm", this.dimension = "2d", this.antialias = !1, this._touched = 0, this._batchTick = -1, this._textureBindLocation = -1, t = bc(bc({}, Sb.defaultOptions), t), this.label = (e = t.label) != null ? e : "", this.resource = t.resource, this.autoGarbageCollect = t.autoGarbageCollect, this._resolution = t.resolution, t.width ? this.pixelWidth = t.width * this._resolution : this.pixelWidth = this.resource && (i = this.resourceWidth) != null ? i : 1, t.height ? this.pixelHeight = t.height * this._resolution : this.pixelHeight = this.resource && (s = this.resourceHeight) != null ? s : 1, this.width = this.pixelWidth / this._resolution, this.height = this.pixelHeight / this._resolution, this.format = t.format, this.dimension = t.dimensions, this.mipLevelCount = t.mipLevelCount, this.autoGenerateMipmaps = t.autoGenerateMipmaps, this.sampleCount = t.sampleCount, this.antialias = t.antialias, this.alphaMode = t.alphaMode, this.style = new mc(Zt(t)), this.destroyed = !1, this._refreshPOT();
        }
        get source() {
            return this;
        }
        get style() {
            return this._style;
        }
        set style(t) {
            var e, i;
            this.style !== t && ((e = this._style) == null || e.off("change", this._onStyleChange, this), this._style = t, (i = this._style) == null || i.on("change", this._onStyleChange, this), this._onStyleChange());
        }
        get addressMode() {
            return this._style.addressMode;
        }
        set addressMode(t) {
            this._style.addressMode = t;
        }
        get repeatMode() {
            return this._style.addressMode;
        }
        set repeatMode(t) {
            this._style.addressMode = t;
        }
        get magFilter() {
            return this._style.magFilter;
        }
        set magFilter(t) {
            this._style.magFilter = t;
        }
        get minFilter() {
            return this._style.minFilter;
        }
        set minFilter(t) {
            this._style.minFilter = t;
        }
        get mipmapFilter() {
            return this._style.mipmapFilter;
        }
        set mipmapFilter(t) {
            this._style.mipmapFilter = t;
        }
        get lodMinClamp() {
            return this._style.lodMinClamp;
        }
        set lodMinClamp(t) {
            this._style.lodMinClamp = t;
        }
        get lodMaxClamp() {
            return this._style.lodMaxClamp;
        }
        set lodMaxClamp(t) {
            this._style.lodMaxClamp = t;
        }
        _onStyleChange() {
            this.emit("styleChange", this);
        }
        update() {
            if (this.resource) {
                const t = this._resolution;
                if (this.resize(this.resourceWidth / t, this.resourceHeight / t)) return;
            }
            this.emit("update", this);
        }
        destroy() {
            this.destroyed = !0, this.emit("destroy", this), this._style && (this._style.destroy(), this._style = null), this.uploadMethodId = null, this.resource = null, this.removeAllListeners();
        }
        unload() {
            this._resourceId = Q("resource"), this.emit("change", this), this.emit("unload", this);
        }
        get resourceWidth() {
            const { resource: t } = this;
            return t.naturalWidth || t.videoWidth || t.displayWidth || t.width;
        }
        get resourceHeight() {
            const { resource: t } = this;
            return t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
        }
        get resolution() {
            return this._resolution;
        }
        set resolution(t) {
            this._resolution !== t && (this._resolution = t, this.width = this.pixelWidth / t, this.height = this.pixelHeight / t);
        }
        resize(t, e, i) {
            i = i || this._resolution, t = t || this.width, e = e || this.height;
            const s = Math.round(t * i), n = Math.round(e * i);
            return this.width = s / i, this.height = n / i, this._resolution = i, this.pixelWidth === s && this.pixelHeight === n ? !1 : (this._refreshPOT(), this.pixelWidth = s, this.pixelHeight = n, this.emit("resize", this), this._resourceId = Q("resource"), this.emit("change", this), !0);
        }
        updateMipmaps() {
            this.autoGenerateMipmaps && this.mipLevelCount > 1 && this.emit("updateMipmaps", this);
        }
        set wrapMode(t) {
            this._style.wrapMode = t;
        }
        get wrapMode() {
            return this._style.wrapMode;
        }
        set scaleMode(t) {
            this._style.scaleMode = t;
        }
        get scaleMode() {
            return this._style.scaleMode;
        }
        _refreshPOT() {
            this.isPowerOfTwo = un(this.pixelWidth) && un(this.pixelHeight);
        }
        static test(t) {
            throw new Error("Unimplemented");
        }
    };
    vc.defaultOptions = {
        resolution: 1,
        format: "bgra8unorm",
        alphaMode: "premultiply-alpha-on-upload",
        dimensions: "2d",
        mipLevelCount: 1,
        autoGenerateMipmaps: !1,
        sampleCount: 1,
        antialias: !1,
        autoGarbageCollect: !1
    };
    let rt = vc;
    var Zv = Object.defineProperty, Qv = Object.defineProperties, Jv = Object.getOwnPropertyDescriptors, yc = Object.getOwnPropertySymbols, ty = Object.prototype.hasOwnProperty, ey = Object.prototype.propertyIsEnumerable, xc = (r1, t, e)=>t in r1 ? Zv(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, ry = (r1, t)=>{
        for(var e in t || (t = {}))ty.call(t, e) && xc(r1, e, t[e]);
        if (yc) for (var e of yc(t))ey.call(t, e) && xc(r1, e, t[e]);
        return r1;
    }, iy = (r1, t)=>Qv(r1, Jv(t));
    class ui extends rt {
        constructor(t){
            const e = t.resource || new Float32Array(t.width * t.height * 4);
            let i = t.format;
            i || (e instanceof Float32Array ? i = "rgba32float" : e instanceof Int32Array || e instanceof Uint32Array ? i = "rgba32uint" : e instanceof Int16Array || e instanceof Uint16Array ? i = "rgba16uint" : (Int8Array, i = "bgra8unorm")), super(iy(ry({}, t), {
                resource: e,
                format: i
            })), this.uploadMethodId = "buffer";
        }
        static test(t) {
            return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
        }
    }
    ui.extension = x.TextureSource;
    const Tc = new B;
    class cn {
        constructor(t, e){
            this.mapCoord = new B, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, typeof e == "undefined" ? this.clampMargin = t.width < 10 ? 0 : .5 : this.clampMargin = e, this.isSimple = !1, this.texture = t;
        }
        get texture() {
            return this._texture;
        }
        set texture(t) {
            var e;
            this.texture !== t && ((e = this._texture) == null || e.removeListener("update", this.update, this), this._texture = t, this._texture.addListener("update", this.update, this), this.update());
        }
        multiplyUvs(t, e) {
            e === void 0 && (e = t);
            const i = this.mapCoord;
            for(let s = 0; s < t.length; s += 2){
                const n = t[s], o = t[s + 1];
                e[s] = n * i.a + o * i.c + i.tx, e[s + 1] = n * i.b + o * i.d + i.ty;
            }
            return e;
        }
        update() {
            const t = this._texture;
            this._updateID++;
            const e = t.uvs;
            this.mapCoord.set(e.x1 - e.x0, e.y1 - e.y0, e.x3 - e.x0, e.y3 - e.y0, e.x0, e.y0);
            const i = t.orig, s = t.trim;
            s && (Tc.set(i.width / s.width, 0, 0, i.height / s.height, -s.x / s.width, -s.y / s.height), this.mapCoord.append(Tc));
            const n = t.source, o = this.uClampFrame, a = this.clampMargin / n._resolution, l = this.clampOffset;
            return o[0] = (t.frame.x + a + l) / n.width, o[1] = (t.frame.y + a + l) / n.height, o[2] = (t.frame.x + t.frame.width - a + l) / n.width, o[3] = (t.frame.y + t.frame.height - a + l) / n.height, this.uClampOffset[0] = l / n.pixelWidth, this.uClampOffset[1] = l / n.pixelHeight, this.isSimple = t.frame.width === n.width && t.frame.height === n.height && t.rotate === 0, !0;
        }
    }
    class P extends dt {
        constructor({ source: t, label: e, frame: i, orig: s, trim: n, defaultAnchor: o, defaultBorders: a, rotate: l, dynamic: u } = {}){
            var c;
            if (super(), this.uid = Q("texture"), this.uvs = {
                x0: 0,
                y0: 0,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                x3: 0,
                y3: 0
            }, this.frame = new j, this.noFrame = !1, this.dynamic = !1, this.isTexture = !0, this.label = e, this.source = (c = t == null ? void 0 : t.source) != null ? c : new rt, this.noFrame = !i, i) this.frame.copyFrom(i);
            else {
                const { width: h, height: p } = this._source;
                this.frame.width = h, this.frame.height = p;
            }
            this.orig = s || this.frame, this.trim = n, this.rotate = l != null ? l : 0, this.defaultAnchor = o, this.defaultBorders = a, this.destroyed = !1, this.dynamic = u || !1, this.updateUvs();
        }
        set source(t) {
            this._source && this._source.off("resize", this.update, this), this._source = t, t.on("resize", this.update, this), this.emit("update", this);
        }
        get source() {
            return this._source;
        }
        get textureMatrix() {
            return this._textureMatrix || (this._textureMatrix = new cn(this)), this._textureMatrix;
        }
        get width() {
            return this.orig.width;
        }
        get height() {
            return this.orig.height;
        }
        updateUvs() {
            const { uvs: t, frame: e } = this, { width: i, height: s } = this._source, n = e.x / i, o = e.y / s, a = e.width / i, l = e.height / s;
            let u = this.rotate;
            if (u) {
                const c = a / 2, h = l / 2, p = n + c, f = o + h;
                u = k.add(u, k.NW), t.x0 = p + c * k.uX(u), t.y0 = f + h * k.uY(u), u = k.add(u, 2), t.x1 = p + c * k.uX(u), t.y1 = f + h * k.uY(u), u = k.add(u, 2), t.x2 = p + c * k.uX(u), t.y2 = f + h * k.uY(u), u = k.add(u, 2), t.x3 = p + c * k.uX(u), t.y3 = f + h * k.uY(u);
            } else t.x0 = n, t.y0 = o, t.x1 = n + a, t.y1 = o, t.x2 = n + a, t.y2 = o + l, t.x3 = n, t.y3 = o + l;
        }
        destroy(t = !1) {
            this._source && t && (this._source.destroy(), this._source = null), this._textureMatrix = null, this.destroyed = !0, this.emit("destroy", this), this.removeAllListeners();
        }
        update() {
            this.noFrame && (this.frame.width = this._source.width, this.frame.height = this._source.height), this.updateUvs(), this.emit("update", this);
        }
        get baseTexture() {
            return this._source;
        }
    }
    P.EMPTY = new P({
        label: "EMPTY",
        source: new rt({
            label: "EMPTY"
        })
    }), P.EMPTY.destroy = ln, P.WHITE = new P({
        source: new ui({
            resource: new Uint8Array([
                255,
                255,
                255,
                255
            ]),
            width: 1,
            height: 1,
            alphaMode: "premultiply-alpha-on-upload",
            label: "WHITE"
        }),
        label: "WHITE"
    }), P.WHITE.destroy = ln;
    const Sc = class Kr {
        constructor(t, e){
            this.linkedSheets = [], this._texture = t instanceof P ? t : null, this.textureSource = t.source, this.textures = {}, this.animations = {}, this.data = e;
            const i = parseFloat(e.meta.scale);
            i ? (this.resolution = i, t.source.resolution = this.resolution) : this.resolution = t.source._resolution, this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
        }
        parse() {
            return new Promise((t)=>{
                this._callback = t, this._batchIndex = 0, this._frameKeys.length <= Kr.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
            });
        }
        _processFrames(t) {
            let e = t;
            const i = Kr.BATCH_SIZE;
            for(; e - t < i && e < this._frameKeys.length;){
                const s = this._frameKeys[e], n = this._frames[s], o = n.frame;
                if (o) {
                    let a = null, l = null;
                    const u = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame, c = new j(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution);
                    n.rotated ? a = new j(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : a = new j(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), n.trimmed !== !1 && n.spriteSourceSize && (l = new j(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[s] = new P({
                        source: this.textureSource,
                        frame: a,
                        orig: c,
                        trim: l,
                        rotate: n.rotated ? 2 : 0,
                        defaultAnchor: n.anchor,
                        defaultBorders: n.borders,
                        label: s.toString()
                    });
                }
                e++;
            }
        }
        _processAnimations() {
            const t = this.data.animations || {};
            for(const e in t){
                this.animations[e] = [];
                for(let i = 0; i < t[e].length; i++){
                    const s = t[e][i];
                    this.animations[e].push(this.textures[s]);
                }
            }
        }
        _parseComplete() {
            const t = this._callback;
            this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
        }
        _nextBatch() {
            this._processFrames(this._batchIndex * Kr.BATCH_SIZE), this._batchIndex++, setTimeout(()=>{
                this._batchIndex * Kr.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
            }, 0);
        }
        destroy(t = !1) {
            var e;
            for(const i in this.textures)this.textures[i].destroy();
            this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && ((e = this._texture) == null || e.destroy(), this.textureSource.destroy()), this._texture = null, this.textureSource = null, this.linkedSheets = [];
        }
    };
    Sc.BATCH_SIZE = 1e3;
    let hn = Sc;
    const sy = [
        "jpg",
        "png",
        "jpeg",
        "avif",
        "webp",
        "basis",
        "etc2",
        "bc7",
        "bc6h",
        "bc5",
        "bc4",
        "bc3",
        "bc2",
        "bc1",
        "eac",
        "astc"
    ];
    function Ec(r1, t, e) {
        const i = {};
        if (r1.forEach((s)=>{
            i[s] = t;
        }), Object.keys(t.textures).forEach((s)=>{
            i[s] = t.textures[s];
        }), !e) {
            const s = pt.dirname(r1[0]);
            t.linkedSheets.forEach((n, o)=>{
                const a = Ec([
                    `${s}/${t.data.meta.related_multi_packs[o]}`
                ], n, !0);
                Object.assign(i, a);
            });
        }
        return i;
    }
    const Ac = {
        extension: x.Asset,
        cache: {
            test: (r1)=>r1 instanceof hn,
            getCacheableAssets: (r1, t)=>Ec(r1, t, !1)
        },
        resolver: {
            test: (r1)=>{
                const t = r1.split("?")[0].split("."), e = t.pop(), i = t.pop();
                return e === "json" && sy.includes(i);
            },
            parse: (r1)=>{
                var t, e;
                const i = r1.split(".");
                return {
                    resolution: parseFloat((e = (t = qt.RETINA_PREFIX.exec(r1)) == null ? void 0 : t[1]) != null ? e : "1"),
                    format: i[i.length - 2],
                    src: r1
                };
            }
        },
        loader: {
            name: "spritesheetLoader",
            extension: {
                type: x.LoadParser,
                priority: gt.Normal
            },
            async testParse (r1, t) {
                return pt.extname(t.src).toLowerCase() === ".json" && !!r1.frames;
            },
            async parse (r1, t, e) {
                var i, s, n;
                const { texture: o, imageFilename: a } = (i = t == null ? void 0 : t.data) != null ? i : {};
                let l = pt.dirname(t.src);
                l && l.lastIndexOf("/") !== l.length - 1 && (l += "/");
                let u;
                if (o instanceof P) u = o;
                else {
                    const p = ai(l + (a != null ? a : r1.meta.image), t.src);
                    u = (await e.load([
                        p
                    ]))[p];
                }
                const c = new hn(u.source, r1);
                await c.parse();
                const h = (s = r1 == null ? void 0 : r1.meta) == null ? void 0 : s.related_multi_packs;
                if (Array.isArray(h)) {
                    const p = [];
                    for (const m of h){
                        if (typeof m != "string") continue;
                        let _ = l + m;
                        (n = t.data) != null && n.ignoreMultiPack || (_ = ai(_, t.src), p.push(e.load({
                            src: _,
                            data: {
                                ignoreMultiPack: !0
                            }
                        })));
                    }
                    const f = await Promise.all(p);
                    c.linkedSheets = f, f.forEach((m)=>{
                        m.linkedSheets = [
                            c
                        ].concat(c.linkedSheets.filter((_)=>_ !== m));
                    });
                }
                return c;
            },
            async unload (r1, t, e) {
                await e.unload(r1.textureSource._sourceOrigin), r1.destroy(!1);
            }
        }
    };
    U.add(Ac);
    function lr(r1, t, e, i) {
        const { width: s, height: n } = e.orig, o = e.trim;
        if (o) {
            const a = o.width, l = o.height;
            r1.minX = o.x - t._x * s - i, r1.maxX = r1.minX + a, r1.minY = o.y - t._y * n - i, r1.maxY = r1.minY + l;
        } else r1.minX = -t._x * s - i, r1.maxX = r1.minX + s, r1.minY = -t._y * n - i, r1.maxY = r1.minY + n;
    }
    var ny = Object.defineProperty, ci = Object.getOwnPropertySymbols, Pc = Object.prototype.hasOwnProperty, Rc = Object.prototype.propertyIsEnumerable, wc = (r1, t, e)=>t in r1 ? ny(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, oy = (r1, t)=>{
        for(var e in t || (t = {}))Pc.call(t, e) && wc(r1, e, t[e]);
        if (ci) for (var e of ci(t))Rc.call(t, e) && wc(r1, e, t[e]);
        return r1;
    }, ay = (r1, t)=>{
        var e = {};
        for(var i in r1)Pc.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && ci) for (var i of ci(r1))t.indexOf(i) < 0 && Rc.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class Gt extends W {
        constructor(t = P.EMPTY){
            t instanceof P && (t = {
                texture: t
            });
            const e = t, { texture: i, anchor: s, roundPixels: n, width: o, height: a } = e, l = ay(e, [
                "texture",
                "anchor",
                "roundPixels",
                "width",
                "height"
            ]);
            super(oy({
                label: "Sprite"
            }, l)), this.renderPipeId = "sprite", this.batched = !0, this._didSpriteUpdate = !1, this._bounds = {
                minX: 0,
                maxX: 1,
                minY: 0,
                maxY: 0
            }, this._sourceBounds = {
                minX: 0,
                maxX: 1,
                minY: 0,
                maxY: 0
            }, this._boundsDirty = !0, this._sourceBoundsDirty = !0, this._roundPixels = 0, this._anchor = new it({
                _onUpdate: ()=>{
                    this.onViewUpdate();
                }
            }), s && (this.anchor = s), this.texture = i, this.allowChildren = !1, this.roundPixels = n != null ? n : !1, o && (this.width = o), a && (this.height = a);
        }
        static from(t, e = !1) {
            return t instanceof P ? new Gt(t) : new Gt(P.from(t, e));
        }
        set texture(t) {
            t || (t = P.EMPTY);
            const e = this._texture;
            e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this.onViewUpdate());
        }
        get texture() {
            return this._texture;
        }
        get bounds() {
            return this._boundsDirty && (this._updateBounds(), this._boundsDirty = !1), this._bounds;
        }
        get sourceBounds() {
            return this._sourceBoundsDirty && (this._updateSourceBounds(), this._sourceBoundsDirty = !1), this._sourceBounds;
        }
        containsPoint(t) {
            const e = this.sourceBounds;
            return t.x >= e.maxX && t.x <= e.minX && t.y >= e.maxY && t.y <= e.minY;
        }
        addBounds(t) {
            const e = this._texture.trim ? this.sourceBounds : this.bounds;
            t.addFrame(e.minX, e.minY, e.maxX, e.maxY);
        }
        onViewUpdate() {
            this._didChangeId += 4096, this._didSpriteUpdate = !0, this._sourceBoundsDirty = this._boundsDirty = !0, !this.didViewUpdate && (this.didViewUpdate = !0, this.renderGroup && this.renderGroup.onChildViewUpdate(this));
        }
        _updateBounds() {
            lr(this._bounds, this._anchor, this._texture, 0);
        }
        _updateSourceBounds() {
            const t = this._anchor, e = this._texture, i = this._sourceBounds, { width: s, height: n } = e.orig;
            i.maxX = -t._x * s, i.minX = i.maxX + s, i.maxY = -t._y * n, i.minY = i.maxY + n;
        }
        destroy(t = !1) {
            if (super.destroy(t), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
                const e = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
                this._texture.destroy(e);
            }
            this._texture = null, this._bounds = null, this._sourceBounds = null, this._anchor = null;
        }
        get anchor() {
            return this._anchor;
        }
        set anchor(t) {
            typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        get width() {
            return Math.abs(this.scale.x) * this._texture.orig.width;
        }
        set width(t) {
            this._setWidth(t, this._texture.orig.width);
        }
        get height() {
            return Math.abs(this.scale.y) * this._texture.orig.height;
        }
        set height(t) {
            this._setHeight(t, this._texture.orig.height);
        }
        getSize(t) {
            return t || (t = {}), t.width = Math.abs(this.scale.x) * this._texture.orig.width, t.height = Math.abs(this.scale.y) * this._texture.orig.height, t;
        }
        setSize(t, e) {
            var i;
            let s, n;
            typeof t != "object" ? (s = t, n = e != null ? e : t) : (s = t.width, n = (i = t.height) != null ? i : t.width), s !== void 0 && this._setWidth(s, this._texture.orig.width), n !== void 0 && this._setHeight(n, this._texture.orig.height);
        }
    }
    const ly = new ut;
    function hi(r1, t, e) {
        const i = ly;
        r1.measurable = !0, er(r1, e, i), t.addBoundsMask(i), r1.measurable = !1;
    }
    function di(r1, t, e) {
        const i = Lt.get();
        r1.measurable = !0;
        const s = kt.get().identity(), n = dn(r1, e, s);
        ri(r1, i, n), r1.measurable = !1, t.addBoundsMask(i), kt.return(s), Lt.return(i);
    }
    function dn(r1, t, e) {
        return r1 && r1 !== t && (dn(r1.parent, t, e), r1.updateLocalTransform(), e.append(r1.localTransform)), e;
    }
    class pn {
        constructor(t){
            this.priority = 0, this.pipe = "alphaMask", t != null && t.mask && this.init(t.mask);
        }
        init(t) {
            this.mask = t, this.renderMaskToTexture = !(t instanceof Gt), this.mask.renderable = this.renderMaskToTexture, this.mask.includeInBuild = !this.renderMaskToTexture, this.mask.measurable = !1;
        }
        reset() {
            this.mask.measurable = !0, this.mask = null;
        }
        addBounds(t, e) {
            hi(this.mask, t, e);
        }
        addLocalBounds(t, e) {
            di(this.mask, t, e);
        }
        containsPoint(t, e) {
            const i = this.mask;
            return e(i, t);
        }
        destroy() {
            this.reset();
        }
        static test(t) {
            return t instanceof Gt;
        }
    }
    pn.extension = x.MaskEffect;
    class fn {
        constructor(t){
            this.priority = 0, this.pipe = "colorMask", t != null && t.mask && this.init(t.mask);
        }
        init(t) {
            this.mask = t;
        }
        destroy() {}
        static test(t) {
            return typeof t == "number";
        }
    }
    fn.extension = x.MaskEffect;
    class mn {
        constructor(t){
            this.priority = 0, this.pipe = "stencilMask", t != null && t.mask && this.init(t.mask);
        }
        init(t) {
            this.mask = t, this.mask.includeInBuild = !1, this.mask.measurable = !1;
        }
        reset() {
            this.mask.measurable = !0, this.mask.includeInBuild = !0, this.mask = null;
        }
        addBounds(t, e) {
            hi(this.mask, t, e);
        }
        addLocalBounds(t, e) {
            di(this.mask, t, e);
        }
        containsPoint(t, e) {
            const i = this.mask;
            return e(i, t);
        }
        destroy() {
            this.reset();
        }
        static test(t) {
            return t instanceof W;
        }
    }
    mn.extension = x.MaskEffect;
    class Qt extends rt {
        constructor(t){
            t.resource || (t.resource = z.get().createCanvas()), t.width || (t.width = t.resource.width, t.autoDensity || (t.width /= t.resolution)), t.height || (t.height = t.resource.height, t.autoDensity || (t.height /= t.resolution)), super(t), this.uploadMethodId = "image", this.autoDensity = t.autoDensity;
            const e = t.resource;
            (this.pixelWidth !== e.width || this.pixelWidth !== e.height) && this.resizeCanvas(), this.transparent = !!t.transparent;
        }
        resizeCanvas() {
            this.autoDensity && (this.resource.style.width = `${this.width}px`, this.resource.style.height = `${this.height}px`), (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) && (this.resource.width = this.pixelWidth, this.resource.height = this.pixelHeight);
        }
        resize(t = this.width, e = this.height, i = this._resolution) {
            const s = super.resize(t, e, i);
            return s && this.resizeCanvas(), s;
        }
        static test(t) {
            return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && t instanceof OffscreenCanvas;
        }
    }
    Qt.extension = x.TextureSource;
    class pe extends rt {
        constructor(t){
            if (t.resource && globalThis.HTMLImageElement && t.resource instanceof HTMLImageElement) {
                const e = z.get().createCanvas(t.resource.width, t.resource.height);
                e.getContext("2d").drawImage(t.resource, 0, 0), t.resource = e;
            }
            super(t), this.uploadMethodId = "image", this.autoGarbageCollect = !0;
        }
        static test(t) {
            return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap != "undefined" && t instanceof ImageBitmap;
        }
    }
    pe.extension = x.TextureSource;
    let gn;
    async function _n() {
        return gn != null || (gn = (async ()=>{
            var r1;
            const t = document.createElement("canvas").getContext("webgl");
            if (!t) return "premultiply-alpha-on-upload";
            const e = await new Promise((o)=>{
                const a = document.createElement("video");
                a.onloadeddata = ()=>o(a), a.onerror = ()=>o(null), a.autoplay = !1, a.crossOrigin = "anonymous", a.preload = "auto", a.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", a.load();
            });
            if (!e) return "premultiply-alpha-on-upload";
            const i = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, i);
            const s = t.createFramebuffer();
            t.bindFramebuffer(t.FRAMEBUFFER, s), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, i, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
            const n = new Uint8Array(4);
            return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(s), t.deleteTexture(i), (r1 = t.getExtension("WEBGL_lose_context")) == null || r1.loseContext(), n[0] <= n[3] ? "premultiplied-alpha" : "premultiply-alpha-on-upload";
        })()), gn;
    }
    var uy = Object.defineProperty, cy = Object.defineProperties, hy = Object.getOwnPropertyDescriptors, Mc = Object.getOwnPropertySymbols, dy = Object.prototype.hasOwnProperty, py = Object.prototype.propertyIsEnumerable, Cc = (r1, t, e)=>t in r1 ? uy(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, bn = (r1, t)=>{
        for(var e in t || (t = {}))dy.call(t, e) && Cc(r1, e, t[e]);
        if (Mc) for (var e of Mc(t))py.call(t, e) && Cc(r1, e, t[e]);
        return r1;
    }, fy = (r1, t)=>cy(r1, hy(t));
    const pi = class Eb extends rt {
        constructor(t){
            var e;
            super(t), this.isReady = !1, this.uploadMethodId = "video", t = bn(bn({}, Eb.defaultOptions), t), this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this.alphaMode = (e = t.alphaMode) != null ? e : "premultiply-alpha-on-upload", this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== !1 && this.load();
        }
        updateFrame() {
            if (!this.destroyed) {
                if (this._updateFPS) {
                    const t = ht.shared.elapsedMS * this.resource.playbackRate;
                    this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
                }
                (!this._updateFPS || this._msToNextUpdate <= 0) && (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0), this.isValid && this.update();
            }
        }
        _videoFrameRequestCallback() {
            this.updateFrame(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);
        }
        get isValid() {
            return !!this.resource.videoWidth && !!this.resource.videoHeight;
        }
        async load() {
            if (this._load) return this._load;
            const t = this.resource, e = this.options;
            return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._mediaReady() : (e.preload || t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlayThrough), t.addEventListener("error", this._onError, !0)), this.alphaMode = await _n(), this._load = new Promise((i, s)=>{
                this.isValid ? i(this) : (this._resolve = i, this._reject = s, e.preloadTimeoutMs !== void 0 && (this._preloadTimeout = setTimeout(()=>{
                    this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`));
                })), t.load());
            }), this._load;
        }
        _onError(t) {
            this.resource.removeEventListener("error", this._onError, !0), this.emit("error", t), this._reject && (this._reject(t), this._reject = null, this._resolve = null);
        }
        _isSourcePlaying() {
            const t = this.resource;
            return !t.paused && !t.ended;
        }
        _isSourceReady() {
            return this.resource.readyState > 2;
        }
        _onPlayStart() {
            this.isValid || this._mediaReady(), this._configureAutoUpdate();
        }
        _onPlayStop() {
            this._configureAutoUpdate();
        }
        _onSeeked() {
            this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0);
        }
        _onCanPlay() {
            this.resource.removeEventListener("canplay", this._onCanPlay), this._mediaReady();
        }
        _onCanPlayThrough() {
            this.resource.removeEventListener("canplaythrough", this._onCanPlay), this._preloadTimeout && (clearTimeout(this._preloadTimeout), this._preloadTimeout = void 0), this._mediaReady();
        }
        _mediaReady() {
            const t = this.resource;
            this.isValid && (this.isReady = !0, this.resize(t.videoWidth, t.videoHeight)), this._msToNextUpdate = 0, this.updateFrame(), this._msToNextUpdate = 0, this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.resource.play();
        }
        destroy() {
            this._configureAutoUpdate();
            const t = this.resource;
            t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlayThrough), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.destroy();
        }
        get autoUpdate() {
            return this._autoUpdate;
        }
        set autoUpdate(t) {
            t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate());
        }
        get updateFPS() {
            return this._updateFPS;
        }
        set updateFPS(t) {
            t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate());
        }
        _configureAutoUpdate() {
            this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (ht.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (ht.shared.add(this.updateFrame, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (ht.shared.remove(this.updateFrame, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0));
        }
        static test(t) {
            return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || globalThis.VideoFrame && t instanceof VideoFrame;
        }
    };
    pi.extension = x.TextureSource, pi.defaultOptions = fy(bn({}, rt.defaultOptions), {
        autoLoad: !0,
        autoPlay: !0,
        updateFPS: 0,
        crossorigin: !0,
        loop: !1,
        muted: !0,
        playsinline: !0,
        preload: !1
    }), pi.MIME_TYPES = {
        ogv: "video/ogg",
        mov: "video/quicktime",
        m4v: "video/mp4"
    };
    let ur = pi, my = class {
        constructor(){
            this._parsers = [], this._cache = new Map, this._cacheMap = new Map;
        }
        reset() {
            this._cacheMap.clear(), this._cache.clear();
        }
        has(t) {
            return this._cache.has(t);
        }
        get(t) {
            return this._cache.get(t);
        }
        set(t, e) {
            const i = Rt(t);
            let s;
            for(let l = 0; l < this.parsers.length; l++){
                const u = this.parsers[l];
                if (u.test(e)) {
                    s = u.getCacheableAssets(i, e);
                    break;
                }
            }
            const n = new Map(Object.entries(s || {}));
            s || i.forEach((l)=>{
                n.set(l, e);
            });
            const o = [
                ...n.keys()
            ], a = {
                cacheKeys: o,
                keys: i
            };
            i.forEach((l)=>{
                this._cacheMap.set(l, a);
            }), o.forEach((l)=>{
                const u = s ? s[l] : e;
                this._cache.has(l) && this._cache.get(l), this._cache.set(l, n.get(l));
            });
        }
        remove(t) {
            if (!this._cacheMap.has(t)) return;
            const e = this._cacheMap.get(t);
            e.cacheKeys.forEach((i)=>{
                this._cache.delete(i);
            }), e.keys.forEach((i)=>{
                this._cacheMap.delete(i);
            });
        }
        get parsers() {
            return this._parsers;
        }
    };
    const K = new my, vn = [];
    U.handleByList(x.TextureSource, vn);
    function Oc(r1 = {}) {
        const t = r1 && r1.resource, e = t ? r1.resource : r1, i = t ? r1 : {
            resource: r1
        };
        for(let s = 0; s < vn.length; s++){
            const n = vn[s];
            if (n.test(e)) return new n(i);
        }
        throw new Error(`Could not find a source type for resource: ${i.resource}`);
    }
    function Gc(r1 = {}, t = !1) {
        const e = r1 && r1.resource, i = e ? r1.resource : r1, s = e ? r1 : {
            resource: r1
        };
        if (!t && K.has(i)) return K.get(i);
        const n = new P({
            source: Oc(s)
        });
        return n.on("destroy", ()=>{
            K.has(i) && K.remove(i);
        }), t || K.set(i, n), n;
    }
    function Bc(r1, t = !1) {
        return typeof r1 == "string" ? K.get(r1) : r1 instanceof rt ? new P({
            source: r1
        }) : Gc(r1, t);
    }
    P.from = Bc, U.add(pn, fn, mn, ur, pe, Qt, ui);
    var $ = ((r1)=>(r1[r1.MAP_READ = 1] = "MAP_READ", r1[r1.MAP_WRITE = 2] = "MAP_WRITE", r1[r1.COPY_SRC = 4] = "COPY_SRC", r1[r1.COPY_DST = 8] = "COPY_DST", r1[r1.INDEX = 16] = "INDEX", r1[r1.VERTEX = 32] = "VERTEX", r1[r1.UNIFORM = 64] = "UNIFORM", r1[r1.STORAGE = 128] = "STORAGE", r1[r1.INDIRECT = 256] = "INDIRECT", r1[r1.QUERY_RESOLVE = 512] = "QUERY_RESOLVE", r1[r1.STATIC = 1024] = "STATIC", r1))($ || {});
    class _t extends dt {
        constructor(t){
            let { data: e, size: i } = t;
            const { usage: s, label: n, shrinkToFit: o } = t;
            super(), this.uid = Q("buffer"), this._resourceType = "buffer", this._resourceId = Q("resource"), this._touched = 0, this._updateID = 1, this.shrinkToFit = !0, e instanceof Array && (e = new Float32Array(e)), this._data = e, i = i != null ? i : e == null ? void 0 : e.byteLength;
            const a = !!e;
            this.descriptor = {
                size: i,
                usage: s,
                mappedAtCreation: a,
                label: n
            }, this.shrinkToFit = o != null ? o : !0;
        }
        get data() {
            return this._data;
        }
        set data(t) {
            this.setDataWithSize(t, t.length, !0);
        }
        get static() {
            return !!(this.descriptor.usage & $.STATIC);
        }
        set static(t) {
            t ? this.descriptor.usage |= $.STATIC : this.descriptor.usage &= ~$.STATIC;
        }
        setDataWithSize(t, e, i) {
            if (this._updateID++, this._updateSize = e * t.BYTES_PER_ELEMENT, this._data === t) {
                i && this.emit("update", this);
                return;
            }
            const s = this._data;
            if (this._data = t, s.length !== t.length) {
                !this.shrinkToFit && t.byteLength < s.byteLength ? i && this.emit("update", this) : (this.descriptor.size = t.byteLength, this._resourceId = Q("resource"), this.emit("change", this));
                return;
            }
            i && this.emit("update", this);
        }
        update(t) {
            this._updateSize = t != null ? t : this._updateSize, this._updateID++, this.emit("update", this);
        }
        destroy() {
            this.emit("destroy", this), this._data = null, this.descriptor = null, this.removeAllListeners();
        }
    }
    function yn(r1, t) {
        if (!(r1 instanceof _t)) {
            let e = t ? $.INDEX : $.VERTEX;
            r1 instanceof Array && (t ? (r1 = new Uint32Array(r1), e = $.INDEX | $.COPY_DST) : (r1 = new Float32Array(r1), e = $.VERTEX | $.COPY_DST)), r1 = new _t({
                data: r1,
                label: t ? "index-mesh-buffer" : "vertex-mesh-buffer",
                usage: e
            });
        }
        return r1;
    }
    function Ic(r1, t, e) {
        const i = r1.getAttribute(t);
        if (!i) return e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0, e;
        const s = i.buffer.data;
        let n = 1 / 0, o = 1 / 0, a = -1 / 0, l = -1 / 0;
        const u = s.BYTES_PER_ELEMENT, c = (i.offset || 0) / u, h = (i.stride || 8) / u;
        for(let p = c; p < s.length; p += h){
            const f = s[p], m = s[p + 1];
            f > a && (a = f), m > l && (l = m), f < n && (n = f), m < o && (o = m);
        }
        return e.minX = n, e.minY = o, e.maxX = a, e.maxY = l, e;
    }
    function gy(r1) {
        return (r1 instanceof _t || Array.isArray(r1) || r1.BYTES_PER_ELEMENT) && (r1 = {
            buffer: r1
        }), r1.buffer = yn(r1.buffer, !1), r1;
    }
    class Ge extends dt {
        constructor(t){
            const { attributes: e, indexBuffer: i, topology: s } = t;
            super(), this.uid = Q("geometry"), this._layoutKey = 0, this.instanceCount = 1, this._bounds = new ut, this._boundsDirty = !0, this.attributes = e, this.buffers = [], this.instanceCount = t.instanceCount || 1;
            for(const n in e){
                const o = e[n] = gy(e[n]);
                this.buffers.indexOf(o.buffer) === -1 && (this.buffers.push(o.buffer), o.buffer.on("update", this.onBufferUpdate, this), o.buffer.on("change", this.onBufferUpdate, this));
            }
            i && (this.indexBuffer = yn(i, !0), this.buffers.push(this.indexBuffer)), this.topology = s || "triangle-list";
        }
        onBufferUpdate() {
            this._boundsDirty = !0, this.emit("update", this);
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        getIndex() {
            return this.indexBuffer;
        }
        getBuffer(t) {
            return this.getAttribute(t).buffer;
        }
        getSize() {
            for(const t in this.attributes){
                const e = this.attributes[t];
                return e.buffer.data.length / (e.stride / 4 || e.size);
            }
            return 0;
        }
        get bounds() {
            return this._boundsDirty ? (this._boundsDirty = !1, Ic(this, "aPosition", this._bounds)) : this._bounds;
        }
        destroy(t = !1) {
            this.emit("destroy", this), this.removeAllListeners(), t && this.buffers.forEach((e)=>e.destroy()), this.attributes = null, this.buffers = null, this.indexBuffer = null, this._bounds = null;
        }
    }
    const _y = new Float32Array(1), by = new Uint32Array(1);
    class xn extends Ge {
        constructor(){
            const t = new _t({
                data: _y,
                label: "attribute-batch-buffer",
                usage: $.VERTEX | $.COPY_DST,
                shrinkToFit: !1
            }), e = new _t({
                data: by,
                label: "index-batch-buffer",
                usage: $.INDEX | $.COPY_DST,
                shrinkToFit: !1
            }), i = 24;
            super({
                attributes: {
                    aPosition: {
                        buffer: t,
                        format: "float32x2",
                        stride: i,
                        offset: 0,
                        location: 1
                    },
                    aUV: {
                        buffer: t,
                        format: "float32x2",
                        stride: i,
                        offset: 8,
                        location: 3
                    },
                    aColor: {
                        buffer: t,
                        format: "unorm8x4",
                        stride: i,
                        offset: 16,
                        location: 0
                    },
                    aTextureIdAndRound: {
                        buffer: t,
                        format: "uint16x2",
                        stride: i,
                        offset: 20,
                        location: 2
                    }
                },
                indexBuffer: e
            });
        }
    }
    class $t {
        constructor(t){
            this.resources = Object.create(null), this._dirty = !0;
            let e = 0;
            for(const i in t){
                const s = t[i];
                this.setResource(s, e++);
            }
            this._updateKey();
        }
        _updateKey() {
            if (!this._dirty) return;
            this._dirty = !1;
            const t = [];
            let e = 0;
            for(const i in this.resources)t[e++] = this.resources[i]._resourceId;
            this._key = t.join("|");
        }
        setResource(t, e) {
            var i, s;
            const n = this.resources[e];
            t !== n && (n && ((i = t.off) == null || i.call(t, "change", this.onResourceChange, this)), (s = t.on) == null || s.call(t, "change", this.onResourceChange, this), this.resources[e] = t, this._dirty = !0);
        }
        getResource(t) {
            return this.resources[t];
        }
        _touch(t) {
            const e = this.resources;
            for(const i in e)e[i]._touched = t;
        }
        destroy() {
            var t;
            const e = this.resources;
            for(const i in e){
                const s = e[i];
                (t = s.off) == null || t.call(s, "change", this.onResourceChange, this);
            }
            this.resources = null;
        }
        onResourceChange() {
            this._dirty = !0, this._updateKey();
        }
    }
    const wt = 16, Fc = {};
    function fi(r1, t) {
        let e = 0;
        for(let i = 0; i < t; i++)e = e * 31 + r1[i].uid >>> 0;
        return Fc[e] || vy(r1, e);
    }
    function vy(r1, t) {
        const e = {};
        let i = 0;
        for(let n = 0; n < wt; n++){
            const o = n < r1.length ? r1[n] : P.EMPTY.source;
            e[i++] = o.source, e[i++] = o.style;
        }
        const s = new $t(e);
        return Fc[t] = s, s;
    }
    class Tn {
        constructor(t){
            typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData), this.size = this.rawBinaryData.byteLength;
        }
        get int8View() {
            return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
        }
        get uint8View() {
            return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
        }
        get int16View() {
            return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
        }
        get int32View() {
            return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
        }
        get float64View() {
            return this._float64Array || (this._float64Array = new Float64Array(this.rawBinaryData)), this._float64Array;
        }
        get bigUint64View() {
            return this._bigUint64Array || (this._bigUint64Array = new BigUint64Array(this.rawBinaryData)), this._bigUint64Array;
        }
        view(t) {
            return this[`${t}View`];
        }
        destroy() {
            this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this.uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
        }
        static sizeOf(t) {
            switch(t){
                case "int8":
                case "uint8":
                    return 1;
                case "int16":
                case "uint16":
                    return 2;
                case "int32":
                case "uint32":
                case "float32":
                    return 4;
                default:
                    throw new Error(`${t} isn't a valid view type`);
            }
        }
    }
    function mi(r1, t) {
        const e = r1.byteLength / 8 | 0, i = new Float64Array(r1, 0, e);
        new Float64Array(t, 0, e).set(i);
        const s = r1.byteLength - e * 8;
        if (s > 0) {
            const n = new Uint8Array(r1, e * 8, s);
            new Uint8Array(t, e * 8, s).set(n);
        }
    }
    const Dc = {
        normal: "normal-npm",
        add: "add-npm",
        screen: "screen-npm"
    };
    var st = ((r1)=>(r1[r1.DISABLED = 0] = "DISABLED", r1[r1.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD", r1[r1.MASK_ACTIVE = 2] = "MASK_ACTIVE", r1[r1.RENDERING_MASK_REMOVE = 3] = "RENDERING_MASK_REMOVE", r1[r1.NONE = 4] = "NONE", r1))(st || {});
    function Sn(r1, t) {
        return t.alphaMode === "no-premultiply-alpha" && Dc[r1] || r1;
    }
    class En {
        constructor(){
            this.ids = Object.create(null), this.textures = [], this.count = 0;
        }
        clear() {
            for(let t = 0; t < this.count; t++){
                const e = this.textures[t];
                this.textures[t] = null, this.ids[e.uid] = null;
            }
            this.count = 0;
        }
    }
    var yy = Object.defineProperty, Uc = Object.getOwnPropertySymbols, xy = Object.prototype.hasOwnProperty, Ty = Object.prototype.propertyIsEnumerable, kc = (r1, t, e)=>t in r1 ? yy(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Lc = (r1, t)=>{
        for(var e in t || (t = {}))xy.call(t, e) && kc(r1, e, t[e]);
        if (Uc) for (var e of Uc(t))Ty.call(t, e) && kc(r1, e, t[e]);
        return r1;
    };
    class An {
        constructor(){
            this.renderPipeId = "batch", this.action = "startBatch", this.start = 0, this.size = 0, this.blendMode = "normal", this.canBundle = !0;
        }
        destroy() {
            this.textures = null, this.gpuBindGroup = null, this.bindGroup = null, this.batcher = null;
        }
    }
    let cr = 0;
    const $c = class Ab {
        constructor(t = {}){
            this.uid = Q("batcher"), this.dirty = !0, this.batchIndex = 0, this.batches = [], this._vertexSize = 6, this._elements = [], this._batchPool = [], this._batchPoolIndex = 0, this._textureBatchPool = [], this._textureBatchPoolIndex = 0, t = Lc(Lc({}, Ab.defaultOptions), t);
            const { vertexSize: e, indexSize: i } = t;
            this.attributeBuffer = new Tn(e * this._vertexSize * 4), this.indexBuffer = new Uint16Array(i);
        }
        begin() {
            this.batchIndex = 0, this.elementSize = 0, this.elementStart = 0, this.indexSize = 0, this.attributeSize = 0, this._batchPoolIndex = 0, this._textureBatchPoolIndex = 0, this._batchIndexStart = 0, this._batchIndexSize = 0, this.dirty = !0;
        }
        add(t) {
            this._elements[this.elementSize++] = t, t.indexStart = this.indexSize, t.location = this.attributeSize, t.batcher = this, this.indexSize += t.indexSize, this.attributeSize += t.vertexSize * this._vertexSize;
        }
        checkAndUpdateTexture(t, e) {
            const i = t.batch.textures.ids[e._source.uid];
            return !i && i !== 0 ? !1 : (t.textureId = i, t.texture = e, !0);
        }
        updateElement(t) {
            this.dirty = !0, t.packAttributes(this.attributeBuffer.float32View, this.attributeBuffer.uint32View, t.location, t.textureId);
        }
        break(t) {
            const e = this._elements;
            let i = this._textureBatchPool[this._textureBatchPoolIndex++] || new En;
            if (i.clear(), !e[this.elementStart]) return;
            const s = e[this.elementStart];
            let n = Sn(s.blendMode, s.texture._source);
            this.attributeSize * 4 > this.attributeBuffer.size && this._resizeAttributeBuffer(this.attributeSize * 4), this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize);
            const o = this.attributeBuffer.float32View, a = this.attributeBuffer.uint32View, l = this.indexBuffer;
            let u = this._batchIndexSize, c = this._batchIndexStart, h = "startBatch", p = this._batchPool[this._batchPoolIndex++] || new An;
            for(let f = this.elementStart; f < this.elementSize; ++f){
                const m = e[f];
                e[f] = null;
                const _ = m.texture._source, g = Sn(m.blendMode, _), b = n !== g;
                if (_._batchTick === cr && !b) {
                    m.textureId = _._textureBindLocation, u += m.indexSize, m.packAttributes(o, a, m.location, m.textureId), m.packIndex(l, m.indexStart, m.location / this._vertexSize), m.batch = p;
                    continue;
                }
                _._batchTick = cr, (i.count >= wt || b) && (this._finishBatch(p, c, u - c, i, n, t, h), h = "renderBatch", c = u, n = g, i = this._textureBatchPool[this._textureBatchPoolIndex++] || new En, i.clear(), p = this._batchPool[this._batchPoolIndex++] || new An, ++cr), m.textureId = _._textureBindLocation = i.count, i.ids[_.uid] = i.count, i.textures[i.count++] = _, m.batch = p, u += m.indexSize, m.packAttributes(o, a, m.location, m.textureId), m.packIndex(l, m.indexStart, m.location / this._vertexSize);
            }
            i.count > 0 && (this._finishBatch(p, c, u - c, i, n, t, h), c = u, ++cr), this.elementStart = this.elementSize, this._batchIndexStart = c, this._batchIndexSize = u;
        }
        _finishBatch(t, e, i, s, n, o, a) {
            t.gpuBindGroup = null, t.action = a, t.batcher = this, t.textures = s, t.blendMode = n, t.start = e, t.size = i, ++cr, o.add(t);
        }
        finish(t) {
            this.break(t);
        }
        ensureAttributeBuffer(t) {
            t * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(t * 4);
        }
        ensureIndexBuffer(t) {
            t <= this.indexBuffer.length || this._resizeIndexBuffer(t);
        }
        _resizeAttributeBuffer(t) {
            const e = Math.max(t, this.attributeBuffer.size * 2), i = new Tn(e);
            mi(this.attributeBuffer.rawBinaryData, i.rawBinaryData), this.attributeBuffer = i;
        }
        _resizeIndexBuffer(t) {
            const e = this.indexBuffer;
            let i = Math.max(t, e.length * 1.5);
            i += i % 2;
            const s = i > 65535 ? new Uint32Array(i) : new Uint16Array(i);
            if (s.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT) for(let n = 0; n < e.length; n++)s[n] = e[n];
            else mi(e.buffer, s.buffer);
            this.indexBuffer = s;
        }
        destroy() {
            for(let t = 0; t < this.batches.length; t++)this.batches[t].destroy();
            this.batches = null;
            for(let t = 0; t < this._elements.length; t++)this._elements[t].batch = null;
            this._elements = null, this.indexBuffer = null, this.attributeBuffer.destroy(), this.attributeBuffer = null;
        }
    };
    $c.defaultOptions = {
        vertexSize: 4,
        indexSize: 6
    };
    let Pn = $c;
    function Rn(r1, t, e, i, s, n, o, a = null) {
        let l = 0;
        e *= t, s *= n;
        const u = a.a, c = a.b, h = a.c, p = a.d, f = a.tx, m = a.ty;
        for(; l < o;){
            const _ = r1[e], g = r1[e + 1];
            i[s] = u * _ + h * g + f, i[s + 1] = c * _ + p * g + m, s += n, e += t, l++;
        }
    }
    function wn(r1, t, e, i) {
        let s = 0;
        for(t *= e; s < i;)r1[t] = 0, r1[t + 1] = 0, t += e, s++;
    }
    function gi(r1, t, e, i, s) {
        const n = t.a, o = t.b, a = t.c, l = t.d, u = t.tx, c = t.ty;
        e = e || 0, i = i || 2, s = s || r1.length / i - e;
        let h = e * i;
        for(let p = 0; p < s; p++){
            const f = r1[h], m = r1[h + 1];
            r1[h] = n * f + a * m + u, r1[h + 1] = o * f + l * m + c, h += i;
        }
    }
    function Mn(r1, t, e) {
        const i = r1 >> 16 & 255, s = r1 >> 8 & 255, n = r1 & 255, o = t >> 16 & 255, a = t >> 8 & 255, l = t & 255, u = i + (o - i) * e, c = s + (a - s) * e, h = n + (l - n) * e;
        return (u << 16) + (c << 8) + h;
    }
    const Be = 16777215;
    function _i(r1, t) {
        return r1 === Be || t === Be ? r1 + t - Be : Mn(r1, t, .5);
    }
    function Sy(r1, t, e) {
        const i = (e >> 24 & 255) / 255, s = t * i * 255, n = ((r1 & 255) << 16) + (r1 & 65280) + (r1 >> 16 & 255), o = e & 16777215;
        let a;
        return n === Be || o === Be ? a = n + o - Be : a = Mn(n, o, .5), a + (s << 24);
    }
    class bi {
        constructor(){
            this.batcher = null, this.batch = null, this.applyTransform = !0, this.roundPixels = 0;
        }
        get blendMode() {
            return this.applyTransform ? this.renderable.groupBlendMode : "normal";
        }
        packIndex(t, e, i) {
            const s = this.geometryData.indices;
            for(let n = 0; n < this.indexSize; n++)t[e++] = s[n + this.indexOffset] + i - this.vertexOffset;
        }
        packAttributes(t, e, i, s) {
            const n = this.geometryData, o = this.renderable, a = n.vertices, l = n.uvs, u = this.vertexOffset * 2, c = (this.vertexOffset + this.vertexSize) * 2, h = this.color, p = h >> 16 | h & 65280 | (h & 255) << 16;
            if (this.applyTransform) {
                const f = _i(p, o.groupColor) + (this.alpha * o.groupAlpha * 255 << 24), m = o.groupTransform, _ = s << 16 | this.roundPixels & 65535, g = m.a, b = m.b, v = m.c, y = m.d, T = m.tx, E = m.ty;
                for(let R = u; R < c; R += 2){
                    const M = a[R], w = a[R + 1];
                    t[i] = g * M + v * w + T, t[i + 1] = b * M + y * w + E, t[i + 2] = l[R], t[i + 3] = l[R + 1], e[i + 4] = f, e[i + 5] = _, i += 6;
                }
            } else {
                const f = p + (this.alpha * 255 << 24);
                for(let m = u; m < c; m += 2)t[i] = a[m], t[i + 1] = a[m + 1], t[i + 2] = l[m], t[i + 3] = l[m + 1], e[i + 4] = f, e[i + 5] = s << 16, i += 6;
            }
        }
        get vertSize() {
            return this.vertexSize;
        }
        copyTo(t) {
            t.indexOffset = this.indexOffset, t.indexSize = this.indexSize, t.vertexOffset = this.vertexOffset, t.vertexSize = this.vertexSize, t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.geometryData = this.geometryData;
        }
        reset() {
            this.applyTransform = !0;
        }
    }
    const fe = {
        build (r1, t) {
            let e, i, s, n, o, a;
            if (r1.type === "circle") {
                const T = r1;
                e = T.x, i = T.y, o = a = T.radius, s = n = 0;
            } else if (r1.type === "ellipse") {
                const T = r1;
                e = T.x, i = T.y, o = T.halfWidth, a = T.halfHeight, s = n = 0;
            } else {
                const T = r1, E = T.width / 2, R = T.height / 2;
                e = T.x + E, i = T.y + R, o = a = Math.max(0, Math.min(T.radius, Math.min(E, R))), s = E - o, n = R - a;
            }
            if (!(o >= 0 && a >= 0 && s >= 0 && n >= 0)) return t;
            const l = Math.ceil(2.3 * Math.sqrt(o + a)), u = l * 8 + (s ? 4 : 0) + (n ? 4 : 0);
            if (u === 0) return t;
            if (l === 0) return t[0] = t[6] = e + s, t[1] = t[3] = i + n, t[2] = t[4] = e - s, t[5] = t[7] = i - n, t;
            let c = 0, h = l * 4 + (s ? 2 : 0) + 2, p = h, f = u, m = s + o, _ = n, g = e + m, b = e - m, v = i + _;
            if (t[c++] = g, t[c++] = v, t[--h] = v, t[--h] = b, n) {
                const T = i - _;
                t[p++] = b, t[p++] = T, t[--f] = T, t[--f] = g;
            }
            for(let T = 1; T < l; T++){
                const E = Math.PI / 2 * (T / l), R = s + Math.cos(E) * o, M = n + Math.sin(E) * a, w = e + R, S = e - R, A = i + M, H = i - M;
                t[c++] = w, t[c++] = A, t[--h] = A, t[--h] = S, t[p++] = S, t[p++] = H, t[--f] = H, t[--f] = w;
            }
            m = s, _ = n + a, g = e + m, b = e - m, v = i + _;
            const y = i - _;
            return t[c++] = g, t[c++] = v, t[--f] = y, t[--f] = g, s && (t[c++] = b, t[c++] = v, t[--f] = y, t[--f] = b), t;
        },
        triangulate (r1, t, e, i, s, n) {
            if (r1.length === 0) return;
            let o = 0, a = 0;
            for(let c = 0; c < r1.length; c += 2)o += r1[c], a += r1[c + 1];
            o /= r1.length / 2, a /= r1.length / 2;
            let l = i;
            t[l * e] = o, t[l * e + 1] = a;
            const u = l++;
            for(let c = 0; c < r1.length; c += 2)t[l * e] = r1[c], t[l * e + 1] = r1[c + 1], c > 0 && (s[n++] = l, s[n++] = u, s[n++] = l - 1), l++;
            s[n++] = u + 1, s[n++] = u, s[n++] = l - 1;
        }
    }, Nc = 1e-4, Cn = 1e-4;
    function Hc(r1) {
        const t = r1.length;
        if (t < 6) return 1;
        let e = 0;
        for(let i = 0, s = r1[t - 2], n = r1[t - 1]; i < t; i += 2){
            const o = r1[i], a = r1[i + 1];
            e += (o - s) * (a + n), s = o, n = a;
        }
        return e < 0 ? -1 : 1;
    }
    function Xc(r1, t, e, i, s, n, o, a) {
        const l = r1 - e * s, u = t - i * s, c = r1 + e * n, h = t + i * n;
        let p, f;
        o ? (p = i, f = -e) : (p = -i, f = e);
        const m = l + p, _ = u + f, g = c + p, b = h + f;
        return a.push(m, _), a.push(g, b), 2;
    }
    function me(r1, t, e, i, s, n, o, a) {
        const l = e - r1, u = i - t;
        let c = Math.atan2(l, u), h = Math.atan2(s - r1, n - t);
        a && c < h ? c += Math.PI * 2 : !a && c > h && (h += Math.PI * 2);
        let p = c;
        const f = h - c, m = Math.abs(f), _ = Math.sqrt(l * l + u * u), g = (15 * m * Math.sqrt(_) / Math.PI >> 0) + 1, b = f / g;
        if (p += b, a) {
            o.push(r1, t), o.push(e, i);
            for(let v = 1, y = p; v < g; v++, y += b)o.push(r1, t), o.push(r1 + Math.sin(y) * _, t + Math.cos(y) * _);
            o.push(r1, t), o.push(s, n);
        } else {
            o.push(e, i), o.push(r1, t);
            for(let v = 1, y = p; v < g; v++, y += b)o.push(r1 + Math.sin(y) * _, t + Math.cos(y) * _), o.push(r1, t);
            o.push(s, n), o.push(r1, t);
        }
        return g * 2;
    }
    function zc(r1, t, e, i, s, n, o, a, l) {
        const u = Nc;
        if (r1.length === 0) return;
        const c = t;
        let h = c.alignment;
        if (t.alignment !== .5) {
            let q = Hc(r1);
            e && (q *= -1), h = (h - .5) * q + .5;
        }
        const p = new V(r1[0], r1[1]), f = new V(r1[r1.length - 2], r1[r1.length - 1]), m = i, _ = Math.abs(p.x - f.x) < u && Math.abs(p.y - f.y) < u;
        if (m) {
            r1 = r1.slice(), _ && (r1.pop(), r1.pop(), f.set(r1[r1.length - 2], r1[r1.length - 1]));
            const q = (p.x + f.x) * .5, oe = (f.y + p.y) * .5;
            r1.unshift(q, oe), r1.push(q, oe);
        }
        const g = s, b = r1.length / 2;
        let v = r1.length;
        const y = g.length / 2, T = c.width / 2, E = T * T, R = c.miterLimit * c.miterLimit;
        let M = r1[0], w = r1[1], S = r1[2], A = r1[3], H = 0, L = 0, G = -(w - A), C = M - S, Z = 0, et = 0, St = Math.sqrt(G * G + C * C);
        G /= St, C /= St, G *= T, C *= T;
        const Xr = h, F = (1 - Xr) * 2, D = Xr * 2;
        m || (c.cap === "round" ? v += me(M - G * (F - D) * .5, w - C * (F - D) * .5, M - G * F, w - C * F, M + G * D, w + C * D, g, !0) + 2 : c.cap === "square" && (v += Xc(M, w, G, C, F, D, !0, g))), g.push(M - G * F, w - C * F), g.push(M + G * D, w + C * D);
        for(let q = 1; q < b - 1; ++q){
            M = r1[(q - 1) * 2], w = r1[(q - 1) * 2 + 1], S = r1[q * 2], A = r1[q * 2 + 1], H = r1[(q + 1) * 2], L = r1[(q + 1) * 2 + 1], G = -(w - A), C = M - S, St = Math.sqrt(G * G + C * C), G /= St, C /= St, G *= T, C *= T, Z = -(A - L), et = S - H, St = Math.sqrt(Z * Z + et * et), Z /= St, et /= St, Z *= T, et *= T;
            const oe = S - M, zr = w - A, jr = S - H, Vr = L - A, bb = oe * jr + zr * Vr, Bs = zr * jr - Vr * oe, Wr = Bs < 0;
            if (Math.abs(Bs) < .001 * Math.abs(bb)) {
                g.push(S - G * F, A - C * F), g.push(S + G * D, A + C * D), bb >= 0 && (c.join === "round" ? v += me(S, A, S - G * F, A - C * F, S - Z * F, A - et * F, g, !1) + 4 : v += 2, g.push(S - Z * D, A - et * D), g.push(S + Z * F, A + et * F));
                continue;
            }
            const vb = (-G + M) * (-C + A) - (-G + S) * (-C + w), yb = (-Z + H) * (-et + A) - (-Z + S) * (-et + L), Is = (oe * yb - jr * vb) / Bs, Fs = (Vr * vb - zr * yb) / Bs, Vl = (Is - S) * (Is - S) + (Fs - A) * (Fs - A), Ee = S + (Is - S) * F, Ae = A + (Fs - A) * F, Pe = S - (Is - S) * D, Re = A - (Fs - A) * D, CA = Math.min(oe * oe + zr * zr, jr * jr + Vr * Vr), xb = Wr ? F : D, OA = CA + xb * xb * E;
            Vl <= OA ? c.join === "bevel" || Vl / E > R ? (Wr ? (g.push(Ee, Ae), g.push(S + G * D, A + C * D), g.push(Ee, Ae), g.push(S + Z * D, A + et * D)) : (g.push(S - G * F, A - C * F), g.push(Pe, Re), g.push(S - Z * F, A - et * F), g.push(Pe, Re)), v += 2) : c.join === "round" ? Wr ? (g.push(Ee, Ae), g.push(S + G * D, A + C * D), v += me(S, A, S + G * D, A + C * D, S + Z * D, A + et * D, g, !0) + 4, g.push(Ee, Ae), g.push(S + Z * D, A + et * D)) : (g.push(S - G * F, A - C * F), g.push(Pe, Re), v += me(S, A, S - G * F, A - C * F, S - Z * F, A - et * F, g, !1) + 4, g.push(S - Z * F, A - et * F), g.push(Pe, Re)) : (g.push(Ee, Ae), g.push(Pe, Re)) : (g.push(S - G * F, A - C * F), g.push(S + G * D, A + C * D), c.join === "round" ? Wr ? v += me(S, A, S + G * D, A + C * D, S + Z * D, A + et * D, g, !0) + 2 : v += me(S, A, S - G * F, A - C * F, S - Z * F, A - et * F, g, !1) + 2 : c.join === "miter" && Vl / E <= R && (Wr ? (g.push(Pe, Re), g.push(Pe, Re)) : (g.push(Ee, Ae), g.push(Ee, Ae)), v += 2), g.push(S - Z * F, A - et * F), g.push(S + Z * D, A + et * D), v += 2);
        }
        M = r1[(b - 2) * 2], w = r1[(b - 2) * 2 + 1], S = r1[(b - 1) * 2], A = r1[(b - 1) * 2 + 1], G = -(w - A), C = M - S, St = Math.sqrt(G * G + C * C), G /= St, C /= St, G *= T, C *= T, g.push(S - G * F, A - C * F), g.push(S + G * D, A + C * D), m || (c.cap === "round" ? v += me(S - G * (F - D) * .5, A - C * (F - D) * .5, S - G * F, A - C * F, S + G * D, A + C * D, g, !1) + 2 : c.cap === "square" && (v += Xc(S, A, G, C, F, D, !1, g)));
        const MA = Cn * Cn;
        for(let q = y; q < v + y - 2; ++q)M = g[q * 2], w = g[q * 2 + 1], S = g[(q + 1) * 2], A = g[(q + 1) * 2 + 1], H = g[(q + 2) * 2], L = g[(q + 2) * 2 + 1], !(Math.abs(M * (A - L) + S * (L - w) + H * (w - A)) < MA) && a.push(q, q + 1, q + 2);
    }
    var vi = {
        exports: {}
    }, $A = vi.exports;
    vi.exports = yi;
    var NA = vi.exports.default = yi;
    function yi(r1, t, e) {
        e = e || 2;
        var i = t && t.length, s = i ? t[0] * e : r1.length, n = jc(r1, 0, s, e, !0), o = [];
        if (!n || n.next === n.prev) return o;
        var a, l, u, c, h, p, f;
        if (i && (n = wy(r1, t, n, e)), r1.length > 80 * e) {
            a = u = r1[0], l = c = r1[1];
            for(var m = e; m < s; m += e)h = r1[m], p = r1[m + 1], h < a && (a = h), p < l && (l = p), h > u && (u = h), p > c && (c = p);
            f = Math.max(u - a, c - l), f = f !== 0 ? 32767 / f : 0;
        }
        return hr(n, o, e, a, l, f, 0), o;
    }
    function jc(r1, t, e, i, s) {
        var n, o;
        if (s === Bn(r1, t, e, i) > 0) for(n = t; n < e; n += i)o = Yc(n, r1[n], r1[n + 1], o);
        else for(n = e - i; n >= t; n -= i)o = Yc(n, r1[n], r1[n + 1], o);
        return o && xi(o, o.next) && (pr(o), o = o.next), o;
    }
    function ge(r1, t) {
        if (!r1) return r1;
        t || (t = r1);
        var e = r1, i;
        do if (i = !1, !e.steiner && (xi(e, e.next) || J(e.prev, e, e.next) === 0)) {
            if (pr(e), e = t = e.prev, e === e.next) break;
            i = !0;
        } else e = e.next;
        while (i || e !== t);
        return t;
    }
    function hr(r1, t, e, i, s, n, o) {
        if (r1) {
            !o && n && By(r1, i, s, n);
            for(var a = r1, l, u; r1.prev !== r1.next;){
                if (l = r1.prev, u = r1.next, n ? Ay(r1, i, s, n) : Ey(r1)) {
                    t.push(l.i / e | 0), t.push(r1.i / e | 0), t.push(u.i / e | 0), pr(r1), r1 = u.next, a = u.next;
                    continue;
                }
                if (r1 = u, r1 === a) {
                    o ? o === 1 ? (r1 = Py(ge(r1), t, e), hr(r1, t, e, i, s, n, 2)) : o === 2 && Ry(r1, t, e, i, s, n) : hr(ge(r1), t, e, i, s, n, 1);
                    break;
                }
            }
        }
    }
    function Ey(r1) {
        var t = r1.prev, e = r1, i = r1.next;
        if (J(t, e, i) >= 0) return !1;
        for(var s = t.x, n = e.x, o = i.x, a = t.y, l = e.y, u = i.y, c = s < n ? s < o ? s : o : n < o ? n : o, h = a < l ? a < u ? a : u : l < u ? l : u, p = s > n ? s > o ? s : o : n > o ? n : o, f = a > l ? a > u ? a : u : l > u ? l : u, m = i.next; m !== t;){
            if (m.x >= c && m.x <= p && m.y >= h && m.y <= f && Ie(s, a, n, l, o, u, m.x, m.y) && J(m.prev, m, m.next) >= 0) return !1;
            m = m.next;
        }
        return !0;
    }
    function Ay(r1, t, e, i) {
        var s = r1.prev, n = r1, o = r1.next;
        if (J(s, n, o) >= 0) return !1;
        for(var a = s.x, l = n.x, u = o.x, c = s.y, h = n.y, p = o.y, f = a < l ? a < u ? a : u : l < u ? l : u, m = c < h ? c < p ? c : p : h < p ? h : p, _ = a > l ? a > u ? a : u : l > u ? l : u, g = c > h ? c > p ? c : p : h > p ? h : p, b = On(f, m, t, e, i), v = On(_, g, t, e, i), y = r1.prevZ, T = r1.nextZ; y && y.z >= b && T && T.z <= v;){
            if (y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== s && y !== o && Ie(a, c, l, h, u, p, y.x, y.y) && J(y.prev, y, y.next) >= 0 || (y = y.prevZ, T.x >= f && T.x <= _ && T.y >= m && T.y <= g && T !== s && T !== o && Ie(a, c, l, h, u, p, T.x, T.y) && J(T.prev, T, T.next) >= 0)) return !1;
            T = T.nextZ;
        }
        for(; y && y.z >= b;){
            if (y.x >= f && y.x <= _ && y.y >= m && y.y <= g && y !== s && y !== o && Ie(a, c, l, h, u, p, y.x, y.y) && J(y.prev, y, y.next) >= 0) return !1;
            y = y.prevZ;
        }
        for(; T && T.z <= v;){
            if (T.x >= f && T.x <= _ && T.y >= m && T.y <= g && T !== s && T !== o && Ie(a, c, l, h, u, p, T.x, T.y) && J(T.prev, T, T.next) >= 0) return !1;
            T = T.nextZ;
        }
        return !0;
    }
    function Py(r1, t, e) {
        var i = r1;
        do {
            var s = i.prev, n = i.next.next;
            !xi(s, n) && Vc(s, i, i.next, n) && dr(s, n) && dr(n, s) && (t.push(s.i / e | 0), t.push(i.i / e | 0), t.push(n.i / e | 0), pr(i), pr(i.next), i = r1 = n), i = i.next;
        }while (i !== r1);
        return ge(i);
    }
    function Ry(r1, t, e, i, s, n) {
        var o = r1;
        do {
            for(var a = o.next.next; a !== o.prev;){
                if (o.i !== a.i && Dy(o, a)) {
                    var l = Wc(o, a);
                    o = ge(o, o.next), l = ge(l, l.next), hr(o, t, e, i, s, n, 0), hr(l, t, e, i, s, n, 0);
                    return;
                }
                a = a.next;
            }
            o = o.next;
        }while (o !== r1);
    }
    function wy(r1, t, e, i) {
        var s = [], n, o, a, l, u;
        for(n = 0, o = t.length; n < o; n++)a = t[n] * i, l = n < o - 1 ? t[n + 1] * i : r1.length, u = jc(r1, a, l, i, !1), u === u.next && (u.steiner = !0), s.push(Fy(u));
        for(s.sort(My), n = 0; n < s.length; n++)e = Cy(s[n], e);
        return e;
    }
    function My(r1, t) {
        return r1.x - t.x;
    }
    function Cy(r1, t) {
        var e = Oy(r1, t);
        if (!e) return t;
        var i = Wc(e, r1);
        return ge(i, i.next), ge(e, e.next);
    }
    function Oy(r1, t) {
        var e = t, i = r1.x, s = r1.y, n = -1 / 0, o;
        do {
            if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
                var a = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
                if (a <= i && a > n && (n = a, o = e.x < e.next.x ? e : e.next, a === i)) return o;
            }
            e = e.next;
        }while (e !== t);
        if (!o) return null;
        var l = o, u = o.x, c = o.y, h = 1 / 0, p;
        e = o;
        do i >= e.x && e.x >= u && i !== e.x && Ie(s < c ? i : n, s, u, c, s < c ? n : i, s, e.x, e.y) && (p = Math.abs(s - e.y) / (i - e.x), dr(e, r1) && (p < h || p === h && (e.x > o.x || e.x === o.x && Gy(o, e))) && (o = e, h = p)), e = e.next;
        while (e !== l);
        return o;
    }
    function Gy(r1, t) {
        return J(r1.prev, r1, t.prev) < 0 && J(t.next, r1, r1.next) < 0;
    }
    function By(r1, t, e, i) {
        var s = r1;
        do s.z === 0 && (s.z = On(s.x, s.y, t, e, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
        while (s !== r1);
        s.prevZ.nextZ = null, s.prevZ = null, Iy(s);
    }
    function Iy(r1) {
        var t, e, i, s, n, o, a, l, u = 1;
        do {
            for(e = r1, r1 = null, n = null, o = 0; e;){
                for(o++, i = e, a = 0, t = 0; t < u && (a++, i = i.nextZ, !!i); t++);
                for(l = u; a > 0 || l > 0 && i;)a !== 0 && (l === 0 || !i || e.z <= i.z) ? (s = e, e = e.nextZ, a--) : (s = i, i = i.nextZ, l--), n ? n.nextZ = s : r1 = s, s.prevZ = n, n = s;
                e = i;
            }
            n.nextZ = null, u *= 2;
        }while (o > 1);
        return r1;
    }
    function On(r1, t, e, i, s) {
        return r1 = (r1 - e) * s | 0, t = (t - i) * s | 0, r1 = (r1 | r1 << 8) & 16711935, r1 = (r1 | r1 << 4) & 252645135, r1 = (r1 | r1 << 2) & 858993459, r1 = (r1 | r1 << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, r1 | t << 1;
    }
    function Fy(r1) {
        var t = r1, e = r1;
        do (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
        while (t !== r1);
        return e;
    }
    function Ie(r1, t, e, i, s, n, o, a) {
        return (s - o) * (t - a) >= (r1 - o) * (n - a) && (r1 - o) * (i - a) >= (e - o) * (t - a) && (e - o) * (n - a) >= (s - o) * (i - a);
    }
    function Dy(r1, t) {
        return r1.next.i !== t.i && r1.prev.i !== t.i && !Uy(r1, t) && (dr(r1, t) && dr(t, r1) && ky(r1, t) && (J(r1.prev, r1, t.prev) || J(r1, t.prev, t)) || xi(r1, t) && J(r1.prev, r1, r1.next) > 0 && J(t.prev, t, t.next) > 0);
    }
    function J(r1, t, e) {
        return (t.y - r1.y) * (e.x - t.x) - (t.x - r1.x) * (e.y - t.y);
    }
    function xi(r1, t) {
        return r1.x === t.x && r1.y === t.y;
    }
    function Vc(r1, t, e, i) {
        var s = Si(J(r1, t, e)), n = Si(J(r1, t, i)), o = Si(J(e, i, r1)), a = Si(J(e, i, t));
        return !!(s !== n && o !== a || s === 0 && Ti(r1, e, t) || n === 0 && Ti(r1, i, t) || o === 0 && Ti(e, r1, i) || a === 0 && Ti(e, t, i));
    }
    function Ti(r1, t, e) {
        return t.x <= Math.max(r1.x, e.x) && t.x >= Math.min(r1.x, e.x) && t.y <= Math.max(r1.y, e.y) && t.y >= Math.min(r1.y, e.y);
    }
    function Si(r1) {
        return r1 > 0 ? 1 : r1 < 0 ? -1 : 0;
    }
    function Uy(r1, t) {
        var e = r1;
        do {
            if (e.i !== r1.i && e.next.i !== r1.i && e.i !== t.i && e.next.i !== t.i && Vc(e, e.next, r1, t)) return !0;
            e = e.next;
        }while (e !== r1);
        return !1;
    }
    function dr(r1, t) {
        return J(r1.prev, r1, r1.next) < 0 ? J(r1, t, r1.next) >= 0 && J(r1, r1.prev, t) >= 0 : J(r1, t, r1.prev) < 0 || J(r1, r1.next, t) < 0;
    }
    function ky(r1, t) {
        var e = r1, i = !1, s = (r1.x + t.x) / 2, n = (r1.y + t.y) / 2;
        do e.y > n != e.next.y > n && e.next.y !== e.y && s < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
        while (e !== r1);
        return i;
    }
    function Wc(r1, t) {
        var e = new Gn(r1.i, r1.x, r1.y), i = new Gn(t.i, t.x, t.y), s = r1.next, n = t.prev;
        return r1.next = t, t.prev = r1, e.next = s, s.prev = e, i.next = e, e.prev = i, n.next = i, i.prev = n, i;
    }
    function Yc(r1, t, e, i) {
        var s = new Gn(r1, t, e);
        return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
    }
    function pr(r1) {
        r1.next.prev = r1.prev, r1.prev.next = r1.next, r1.prevZ && (r1.prevZ.nextZ = r1.nextZ), r1.nextZ && (r1.nextZ.prevZ = r1.prevZ);
    }
    function Gn(r1, t, e) {
        this.i = r1, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    yi.deviation = function(r1, t, e, i) {
        var s = t && t.length, n = s ? t[0] * e : r1.length, o = Math.abs(Bn(r1, 0, n, e));
        if (s) for(var a = 0, l = t.length; a < l; a++){
            var u = t[a] * e, c = a < l - 1 ? t[a + 1] * e : r1.length;
            o -= Math.abs(Bn(r1, u, c, e));
        }
        var h = 0;
        for(a = 0; a < i.length; a += 3){
            var p = i[a] * e, f = i[a + 1] * e, m = i[a + 2] * e;
            h += Math.abs((r1[p] - r1[m]) * (r1[f + 1] - r1[p + 1]) - (r1[p] - r1[f]) * (r1[m + 1] - r1[p + 1]));
        }
        return o === 0 && h === 0 ? 0 : Math.abs((h - o) / o);
    };
    function Bn(r1, t, e, i) {
        for(var s = 0, n = t, o = e - i; n < e; n += i)s += (r1[o] - r1[n]) * (r1[n + 1] + r1[o + 1]), o = n;
        return s;
    }
    yi.flatten = function(r1) {
        for(var t = r1[0][0].length, e = {
            vertices: [],
            holes: [],
            dimensions: t
        }, i = 0, s = 0; s < r1.length; s++){
            for(var n = 0; n < r1[s].length; n++)for(var o = 0; o < t; o++)e.vertices.push(r1[s][n][o]);
            s > 0 && (i += r1[s - 1].length, e.holes.push(i));
        }
        return e;
    };
    var Ly = vi.exports, Kc = ks(Ly);
    function In(r1, t, e, i, s, n, o) {
        const a = Kc(r1, t, 2);
        if (!a) return;
        for(let u = 0; u < a.length; u += 3)n[o++] = a[u] + s, n[o++] = a[u + 1] + s, n[o++] = a[u + 2] + s;
        let l = s * i;
        for(let u = 0; u < r1.length; u += 2)e[l] = r1[u], e[l + 1] = r1[u + 1], l += i;
    }
    const $y = [], Fn = {
        build (r1, t) {
            for(let e = 0; e < r1.points.length; e++)t[e] = r1.points[e];
            return t;
        },
        triangulate (r1, t, e, i, s, n) {
            In(r1, $y, t, e, i, s, n);
        }
    }, Dn = {
        build (r1, t) {
            const e = r1, i = e.x, s = e.y, n = e.width, o = e.height;
            return n >= 0 && o >= 0 && (t[0] = i, t[1] = s, t[2] = i + n, t[3] = s, t[4] = i + n, t[5] = s + o, t[6] = i, t[7] = s + o), t;
        },
        triangulate (r1, t, e, i, s, n) {
            let o = 0;
            i *= e, t[i + o] = r1[0], t[i + o + 1] = r1[1], o += e, t[i + o] = r1[2], t[i + o + 1] = r1[3], o += e, t[i + o] = r1[6], t[i + o + 1] = r1[7], o += e, t[i + o] = r1[4], t[i + o + 1] = r1[5], o += e;
            const a = i / e;
            s[n++] = a, s[n++] = a + 1, s[n++] = a + 2, s[n++] = a + 1, s[n++] = a + 3, s[n++] = a + 2;
        }
    }, Un = {
        build (r1, t) {
            return t[0] = r1.x, t[1] = r1.y, t[2] = r1.x2, t[3] = r1.y2, t[4] = r1.x3, t[5] = r1.y3, t;
        },
        triangulate (r1, t, e, i, s, n) {
            let o = 0;
            i *= e, t[i + o] = r1[0], t[i + o + 1] = r1[1], o += e, t[i + o] = r1[2], t[i + o + 1] = r1[3], o += e, t[i + o] = r1[4], t[i + o + 1] = r1[5];
            const a = i / e;
            s[n++] = a, s[n++] = a + 1, s[n++] = a + 2;
        }
    }, kn = {
        rectangle: Dn,
        polygon: Fn,
        triangle: Un,
        circle: fe,
        ellipse: fe,
        roundedRectangle: fe
    }, Ny = new j;
    function qc(r1, t) {
        const { geometryData: e, batches: i } = t;
        i.length = 0, e.indices.length = 0, e.vertices.length = 0, e.uvs.length = 0;
        for(let s = 0; s < r1.instructions.length; s++){
            const n = r1.instructions[s];
            if (n.action === "texture") Hy(n.data, i, e);
            else if (n.action === "fill" || n.action === "stroke") {
                const o = n.action === "stroke", a = n.data.path.shapePath, l = n.data.style, u = n.data.hole;
                o && u && Zc(u.shapePath, l, null, !0, i, e), Zc(a, l, u, o, i, e);
            }
        }
    }
    function Hy(r1, t, e) {
        const { vertices: i, uvs: s, indices: n } = e, o = n.length, a = i.length / 2, l = [], u = kn.rectangle, c = Ny, h = r1.image;
        c.x = r1.dx, c.y = r1.dy, c.width = r1.dw, c.height = r1.dh;
        const p = r1.transform;
        u.build(c, l), p && gi(l, p), u.triangulate(l, i, 2, a, n, o);
        const f = h.uvs;
        s.push(f.x0, f.y0, f.x1, f.y1, f.x3, f.y3, f.x2, f.y2);
        const m = X.get(bi);
        m.indexOffset = o, m.indexSize = n.length - o, m.vertexOffset = a, m.vertexSize = i.length / 2 - a, m.color = r1.style, m.alpha = r1.alpha, m.texture = h, m.geometryData = e, t.push(m);
    }
    function Zc(r1, t, e, i, s, n) {
        const { vertices: o, uvs: a, indices: l } = n, u = r1.shapePrimitives.length - 1;
        r1.shapePrimitives.forEach(({ shape: c, transform: h }, p)=>{
            var f;
            const m = l.length, _ = o.length / 2, g = [], b = kn[c.type];
            if (b.build(c, g), h && gi(g, h), i) {
                const E = (f = c.closePath) != null ? f : !0;
                zc(g, t, !1, E, o, 2, _, l, m);
            } else if (e && u === p) {
                u !== 0 && console.warn("[Pixi Graphics] only the last shape have be cut out");
                const E = [], R = g.slice();
                Xy(e.shapePath).forEach((M)=>{
                    E.push(R.length / 2), R.push(...M);
                }), In(R, E, o, 2, _, l, m);
            } else b.triangulate(g, o, 2, _, l, m);
            const v = a.length / 2, y = t.texture;
            if (y !== P.WHITE) {
                const E = t.matrix;
                h && E.append(h.clone().invert()), Rn(o, 2, _, a, v, 2, o.length / 2 - _, E);
            } else wn(a, v, 2, o.length / 2 - _);
            const T = X.get(bi);
            T.indexOffset = m, T.indexSize = l.length - m, T.vertexOffset = _, T.vertexSize = o.length / 2 - _, T.color = t.color, T.alpha = t.alpha, T.texture = y, T.geometryData = n, s.push(T);
        });
    }
    function Xy(r1) {
        if (!r1) return [];
        const t = r1.shapePrimitives, e = [];
        for(let i = 0; i < t.length; i++){
            const s = t[i].shape, n = [];
            kn[s.type].build(s, n), e.push(n);
        }
        return e;
    }
    class Qc {
        constructor(){
            this.batches = [], this.geometryData = {
                vertices: [],
                uvs: [],
                indices: []
            };
        }
    }
    class Jc {
        constructor(){
            this.geometry = new xn, this.instructions = new Ys;
        }
        init() {
            this.instructions.reset();
        }
    }
    const Ln = class Yl {
        constructor(){
            this._activeBatchers = [], this._gpuContextHash = {}, this._graphicsDataContextHash = Object.create(null), this._needsContextNeedsRebuild = [];
        }
        init(t) {
            var e;
            Yl.defaultOptions.bezierSmoothness = (e = t == null ? void 0 : t.bezierSmoothness) != null ? e : Yl.defaultOptions.bezierSmoothness;
        }
        prerender() {
            this._returnActiveBatchers();
        }
        getContextRenderData(t) {
            return this._graphicsDataContextHash[t.uid] || this._initContextRenderData(t);
        }
        updateGpuContext(t) {
            let e = this._gpuContextHash[t.uid] || this._initContext(t);
            if (t.dirty) {
                e ? this._cleanGraphicsContextData(t) : e = this._initContext(t), qc(t, e);
                const i = t.batchMode;
                t.customShader || i === "no-batch" ? e.isBatchable = !1 : i === "auto" && (e.isBatchable = e.geometryData.vertices.length < 400), t.dirty = !1;
            }
            return e;
        }
        getGpuContext(t) {
            return this._gpuContextHash[t.uid] || this._initContext(t);
        }
        _returnActiveBatchers() {
            for(let t = 0; t < this._activeBatchers.length; t++)X.return(this._activeBatchers[t]);
            this._activeBatchers.length = 0;
        }
        _initContextRenderData(t) {
            const e = X.get(Jc), { batches: i, geometryData: s } = this._gpuContextHash[t.uid], n = s.vertices.length, o = s.indices.length;
            for(let c = 0; c < i.length; c++)i[c].applyTransform = !1;
            const a = X.get(Pn);
            this._activeBatchers.push(a), a.ensureAttributeBuffer(n), a.ensureIndexBuffer(o), a.begin();
            for(let c = 0; c < i.length; c++){
                const h = i[c];
                a.add(h);
            }
            a.finish(e.instructions);
            const l = e.geometry;
            l.indexBuffer.setDataWithSize(a.indexBuffer, a.indexSize, !0), l.buffers[0].setDataWithSize(a.attributeBuffer.float32View, a.attributeSize, !0);
            const u = a.batches;
            for(let c = 0; c < u.length; c++){
                const h = u[c];
                h.bindGroup = fi(h.textures.textures, h.textures.count);
            }
            return this._graphicsDataContextHash[t.uid] = e, e;
        }
        _initContext(t) {
            const e = new Qc;
            return this._gpuContextHash[t.uid] = e, t.on("update", this.onGraphicsContextUpdate, this), t.on("destroy", this.onGraphicsContextDestroy, this), this._gpuContextHash[t.uid];
        }
        onGraphicsContextUpdate(t) {
            this._needsContextNeedsRebuild.push(t);
        }
        onGraphicsContextDestroy(t) {
            this._cleanGraphicsContextData(t), t.off("update", this.onGraphicsContextUpdate, this), t.off("destroy", this.onGraphicsContextDestroy, this), this._gpuContextHash[t.uid] = null;
        }
        _cleanGraphicsContextData(t) {
            const e = this._gpuContextHash[t.uid];
            e.isBatchable || this._graphicsDataContextHash[t.uid] && (X.return(this.getContextRenderData(t)), this._graphicsDataContextHash[t.uid] = null), e.batches && e.batches.forEach((i)=>{
                X.return(i);
            });
        }
        destroy() {
            for (const t of this._needsContextNeedsRebuild)this._gpuContextHash[t.uid] && this.onGraphicsContextDestroy(t);
            this._needsContextNeedsRebuild.length = 0;
        }
    };
    Ln.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "graphicsContext"
    }, Ln.defaultOptions = {
        bezierSmoothness: .5
    };
    let Ei = Ln;
    const zy = {
        normal: 0,
        add: 1,
        multiply: 2,
        screen: 3,
        overlay: 4,
        erase: 5,
        "normal-npm": 6,
        "add-npm": 7,
        "screen-npm": 8
    }, $n = 0, Nn = 1, Hn = 2, Xn = 3, zn = 4, jn = 5, Vn = class Pb {
        constructor(){
            this.data = 0, this.blendMode = "normal", this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
        }
        get blend() {
            return !!(this.data & 1 << $n);
        }
        set blend(t) {
            !!(this.data & 1 << $n) !== t && (this.data ^= 1 << $n);
        }
        get offsets() {
            return !!(this.data & 1 << Nn);
        }
        set offsets(t) {
            !!(this.data & 1 << Nn) !== t && (this.data ^= 1 << Nn);
        }
        set cullMode(t) {
            if (t === "none") {
                this.culling = !1;
                return;
            }
            this.culling = !0, this.clockwiseFrontFace = t === "front";
        }
        get cullMode() {
            return this.culling ? this.clockwiseFrontFace ? "front" : "back" : "none";
        }
        get culling() {
            return !!(this.data & 1 << Hn);
        }
        set culling(t) {
            !!(this.data & 1 << Hn) !== t && (this.data ^= 1 << Hn);
        }
        get depthTest() {
            return !!(this.data & 1 << Xn);
        }
        set depthTest(t) {
            !!(this.data & 1 << Xn) !== t && (this.data ^= 1 << Xn);
        }
        get depthMask() {
            return !!(this.data & 1 << jn);
        }
        set depthMask(t) {
            !!(this.data & 1 << jn) !== t && (this.data ^= 1 << jn);
        }
        get clockwiseFrontFace() {
            return !!(this.data & 1 << zn);
        }
        set clockwiseFrontFace(t) {
            !!(this.data & 1 << zn) !== t && (this.data ^= 1 << zn);
        }
        get blendMode() {
            return this._blendMode;
        }
        set blendMode(t) {
            this.blend = t !== "none", this._blendMode = t, this._blendModeId = zy[t] || 0;
        }
        get polygonOffset() {
            return this._polygonOffset;
        }
        set polygonOffset(t) {
            this.offsets = !!t, this._polygonOffset = t;
        }
        static for2d() {
            const t = new Pb;
            return t.depthTest = !1, t.blend = !0, t;
        }
    };
    Vn.default2d = Vn.for2d();
    let Bt = Vn;
    function jy(r1, t, e, i) {
        e[i++] = (r1 >> 16 & 255) / 255, e[i++] = (r1 >> 8 & 255) / 255, e[i++] = (r1 & 255) / 255, e[i++] = t;
    }
    function fr(r1, t, e) {
        const i = (r1 >> 24 & 255) / 255;
        t[e++] = (r1 & 255) / 255 * i, t[e++] = (r1 >> 8 & 255) / 255 * i, t[e++] = (r1 >> 16 & 255) / 255 * i, t[e++] = i;
    }
    class Wn {
        constructor(t, e){
            this.state = Bt.for2d(), this._graphicsBatchesHash = Object.create(null), this.renderer = t, this._adaptor = e, this._adaptor.init();
        }
        validateRenderable(t) {
            const e = t.context, i = !!this._graphicsBatchesHash[t.uid], s = this.renderer.graphicsContext.updateGpuContext(e);
            return !!(s.isBatchable || i !== s.isBatchable);
        }
        addRenderable(t, e) {
            const i = this.renderer.graphicsContext.updateGpuContext(t.context);
            t._didGraphicsUpdate && (t._didGraphicsUpdate = !1, this._rebuild(t)), i.isBatchable ? this._addToBatcher(t, e) : (this.renderer.renderPipes.batch.break(e), e.add(t));
        }
        updateRenderable(t) {
            const e = this._graphicsBatchesHash[t.uid];
            if (e) for(let i = 0; i < e.length; i++){
                const s = e[i];
                s.batcher.updateElement(s);
            }
        }
        destroyRenderable(t) {
            this._graphicsBatchesHash[t.uid] && this._removeBatchForRenderable(t.uid);
        }
        execute(t) {
            if (!t.isRenderable) return;
            const e = this.renderer, i = t.context;
            if (!e.graphicsContext.getGpuContext(i).batches.length) return;
            const s = i.customShader || this._adaptor.shader;
            this.state.blendMode = t.groupBlendMode;
            const n = s.resources.localUniforms.uniforms;
            n.uTransformMatrix = t.groupTransform, n.uRound = e._roundPixels | t._roundPixels, fr(t.groupColorAlpha, n.uColor, 0), this._adaptor.execute(this, t);
        }
        _rebuild(t) {
            const e = !!this._graphicsBatchesHash[t.uid], i = this.renderer.graphicsContext.updateGpuContext(t.context);
            e && this._removeBatchForRenderable(t.uid), i.isBatchable && this._initBatchesForRenderable(t), t.batched = i.isBatchable;
        }
        _addToBatcher(t, e) {
            const i = this.renderer.renderPipes.batch, s = this._getBatchesForRenderable(t);
            for(let n = 0; n < s.length; n++){
                const o = s[n];
                i.addToBatch(o, e);
            }
        }
        _getBatchesForRenderable(t) {
            return this._graphicsBatchesHash[t.uid] || this._initBatchesForRenderable(t);
        }
        _initBatchesForRenderable(t) {
            const e = t.context, i = this.renderer.graphicsContext.getGpuContext(e), s = this.renderer._roundPixels | t._roundPixels, n = i.batches.map((o)=>{
                const a = X.get(bi);
                return o.copyTo(a), a.renderable = t, a.roundPixels = s, a;
            });
            return this._graphicsBatchesHash[t.uid] = n, t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), n;
        }
        _removeBatchForRenderable(t) {
            this._graphicsBatchesHash[t].forEach((e)=>{
                X.return(e);
            }), this._graphicsBatchesHash[t] = null;
        }
        destroy() {
            this.renderer = null, this._adaptor.destroy(), this._adaptor = null, this.state = null;
            for(const t in this._graphicsBatchesHash)this._removeBatchForRenderable(t);
            this._graphicsBatchesHash = null;
        }
    }
    Wn.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "graphics"
    }, U.add(Wn), U.add(Ei);
    const Yn = Object.create(null), th = Object.create(null);
    function mr(r1, t) {
        let e = th[r1];
        return e === void 0 && (Yn[t] === void 0 && (Yn[t] = 1), th[r1] = e = Yn[t]++), e;
    }
    function eh(r1, t) {
        switch(r1){
            case "f32":
                return 0;
            case "vec2<f32>":
                return new Float32Array(2 * t);
            case "vec3<f32>":
                return new Float32Array(3 * t);
            case "vec4<f32>":
                return new Float32Array(4 * t);
            case "mat2x2<f32>":
                return new Float32Array([
                    1,
                    0,
                    0,
                    1
                ]);
            case "mat3x3<f32>":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                ]);
            case "mat4x4<f32>":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]);
        }
        return null;
    }
    var Vy = Object.defineProperty, rh = Object.getOwnPropertySymbols, Wy = Object.prototype.hasOwnProperty, Yy = Object.prototype.propertyIsEnumerable, ih = (r1, t, e)=>t in r1 ? Vy(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, sh = (r1, t)=>{
        for(var e in t || (t = {}))Wy.call(t, e) && ih(r1, e, t[e]);
        if (rh) for (var e of rh(t))Yy.call(t, e) && ih(r1, e, t[e]);
        return r1;
    };
    const nh = class Rb {
        constructor(t, e){
            this._touched = 0, this.uid = Q("uniform"), this._resourceType = "uniformGroup", this._resourceId = Q("resource"), this.isUniformGroup = !0, this._dirtyId = 0;
            var i, s;
            e = sh(sh({}, Rb.defaultOptions), e), this.uniformStructures = t;
            const n = {};
            for(const o in t){
                const a = t[o];
                a.name = o, a.size = (i = a.size) != null ? i : 1, (s = a.value) != null || (a.value = eh(a.type, a.size)), n[o] = a.value;
            }
            this.uniforms = n, this._dirtyId = 1, this.ubo = e.ubo, this.isStatic = e.isStatic, this._signature = mr(Object.keys(n).map((o)=>`${o}-${t[o].type}`).join("-"), "uniform-group");
        }
        update() {
            this._dirtyId++;
        }
    };
    nh.defaultOptions = {
        ubo: !1,
        isStatic: !1
    };
    let nt = nh;
    class Ai {
        constructor(){
            this.batcher = null, this.batch = null, this.roundPixels = 0, this._uvUpdateId = -1, this._textureMatrixUpdateId = -1;
        }
        get blendMode() {
            return this.mesh.groupBlendMode;
        }
        reset() {
            this.mesh = null, this.texture = null, this.batcher = null, this.batch = null;
        }
        packIndex(t, e, i) {
            const s = this.geometry.indices;
            for(let n = 0; n < s.length; n++)t[e++] = s[n] + i;
        }
        packAttributes(t, e, i, s) {
            const n = this.mesh, o = this.geometry, a = n.groupTransform, l = s << 16 | this.roundPixels & 65535, u = a.a, c = a.b, h = a.c, p = a.d, f = a.tx, m = a.ty, _ = o.positions, g = o.getBuffer("aUV"), b = g.data;
            let v = b;
            const y = this.texture.textureMatrix;
            y.isSimple || (v = this._transformedUvs, (this._textureMatrixUpdateId !== y._updateID || this._uvUpdateId !== g._updateID) && ((!v || v.length < b.length) && (v = this._transformedUvs = new Float32Array(b.length)), this._textureMatrixUpdateId = y._updateID, this._uvUpdateId = g._updateID, y.multiplyUvs(b, v)));
            const T = n.groupColorAlpha;
            for(let E = 0; E < _.length; E += 2){
                const R = _[E], M = _[E + 1];
                t[i] = u * R + h * M + f, t[i + 1] = c * R + p * M + m, t[i + 2] = v[E], t[i + 3] = v[E + 1], e[i + 4] = T, e[i + 5] = l, i += 6;
            }
        }
        get vertexSize() {
            return this.geometry.positions.length / 2;
        }
        get indexSize() {
            return this.geometry.indices.length;
        }
    }
    class Kn {
        constructor(t, e){
            this.localUniforms = new nt({
                uTransformMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uColor: {
                    value: new Float32Array([
                        1,
                        1,
                        1,
                        1
                    ]),
                    type: "vec4<f32>"
                },
                uRound: {
                    value: 0,
                    type: "f32"
                }
            }), this.localUniformsBindGroup = new $t({
                0: this.localUniforms
            }), this._meshDataHash = Object.create(null), this._gpuBatchableMeshHash = Object.create(null), this.renderer = t, this._adaptor = e, this._adaptor.init();
        }
        validateRenderable(t) {
            const e = this._getMeshData(t), i = e.batched, s = t.batched;
            if (e.batched = s, i !== s) return !0;
            if (s) {
                const n = t._geometry;
                if (n.indices.length !== e.indexSize || n.positions.length !== e.vertexSize) return e.indexSize = n.indices.length, e.vertexSize = n.positions.length, !0;
                const o = this._getBatchableMesh(t), a = t.texture;
                if (o.texture._source !== a._source && o.texture._source !== a._source) return !o.batcher.checkAndUpdateTexture(o, a);
            }
            return !1;
        }
        addRenderable(t, e) {
            const i = this.renderer.renderPipes.batch, { batched: s } = this._getMeshData(t);
            if (s) {
                const n = this._getBatchableMesh(t);
                n.texture = t._texture, n.geometry = t._geometry, i.addToBatch(n);
            } else i.break(e), e.add({
                renderPipeId: "mesh",
                mesh: t
            });
        }
        updateRenderable(t) {
            if (t.batched) {
                const e = this._gpuBatchableMeshHash[t.uid];
                e.texture = t._texture, e.geometry = t._geometry, e.batcher.updateElement(e);
            }
        }
        destroyRenderable(t) {
            this._meshDataHash[t.uid] = null;
            const e = this._gpuBatchableMeshHash[t.uid];
            e && (X.return(e), this._gpuBatchableMeshHash[t.uid] = null);
        }
        execute({ mesh: t }) {
            if (!t.isRenderable) return;
            t.state.blendMode = t.groupBlendMode;
            const e = this.localUniforms;
            e.uniforms.uTransformMatrix = t.groupTransform, e.uniforms.uRound = this.renderer._roundPixels | t._roundPixels, e.update(), fr(t.groupColorAlpha, e.uniforms.uColor, 0), this._adaptor.execute(this, t);
        }
        _getMeshData(t) {
            return this._meshDataHash[t.uid] || this._initMeshData(t);
        }
        _initMeshData(t) {
            var e, i;
            return this._meshDataHash[t.uid] = {
                batched: t.batched,
                indexSize: (e = t._geometry.indices) == null ? void 0 : e.length,
                vertexSize: (i = t._geometry.positions) == null ? void 0 : i.length
            }, t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), this._meshDataHash[t.uid];
        }
        _getBatchableMesh(t) {
            return this._gpuBatchableMeshHash[t.uid] || this._initBatchableMesh(t);
        }
        _initBatchableMesh(t) {
            const e = X.get(Ai);
            return e.mesh = t, e.texture = t._texture, e.roundPixels = this.renderer._roundPixels | t._roundPixels, this._gpuBatchableMeshHash[t.uid] = e, e.mesh = t, e;
        }
        destroy() {
            for(const t in this._gpuBatchableMeshHash)this._gpuBatchableMeshHash[t] && X.return(this._gpuBatchableMeshHash[t]);
            this._gpuBatchableMeshHash = null, this._meshDataHash = null, this.localUniforms = null, this.localUniformsBindGroup = null, this._adaptor.destroy(), this._adaptor = null, this.renderer = null;
        }
    }
    Kn.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "mesh"
    }, U.add(Kn);
    class Pi {
        constructor(){
            this.vertexSize = 4, this.indexSize = 6, this.location = 0, this.batcher = null, this.batch = null, this.roundPixels = 0;
        }
        get blendMode() {
            return this.renderable.groupBlendMode;
        }
        packAttributes(t, e, i, s) {
            const n = this.renderable, o = this.texture, a = n.groupTransform, l = a.a, u = a.b, c = a.c, h = a.d, p = a.tx, f = a.ty, m = this.bounds, _ = m.maxX, g = m.minX, b = m.maxY, v = m.minY, y = o.uvs, T = n.groupColorAlpha, E = s << 16 | this.roundPixels & 65535;
            t[i + 0] = l * g + c * v + p, t[i + 1] = h * v + u * g + f, t[i + 2] = y.x0, t[i + 3] = y.y0, e[i + 4] = T, e[i + 5] = E, t[i + 6] = l * _ + c * v + p, t[i + 7] = h * v + u * _ + f, t[i + 8] = y.x1, t[i + 9] = y.y1, e[i + 10] = T, e[i + 11] = E, t[i + 12] = l * _ + c * b + p, t[i + 13] = h * b + u * _ + f, t[i + 14] = y.x2, t[i + 15] = y.y2, e[i + 16] = T, e[i + 17] = E, t[i + 18] = l * g + c * b + p, t[i + 19] = h * b + u * g + f, t[i + 20] = y.x3, t[i + 21] = y.y3, e[i + 22] = T, e[i + 23] = E;
        }
        packIndex(t, e, i) {
            t[e] = i + 0, t[e + 1] = i + 1, t[e + 2] = i + 2, t[e + 3] = i + 0, t[e + 4] = i + 2, t[e + 5] = i + 3;
        }
        reset() {
            this.renderable = null, this.texture = null, this.batcher = null, this.batch = null, this.bounds = null;
        }
    }
    class qn {
        constructor(t){
            this._gpuText = Object.create(null), this._renderer = t;
        }
        validateRenderable(t) {
            var e;
            const i = this._getGpuText(t), s = t._getKey();
            if (i.currentKey !== s) {
                const n = (e = t.resolution) != null ? e : this._renderer.resolution, { width: o, height: a } = this._renderer.canvasText.getTextureSize(t.text, n, t._style);
                return !(this._renderer.canvasText.getReferenceCount(i.currentKey) === 1 && o === i.texture._source.width && a === i.texture._source.height);
            }
            return !1;
        }
        addRenderable(t, e) {
            const i = this._getGpuText(t).batchableSprite;
            t._didTextUpdate && this._updateText(t), this._renderer.renderPipes.batch.addToBatch(i);
        }
        updateRenderable(t) {
            const e = this._getGpuText(t).batchableSprite;
            t._didTextUpdate && this._updateText(t), e.batcher.updateElement(e);
        }
        destroyRenderable(t) {
            this._destroyRenderableById(t.uid);
        }
        _destroyRenderableById(t) {
            const e = this._gpuText[t];
            this._renderer.canvasText.decreaseReferenceCount(e.currentKey), X.return(e.batchableSprite), this._gpuText[t] = null;
        }
        _updateText(t) {
            const e = t._getKey(), i = this._getGpuText(t), s = i.batchableSprite;
            i.currentKey !== e && this._updateGpuText(t), t._didTextUpdate = !1;
            const n = t._style.padding;
            lr(s.bounds, t._anchor, s.texture, n);
        }
        _updateGpuText(t) {
            var e;
            const i = this._getGpuText(t), s = i.batchableSprite;
            i.texture && this._renderer.canvasText.decreaseReferenceCount(i.currentKey);
            const n = (e = t.resolution) != null ? e : this._renderer.resolution;
            i.texture = s.texture = this._renderer.canvasText.getTexture(t.text, n, t._style, t._getKey()), i.currentKey = t._getKey(), s.texture = i.texture;
        }
        _getGpuText(t) {
            return this._gpuText[t.uid] || this.initGpuText(t);
        }
        initGpuText(t) {
            const e = {
                texture: null,
                currentKey: "--",
                batchableSprite: X.get(Pi)
            };
            return e.batchableSprite.renderable = t, e.batchableSprite.bounds = {
                minX: 0,
                maxX: 1,
                minY: 0,
                maxY: 0
            }, e.batchableSprite.roundPixels = this._renderer._roundPixels | t._roundPixels, this._gpuText[t.uid] = e, this._updateText(t), t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), e;
        }
        destroy() {
            for(const t in this._gpuText)this._destroyRenderableById(t);
            this._gpuText = null, this._renderer = null;
        }
    }
    qn.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "text"
    };
    class oh {
        constructor(t){
            this._canvasPool = Object.create(null), this.canvasOptions = t || {}, this.enableFullScreen = !1;
        }
        _createCanvasAndContext(t, e) {
            const i = z.get().createCanvas();
            i.width = t, i.height = e;
            const s = i.getContext("2d");
            return {
                canvas: i,
                context: s
            };
        }
        getOptimalCanvasAndContext(t, e, i = 1) {
            t = Math.ceil(t * i - 1e-6), e = Math.ceil(e * i - 1e-6), t = de(t), e = de(e);
            const s = (t << 17) + (e << 1);
            this._canvasPool[s] || (this._canvasPool[s] = []);
            let n = this._canvasPool[s].pop();
            return n || (n = this._createCanvasAndContext(t, e)), n;
        }
        returnCanvasAndContext(t) {
            const { width: e, height: i } = t.canvas, s = (e << 17) + (i << 1);
            this._canvasPool[s].push(t);
        }
        clear() {
            this._canvasPool = {};
        }
    }
    const Vt = new oh;
    var Ky = Object.defineProperty, qy = Object.defineProperties, Zy = Object.getOwnPropertyDescriptors, ah = Object.getOwnPropertySymbols, Qy = Object.prototype.hasOwnProperty, Jy = Object.prototype.propertyIsEnumerable, lh = (r1, t, e)=>t in r1 ? Ky(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, tx = (r1, t)=>{
        for(var e in t || (t = {}))Qy.call(t, e) && lh(r1, e, t[e]);
        if (ah) for (var e of ah(t))Jy.call(t, e) && lh(r1, e, t[e]);
        return r1;
    }, ex = (r1, t)=>qy(r1, Zy(t));
    let rx = 0;
    class uh {
        constructor(t){
            this._poolKeyHash = Object.create(null), this._texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1;
        }
        createTexture(t, e, i) {
            const s = new rt(ex(tx({}, this.textureOptions), {
                width: t,
                height: e,
                resolution: 1,
                antialias: i,
                autoGarbageCollect: !0
            }));
            return new P({
                source: s,
                label: `texturePool_${rx++}`
            });
        }
        getOptimalTexture(t, e, i = 1, s) {
            let n = Math.ceil(t * i - 1e-6), o = Math.ceil(e * i - 1e-6);
            n = de(n), o = de(o);
            const a = (n << 17) + (o << 1) + (s ? 1 : 0);
            this._texturePool[a] || (this._texturePool[a] = []);
            let l = this._texturePool[a].pop();
            return l || (l = this.createTexture(n, o, s)), l.source._resolution = i, l.source.width = n / i, l.source.height = o / i, l.source.pixelWidth = n, l.source.pixelHeight = o, l.frame.x = 0, l.frame.y = 0, l.frame.width = t, l.frame.height = e, l.updateUvs(), this._poolKeyHash[l.uid] = a, l;
        }
        getSameSizeTexture(t, e = !1) {
            const i = t.source;
            return this.getOptimalTexture(t.width, t.height, i._resolution, e);
        }
        returnTexture(t) {
            const e = this._poolKeyHash[t.uid];
            this._texturePool[e].push(t);
        }
        clear(t) {
            if (t = t !== !1, t) for(const e in this._texturePool){
                const i = this._texturePool[e];
                if (i) for(let s = 0; s < i.length; s++)i[s].destroy(!0);
            }
            this._texturePool = {};
        }
    }
    const ct = new uh;
    function ch(r1, t, e) {
        for(let i = 0, s = 4 * e * t; i < t; ++i, s += 4)if (r1[s + 3] !== 0) return !1;
        return !0;
    }
    function hh(r1, t, e, i, s) {
        const n = 4 * t;
        for(let o = i, a = i * n + 4 * e; o <= s; ++o, a += n)if (r1[a + 3] !== 0) return !1;
        return !0;
    }
    function dh(r1, t = 1) {
        const { width: e, height: i } = r1, s = r1.getContext("2d", {
            willReadFrequently: !0
        });
        if (s === null) throw new TypeError("Failed to get canvas 2D context");
        const n = s.getImageData(0, 0, e, i).data;
        let o = 0, a = 0, l = e - 1, u = i - 1;
        for(; a < i && ch(n, e, a);)++a;
        if (a === i) return j.EMPTY;
        for(; ch(n, e, u);)--u;
        for(; hh(n, e, o, a, u);)++o;
        for(; hh(n, e, l, a, u);)--l;
        return ++l, ++u, new j(o / t, a / t, (l - o) / t, (u - a) / t);
    }
    const ix = new ut;
    function Zn(r1, t, e, i) {
        const s = ix;
        s.minX = 0, s.minY = 0, s.maxX = r1.width / i | 0, s.maxY = r1.height / i | 0;
        const n = ct.getOptimalTexture(s.width, s.height, i, !1);
        return n.source.uploadMethodId = "image", n.source.resource = r1, n.source.alphaMode = "premultiply-alpha-on-upload", n.frame.width = t / i, n.frame.height = e / i, n.source.emit("update", n.source), n.updateUvs(), n;
    }
    const sx = [
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui"
    ];
    function gr(r1) {
        const t = typeof r1.fontSize == "number" ? `${r1.fontSize}px` : r1.fontSize;
        let e = r1.fontFamily;
        Array.isArray(r1.fontFamily) || (e = r1.fontFamily.split(","));
        for(let i = e.length - 1; i >= 0; i--){
            let s = e[i].trim();
            !/([\"\'])[^\'\"]+\1/.test(s) && !sx.includes(s) && (s = `"${s}"`), e[i] = s;
        }
        return `${r1.fontStyle} ${r1.fontVariant} ${r1.fontWeight} ${t} ${e.join(",")}`;
    }
    const Qn = {
        willReadFrequently: !0
    }, It = class O {
        static get experimentalLetterSpacingSupported() {
            let t = O._experimentalLetterSpacingSupported;
            if (t !== void 0) {
                const e = z.get().getCanvasRenderingContext2D().prototype;
                t = O._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
            }
            return t;
        }
        constructor(t, e, i, s, n, o, a, l, u){
            this.text = t, this.style = e, this.width = i, this.height = s, this.lines = n, this.lineWidths = o, this.lineHeight = a, this.maxLineWidth = l, this.fontProperties = u;
        }
        static measureText(t = " ", e, i = O._canvas, s = e.wordWrap) {
            var n;
            const o = `${t}:${e.styleKey}`;
            if (O._measurementCache[o]) return O._measurementCache[o];
            const a = gr(e), l = O.measureFont(a);
            l.fontSize === 0 && (l.fontSize = e.fontSize, l.ascent = e.fontSize);
            const u = O.__context;
            u.font = a;
            const c = (s ? O._wordWrap(t, e, i) : t).split(/(?:\r\n|\r|\n)/), h = new Array(c.length);
            let p = 0;
            for(let b = 0; b < c.length; b++){
                const v = O._measureText(c[b], e.letterSpacing, u);
                h[b] = v, p = Math.max(p, v);
            }
            const f = ((n = e._stroke) == null ? void 0 : n.width) || 0;
            let m = p + f;
            e.dropShadow && (m += e.dropShadow.distance);
            const _ = e.lineHeight || l.fontSize + f;
            let g = Math.max(_, l.fontSize + f * 2) + (c.length - 1) * (_ + e.leading);
            return e.dropShadow && (g += e.dropShadow.distance), new O(t, e, m, g, c, h, _ + e.leading, p, l);
        }
        static _measureText(t, e, i) {
            let s = !1;
            O.experimentalLetterSpacingSupported && (O.experimentalLetterSpacing ? (i.letterSpacing = `${e}px`, i.textLetterSpacing = `${e}px`, s = !0) : (i.letterSpacing = "0px", i.textLetterSpacing = "0px"));
            let n = i.measureText(t).width;
            return n > 0 && (s ? n -= e : n += (O.graphemeSegmenter(t).length - 1) * e), n;
        }
        static _wordWrap(t, e, i = O._canvas) {
            const s = i.getContext("2d", Qn);
            let n = 0, o = "", a = "";
            const l = Object.create(null), { letterSpacing: u, whiteSpace: c } = e, h = O._collapseSpaces(c), p = O._collapseNewlines(c);
            let f = !h;
            const m = e.wordWrapWidth + u, _ = O._tokenize(t);
            for(let g = 0; g < _.length; g++){
                let b = _[g];
                if (O._isNewline(b)) {
                    if (!p) {
                        a += O._addLine(o), f = !h, o = "", n = 0;
                        continue;
                    }
                    b = " ";
                }
                if (h) {
                    const y = O.isBreakingSpace(b), T = O.isBreakingSpace(o[o.length - 1]);
                    if (y && T) continue;
                }
                const v = O._getFromCache(b, u, l, s);
                if (v > m) {
                    if (o !== "" && (a += O._addLine(o), o = "", n = 0), O.canBreakWords(b, e.breakWords)) {
                        const y = O.wordWrapSplit(b);
                        for(let T = 0; T < y.length; T++){
                            let E = y[T], R = E, M = 1;
                            for(; y[T + M];){
                                const S = y[T + M];
                                if (!O.canBreakChars(R, S, b, T, e.breakWords)) E += S;
                                else break;
                                R = S, M++;
                            }
                            T += M - 1;
                            const w = O._getFromCache(E, u, l, s);
                            w + n > m && (a += O._addLine(o), f = !1, o = "", n = 0), o += E, n += w;
                        }
                    } else {
                        o.length > 0 && (a += O._addLine(o), o = "", n = 0);
                        const y = g === _.length - 1;
                        a += O._addLine(b, !y), f = !1, o = "", n = 0;
                    }
                } else v + n > m && (f = !1, a += O._addLine(o), o = "", n = 0), (o.length > 0 || !O.isBreakingSpace(b) || f) && (o += b, n += v);
            }
            return a += O._addLine(o, !1), a;
        }
        static _addLine(t, e = !0) {
            return t = O._trimRight(t), t = e ? `${t}
` : t, t;
        }
        static _getFromCache(t, e, i, s) {
            let n = i[t];
            return typeof n != "number" && (n = O._measureText(t, e, s) + e, i[t] = n), n;
        }
        static _collapseSpaces(t) {
            return t === "normal" || t === "pre-line";
        }
        static _collapseNewlines(t) {
            return t === "normal";
        }
        static _trimRight(t) {
            if (typeof t != "string") return "";
            for(let e = t.length - 1; e >= 0; e--){
                const i = t[e];
                if (!O.isBreakingSpace(i)) break;
                t = t.slice(0, -1);
            }
            return t;
        }
        static _isNewline(t) {
            return typeof t != "string" ? !1 : O._newlines.includes(t.charCodeAt(0));
        }
        static isBreakingSpace(t, e) {
            return typeof t != "string" ? !1 : O._breakingSpaces.includes(t.charCodeAt(0));
        }
        static _tokenize(t) {
            const e = [];
            let i = "";
            if (typeof t != "string") return e;
            for(let s = 0; s < t.length; s++){
                const n = t[s], o = t[s + 1];
                if (O.isBreakingSpace(n, o) || O._isNewline(n)) {
                    i !== "" && (e.push(i), i = ""), e.push(n);
                    continue;
                }
                i += n;
            }
            return i !== "" && e.push(i), e;
        }
        static canBreakWords(t, e) {
            return e;
        }
        static canBreakChars(t, e, i, s, n) {
            return !0;
        }
        static wordWrapSplit(t) {
            return O.graphemeSegmenter(t);
        }
        static measureFont(t) {
            if (O._fonts[t]) return O._fonts[t];
            const e = O._context;
            e.font = t;
            const i = e.measureText(O.METRICS_STRING + O.BASELINE_SYMBOL), s = {
                ascent: i.actualBoundingBoxAscent,
                descent: i.actualBoundingBoxDescent,
                fontSize: i.actualBoundingBoxAscent + i.actualBoundingBoxDescent
            };
            return O._fonts[t] = s, s;
        }
        static clearMetrics(t = "") {
            t ? delete O._fonts[t] : O._fonts = {};
        }
        static get _canvas() {
            if (!O.__canvas) {
                let t;
                try {
                    const e = new OffscreenCanvas(0, 0), i = e.getContext("2d", Qn);
                    if (i != null && i.measureText) return O.__canvas = e, e;
                    t = z.get().createCanvas();
                } catch (e) {
                    t = z.get().createCanvas();
                }
                t.width = t.height = 10, O.__canvas = t;
            }
            return O.__canvas;
        }
        static get _context() {
            return O.__context || (O.__context = O._canvas.getContext("2d", Qn)), O.__context;
        }
    };
    It.METRICS_STRING = "|\xc9q\xc5", It.BASELINE_SYMBOL = "M", It.BASELINE_MULTIPLIER = 1.4, It.HEIGHT_MULTIPLIER = 2, It.graphemeSegmenter = (()=>{
        if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
            const r1 = new Intl.Segmenter;
            return (t)=>[
                    ...r1.segment(t)
                ].map((e)=>e.segment);
        }
        return (r1)=>[
                ...r1
            ];
    })(), It.experimentalLetterSpacing = !1, It._fonts = {}, It._newlines = [
        10,
        13
    ], It._breakingSpaces = [
        9,
        32,
        8192,
        8193,
        8194,
        8195,
        8196,
        8197,
        8198,
        8200,
        8201,
        8202,
        8287,
        12288
    ], It._measurementCache = {};
    let Ft = It;
    const ph = class Kl {
        constructor(t, e, i, s){
            this.uid = Q("fillGradient"), this.type = "linear", this.gradientStops = [], this.x0 = t, this.y0 = e, this.x1 = i, this.y1 = s;
        }
        addColorStop(t, e) {
            return this.gradientStops.push({
                offset: t,
                color: Y.shared.setValue(e).toHex()
            }), this;
        }
        buildLinearGradient() {
            const t = Kl.defaultTextureSize, { gradientStops: e } = this, i = z.get().createCanvas();
            i.width = t, i.height = t;
            const s = i.getContext("2d"), n = s.createLinearGradient(0, 0, Kl.defaultTextureSize, 1);
            for(let _ = 0; _ < e.length; _++){
                const g = e[_];
                n.addColorStop(g.offset, g.color);
            }
            s.fillStyle = n, s.fillRect(0, 0, t, t), this.texture = new P({
                source: new pe({
                    resource: i,
                    addressModeU: "clamp-to-edge",
                    addressModeV: "repeat"
                })
            });
            const { x0: o, y0: a, x1: l, y1: u } = this, c = new B, h = l - o, p = u - a, f = Math.sqrt(h * h + p * p), m = Math.atan2(p, h);
            c.translate(-o, -a), c.scale(1 / t, 1 / t), c.rotate(-m), c.scale(256 / f, 1), this.transform = c;
        }
    };
    ph.defaultTextureSize = 256;
    let Ri = ph;
    const fh = {
        repeat: {
            addressModeU: "repeat",
            addressModeV: "repeat"
        },
        "repeat-x": {
            addressModeU: "repeat",
            addressModeV: "clamp-to-edge"
        },
        "repeat-y": {
            addressModeU: "clamp-to-edge",
            addressModeV: "repeat"
        },
        "no-repeat": {
            addressModeU: "clamp-to-edge",
            addressModeV: "clamp-to-edge"
        }
    };
    class Jn {
        constructor(t, e){
            this.uid = Q("fillPattern"), this.transform = new B, this.texture = t, this.transform.scale(1 / t.frame.width, 1 / t.frame.height), e && (t.source.style.addressModeU = fh[e].addressModeU, t.source.style.addressModeV = fh[e].addressModeV);
        }
        setTransform(t) {
            const e = this.texture;
            this.transform.copyFrom(t), this.transform.invert(), this.transform.scale(1 / e.frame.width, 1 / e.frame.height);
        }
    }
    function _r(r1, t) {
        if (r1.texture === P.WHITE && !r1.fill) return Y.shared.setValue(r1.color).toHex();
        if (r1.fill) {
            if (r1.fill instanceof Jn) {
                const e = r1.fill, i = t.createPattern(e.texture.source.resource, "repeat"), s = e.transform.copyTo(B.shared);
                return s.scale(e.texture.frame.width, e.texture.frame.height), i.setTransform(s), i;
            } else if (r1.fill instanceof Ri) {
                const e = r1.fill;
                if (e.type === "linear") {
                    const i = t.createLinearGradient(e.x0, e.y0, e.x1, e.y1);
                    return e.gradientStops.forEach((s)=>{
                        i.addColorStop(s.offset, Y.shared.setValue(s.color).toHex());
                    }), i;
                }
            }
        } else {
            const e = t.createPattern(r1.texture.source.resource, "repeat"), i = r1.matrix.copyTo(B.shared);
            return i.scale(r1.texture.frame.width, r1.texture.frame.height), e.setTransform(i), e;
        }
        return "red";
    }
    class to {
        constructor(){
            this._activeTextures = {};
        }
        getTextureSize(t, e, i) {
            const s = Ft.measureText(t || " ", i);
            let n = Math.ceil(Math.ceil(Math.max(1, s.width) + i.padding * 2) * e), o = Math.ceil(Math.ceil(Math.max(1, s.height) + i.padding * 2) * e);
            return n = Math.ceil(n - 1e-6), o = Math.ceil(o - 1e-6), n = de(n), o = de(o), {
                width: n,
                height: o
            };
        }
        getTexture(t, e, i, s) {
            if (this._activeTextures[s]) return this._increaseReferenceCount(s), this._activeTextures[s].texture;
            const n = Ft.measureText(t || " ", i), o = Math.ceil(Math.ceil(Math.max(1, n.width) + i.padding * 2) * e), a = Math.ceil(Math.ceil(Math.max(1, n.height) + i.padding * 2) * e), l = Vt.getOptimalCanvasAndContext(o, a), { canvas: u } = l;
            this.renderTextToCanvas(t, i, e, l);
            const c = Zn(u, o, a, e);
            if (i.trim) {
                const h = dh(u, e);
                c.frame.copyFrom(h), c.updateUvs();
            }
            return this._activeTextures[s] = {
                canvasAndContext: l,
                texture: c,
                usageCount: 1
            }, c;
        }
        _increaseReferenceCount(t) {
            this._activeTextures[t].usageCount++;
        }
        decreaseReferenceCount(t) {
            const e = this._activeTextures[t];
            if (e.usageCount--, e.usageCount === 0) {
                Vt.returnCanvasAndContext(e.canvasAndContext), ct.returnTexture(e.texture);
                const i = e.texture.source;
                i.resource = null, i.uploadMethodId = "unknown", i.alphaMode = "no-premultiply-alpha", this._activeTextures[t] = null;
            }
        }
        getReferenceCount(t) {
            return this._activeTextures[t].usageCount;
        }
        renderTextToCanvas(t, e, i, s) {
            var n, o, a, l, u, c;
            const { canvas: h, context: p } = s, f = gr(e), m = Ft.measureText(t || " ", e), _ = m.lines, g = m.lineHeight, b = m.lineWidths, v = m.maxLineWidth, y = m.fontProperties, T = h.height;
            if (p.resetTransform(), p.scale(i, i), p.clearRect(0, 0, m.width + 4, m.height + 4), (n = e._stroke) != null && n.width) {
                const w = e._stroke;
                p.lineWidth = w.width, p.miterLimit = w.miterLimit, p.lineJoin = w.join, p.lineCap = w.cap;
            }
            p.font = f;
            let E, R;
            const M = e.dropShadow ? 2 : 1;
            for(let w = 0; w < M; ++w){
                const S = e.dropShadow && w === 0, A = S ? Math.ceil(Math.max(1, T) + e.padding * 2) : 0, H = A * i;
                if (S) {
                    p.fillStyle = "black", p.strokeStyle = "black";
                    const C = e.dropShadow, Z = C.color, et = C.alpha;
                    p.shadowColor = Y.shared.setValue(Z).setAlpha(et).toRgbaString();
                    const St = C.blur * i, Xr = C.distance * i;
                    p.shadowBlur = St, p.shadowOffsetX = Math.cos(C.angle) * Xr, p.shadowOffsetY = Math.sin(C.angle) * Xr + H;
                } else p.globalAlpha = (a = (o = e._fill) == null ? void 0 : o.alpha) != null ? a : 1, p.fillStyle = e._fill ? _r(e._fill, p) : null, (l = e._stroke) != null && l.width && (p.strokeStyle = _r(e._stroke, p)), p.shadowColor = "black";
                let L = (g - y.fontSize) / 2;
                g - y.fontSize < 0 && (L = 0);
                const G = (c = (u = e._stroke) == null ? void 0 : u.width) != null ? c : 0;
                for(let C = 0; C < _.length; C++)E = G / 2, R = G / 2 + C * g + y.ascent + L, e.align === "right" ? E += v - b[C] : e.align === "center" && (E += (v - b[C]) / 2), e._stroke && this._drawLetterSpacing(_[C], e, s, E + e.padding, R + e.padding - A, !0), e._fill !== void 0 && this._drawLetterSpacing(_[C], e, s, E + e.padding, R + e.padding - A);
            }
        }
        _drawLetterSpacing(t, e, i, s, n, o = !1) {
            const { context: a } = i, l = e.letterSpacing;
            let u = !1;
            if (Ft.experimentalLetterSpacingSupported && (Ft.experimentalLetterSpacing ? (a.letterSpacing = `${l}px`, a.textLetterSpacing = `${l}px`, u = !0) : (a.letterSpacing = "0px", a.textLetterSpacing = "0px")), l === 0 || u) {
                o ? a.strokeText(t, s, n) : a.fillText(t, s, n);
                return;
            }
            let c = s;
            const h = Ft.graphemeSegmenter(t);
            let p = a.measureText(t).width, f = 0;
            for(let m = 0; m < h.length; ++m){
                const _ = h[m];
                o ? a.strokeText(_, c, n) : a.fillText(_, c, n);
                let g = "";
                for(let b = m + 1; b < h.length; ++b)g += h[b];
                f = a.measureText(g).width, c += p - f + l, p = f;
            }
        }
        destroy() {
            this._activeTextures = null;
        }
    }
    to.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "canvasText"
    }, U.add(to), U.add(qn);
    class eo extends dt {
        constructor(){
            super(...arguments), this.chars = Object.create(null), this.lineHeight = 0, this.fontFamily = "", this.fontMetrics = {
                fontSize: 0,
                ascent: 0,
                descent: 0
            }, this.baseLineOffset = 0, this.distanceField = {
                type: "none",
                range: 0
            }, this.pages = [], this.baseMeasurementFontSize = 100, this.baseRenderedFontSize = 100;
        }
        get font() {
            return this.fontFamily;
        }
        get pageTextures() {
            return this.pages;
        }
        get size() {
            return this.fontMetrics.fontSize;
        }
        get distanceFieldRange() {
            return this.distanceField.range;
        }
        get distanceFieldType() {
            return this.distanceField.type;
        }
        destroy(t = !1) {
            this.emit("destroy", this), this.removeAllListeners();
            for(const e in this.chars)this.chars[e].texture.destroy();
            this.chars = null, t && (this.pages.forEach((e)=>e.texture.destroy(!0)), this.pages = null);
        }
    }
    var nx = ax, ro = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
    }, ox = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
    function ax(r1) {
        var t = [];
        return r1.replace(ox, function(e, i, s) {
            var n = i.toLowerCase();
            for(s = ux(s), n == "m" && s.length > 2 && (t.push([
                i
            ].concat(s.splice(0, 2))), n = "l", i = i == "m" ? "l" : "L");;){
                if (s.length == ro[n]) return s.unshift(i), t.push(s);
                if (s.length < ro[n]) throw new Error("malformed path data");
                t.push([
                    i
                ].concat(s.splice(0, ro[n])));
            }
        }), t;
    }
    var lx = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
    function ux(r1) {
        var t = r1.match(lx);
        return t ? t.map(Number) : [];
    }
    var cx = ks(nx);
    function mh(r1, t) {
        const e = cx(r1), i = [];
        let s = null, n = 0, o = 0;
        for(let a = 0; a < e.length; a++){
            const l = e[a], u = l[0], c = l;
            switch(u){
                case "M":
                    n = c[1], o = c[2], t.moveTo(n, o);
                    break;
                case "m":
                    n += c[1], o += c[2], t.moveTo(n, o);
                    break;
                case "H":
                    n = c[1], t.lineTo(n, o);
                    break;
                case "h":
                    n += c[1], t.lineTo(n, o);
                    break;
                case "V":
                    o = c[1], t.lineTo(n, o);
                    break;
                case "v":
                    o += c[1], t.lineTo(n, o);
                    break;
                case "L":
                    n = c[1], o = c[2], t.lineTo(n, o);
                    break;
                case "l":
                    n += c[1], o += c[2], t.lineTo(n, o);
                    break;
                case "C":
                    n = c[5], o = c[6], t.bezierCurveTo(c[1], c[2], c[3], c[4], n, o);
                    break;
                case "c":
                    t.bezierCurveTo(n + c[1], o + c[2], n + c[3], o + c[4], n + c[5], o + c[6]), n += c[5], o += c[6];
                    break;
                case "S":
                    n = c[3], o = c[4], t.bezierCurveToShort(c[1], c[2], n, o);
                    break;
                case "s":
                    t.bezierCurveToShort(n + c[1], o + c[2], n + c[3], o + c[4]), n += c[3], o += c[4];
                    break;
                case "Q":
                    n = c[3], o = c[4], t.quadraticCurveTo(c[1], c[2], n, o);
                    break;
                case "q":
                    t.quadraticCurveTo(n + c[1], o + c[2], n + c[3], o + c[4]), n += c[3], o += c[4];
                    break;
                case "T":
                    n = c[1], o = c[2], t.quadraticCurveToShort(n, o);
                    break;
                case "t":
                    n += c[1], o += c[2], t.quadraticCurveToShort(n, o);
                    break;
                case "A":
                    n = c[6], o = c[7], t.arcToSvg(c[1], c[2], c[3], c[4], c[5], n, o);
                    break;
                case "a":
                    n += c[6], o += c[7], t.arcToSvg(c[1], c[2], c[3], c[4], c[5], n, o);
                    break;
                case "Z":
                case "z":
                    t.closePath(), i.length > 0 && (s = i.pop(), s ? (n = s.startX, o = s.startY) : (n = 0, o = 0)), s = null;
                    break;
                default:
            }
            u !== "Z" && u !== "z" && s === null && (s = {
                startX: n,
                startY: o
            }, i.push(s));
        }
        return t;
    }
    class wi {
        constructor(t = 0, e = 0, i = 0){
            this.type = "circle", this.x = t, this.y = e, this.radius = i;
        }
        clone() {
            return new wi(this.x, this.y, this.radius);
        }
        contains(t, e) {
            if (this.radius <= 0) return !1;
            const i = this.radius * this.radius;
            let s = this.x - t, n = this.y - e;
            return s *= s, n *= n, s + n <= i;
        }
        strokeContains(t, e, i) {
            if (this.radius === 0) return !1;
            const s = this.x - t, n = this.y - e, o = this.radius, a = i / 2, l = Math.sqrt(s * s + n * n);
            return l < o + a && l > o - a;
        }
        getBounds(t) {
            return t = t || new j, t.x = this.x - this.radius, t.y = this.y - this.radius, t.width = this.radius * 2, t.height = this.radius * 2, t;
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.radius = t.radius, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
    }
    class Mi {
        constructor(t = 0, e = 0, i = 0, s = 0){
            this.type = "ellipse", this.x = t, this.y = e, this.halfWidth = i, this.halfHeight = s;
        }
        clone() {
            return new Mi(this.x, this.y, this.halfWidth, this.halfHeight);
        }
        contains(t, e) {
            if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1;
            let i = (t - this.x) / this.halfWidth, s = (e - this.y) / this.halfHeight;
            return i *= i, s *= s, i + s <= 1;
        }
        strokeContains(t, e, i) {
            const { halfWidth: s, halfHeight: n } = this;
            if (s <= 0 || n <= 0) return !1;
            const o = i / 2, a = s - o, l = n - o, u = s + o, c = n + o, h = t - this.x, p = e - this.y, f = h * h / (a * a) + p * p / (l * l), m = h * h / (u * u) + p * p / (c * c);
            return f > 1 && m <= 1;
        }
        getBounds() {
            return new j(this.x - this.halfWidth, this.y - this.halfHeight, this.halfWidth * 2, this.halfHeight * 2);
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.halfWidth = t.halfWidth, this.halfHeight = t.halfHeight, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
    }
    function br(r1, t, e, i, s, n) {
        const o = r1 - e, a = t - i, l = s - e, u = n - i, c = o * l + a * u, h = l * l + u * u;
        let p = -1;
        h !== 0 && (p = c / h);
        let f, m;
        p < 0 ? (f = e, m = i) : p > 1 ? (f = s, m = n) : (f = e + p * l, m = i + p * u);
        const _ = r1 - f, g = t - m;
        return _ * _ + g * g;
    }
    class _e {
        constructor(...t){
            this.type = "polygon";
            let e = Array.isArray(t[0]) ? t[0] : t;
            if (typeof e[0] != "number") {
                const i = [];
                for(let s = 0, n = e.length; s < n; s++)i.push(e[s].x, e[s].y);
                e = i;
            }
            this.points = e, this.closePath = !0;
        }
        clone() {
            const t = this.points.slice(), e = new _e(t);
            return e.closePath = this.closePath, e;
        }
        contains(t, e) {
            let i = !1;
            const s = this.points.length / 2;
            for(let n = 0, o = s - 1; n < s; o = n++){
                const a = this.points[n * 2], l = this.points[n * 2 + 1], u = this.points[o * 2], c = this.points[o * 2 + 1];
                l > e != c > e && t < (u - a) * ((e - l) / (c - l)) + a && (i = !i);
            }
            return i;
        }
        strokeContains(t, e, i) {
            const s = i / 2, n = s * s, { points: o } = this;
            for(let a = 0; a < o.length; a += 2){
                const l = o[a], u = o[a + 1], c = o[(a + 2) % o.length], h = o[(a + 3) % o.length];
                if (br(t, e, l, u, c, h) <= n) return !0;
            }
            return !1;
        }
        getBounds(t) {
            t = t || new j;
            const e = this.points;
            let i = 1 / 0, s = -1 / 0, n = 1 / 0, o = -1 / 0;
            for(let a = 0, l = e.length; a < l; a += 2){
                const u = e[a], c = e[a + 1];
                i = u < i ? u : i, s = u > s ? u : s, n = c < n ? c : n, o = c > o ? c : o;
            }
            return t.x = i, t.width = s - i, t.y = n, t.height = o - n, t;
        }
        copyFrom(t) {
            return this.points = t.points.slice(), this.closePath = t.closePath, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        get lastX() {
            return this.points[this.points.length - 2];
        }
        get lastY() {
            return this.points[this.points.length - 1];
        }
        get x() {
            return this.points[this.points.length - 2];
        }
        get y() {
            return this.points[this.points.length - 1];
        }
    }
    const Ci = (r1, t, e, i, s, n)=>{
        const o = r1 - e, a = t - i, l = Math.sqrt(o * o + a * a);
        return l >= s - n && l <= s + n;
    };
    class Oi {
        constructor(t = 0, e = 0, i = 0, s = 0, n = 20){
            this.type = "roundedRectangle", this.x = t, this.y = e, this.width = i, this.height = s, this.radius = n;
        }
        getBounds(t) {
            return t = t || new j, t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
        }
        clone() {
            return new Oi(this.x, this.y, this.width, this.height, this.radius);
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        contains(t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                const i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                if (e >= this.y + i && e <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i) return !0;
                let s = t - (this.x + i), n = e - (this.y + i);
                const o = i * i;
                if (s * s + n * n <= o || (s = t - (this.x + this.width - i), s * s + n * n <= o) || (n = e - (this.y + this.height - i), s * s + n * n <= o) || (s = t - (this.x + i), s * s + n * n <= o)) return !0;
            }
            return !1;
        }
        strokeContains(t, e, i) {
            const { x: s, y: n, width: o, height: a, radius: l } = this, u = i / 2, c = s + l, h = n + l, p = o - l * 2, f = a - l * 2, m = s + o, _ = n + a;
            return (t >= s - u && t <= s + u || t >= m - u && t <= m + u) && e >= h && e <= h + f || (e >= n - u && e <= n + u || e >= _ - u && e <= _ + u) && t >= c && t <= c + p ? !0 : t < c && e < h && Ci(t, e, c, h, l, u) || t > m - l && e < h && Ci(t, e, m - l, h, l, u) || t > m - l && e > _ - l && Ci(t, e, m - l, _ - l, l, u) || t < c && e > _ - l && Ci(t, e, c, _ - l, l, u);
        }
    }
    const hx = 8, Gi = 11920929e-14, dx = 1, io = .01, Fe = 0, be = 0;
    function so(r1, t, e, i, s, n, o, a, l, u) {
        const c = Math.min(.99, Math.max(0, u != null ? u : Ei.defaultOptions.bezierSmoothness));
        let h = (dx - c) / 1;
        return h *= h, px(t, e, i, s, n, o, a, l, r1, h), r1;
    }
    function px(r1, t, e, i, s, n, o, a, l, u) {
        no(r1, t, e, i, s, n, o, a, l, u, 0), l.push(o, a);
    }
    function no(r1, t, e, i, s, n, o, a, l, u, c) {
        if (c > hx) return;
        const h = Math.PI, p = (r1 + e) / 2, f = (t + i) / 2, m = (e + s) / 2, _ = (i + n) / 2, g = (s + o) / 2, b = (n + a) / 2, v = (p + m) / 2, y = (f + _) / 2, T = (m + g) / 2, E = (_ + b) / 2, R = (v + T) / 2, M = (y + E) / 2;
        if (c > 0) {
            let w = o - r1, S = a - t;
            const A = Math.abs((e - o) * S - (i - a) * w), H = Math.abs((s - o) * S - (n - a) * w);
            let L, G;
            if (A > Gi && H > Gi) {
                if ((A + H) * (A + H) <= u * (w * w + S * S)) {
                    if (Fe < io) {
                        l.push(R, M);
                        return;
                    }
                    const C = Math.atan2(n - i, s - e);
                    if (L = Math.abs(C - Math.atan2(i - t, e - r1)), G = Math.abs(Math.atan2(a - n, o - s) - C), L >= h && (L = 2 * h - L), G >= h && (G = 2 * h - G), L + G < Fe) {
                        l.push(R, M);
                        return;
                    }
                    if (be !== 0) {
                        if (L > be) {
                            l.push(e, i);
                            return;
                        }
                        if (G > be) {
                            l.push(s, n);
                            return;
                        }
                    }
                }
            } else if (A > Gi) {
                if (A * A <= u * (w * w + S * S)) {
                    if (Fe < io) {
                        l.push(R, M);
                        return;
                    }
                    if (L = Math.abs(Math.atan2(n - i, s - e) - Math.atan2(i - t, e - r1)), L >= h && (L = 2 * h - L), L < Fe) {
                        l.push(e, i), l.push(s, n);
                        return;
                    }
                    if (be !== 0 && L > be) {
                        l.push(e, i);
                        return;
                    }
                }
            } else if (H > Gi) {
                if (H * H <= u * (w * w + S * S)) {
                    if (Fe < io) {
                        l.push(R, M);
                        return;
                    }
                    if (L = Math.abs(Math.atan2(a - n, o - s) - Math.atan2(n - i, s - e)), L >= h && (L = 2 * h - L), L < Fe) {
                        l.push(e, i), l.push(s, n);
                        return;
                    }
                    if (be !== 0 && L > be) {
                        l.push(s, n);
                        return;
                    }
                }
            } else if (w = R - (r1 + o) / 2, S = M - (t + a) / 2, w * w + S * S <= u) {
                l.push(R, M);
                return;
            }
        }
        no(r1, t, p, f, v, y, R, M, l, u, c + 1), no(R, M, T, E, g, b, o, a, l, u, c + 1);
    }
    const fx = 8, mx = 11920929e-14, gx = 1, _x = .01, gh = 0;
    function _h(r1, t, e, i, s, n, o, a) {
        const l = Math.min(.99, Math.max(0, a != null ? a : Ei.defaultOptions.bezierSmoothness));
        let u = (gx - l) / 1;
        return u *= u, bx(t, e, i, s, n, o, r1, u), r1;
    }
    function bx(r1, t, e, i, s, n, o, a) {
        oo(o, r1, t, e, i, s, n, a, 0), o.push(s, n);
    }
    function oo(r1, t, e, i, s, n, o, a, l) {
        if (l > fx) return;
        const u = Math.PI, c = (t + i) / 2, h = (e + s) / 2, p = (i + n) / 2, f = (s + o) / 2, m = (c + p) / 2, _ = (h + f) / 2;
        let g = n - t, b = o - e;
        const v = Math.abs((i - n) * b - (s - o) * g);
        if (v > mx) {
            if (v * v <= a * (g * g + b * b)) {
                if (gh < _x) {
                    r1.push(m, _);
                    return;
                }
                let y = Math.abs(Math.atan2(o - s, n - i) - Math.atan2(s - e, i - t));
                if (y >= u && (y = 2 * u - y), y < gh) {
                    r1.push(m, _);
                    return;
                }
            }
        } else if (g = m - (t + n) / 2, b = _ - (e + o) / 2, g * g + b * b <= a) {
            r1.push(m, _);
            return;
        }
        oo(r1, t, e, c, h, m, _, a, l + 1), oo(r1, m, _, p, f, n, o, a, l + 1);
    }
    function ao(r1, t, e, i, s, n, o, a) {
        let l = Math.abs(s - n);
        (!o && s > n || o && n > s) && (l = 2 * Math.PI - l), a = a || Math.max(6, Math.floor(6 * Math.pow(i, .3333333333333333) * (l / Math.PI))), a = Math.max(a, 3);
        let u = l / a, c = s;
        u *= o ? -1 : 1;
        for(let h = 0; h < a + 1; h++){
            const p = Math.cos(c), f = Math.sin(c), m = t + p * i, _ = e + f * i;
            r1.push(m, _), c += u;
        }
    }
    function bh(r1, t, e, i, s, n) {
        const o = r1[r1.length - 2], a = r1[r1.length - 1] - e, l = o - t, u = s - e, c = i - t, h = Math.abs(a * c - l * u);
        if (h < 1e-8 || n === 0) {
            (r1[r1.length - 2] !== t || r1[r1.length - 1] !== e) && r1.push(t, e);
            return;
        }
        const p = a * a + l * l, f = u * u + c * c, m = a * u + l * c, _ = n * Math.sqrt(p) / h, g = n * Math.sqrt(f) / h, b = _ * m / p, v = g * m / f, y = _ * c + g * l, T = _ * u + g * a, E = l * (g + b), R = a * (g + b), M = c * (_ + v), w = u * (_ + v), S = Math.atan2(R - T, E - y), A = Math.atan2(w - T, M - y);
        ao(r1, y + t, T + e, n, S, A, l * u > c * a);
    }
    const vr = Math.PI * 2, lo = {
        centerX: 0,
        centerY: 0,
        ang1: 0,
        ang2: 0
    }, uo = ({ x: r1, y: t }, e, i, s, n, o, a, l)=>{
        r1 *= e, t *= i;
        const u = s * r1 - n * t, c = n * r1 + s * t;
        return l.x = u + o, l.y = c + a, l;
    };
    function vx(r1, t) {
        const e = t === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(t / 4), i = t === 1.5707963267948966 ? .551915024494 : e, s = Math.cos(r1), n = Math.sin(r1), o = Math.cos(r1 + t), a = Math.sin(r1 + t);
        return [
            {
                x: s - n * i,
                y: n + s * i
            },
            {
                x: o + a * i,
                y: a - o * i
            },
            {
                x: o,
                y: a
            }
        ];
    }
    const vh = (r1, t, e, i)=>{
        const s = r1 * i - t * e < 0 ? -1 : 1;
        let n = r1 * e + t * i;
        return n > 1 && (n = 1), n < -1 && (n = -1), s * Math.acos(n);
    }, yx = (r1, t, e, i, s, n, o, a, l, u, c, h, p)=>{
        const f = Math.pow(s, 2), m = Math.pow(n, 2), _ = Math.pow(c, 2), g = Math.pow(h, 2);
        let b = f * m - f * g - m * _;
        b < 0 && (b = 0), b /= f * g + m * _, b = Math.sqrt(b) * (o === a ? -1 : 1);
        const v = b * s / n * h, y = b * -n / s * c, T = u * v - l * y + (r1 + e) / 2, E = l * v + u * y + (t + i) / 2, R = (c - v) / s, M = (h - y) / n, w = (-c - v) / s, S = (-h - y) / n, A = vh(1, 0, R, M);
        let H = vh(R, M, w, S);
        a === 0 && H > 0 && (H -= vr), a === 1 && H < 0 && (H += vr), p.centerX = T, p.centerY = E, p.ang1 = A, p.ang2 = H;
    };
    function yh(r1, t, e, i, s, n, o, a = 0, l = 0, u = 0) {
        if (n === 0 || o === 0) return;
        const c = Math.sin(a * vr / 360), h = Math.cos(a * vr / 360), p = h * (t - i) / 2 + c * (e - s) / 2, f = -c * (t - i) / 2 + h * (e - s) / 2;
        if (p === 0 && f === 0) return;
        n = Math.abs(n), o = Math.abs(o);
        const m = Math.pow(p, 2) / Math.pow(n, 2) + Math.pow(f, 2) / Math.pow(o, 2);
        m > 1 && (n *= Math.sqrt(m), o *= Math.sqrt(m)), yx(t, e, i, s, n, o, l, u, c, h, p, f, lo);
        let { ang1: _, ang2: g } = lo;
        const { centerX: b, centerY: v } = lo;
        let y = Math.abs(g) / (vr / 4);
        Math.abs(1 - y) < 1e-7 && (y = 1);
        const T = Math.max(Math.ceil(y), 1);
        g /= T;
        let E = r1[r1.length - 2], R = r1[r1.length - 1];
        const M = {
            x: 0,
            y: 0
        };
        for(let w = 0; w < T; w++){
            const S = vx(_, g), { x: A, y: H } = uo(S[0], n, o, h, c, b, v, M), { x: L, y: G } = uo(S[1], n, o, h, c, b, v, M), { x: C, y: Z } = uo(S[2], n, o, h, c, b, v, M);
            so(r1, E, R, A, H, L, G, C, Z), E = C, R = Z, _ += g;
        }
    }
    function xh(r1, t, e) {
        var i;
        const s = (a, l)=>{
            const u = l.x - a.x, c = l.y - a.y, h = Math.sqrt(u * u + c * c), p = u / h, f = c / h;
            return {
                len: h,
                nx: p,
                ny: f
            };
        }, n = (a, l)=>{
            a === 0 ? r1.moveTo(l.x, l.y) : r1.lineTo(l.x, l.y);
        };
        let o = t[t.length - 1];
        for(let a = 0; a < t.length; a++){
            const l = t[a % t.length], u = (i = l.radius) != null ? i : e;
            if (u <= 0) {
                n(a, l), o = l;
                continue;
            }
            const c = t[(a + 1) % t.length], h = s(l, o), p = s(l, c);
            if (h.len < 1e-4 || p.len < 1e-4) {
                n(a, l), o = l;
                continue;
            }
            let f = Math.asin(h.nx * p.ny - h.ny * p.nx), m = 1, _ = !1;
            h.nx * p.nx - h.ny * -p.ny < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, m = -1, _ = !0) : f > 0 && (m = -1, _ = !0);
            const g = f / 2;
            let b, v = Math.abs(Math.cos(g) * u / Math.sin(g));
            v > Math.min(h.len / 2, p.len / 2) ? (v = Math.min(h.len / 2, p.len / 2), b = Math.abs(v * Math.sin(g) / Math.cos(g))) : b = u;
            const y = l.x + p.nx * v + -p.ny * b * m, T = l.y + p.ny * v + p.nx * b * m, E = Math.atan2(h.ny, h.nx) + Math.PI / 2 * m, R = Math.atan2(p.ny, p.nx) - Math.PI / 2 * m;
            a === 0 && r1.moveTo(y + Math.cos(E) * b, T + Math.sin(E) * b), r1.arc(y, T, b, E, R, _), o = l;
        }
    }
    function Th(r1, t, e, i) {
        var s;
        const n = (l, u)=>Math.sqrt((l.x - u.x) ** 2 + (l.y - u.y) ** 2), o = (l, u, c)=>({
                x: l.x + (u.x - l.x) * c,
                y: l.y + (u.y - l.y) * c
            }), a = t.length;
        for(let l = 0; l < a; l++){
            const u = t[(l + 1) % a], c = (s = u.radius) != null ? s : e;
            if (c <= 0) {
                l === 0 ? r1.moveTo(u.x, u.y) : r1.lineTo(u.x, u.y);
                continue;
            }
            const h = t[l], p = t[(l + 2) % a], f = n(h, u);
            let m;
            if (f < 1e-4) m = u;
            else {
                const b = Math.min(f / 2, c);
                m = o(u, h, b / f);
            }
            const _ = n(p, u);
            let g;
            if (_ < 1e-4) g = u;
            else {
                const b = Math.min(_ / 2, c);
                g = o(u, p, b / _);
            }
            l === 0 ? r1.moveTo(m.x, m.y) : r1.lineTo(m.x, m.y), r1.quadraticCurveTo(u.x, u.y, g.x, g.y, i);
        }
    }
    const xx = new j;
    class Sh {
        constructor(t){
            this.shapePrimitives = [], this._currentPoly = null, this._bounds = new ut, this._graphicsPath2D = t;
        }
        moveTo(t, e) {
            return this.startPoly(t, e), this;
        }
        lineTo(t, e) {
            this._ensurePoly();
            const i = this._currentPoly.points, s = i[i.length - 2], n = i[i.length - 1];
            return (s !== t || n !== e) && i.push(t, e), this;
        }
        arc(t, e, i, s, n, o) {
            this._ensurePoly(!1);
            const a = this._currentPoly.points;
            return ao(a, t, e, i, s, n, o), this;
        }
        arcTo(t, e, i, s, n) {
            this._ensurePoly();
            const o = this._currentPoly.points;
            return bh(o, t, e, i, s, n), this;
        }
        arcToSvg(t, e, i, s, n, o, a) {
            const l = this._currentPoly.points;
            return yh(l, this._currentPoly.lastX, this._currentPoly.lastY, o, a, t, e, i, s, n), this;
        }
        bezierCurveTo(t, e, i, s, n, o, a) {
            this._ensurePoly();
            const l = this._currentPoly;
            return so(this._currentPoly.points, l.lastX, l.lastY, t, e, i, s, n, o, a), this;
        }
        quadraticCurveTo(t, e, i, s, n) {
            this._ensurePoly();
            const o = this._currentPoly;
            return _h(this._currentPoly.points, o.lastX, o.lastY, t, e, i, s, n), this;
        }
        closePath() {
            return this.endPoly(!0), this;
        }
        addPath(t, e) {
            this.endPoly(), e && !e.isIdentity() && (t = t.clone(!0), t.transform(e));
            for(let i = 0; i < t.instructions.length; i++){
                const s = t.instructions[i];
                this[s.action](...s.data);
            }
            return this;
        }
        finish(t = !1) {
            this.endPoly(t);
        }
        rect(t, e, i, s, n) {
            return this.drawShape(new j(t, e, i, s), n), this;
        }
        circle(t, e, i, s) {
            return this.drawShape(new wi(t, e, i), s), this;
        }
        poly(t, e, i) {
            const s = new _e(t);
            return s.closePath = e, this.drawShape(s, i), this;
        }
        regularPoly(t, e, i, s, n = 0, o) {
            s = Math.max(s | 0, 3);
            const a = -1 * Math.PI / 2 + n, l = Math.PI * 2 / s, u = [];
            for(let c = 0; c < s; c++){
                const h = c * l + a;
                u.push(t + i * Math.cos(h), e + i * Math.sin(h));
            }
            return this.poly(u, !0, o), this;
        }
        roundPoly(t, e, i, s, n, o = 0, a) {
            if (s = Math.max(s | 0, 3), n <= 0) return this.regularPoly(t, e, i, s, o);
            const l = i * Math.sin(Math.PI / s) - .001;
            n = Math.min(n, l);
            const u = -1 * Math.PI / 2 + o, c = Math.PI * 2 / s, h = (s - 2) * Math.PI / s / 2;
            for(let p = 0; p < s; p++){
                const f = p * c + u, m = t + i * Math.cos(f), _ = e + i * Math.sin(f), g = f + Math.PI + h, b = f - Math.PI - h, v = m + n * Math.cos(g), y = _ + n * Math.sin(g), T = m + n * Math.cos(b), E = _ + n * Math.sin(b);
                p === 0 ? this.moveTo(v, y) : this.lineTo(v, y), this.quadraticCurveTo(m, _, T, E, a);
            }
            return this.closePath();
        }
        roundShape(t, e, i = !1, s) {
            return t.length < 3 ? this : (i ? Th(this, t, e, s) : xh(this, t, e), this.closePath());
        }
        filletRect(t, e, i, s, n) {
            if (n === 0) return this.rect(t, e, i, s);
            const o = Math.min(i, s) / 2, a = Math.min(o, Math.max(-o, n)), l = t + i, u = e + s, c = a < 0 ? -a : 0, h = Math.abs(a);
            return this.moveTo(t, e + h).arcTo(t + c, e + c, t + h, e, h).lineTo(l - h, e).arcTo(l - c, e + c, l, e + h, h).lineTo(l, u - h).arcTo(l - c, u - c, t + i - h, u, h).lineTo(t + h, u).arcTo(t + c, u - c, t, u - h, h).closePath();
        }
        chamferRect(t, e, i, s, n, o) {
            if (n <= 0) return this.rect(t, e, i, s);
            const a = Math.min(n, Math.min(i, s) / 2), l = t + i, u = e + s, c = [
                t + a,
                e,
                l - a,
                e,
                l,
                e + a,
                l,
                u - a,
                l - a,
                u,
                t + a,
                u,
                t,
                u - a,
                t,
                e + a
            ];
            for(let h = c.length - 1; h >= 2; h -= 2)c[h] === c[h - 2] && c[h - 1] === c[h - 3] && c.splice(h - 1, 2);
            return this.poly(c, !0, o);
        }
        ellipse(t, e, i, s, n) {
            return this.drawShape(new Mi(t, e, i, s), n), this;
        }
        roundRect(t, e, i, s, n, o) {
            return this.drawShape(new Oi(t, e, i, s, n), o), this;
        }
        drawShape(t, e) {
            return this.endPoly(), this.shapePrimitives.push({
                shape: t,
                transform: e
            }), this;
        }
        startPoly(t, e) {
            let i = this._currentPoly;
            return i && this.endPoly(), i = new _e, i.points.push(t, e), this._currentPoly = i, this;
        }
        endPoly(t = !1) {
            const e = this._currentPoly;
            return e && e.points.length > 2 && (e.closePath = t, this.shapePrimitives.push({
                shape: e
            })), this._currentPoly = null, this;
        }
        _ensurePoly(t = !0) {
            if (!this._currentPoly && (this._currentPoly = new _e, t)) {
                const e = this.shapePrimitives[this.shapePrimitives.length - 1];
                if (e) {
                    let i = e.shape.x, s = e.shape.y;
                    if (!e.transform.isIdentity()) {
                        const n = e.transform, o = i;
                        i = n.a * i + n.c * s + n.tx, s = n.b * o + n.d * s + n.ty;
                    }
                    this._currentPoly.points.push(i, s);
                } else this._currentPoly.points.push(0, 0);
            }
        }
        buildPath() {
            const t = this._graphicsPath2D;
            this.shapePrimitives.length = 0, this._currentPoly = null;
            for(let e = 0; e < t.instructions.length; e++){
                const i = t.instructions[e];
                this[i.action](...i.data);
            }
            this.finish();
        }
        get bounds() {
            const t = this._bounds;
            t.clear();
            const e = this.shapePrimitives;
            for(let i = 0; i < e.length; i++){
                const s = e[i], n = s.shape.getBounds(xx);
                s.transform ? t.addRect(n, s.transform) : t.addRect(n);
            }
            return t;
        }
    }
    class Jt {
        constructor(t){
            this.instructions = [], this.uid = Q("graphicsPath"), this._dirty = !0;
            var e;
            typeof t == "string" ? mh(t, this) : this.instructions = (e = t == null ? void 0 : t.slice()) != null ? e : [];
        }
        get shapePath() {
            return this._shapePath || (this._shapePath = new Sh(this)), this._dirty && (this._dirty = !1, this._shapePath.buildPath()), this._shapePath;
        }
        addPath(t, e) {
            return t = t.clone(), this.instructions.push({
                action: "addPath",
                data: [
                    t,
                    e
                ]
            }), this._dirty = !0, this;
        }
        arc(...t) {
            return this.instructions.push({
                action: "arc",
                data: t
            }), this._dirty = !0, this;
        }
        arcTo(...t) {
            return this.instructions.push({
                action: "arcTo",
                data: t
            }), this._dirty = !0, this;
        }
        arcToSvg(...t) {
            return this.instructions.push({
                action: "arcToSvg",
                data: t
            }), this._dirty = !0, this;
        }
        bezierCurveTo(...t) {
            return this.instructions.push({
                action: "bezierCurveTo",
                data: t
            }), this._dirty = !0, this;
        }
        bezierCurveToShort(t, e, i, s, n) {
            const o = this.instructions[this.instructions.length - 1], a = this.getLastPoint(V.shared);
            let l = 0, u = 0;
            if (!o || o.action !== "bezierCurveTo") l = a.x, u = a.y;
            else {
                l = o.data[2], u = o.data[3];
                const c = a.x, h = a.y;
                l = c + (c - l), u = h + (h - u);
            }
            return this.instructions.push({
                action: "bezierCurveTo",
                data: [
                    l,
                    u,
                    t,
                    e,
                    i,
                    s,
                    n
                ]
            }), this._dirty = !0, this;
        }
        closePath() {
            return this.instructions.push({
                action: "closePath",
                data: []
            }), this._dirty = !0, this;
        }
        ellipse(...t) {
            return this.instructions.push({
                action: "ellipse",
                data: t
            }), this._dirty = !0, this;
        }
        lineTo(...t) {
            return this.instructions.push({
                action: "lineTo",
                data: t
            }), this._dirty = !0, this;
        }
        moveTo(...t) {
            return this.instructions.push({
                action: "moveTo",
                data: t
            }), this;
        }
        quadraticCurveTo(...t) {
            return this.instructions.push({
                action: "quadraticCurveTo",
                data: t
            }), this._dirty = !0, this;
        }
        quadraticCurveToShort(t, e, i) {
            const s = this.instructions[this.instructions.length - 1], n = this.getLastPoint(V.shared);
            let o = 0, a = 0;
            if (!s || s.action !== "quadraticCurveTo") o = n.x, a = n.y;
            else {
                o = s.data[0], a = s.data[1];
                const l = n.x, u = n.y;
                o = l + (l - o), a = u + (u - a);
            }
            return this.instructions.push({
                action: "quadraticCurveTo",
                data: [
                    o,
                    a,
                    t,
                    e,
                    i
                ]
            }), this._dirty = !0, this;
        }
        rect(t, e, i, s, n) {
            return this.instructions.push({
                action: "rect",
                data: [
                    t,
                    e,
                    i,
                    s,
                    n
                ]
            }), this._dirty = !0, this;
        }
        circle(t, e, i, s) {
            return this.instructions.push({
                action: "circle",
                data: [
                    t,
                    e,
                    i,
                    s
                ]
            }), this._dirty = !0, this;
        }
        roundRect(...t) {
            return this.instructions.push({
                action: "roundRect",
                data: t
            }), this._dirty = !0, this;
        }
        poly(...t) {
            return this.instructions.push({
                action: "poly",
                data: t
            }), this._dirty = !0, this;
        }
        regularPoly(...t) {
            return this.instructions.push({
                action: "regularPoly",
                data: t
            }), this._dirty = !0, this;
        }
        roundPoly(...t) {
            return this.instructions.push({
                action: "roundPoly",
                data: t
            }), this._dirty = !0, this;
        }
        roundShape(...t) {
            return this.instructions.push({
                action: "roundShape",
                data: t
            }), this._dirty = !0, this;
        }
        filletRect(...t) {
            return this.instructions.push({
                action: "filletRect",
                data: t
            }), this._dirty = !0, this;
        }
        chamferRect(...t) {
            return this.instructions.push({
                action: "chamferRect",
                data: t
            }), this._dirty = !0, this;
        }
        star(t, e, i, s, n, o, a) {
            n = n || s / 2;
            const l = -1 * Math.PI / 2 + o, u = i * 2, c = Math.PI * 2 / u, h = [];
            for(let p = 0; p < u; p++){
                const f = p % 2 ? n : s, m = p * c + l;
                h.push(t + f * Math.cos(m), e + f * Math.sin(m));
            }
            return this.poly(h, !0, a), this;
        }
        clone(t = !1) {
            const e = new Jt;
            if (!t) e.instructions = this.instructions.slice();
            else for(let i = 0; i < this.instructions.length; i++){
                const s = this.instructions[i];
                e.instructions.push({
                    action: s.action,
                    data: s.data.slice()
                });
            }
            return e;
        }
        clear() {
            return this.instructions.length = 0, this._dirty = !0, this;
        }
        transform(t) {
            if (t.isIdentity()) return this;
            const e = t.a, i = t.b, s = t.c, n = t.d, o = t.tx, a = t.ty;
            let l = 0, u = 0, c = 0, h = 0, p = 0, f = 0, m = 0, _ = 0;
            for(let g = 0; g < this.instructions.length; g++){
                const b = this.instructions[g], v = b.data;
                switch(b.action){
                    case "moveTo":
                    case "lineTo":
                        l = v[0], u = v[1], v[0] = e * l + s * u + o, v[1] = i * l + n * u + a;
                        break;
                    case "bezierCurveTo":
                        c = v[0], h = v[1], p = v[2], f = v[3], l = v[4], u = v[5], v[0] = e * c + s * h + o, v[1] = i * c + n * h + a, v[2] = e * p + s * f + o, v[3] = i * p + n * f + a, v[4] = e * l + s * u + o, v[5] = i * l + n * u + a;
                        break;
                    case "quadraticCurveTo":
                        c = v[0], h = v[1], l = v[2], u = v[3], v[0] = e * c + s * h + o, v[1] = i * c + n * h + a, v[2] = e * l + s * u + o, v[3] = i * l + n * u + a;
                        break;
                    case "arcToSvg":
                        l = v[5], u = v[6], m = v[0], _ = v[1], v[0] = e * m + s * _, v[1] = i * m + n * _, v[5] = e * l + s * u + o, v[6] = i * l + n * u + a;
                        break;
                    case "circle":
                        v[4] = yr(v[3], t);
                        break;
                    case "rect":
                        v[4] = yr(v[4], t);
                        break;
                    case "ellipse":
                        v[8] = yr(v[8], t);
                        break;
                    case "roundRect":
                        v[5] = yr(v[5], t);
                        break;
                    case "addPath":
                        v[0].transform(t);
                        break;
                    case "poly":
                        v[2] = yr(v[2], t);
                        break;
                    default:
                        break;
                }
            }
            return this._dirty = !0, this;
        }
        get bounds() {
            return this.shapePath.bounds;
        }
        getLastPoint(t) {
            let e = this.instructions.length - 1, i = this.instructions[e];
            if (!i) return t.x = 0, t.y = 0, t;
            for(; i.action === "closePath";){
                if (e--, e < 0) return t.x = 0, t.y = 0, t;
                i = this.instructions[e];
            }
            switch(i.action){
                case "moveTo":
                case "lineTo":
                    t.x = i.data[0], t.y = i.data[1];
                    break;
                case "quadraticCurveTo":
                    t.x = i.data[2], t.y = i.data[3];
                    break;
                case "bezierCurveTo":
                    t.x = i.data[4], t.y = i.data[5];
                    break;
                case "arc":
                case "arcToSvg":
                    t.x = i.data[5], t.y = i.data[6];
                    break;
                case "addPath":
                    i.data[0].getLastPoint(t);
                    break;
            }
            return t;
        }
    }
    function yr(r1, t) {
        return r1 ? r1.prepend(t) : t.clone();
    }
    var Tx = Object.defineProperty, Eh = Object.getOwnPropertySymbols, Sx = Object.prototype.hasOwnProperty, Ex = Object.prototype.propertyIsEnumerable, Ah = (r1, t, e)=>t in r1 ? Tx(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Bi = (r1, t)=>{
        for(var e in t || (t = {}))Sx.call(t, e) && Ah(r1, e, t[e]);
        if (Eh) for (var e of Eh(t))Ex.call(t, e) && Ah(r1, e, t[e]);
        return r1;
    };
    function Ph(r1, t) {
        if (typeof r1 == "string") {
            const i = document.createElement("div");
            i.innerHTML = r1.trim(), r1 = i.querySelector("svg");
        }
        const e = {
            context: t,
            path: new Jt
        };
        return Rh(r1, e, null, null), t;
    }
    function Rh(r1, t, e, i) {
        const s = r1.children, { fillStyle: n, strokeStyle: o } = Ax(r1);
        n && e ? e = Bi(Bi({}, e), n) : n && (e = n), o && i ? i = Bi(Bi({}, i), o) : o && (i = o), t.context.fillStyle = e, t.context.strokeStyle = i;
        let a, l, u, c, h, p, f, m, _, g, b, v, y, T, E, R, M;
        switch(r1.nodeName.toLowerCase()){
            case "path":
                T = r1.getAttribute("d"), E = new Jt(T), t.context.path(E), e && t.context.fill(), i && t.context.stroke();
                break;
            case "circle":
                f = at(r1, "cx", 0), m = at(r1, "cy", 0), _ = at(r1, "r", 0), t.context.ellipse(f, m, _, _), e && t.context.fill(), i && t.context.stroke();
                break;
            case "rect":
                a = at(r1, "x", 0), l = at(r1, "y", 0), R = at(r1, "width", 0), M = at(r1, "height", 0), g = at(r1, "rx", 0), b = at(r1, "ry", 0), g || b ? t.context.roundRect(a, l, R, M, g || b) : t.context.rect(a, l, R, M), e && t.context.fill(), i && t.context.stroke();
                break;
            case "ellipse":
                f = at(r1, "cx", 0), m = at(r1, "cy", 0), g = at(r1, "rx", 0), b = at(r1, "ry", 0), t.context.beginPath(), t.context.ellipse(f, m, g, b), e && t.context.fill(), i && t.context.stroke();
                break;
            case "line":
                u = at(r1, "x1", 0), c = at(r1, "y1", 0), h = at(r1, "x2", 0), p = at(r1, "y2", 0), t.context.beginPath(), t.context.moveTo(u, c), t.context.lineTo(h, p), i && t.context.stroke();
                break;
            case "polygon":
                y = r1.getAttribute("points"), v = y.match(/\d+/g).map((w)=>parseInt(w, 10)), t.context.poly(v, !0), e && t.context.fill(), i && t.context.stroke();
                break;
            case "polyline":
                y = r1.getAttribute("points"), v = y.match(/\d+/g).map((w)=>parseInt(w, 10)), t.context.poly(v, !1), i && t.context.stroke();
                break;
            case "g":
            case "svg":
                break;
            default:
                console.info(`[SVG parser] <${r1.nodeName}> elements unsupported`);
                break;
        }
        for(let w = 0; w < s.length; w++)Rh(s[w], t, e, i);
    }
    function at(r1, t, e) {
        const i = r1.getAttribute(t);
        return i ? Number(i) : e;
    }
    function Ax(r1) {
        const t = r1.getAttribute("style"), e = {}, i = {};
        let s = !1, n = !1;
        if (t) {
            const o = t.split(";");
            for(let a = 0; a < o.length; a++){
                const l = o[a], [u, c] = l.split(":");
                switch(u){
                    case "stroke":
                        c !== "none" && (e.color = Y.shared.setValue(c).toNumber(), n = !0);
                        break;
                    case "stroke-width":
                        e.width = Number(c);
                        break;
                    case "fill":
                        c !== "none" && (s = !0, i.color = Y.shared.setValue(c).toNumber());
                        break;
                    case "fill-opacity":
                        i.alpha = Number(c);
                        break;
                    case "stroke-opacity":
                        e.alpha = Number(c);
                        break;
                    case "opacity":
                        i.alpha = Number(c), e.alpha = Number(c);
                        break;
                }
            }
        } else {
            const o = r1.getAttribute("stroke");
            o && o !== "none" && (n = !0, e.color = Y.shared.setValue(o).toNumber(), e.width = at(r1, "stroke-width", 1));
            const a = r1.getAttribute("fill");
            a && a !== "none" && (s = !0, i.color = Y.shared.setValue(a).toNumber());
        }
        return {
            strokeStyle: n ? e : null,
            fillStyle: s ? i : null
        };
    }
    var Px = Object.defineProperty, Rx = Object.defineProperties, wx = Object.getOwnPropertyDescriptors, wh = Object.getOwnPropertySymbols, Mx = Object.prototype.hasOwnProperty, Cx = Object.prototype.propertyIsEnumerable, Mh = (r1, t, e)=>t in r1 ? Px(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, ve = (r1, t)=>{
        for(var e in t || (t = {}))Mx.call(t, e) && Mh(r1, e, t[e]);
        if (wh) for (var e of wh(t))Cx.call(t, e) && Mh(r1, e, t[e]);
        return r1;
    }, co = (r1, t)=>Rx(r1, wx(t));
    function Wt(r1, t) {
        var e, i;
        if (r1 == null) return null;
        let s, n;
        if (r1 != null && r1.fill ? (n = r1.fill, s = ve(ve({}, t), r1)) : (n = r1, s = t), Y.isColorLike(n)) {
            const l = Y.shared.setValue(n != null ? n : 0);
            return co(ve({}, s), {
                color: l.toNumber(),
                alpha: l.alpha === 1 ? s.alpha : l.alpha,
                texture: P.WHITE
            });
        } else if (n instanceof Jn) {
            const l = n;
            return co(ve({}, s), {
                color: 16777215,
                texture: l.texture,
                matrix: l.transform,
                fill: (e = s.fill) != null ? e : null
            });
        } else if (n instanceof Ri) {
            const l = n;
            return l.buildLinearGradient(), co(ve({}, s), {
                color: 16777215,
                texture: l.texture,
                matrix: l.transform
            });
        }
        const o = ve(ve({}, t), r1);
        if (o.texture) {
            if (o.texture !== P.WHITE) {
                const u = ((i = o.matrix) == null ? void 0 : i.invert()) || new B;
                u.scale(1 / o.texture.frame.width, 1 / o.texture.frame.height), o.matrix = u;
            }
            const l = o.texture.source.style;
            l.addressMode === "clamp-to-edge" && (l.addressMode = "repeat");
        }
        const a = Y.shared.setValue(o.color);
        return o.alpha *= a.alpha, o.color = a.toNumber(), o.matrix = o.matrix ? o.matrix.clone() : null, o;
    }
    var Ox = Object.defineProperty, Ch = Object.getOwnPropertySymbols, Gx = Object.prototype.hasOwnProperty, Bx = Object.prototype.propertyIsEnumerable, Oh = (r1, t, e)=>t in r1 ? Ox(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, De = (r1, t)=>{
        for(var e in t || (t = {}))Gx.call(t, e) && Oh(r1, e, t[e]);
        if (Ch) for (var e of Ch(t))Bx.call(t, e) && Oh(r1, e, t[e]);
        return r1;
    };
    const Ix = new V, Gh = new B, ho = class Nt extends dt {
        constructor(){
            super(...arguments), this.uid = Q("graphicsContext"), this.dirty = !0, this.batchMode = "auto", this.instructions = [], this._activePath = new Jt, this._transform = new B, this._fillStyle = De({}, Nt.defaultFillStyle), this._strokeStyle = De({}, Nt.defaultStrokeStyle), this._stateStack = [], this._tick = 0, this._bounds = new ut, this._boundsDirty = !0;
        }
        clone() {
            const t = new Nt;
            return t.batchMode = this.batchMode, t.instructions = this.instructions.slice(), t._activePath = this._activePath.clone(), t._transform = this._transform.clone(), t._fillStyle = De({}, this._fillStyle), t._strokeStyle = De({}, this._strokeStyle), t._stateStack = this._stateStack.slice(), t._bounds = this._bounds.clone(), t._boundsDirty = !0, t;
        }
        get fillStyle() {
            return this._fillStyle;
        }
        set fillStyle(t) {
            this._fillStyle = Wt(t, Nt.defaultFillStyle);
        }
        get strokeStyle() {
            return this._strokeStyle;
        }
        set strokeStyle(t) {
            this._strokeStyle = Wt(t, Nt.defaultStrokeStyle);
        }
        setFillStyle(t) {
            return this._fillStyle = Wt(t, Nt.defaultFillStyle), this;
        }
        setStrokeStyle(t) {
            return this._strokeStyle = Wt(t, Nt.defaultStrokeStyle), this;
        }
        texture(t, e, i, s, n, o) {
            return this.instructions.push({
                action: "texture",
                data: {
                    image: t,
                    dx: i || 0,
                    dy: s || 0,
                    dw: n || t.frame.width,
                    dh: o || t.frame.height,
                    transform: this._transform.clone(),
                    alpha: this._fillStyle.alpha,
                    style: e ? Y.shared.setValue(e).toNumber() : 16777215
                }
            }), this.onUpdate(), this;
        }
        beginPath() {
            return this._activePath = new Jt, this;
        }
        fill(t, e) {
            let i;
            const s = this.instructions[this.instructions.length - 1];
            return this._tick === 0 && s && s.action === "stroke" ? i = s.data.path : i = this._activePath.clone(), i ? (t != null && (e !== void 0 && typeof t == "number" && (t = {
                color: t,
                alpha: e
            }), this._fillStyle = Wt(t, Nt.defaultFillStyle)), this.instructions.push({
                action: "fill",
                data: {
                    style: this.fillStyle,
                    path: i
                }
            }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
        }
        _initNextPathLocation() {
            const { x: t, y: e } = this._activePath.getLastPoint(V.shared);
            this._activePath.clear(), this._activePath.moveTo(t, e);
        }
        stroke(t) {
            let e;
            const i = this.instructions[this.instructions.length - 1];
            return this._tick === 0 && i && i.action === "fill" ? e = i.data.path : e = this._activePath.clone(), e ? (t != null && (this._strokeStyle = Wt(t, Nt.defaultStrokeStyle)), this.instructions.push({
                action: "stroke",
                data: {
                    style: this.strokeStyle,
                    path: e
                }
            }), this.onUpdate(), this._initNextPathLocation(), this._tick = 0, this) : this;
        }
        cut() {
            for(let t = 0; t < 2; t++){
                const e = this.instructions[this.instructions.length - 1 - t], i = this._activePath.clone();
                if (e && (e.action === "stroke" || e.action === "fill")) {
                    if (e.data.hole) e.data.hole.addPath(i);
                    else {
                        e.data.hole = i;
                        break;
                    }
                }
            }
            return this._initNextPathLocation(), this;
        }
        arc(t, e, i, s, n, o) {
            this._tick++;
            const a = this._transform;
            return this._activePath.arc(a.a * t + a.c * e + a.tx, a.b * t + a.d * e + a.ty, i, s, n, o), this;
        }
        arcTo(t, e, i, s, n) {
            this._tick++;
            const o = this._transform;
            return this._activePath.arcTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * i + o.c * s + o.tx, o.b * i + o.d * s + o.ty, n), this;
        }
        arcToSvg(t, e, i, s, n, o, a) {
            this._tick++;
            const l = this._transform;
            return this._activePath.arcToSvg(t, e, i, s, n, l.a * o + l.c * a + l.tx, l.b * o + l.d * a + l.ty), this;
        }
        bezierCurveTo(t, e, i, s, n, o, a) {
            this._tick++;
            const l = this._transform;
            return this._activePath.bezierCurveTo(l.a * t + l.c * e + l.tx, l.b * t + l.d * e + l.ty, l.a * i + l.c * s + l.tx, l.b * i + l.d * s + l.ty, l.a * n + l.c * o + l.tx, l.b * n + l.d * o + l.ty, a), this;
        }
        closePath() {
            var t;
            return this._tick++, (t = this._activePath) == null || t.closePath(), this;
        }
        ellipse(t, e, i, s) {
            return this._tick++, this._activePath.ellipse(t, e, i, s, this._transform.clone()), this;
        }
        circle(t, e, i) {
            return this._tick++, this._activePath.circle(t, e, i, this._transform.clone()), this;
        }
        path(t) {
            return this._tick++, this._activePath.addPath(t, this._transform.clone()), this;
        }
        lineTo(t, e) {
            this._tick++;
            const i = this._transform;
            return this._activePath.lineTo(i.a * t + i.c * e + i.tx, i.b * t + i.d * e + i.ty), this;
        }
        moveTo(t, e) {
            this._tick++;
            const i = this._transform, s = this._activePath.instructions, n = i.a * t + i.c * e + i.tx, o = i.b * t + i.d * e + i.ty;
            return s.length === 1 && s[0].action === "moveTo" ? (s[0].data[0] = n, s[0].data[1] = o, this) : (this._activePath.moveTo(n, o), this);
        }
        quadraticCurveTo(t, e, i, s, n) {
            this._tick++;
            const o = this._transform;
            return this._activePath.quadraticCurveTo(o.a * t + o.c * e + o.tx, o.b * t + o.d * e + o.ty, o.a * i + o.c * s + o.tx, o.b * i + o.d * s + o.ty, n), this;
        }
        rect(t, e, i, s) {
            return this._tick++, this._activePath.rect(t, e, i, s, this._transform.clone()), this;
        }
        roundRect(t, e, i, s, n) {
            return this._tick++, this._activePath.roundRect(t, e, i, s, n, this._transform.clone()), this;
        }
        poly(t, e) {
            return this._tick++, this._activePath.poly(t, e, this._transform.clone()), this;
        }
        regularPoly(t, e, i, s, n = 0, o) {
            return this._tick++, this._activePath.regularPoly(t, e, i, s, n, o), this;
        }
        roundPoly(t, e, i, s, n, o) {
            return this._tick++, this._activePath.roundPoly(t, e, i, s, n, o), this;
        }
        roundShape(t, e, i, s) {
            return this._tick++, this._activePath.roundShape(t, e, i, s), this;
        }
        filletRect(t, e, i, s, n) {
            return this._tick++, this._activePath.filletRect(t, e, i, s, n), this;
        }
        chamferRect(t, e, i, s, n, o) {
            return this._tick++, this._activePath.chamferRect(t, e, i, s, n, o), this;
        }
        star(t, e, i, s, n = 0, o = 0) {
            return this._tick++, this._activePath.star(t, e, i, s, n, o, this._transform.clone()), this;
        }
        svg(t) {
            return this._tick++, Ph(t, this), this;
        }
        restore() {
            const t = this._stateStack.pop();
            return t && (this._transform = t.transform, this._fillStyle = t.fillStyle, this._strokeStyle = t.strokeStyle), this;
        }
        save() {
            return this._stateStack.push({
                transform: this._transform.clone(),
                fillStyle: De({}, this._fillStyle),
                strokeStyle: De({}, this._strokeStyle)
            }), this;
        }
        getTransform() {
            return this._transform;
        }
        resetTransform() {
            return this._transform.identity(), this;
        }
        rotate(t) {
            return this._transform.rotate(t), this;
        }
        scale(t, e = t) {
            return this._transform.scale(t, e), this;
        }
        setTransform(t, e, i, s, n, o) {
            return t instanceof B ? (this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty), this) : (this._transform.set(t, e, i, s, n, o), this);
        }
        transform(t, e, i, s, n, o) {
            return t instanceof B ? (this._transform.append(t), this) : (Gh.set(t, e, i, s, n, o), this._transform.append(Gh), this);
        }
        translate(t, e = t) {
            return this._transform.translate(t, e), this;
        }
        clear() {
            return this.instructions.length = 0, this.resetTransform(), this.onUpdate(), this;
        }
        onUpdate() {
            this.dirty || (this.emit("update", this, 16), this.dirty = !0, this._boundsDirty = !0);
        }
        get bounds() {
            if (!this._boundsDirty) return this._bounds;
            const t = this._bounds;
            t.clear();
            for(let e = 0; e < this.instructions.length; e++){
                const i = this.instructions[e], s = i.action;
                if (s === "fill") {
                    const n = i.data;
                    t.addBounds(n.path.bounds);
                } else if (s === "texture") {
                    const n = i.data;
                    t.addFrame(n.dx, n.dy, n.dx + n.dw, n.dy + n.dh, n.transform);
                }
                if (s === "stroke") {
                    const n = i.data, o = n.style.width / 2, a = n.path.bounds;
                    t.addFrame(a.minX - o, a.minY - o, a.maxX + o, a.maxY + o);
                }
            }
            return t;
        }
        containsPoint(t) {
            var e;
            if (!this.bounds.containsPoint(t.x, t.y)) return !1;
            const i = this.instructions;
            let s = !1;
            for(let n = 0; n < i.length; n++){
                const o = i[n], a = o.data, l = a.path;
                if (!o.action || !l) continue;
                const u = a.style, c = l.shapePath.shapePrimitives;
                for(let h = 0; h < c.length; h++){
                    const p = c[h].shape;
                    if (!u || !p) continue;
                    const f = c[h].transform, m = f ? f.applyInverse(t, Ix) : t;
                    o.action === "fill" ? s = p.contains(m.x, m.y) : s = p.strokeContains(m.x, m.y, u.width);
                    const _ = a.hole;
                    if (_) {
                        const g = (e = _.shapePath) == null ? void 0 : e.shapePrimitives;
                        if (g) for(let b = 0; b < g.length; b++)g[b].shape.contains(m.x, m.y) && (s = !1);
                    }
                    if (s) return !0;
                }
            }
            return s;
        }
        destroy(t = !1) {
            if (this._stateStack.length = 0, this._transform = null, this.emit("destroy", this), this.removeAllListeners(), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
                const e = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
                this._fillStyle.texture && this._fillStyle.texture.destroy(e), this._strokeStyle.texture && this._strokeStyle.texture.destroy(e);
            }
            this._fillStyle = null, this._strokeStyle = null, this.instructions = null, this._activePath = null, this._bounds = null, this._stateStack = null, this.customShader = null, this._transform = null;
        }
    };
    ho.defaultFillStyle = {
        color: 16777215,
        alpha: 1,
        texture: P.WHITE,
        matrix: null,
        fill: null
    }, ho.defaultStrokeStyle = {
        width: 1,
        color: 16777215,
        alpha: 1,
        alignment: .5,
        miterLimit: 10,
        cap: "butt",
        join: "miter",
        texture: P.WHITE,
        matrix: null,
        fill: null
    };
    let Dt = ho;
    const Bh = [
        "_fontFamily",
        "_fontStyle",
        "_fontSize",
        "_fontVariant",
        "_fontWeight",
        "_breakWords",
        "_align",
        "_leading",
        "_letterSpacing",
        "_lineHeight",
        "_textBaseline",
        "_whiteSpace",
        "_wordWrap",
        "_wordWrapWidth",
        "_padding",
        "_cssOverrides",
        "_trim"
    ];
    function po(r1) {
        const t = [];
        let e = 0;
        for(let i = 0; i < Bh.length; i++){
            const s = Bh[i];
            t[e++] = r1[s];
        }
        return e = Ih(r1._fill, t, e), e = Fx(r1._stroke, t, e), t.join("-");
    }
    function Ih(r1, t, e) {
        var i;
        return r1 && (t[e++] = r1.color, t[e++] = r1.alpha, t[e++] = (i = r1.fill) == null ? void 0 : i.uid), e;
    }
    function Fx(r1, t, e) {
        return r1 && (e = Ih(r1, t, e), t[e++] = r1.width, t[e++] = r1.alignment, t[e++] = r1.cap, t[e++] = r1.join, t[e++] = r1.miterLimit), e;
    }
    var Dx = Object.defineProperty, Fh = Object.getOwnPropertySymbols, Ux = Object.prototype.hasOwnProperty, kx = Object.prototype.propertyIsEnumerable, Dh = (r1, t, e)=>t in r1 ? Dx(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, xr = (r1, t)=>{
        for(var e in t || (t = {}))Ux.call(t, e) && Dh(r1, e, t[e]);
        if (Fh) for (var e of Fh(t))kx.call(t, e) && Dh(r1, e, t[e]);
        return r1;
    };
    const fo = class Ze extends dt {
        constructor(t = {}){
            super(), Lx(t);
            const e = xr(xr({}, Ze.defaultTextStyle), t);
            for(const i in e){
                const s = i;
                this[s] = e[i];
            }
            this.update();
        }
        get align() {
            return this._align;
        }
        set align(t) {
            this._align = t, this.update();
        }
        get breakWords() {
            return this._breakWords;
        }
        set breakWords(t) {
            this._breakWords = t, this.update();
        }
        get dropShadow() {
            return this._dropShadow;
        }
        set dropShadow(t) {
            t !== null && typeof t == "object" ? this._dropShadow = xr(xr({}, Ze.defaultDropShadow), t) : this._dropShadow = t ? xr({}, Ze.defaultDropShadow) : null, this.update();
        }
        get fontFamily() {
            return this._fontFamily;
        }
        set fontFamily(t) {
            this._fontFamily = t, this.update();
        }
        get fontSize() {
            return this._fontSize;
        }
        set fontSize(t) {
            typeof t == "string" ? this._fontSize = parseInt(t, 10) : this._fontSize = t, this.update();
        }
        get fontStyle() {
            return this._fontStyle;
        }
        set fontStyle(t) {
            this._fontStyle = t, this.update();
        }
        get fontVariant() {
            return this._fontVariant;
        }
        set fontVariant(t) {
            this._fontVariant = t, this.update();
        }
        get fontWeight() {
            return this._fontWeight;
        }
        set fontWeight(t) {
            this._fontWeight = t, this.update();
        }
        get leading() {
            return this._leading;
        }
        set leading(t) {
            this._leading = t, this.update();
        }
        get letterSpacing() {
            return this._letterSpacing;
        }
        set letterSpacing(t) {
            this._letterSpacing = t, this.update();
        }
        get lineHeight() {
            return this._lineHeight;
        }
        set lineHeight(t) {
            this._lineHeight = t, this.update();
        }
        get padding() {
            return this._padding;
        }
        set padding(t) {
            this._padding = t, this.update();
        }
        get trim() {
            return this._trim;
        }
        set trim(t) {
            this._trim = t, this.update();
        }
        get textBaseline() {
            return this._textBaseline;
        }
        set textBaseline(t) {
            this._textBaseline = t, this.update();
        }
        get whiteSpace() {
            return this._whiteSpace;
        }
        set whiteSpace(t) {
            this._whiteSpace = t, this.update();
        }
        get wordWrap() {
            return this._wordWrap;
        }
        set wordWrap(t) {
            this._wordWrap = t, this.update();
        }
        get wordWrapWidth() {
            return this._wordWrapWidth;
        }
        set wordWrapWidth(t) {
            this._wordWrapWidth = t, this.update();
        }
        get fill() {
            return this._originalFill;
        }
        set fill(t) {
            t !== this._originalFill && (this._originalFill = t, this._fill = Wt(t === 0 ? "black" : t, Dt.defaultFillStyle), this.update());
        }
        get stroke() {
            return this._originalStroke;
        }
        set stroke(t) {
            t !== this._originalStroke && (this._originalStroke = t, this._stroke = Wt(t, Dt.defaultStrokeStyle), this.update());
        }
        _generateKey() {
            return this._styleKey = po(this), this._styleKey;
        }
        update() {
            this._styleKey = null, this.emit("update", this);
        }
        reset() {
            const t = Ze.defaultTextStyle;
            for(const e in t)this[e] = t[e];
        }
        get styleKey() {
            return this._styleKey || this._generateKey();
        }
        clone() {
            return new Ze({
                align: this.align,
                breakWords: this.breakWords,
                dropShadow: this.dropShadow,
                fill: this._fill,
                fontFamily: this.fontFamily,
                fontSize: this.fontSize,
                fontStyle: this.fontStyle,
                fontVariant: this.fontVariant,
                fontWeight: this.fontWeight,
                leading: this.leading,
                letterSpacing: this.letterSpacing,
                lineHeight: this.lineHeight,
                padding: this.padding,
                stroke: this._stroke,
                textBaseline: this.textBaseline,
                whiteSpace: this.whiteSpace,
                wordWrap: this.wordWrap,
                wordWrapWidth: this.wordWrapWidth
            });
        }
        destroy(t = !1) {
            var e, i, s, n;
            if (this.removeAllListeners(), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
                const o = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
                (e = this._fill) != null && e.texture && this._fill.texture.destroy(o), (i = this._originalFill) != null && i.texture && this._originalFill.texture.destroy(o), (s = this._stroke) != null && s.texture && this._stroke.texture.destroy(o), (n = this._originalStroke) != null && n.texture && this._originalStroke.texture.destroy(o);
            }
            this._fill = null, this._stroke = null, this.dropShadow = null, this._originalStroke = null, this._originalFill = null;
        }
    };
    fo.defaultDropShadow = {
        alpha: 1,
        angle: Math.PI / 6,
        blur: 0,
        color: "black",
        distance: 5
    }, fo.defaultTextStyle = {
        align: "left",
        breakWords: !1,
        dropShadow: null,
        fill: "black",
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        leading: 0,
        letterSpacing: 0,
        lineHeight: 0,
        padding: 0,
        stroke: null,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100
    };
    let Yt = fo;
    function Lx(r1) {
        var t, e, i, s, n;
        const o = r1;
        if (typeof o.dropShadow == "boolean" && o.dropShadow) {
            const a = Yt.defaultDropShadow;
            r1.dropShadow = {
                alpha: (t = o.dropShadowAlpha) != null ? t : a.alpha,
                angle: (e = o.dropShadowAngle) != null ? e : a.angle,
                blur: (i = o.dropShadowBlur) != null ? i : a.blur,
                color: (s = o.dropShadowColor) != null ? s : a.color,
                distance: (n = o.dropShadowDistance) != null ? n : a.distance
            };
        }
        if (o.strokeThickness) {
            const a = o.stroke;
            r1.stroke = {
                color: a,
                width: o.strokeThickness
            };
        }
        if (Array.isArray(o.fill)) {
            const a = new Ri(0, 0, 0, r1.fontSize * 1.7), l = o.fill.map((u)=>Y.shared.setValue(u).toNumber());
            l.forEach((u, c)=>{
                var h;
                const p = (h = o.fillGradientStops[c]) != null ? h : c / l.length;
                a.addColorStop(p, u);
            }), r1.fill = {
                fill: a
            };
        }
    }
    function mo(r1) {
        if (r1 === "") return [];
        typeof r1 == "string" && (r1 = [
            r1
        ]);
        const t = [];
        for(let e = 0, i = r1.length; e < i; e++){
            const s = r1[e];
            if (Array.isArray(s)) {
                if (s.length !== 2) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
                if (s[0].length === 0 || s[1].length === 0) throw new Error("[BitmapFont]: Invalid character delimiter.");
                const n = s[0].charCodeAt(0), o = s[1].charCodeAt(0);
                if (o < n) throw new Error("[BitmapFont]: Invalid character range.");
                for(let a = n, l = o; a <= l; a++)t.push(String.fromCharCode(a));
            } else t.push(...Array.from(s));
        }
        if (t.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
        return t;
    }
    class go extends eo {
        constructor(t){
            var e, i, s;
            super(), this.resolution = 1, this.pages = [], this._padding = 4, this._measureCache = Object.create(null), this._currentChars = [], this._currentX = 0, this._currentY = 0, this._currentPageIndex = -1, this._skipKerning = !1;
            const n = t, o = n.style.clone();
            n.overrideFill && (o._fill.color = 16777215, o._fill.alpha = 1, o._fill.texture = P.WHITE, o._fill.fill = null);
            const a = o.fontSize;
            o.fontSize = this.baseMeasurementFontSize;
            const l = gr(o);
            n.overrideSize ? o._stroke && (o._stroke.width *= this.baseRenderedFontSize / a) : o.fontSize = this.baseRenderedFontSize = a, this._style = o, this._skipKerning = (e = n.skipKerning) != null ? e : !1, this.resolution = (i = n.resolution) != null ? i : 1, this._padding = (s = n.padding) != null ? s : 4, this.fontMetrics = Ft.measureFont(l), this.lineHeight = o.lineHeight || this.fontMetrics.fontSize || o.fontSize;
        }
        ensureCharacters(t) {
            var e, i, s, n;
            const o = mo(t).filter((y)=>!this._currentChars.includes(y)).filter((y, T, E)=>E.indexOf(y) === T);
            if (!o.length) return;
            this._currentChars = [
                ...this._currentChars,
                ...o
            ];
            let a;
            this._currentPageIndex === -1 ? a = this._nextPage() : a = this.pages[this._currentPageIndex];
            let { canvas: l, context: u } = a.canvasAndContext, c = a.texture.source;
            const h = this._style;
            let p = this._currentX, f = this._currentY;
            const m = this.baseRenderedFontSize / this.baseMeasurementFontSize, _ = this._padding * m, g = h.fontStyle === "italic" ? 2 : 1;
            let b = 0, v = !1;
            for(let y = 0; y < o.length; y++){
                const T = o[y], E = Ft.measureText(T, h, l, !1);
                E.lineHeight = E.height;
                const R = g * E.width * m, M = E.height * m, w = R + _ * 2, S = M + _ * 2;
                if (v = !1, T !== `
` && T !== "\r" && T !== "	" && T !== " " && (v = !0, b = Math.ceil(Math.max(S, b))), p + w > 512 && (f += b, b = S, p = 0, f + b > 512)) {
                    c.update();
                    const H = this._nextPage();
                    l = H.canvasAndContext.canvas, u = H.canvasAndContext.context, c = H.texture.source, f = 0;
                }
                const A = R / m - ((i = (e = h.dropShadow) == null ? void 0 : e.distance) != null ? i : 0) - ((n = (s = h._stroke) == null ? void 0 : s.width) != null ? n : 0);
                if (this.chars[T] = {
                    id: T.codePointAt(0),
                    xOffset: -this._padding,
                    yOffset: -this._padding,
                    xAdvance: A,
                    kerning: {}
                }, v) {
                    this._drawGlyph(u, E, p + _, f + _, m, h);
                    const H = c.width * m, L = c.height * m, G = new j(p / H * c.width, f / L * c.height, w / H * c.width, S / L * c.height);
                    this.chars[T].texture = new P({
                        source: c,
                        frame: G
                    }), p += Math.ceil(w);
                }
            }
            c.update(), this._currentX = p, this._currentY = f, this._skipKerning && this._applyKerning(o, u);
        }
        get pageTextures() {
            return this.pages;
        }
        _applyKerning(t, e) {
            const i = this._measureCache;
            for(let s = 0; s < t.length; s++){
                const n = t[s];
                for(let o = 0; o < this._currentChars.length; o++){
                    const a = this._currentChars[o];
                    let l = i[n];
                    l || (l = i[n] = e.measureText(n).width);
                    let u = i[a];
                    u || (u = i[a] = e.measureText(a).width);
                    let c = e.measureText(n + a).width, h = c - (l + u);
                    h && (this.chars[n].kerning[a] = h), c = e.measureText(n + a).width, h = c - (l + u), h && (this.chars[a].kerning[n] = h);
                }
            }
        }
        _nextPage() {
            this._currentPageIndex++;
            const t = this.resolution, e = Vt.getOptimalCanvasAndContext(512, 512, t);
            this._setupContext(e.context, this._style, t);
            const i = t * (this.baseRenderedFontSize / this.baseMeasurementFontSize), s = new P({
                source: new pe({
                    resource: e.canvas,
                    resolution: i,
                    alphaMode: "premultiply-alpha-on-upload"
                })
            }), n = {
                canvasAndContext: e,
                texture: s
            };
            return this.pages[this._currentPageIndex] = n, n;
        }
        _setupContext(t, e, i) {
            var s;
            e.fontSize = this.baseRenderedFontSize, t.scale(i, i), t.font = gr(e), e.fontSize = this.baseMeasurementFontSize, t.textBaseline = e.textBaseline;
            const n = e._stroke, o = (s = n == null ? void 0 : n.width) != null ? s : 0;
            if (n && (t.lineWidth = o, t.lineJoin = n.join, t.miterLimit = n.miterLimit, t.strokeStyle = _r(n, t)), e._fill && (t.fillStyle = _r(e._fill, t)), e.dropShadow) {
                const a = e.dropShadow, l = Y.shared.setValue(a.color).toArray(), u = a.blur * i, c = a.distance * i;
                t.shadowColor = `rgba(${l[0] * 255},${l[1] * 255},${l[2] * 255},${a.alpha})`, t.shadowBlur = u, t.shadowOffsetX = Math.cos(a.angle) * c, t.shadowOffsetY = Math.sin(a.angle) * c;
            } else t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
        }
        _drawGlyph(t, e, i, s, n, o) {
            var a;
            const l = e.text, u = e.fontProperties, c = o._stroke, h = ((a = c == null ? void 0 : c.width) != null ? a : 0) * n, p = i + h / 2, f = s - h / 2, m = u.descent * n, _ = e.lineHeight * n;
            o.stroke && h && t.strokeText(l, p, f + _ - m), o._fill && t.fillText(l, p, f + _ - m);
        }
        destroy() {
            super.destroy();
            for(let t = 0; t < this.pages.length; t++){
                const { canvasAndContext: e, texture: i } = this.pages[t];
                Vt.returnCanvasAndContext(e), i.destroy(!0);
            }
            this.pages = null;
        }
    }
    function _o(r1, t, e) {
        const i = {
            width: 0,
            height: 0,
            offsetY: 0,
            scale: t.fontSize / e.baseMeasurementFontSize,
            lines: [
                {
                    width: 0,
                    charPositions: [],
                    spaceWidth: 0,
                    spacesIndex: [],
                    chars: []
                }
            ]
        };
        i.offsetY = e.baseLineOffset;
        let s = i.lines[0], n = null, o = !0;
        const a = {
            spaceWord: !1,
            width: 0,
            start: 0,
            index: 0,
            positions: [],
            chars: []
        }, l = (f)=>{
            const m = s.width;
            for(let _ = 0; _ < a.index; _++){
                const g = f.positions[_];
                s.chars.push(f.chars[_]), s.charPositions.push(g + m);
            }
            s.width += f.width, o = !1, a.width = 0, a.index = 0, a.chars.length = 0;
        }, u = ()=>{
            let f = s.chars.length - 1, m = s.chars[f];
            for(; m === " ";)s.width -= e.chars[m].xAdvance, m = s.chars[--f];
            i.width = Math.max(i.width, s.width), s = {
                width: 0,
                charPositions: [],
                chars: [],
                spaceWidth: 0,
                spacesIndex: []
            }, o = !0, i.lines.push(s), i.height += e.lineHeight;
        }, c = e.baseMeasurementFontSize / t.fontSize, h = t.letterSpacing * c, p = t.wordWrapWidth * c;
        for(let f = 0; f < r1.length + 1; f++){
            let m;
            const _ = f === r1.length;
            _ || (m = r1[f]);
            const g = e.chars[m] || e.chars[" "];
            if (/(?:\s)/.test(m) || m === "\r" || m === `
` || _) {
                if (!o && t.wordWrap && s.width + a.width - h > p ? (u(), l(a), _ || s.charPositions.push(0)) : (a.start = s.width, l(a), _ || s.charPositions.push(0)), m === "\r" || m === `
`) s.width !== 0 && u();
                else if (!_) {
                    const b = g.xAdvance + (g.kerning[n] || 0) + h;
                    s.width += b, s.spaceWidth = b, s.spacesIndex.push(s.charPositions.length), s.chars.push(m);
                }
            } else {
                const b = g.kerning[n] || 0, v = g.xAdvance + b + h;
                a.positions[a.index++] = a.width + b, a.chars.push(m), a.width += v;
            }
            n = m;
        }
        return u(), t.align === "center" ? $x(i) : t.align === "right" ? Nx(i) : t.align === "justify" && Hx(i), i;
    }
    function $x(r1) {
        for(let t = 0; t < r1.lines.length; t++){
            const e = r1.lines[t], i = r1.width / 2 - e.width / 2;
            for(let s = 0; s < e.charPositions.length; s++)e.charPositions[s] += i;
        }
    }
    function Nx(r1) {
        for(let t = 0; t < r1.lines.length; t++){
            const e = r1.lines[t], i = r1.width - e.width;
            for(let s = 0; s < e.charPositions.length; s++)e.charPositions[s] += i;
        }
    }
    function Hx(r1) {
        const t = r1.width;
        for(let e = 0; e < r1.lines.length; e++){
            const i = r1.lines[e];
            let s = 0, n = i.spacesIndex[s++], o = 0;
            const a = i.spacesIndex.length, l = (t - i.width) / a;
            for(let u = 0; u < i.charPositions.length; u++)u === n && (n = i.spacesIndex[s++], o += l), i.charPositions[u] += o;
        }
    }
    var Xx = Object.defineProperty, Uh = Object.getOwnPropertySymbols, zx = Object.prototype.hasOwnProperty, jx = Object.prototype.propertyIsEnumerable, kh = (r1, t, e)=>t in r1 ? Xx(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, bo = (r1, t)=>{
        for(var e in t || (t = {}))zx.call(t, e) && kh(r1, e, t[e]);
        if (Uh) for (var e of Uh(t))jx.call(t, e) && kh(r1, e, t[e]);
        return r1;
    };
    let Vx = class {
        constructor(){
            this.ALPHA = [
                [
                    "a",
                    "z"
                ],
                [
                    "A",
                    "Z"
                ],
                " "
            ], this.NUMERIC = [
                [
                    "0",
                    "9"
                ]
            ], this.ALPHANUMERIC = [
                [
                    "a",
                    "z"
                ],
                [
                    "A",
                    "Z"
                ],
                [
                    "0",
                    "9"
                ],
                " "
            ], this.ASCII = [
                [
                    " ",
                    "~"
                ]
            ], this.defaultOptions = {
                chars: this.ALPHANUMERIC,
                resolution: 1,
                padding: 4,
                skipKerning: !1
            };
        }
        getFont(t, e) {
            var i;
            let s = `${e.fontFamily}-bitmap`, n = !0;
            if (e._fill.fill && (s += e._fill.fill.uid, n = !1), !K.has(s)) {
                const a = new go(bo({
                    style: e,
                    overrideFill: n,
                    overrideSize: !0
                }, this.defaultOptions));
                a.once("destroy", ()=>K.remove(s)), K.set(s, a);
            }
            const o = K.get(s);
            return (i = o.ensureCharacters) == null || i.call(o, t), o;
        }
        getLayout(t, e) {
            const i = this.getFont(t, e);
            return _o(t.split(""), e, i);
        }
        measureText(t, e) {
            return this.getLayout(t, e);
        }
        install(...t) {
            var e, i, s, n;
            let o = t[0];
            typeof o == "string" && (o = {
                name: o,
                style: t[1],
                chars: (e = t[2]) == null ? void 0 : e.chars,
                resolution: (i = t[2]) == null ? void 0 : i.resolution,
                padding: (s = t[2]) == null ? void 0 : s.padding,
                skipKerning: (n = t[2]) == null ? void 0 : n.skipKerning
            });
            const a = o == null ? void 0 : o.name;
            if (!a) throw new Error("[BitmapFontManager] Property `name` is required.");
            o = bo(bo({}, this.defaultOptions), o);
            const l = o.style, u = l instanceof Yt ? l : new Yt(l), c = u._fill.fill !== null && u._fill.fill !== void 0, h = new go({
                style: u,
                overrideFill: c,
                skipKerning: o.skipKerning,
                padding: o.padding,
                resolution: o.resolution,
                overrideSize: !1
            }), p = mo(o.chars);
            return h.ensureCharacters(p.join("")), K.set(`${a}-bitmap`, h), h.once("destroy", ()=>K.remove(`${a}-bitmap`)), h;
        }
        uninstall(t) {
            const e = `${t}-bitmap`, i = K.get(e);
            i && (K.remove(e), i.destroy());
        }
    };
    const Tr = new Vx;
    class vo extends eo {
        constructor(t, e){
            var i;
            super();
            const { textures: s, data: n } = t;
            Object.keys(n.pages).forEach((o)=>{
                const a = n.pages[parseInt(o, 10)], l = s[a.id];
                this.pages.push({
                    texture: l
                });
            }), Object.keys(n.chars).forEach((o)=>{
                var a;
                const l = n.chars[o], u = s[l.page].source, c = new j(l.x, l.y, l.width, l.height), h = new P({
                    source: u,
                    frame: c
                });
                this.chars[o] = {
                    id: o.codePointAt(0),
                    xOffset: l.xOffset,
                    yOffset: l.yOffset,
                    xAdvance: l.xAdvance,
                    kerning: (a = l.kerning) != null ? a : {},
                    texture: h
                };
            }), this.baseRenderedFontSize = n.fontSize, this.baseMeasurementFontSize = n.fontSize, this.fontMetrics = {
                ascent: 0,
                descent: 0,
                fontSize: n.fontSize
            }, this.baseLineOffset = n.baseLineOffset, this.lineHeight = n.lineHeight, this.fontFamily = n.fontFamily, this.distanceField = (i = n.distanceField) != null ? i : {
                type: "none",
                range: 0
            }, this.url = e;
        }
        destroy() {
            super.destroy();
            for(let t = 0; t < this.pages.length; t++){
                const { texture: e } = this.pages[t];
                e.destroy(!0);
            }
            this.pages = null;
        }
        static install(t) {
            Tr.install(t);
        }
        static uninstall(t) {
            Tr.uninstall(t);
        }
    }
    const Ii = {
        test (r1) {
            return typeof r1 == "string" && r1.startsWith("info face=");
        },
        parse (r1) {
            var t, e, i;
            const s = r1.match(/^[a-z]+\s+.+$/gm), n = {
                info: [],
                common: [],
                page: [],
                char: [],
                chars: [],
                kerning: [],
                kernings: [],
                distanceField: []
            };
            for(const m in s){
                const _ = s[m].match(/^[a-z]+/gm)[0], g = s[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), b = {};
                for(const v in g){
                    const y = g[v].split("="), T = y[0], E = y[1].replace(/"/gm, ""), R = parseFloat(E), M = isNaN(R) ? E : R;
                    b[T] = M;
                }
                n[_].push(b);
            }
            const o = {
                chars: {},
                pages: [],
                lineHeight: 0,
                fontSize: 0,
                fontFamily: "",
                distanceField: null,
                baseLineOffset: 0
            }, [a] = n.info, [l] = n.common, [u] = (t = n.distanceField) != null ? t : [];
            u && (o.distanceField = {
                range: parseInt(u.distanceRange, 10),
                type: u.fieldType
            }), o.fontSize = parseInt(a.size, 10), o.fontFamily = a.face, o.lineHeight = parseInt(l.lineHeight, 10);
            const c = n.page;
            for(let m = 0; m < c.length; m++)o.pages.push({
                id: parseInt(c[m].id, 10) || 0,
                file: c[m].file
            });
            const h = {};
            o.baseLineOffset = o.lineHeight - parseInt(l.base, 10);
            const p = n.char;
            for(let m = 0; m < p.length; m++){
                const _ = p[m], g = parseInt(_.id, 10);
                let b = (i = (e = _.letter) != null ? e : _.char) != null ? i : String.fromCharCode(g);
                b === "space" && (b = " "), h[g] = b, o.chars[b] = {
                    id: g,
                    page: parseInt(_.page, 10) || 0,
                    x: parseInt(_.x, 10),
                    y: parseInt(_.y, 10),
                    width: parseInt(_.width, 10),
                    height: parseInt(_.height, 10),
                    xOffset: parseInt(_.xoffset, 10),
                    yOffset: parseInt(_.yoffset, 10),
                    xAdvance: parseInt(_.xadvance, 10),
                    kerning: {}
                };
            }
            const f = n.kerning || [];
            for(let m = 0; m < f.length; m++){
                const _ = parseInt(f[m].first, 10), g = parseInt(f[m].second, 10), b = parseInt(f[m].amount, 10);
                o.chars[h[g]].kerning[h[_]] = b;
            }
            return o;
        }
    }, yo = {
        test (r1) {
            const t = r1;
            return typeof t != "string" && "getElementsByTagName" in t && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null;
        },
        parse (r1) {
            var t, e;
            const i = {
                chars: {},
                pages: [],
                lineHeight: 0,
                fontSize: 0,
                fontFamily: "",
                distanceField: null,
                baseLineOffset: 0
            }, s = r1.getElementsByTagName("info")[0], n = r1.getElementsByTagName("common")[0], o = r1.getElementsByTagName("distanceField")[0];
            o && (i.distanceField = {
                type: o.getAttribute("fieldType"),
                range: parseInt(o.getAttribute("distanceRange"), 10)
            });
            const a = r1.getElementsByTagName("page"), l = r1.getElementsByTagName("char"), u = r1.getElementsByTagName("kerning");
            i.fontSize = parseInt(s.getAttribute("size"), 10), i.fontFamily = s.getAttribute("face"), i.lineHeight = parseInt(n.getAttribute("lineHeight"), 10);
            for(let h = 0; h < a.length; h++)i.pages.push({
                id: parseInt(a[h].getAttribute("id"), 10) || 0,
                file: a[h].getAttribute("file")
            });
            const c = {};
            i.baseLineOffset = i.lineHeight - parseInt(n.getAttribute("base"), 10);
            for(let h = 0; h < l.length; h++){
                const p = l[h], f = parseInt(p.getAttribute("id"), 10);
                let m = (e = (t = p.getAttribute("letter")) != null ? t : p.getAttribute("char")) != null ? e : String.fromCharCode(f);
                m === "space" && (m = " "), c[f] = m, i.chars[m] = {
                    id: f,
                    page: parseInt(p.getAttribute("page"), 10) || 0,
                    x: parseInt(p.getAttribute("x"), 10),
                    y: parseInt(p.getAttribute("y"), 10),
                    width: parseInt(p.getAttribute("width"), 10),
                    height: parseInt(p.getAttribute("height"), 10),
                    xOffset: parseInt(p.getAttribute("xoffset"), 10),
                    yOffset: parseInt(p.getAttribute("yoffset"), 10),
                    xAdvance: parseInt(p.getAttribute("xadvance"), 10),
                    kerning: {}
                };
            }
            for(let h = 0; h < u.length; h++){
                const p = parseInt(u[h].getAttribute("first"), 10), f = parseInt(u[h].getAttribute("second"), 10), m = parseInt(u[h].getAttribute("amount"), 10);
                i.chars[c[f]].kerning[c[p]] = m;
            }
            return i;
        }
    }, xo = {
        test (r1) {
            return typeof r1 == "string" && r1.includes("<font>") ? yo.test(z.get().parseXML(r1)) : !1;
        },
        parse (r1) {
            return yo.parse(z.get().parseXML(r1));
        }
    }, Wx = [
        ".xml",
        ".fnt"
    ], Lh = {
        extension: x.CacheParser,
        test: (r1)=>r1 instanceof vo,
        getCacheableAssets (r1, t) {
            const e = {};
            return r1.forEach((i)=>{
                e[i] = t;
            }), e[`${t.fontFamily}-bitmap`] = t, e;
        }
    }, $h = {
        extension: {
            type: x.LoadParser,
            priority: gt.Normal
        },
        test (r1) {
            return Wx.includes(pt.extname(r1).toLowerCase());
        },
        async testParse (r1) {
            return Ii.test(r1) || xo.test(r1);
        },
        async parse (r1, t, e) {
            const i = Ii.test(r1) ? Ii.parse(r1) : xo.parse(r1), { src: s } = t, { pages: n } = i, o = [];
            for(let u = 0; u < n.length; ++u){
                const c = n[u].file;
                let h = pt.join(pt.dirname(s), c);
                h = ai(h, s), o.push(h);
            }
            const a = await e.load(o), l = o.map((u)=>a[u]);
            return new vo({
                data: i,
                textures: l
            }, s);
        },
        async load (r1, t) {
            return await (await z.get().fetch(r1)).text();
        },
        async unload (r1, t, e) {
            await Promise.all(r1.pages.map((i)=>e.unload(i.texture.source._sourceOrigin))), r1.destroy();
        }
    };
    var Yx = Object.defineProperty, Fi = Object.getOwnPropertySymbols, Nh = Object.prototype.hasOwnProperty, Hh = Object.prototype.propertyIsEnumerable, Xh = (r1, t, e)=>t in r1 ? Yx(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Kx = (r1, t)=>{
        for(var e in t || (t = {}))Nh.call(t, e) && Xh(r1, e, t[e]);
        if (Fi) for (var e of Fi(t))Hh.call(t, e) && Xh(r1, e, t[e]);
        return r1;
    }, qx = (r1, t)=>{
        var e = {};
        for(var i in r1)Nh.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && Fi) for (var i of Fi(r1))t.indexOf(i) < 0 && Hh.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class Ue extends W {
        constructor(t){
            t instanceof Dt && (t = {
                context: t
            });
            const e = t || {}, { context: i, roundPixels: s } = e, n = qx(e, [
                "context",
                "roundPixels"
            ]);
            super(Kx({
                label: "Graphics"
            }, n)), this.canBundle = !0, this.renderPipeId = "graphics", this._roundPixels = 0, i ? this._context = i : this._context = this._ownedContext = new Dt, this._context.on("update", this.onViewUpdate, this), this.allowChildren = !1, this.roundPixels = s != null ? s : !1;
        }
        set context(t) {
            t !== this._context && (this._context.off("update", this.onViewUpdate, this), this._context = t, this._context.on("update", this.onViewUpdate, this), this.onViewUpdate());
        }
        get context() {
            return this._context;
        }
        get bounds() {
            return this._context.bounds;
        }
        addBounds(t) {
            t.addBounds(this._context.bounds);
        }
        containsPoint(t) {
            return this._context.containsPoint(t);
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        onViewUpdate() {
            this._didChangeId += 4096, this._didGraphicsUpdate = !0, !this.didViewUpdate && (this.didViewUpdate = !0, this.renderGroup && this.renderGroup.onChildViewUpdate(this));
        }
        destroy(t) {
            this._ownedContext && !t ? this._ownedContext.destroy(t) : (t === !0 || (t == null ? void 0 : t.context) === !0) && this._context.destroy(t), this._ownedContext = null, this._context = null, super.destroy(t);
        }
        _callContextMethod(t, e) {
            return this.context[t](...e), this;
        }
        setFillStyle(...t) {
            return this._callContextMethod("setFillStyle", t);
        }
        setStrokeStyle(...t) {
            return this._callContextMethod("setStrokeStyle", t);
        }
        fill(...t) {
            return this._callContextMethod("fill", t);
        }
        stroke(...t) {
            return this._callContextMethod("stroke", t);
        }
        texture(...t) {
            return this._callContextMethod("texture", t);
        }
        beginPath() {
            return this._callContextMethod("beginPath", []);
        }
        cut() {
            return this._callContextMethod("cut", []);
        }
        arc(...t) {
            return this._callContextMethod("arc", t);
        }
        arcTo(...t) {
            return this._callContextMethod("arcTo", t);
        }
        arcToSvg(...t) {
            return this._callContextMethod("arcToSvg", t);
        }
        bezierCurveTo(...t) {
            return this._callContextMethod("bezierCurveTo", t);
        }
        closePath() {
            return this._callContextMethod("closePath", []);
        }
        ellipse(...t) {
            return this._callContextMethod("ellipse", t);
        }
        circle(...t) {
            return this._callContextMethod("circle", t);
        }
        path(...t) {
            return this._callContextMethod("path", t);
        }
        lineTo(...t) {
            return this._callContextMethod("lineTo", t);
        }
        moveTo(...t) {
            return this._callContextMethod("moveTo", t);
        }
        quadraticCurveTo(...t) {
            return this._callContextMethod("quadraticCurveTo", t);
        }
        rect(...t) {
            return this._callContextMethod("rect", t);
        }
        roundRect(...t) {
            return this._callContextMethod("roundRect", t);
        }
        poly(...t) {
            return this._callContextMethod("poly", t);
        }
        regularPoly(...t) {
            return this._callContextMethod("regularPoly", t);
        }
        roundPoly(...t) {
            return this._callContextMethod("roundPoly", t);
        }
        roundShape(...t) {
            return this._callContextMethod("roundShape", t);
        }
        filletRect(...t) {
            return this._callContextMethod("filletRect", t);
        }
        chamferRect(...t) {
            return this._callContextMethod("chamferRect", t);
        }
        star(...t) {
            return this._callContextMethod("star", t);
        }
        svg(...t) {
            return this._callContextMethod("svg", t);
        }
        restore(...t) {
            return this._callContextMethod("restore", t);
        }
        save() {
            return this._callContextMethod("save", []);
        }
        getTransform() {
            return this.context.getTransform();
        }
        resetTransform() {
            return this._callContextMethod("resetTransform", []);
        }
        rotateTransform(...t) {
            return this._callContextMethod("rotate", t);
        }
        scaleTransform(...t) {
            return this._callContextMethod("scale", t);
        }
        setTransform(...t) {
            return this._callContextMethod("setTransform", t);
        }
        transform(...t) {
            return this._callContextMethod("transform", t);
        }
        translateTransform(...t) {
            return this._callContextMethod("translate", t);
        }
        clear() {
            return this._callContextMethod("clear", []);
        }
        get fillStyle() {
            return this._context.fillStyle;
        }
        set fillStyle(t) {
            this._context.fillStyle = t;
        }
        get strokeStyle() {
            return this._context.strokeStyle;
        }
        set strokeStyle(t) {
            this._context.strokeStyle = t;
        }
        clone(t = !1) {
            return t ? new Ue(this._context.clone()) : (this._ownedContext = null, new Ue(this._context));
        }
        lineStyle(t, e, i) {
            const s = {};
            return t && (s.width = t), e && (s.color = e), i && (s.alpha = i), this.context.strokeStyle = s, this;
        }
        beginFill(t, e) {
            const i = {};
            return t && (i.color = t), e && (i.alpha = e), this.context.fillStyle = i, this;
        }
        endFill() {
            this.context.fill();
            const t = this.context.strokeStyle;
            return (t.width !== Dt.defaultStrokeStyle.width || t.color !== Dt.defaultStrokeStyle.color || t.alpha !== Dt.defaultStrokeStyle.alpha) && this.context.stroke(), this;
        }
        drawCircle(...t) {
            return this._callContextMethod("circle", t);
        }
        drawEllipse(...t) {
            return this._callContextMethod("ellipse", t);
        }
        drawPolygon(...t) {
            return this._callContextMethod("poly", t);
        }
        drawRect(...t) {
            return this._callContextMethod("rect", t);
        }
        drawRoundedRect(...t) {
            return this._callContextMethod("roundRect", t);
        }
        drawStar(...t) {
            return this._callContextMethod("star", t);
        }
    }
    let Sr;
    function zh() {
        return (!Sr || Sr != null && Sr.isContextLost()) && (Sr = z.get().createCanvas().getContext("webgl", {})), Sr;
    }
    let Di;
    function jh() {
        if (!Di) {
            Di = "mediump";
            const r1 = zh();
            r1 && r1.getShaderPrecisionFormat && (Di = r1.getShaderPrecisionFormat(r1.FRAGMENT_SHADER, r1.HIGH_FLOAT).precision ? "highp" : "mediump");
        }
        return Di;
    }
    function Vh(r1, t, e) {
        return t ? r1 : e ? (r1 = r1.replace("out vec4 finalColor;", ""), `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r1}
        `) : `
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r1}
        `;
    }
    function Wh(r1, t, e) {
        const i = e ? t.maxSupportedFragmentPrecision : t.maxSupportedVertexPrecision;
        if (r1.substring(0, 9) !== "precision") {
            let s = e ? t.requestedFragmentPrecision : t.requestedVertexPrecision;
            return s === "highp" && i !== "highp" && (s = "mediump"), `precision ${s} float;
${r1}`;
        } else if (i !== "highp" && r1.substring(0, 15) === "precision highp") return r1.replace("precision highp", "precision mediump");
        return r1;
    }
    function Yh(r1, t) {
        return t ? `#version 300 es
${r1}` : r1;
    }
    const Zx = {}, Qx = {};
    function Kh(r1, { name: t = "pixi-program" }, e = !0) {
        t = t.replace(/\s+/g, "-"), t += e ? "-fragment" : "-vertex";
        const i = e ? Zx : Qx;
        return i[t] ? (i[t]++, t += `-${i[t]}`) : i[t] = 1, r1.indexOf("#define SHADER_NAME") !== -1 ? r1 : `${`#define SHADER_NAME ${t}`}
${r1}`;
    }
    function qh(r1, t) {
        return t ? r1.replace("#version 300 es", "") : r1;
    }
    var Jx = Object.defineProperty, Zh = Object.getOwnPropertySymbols, t0 = Object.prototype.hasOwnProperty, e0 = Object.prototype.propertyIsEnumerable, Qh = (r1, t, e)=>t in r1 ? Jx(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Jh = (r1, t)=>{
        for(var e in t || (t = {}))t0.call(t, e) && Qh(r1, e, t[e]);
        if (Zh) for (var e of Zh(t))e0.call(t, e) && Qh(r1, e, t[e]);
        return r1;
    };
    const To = {
        stripVersion: qh,
        ensurePrecision: Wh,
        addProgramDefines: Vh,
        setProgramName: Kh,
        insertVersion: Yh
    }, So = Object.create(null), td = class ql {
        constructor(t){
            t = Jh(Jh({}, ql.defaultOptions), t);
            const e = t.fragment.indexOf("#version 300 es") !== -1, i = {
                stripVersion: e,
                ensurePrecision: {
                    requestedFragmentPrecision: t.preferredFragmentPrecision,
                    requestedVertexPrecision: t.preferredVertexPrecision,
                    maxSupportedVertexPrecision: "highp",
                    maxSupportedFragmentPrecision: jh()
                },
                setProgramName: {
                    name: t.name
                },
                addProgramDefines: e,
                insertVersion: e
            };
            let s = t.fragment, n = t.vertex;
            Object.keys(To).forEach((o)=>{
                const a = i[o];
                s = To[o](s, a, !0), n = To[o](n, a, !1);
            }), this.fragment = s, this.vertex = n, this._key = mr(`${this.vertex}:${this.fragment}`, "gl-program");
        }
        destroy() {
            this.fragment = null, this.vertex = null, this._attributeData = null, this._uniformData = null, this._uniformBlockData = null, this.transformFeedbackVaryings = null;
        }
        static from(t) {
            const e = `${t.vertex}:${t.fragment}`;
            return So[e] || (So[e] = new ql(t)), So[e];
        }
    };
    td.defaultOptions = {
        preferredVertexPrecision: "highp",
        preferredFragmentPrecision: "mediump"
    };
    let Mt = td;
    const ed = {
        uint8x2: {
            size: 2,
            stride: 2,
            normalised: !1
        },
        uint8x4: {
            size: 4,
            stride: 4,
            normalised: !1
        },
        sint8x2: {
            size: 2,
            stride: 2,
            normalised: !1
        },
        sint8x4: {
            size: 4,
            stride: 4,
            normalised: !1
        },
        unorm8x2: {
            size: 2,
            stride: 2,
            normalised: !0
        },
        unorm8x4: {
            size: 4,
            stride: 4,
            normalised: !0
        },
        snorm8x2: {
            size: 2,
            stride: 2,
            normalised: !0
        },
        snorm8x4: {
            size: 4,
            stride: 4,
            normalised: !0
        },
        uint16x2: {
            size: 2,
            stride: 4,
            normalised: !1
        },
        uint16x4: {
            size: 4,
            stride: 8,
            normalised: !1
        },
        sint16x2: {
            size: 2,
            stride: 4,
            normalised: !1
        },
        sint16x4: {
            size: 4,
            stride: 8,
            normalised: !1
        },
        unorm16x2: {
            size: 2,
            stride: 4,
            normalised: !0
        },
        unorm16x4: {
            size: 4,
            stride: 8,
            normalised: !0
        },
        snorm16x2: {
            size: 2,
            stride: 4,
            normalised: !0
        },
        snorm16x4: {
            size: 4,
            stride: 8,
            normalised: !0
        },
        float16x2: {
            size: 2,
            stride: 4,
            normalised: !1
        },
        float16x4: {
            size: 4,
            stride: 8,
            normalised: !1
        },
        float32: {
            size: 1,
            stride: 4,
            normalised: !1
        },
        float32x2: {
            size: 2,
            stride: 8,
            normalised: !1
        },
        float32x3: {
            size: 3,
            stride: 12,
            normalised: !1
        },
        float32x4: {
            size: 4,
            stride: 16,
            normalised: !1
        },
        uint32: {
            size: 1,
            stride: 4,
            normalised: !1
        },
        uint32x2: {
            size: 2,
            stride: 8,
            normalised: !1
        },
        uint32x3: {
            size: 3,
            stride: 12,
            normalised: !1
        },
        uint32x4: {
            size: 4,
            stride: 16,
            normalised: !1
        },
        sint32: {
            size: 1,
            stride: 4,
            normalised: !1
        },
        sint32x2: {
            size: 2,
            stride: 8,
            normalised: !1
        },
        sint32x3: {
            size: 3,
            stride: 12,
            normalised: !1
        },
        sint32x4: {
            size: 4,
            stride: 16,
            normalised: !1
        }
    };
    function ke(r1) {
        var t;
        return (t = ed[r1]) != null ? t : ed.float32;
    }
    const r0 = {
        f32: "float32",
        "vec2<f32>": "float32x2",
        "vec3<f32>": "float32x3",
        "vec4<f32>": "float32x4",
        vec2f: "float32x2",
        vec3f: "float32x3",
        vec4f: "float32x4",
        i32: "sint32",
        "vec2<i32>": "sint32x2",
        "vec3<i32>": "sint32x3",
        "vec4<i32>": "sint32x4",
        u32: "uint32",
        "vec2<u32>": "uint32x2",
        "vec3<u32>": "uint32x3",
        "vec4<u32>": "uint32x4",
        bool: "uint32",
        "vec2<bool>": "uint32x2",
        "vec3<bool>": "uint32x3",
        "vec4<bool>": "uint32x4"
    };
    function rd({ source: r1, entryPoint: t }) {
        var e;
        const i = {}, s = r1.indexOf(`fn ${t}`);
        if (s !== -1) {
            const n = r1.indexOf("->", s);
            if (n !== -1) {
                const o = r1.substring(s, n), a = /@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;
                let l;
                for(; (l = a.exec(o)) !== null;){
                    const u = (e = r0[l[3]]) != null ? e : "float32";
                    i[l[2]] = {
                        location: parseInt(l[1], 10),
                        format: u,
                        stride: ke(u).stride,
                        offset: 0,
                        instance: !1,
                        start: 0
                    };
                }
            }
        }
        return i;
    }
    function Ui(r1) {
        var t, e, i;
        const s = /(^|[^/])@(group|binding)\(\d+\)[^;]+;/g, n = /@group\((\d+)\)/, o = /@binding\((\d+)\)/, a = /var(<[^>]+>)? (\w+)/, l = /:\s*(\w+)/, u = /struct\s+(\w+)\s*{([^}]+)}/g, c = /(\w+)\s*:\s*([\w\<\>]+)/g, h = /struct\s+(\w+)/, p = (t = r1.match(s)) == null ? void 0 : t.map((m)=>({
                group: parseInt(m.match(n)[1], 10),
                binding: parseInt(m.match(o)[1], 10),
                name: m.match(a)[2],
                isUniform: m.match(a)[1] === "<uniform>",
                type: m.match(l)[1]
            }));
        if (!p) return {
            groups: [],
            structs: []
        };
        const f = (i = (e = r1.match(u)) == null ? void 0 : e.map((m)=>{
            const _ = m.match(h)[1], g = m.match(c).reduce((b, v)=>{
                const [y, T] = v.split(":");
                return b[y.trim()] = T.trim(), b;
            }, {});
            return g ? {
                name: _,
                members: g
            } : null;
        }).filter(({ name: m })=>p.some((_)=>_.type === m))) != null ? i : [];
        return {
            groups: p,
            structs: f
        };
    }
    var Le = ((r1)=>(r1[r1.VERTEX = 1] = "VERTEX", r1[r1.FRAGMENT = 2] = "FRAGMENT", r1[r1.COMPUTE = 4] = "COMPUTE", r1))(Le || {});
    function id({ groups: r1 }) {
        const t = [];
        for(let e = 0; e < r1.length; e++){
            const i = r1[e];
            t[i.group] || (t[i.group] = []), i.isUniform ? t[i.group].push({
                binding: i.binding,
                visibility: Le.VERTEX | Le.FRAGMENT,
                buffer: {
                    type: "uniform"
                }
            }) : i.type === "sampler" ? t[i.group].push({
                binding: i.binding,
                visibility: Le.FRAGMENT,
                sampler: {
                    type: "filtering"
                }
            }) : i.type === "texture_2d" && t[i.group].push({
                binding: i.binding,
                visibility: Le.FRAGMENT,
                texture: {
                    sampleType: "float",
                    viewDimension: "2d",
                    multisampled: !1
                }
            });
        }
        return t;
    }
    function sd({ groups: r1 }) {
        const t = [];
        for(let e = 0; e < r1.length; e++){
            const i = r1[e];
            t[i.group] || (t[i.group] = {}), t[i.group][i.name] = i.binding;
        }
        return t;
    }
    function nd(r1, t) {
        const e = new Set, i = new Set, s = [
            ...r1.structs,
            ...t.structs
        ].filter((o)=>e.has(o.name) ? !1 : (e.add(o.name), !0)), n = [
            ...r1.groups,
            ...t.groups
        ].filter((o)=>{
            const a = `${o.name}-${o.binding}`;
            return i.has(a) ? !1 : (i.add(a), !0);
        });
        return {
            structs: s,
            groups: n
        };
    }
    const Eo = Object.create(null);
    class bt {
        constructor(t){
            this._layoutKey = 0;
            var e, i;
            const { fragment: s, vertex: n, layout: o, gpuLayout: a, name: l } = t;
            if (this.name = l, this.fragment = s, this.vertex = n, s.source === n.source) {
                const u = Ui(s.source);
                this.structsAndGroups = u;
            } else {
                const u = Ui(n.source), c = Ui(s.source);
                this.structsAndGroups = nd(u, c);
            }
            this.layout = o != null ? o : sd(this.structsAndGroups), this.gpuLayout = a != null ? a : id(this.structsAndGroups), this.autoAssignGlobalUniforms = ((e = this.layout[0]) == null ? void 0 : e.globalUniforms) !== void 0, this.autoAssignLocalUniforms = ((i = this.layout[1]) == null ? void 0 : i.localUniforms) !== void 0, this._generateProgramKey();
        }
        _generateProgramKey() {
            const { vertex: t, fragment: e } = this, i = t.source + e.source + t.entryPoint + e.entryPoint;
            this._layoutKey = mr(i, "program");
        }
        get attributeData() {
            var t;
            return (t = this._attributeData) != null || (this._attributeData = rd(this.vertex)), this._attributeData;
        }
        destroy() {
            this.gpuLayout = null, this.layout = null, this.structsAndGroups = null, this.fragment = null, this.vertex = null;
        }
        static from(t) {
            const e = `${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;
            return Eo[e] || (Eo[e] = new bt(t)), Eo[e];
        }
    }
    function Ao(r1, t, e) {
        if (r1) for(const i in r1){
            const s = i.toLocaleLowerCase(), n = t[s];
            if (n) {
                let o = r1[i];
                i === "header" && (o = o.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "")), e && n.push(`//----${e}----//`), n.push(o);
            }
        }
    }
    const od = /\{\{(.*?)\}\}/g;
    function Po(r1) {
        var t, e;
        const i = {};
        return ((e = (t = r1.match(od)) == null ? void 0 : t.map((s)=>s.replace(/[{()}]/g, ""))) != null ? e : []).forEach((s)=>{
            i[s] = [];
        }), i;
    }
    function ad(r1, t) {
        let e;
        const i = /@in\s+([^;]+);/g;
        for(; (e = i.exec(r1)) !== null;)t.push(e[1]);
    }
    function Ro(r1, t, e = !1) {
        const i = [];
        ad(t, i), r1.forEach((a)=>{
            a.header && ad(a.header, i);
        });
        const s = i;
        e && s.sort();
        const n = s.map((a, l)=>`       @location(${l}) ${a},`).join(`
`);
        let o = t.replace(/@in\s+[^;]+;\s*/g, "");
        return o = o.replace("{{in}}", `
${n}
`), o;
    }
    function ld(r1, t) {
        let e;
        const i = /@out\s+([^;]+);/g;
        for(; (e = i.exec(r1)) !== null;)t.push(e[1]);
    }
    function i0(r1) {
        const t = /\b(\w+)\s*:/g.exec(r1);
        return t ? t[1] : "";
    }
    function s0(r1) {
        const t = /@.*?\s+/g;
        return r1.replace(t, "");
    }
    function ud(r1, t) {
        const e = [];
        ld(t, e), r1.forEach((l)=>{
            l.header && ld(l.header, e);
        });
        let i = 0;
        const s = e.sort().map((l)=>l.indexOf("builtin") > -1 ? l : `@location(${i++}) ${l}`).join(`,
`), n = e.sort().map((l)=>`       var ${s0(l)};`).join(`
`), o = `return VSOutput(
                ${e.sort().map((l)=>` ${i0(l)}`).join(`,
`)});`;
        let a = t.replace(/@out\s+[^;]+;\s*/g, "");
        return a = a.replace("{{struct}}", `
${s}
`), a = a.replace("{{start}}", `
${n}
`), a = a.replace("{{return}}", `
${o}
`), a;
    }
    function wo(r1, t) {
        let e = r1;
        for(const i in t){
            const s = t[i];
            s.join(`
`).length ? e = e.replace(`{{${i}}}`, `//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`) : e = e.replace(`{{${i}}}`, "");
        }
        return e;
    }
    const ye = Object.create(null), Mo = new Map;
    let n0 = 0;
    function cd({ template: r1, bits: t }) {
        const e = dd(r1, t);
        if (ye[e]) return ye[e];
        const { vertex: i, fragment: s } = o0(r1, t);
        return ye[e] = pd(i, s, t), ye[e];
    }
    function hd({ template: r1, bits: t }) {
        const e = dd(r1, t);
        return ye[e] || (ye[e] = pd(r1.vertex, r1.fragment, t)), ye[e];
    }
    function o0(r1, t) {
        const e = t.map((o)=>o.vertex).filter((o)=>!!o), i = t.map((o)=>o.fragment).filter((o)=>!!o);
        let s = Ro(e, r1.vertex, !0);
        s = ud(e, s);
        const n = Ro(i, r1.fragment, !0);
        return {
            vertex: s,
            fragment: n
        };
    }
    function dd(r1, t) {
        return t.map((e)=>(Mo.has(e) || Mo.set(e, n0++), Mo.get(e))).sort((e, i)=>e - i).join("-") + r1.vertex + r1.fragment;
    }
    function pd(r1, t, e) {
        const i = Po(r1), s = Po(t);
        return e.forEach((n)=>{
            Ao(n.vertex, i, n.name), Ao(n.fragment, s, n.name);
        }), {
            vertex: wo(r1, i),
            fragment: wo(t, s)
        };
    }
    const fd = `
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`, md = `
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`, gd = `
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`, _d = `
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`, bd = {
        name: "global-uniforms-bit",
        vertex: {
            header: `
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `
        }
    }, a0 = {
        name: "global-uniforms-ubo-bit",
        vertex: {
            header: `
          uniform globalUniforms {
            mat3 uProjectionMatrix;
            mat3 uWorldTransformMatrix;
            vec4 uWorldColorAlpha;
            vec2 uResolution;
          };
        `
        }
    }, vd = {
        name: "global-uniforms-bit",
        vertex: {
            header: `
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `
        }
    };
    var l0 = Object.defineProperty, yd = Object.getOwnPropertySymbols, u0 = Object.prototype.hasOwnProperty, c0 = Object.prototype.propertyIsEnumerable, xd = (r1, t, e)=>t in r1 ? l0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, h0 = (r1, t)=>{
        for(var e in t || (t = {}))u0.call(t, e) && xd(r1, e, t[e]);
        if (yd) for (var e of yd(t))c0.call(t, e) && xd(r1, e, t[e]);
        return r1;
    };
    function $e({ bits: r1, name: t }) {
        const e = cd({
            template: {
                fragment: md,
                vertex: fd
            },
            bits: [
                bd,
                ...r1
            ]
        });
        return bt.from({
            name: t,
            vertex: {
                source: e.vertex,
                entryPoint: "main"
            },
            fragment: {
                source: e.fragment,
                entryPoint: "main"
            }
        });
    }
    function Ne({ bits: r1, name: t }) {
        return new Mt(h0({
            name: t
        }, hd({
            template: {
                vertex: gd,
                fragment: _d
            },
            bits: [
                vd,
                ...r1
            ]
        })));
    }
    const ki = {
        name: "color-bit",
        vertex: {
            header: `
            @in aColor: vec4<f32>;
        `,
            main: `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `
        }
    }, Li = {
        name: "color-bit",
        vertex: {
            header: `
            in vec4 aColor;
        `,
            main: `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `
        }
    }, Co = {};
    function d0(r1) {
        const t = [];
        if (r1 === 1) t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"), t.push("@group(1) @binding(1) var textureSampler1: sampler;");
        else {
            let e = 0;
            for(let i = 0; i < r1; i++)t.push(`@group(1) @binding(${e++}) var textureSource${i + 1}: texture_2d<f32>;`), t.push(`@group(1) @binding(${e++}) var textureSampler${i + 1}: sampler;`);
        }
        return t.join(`
`);
    }
    function p0(r1) {
        const t = [];
        if (r1 === 1) t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
        else {
            t.push("switch vTextureId {");
            for(let e = 0; e < r1; e++)e === r1 - 1 ? t.push("  default:{") : t.push(`  case ${e}:{`), t.push(`      outColor = textureSampleGrad(textureSource${e + 1}, textureSampler${e + 1}, vUV, uvDx, uvDy);`), t.push("      break;}");
            t.push("}");
        }
        return t.join(`
`);
    }
    function $i(r1) {
        return Co[r1] || (Co[r1] = {
            name: "texture-batch-bit",
            vertex: {
                header: `
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,
                main: `
                vTextureId = aTextureIdAndRound.y;
            `,
                end: `
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `
            },
            fragment: {
                header: `
                @in @interpolate(flat) vTextureId: u32;
    
                ${d0(16)}
            `,
                main: `
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${p0(16)}
            `
            }
        }), Co[r1];
    }
    const Oo = {};
    function f0(r1) {
        const t = [];
        for(let e = 0; e < r1; e++)e > 0 && t.push("else"), e < r1 - 1 && t.push(`if(vTextureId < ${e}.5)`), t.push("{"), t.push(`	outColor = texture(uTextures[${e}], vUV);`), t.push("}");
        return t.join(`
`);
    }
    function Ni(r1) {
        return Oo[r1] || (Oo[r1] = {
            name: "texture-batch-bit",
            vertex: {
                header: `
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,
                main: `
                vTextureId = aTextureIdAndRound.y;
            `,
                end: `
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `
            },
            fragment: {
                header: `
                in float vTextureId;
    
                uniform sampler2D uTextures[${r1}];
              
            `,
                main: `
    
                ${f0(16)}
            `
            }
        }), Oo[r1];
    }
    const He = {
        name: "round-pixels-bit",
        vertex: {
            header: `
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `
        }
    }, Xe = {
        name: "round-pixels-bit",
        vertex: {
            header: `   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor((position * 0.5 + 0.5) * targetSize) / targetSize) * 2.0 - 1.0;
            }
        `
        }
    }, Td = new Int32Array(wt);
    for(let r1 = 0; r1 < wt; r1++)Td[r1] = r1;
    const Hi = new nt({
        uTextures: {
            value: Td,
            type: "i32",
            size: wt
        }
    }, {
        isStatic: !0
    });
    var vt = ((r1)=>(r1[r1.WEBGL = 1] = "WEBGL", r1[r1.WEBGPU = 2] = "WEBGPU", r1[r1.BOTH = 3] = "BOTH", r1))(vt || {}), m0 = Object.defineProperty, Xi = Object.getOwnPropertySymbols, Sd = Object.prototype.hasOwnProperty, Ed = Object.prototype.propertyIsEnumerable, Ad = (r1, t, e)=>t in r1 ? m0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, g0 = (r1, t)=>{
        for(var e in t || (t = {}))Sd.call(t, e) && Ad(r1, e, t[e]);
        if (Xi) for (var e of Xi(t))Ed.call(t, e) && Ad(r1, e, t[e]);
        return r1;
    }, _0 = (r1, t)=>{
        var e = {};
        for(var i in r1)Sd.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && Xi) for (var i of Xi(r1))t.indexOf(i) < 0 && Ed.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class yt extends dt {
        constructor(t){
            super(), this._uniformBindMap = Object.create(null), this._ownedBindGroups = [];
            let { gpuProgram: e, glProgram: i, groups: s, resources: n, compatibleRenderers: o, groupMap: a } = t;
            this.gpuProgram = e, this.glProgram = i, o === void 0 && (o = 0, e && (o |= vt.WEBGPU), i && (o |= vt.WEBGL)), this.compatibleRenderers = o;
            const l = {};
            if (!n && !s && (n = {}), n && s) throw new Error("[Shader] Cannot have both resources and groups");
            if (!e && s && !a) throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
            if (!e && s && a) for(const u in a)for(const c in a[u]){
                const h = a[u][c];
                l[h] = {
                    group: u,
                    binding: c,
                    name: h
                };
            }
            else if (e && s && !a) {
                const u = e.structsAndGroups.groups;
                a = {}, u.forEach((c)=>{
                    a[c.group] = a[c.group] || {}, a[c.group][c.binding] = c.name, l[c.name] = c;
                });
            } else if (n) {
                if (e) {
                    const u = e.structsAndGroups.groups;
                    a = {}, u.forEach((c)=>{
                        a[c.group] = a[c.group] || {}, a[c.group][c.binding] = c.name, l[c.name] = c;
                    });
                } else {
                    a = {}, s = {
                        99: new $t
                    }, this._ownedBindGroups.push(s[99]);
                    let u = 0;
                    for(const c in n)l[c] = {
                        group: 99,
                        binding: u,
                        name: c
                    }, a[99] = a[99] || {}, a[99][u] = c, u++;
                }
                s = {};
                for(const u in n){
                    const c = u;
                    let h = n[u];
                    !h.source && !h._resourceType && (h = new nt(h));
                    const p = l[c];
                    p && (s[p.group] || (s[p.group] = new $t, this._ownedBindGroups.push(s[p.group])), s[p.group].setResource(h, p.binding));
                }
            }
            this.groups = s, this._uniformBindMap = a, this.resources = this._buildResourceAccessor(s, l);
        }
        addResource(t, e, i) {
            var s, n;
            (s = this._uniformBindMap)[e] || (s[e] = {}), (n = this._uniformBindMap[e])[i] || (n[i] = t), this.groups[e] || (this.groups[e] = new $t, this._ownedBindGroups.push(this.groups[e]));
        }
        _buildResourceAccessor(t, e) {
            const i = {};
            for(const s in e){
                const n = e[s];
                Object.defineProperty(i, n.name, {
                    get () {
                        return t[n.group].getResource(n.binding);
                    },
                    set (o) {
                        t[n.group].setResource(o, n.binding);
                    }
                });
            }
            return i;
        }
        destroy(t = !1) {
            var e, i;
            this.emit("destroy", this), t && ((e = this.gpuProgram) == null || e.destroy(), (i = this.glProgram) == null || i.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach((s)=>{
                s.destroy();
            }), this._ownedBindGroups = null, this.resources = null, this.groups = null;
        }
        static from(t) {
            const e = t, { gpu: i, gl: s } = e, n = _0(e, [
                "gpu",
                "gl"
            ]);
            let o, a;
            return i && (o = bt.from(i)), s && (a = Mt.from(s)), new yt(g0({
                gpuProgram: o,
                glProgram: a
            }, n));
        }
    }
    const Pd = {
        name: "local-uniform-msdf-bit",
        vertex: {
            header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
            main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
            end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
        },
        fragment: {
            header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,
            main: ` 
            outColor = vColor * calculateMSDFAlpha(outColor, localUniforms.uDistance);
        `
        }
    }, Rd = {
        name: "local-uniform-msdf-bit",
        vertex: {
            header: `
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
            main: `
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,
            end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
        },
        fragment: {
            header: `
            uniform float uDistance;
         `,
            main: ` 
            outColor = vColor * calculateMSDFAlpha(outColor, uDistance);
        `
        }
    }, wd = {
        name: "msdf-bit",
        fragment: {
            header: `
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, distance:f32) -> f32 {
                
                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));
            
                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `
        }
    }, Md = {
        name: "msdf-bit",
        fragment: {
            header: `
            float calculateMSDFAlpha(vec4 msdfColor, float distance) {
                
                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));
               
                // SDF
                median = min(median, msdfColor.a);
            
                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
           
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                return alpha;
            }
        `
        }
    };
    class Cd extends yt {
        constructor(){
            const t = new nt({
                uColor: {
                    value: new Float32Array([
                        1,
                        1,
                        1,
                        1
                    ]),
                    type: "vec4<f32>"
                },
                uTransformMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uDistance: {
                    value: 4,
                    type: "f32"
                },
                uRound: {
                    value: 0,
                    type: "f32"
                }
            }), e = $e({
                name: "sdf-shader",
                bits: [
                    ki,
                    $i(wt),
                    Pd,
                    wd,
                    He
                ]
            }), i = Ne({
                name: "sdf-shader",
                bits: [
                    Li,
                    Ni(wt),
                    Rd,
                    Md,
                    Xe
                ]
            });
            super({
                glProgram: i,
                gpuProgram: e,
                resources: {
                    localUniforms: t,
                    batchSamplers: Hi
                }
            });
        }
    }
    class Go {
        constructor(t){
            this._gpuBitmapText = {}, this._renderer = t;
        }
        validateRenderable(t) {
            const e = this._getGpuBitmapText(t);
            return t._didTextUpdate && (t._didTextUpdate = !1, this._updateContext(t, e)), this._renderer.renderPipes.graphics.validateRenderable(e);
        }
        addRenderable(t, e) {
            const i = this._getGpuBitmapText(t);
            Od(t, i), t._didTextUpdate && (t._didTextUpdate = !1, this._updateContext(t, i)), this._renderer.renderPipes.graphics.addRenderable(i, e), i.context.customShader && this._updateDistanceField(t);
        }
        destroyRenderable(t) {
            this._destroyRenderableByUid(t.uid);
        }
        _destroyRenderableByUid(t) {
            X.return(this._gpuBitmapText[t]), this._gpuBitmapText[t] = null;
        }
        updateRenderable(t) {
            const e = this._getGpuBitmapText(t);
            Od(t, e), this._renderer.renderPipes.graphics.updateRenderable(e), e.context.customShader && this._updateDistanceField(t);
        }
        _updateContext(t, e) {
            var i;
            const { context: s } = e, n = Tr.getFont(t.text, t._style);
            s.clear(), n.distanceField.type !== "none" && (s.customShader || (this._sdfShader || (this._sdfShader = new Cd), s.customShader = this._sdfShader));
            const o = Array.from(t.text), a = t._style;
            let l = (((i = a._stroke) == null ? void 0 : i.width) || 0) / 2;
            l += n.baseLineOffset;
            const u = _o(o, a, n);
            let c = 0;
            const h = a.padding, p = u.scale;
            s.translate(-t._anchor._x * u.width - h, -t._anchor._y * (u.height + u.offsetY) - h).scale(p, p);
            const f = a._fill.color;
            for(let m = 0; m < u.lines.length; m++){
                const _ = u.lines[m];
                for(let g = 0; g < _.charPositions.length; g++){
                    const b = o[c++], v = n.chars[b];
                    v != null && v.texture && s.texture(v.texture, f || "black", Math.round(_.charPositions[g] + v.xOffset), Math.round(l + v.yOffset));
                }
                l += n.lineHeight;
            }
        }
        _getGpuBitmapText(t) {
            return this._gpuBitmapText[t.uid] || this.initGpuText(t);
        }
        initGpuText(t) {
            const e = X.get(Ue);
            return this._gpuBitmapText[t.uid] = e, this._updateContext(t, e), t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), this._gpuBitmapText[t.uid];
        }
        _updateDistanceField(t) {
            var e;
            const i = this._getGpuBitmapText(t).context, s = t._style.fontFamily, n = K.get(`${s}-bitmap`), { a: o, b: a, c: l, d: u } = t.groupTransform, c = Math.sqrt(o * o + a * a), h = Math.sqrt(l * l + u * u), p = (Math.abs(c) + Math.abs(h)) / 2, f = n.baseRenderedFontSize / t._style.fontSize, m = (e = t.resolution) != null ? e : this._renderer.resolution, _ = p * n.distanceField.range * (1 / f) * m;
            i.customShader.resources.localUniforms.uniforms.uDistance = _;
        }
        destroy() {
            var t;
            for(const e in this._gpuBitmapText)this._destroyRenderableByUid(e);
            this._gpuBitmapText = null, (t = this._sdfShader) == null || t.destroy(!0), this._sdfShader = null, this._renderer = null;
        }
    }
    Go.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "bitmapText"
    };
    function Od(r1, t) {
        t.groupTransform = r1.groupTransform, t.groupColorAlpha = r1.groupColorAlpha, t.groupColor = r1.groupColor, t.groupBlendMode = r1.groupBlendMode, t.globalDisplayStatus = r1.globalDisplayStatus, t.groupTransform = r1.groupTransform, t.localDisplayStatus = r1.localDisplayStatus, t.groupAlpha = r1.groupAlpha, t._roundPixels = r1._roundPixels;
    }
    U.add(Go, $h, Lh);
    class Bo {
        constructor(t){
            this._gpuText = Object.create(null), this._renderer = t;
        }
        validateRenderable(t) {
            const e = this._getGpuText(t), i = t._getKey();
            return e.textureNeedsUploading ? (e.textureNeedsUploading = !1, !0) : e.currentKey !== i;
        }
        addRenderable(t) {
            const e = this._getGpuText(t).batchableSprite;
            t._didTextUpdate && this._updateText(t), this._renderer.renderPipes.batch.addToBatch(e);
        }
        updateRenderable(t) {
            const e = this._getGpuText(t).batchableSprite;
            t._didTextUpdate && this._updateText(t), e.batcher.updateElement(e);
        }
        destroyRenderable(t) {
            this._destroyRenderableById(t.uid);
        }
        _destroyRenderableById(t) {
            const e = this._gpuText[t];
            this._renderer.htmlText.decreaseReferenceCount(e.currentKey), X.return(e.batchableSprite), this._gpuText[t] = null;
        }
        _updateText(t) {
            const e = t._getKey(), i = this._getGpuText(t), s = i.batchableSprite;
            i.currentKey !== e && this._updateGpuText(t).catch((o)=>{
                console.error(o);
            }), t._didTextUpdate = !1;
            const n = t._style.padding;
            lr(s.bounds, t._anchor, s.texture, n);
        }
        async _updateGpuText(t) {
            var e;
            t._didTextUpdate = !1;
            const i = this._getGpuText(t);
            if (i.generatingTexture) return;
            const s = t._getKey();
            this._renderer.htmlText.decreaseReferenceCount(i.currentKey), i.generatingTexture = !0, i.currentKey = s;
            const n = (e = t.resolution) != null ? e : this._renderer.resolution, o = await this._renderer.htmlText.getManagedTexture(t.text, n, t._style, t._getKey()), a = i.batchableSprite;
            a.texture = i.texture = o, i.generatingTexture = !1, i.textureNeedsUploading = !0, t.onViewUpdate();
            const l = t._style.padding;
            lr(a.bounds, t._anchor, a.texture, l);
        }
        _getGpuText(t) {
            return this._gpuText[t.uid] || this.initGpuText(t);
        }
        initGpuText(t) {
            const e = {
                texture: P.EMPTY,
                currentKey: "--",
                batchableSprite: X.get(Pi),
                textureNeedsUploading: !1,
                generatingTexture: !1
            }, i = e.batchableSprite;
            return i.renderable = t, i.texture = P.EMPTY, i.bounds = {
                minX: 0,
                maxX: 1,
                minY: 0,
                maxY: 0
            }, i.roundPixels = this._renderer._roundPixels | t._roundPixels, this._gpuText[t.uid] = e, t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), e;
        }
        destroy() {
            for(const t in this._gpuText)this._destroyRenderableById(t);
            this._gpuText = null, this._renderer = null;
        }
    }
    Bo.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "htmlText"
    };
    function Gd() {
        const { userAgent: r1 } = z.get().getNavigator();
        return /^((?!chrome|android).)*safari/i.test(r1);
    }
    const Io = "http://www.w3.org/2000/svg", Fo = "http://www.w3.org/1999/xhtml";
    class Do {
        constructor(){
            this.svgRoot = document.createElementNS(Io, "svg"), this.foreignObject = document.createElementNS(Io, "foreignObject"), this.domElement = document.createElementNS(Fo, "div"), this.styleElement = document.createElementNS(Fo, "style"), this.image = new Image;
            const { foreignObject: t, svgRoot: e, styleElement: i, domElement: s } = this;
            t.setAttribute("width", "10000"), t.setAttribute("height", "10000"), t.style.overflow = "hidden", e.appendChild(t), t.appendChild(i), t.appendChild(s);
        }
    }
    function Bd(r1) {
        const t = r1._stroke, e = r1._fill, i = [
            `div { ${[
                `color: ${Y.shared.setValue(e.color).toHex()}`,
                `font-size: ${r1.fontSize}px`,
                `font-family: ${r1.fontFamily}`,
                `font-weight: ${r1.fontWeight}`,
                `font-style: ${r1.fontStyle}`,
                `font-variant: ${r1.fontVariant}`,
                `letter-spacing: ${r1.letterSpacing}px`,
                `text-align: ${r1.align}`,
                `padding: ${r1.padding}px`,
                `white-space: ${r1.whiteSpace === "pre" && r1.wordWrap ? "pre-wrap" : r1.whiteSpace}`,
                ...r1.lineHeight ? [
                    `line-height: ${r1.lineHeight}px`
                ] : [],
                ...r1.wordWrap ? [
                    `word-wrap: ${r1.breakWords ? "break-all" : "break-word"}`,
                    `max-width: ${r1.wordWrapWidth}px`
                ] : [],
                ...t ? [
                    Fd(t)
                ] : [],
                ...r1.dropShadow ? [
                    Id(r1.dropShadow)
                ] : [],
                ...r1.cssOverrides
            ].join(";")} }`
        ];
        return b0(r1.tagStyles, i), i.join(" ");
    }
    function Id(r1) {
        const t = Y.shared.setValue(r1.color).setAlpha(r1.alpha).toHexa(), e = Math.round(Math.cos(r1.angle) * r1.distance), i = Math.round(Math.sin(r1.angle) * r1.distance), s = `${e}px ${i}px`;
        return r1.blur > 0 ? `text-shadow: ${s} ${r1.blur}px ${t}` : `text-shadow: ${s} ${t}`;
    }
    function Fd(r1) {
        return [
            `-webkit-text-stroke-width: ${r1.width}px`,
            `-webkit-text-stroke-color: ${Y.shared.setValue(r1.color).toHex()}`,
            `text-stroke-width: ${r1.width}px`,
            `text-stroke-color: ${Y.shared.setValue(r1.color).toHex()}`,
            "paint-order: stroke"
        ].join(";");
    }
    const Dd = {
        fontSize: "font-size: {{VALUE}}px",
        fontFamily: "font-family: {{VALUE}}",
        fontWeight: "font-weight: {{VALUE}}",
        fontStyle: "font-style: {{VALUE}}",
        fontVariant: "font-variant: {{VALUE}}",
        letterSpacing: "letter-spacing: {{VALUE}}px",
        align: "text-align: {{VALUE}}",
        padding: "padding: {{VALUE}}px",
        whiteSpace: "white-space: {{VALUE}}",
        lineHeight: "line-height: {{VALUE}}px",
        wordWrapWidth: "max-width: {{VALUE}}px"
    }, Ud = {
        fill: (r1)=>`color: ${Y.shared.setValue(r1).toHex()}`,
        breakWords: (r1)=>`word-wrap: ${r1 ? "break-all" : "break-word"}`,
        stroke: Fd,
        dropShadow: Id
    };
    function b0(r1, t) {
        for(const e in r1){
            const i = r1[e], s = [];
            for(const n in i)Ud[n] ? s.push(Ud[n](i[n])) : Dd[n] && s.push(Dd[n].replace("{{VALUE}}", i[n]));
            t.push(`${e} { ${s.join(";")} }`);
        }
    }
    class xe extends Yt {
        constructor(t = {}){
            var e, i;
            super(t), this._cssOverrides = [], (e = this.cssOverrides) != null || (this.cssOverrides = t.cssOverrides), this.tagStyles = (i = t.tagStyles) != null ? i : {};
        }
        set cssOverrides(t) {
            this._cssOverrides = t instanceof Array ? t : [
                t
            ], this.update();
        }
        get cssOverrides() {
            return this._cssOverrides;
        }
        _generateKey() {
            return this._styleKey = po(this) + this._cssOverrides.join("-"), this._styleKey;
        }
        update() {
            this._cssStyle = null, super.update();
        }
        clone() {
            return new xe({
                align: this.align,
                breakWords: this.breakWords,
                dropShadow: this.dropShadow,
                fill: this._fill,
                fontFamily: this.fontFamily,
                fontSize: this.fontSize,
                fontStyle: this.fontStyle,
                fontVariant: this.fontVariant,
                fontWeight: this.fontWeight,
                letterSpacing: this.letterSpacing,
                lineHeight: this.lineHeight,
                padding: this.padding,
                stroke: this._stroke,
                whiteSpace: this.whiteSpace,
                wordWrap: this.wordWrap,
                wordWrapWidth: this.wordWrapWidth,
                cssOverrides: this.cssOverrides
            });
        }
        get cssStyle() {
            return this._cssStyle || (this._cssStyle = Bd(this)), this._cssStyle;
        }
        addOverride(...t) {
            const e = t.filter((i)=>!this.cssOverrides.includes(i));
            e.length > 0 && (this.cssOverrides.push(...e), this.update());
        }
        removeOverride(...t) {
            const e = t.filter((i)=>this.cssOverrides.includes(i));
            e.length > 0 && (this.cssOverrides = this.cssOverrides.filter((i)=>!e.includes(i)), this.update());
        }
        set fill(t) {
            super.fill = t;
        }
        set stroke(t) {
            super.stroke = t;
        }
    }
    function kd(r1, t) {
        const e = t.fontFamily, i = [], s = {}, n = /font-family:([^;"\s]+)/g, o = r1.match(n);
        function a(l) {
            s[l] || (i.push(l), s[l] = !0);
        }
        if (Array.isArray(e)) for(let l = 0; l < e.length; l++)a(e[l]);
        else a(e);
        o && o.forEach((l)=>{
            const u = l.split(":")[1].trim();
            a(u);
        });
        for(const l in t.tagStyles){
            const u = t.tagStyles[l].fontFamily;
            a(u);
        }
        return i;
    }
    async function Ld(r1) {
        const t = await (await z.get().fetch(r1)).blob(), e = new FileReader;
        return await new Promise((i, s)=>{
            e.onloadend = ()=>i(e.result), e.onerror = s, e.readAsDataURL(t);
        });
    }
    async function Uo(r1, t) {
        const e = await Ld(t);
        return `@font-face {
        font-family: "${r1.fontFamily}";
        src: url('${e}');
        font-weight: ${r1.fontWeight};
        font-style: ${r1.fontStyle};
    }`;
    }
    const Er = new Map;
    async function $d(r1, t, e) {
        const i = r1.filter((s)=>K.has(`${s}-and-url`)).map((s, n)=>{
            if (!Er.has(s)) {
                const { url: o } = K.get(`${s}-and-url`);
                n === 0 ? Er.set(s, Uo(t, o)) : Er.set(s, Uo({
                    fontWeight: e.fontWeight,
                    fontStyle: e.fontStyle,
                    fontFamily: s
                }, o));
            }
            return Er.get(s);
        });
        return (await Promise.all(i)).join(`
`);
    }
    function Nd(r1, t, e, i, s) {
        const { domElement: n, styleElement: o, svgRoot: a } = s;
        n.innerHTML = `<style>${t.cssStyle}</style><div>${r1}</div>`, n.setAttribute("style", `transform: scale(${e});transform-origin: top left; display: inline-block`), o.textContent = i;
        const { width: l, height: u } = s.image;
        return a.setAttribute("width", l.toString()), a.setAttribute("height", u.toString()), new XMLSerializer().serializeToString(a);
    }
    function Hd(r1, t) {
        const e = Vt.getOptimalCanvasAndContext(r1.width, r1.height, t), { context: i } = e;
        return i.clearRect(0, 0, r1.width, r1.height), i.drawImage(r1, 0, 0), Vt.returnCanvasAndContext(e), e.canvas;
    }
    function Xd(r1, t, e) {
        return new Promise(async (i)=>{
            e && await new Promise((s)=>setTimeout(s, 100)), r1.onload = ()=>{
                i();
            }, r1.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(t)}`, r1.crossOrigin = "anonymous";
        });
    }
    let zd;
    function ko(r1, t, e, i) {
        i = i || zd || (zd = new Do);
        const { domElement: s, styleElement: n, svgRoot: o } = i;
        s.innerHTML = `<style>${t.cssStyle}</style><div>${r1}</div>`, s.setAttribute("style", "transform-origin: top left; display: inline-block"), e && (n.textContent = e), document.body.appendChild(o);
        const a = s.getBoundingClientRect();
        o.remove();
        const l = Ft.measureFont(t.fontStyle).descent;
        return {
            width: a.width,
            height: a.height + l
        };
    }
    class zi {
        constructor(t){
            this._activeTextures = {}, this._renderer = t, this._createCanvas = t.type === vt.WEBGPU;
        }
        getTexture(t) {
            return this._buildTexturePromise(t.text, t.resolution, t.style);
        }
        getManagedTexture(t, e, i, s) {
            if (this._activeTextures[s]) return this._increaseReferenceCount(s), this._activeTextures[s].promise;
            const n = this._buildTexturePromise(t, e, i).then((o)=>(this._activeTextures[s].texture = o, o));
            return this._activeTextures[s] = {
                texture: null,
                promise: n,
                usageCount: 1
            }, n;
        }
        async _buildTexturePromise(t, e, i) {
            const s = X.get(Do), n = kd(t, i), o = await $d(n, i, xe.defaultTextStyle), a = ko(t, i, o, s), l = Math.ceil(Math.ceil(Math.max(1, a.width) + i.padding * 2) * e), u = Math.ceil(Math.ceil(Math.max(1, a.height) + i.padding * 2) * e), c = s.image;
            c.width = l | 0, c.height = u | 0;
            const h = Nd(t, i, e, o, s);
            await Xd(c, h, Gd() && n.length > 0);
            let p = c;
            this._createCanvas && (p = Hd(c, e));
            const f = Zn(p, c.width, c.height, e);
            return this._createCanvas && this._renderer.texture.initSource(f.source), X.return(s), f;
        }
        _increaseReferenceCount(t) {
            this._activeTextures[t].usageCount++;
        }
        decreaseReferenceCount(t) {
            const e = this._activeTextures[t];
            e && (e.usageCount--, e.usageCount === 0 && (e.texture ? this._cleanUp(e) : e.promise.then((i)=>{
                e.texture = i, this._cleanUp(e);
            }).catch(()=>{}), this._activeTextures[t] = null));
        }
        _cleanUp(t) {
            ct.returnTexture(t.texture), t.texture.source.resource = null, t.texture.source.uploadMethodId = "unknown";
        }
        getReferenceCount(t) {
            return this._activeTextures[t].usageCount;
        }
        destroy() {
            this._activeTextures = null;
        }
    }
    zi.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "htmlText"
    }, zi.defaultFontOptions = {
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: "normal"
    }, U.add(zi), U.add(Bo);
    var v0 = Object.defineProperty, jd = Object.getOwnPropertySymbols, y0 = Object.prototype.hasOwnProperty, x0 = Object.prototype.propertyIsEnumerable, Vd = (r1, t, e)=>t in r1 ? v0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Wd = (r1, t)=>{
        for(var e in t || (t = {}))y0.call(t, e) && Vd(r1, e, t[e]);
        if (jd) for (var e of jd(t))x0.call(t, e) && Vd(r1, e, t[e]);
        return r1;
    };
    const Yd = class wb extends Ge {
        constructor(...t){
            var e;
            let i = (e = t[0]) != null ? e : {};
            i instanceof Float32Array && (i = {
                positions: i,
                uvs: t[1],
                indices: t[2]
            }), i = Wd(Wd({}, wb.defaultOptions), i);
            const s = i.positions || new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]), n = i.uvs || new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]), o = i.indices || new Uint32Array([
                0,
                1,
                2,
                0,
                2,
                3
            ]), a = i.shrinkBuffersToFit, l = new _t({
                data: s,
                label: "attribute-mesh-positions",
                shrinkToFit: a,
                usage: $.VERTEX | $.COPY_DST
            }), u = new _t({
                data: n,
                label: "attribute-mesh-uvs",
                shrinkToFit: a,
                usage: $.VERTEX | $.COPY_DST
            }), c = new _t({
                data: o,
                label: "index-mesh-buffer",
                shrinkToFit: a,
                usage: $.INDEX | $.COPY_DST
            });
            super({
                attributes: {
                    aPosition: {
                        buffer: l,
                        format: "float32x2",
                        stride: 8,
                        offset: 0
                    },
                    aUV: {
                        buffer: u,
                        format: "float32x2",
                        stride: 8,
                        offset: 0
                    }
                },
                indexBuffer: c,
                topology: i.topology
            }), this.batchMode = "auto";
        }
        get positions() {
            return this.attributes.aPosition.buffer.data;
        }
        set positions(t) {
            this.attributes.aPosition.buffer.data = t;
        }
        get uvs() {
            return this.attributes.aUV.buffer.data;
        }
        set uvs(t) {
            this.attributes.aUV.buffer.data = t;
        }
        get indices() {
            return this.indexBuffer.data;
        }
        set indices(t) {
            this.indexBuffer.data = t;
        }
    };
    Yd.defaultOptions = {
        topology: "triangle-list",
        shrinkBuffersToFit: !1
    };
    let te = Yd;
    var T0 = Object.defineProperty, S0 = Object.defineProperties, E0 = Object.getOwnPropertyDescriptors, Kd = Object.getOwnPropertySymbols, A0 = Object.prototype.hasOwnProperty, P0 = Object.prototype.propertyIsEnumerable, qd = (r1, t, e)=>t in r1 ? T0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Zd = (r1, t)=>{
        for(var e in t || (t = {}))A0.call(t, e) && qd(r1, e, t[e]);
        if (Kd) for (var e of Kd(t))P0.call(t, e) && qd(r1, e, t[e]);
        return r1;
    }, Qd = (r1, t)=>S0(r1, E0(t));
    const ze = {
        name: "local-uniform-bit",
        vertex: {
            header: `

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
            main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
            end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
        }
    }, Jd = Qd(Zd({}, ze), {
        vertex: Qd(Zd({}, ze.vertex), {
            header: ze.vertex.header.replace("group(1)", "group(2)")
        })
    }), ji = {
        name: "local-uniform-bit",
        vertex: {
            header: `

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
            main: `
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,
            end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
        }
    }, tp = {
        name: "tiling-bit",
        vertex: {
            header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
            main: `
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `
        },
        fragment: {
            header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
            main: `

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            } 

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `
        }
    }, ep = {
        name: "tiling-bit",
        vertex: {
            header: `
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;
        
        `,
            main: `
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `
        },
        fragment: {
            header: `
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,
            main: `

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
        
        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0
    
        `
        }
    };
    let Lo, $o;
    class rp extends yt {
        constructor(){
            Lo != null || (Lo = $e({
                name: "tiling-sprite-shader",
                bits: [
                    ze,
                    tp,
                    He
                ]
            })), $o != null || ($o = Ne({
                name: "tiling-sprite-shader",
                bits: [
                    ji,
                    ep,
                    Xe
                ]
            }));
            const t = new nt({
                uMapCoord: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uClampFrame: {
                    value: new Float32Array([
                        0,
                        0,
                        1,
                        1
                    ]),
                    type: "vec4<f32>"
                },
                uClampOffset: {
                    value: new Float32Array([
                        0,
                        0
                    ]),
                    type: "vec2<f32>"
                },
                uTextureTransform: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uSizeAnchor: {
                    value: new Float32Array([
                        100,
                        100,
                        .5,
                        .5
                    ]),
                    type: "vec4<f32>"
                }
            });
            super({
                glProgram: $o,
                gpuProgram: Lo,
                resources: {
                    localUniforms: new nt({
                        uTransformMatrix: {
                            value: new B,
                            type: "mat3x3<f32>"
                        },
                        uColor: {
                            value: new Float32Array([
                                1,
                                1,
                                1,
                                1
                            ]),
                            type: "vec4<f32>"
                        },
                        uRound: {
                            value: 0,
                            type: "f32"
                        }
                    }),
                    tilingUniforms: t,
                    uTexture: P.EMPTY.source,
                    uSampler: P.EMPTY.source.style
                }
            });
        }
        updateUniforms(t, e, i, s, n, o) {
            const a = this.resources.tilingUniforms, l = o.width, u = o.height, c = o.textureMatrix, h = a.uniforms.uTextureTransform;
            h.set(i.a * l / t, i.b * l / e, i.c * u / t, i.d * u / e, i.tx / t, i.ty / e), h.invert(), a.uniforms.uMapCoord = c.mapCoord, a.uniforms.uClampFrame = c.uClampFrame, a.uniforms.uClampOffset = c.uClampOffset, a.uniforms.uTextureTransform = h, a.uniforms.uSizeAnchor[0] = t, a.uniforms.uSizeAnchor[1] = e, a.uniforms.uSizeAnchor[2] = s, a.uniforms.uSizeAnchor[3] = n, o && (this.resources.uTexture = o.source, this.resources.uSampler = o.source.style);
        }
    }
    class ip extends te {
        constructor(){
            super({
                positions: new Float32Array([
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1
                ]),
                uvs: new Float32Array([
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1
                ]),
                indices: new Uint32Array([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ])
            });
        }
    }
    function sp(r1, t) {
        const e = r1.anchor.x, i = r1.anchor.y;
        t[0] = -e * r1.width, t[1] = -i * r1.height, t[2] = (1 - e) * r1.width, t[3] = -i * r1.height, t[4] = (1 - e) * r1.width, t[5] = (1 - i) * r1.height, t[6] = -e * r1.width, t[7] = (1 - i) * r1.height;
    }
    function np(r1, t, e, i) {
        let s = 0;
        const n = r1.length / (t || 2), o = i.a, a = i.b, l = i.c, u = i.d, c = i.tx, h = i.ty;
        for(e *= t; s < n;){
            const p = r1[e], f = r1[e + 1];
            r1[e] = o * p + l * f + c, r1[e + 1] = a * p + u * f + h, e += t, s++;
        }
    }
    function op(r1, t) {
        const e = r1.texture, i = e.frame.width, s = e.frame.height;
        let n = 0, o = 0;
        r1._applyAnchorToTexture && (n = r1.anchor.x, o = r1.anchor.y), t[0] = t[6] = -n, t[2] = t[4] = 1 - n, t[1] = t[3] = -o, t[5] = t[7] = 1 - o;
        const a = B.shared;
        a.copyFrom(r1._tileTransform.matrix), a.tx /= r1.width, a.ty /= r1.height, a.invert(), a.scale(r1.width / i, r1.height / s), np(t, 2, 0, a);
    }
    const Vi = new ip;
    class No {
        constructor(t){
            this._tilingSpriteDataHash = Object.create(null), this._renderer = t;
        }
        validateRenderable(t) {
            const e = this._getTilingSpriteData(t), i = e.canBatch;
            this._updateCanBatch(t);
            const s = e.canBatch;
            if (s && s === i) {
                const { batchableMesh: n } = e;
                if (n.texture._source !== t.texture._source) return !n.batcher.checkAndUpdateTexture(n, t.texture);
            }
            return i !== s;
        }
        addRenderable(t, e) {
            const i = this._renderer.renderPipes.batch;
            this._updateCanBatch(t);
            const s = this._getTilingSpriteData(t), { geometry: n, canBatch: o } = s;
            if (o) {
                s.batchableMesh || (s.batchableMesh = new Ai);
                const a = s.batchableMesh;
                t._didTilingSpriteUpdate && (t._didTilingSpriteUpdate = !1, this._updateBatchableMesh(t), a.geometry = n, a.mesh = t, a.texture = t._texture), a.roundPixels = this._renderer._roundPixels | t._roundPixels, i.addToBatch(a);
            } else i.break(e), s.shader || (s.shader = new rp), this.updateRenderable(t), e.add(t);
        }
        execute(t) {
            const { shader: e } = this._tilingSpriteDataHash[t.uid];
            e.groups[0] = this._renderer.globalUniforms.bindGroup;
            const i = e.resources.localUniforms.uniforms;
            i.uTransformMatrix = t.groupTransform, i.uRound = this._renderer._roundPixels | t._roundPixels, fr(t.groupColorAlpha, i.uColor, 0), this._renderer.encoder.draw({
                geometry: Vi,
                shader: e,
                state: Bt.default2d
            });
        }
        updateRenderable(t) {
            const e = this._getTilingSpriteData(t), { canBatch: i } = e;
            if (i) {
                const { batchableMesh: s } = e;
                t._didTilingSpriteUpdate && this._updateBatchableMesh(t), s.batcher.updateElement(s);
            } else if (t._didTilingSpriteUpdate) {
                const { shader: s } = e;
                s.updateUniforms(t.width, t.height, t._tileTransform.matrix, t.anchor.x, t.anchor.y, t.texture);
            }
            t._didTilingSpriteUpdate = !1;
        }
        destroyRenderable(t) {
            var e;
            const i = this._getTilingSpriteData(t);
            i.batchableMesh = null, (e = i.shader) == null || e.destroy(), this._tilingSpriteDataHash[t.uid] = null;
        }
        _getTilingSpriteData(t) {
            return this._tilingSpriteDataHash[t.uid] || this._initTilingSpriteData(t);
        }
        _initTilingSpriteData(t) {
            const e = new te({
                indices: Vi.indices,
                positions: Vi.positions.slice(),
                uvs: Vi.uvs.slice()
            });
            return this._tilingSpriteDataHash[t.uid] = {
                canBatch: !0,
                renderable: t,
                geometry: e
            }, t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), this._tilingSpriteDataHash[t.uid];
        }
        _updateBatchableMesh(t) {
            const e = this._getTilingSpriteData(t), { geometry: i } = e, s = t.texture.source.style;
            s.addressMode !== "repeat" && (s.addressMode = "repeat", s.update()), op(t, i.uvs), sp(t, i.positions);
        }
        destroy() {
            for(const t in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[t].renderable);
            this._tilingSpriteDataHash = null, this._renderer = null;
        }
        _updateCanBatch(t) {
            const e = this._getTilingSpriteData(t), i = t.texture;
            let s = !0;
            return this._renderer.type === vt.WEBGL && (s = this._renderer.context.supports.nonPowOf2wrapping), e.canBatch = i.textureMatrix.isSimple && (s || i.source.isPowerOfTwo), e.canBatch;
        }
    }
    No.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "tilingSprite"
    }, U.add(No);
    var R0 = Object.defineProperty, ap = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, M0 = Object.prototype.propertyIsEnumerable, lp = (r1, t, e)=>t in r1 ? R0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, up = (r1, t)=>{
        for(var e in t || (t = {}))w0.call(t, e) && lp(r1, e, t[e]);
        if (ap) for (var e of ap(t))M0.call(t, e) && lp(r1, e, t[e]);
        return r1;
    };
    const cp = class Mb extends te {
        constructor(...t){
            var e;
            super({});
            let i = (e = t[0]) != null ? e : {};
            typeof i == "number" && (i = {
                width: i,
                height: t[1],
                verticesX: t[2],
                verticesY: t[3]
            }), this.build(i);
        }
        build(t) {
            var e, i, s, n;
            t = up(up({}, Mb.defaultOptions), t), this.verticesX = (e = this.verticesX) != null ? e : t.verticesX, this.verticesY = (i = this.verticesY) != null ? i : t.verticesY, this.width = (s = this.width) != null ? s : t.width, this.height = (n = this.height) != null ? n : t.height;
            const o = this.verticesX * this.verticesY, a = [], l = [], u = [], c = this.verticesX - 1, h = this.verticesY - 1, p = this.width / c, f = this.height / h;
            for(let _ = 0; _ < o; _++){
                const g = _ % this.verticesX, b = _ / this.verticesX | 0;
                a.push(g * p, b * f), l.push(g / c, b / h);
            }
            const m = c * h;
            for(let _ = 0; _ < m; _++){
                const g = _ % c, b = _ / c | 0, v = b * this.verticesX + g, y = b * this.verticesX + g + 1, T = (b + 1) * this.verticesX + g, E = (b + 1) * this.verticesX + g + 1;
                u.push(v, y, T, y, E, T);
            }
            this.buffers[0].data = new Float32Array(a), this.buffers[1].data = new Float32Array(l), this.indexBuffer.data = new Uint32Array(u), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update();
        }
    };
    cp.defaultOptions = {
        width: 100,
        height: 100,
        verticesX: 10,
        verticesY: 10
    };
    let Ho = cp;
    var C0 = Object.defineProperty, hp = Object.getOwnPropertySymbols, O0 = Object.prototype.hasOwnProperty, G0 = Object.prototype.propertyIsEnumerable, dp = (r1, t, e)=>t in r1 ? C0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, pp = (r1, t)=>{
        for(var e in t || (t = {}))O0.call(t, e) && dp(r1, e, t[e]);
        if (hp) for (var e of hp(t))G0.call(t, e) && dp(r1, e, t[e]);
        return r1;
    };
    const fp = class Cb extends Ho {
        constructor(t = {}){
            t = pp(pp({}, Cb.defaultOptions), t), super({
                width: t.width,
                height: t.height,
                verticesX: 4,
                verticesY: 4
            }), this.update(t);
        }
        update(t) {
            var e, i, s, n, o, a, l, u;
            this.width = (e = t.width) != null ? e : this.width, this.height = (i = t.height) != null ? i : this.height, this._originalWidth = (s = t.originalWidth) != null ? s : this._originalWidth, this._originalHeight = (n = t.originalHeight) != null ? n : this._originalHeight, this._leftWidth = (o = t.leftWidth) != null ? o : this._leftWidth, this._rightWidth = (a = t.rightWidth) != null ? a : this._rightWidth, this._topHeight = (l = t.topHeight) != null ? l : this._topHeight, this._bottomHeight = (u = t.bottomHeight) != null ? u : this._bottomHeight, this.updateUvs(), this.updatePositions();
        }
        updatePositions() {
            const t = this.positions, e = this._leftWidth + this._rightWidth, i = this.width > e ? 1 : this.width / e, s = this._topHeight + this._bottomHeight, n = this.height > s ? 1 : this.height / s, o = Math.min(i, n);
            t[9] = t[11] = t[13] = t[15] = this._topHeight * o, t[17] = t[19] = t[21] = t[23] = this.height - this._bottomHeight * o, t[25] = t[27] = t[29] = t[31] = this.height, t[2] = t[10] = t[18] = t[26] = this._leftWidth * o, t[4] = t[12] = t[20] = t[28] = this.width - this._rightWidth * o, t[6] = t[14] = t[22] = t[30] = this.width, this.getBuffer("aPosition").update();
        }
        updateUvs() {
            const t = this.uvs;
            t[0] = t[8] = t[16] = t[24] = 0, t[1] = t[3] = t[5] = t[7] = 0, t[6] = t[14] = t[22] = t[30] = 1, t[25] = t[27] = t[29] = t[31] = 1;
            const e = 1 / this._originalWidth, i = 1 / this._originalHeight;
            t[2] = t[10] = t[18] = t[26] = e * this._leftWidth, t[9] = t[11] = t[13] = t[15] = i * this._topHeight, t[4] = t[12] = t[20] = t[28] = 1 - e * this._rightWidth, t[17] = t[19] = t[21] = t[23] = 1 - i * this._bottomHeight, this.getBuffer("aUV").update();
        }
    };
    fp.defaultOptions = {
        width: 100,
        height: 100,
        leftWidth: 10,
        topHeight: 10,
        rightWidth: 10,
        bottomHeight: 10,
        originalWidth: 100,
        originalHeight: 100
    };
    let ee = fp;
    class Xo {
        constructor(t){
            this._gpuSpriteHash = Object.create(null), this._renderer = t;
        }
        addRenderable(t, e) {
            const i = this._getGpuSprite(t);
            t._didSpriteUpdate && this._updateBatchableSprite(t, i), this._renderer.renderPipes.batch.addToBatch(i);
        }
        updateRenderable(t) {
            const e = this._gpuSpriteHash[t.uid];
            t._didSpriteUpdate && this._updateBatchableSprite(t, e), e.batcher.updateElement(e);
        }
        validateRenderable(t) {
            const e = t._texture, i = this._getGpuSprite(t);
            return i.texture._source !== e._source ? !i.batcher.checkAndUpdateTexture(i, e) : !1;
        }
        destroyRenderable(t) {
            const e = this._gpuSpriteHash[t.uid];
            X.return(e), this._gpuSpriteHash[t.uid] = null;
        }
        _updateBatchableSprite(t, e) {
            t._didSpriteUpdate = !1, e.geometry.update(t), e.texture = t._texture;
        }
        _getGpuSprite(t) {
            return this._gpuSpriteHash[t.uid] || this._initGPUSprite(t);
        }
        _initGPUSprite(t) {
            const e = new Ai;
            return e.geometry = new ee, e.mesh = t, e.texture = t._texture, e.roundPixels = this._renderer._roundPixels | t._roundPixels, this._gpuSpriteHash[t.uid] = e, t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), e;
        }
        destroy() {
            for(const t in this._gpuSpriteHash)this._gpuSpriteHash[t].geometry.destroy();
            this._gpuSpriteHash = null, this._renderer = null;
        }
    }
    Xo.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "nineSliceSprite"
    }, U.add(Xo);
    class zo {
        constructor(t){
            this._renderer = t;
        }
        push(t, e, i) {
            this._renderer.renderPipes.batch.break(i), i.add({
                renderPipeId: "filter",
                canBundle: !1,
                action: "pushFilter",
                container: e,
                filterEffect: t
            });
        }
        pop(t, e, i) {
            this._renderer.renderPipes.batch.break(i), i.add({
                renderPipeId: "filter",
                action: "popFilter",
                canBundle: !1
            });
        }
        execute(t) {
            t.action === "pushFilter" ? this._renderer.filter.push(t) : t.action === "popFilter" && this._renderer.filter.pop();
        }
        destroy() {
            this._renderer = null;
        }
    }
    zo.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "filter"
    };
    const B0 = new B;
    function mp(r1, t) {
        return t.clear(), jo(r1, t), t.isValid || t.set(0, 0, 0, 0), r1.isRenderGroupRoot ? t.applyMatrix(r1.renderGroup.localTransform) : t.applyMatrix(r1.renderGroup.worldTransform), t;
    }
    function jo(r1, t) {
        if (r1.localDisplayStatus !== 7 || !r1.measurable) return;
        const e = !!r1.effects.length;
        let i = t;
        if ((r1.isRenderGroupRoot || e) && (i = Lt.get().clear()), r1.boundsArea) t.addRect(r1.boundsArea, r1.worldTransform);
        else {
            if (r1.renderPipeId) {
                const n = r1.bounds;
                i.addFrame(n.minX, n.minY, n.maxX, n.maxY, r1.groupTransform);
            }
            const s = r1.children;
            for(let n = 0; n < s.length; n++)jo(s[n], i);
        }
        if (e) {
            let s = !1;
            for(let n = 0; n < r1.effects.length; n++)r1.effects[n].addBounds && (s || (s = !0, i.applyMatrix(r1.renderGroup.worldTransform)), r1.effects[n].addBounds(i, !0));
            s && (i.applyMatrix(r1.renderGroup.worldTransform.copyTo(B0).invert()), t.addBounds(i, r1.relativeGroupTransform)), t.addBounds(i), Lt.return(i);
        } else r1.isRenderGroupRoot && (t.addBounds(i, r1.relativeGroupTransform), Lt.return(i));
    }
    function gp(r1, t) {
        t.clear();
        const e = t.matrix;
        for(let i = 0; i < r1.length; i++){
            const s = r1[i];
            s.globalDisplayStatus < 7 || (t.matrix = s.worldTransform, s.addBounds(t));
        }
        return t.matrix = e, t;
    }
    const I0 = new Ge({
        attributes: {
            aPosition: {
                buffer: new Float32Array([
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1
                ]),
                location: 0,
                format: "float32x2",
                stride: 8,
                offset: 0
            }
        },
        indexBuffer: new Uint32Array([
            0,
            1,
            2,
            0,
            2,
            3
        ])
    });
    class Vo {
        constructor(t){
            this._filterStackIndex = 0, this._filterStack = [], this._filterGlobalUniforms = new nt({
                uInputSize: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                },
                uInputPixel: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                },
                uInputClamp: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                },
                uOutputFrame: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                },
                uGlobalFrame: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                },
                uOutputTexture: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                }
            }), this._globalFilterBindGroup = new $t({}), this.renderer = t;
        }
        get activeBackTexture() {
            var t;
            return (t = this._activeFilterData) == null ? void 0 : t.backTexture;
        }
        push(t) {
            var e, i;
            const s = this.renderer, n = t.filterEffect.filters;
            this._filterStack[this._filterStackIndex] || (this._filterStack[this._filterStackIndex] = this._getFilterData());
            const o = this._filterStack[this._filterStackIndex];
            if (this._filterStackIndex++, n.length === 0) {
                o.skip = !0;
                return;
            }
            const a = o.bounds;
            t.renderables ? gp(t.renderables, a) : t.filterEffect.filterArea ? (a.clear(), a.addRect(t.filterEffect.filterArea), a.applyMatrix(t.container.worldTransform)) : mp(t.container, a);
            const l = s.renderTarget.rootRenderTarget.colorTexture.source;
            let u = l._resolution, c = 0, h = l.antialias, p = !1, f = !1;
            for(let _ = 0; _ < n.length; _++){
                const g = n[_];
                if (u = Math.min(u, g.resolution), c += g.padding, g.antialias !== "inherit" && (g.antialias === "on" ? h = !0 : h = !1), !(g.compatibleRenderers & s.type)) {
                    f = !1;
                    break;
                }
                if (g.blendRequired && !((i = (e = s.backBuffer) == null ? void 0 : e.useBackBuffer) == null || i)) {
                    f = !1;
                    break;
                }
                f = g.enabled || f, p = p || g.blendRequired;
            }
            if (!f) {
                o.skip = !0;
                return;
            }
            const m = s.renderTarget.rootViewPort;
            if (a.scale(u).fitBounds(0, m.width, 0, m.height).scale(1 / u).pad(c).ceil(), !a.isPositive) {
                o.skip = !0;
                return;
            }
            o.skip = !1, o.bounds = a, o.blendRequired = p, o.container = t.container, o.filterEffect = t.filterEffect, o.previousRenderSurface = s.renderTarget.renderSurface, o.inputTexture = ct.getOptimalTexture(a.width, a.height, u, h), s.renderTarget.bind(o.inputTexture, !0), s.globalUniforms.push({
                offset: a
            });
        }
        pop() {
            const t = this.renderer;
            this._filterStackIndex--;
            const e = this._filterStack[this._filterStackIndex];
            if (e.skip) return;
            this._activeFilterData = e;
            const i = e.inputTexture, s = e.bounds;
            let n = P.EMPTY;
            if (t.renderTarget.finishRenderPass(), e.blendRequired) {
                const a = this._filterStackIndex > 0 ? this._filterStack[this._filterStackIndex - 1].bounds : null, l = t.renderTarget.getRenderTarget(e.previousRenderSurface);
                n = this.getBackTexture(l, s, a);
            }
            e.backTexture = n;
            const o = e.filterEffect.filters;
            if (this._globalFilterBindGroup.setResource(i.source.style, 2), this._globalFilterBindGroup.setResource(n.source, 3), t.globalUniforms.pop(), o.length === 1) o[0].apply(this, i, e.previousRenderSurface, !1), ct.returnTexture(i);
            else {
                let a = e.inputTexture, l = ct.getOptimalTexture(s.width, s.height, a.source._resolution, !1), u = 0;
                for(u = 0; u < o.length - 1; ++u){
                    o[u].apply(this, a, l, !0);
                    const c = a;
                    a = l, l = c;
                }
                o[u].apply(this, a, e.previousRenderSurface, !1), ct.returnTexture(a), ct.returnTexture(l);
            }
            e.blendRequired && ct.returnTexture(n);
        }
        getBackTexture(t, e, i) {
            const s = t.colorTexture.source._resolution, n = ct.getOptimalTexture(e.width, e.height, s, !1);
            let o = e.minX, a = e.minY;
            i && (o -= i.minX, a -= i.minY), o = Math.floor(o * s), a = Math.floor(a * s);
            const l = Math.ceil(e.width * s), u = Math.ceil(e.height * s);
            return this.renderer.renderTarget.copyToTexture(t, n, {
                x: o,
                y: a
            }, {
                width: l,
                height: u
            }, {
                x: 0,
                y: 0
            }), n;
        }
        applyFilter(t, e, i, s) {
            const n = this.renderer, o = this._filterStack[this._filterStackIndex], a = o.bounds, l = V.shared, u = o.previousRenderSurface === i;
            let c = this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution, h = this._filterStackIndex - 1;
            for(; h > 0 && this._filterStack[h].skip;)--h;
            h > 0 && (c = this._filterStack[h].inputTexture.source._resolution);
            const p = this._filterGlobalUniforms, f = p.uniforms, m = f.uOutputFrame, _ = f.uInputSize, g = f.uInputPixel, b = f.uInputClamp, v = f.uGlobalFrame, y = f.uOutputTexture;
            if (u) {
                let R = this._filterStackIndex;
                for(; R > 0;){
                    R--;
                    const M = this._filterStack[this._filterStackIndex - 1];
                    if (!M.skip) {
                        l.x = M.bounds.minX, l.y = M.bounds.minY;
                        break;
                    }
                }
                m[0] = a.minX - l.x, m[1] = a.minY - l.y;
            } else m[0] = 0, m[1] = 0;
            m[2] = e.frame.width, m[3] = e.frame.height, _[0] = e.source.width, _[1] = e.source.height, _[2] = 1 / _[0], _[3] = 1 / _[1], g[0] = e.source.pixelWidth, g[1] = e.source.pixelHeight, g[2] = 1 / g[0], g[3] = 1 / g[1], b[0] = .5 * g[2], b[1] = .5 * g[3], b[2] = e.frame.width * _[2] - .5 * g[2], b[3] = e.frame.height * _[3] - .5 * g[3];
            const T = this.renderer.renderTarget.rootRenderTarget.colorTexture;
            v[0] = l.x * c, v[1] = l.y * c, v[2] = T.source.width * c, v[3] = T.source.height * c;
            const E = this.renderer.renderTarget.getRenderTarget(i);
            if (n.renderTarget.bind(i, !!s), i instanceof P ? (y[0] = i.frame.width, y[1] = i.frame.height) : (y[0] = E.width, y[1] = E.height), y[2] = E.isRoot ? -1 : 1, p.update(), n.renderPipes.uniformBatch) {
                const R = n.renderPipes.uniformBatch.getUboResource(p);
                this._globalFilterBindGroup.setResource(R, 0);
            } else this._globalFilterBindGroup.setResource(p, 0);
            this._globalFilterBindGroup.setResource(e.source, 1), this._globalFilterBindGroup.setResource(e.source.style, 2), t.groups[0] = this._globalFilterBindGroup, n.encoder.draw({
                geometry: I0,
                shader: t,
                state: t._state,
                topology: "triangle-list"
            }), n.type === vt.WEBGL && n.renderTarget.finishRenderPass();
        }
        _getFilterData() {
            return {
                skip: !1,
                inputTexture: null,
                bounds: new ut,
                container: null,
                filterEffect: null,
                blendRequired: !1,
                previousRenderSurface: null
            };
        }
        calculateSpriteMatrix(t, e) {
            const i = this._activeFilterData, s = t.set(i.inputTexture._source.width, 0, 0, i.inputTexture._source.height, i.bounds.minX, i.bounds.minY), n = e.worldTransform.copyTo(B.shared);
            return n.invert(), s.prepend(n), s.scale(1 / e.texture.frame.width, 1 / e.texture.frame.height), s.translate(e.anchor.x, e.anchor.y), s;
        }
    }
    Vo.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem
        ],
        name: "filter"
    }, U.add(Vo), U.add(zo);
    var F0 = {
        __proto__: null
    };
    const Wo = [];
    U.handleByNamedList(x.Environment, Wo);
    async function _p(r1) {
        if (r1) for(let t = 0; t < Wo.length; t++){
            const e = Wo[t];
            if (e.value.test()) {
                await e.value.load();
                return;
            }
        }
    }
    let Ar;
    function Yo() {
        if (typeof Ar == "boolean") return Ar;
        try {
            Ar = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
                a: "b"
            }, "a", "b") === !0;
        } catch (r1) {
            Ar = !1;
        }
        return Ar;
    }
    var ft = ((r1)=>(r1[r1.NONE = 0] = "NONE", r1[r1.COLOR = 16384] = "COLOR", r1[r1.STENCIL = 1024] = "STENCIL", r1[r1.DEPTH = 256] = "DEPTH", r1[r1.COLOR_DEPTH = 16640] = "COLOR_DEPTH", r1[r1.COLOR_STENCIL = 17408] = "COLOR_STENCIL", r1[r1.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL", r1[r1.ALL = 17664] = "ALL", r1))(ft || {});
    class Ko {
        constructor(t){
            this.items = [], this._name = t;
        }
        emit(t, e, i, s, n, o, a, l) {
            const { name: u, items: c } = this;
            for(let h = 0, p = c.length; h < p; h++)c[h][u](t, e, i, s, n, o, a, l);
            return this;
        }
        add(t) {
            return t[this._name] && (this.remove(t), this.items.push(t)), this;
        }
        remove(t) {
            const e = this.items.indexOf(t);
            return e !== -1 && this.items.splice(e, 1), this;
        }
        contains(t) {
            return this.items.indexOf(t) !== -1;
        }
        removeAll() {
            return this.items.length = 0, this;
        }
        destroy() {
            this.removeAll(), this.items = null, this._name = null;
        }
        get empty() {
            return this.items.length === 0;
        }
        get name() {
            return this._name;
        }
    }
    var D0 = Object.defineProperty, bp = Object.getOwnPropertySymbols, U0 = Object.prototype.hasOwnProperty, k0 = Object.prototype.propertyIsEnumerable, vp = (r1, t, e)=>t in r1 ? D0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Wi = (r1, t)=>{
        for(var e in t || (t = {}))U0.call(t, e) && vp(r1, e, t[e]);
        if (bp) for (var e of bp(t))k0.call(t, e) && vp(r1, e, t[e]);
        return r1;
    };
    const L0 = [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "renderEnd",
        "renderStart",
        "render",
        "update",
        "postrender",
        "prerender"
    ], yp = class Ob extends dt {
        constructor(t){
            var e;
            super(), this.runners = Object.create(null), this.renderPipes = Object.create(null), this._initOptions = {}, this._systemsHash = Object.create(null), this.type = t.type, this.name = t.name;
            const i = [
                ...L0,
                ...(e = t.runners) != null ? e : []
            ];
            this._addRunners(...i), this._addSystems(t.systems), this._addPipes(t.renderPipes, t.renderPipeAdaptors), this._unsafeEvalCheck();
        }
        async init(t = {}) {
            for(const e in this._systemsHash){
                const i = this._systemsHash[e].constructor.defaultOptions;
                t = Wi(Wi({}, i), t);
            }
            t = Wi(Wi({}, Ob.defaultOptions), t), this._roundPixels = t.roundPixels ? 1 : 0;
            for(let e = 0; e < this.runners.init.items.length; e++)await this.runners.init.items[e].init(t);
            this._initOptions = t;
        }
        render(t, e) {
            let i = t;
            if (i instanceof W && (i = {
                container: i
            }, e && (i.target = e.renderTexture)), i.target || (i.target = this.view.renderTarget), i.target === this.view.renderTarget && (this._lastObjectRendered = i.container, i.clearColor = this.background.colorRgba), i.clearColor) {
                const s = Array.isArray(i.clearColor) && i.clearColor.length === 4;
                i.clearColor = s ? i.clearColor : Y.shared.setValue(i.clearColor).toArray();
            }
            i.transform || (i.container.updateLocalTransform(), i.transform = i.container.localTransform), this.runners.prerender.emit(i), this.runners.renderStart.emit(i), this.runners.render.emit(i), this.runners.renderEnd.emit(i), this.runners.postrender.emit(i);
        }
        resize(t, e, i) {
            this.view.resize(t, e, i), this.emit("resize", this.view.screen.width, this.view.screen.height);
        }
        clear(t = {}) {
            var e;
            const i = this;
            t.target || (t.target = i.renderTarget.renderTarget), t.clearColor || (t.clearColor = this.background.colorRgba), (e = t.clear) != null || (t.clear = ft.ALL);
            const { clear: s, clearColor: n, target: o } = t;
            Y.shared.setValue(n != null ? n : this.background.colorRgba), i.renderTarget.clear(o, s, Y.shared.toArray());
        }
        get resolution() {
            return this.view.resolution;
        }
        set resolution(t) {
            this.view.resolution = t, this.runners.resolutionChange.emit(t);
        }
        get width() {
            return this.view.texture.frame.width;
        }
        get height() {
            return this.view.texture.frame.height;
        }
        get canvas() {
            return this.view.canvas;
        }
        get lastObjectRendered() {
            return this._lastObjectRendered;
        }
        get renderingToScreen() {
            return this.renderTarget.renderingToScreen;
        }
        get screen() {
            return this.view.screen;
        }
        _addRunners(...t) {
            t.forEach((e)=>{
                this.runners[e] = new Ko(e);
            });
        }
        _addSystems(t) {
            let e;
            for(e in t){
                const i = t[e];
                this._addSystem(i.value, i.name);
            }
        }
        _addSystem(t, e) {
            const i = new t(this);
            if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
            this[e] = i, this._systemsHash[e] = i;
            for(const s in this.runners)this.runners[s].add(i);
            return this;
        }
        _addPipes(t, e) {
            const i = e.reduce((s, n)=>(s[n.name] = n.value, s), {});
            t.forEach((s)=>{
                const n = s.value, o = s.name, a = i[o];
                this.renderPipes[o] = new n(this, a ? new a : null);
            });
        }
        destroy(t = !1) {
            this.runners.destroy.items.reverse(), this.runners.destroy.emit(t), Object.values(this.runners).forEach((e)=>{
                e.destroy();
            }), this._systemsHash = null, this.renderPipes = null;
        }
        generateTexture(t) {
            return this.textureGenerator.generateTexture(t);
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        _unsafeEvalCheck() {
            if (!Yo()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
        }
    };
    yp.defaultOptions = {
        resolution: 1,
        failIfMajorPerformanceCaveat: !1,
        roundPixels: !1
    };
    let Pr = yp, qo;
    function Rr(r1) {
        return qo !== void 0 || (qo = (()=>{
            var t;
            const e = {
                stencil: !0,
                failIfMajorPerformanceCaveat: r1 != null ? r1 : Pr.defaultOptions.failIfMajorPerformanceCaveat
            };
            try {
                if (!z.get().getWebGLRenderingContext()) return !1;
                let i = z.get().createCanvas().getContext("webgl", e);
                const s = !!((t = i == null ? void 0 : i.getContextAttributes()) != null && t.stencil);
                if (i) {
                    const n = i.getExtension("WEBGL_lose_context");
                    n && n.loseContext();
                }
                return i = null, s;
            } catch (i) {
                return !1;
            }
        })()), qo;
    }
    let Zo;
    async function wr(r1 = {}) {
        return Zo !== void 0 || (Zo = await (async ()=>{
            if (!z.get().getNavigator().gpu) return !1;
            try {
                return await (await navigator.gpu.requestAdapter(r1)).requestDevice(), !0;
            } catch (t) {
                return !1;
            }
        })()), Zo;
    }
    var $0 = Object.defineProperty, xp = Object.getOwnPropertySymbols, N0 = Object.prototype.hasOwnProperty, H0 = Object.prototype.propertyIsEnumerable, Tp = (r1, t, e)=>t in r1 ? $0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Mr = (r1, t)=>{
        for(var e in t || (t = {}))N0.call(t, e) && Tp(r1, e, t[e]);
        if (xp) for (var e of xp(t))H0.call(t, e) && Tp(r1, e, t[e]);
        return r1;
    };
    const Sp = [
        "webgpu",
        "webgl",
        "canvas"
    ];
    async function Ep(r1) {
        var t, e;
        let i = [];
        r1.preference ? (i.push(r1.preference), Sp.forEach((a)=>{
            a !== r1.preference && i.push(a);
        })) : i = Sp.slice();
        let s;
        await _p((t = r1.manageImports) != null ? t : !0);
        let n = {};
        for(let a = 0; a < i.length; a++){
            const l = i[a];
            if (l === "webgpu" && await wr()) {
                const { WebGPURenderer: u } = await Promise.resolve().then(function() {
                    return TE;
                });
                s = u, n = Mr(Mr({}, r1), r1.webgpu);
                break;
            } else if (l === "webgl" && Rr((e = r1.failIfMajorPerformanceCaveat) != null ? e : Pr.defaultOptions.failIfMajorPerformanceCaveat)) {
                const { WebGLRenderer: u } = await Promise.resolve().then(function() {
                    return iE;
                });
                s = u, n = Mr(Mr({}, r1), r1.webgl);
                break;
            } else if (l === "canvas") {
                n = Mr({}, r1);
                break;
            }
        }
        delete n.webgpu, delete n.webgl;
        const o = new s;
        return await o.init(n), o;
    }
    var X0 = Object.defineProperty, Ap = Object.getOwnPropertySymbols, z0 = Object.prototype.hasOwnProperty, j0 = Object.prototype.propertyIsEnumerable, Pp = (r1, t, e)=>t in r1 ? X0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, V0 = (r1, t)=>{
        for(var e in t || (t = {}))z0.call(t, e) && Pp(r1, e, t[e]);
        if (Ap) for (var e of Ap(t))j0.call(t, e) && Pp(r1, e, t[e]);
        return r1;
    };
    const Rp = class Zl {
        constructor(...t){
            this.stage = new W;
        }
        async init(t) {
            t = V0({}, t), this.renderer = await Ep(t), Zl._plugins.forEach((e)=>{
                e.init.call(this, t);
            });
        }
        render() {
            this.renderer.render({
                container: this.stage
            });
        }
        get canvas() {
            return this.renderer.canvas;
        }
        get view() {
            return this.renderer.canvas;
        }
        get screen() {
            return this.renderer.screen;
        }
        destroy(t = !1, e = !1) {
            const i = Zl._plugins.slice(0);
            i.reverse(), i.forEach((s)=>{
                s.destroy.call(this);
            }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null;
        }
    };
    Rp._plugins = [];
    let wp = Rp;
    U.handleByList(x.Application, wp._plugins);
    class Mp {
        constructor(t, e = !1){
            this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e;
        }
        add(t) {
            t.forEach((e)=>{
                this._assetList.push(e);
            }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
        }
        async _next() {
            if (this._assetList.length && this._isActive) {
                this._isLoading = !0;
                const t = [], e = Math.min(this._assetList.length, this._maxConcurrent);
                for(let i = 0; i < e; i++)t.push(this._assetList.pop());
                await this._loader.load(t), this._isLoading = !1, this._next();
            }
        }
        get active() {
            return this._isActive;
        }
        set active(t) {
            this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next());
        }
    }
    const Cp = {
        extension: x.CacheParser,
        test: (r1)=>Array.isArray(r1) && r1.every((t)=>t instanceof P),
        getCacheableAssets: (r1, t)=>{
            const e = {};
            return r1.forEach((i)=>{
                t.forEach((s, n)=>{
                    e[i + (n === 0 ? "" : n + 1)] = s;
                });
            }), e;
        }
    };
    async function Qo(r1) {
        if ("Image" in globalThis) return new Promise((t)=>{
            const e = new Image;
            e.onload = ()=>{
                t(!0);
            }, e.onerror = ()=>{
                t(!1);
            }, e.src = r1;
        });
        if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
            try {
                const t = await (await fetch(r1)).blob();
                await createImageBitmap(t);
            } catch (t) {
                return !1;
            }
            return !0;
        }
        return !1;
    }
    const Op = {
        extension: {
            type: x.DetectionParser,
            priority: 1
        },
        test: async ()=>Qo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
        add: async (r1)=>[
                ...r1,
                "avif"
            ],
        remove: async (r1)=>r1.filter((t)=>t !== "avif")
    }, Gp = [
        "png",
        "jpg",
        "jpeg"
    ], Bp = {
        extension: {
            type: x.DetectionParser,
            priority: -1
        },
        test: ()=>Promise.resolve(!0),
        add: async (r1)=>[
                ...r1,
                ...Gp
            ],
        remove: async (r1)=>r1.filter((t)=>!Gp.includes(t))
    }, W0 = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
    function Yi(r1) {
        return W0 ? !1 : document.createElement("video").canPlayType(r1) !== "";
    }
    const Ip = {
        extension: {
            type: x.DetectionParser,
            priority: 0
        },
        test: async ()=>Yi("video/mp4"),
        add: async (r1)=>[
                ...r1,
                "mp4",
                "m4v"
            ],
        remove: async (r1)=>r1.filter((t)=>t !== "mp4" && t !== "m4v")
    }, Fp = {
        extension: {
            type: x.DetectionParser,
            priority: 0
        },
        test: async ()=>Yi("video/ogg"),
        add: async (r1)=>[
                ...r1,
                "ogv"
            ],
        remove: async (r1)=>r1.filter((t)=>t !== "ogv")
    }, Dp = {
        extension: {
            type: x.DetectionParser,
            priority: 0
        },
        test: async ()=>Yi("video/webm"),
        add: async (r1)=>[
                ...r1,
                "webm"
            ],
        remove: async (r1)=>r1.filter((t)=>t !== "webm")
    }, Up = {
        extension: {
            type: x.DetectionParser,
            priority: 0
        },
        test: async ()=>Qo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
        add: async (r1)=>[
                ...r1,
                "webp"
            ],
        remove: async (r1)=>r1.filter((t)=>t !== "webp")
    };
    var Y0 = Object.defineProperty, K0 = Object.defineProperties, q0 = Object.getOwnPropertyDescriptors, kp = Object.getOwnPropertySymbols, Z0 = Object.prototype.hasOwnProperty, Q0 = Object.prototype.propertyIsEnumerable, Lp = (r1, t, e)=>t in r1 ? Y0(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, J0 = (r1, t)=>{
        for(var e in t || (t = {}))Z0.call(t, e) && Lp(r1, e, t[e]);
        if (kp) for (var e of kp(t))Q0.call(t, e) && Lp(r1, e, t[e]);
        return r1;
    }, t1 = (r1, t)=>K0(r1, q0(t));
    class $p {
        constructor(){
            this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
                set: (t, e, i)=>(this._parsersValidated = !1, t[e] = i, !0)
            }), this.promiseCache = {};
        }
        reset() {
            this._parsersValidated = !1, this.promiseCache = {};
        }
        _getLoadPromiseAndParser(t, e) {
            const i = {
                promise: null,
                parser: null
            };
            return i.promise = (async ()=>{
                var s, n;
                let o = null, a = null;
                if (e.loadParser && (a = this._parserHash[e.loadParser]), !a) {
                    for(let l = 0; l < this.parsers.length; l++){
                        const u = this.parsers[l];
                        if (u.load && (s = u.test) != null && s.call(u, t, e, this)) {
                            a = u;
                            break;
                        }
                    }
                    if (!a) return null;
                }
                o = await a.load(t, e, this), i.parser = a;
                for(let l = 0; l < this.parsers.length; l++){
                    const u = this.parsers[l];
                    u.parse && u.parse && await ((n = u.testParse) == null ? void 0 : n.call(u, o, e, this)) && (o = await u.parse(o, e, this) || o, i.parser = u);
                }
                return o;
            })(), i;
        }
        async load(t, e) {
            this._parsersValidated || this._validateParsers();
            let i = 0;
            const s = {}, n = ar(t), o = Rt(t, (u)=>({
                    alias: [
                        u
                    ],
                    src: u
                })), a = o.length, l = o.map(async (u)=>{
                const c = pt.toAbsolute(u.src);
                if (!s[u.src]) try {
                    this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, u)), s[u.src] = await this.promiseCache[c].promise, e && e(++i / a);
                } catch (h) {
                    throw delete this.promiseCache[c], delete s[u.src], new Error(`[Loader.load] Failed to load ${c}.
${h}`);
                }
            });
            return await Promise.all(l), n ? s[o[0].src] : s;
        }
        async unload(t) {
            const e = Rt(t, (i)=>({
                    alias: [
                        i
                    ],
                    src: i
                })).map(async (i)=>{
                var s, n;
                const o = pt.toAbsolute(i.src), a = this.promiseCache[o];
                if (a) {
                    const l = await a.promise;
                    delete this.promiseCache[o], await ((n = (s = a.parser) == null ? void 0 : s.unload) == null ? void 0 : n.call(s, l, i, this));
                }
            });
            await Promise.all(e);
        }
        _validateParsers() {
            this._parsersValidated = !0, this._parserHash = this._parsers.filter((t)=>t.name).reduce((t, e)=>(e.name && t[e.name], t1(J0({}, t), {
                    [e.name]: e
                })), {});
        }
    }
    function Te(r1, t) {
        if (Array.isArray(t)) {
            for (const e of t)if (r1.startsWith(`data:${e}`)) return !0;
            return !1;
        }
        return r1.startsWith(`data:${t}`);
    }
    function Ct(r1, t) {
        const e = r1.split("?")[0], i = pt.extname(e).toLowerCase();
        return Array.isArray(t) ? t.includes(i) : i === t;
    }
    const e1 = ".json", r11 = "application/json", Np = {
        extension: {
            type: x.LoadParser,
            priority: gt.Low
        },
        name: "loadJson",
        test (r1) {
            return Te(r1, r11) || Ct(r1, e1);
        },
        async load (r1) {
            return await (await z.get().fetch(r1)).json();
        }
    }, i1 = ".txt", s1 = "text/plain", Hp = {
        name: "loadTxt",
        extension: {
            type: x.LoadParser,
            priority: gt.Low
        },
        test (r1) {
            return Te(r1, s1) || Ct(r1, i1);
        },
        async load (r1) {
            return await (await z.get().fetch(r1)).text();
        }
    };
    var n1 = Object.defineProperty, o1 = Object.defineProperties, a1 = Object.getOwnPropertyDescriptors, Xp = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, zp = (r1, t, e)=>t in r1 ? n1(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, c1 = (r1, t)=>{
        for(var e in t || (t = {}))l1.call(t, e) && zp(r1, e, t[e]);
        if (Xp) for (var e of Xp(t))u1.call(t, e) && zp(r1, e, t[e]);
        return r1;
    }, h1 = (r1, t)=>o1(r1, a1(t));
    const d1 = [
        "normal",
        "bold",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ], p1 = [
        ".ttf",
        ".otf",
        ".woff",
        ".woff2"
    ], f1 = [
        "font/ttf",
        "font/otf",
        "font/woff",
        "font/woff2"
    ], m1 = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
    function jp(r1) {
        const t = pt.extname(r1), e = pt.basename(r1, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((n)=>n.charAt(0).toUpperCase() + n.slice(1));
        let i = e.length > 0;
        for (const n of e)if (!n.match(m1)) {
            i = !1;
            break;
        }
        let s = e.join(" ");
        return i || (s = `"${s.replace(/[\\"]/g, "\\$&")}"`), s;
    }
    const g1 = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
    function _1(r1) {
        return g1.test(r1) ? r1 : encodeURI(r1);
    }
    const Vp = {
        extension: {
            type: x.LoadParser,
            priority: gt.Low
        },
        name: "loadWebFont",
        test (r1) {
            return Te(r1, f1) || Ct(r1, p1);
        },
        async load (r1, t) {
            var e, i, s, n, o, a;
            const l = z.get().getFontFaceSet();
            if (l) {
                const u = [], c = (i = (e = t.data) == null ? void 0 : e.family) != null ? i : jp(r1), h = (o = (n = (s = t.data) == null ? void 0 : s.weights) == null ? void 0 : n.filter((f)=>d1.includes(f))) != null ? o : [
                    "normal"
                ], p = (a = t.data) != null ? a : {};
                for(let f = 0; f < h.length; f++){
                    const m = h[f], _ = new FontFace(c, `url(${_1(r1)})`, h1(c1({}, p), {
                        weight: m
                    }));
                    await _.load(), l.add(_), u.push(_);
                }
                return K.set(`${c}-and-url`, {
                    url: r1,
                    fontFaces: u
                }), u.length === 1 ? u[0] : u;
            }
            return null;
        },
        unload (r1) {
            (Array.isArray(r1) ? r1 : [
                r1
            ]).forEach((t)=>{
                K.remove(t.family), z.get().getFontFaceSet().delete(t);
            });
        }
    };
    function Ki(r1, t = 1) {
        var e;
        const i = (e = qt.RETINA_PREFIX) == null ? void 0 : e.exec(r1);
        return i ? parseFloat(i[1]) : t;
    }
    function re(r1, t, e) {
        r1.label = e, r1._sourceOrigin = e;
        const i = new P({
            source: r1,
            label: e
        }), s = ()=>{
            delete t.promiseCache[e], K.has(e) && K.remove(e);
        };
        return i.source.once("destroy", ()=>{
            t.promiseCache[e] && s();
        }), i.once("destroy", ()=>{
            r1.destroyed || s();
        }), i;
    }
    var b1 = Object.defineProperty, qi = Object.getOwnPropertySymbols, Wp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, Kp = (r1, t, e)=>t in r1 ? b1(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, v1 = (r1, t)=>{
        for(var e in t || (t = {}))Wp.call(t, e) && Kp(r1, e, t[e]);
        if (qi) for (var e of qi(t))Yp.call(t, e) && Kp(r1, e, t[e]);
        return r1;
    }, y1 = (r1, t)=>{
        var e = {};
        for(var i in r1)Wp.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && qi) for (var i of qi(r1))t.indexOf(i) < 0 && Yp.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const x1 = ".svg", T1 = "image/svg+xml", qp = {
        extension: {
            type: x.LoadParser,
            priority: gt.Low
        },
        name: "loadSVG",
        config: {
            crossOrigin: "anonymous",
            parseAsGraphicsContext: !1
        },
        test (r1) {
            return Te(r1, T1) || Ct(r1, x1);
        },
        async load (r1, t, e) {
            var i;
            return ((i = t.data.parseAsGraphicsContext) != null ? i : this.config.parseAsGraphicsContext) ? E1(r1) : S1(r1, t, e, this.config.crossOrigin);
        },
        unload (r1) {
            r1.destroy(!0);
        }
    };
    async function S1(r1, t, e, i) {
        var s, n, o, a, l;
        const u = await (await z.get().fetch(r1)).blob(), c = URL.createObjectURL(u), h = new Image;
        h.src = c, h.crossOrigin = i, await h.decode(), URL.revokeObjectURL(c);
        const p = document.createElement("canvas"), f = p.getContext("2d"), m = ((s = t.data) == null ? void 0 : s.resolution) || Ki(r1), _ = (o = (n = t.data) == null ? void 0 : n.width) != null ? o : h.width, g = (l = (a = t.data) == null ? void 0 : a.height) != null ? l : h.height;
        p.width = _ * m, p.height = g * m, f.drawImage(h, 0, 0, _ * m, g * m);
        const b = t.data, { parseAsGraphicsContext: v } = b, y = y1(b, [
            "parseAsGraphicsContext"
        ]), T = new pe(v1({
            resource: p,
            alphaMode: "premultiply-alpha-on-upload",
            resolution: m
        }, y));
        return re(T, e, r1);
    }
    async function E1(r1) {
        const t = await (await z.get().fetch(r1)).text(), e = new Dt;
        return e.svg(t), e;
    }
    const A1 = `(function(){"use strict";const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";async function a(){try{if(typeof createImageBitmap!="function")return!1;const A=await(await fetch(e)).blob(),t=await createImageBitmap(A);return t.width===1&&t.height===1}catch(A){return!1}}a().then(A=>{self.postMessage(A)})})();
`;
    let je = null, Jo = class {
        constructor(){
            je || (je = URL.createObjectURL(new Blob([
                A1
            ], {
                type: "application/javascript"
            }))), this.worker = new Worker(je);
        }
    };
    Jo.revokeObjectURL = function() {
        je && (URL.revokeObjectURL(je), je = null);
    };
    const P1 = '(function(){"use strict";async function e(t){const a=await fetch(t);if(!a.ok)throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${t}: ${a.status} ${a.statusText}`);const s=await a.blob();return await createImageBitmap(s)}self.onmessage=async t=>{try{const a=await e(t.data.data[0]);self.postMessage({data:a,uuid:t.data.uuid,id:t.data.id},[a])}catch(a){self.postMessage({error:a,uuid:t.data.uuid,id:t.data.id})}}})();\n';
    let Ve = null, Zp = class {
        constructor(){
            Ve || (Ve = URL.createObjectURL(new Blob([
                P1
            ], {
                type: "application/javascript"
            }))), this.worker = new Worker(Ve);
        }
    };
    Zp.revokeObjectURL = function() {
        Ve && (URL.revokeObjectURL(Ve), Ve = null);
    };
    let Qp = 0, ta, R1 = class {
        constructor(){
            this._initialized = !1, this._createdWorkers = 0, this._workerPool = [], this._queue = [], this._resolveHash = {};
        }
        isImageBitmapSupported() {
            return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((t)=>{
                const { worker: e } = new Jo;
                e.addEventListener("message", (i)=>{
                    e.terminate(), Jo.revokeObjectURL(), t(i.data);
                });
            }), this._isImageBitmapSupported);
        }
        loadImageBitmap(t) {
            return this._run("loadImageBitmap", [
                t
            ]);
        }
        async _initWorkers() {
            this._initialized || (this._initialized = !0);
        }
        _getWorker() {
            ta === void 0 && (ta = navigator.hardwareConcurrency || 4);
            let t = this._workerPool.pop();
            return !t && this._createdWorkers < ta && (this._createdWorkers++, t = new Zp().worker, t.addEventListener("message", (e)=>{
                this._complete(e.data), this._returnWorker(e.target), this._next();
            })), t;
        }
        _returnWorker(t) {
            this._workerPool.push(t);
        }
        _complete(t) {
            t.error !== void 0 ? this._resolveHash[t.uuid].reject(t.error) : this._resolveHash[t.uuid].resolve(t.data), this._resolveHash[t.uuid] = null;
        }
        async _run(t, e) {
            await this._initWorkers();
            const i = new Promise((s, n)=>{
                this._queue.push({
                    id: t,
                    arguments: e,
                    resolve: s,
                    reject: n
                });
            });
            return this._next(), i;
        }
        _next() {
            if (!this._queue.length) return;
            const t = this._getWorker();
            if (!t) return;
            const e = this._queue.pop(), i = e.id;
            this._resolveHash[Qp] = {
                resolve: e.resolve,
                reject: e.reject
            }, t.postMessage({
                data: e.arguments,
                uuid: Qp++,
                id: i
            });
        }
    };
    const ea = new R1;
    var w1 = Object.defineProperty, Jp = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, C1 = Object.prototype.propertyIsEnumerable, tf = (r1, t, e)=>t in r1 ? w1(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, O1 = (r1, t)=>{
        for(var e in t || (t = {}))M1.call(t, e) && tf(r1, e, t[e]);
        if (Jp) for (var e of Jp(t))C1.call(t, e) && tf(r1, e, t[e]);
        return r1;
    };
    const G1 = [
        ".jpeg",
        ".jpg",
        ".png",
        ".webp",
        ".avif"
    ], B1 = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/avif"
    ];
    async function ef(r1) {
        const t = await z.get().fetch(r1);
        if (!t.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${r1}: ${t.status} ${t.statusText}`);
        const e = await t.blob();
        return await createImageBitmap(e);
    }
    const ra = {
        name: "loadTextures",
        extension: {
            type: x.LoadParser,
            priority: gt.High
        },
        config: {
            preferWorkers: !0,
            preferCreateImageBitmap: !0,
            crossOrigin: "anonymous"
        },
        test (r1) {
            return Te(r1, B1) || Ct(r1, G1);
        },
        async load (r1, t, e) {
            var i;
            let s = null;
            globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await ea.isImageBitmapSupported() ? s = await ea.loadImageBitmap(r1) : s = await ef(r1) : s = await new Promise((o)=>{
                s = new Image, s.crossOrigin = this.config.crossOrigin, s.src = r1, s.complete ? o(s) : s.onload = ()=>{
                    o(s);
                };
            });
            const n = new pe(O1({
                resource: s,
                alphaMode: "premultiply-alpha-on-upload",
                resolution: ((i = t.data) == null ? void 0 : i.resolution) || Ki(r1)
            }, t.data));
            return re(n, e, r1);
        },
        unload (r1) {
            r1.destroy(!0);
        }
    };
    var I1 = Object.defineProperty, F1 = Object.defineProperties, D1 = Object.getOwnPropertyDescriptors, rf = Object.getOwnPropertySymbols, U1 = Object.prototype.hasOwnProperty, k1 = Object.prototype.propertyIsEnumerable, sf = (r1, t, e)=>t in r1 ? I1(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, ia = (r1, t)=>{
        for(var e in t || (t = {}))U1.call(t, e) && sf(r1, e, t[e]);
        if (rf) for (var e of rf(t))k1.call(t, e) && sf(r1, e, t[e]);
        return r1;
    }, nf = (r1, t)=>F1(r1, D1(t));
    const of = [
        ".mp4",
        ".m4v",
        ".webm",
        ".ogg",
        ".ogv",
        ".h264",
        ".avi",
        ".mov"
    ], L1 = of.map((r1)=>`video/${r1.substring(1)}`);
    function af(r1, t, e) {
        e === void 0 && !t.startsWith("data:") ? r1.crossOrigin = uf(t) : e !== !1 && (r1.crossOrigin = typeof e == "string" ? e : "anonymous");
    }
    function lf(r1) {
        return new Promise((t, e)=>{
            r1.addEventListener("canplaythrough", i), r1.addEventListener("error", s), r1.load();
            function i() {
                n(), t();
            }
            function s(o) {
                n(), e(o);
            }
            function n() {
                r1.removeEventListener("canplaythrough", i), r1.removeEventListener("error", s);
            }
        });
    }
    function uf(r1, t = globalThis.location) {
        if (r1.startsWith("data:")) return "";
        t = t || globalThis.location;
        const e = new URL(r1, document.baseURI);
        return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : "";
    }
    const cf = {
        name: "loadVideo",
        extension: {
            type: x.LoadParser
        },
        config: null,
        test (r1) {
            const t = Te(r1, L1), e = Ct(r1, of);
            return t || e;
        },
        async load (r1, t, e) {
            var i, s;
            const n = ia(nf(ia({}, ur.defaultOptions), {
                resolution: ((i = t.data) == null ? void 0 : i.resolution) || Ki(r1),
                alphaMode: ((s = t.data) == null ? void 0 : s.alphaMode) || await _n()
            }), t.data), o = document.createElement("video"), a = {
                preload: n.autoLoad !== !1 ? "auto" : void 0,
                "webkit-playsinline": n.playsinline !== !1 ? "" : void 0,
                playsinline: n.playsinline !== !1 ? "" : void 0,
                muted: n.muted === !0 ? "" : void 0,
                loop: n.loop === !0 ? "" : void 0,
                autoplay: n.autoPlay !== !1 ? "" : void 0
            };
            Object.keys(a).forEach((c)=>{
                const h = a[c];
                h !== void 0 && o.setAttribute(c, h);
            }), n.muted === !0 && (o.muted = !0), af(o, r1, n.crossorigin);
            const l = document.createElement("source");
            let u;
            if (r1.startsWith("data:")) u = r1.slice(5, r1.indexOf(";"));
            else if (!r1.startsWith("blob:")) {
                const c = r1.split("?")[0].slice(r1.lastIndexOf(".") + 1).toLowerCase();
                u = ur.MIME_TYPES[c] || `video/${c}`;
            }
            return l.src = r1, u && (l.type = u), new Promise((c)=>{
                const h = async ()=>{
                    const p = new ur(nf(ia({}, n), {
                        resource: o
                    }));
                    o.removeEventListener("canplay", h), t.data.preload && await lf(o), c(re(p, e, r1));
                };
                o.addEventListener("canplay", h), o.appendChild(l);
            });
        },
        unload (r1) {
            r1.destroy(!0);
        }
    }, sa = {
        extension: x.ResolveParser,
        test: ra.test,
        parse: (r1)=>{
            var t, e;
            return {
                resolution: parseFloat((e = (t = qt.RETINA_PREFIX.exec(r1)) == null ? void 0 : t[1]) != null ? e : "1"),
                format: r1.split(".").pop(),
                src: r1
            };
        }
    }, hf = {
        extension: x.ResolveParser,
        test: (r1)=>qt.RETINA_PREFIX.test(r1) && r1.endsWith(".json"),
        parse: sa.parse
    };
    class df {
        constructor(){
            this._detections = [], this._initialized = !1, this.resolver = new qt, this.loader = new $p, this.cache = K, this._backgroundLoader = new Mp(this.loader), this._backgroundLoader.active = !0, this.reset();
        }
        async init(t = {}) {
            var e, i, s;
            if (this._initialized) return;
            if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
                let l = t.manifest;
                typeof l == "string" && (l = await this.load(l)), this.resolver.addManifest(l);
            }
            const n = (i = (e = t.texturePreference) == null ? void 0 : e.resolution) != null ? i : 1, o = typeof n == "number" ? [
                n
            ] : n, a = await this._detectFormats({
                preferredFormats: (s = t.texturePreference) == null ? void 0 : s.format,
                skipDetections: t.skipDetections,
                detections: this._detections
            });
            this.resolver.prefer({
                params: {
                    format: a,
                    resolution: o
                }
            }), t.preferences && this.setPreferences(t.preferences);
        }
        add(t) {
            this.resolver.add(t);
        }
        async load(t, e) {
            this._initialized || await this.init();
            const i = ar(t), s = Rt(t).map((a)=>{
                if (typeof a != "string") {
                    const l = this.resolver.getAlias(a);
                    return l.some((u)=>!this.resolver.hasKey(u)) && this.add(a), Array.isArray(l) ? l[0] : l;
                }
                return this.resolver.hasKey(a) || this.add({
                    alias: a,
                    src: a
                }), a;
            }), n = this.resolver.resolve(s), o = await this._mapLoadToResolve(n, e);
            return i ? o[s[0]] : o;
        }
        addBundle(t, e) {
            this.resolver.addBundle(t, e);
        }
        async loadBundle(t, e) {
            this._initialized || await this.init();
            let i = !1;
            typeof t == "string" && (i = !0, t = [
                t
            ]);
            const s = this.resolver.resolveBundle(t), n = {}, o = Object.keys(s);
            let a = 0, l = 0;
            const u = ()=>{
                e == null || e(++a / l);
            }, c = o.map((h)=>{
                const p = s[h];
                return l += Object.keys(p).length, this._mapLoadToResolve(p, u).then((f)=>{
                    n[h] = f;
                });
            });
            return await Promise.all(c), i ? n[t[0]] : n;
        }
        async backgroundLoad(t) {
            this._initialized || await this.init(), typeof t == "string" && (t = [
                t
            ]);
            const e = this.resolver.resolve(t);
            this._backgroundLoader.add(Object.values(e));
        }
        async backgroundLoadBundle(t) {
            this._initialized || await this.init(), typeof t == "string" && (t = [
                t
            ]);
            const e = this.resolver.resolveBundle(t);
            Object.values(e).forEach((i)=>{
                this._backgroundLoader.add(Object.values(i));
            });
        }
        reset() {
            this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1;
        }
        get(t) {
            if (typeof t == "string") return K.get(t);
            const e = {};
            for(let i = 0; i < t.length; i++)e[i] = K.get(t[i]);
            return e;
        }
        async _mapLoadToResolve(t, e) {
            const i = [
                ...new Set(Object.values(t))
            ];
            this._backgroundLoader.active = !1;
            const s = await this.loader.load(i, e);
            this._backgroundLoader.active = !0;
            const n = {};
            return i.forEach((o)=>{
                const a = s[o.src], l = [
                    o.src
                ];
                o.alias && l.push(...o.alias), l.forEach((u)=>{
                    n[u] = a;
                }), K.set(l, a);
            }), n;
        }
        async unload(t) {
            this._initialized || await this.init();
            const e = Rt(t).map((s)=>typeof s != "string" ? s.src : s), i = this.resolver.resolve(e);
            await this._unloadFromResolved(i);
        }
        async unloadBundle(t) {
            this._initialized || await this.init(), t = Rt(t);
            const e = this.resolver.resolveBundle(t), i = Object.keys(e).map((s)=>this._unloadFromResolved(e[s]));
            await Promise.all(i);
        }
        async _unloadFromResolved(t) {
            const e = Object.values(t);
            e.forEach((i)=>{
                K.remove(i.src);
            }), await this.loader.unload(e);
        }
        async _detectFormats(t) {
            let e = [];
            t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [
                t.preferredFormats
            ]);
            for (const i of t.detections)t.skipDetections || await i.test() ? e = await i.add(e) : t.skipDetections || (e = await i.remove(e));
            return e = e.filter((i, s)=>e.indexOf(i) === s), e;
        }
        get detections() {
            return this._detections;
        }
        setPreferences(t) {
            this.loader.parsers.forEach((e)=>{
                e.config && Object.keys(e.config).filter((i)=>i in t).forEach((i)=>{
                    e.config[i] = t[i];
                });
            });
        }
    }
    const Cr = new df;
    U.handleByList(x.LoadParser, Cr.loader.parsers).handleByList(x.ResolveParser, Cr.resolver.parsers).handleByList(x.CacheParser, Cr.cache.parsers).handleByList(x.DetectionParser, Cr.detections), U.add(Cp, Bp, Op, Up, Ip, Fp, Dp, Np, Hp, Vp, qp, ra, cf, sa, hf);
    const pf = {
        loader: x.LoadParser,
        resolver: x.ResolveParser,
        cache: x.CacheParser,
        detection: x.DetectionParser
    };
    U.handle(x.Asset, (r1)=>{
        const t = r1.ref;
        Object.entries(pf).filter(([e])=>!!t[e]).forEach(([e, i])=>{
            var s;
            return U.add(Object.assign(t[e], {
                extension: (s = t[e].extension) != null ? s : i
            }));
        });
    }, (r1)=>{
        const t = r1.ref;
        Object.keys(pf).filter((e)=>!!t[e]).forEach((e)=>U.remove(t[e]));
    });
    const $1 = {
        extension: {
            type: x.DetectionParser,
            priority: 3
        },
        test: async ()=>!!(await wr() || Rr()),
        add: async (r1)=>[
                ...r1,
                "basis"
            ],
        remove: async (r1)=>r1.filter((t)=>t !== "basis")
    };
    class Or extends rt {
        constructor(t){
            super(t), this.uploadMethodId = "compressed", this.resource = t.resource, this.mipLevelCount = this.resource.length;
        }
    }
    let Zi;
    function na() {
        if (Zi) return Zi;
        const r1 = document.createElement("canvas").getContext("webgl");
        return r1 ? (Zi = [
            ...r1.getExtension("EXT_texture_compression_bptc") ? [
                "bc6h-rgb-ufloat",
                "bc6h-rgb-float",
                "bc7-rgba-unorm",
                "bc7-rgba-unorm-srgb"
            ] : [],
            ...r1.getExtension("WEBGL_compressed_texture_s3tc") ? [
                "bc1-rgba-unorm",
                "bc2-rgba-unorm",
                "bc3-rgba-unorm"
            ] : [],
            ...r1.getExtension("WEBGL_compressed_texture_s3tc_srgb") ? [
                "bc1-rgba-unorm-srgb",
                "bc2-rgba-unorm-srgb",
                "bc3-rgba-unorm-srgb"
            ] : [],
            ...r1.getExtension("EXT_texture_compression_rgtc") ? [
                "bc4-r-unorm",
                "bc4-r-snorm",
                "bc5-rg-unorm",
                "bc5-rg-snorm"
            ] : [],
            ...r1.getExtension("WEBGL_compressed_texture_etc") ? [
                "etc2-rgb8unorm",
                "etc2-rgb8unorm-srgb",
                "etc2-rgba8unorm",
                "etc2-rgba8unorm-srgb",
                "etc2-rgb8a1unorm",
                "etc2-rgb8a1unorm-srgb",
                "eac-r11unorm",
                "eac-rg11unorm"
            ] : [],
            ...r1.getExtension("WEBGL_compressed_texture_astc") ? [
                "astc-4x4-unorm",
                "astc-4x4-unorm-srgb",
                "astc-5x4-unorm",
                "astc-5x4-unorm-srgb",
                "astc-5x5-unorm",
                "astc-5x5-unorm-srgb",
                "astc-6x5-unorm",
                "astc-6x5-unorm-srgb",
                "astc-6x6-unorm",
                "astc-6x6-unorm-srgb",
                "astc-8x5-unorm",
                "astc-8x5-unorm-srgb",
                "astc-8x6-unorm",
                "astc-8x6-unorm-srgb",
                "astc-8x8-unorm",
                "astc-8x8-unorm-srgb",
                "astc-10x5-unorm",
                "astc-10x5-unorm-srgb",
                "astc-10x6-unorm",
                "astc-10x6-unorm-srgb",
                "astc-10x8-unorm",
                "astc-10x8-unorm-srgb",
                "astc-10x10-unorm",
                "astc-10x10-unorm-srgb",
                "astc-12x10-unorm",
                "astc-12x10-unorm-srgb",
                "astc-12x12-unorm",
                "astc-12x12-unorm-srgb"
            ] : []
        ], Zi) : [];
    }
    let Qi;
    async function oa() {
        if (Qi) return Qi;
        const r1 = await navigator.gpu.requestAdapter();
        return Qi = [
            ...r1.features.has("texture-compression-bc") ? [
                "bc1-rgba-unorm",
                "bc1-rgba-unorm-srgb",
                "bc2-rgba-unorm",
                "bc2-rgba-unorm-srgb",
                "bc3-rgba-unorm",
                "bc3-rgba-unorm-srgb",
                "bc4-r-unorm",
                "bc4-r-snorm",
                "bc5-rg-unorm",
                "bc5-rg-snorm",
                "bc6h-rgb-ufloat",
                "bc6h-rgb-float",
                "bc7-rgba-unorm",
                "bc7-rgba-unorm-srgb"
            ] : [],
            ...r1.features.has("texture-compression-etc2") ? [
                "etc2-rgb8unorm",
                "etc2-rgb8unorm-srgb",
                "etc2-rgb8a1unorm",
                "etc2-rgb8a1unorm-srgb",
                "etc2-rgba8unorm",
                "etc2-rgba8unorm-srgb",
                "eac-r11unorm",
                "eac-r11snorm",
                "eac-rg11unorm",
                "eac-rg11snorm"
            ] : [],
            ...r1.features.has("texture-compression-astc") ? [
                "astc-4x4-unorm",
                "astc-4x4-unorm-srgb",
                "astc-5x4-unorm",
                "astc-5x4-unorm-srgb",
                "astc-5x5-unorm",
                "astc-5x5-unorm-srgb",
                "astc-6x5-unorm",
                "astc-6x5-unorm-srgb",
                "astc-6x6-unorm",
                "astc-6x6-unorm-srgb",
                "astc-8x5-unorm",
                "astc-8x5-unorm-srgb",
                "astc-8x6-unorm",
                "astc-8x6-unorm-srgb",
                "astc-8x8-unorm",
                "astc-8x8-unorm-srgb",
                "astc-10x5-unorm",
                "astc-10x5-unorm-srgb",
                "astc-10x6-unorm",
                "astc-10x6-unorm-srgb",
                "astc-10x8-unorm",
                "astc-10x8-unorm-srgb",
                "astc-10x10-unorm",
                "astc-10x10-unorm-srgb",
                "astc-12x10-unorm",
                "astc-12x10-unorm-srgb",
                "astc-12x12-unorm",
                "astc-12x12-unorm-srgb"
            ] : []
        ], Qi;
    }
    let aa;
    async function la() {
        return aa !== void 0 || (aa = await (async ()=>{
            const r1 = await wr(), t = Rr();
            if (r1 && t) {
                const e = await oa(), i = na();
                return e.filter((s)=>i.includes(s));
            } else {
                if (r1) return await oa();
                if (t) return na();
            }
            return [];
        })()), aa;
    }
    const ff = [
        "r8unorm",
        "r8snorm",
        "r8uint",
        "r8sint",
        "r16uint",
        "r16sint",
        "r16float",
        "rg8unorm",
        "rg8snorm",
        "rg8uint",
        "rg8sint",
        "r32uint",
        "r32sint",
        "r32float",
        "rg16uint",
        "rg16sint",
        "rg16float",
        "rgba8unorm",
        "rgba8unorm-srgb",
        "rgba8snorm",
        "rgba8uint",
        "rgba8sint",
        "bgra8unorm",
        "bgra8unorm-srgb",
        "rgb9e5ufloat",
        "rgb10a2unorm",
        "rg11b10ufloat",
        "rg32uint",
        "rg32sint",
        "rg32float",
        "rgba16uint",
        "rgba16sint",
        "rgba16float",
        "rgba32uint",
        "rgba32sint",
        "rgba32float",
        "stencil8",
        "depth16unorm",
        "depth24plus",
        "depth24plus-stencil8",
        "depth32float",
        "depth32float-stencil8"
    ];
    let Ji;
    async function Gr() {
        if (Ji !== void 0) return Ji;
        const r1 = await la();
        return Ji = [
            ...ff,
            ...r1
        ], Ji;
    }
    const N1 = '(function(){"use strict";function g(r,a){const t=r.getNumImages(),s=r.getNumLevels(0);if(!r.startTranscoding())throw new Error("startTranscoding failed");const m=[];for(let e=0;e<s;++e)for(let o=0;o<t;++o){const B=r.getImageTranscodedSizeInBytes(o,e,a),f=new Uint8Array(B);if(!r.transcodeImage(f,o,e,a,1,0))throw new Error("transcodeImage failed");m.push(f)}return m}const w={"bc3-rgba-unorm":3,"bc7-rgba-unorm":6,"etc2-rgba8unorm":1,"astc-4x4-unorm":10,rgba8unorm:13,rgba4unorm:16};function d(r){const a=w[r];if(a)return a;throw new Error(`Unsupported transcoderFormat: ${r}`)}const n={jsUrl:"basis/basis_transcoder.js",wasmUrl:"basis/basis_transcoder.wasm"};let u,i,c;async function l(){if(!c){const r=new URL(n.jsUrl,location.origin).href,a=new URL(n.wasmUrl,location.origin).href;importScripts(r),c=new Promise(t=>{BASIS({locateFile:s=>a}).then(s=>{s.initializeBasis(),t(s.BasisFile)})})}return c}async function b(r,a){const t=await fetch(r);if(t.ok){const s=await t.arrayBuffer();return new a(new Uint8Array(s))}throw new Error(`Failed to load Basis texture: ${r}`)}const h=["bc7-rgba-unorm","astc-4x4-unorm","etc2-rgba8unorm","bc3-rgba-unorm","rgba8unorm"];async function p(r){const a=await l(),t=await b(r,a),s=g(t,u);return{width:t.getImageWidth(0,0),height:t.getImageHeight(0,0),format:i,resource:s,alphaMode:"no-premultiply-alpha"}}async function y(r,a,t){r&&(n.jsUrl=r),a&&(n.wasmUrl=a),i=h.filter(s=>t.includes(s))[0],u=d(i),await l()}const U={init:async r=>{const{jsUrl:a,wasmUrl:t,supportedTextures:s}=r;await y(a,t,s)},load:async r=>{var a;try{const t=await p(r.url);return{type:"load",url:r.url,success:!0,textureOptions:t,transferables:(a=t.resource)==null?void 0:a.map(s=>s.buffer)}}catch(t){throw t}}};self.onmessage=async r=>{const a=r.data,t=await U[a.type](a);t&&self.postMessage(t,t.transferables)}})();\n';
    let We = null, mf = class {
        constructor(){
            We || (We = URL.createObjectURL(new Blob([
                N1
            ], {
                type: "application/javascript"
            }))), this.worker = new Worker(We);
        }
    };
    mf.revokeObjectURL = function() {
        We && (URL.revokeObjectURL(We), We = null);
    };
    const ts = {
        jsUrl: "https://files.pixijs.download/transcoders/basis/basis_transcoder.js",
        wasmUrl: "https://files.pixijs.download/transcoders/basis/basis_transcoder.wasm"
    };
    function H1(r1) {
        Object.assign(ts, r1);
    }
    let Br;
    const gf = {};
    function X1(r1) {
        return Br || (Br = new mf().worker, Br.onmessage = (t)=>{
            const { success: e, url: i, textureOptions: s } = t.data;
            e || console.warn("Failed to load Basis texture", i), gf[i](s);
        }, Br.postMessage({
            type: "init",
            jsUrl: ts.jsUrl,
            wasmUrl: ts.wasmUrl,
            supportedTextures: r1
        })), Br;
    }
    function _f(r1, t) {
        const e = X1(t);
        return new Promise((i)=>{
            gf[r1] = i, e.postMessage({
                type: "load",
                url: r1
            });
        });
    }
    const z1 = {
        extension: {
            type: x.LoadParser,
            priority: gt.High
        },
        name: "loadBasis",
        test (r1) {
            return Ct(r1, [
                ".basis"
            ]);
        },
        async load (r1, t, e) {
            const i = await Gr(), s = await _f(r1, i), n = new Or(s);
            return re(n, e, r1);
        },
        unload (r1) {
            Array.isArray(r1) ? r1.forEach((t)=>t.destroy(!0)) : r1.destroy(!0);
        }
    };
    function j1(r1, t) {
        const e = r1.getNumImages(), i = r1.getNumLevels(0);
        if (!r1.startTranscoding()) throw new Error("startTranscoding failed");
        const s = [];
        for(let n = 0; n < i; ++n)for(let o = 0; o < e; ++o){
            const a = r1.getImageTranscodedSizeInBytes(o, n, t), l = new Uint8Array(a);
            if (!r1.transcodeImage(l, o, n, t, 1, 0)) throw new Error("transcodeImage failed");
            s.push(l);
        }
        return s;
    }
    const V1 = {
        "bc3-rgba-unorm": 3,
        "bc7-rgba-unorm": 6,
        "etc2-rgba8unorm": 1,
        "astc-4x4-unorm": 10,
        rgba8unorm: 13,
        rgba4unorm: 16
    };
    function W1(r1) {
        const t = V1[r1];
        if (t) return t;
        throw new Error(`Unsupported transcoderFormat: ${r1}`);
    }
    const Y1 = {
        MAGIC: 0,
        SIZE: 1,
        FLAGS: 2,
        HEIGHT: 3,
        WIDTH: 4,
        MIPMAP_COUNT: 7,
        PIXEL_FORMAT: 19,
        PF_FLAGS: 20,
        FOURCC: 21,
        RGB_BITCOUNT: 22,
        R_BIT_MASK: 23,
        G_BIT_MASK: 24,
        B_BIT_MASK: 25,
        A_BIT_MASK: 26
    }, K1 = {
        DXGI_FORMAT: 0,
        RESOURCE_DIMENSION: 1,
        MISC_FLAG: 2,
        ARRAY_SIZE: 3,
        MISC_FLAGS2: 4
    };
    var bf = ((r1)=>(r1[r1.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", r1[r1.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", r1[r1.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", r1[r1.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", r1[r1.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", r1[r1.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", r1[r1.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", r1[r1.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", r1[r1.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", r1[r1.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", r1[r1.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", r1[r1.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", r1[r1.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", r1[r1.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", r1[r1.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", r1[r1.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", r1[r1.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", r1[r1.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", r1[r1.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", r1[r1.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", r1[r1.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", r1[r1.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", r1[r1.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", r1[r1.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", r1[r1.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", r1[r1.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", r1[r1.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", r1[r1.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", r1[r1.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", r1[r1.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", r1[r1.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", r1[r1.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", r1[r1.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", r1[r1.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", r1[r1.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", r1[r1.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", r1[r1.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", r1[r1.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", r1[r1.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", r1[r1.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", r1[r1.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", r1[r1.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", r1[r1.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", r1[r1.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", r1[r1.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", r1[r1.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", r1[r1.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", r1[r1.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", r1[r1.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", r1[r1.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", r1[r1.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", r1[r1.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", r1[r1.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", r1[r1.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", r1[r1.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", r1[r1.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", r1[r1.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", r1[r1.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", r1[r1.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", r1[r1.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", r1[r1.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", r1[r1.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", r1[r1.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", r1[r1.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", r1[r1.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", r1[r1.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", r1[r1.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", r1[r1.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", r1[r1.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", r1[r1.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", r1[r1.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", r1[r1.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", r1[r1.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", r1[r1.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", r1[r1.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", r1[r1.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", r1[r1.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", r1[r1.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", r1[r1.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", r1[r1.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", r1[r1.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", r1[r1.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", r1[r1.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", r1[r1.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", r1[r1.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", r1[r1.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", r1[r1.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", r1[r1.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", r1[r1.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", r1[r1.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", r1[r1.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", r1[r1.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", r1[r1.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", r1[r1.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", r1[r1.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", r1[r1.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", r1[r1.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", r1[r1.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", r1[r1.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", r1[r1.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", r1[r1.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV", r1[r1.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410", r1[r1.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416", r1[r1.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12", r1[r1.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010", r1[r1.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016", r1[r1.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE", r1[r1.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2", r1[r1.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210", r1[r1.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216", r1[r1.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11", r1[r1.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44", r1[r1.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44", r1[r1.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8", r1[r1.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8", r1[r1.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM", r1[r1.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208", r1[r1.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208", r1[r1.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408", r1[r1.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE", r1[r1.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE", r1[r1.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT", r1))(bf || {}), vf = ((r1)=>(r1[r1.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", r1[r1.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", r1[r1.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D", r1))(vf || {});
    function lt(r1) {
        return r1.charCodeAt(0) + (r1.charCodeAt(1) << 8) + (r1.charCodeAt(2) << 16) + (r1.charCodeAt(3) << 24);
    }
    var xt = ((r1)=>(r1[r1.UNKNOWN = 0] = "UNKNOWN", r1[r1.R8G8B8 = 20] = "R8G8B8", r1[r1.A8R8G8B8 = 21] = "A8R8G8B8", r1[r1.X8R8G8B8 = 22] = "X8R8G8B8", r1[r1.R5G6B5 = 23] = "R5G6B5", r1[r1.X1R5G5B5 = 24] = "X1R5G5B5", r1[r1.A1R5G5B5 = 25] = "A1R5G5B5", r1[r1.A4R4G4B4 = 26] = "A4R4G4B4", r1[r1.R3G3B2 = 27] = "R3G3B2", r1[r1.A8 = 28] = "A8", r1[r1.A8R3G3B2 = 29] = "A8R3G3B2", r1[r1.X4R4G4B4 = 30] = "X4R4G4B4", r1[r1.A2B10G10R10 = 31] = "A2B10G10R10", r1[r1.A8B8G8R8 = 32] = "A8B8G8R8", r1[r1.X8B8G8R8 = 33] = "X8B8G8R8", r1[r1.G16R16 = 34] = "G16R16", r1[r1.A2R10G10B10 = 35] = "A2R10G10B10", r1[r1.A16B16G16R16 = 36] = "A16B16G16R16", r1[r1.A8P8 = 40] = "A8P8", r1[r1.P8 = 41] = "P8", r1[r1.L8 = 50] = "L8", r1[r1.A8L8 = 51] = "A8L8", r1[r1.A4L4 = 52] = "A4L4", r1[r1.V8U8 = 60] = "V8U8", r1[r1.L6V5U5 = 61] = "L6V5U5", r1[r1.X8L8V8U8 = 62] = "X8L8V8U8", r1[r1.Q8W8V8U8 = 63] = "Q8W8V8U8", r1[r1.V16U16 = 64] = "V16U16", r1[r1.A2W10V10U10 = 67] = "A2W10V10U10", r1[r1.Q16W16V16U16 = 110] = "Q16W16V16U16", r1[r1.R16F = 111] = "R16F", r1[r1.G16R16F = 112] = "G16R16F", r1[r1.A16B16G16R16F = 113] = "A16B16G16R16F", r1[r1.R32F = 114] = "R32F", r1[r1.G32R32F = 115] = "G32R32F", r1[r1.A32B32G32R32F = 116] = "A32B32G32R32F", r1[r1.UYVY = lt("UYVY")] = "UYVY", r1[r1.R8G8_B8G8 = lt("RGBG")] = "R8G8_B8G8", r1[r1.YUY2 = lt("YUY2")] = "YUY2", r1[r1.D3DFMT_G8R8_G8B8 = lt("GRGB")] = "D3DFMT_G8R8_G8B8", r1[r1.DXT1 = lt("DXT1")] = "DXT1", r1[r1.DXT2 = lt("DXT2")] = "DXT2", r1[r1.DXT3 = lt("DXT3")] = "DXT3", r1[r1.DXT4 = lt("DXT4")] = "DXT4", r1[r1.DXT5 = lt("DXT5")] = "DXT5", r1[r1.ATI1 = lt("ATI1")] = "ATI1", r1[r1.AT1N = lt("AT1N")] = "AT1N", r1[r1.ATI2 = lt("ATI2")] = "ATI2", r1[r1.AT2N = lt("AT2N")] = "AT2N", r1[r1.BC4U = lt("BC4U")] = "BC4U", r1[r1.BC4S = lt("BC4S")] = "BC4S", r1[r1.BC5U = lt("BC5U")] = "BC5U", r1[r1.BC5S = lt("BC5S")] = "BC5S", r1[r1.DX10 = lt("DX10")] = "DX10", r1))(xt || {});
    const ua = {
        [xt.DXT1]: "bc1-rgba-unorm",
        [xt.DXT2]: "bc2-rgba-unorm",
        [xt.DXT3]: "bc2-rgba-unorm",
        [xt.DXT4]: "bc3-rgba-unorm",
        [xt.DXT5]: "bc3-rgba-unorm",
        [xt.ATI1]: "bc4-r-unorm",
        [xt.BC4U]: "bc4-r-unorm",
        [xt.BC4S]: "bc4-r-snorm",
        [xt.ATI2]: "bc5-rg-unorm",
        [xt.BC5U]: "bc5-rg-unorm",
        [xt.BC5S]: "bc5-rg-snorm",
        36: "rgba16uint",
        110: "rgba16sint",
        111: "r16float",
        112: "rg16float",
        113: "rgba16float",
        114: "r32float",
        115: "rg32float",
        116: "rgba32float"
    }, mt = {
        70: "bc1-rgba-unorm",
        71: "bc1-rgba-unorm",
        72: "bc1-rgba-unorm-srgb",
        73: "bc2-rgba-unorm",
        74: "bc2-rgba-unorm",
        75: "bc2-rgba-unorm-srgb",
        76: "bc3-rgba-unorm",
        77: "bc3-rgba-unorm",
        78: "bc3-rgba-unorm-srgb",
        79: "bc4-r-unorm",
        80: "bc4-r-unorm",
        81: "bc4-r-snorm",
        82: "bc5-rg-unorm",
        83: "bc5-rg-unorm",
        84: "bc5-rg-snorm",
        94: "bc6h-rgb-ufloat",
        95: "bc6h-rgb-ufloat",
        96: "bc6h-rgb-float",
        97: "bc7-rgba-unorm",
        98: "bc7-rgba-unorm",
        99: "bc7-rgba-unorm-srgb",
        28: "rgba8unorm",
        29: "rgba8unorm-srgb",
        87: "bgra8unorm",
        91: "bgra8unorm-srgb",
        41: "r32float",
        49: "rg8unorm",
        56: "r16uint",
        61: "r8unorm",
        24: "rgb10a2unorm",
        11: "rgba16uint",
        13: "rgba16sint",
        10: "rgba16float",
        54: "r16float",
        34: "rg16float",
        16: "rg32float",
        2: "rgba32float"
    }, I = {
        MAGIC_VALUE: 542327876,
        MAGIC_SIZE: 4,
        HEADER_SIZE: 124,
        HEADER_DX10_SIZE: 20,
        PIXEL_FORMAT_FLAGS: {
            ALPHAPIXELS: 1,
            ALPHA: 2,
            FOURCC: 4,
            RGB: 64,
            RGBA: 65,
            YUV: 512,
            LUMINANCE: 131072,
            LUMINANCEA: 131073
        },
        RESOURCE_MISC_TEXTURECUBE: 4,
        HEADER_FIELDS: Y1,
        HEADER_DX10_FIELDS: K1,
        DXGI_FORMAT: bf,
        D3D10_RESOURCE_DIMENSION: vf,
        D3DFMT: xt
    }, yf = {
        "bc1-rgba-unorm": 8,
        "bc1-rgba-unorm-srgb": 8,
        "bc2-rgba-unorm": 16,
        "bc2-rgba-unorm-srgb": 16,
        "bc3-rgba-unorm": 16,
        "bc3-rgba-unorm-srgb": 16,
        "bc4-r-unorm": 8,
        "bc4-r-snorm": 8,
        "bc5-rg-unorm": 16,
        "bc5-rg-snorm": 16,
        "bc6h-rgb-ufloat": 16,
        "bc6h-rgb-float": 16,
        "bc7-rgba-unorm": 16,
        "bc7-rgba-unorm-srgb": 16
    };
    function xf(r1, t) {
        const { format: e, fourCC: i, width: s, height: n, dataOffset: o, mipmapCount: a } = Z1(r1);
        if (!t.includes(e)) throw new Error(`Unsupported texture format: ${i} ${e}, supported: ${t}`);
        if (a <= 1) return {
            format: e,
            width: s,
            height: n,
            resource: [
                new Uint8Array(r1, o)
            ],
            alphaMode: "no-premultiply-alpha"
        };
        const l = q1(e, s, n, o, a, r1);
        return {
            format: e,
            width: s,
            height: n,
            resource: l,
            alphaMode: "no-premultiply-alpha"
        };
    }
    function q1(r1, t, e, i, s, n) {
        const o = [], a = yf[r1];
        let l = t, u = e, c = i;
        for(let h = 0; h < s; ++h){
            const p = a ? Math.max(4, l) / 4 * Math.max(4, u) / 4 * a : l * u * 4, f = new Uint8Array(n, c, p);
            o.push(f), c += p, l = Math.max(l >> 1, 1), u = Math.max(u >> 1, 1);
        }
        return o;
    }
    function Z1(r1) {
        const t = new Uint32Array(r1, 0, I.HEADER_SIZE / Uint32Array.BYTES_PER_ELEMENT);
        if (t[I.HEADER_FIELDS.MAGIC] !== I.MAGIC_VALUE) throw new Error("Invalid magic number in DDS header");
        const e = t[I.HEADER_FIELDS.HEIGHT], i = t[I.HEADER_FIELDS.WIDTH], s = Math.max(1, t[I.HEADER_FIELDS.MIPMAP_COUNT]), n = t[I.HEADER_FIELDS.PF_FLAGS], o = t[I.HEADER_FIELDS.FOURCC], a = Q1(t, n, o, r1), l = I.MAGIC_SIZE + I.HEADER_SIZE + (o === I.D3DFMT.DX10 ? I.HEADER_DX10_SIZE : 0);
        return {
            format: a,
            fourCC: o,
            width: i,
            height: e,
            dataOffset: l,
            mipmapCount: s
        };
    }
    function Q1(r1, t, e, i) {
        if (t & I.PIXEL_FORMAT_FLAGS.FOURCC) {
            if (e === I.D3DFMT.DX10) {
                const s = new Uint32Array(i, I.MAGIC_SIZE + I.HEADER_SIZE, I.HEADER_DX10_SIZE / Uint32Array.BYTES_PER_ELEMENT);
                if (s[I.HEADER_DX10_FIELDS.MISC_FLAG] === I.RESOURCE_MISC_TEXTURECUBE) throw new Error("DDSParser does not support cubemap textures");
                if (s[I.HEADER_DX10_FIELDS.RESOURCE_DIMENSION] === I.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D) throw new Error("DDSParser does not supported 3D texture data");
                const n = s[I.HEADER_DX10_FIELDS.DXGI_FORMAT];
                if (n in mt) return mt[n];
                throw new Error(`DDSParser cannot parse texture data with DXGI format ${n}`);
            }
            if (e in ua) return ua[e];
            throw new Error(`DDSParser cannot parse texture data with fourCC format ${e}`);
        }
        if (t & I.PIXEL_FORMAT_FLAGS.RGB || t & I.PIXEL_FORMAT_FLAGS.RGBA) return J1(r1);
        throw t & I.PIXEL_FORMAT_FLAGS.YUV ? new Error("DDSParser does not supported YUV uncompressed texture data.") : t & I.PIXEL_FORMAT_FLAGS.LUMINANCE || t & I.PIXEL_FORMAT_FLAGS.LUMINANCEA ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : t & I.PIXEL_FORMAT_FLAGS.ALPHA || t & I.PIXEL_FORMAT_FLAGS.ALPHAPIXELS ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
    }
    function J1(r1) {
        const t = r1[I.HEADER_FIELDS.RGB_BITCOUNT], e = r1[I.HEADER_FIELDS.R_BIT_MASK], i = r1[I.HEADER_FIELDS.G_BIT_MASK], s = r1[I.HEADER_FIELDS.B_BIT_MASK], n = r1[I.HEADER_FIELDS.A_BIT_MASK];
        switch(t){
            case 32:
                if (e === 255 && i === 65280 && s === 16711680 && n === 4278190080) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];
                if (e === 16711680 && i === 65280 && s === 255 && n === 4278190080) return mt[I.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];
                if (e === 1072693248 && i === 1047552 && s === 1023 && n === 3221225472) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];
                if (e === 65535 && i === 4294901760 && s === 0 && n === 0) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];
                if (e === 4294967295 && i === 0 && s === 0 && n === 0) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];
                break;
            case 24:
                break;
            case 16:
                if (e === 31744 && i === 992 && s === 31 && n === 32768) return mt[I.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];
                if (e === 63488 && i === 2016 && s === 31 && n === 0) return mt[I.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];
                if (e === 3840 && i === 240 && s === 15 && n === 61440) return mt[I.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];
                if (e === 255 && i === 0 && s === 0 && n === 65280) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];
                if (e === 65535 && i === 0 && s === 0 && n === 0) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];
                break;
            case 8:
                if (e === 255 && i === 0 && s === 0 && n === 0) return mt[I.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];
                break;
        }
        throw new Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${t}, rBitMask = ${e}, gBitMask = ${i}, aBitMask = ${n}`);
    }
    const tT = {
        extension: {
            type: x.LoadParser,
            priority: gt.High
        },
        name: "loadDDS",
        test (r1) {
            return Ct(r1, [
                ".dds"
            ]);
        },
        async load (r1, t, e) {
            const i = await Gr(), s = await (await fetch(r1)).arrayBuffer(), n = xf(s, i), o = new Or(n);
            return re(o, e, r1);
        },
        unload (r1) {
            Array.isArray(r1) ? r1.forEach((t)=>t.destroy(!0)) : r1.destroy(!0);
        }
    };
    var Tf = ((r1)=>(r1[r1.RGBA8_SNORM = 36759] = "RGBA8_SNORM", r1[r1.RGBA = 6408] = "RGBA", r1[r1.RGBA8UI = 36220] = "RGBA8UI", r1[r1.SRGB8_ALPHA8 = 35907] = "SRGB8_ALPHA8", r1[r1.RGBA8I = 36238] = "RGBA8I", r1[r1.RGBA8 = 32856] = "RGBA8", r1[r1.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", r1[r1.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", r1[r1.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", r1[r1.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", r1[r1.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", r1[r1.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", r1[r1.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", r1[r1.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", r1[r1.COMPRESSED_RED_RGTC1_EXT = 36283] = "COMPRESSED_RED_RGTC1_EXT", r1[r1.COMPRESSED_SIGNED_RED_RGTC1_EXT = 36284] = "COMPRESSED_SIGNED_RED_RGTC1_EXT", r1[r1.COMPRESSED_RED_GREEN_RGTC2_EXT = 36285] = "COMPRESSED_RED_GREEN_RGTC2_EXT", r1[r1.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT = 36286] = "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", r1[r1.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", r1[r1.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", r1[r1.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", r1[r1.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", r1[r1.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", r1[r1.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", r1[r1.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", r1[r1.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", r1[r1.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", r1[r1.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", r1[r1.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", r1[r1.COMPRESSED_RGBA_ASTC_5x4_KHR = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR", r1[r1.COMPRESSED_RGBA_ASTC_5x5_KHR = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR", r1[r1.COMPRESSED_RGBA_ASTC_6x5_KHR = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR", r1[r1.COMPRESSED_RGBA_ASTC_6x6_KHR = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR", r1[r1.COMPRESSED_RGBA_ASTC_8x5_KHR = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR", r1[r1.COMPRESSED_RGBA_ASTC_8x6_KHR = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR", r1[r1.COMPRESSED_RGBA_ASTC_8x8_KHR = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR", r1[r1.COMPRESSED_RGBA_ASTC_10x5_KHR = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR", r1[r1.COMPRESSED_RGBA_ASTC_10x6_KHR = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR", r1[r1.COMPRESSED_RGBA_ASTC_10x8_KHR = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR", r1[r1.COMPRESSED_RGBA_ASTC_10x10_KHR = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR", r1[r1.COMPRESSED_RGBA_ASTC_12x10_KHR = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR", r1[r1.COMPRESSED_RGBA_ASTC_12x12_KHR = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR", r1[r1.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR", r1[r1.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", r1[r1.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", r1[r1.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", r1[r1.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", r1))(Tf || {}), eT = ((r1)=>(r1[r1.RGBA = 6408] = "RGBA", r1[r1.RGB = 6407] = "RGB", r1[r1.RG = 33319] = "RG", r1[r1.RED = 6403] = "RED", r1[r1.RGBA_INTEGER = 36249] = "RGBA_INTEGER", r1[r1.RGB_INTEGER = 36248] = "RGB_INTEGER", r1[r1.RG_INTEGER = 33320] = "RG_INTEGER", r1[r1.RED_INTEGER = 36244] = "RED_INTEGER", r1[r1.ALPHA = 6406] = "ALPHA", r1[r1.LUMINANCE = 6409] = "LUMINANCE", r1[r1.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", r1[r1.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", r1[r1.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", r1))(eT || {}), rT = ((r1)=>(r1[r1.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", r1[r1.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", r1[r1.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", r1[r1.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", r1[r1.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", r1[r1.UNSIGNED_INT = 5125] = "UNSIGNED_INT", r1[r1.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", r1[r1.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", r1[r1.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", r1[r1.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", r1[r1.BYTE = 5120] = "BYTE", r1[r1.SHORT = 5122] = "SHORT", r1[r1.INT = 5124] = "INT", r1[r1.FLOAT = 5126] = "FLOAT", r1[r1.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", r1[r1.HALF_FLOAT = 36193] = "HALF_FLOAT", r1))(rT || {});
    const tt = {
        FILE_HEADER_SIZE: 64,
        FILE_IDENTIFIER: [
            171,
            75,
            84,
            88,
            32,
            49,
            49,
            187,
            13,
            10,
            26,
            10
        ],
        FORMATS_TO_COMPONENTS: {
            6408: 4,
            6407: 3,
            33319: 2,
            6403: 1,
            6409: 1,
            6410: 2,
            6406: 1
        },
        INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: {
            33776: .5,
            33777: .5,
            33778: 1,
            33779: 1,
            35916: .5,
            35917: .5,
            35918: 1,
            35919: 1,
            36283: .5,
            36284: .5,
            36285: 1,
            36286: 1,
            37488: .5,
            37489: .5,
            37490: 1,
            37491: 1,
            37492: .5,
            37496: 1,
            37493: .5,
            37497: 1,
            37494: .5,
            37495: .5,
            37808: 1,
            37840: 1,
            37809: .8,
            37841: .8,
            37810: .64,
            37842: .64,
            37811: .53375,
            37843: .53375,
            37812: .445,
            37844: .445,
            37813: .4,
            37845: .4,
            37814: .33375,
            37846: .33375,
            37815: .25,
            37847: .25,
            37816: .32,
            37848: .32,
            37817: .26625,
            37849: .26625,
            37818: .2,
            37850: .2,
            37819: .16,
            37851: .16,
            37820: .13375,
            37852: .13375,
            37821: .11125,
            37853: .11125,
            36492: 1,
            36493: 1,
            36494: 1,
            36495: 1
        },
        INTERNAL_FORMAT_TO_TEXTURE_FORMATS: {
            33776: "bc1-rgba-unorm",
            33777: "bc1-rgba-unorm",
            33778: "bc2-rgba-unorm",
            33779: "bc3-rgba-unorm",
            35916: "bc1-rgba-unorm-srgb",
            35917: "bc1-rgba-unorm-srgb",
            35918: "bc2-rgba-unorm-srgb",
            35919: "bc3-rgba-unorm-srgb",
            36283: "bc4-r-unorm",
            36284: "bc4-r-snorm",
            36285: "bc5-rg-unorm",
            36286: "bc5-rg-snorm",
            37488: "eac-r11unorm",
            37490: "eac-rg11snorm",
            37492: "etc2-rgb8unorm",
            37496: "etc2-rgba8unorm",
            37493: "etc2-rgb8unorm-srgb",
            37497: "etc2-rgba8unorm-srgb",
            37494: "etc2-rgb8a1unorm",
            37495: "etc2-rgb8a1unorm-srgb",
            37808: "astc-4x4-unorm",
            37840: "astc-4x4-unorm-srgb",
            37809: "astc-5x4-unorm",
            37841: "astc-5x4-unorm-srgb",
            37810: "astc-5x5-unorm",
            37842: "astc-5x5-unorm-srgb",
            37811: "astc-6x5-unorm",
            37843: "astc-6x5-unorm-srgb",
            37812: "astc-6x6-unorm",
            37844: "astc-6x6-unorm-srgb",
            37813: "astc-8x5-unorm",
            37845: "astc-8x5-unorm-srgb",
            37814: "astc-8x6-unorm",
            37846: "astc-8x6-unorm-srgb",
            37815: "astc-8x8-unorm",
            37847: "astc-8x8-unorm-srgb",
            37816: "astc-10x5-unorm",
            37848: "astc-10x5-unorm-srgb",
            37817: "astc-10x6-unorm",
            37849: "astc-10x6-unorm-srgb",
            37818: "astc-10x8-unorm",
            37850: "astc-10x8-unorm-srgb",
            37819: "astc-10x10-unorm",
            37851: "astc-10x10-unorm-srgb",
            37820: "astc-12x10-unorm",
            37852: "astc-12x10-unorm-srgb",
            37821: "astc-12x12-unorm",
            37853: "astc-12x12-unorm-srgb",
            36492: "bc7-rgba-unorm",
            36493: "bc7-rgba-unorm-srgb",
            36494: "bc6h-rgb-float",
            36495: "bc6h-rgb-ufloat",
            35907: "rgba8unorm-srgb",
            36759: "rgba8snorm",
            36220: "rgba8uint",
            36238: "rgba8sint",
            6408: "rgba8unorm"
        },
        FIELDS: {
            FILE_IDENTIFIER: 0,
            ENDIANNESS: 12,
            GL_TYPE: 16,
            GL_TYPE_SIZE: 20,
            GL_FORMAT: 24,
            GL_INTERNAL_FORMAT: 28,
            GL_BASE_INTERNAL_FORMAT: 32,
            PIXEL_WIDTH: 36,
            PIXEL_HEIGHT: 40,
            PIXEL_DEPTH: 44,
            NUMBER_OF_ARRAY_ELEMENTS: 48,
            NUMBER_OF_FACES: 52,
            NUMBER_OF_MIPMAP_LEVELS: 56,
            BYTES_OF_KEY_VALUE_DATA: 60
        },
        TYPES_TO_BYTES_PER_COMPONENT: {
            5121: 1,
            5123: 2,
            5124: 4,
            5125: 4,
            5126: 4,
            36193: 8
        },
        TYPES_TO_BYTES_PER_PIXEL: {
            32819: 2,
            32820: 2,
            33635: 2
        },
        ENDIANNESS: 67305985
    };
    function Sf(r1, t) {
        const e = new DataView(r1);
        if (!oT(e)) throw new Error("Invalid KTX identifier in header");
        const { littleEndian: i, glType: s, glFormat: n, glInternalFormat: o, pixelWidth: a, pixelHeight: l, numberOfMipmapLevels: u, offset: c } = nT(e), h = tt.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[o];
        if (!h) throw new Error(`Unknown texture format ${o}`);
        if (!t.includes(h)) throw new Error(`Unsupported texture format: ${h}, supportedFormats: ${t}`);
        const p = sT(s, n, o), f = iT(e, s, p, a, l, c, u, i);
        return {
            format: h,
            width: a,
            height: l,
            resource: f,
            alphaMode: "no-premultiply-alpha"
        };
    }
    function iT(r1, t, e, i, s, n, o, a) {
        const l = i + 3 & -4, u = s + 3 & -4;
        let c = i * s;
        t === 0 && (c = l * u);
        let h = c * e, p = i, f = s, m = l, _ = u, g = n;
        const b = new Array(o);
        for(let v = 0; v < o; v++){
            const y = r1.getUint32(g, a);
            let T = g + 4;
            b[v] = new Uint8Array(r1.buffer, T, h), T += h, g += y + 4, g = g % 4 !== 0 ? g + 4 - g % 4 : g, p = p >> 1 || 1, f = f >> 1 || 1, m = p + 4 - 1 & -4, _ = f + 4 - 1 & -4, h = m * _ * e;
        }
        return b;
    }
    function sT(r1, t, e) {
        let i = tt.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[e];
        if (r1 !== 0 && (tt.TYPES_TO_BYTES_PER_COMPONENT[r1] ? i = tt.TYPES_TO_BYTES_PER_COMPONENT[r1] * tt.FORMATS_TO_COMPONENTS[t] : i = tt.TYPES_TO_BYTES_PER_PIXEL[r1]), i === void 0) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
        return i;
    }
    function nT(r1) {
        const t = r1.getUint32(tt.FIELDS.ENDIANNESS, !0) === tt.ENDIANNESS, e = r1.getUint32(tt.FIELDS.GL_TYPE, t), i = r1.getUint32(tt.FIELDS.GL_FORMAT, t), s = r1.getUint32(tt.FIELDS.GL_INTERNAL_FORMAT, t), n = r1.getUint32(tt.FIELDS.PIXEL_WIDTH, t), o = r1.getUint32(tt.FIELDS.PIXEL_HEIGHT, t) || 1, a = r1.getUint32(tt.FIELDS.PIXEL_DEPTH, t) || 1, l = r1.getUint32(tt.FIELDS.NUMBER_OF_ARRAY_ELEMENTS, t) || 1, u = r1.getUint32(tt.FIELDS.NUMBER_OF_FACES, t), c = r1.getUint32(tt.FIELDS.NUMBER_OF_MIPMAP_LEVELS, t), h = r1.getUint32(tt.FIELDS.BYTES_OF_KEY_VALUE_DATA, t);
        if (o === 0 || a !== 1) throw new Error("Only 2D textures are supported");
        if (u !== 1) throw new Error("CubeTextures are not supported by KTXLoader yet!");
        if (l !== 1) throw new Error("WebGL does not support array textures");
        return {
            littleEndian: t,
            glType: e,
            glFormat: i,
            glInternalFormat: s,
            pixelWidth: n,
            pixelHeight: o,
            numberOfMipmapLevels: c,
            offset: tt.FILE_HEADER_SIZE + h
        };
    }
    function oT(r1) {
        for(let t = 0; t < tt.FILE_IDENTIFIER.length; t++)if (r1.getUint8(t) !== tt.FILE_IDENTIFIER[t]) return !1;
        return !0;
    }
    const aT = {
        extension: {
            type: x.LoadParser,
            priority: gt.High
        },
        name: "loadKTX",
        test (r1) {
            return Ct(r1, ".ktx");
        },
        async load (r1, t, e) {
            const i = await Gr(), s = await (await fetch(r1)).arrayBuffer(), n = Sf(s, i), o = new Or(n);
            return re(o, e, r1);
        },
        unload (r1) {
            Array.isArray(r1) ? r1.forEach((t)=>t.destroy(!0)) : r1.destroy(!0);
        }
    }, lT = '(function(){"use strict";const s={rgb8unorm:{convertedFormat:"rgba8unorm",convertFunction:i},"rgb8unorm-srgb":{convertedFormat:"rgba8unorm-srgb",convertFunction:i}};function f(r){const t=r.format;if(s[t]){const n=s[t].convertFunction,o=r.resource;for(let e=0;e<o.length;e++)o[e]=n(o[e]);r.format=s[t].convertedFormat}}function i(r){const t=r.byteLength/3,n=new Uint32Array(t);for(let o=0;o<t;++o)n[o]=r[o*3]+(r[o*3+1]<<8)+(r[o*3+2]<<16)+4278190080;return new Uint8Array(n.buffer)}function d(r){const t=[];for(let n=0;n<r.numLevels;n++){const o=r.getImageData(n,0,0),e=new Uint8Array(o.byteLength);e.set(o),t.push(e)}return t}const w={6408:"rgba8unorm",32856:"bgra8unorm",32857:"rgb10a2unorm",33189:"depth16unorm",33190:"depth24plus",33321:"r8unorm",33323:"rg8unorm",33325:"r16float",33326:"r32float",33327:"rg16float",33328:"rg32float",33329:"r8sint",33330:"r8uint",33331:"r16sint",33332:"r16uint",33333:"r32sint",33334:"r32uint",33335:"rg8sint",33336:"rg8uint",33337:"rg16sint",33338:"rg16uint",33339:"rg32sint",33340:"rg32uint",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",34836:"rgba32float",34842:"rgba16float",35056:"depth24plus-stencil8",35898:"rg11b10ufloat",35901:"rgb9e5ufloat",35907:"rgba8unorm-srgb",36012:"depth32float",36013:"depth32float-stencil8",36168:"stencil8",36208:"rgba32uint",36214:"rgba16uint",36220:"rgba8uint",36226:"rgba32sint",36232:"rgba16sint",36238:"rgba8sint",36492:"bc7-rgba-unorm",36756:"r8snorm",36757:"rg8snorm",36759:"rgba8snorm",37496:"etc2-rgba8unorm",37808:"astc-4x4-unorm"};function p(r){const t=w[r];if(t)return t;throw new Error(`Unsupported glInternalFormat: ${r}`)}const h={23:"rgb8unorm",37:"rgba8unorm",43:"rgba8unorm-srgb"};function F(r){const t=h[r];if(t)return t;throw new Error(`Unsupported VkFormat: ${r}`)}function U(r){return r.classId===2?F(r.vkFormat):p(r.glInternalformat)}const T={"bc3-rgba-unorm":"BC3_RGBA","bc7-rgba-unorm":"BC7_M5_RGBA","etc2-rgba8unorm":"ETC2_RGBA","astc-4x4-unorm":"ASTC_4x4_RGBA",rgba8unorm:"RGBA32",rg11b10ufloat:"R11F_G11F_B10F"};function y(r){const t=T[r];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${r}`)}const a={jsUrl:"",wasmUrl:""};let l,u,c;async function g(){if(!c){const r=new URL(a.jsUrl,location.origin).href,t=new URL(a.wasmUrl,location.origin).href;importScripts(r),c=new Promise(n=>{LIBKTX({locateFile:o=>t}).then(o=>{n(o)})})}return c}async function v(r,t){const n=await fetch(r);if(n.ok){const o=await n.arrayBuffer();return new t.ktxTexture(new Uint8Array(o))}throw new Error(`Failed to load KTX(2) texture: ${r}`)}const x=["bc7-rgba-unorm","astc-4x4-unorm","etc2-rgba8unorm","bc3-rgba-unorm","rgba8unorm"];async function B(r){const t=await g(),n=await v(r,t);let o;if(n.needsTranscoding){o=u;const R=t.TranscodeTarget[l];if(n.transcodeBasis(R,0)!==t.ErrorCode.SUCCESS)throw new Error("Unable to transcode basis texture.")}else o=U(n);const e=d(n),b={width:n.baseWidth,height:n.baseHeight,format:o,mipLevelCount:n.numLevels,resource:e,alphaMode:"no-premultiply-alpha"};return f(b),b}async function A(r,t,n){r&&(a.jsUrl=r),t&&(a.wasmUrl=t),u=x.filter(o=>n.includes(o))[0],l=y(u),await g()}const m={init:async r=>{const{jsUrl:t,wasmUrl:n,supportedTextures:o}=r;await A(t,n,o)},load:async r=>{var t;try{const n=await B(r.url);return{type:"load",url:r.url,success:!0,textureOptions:n,transferables:(t=n.resource)==null?void 0:t.map(o=>o.buffer)}}catch(n){throw n}}};self.onmessage=async r=>{var t;const n=r.data,o=await((t=m[n.type])==null?void 0:t.call(m,n));o&&self.postMessage(o,o.transferables)}})();\n';
    let Ye = null;
    class Ef {
        constructor(){
            Ye || (Ye = URL.createObjectURL(new Blob([
                lT
            ], {
                type: "application/javascript"
            }))), this.worker = new Worker(Ye);
        }
    }
    Ef.revokeObjectURL = function() {
        Ye && (URL.revokeObjectURL(Ye), Ye = null);
    };
    const es = {
        jsUrl: "https://files.pixijs.download/transcoders/ktx/libktx.js",
        wasmUrl: "https://files.pixijs.download/transcoders/ktx/libktx.wasm"
    };
    function uT(r1) {
        Object.assign(es, r1);
    }
    let Ir;
    const Af = {};
    function cT(r1) {
        return Ir || (Ir = new Ef().worker, Ir.onmessage = (t)=>{
            const { success: e, url: i, textureOptions: s } = t.data;
            e || console.warn("Failed to load KTX texture", i), Af[i](s);
        }, Ir.postMessage({
            type: "init",
            jsUrl: es.jsUrl,
            wasmUrl: es.wasmUrl,
            supportedTextures: r1
        })), Ir;
    }
    function Pf(r1, t) {
        const e = cT(t);
        return new Promise((i)=>{
            Af[r1] = i, e.postMessage({
                type: "load",
                url: r1
            });
        });
    }
    const hT = {
        extension: {
            type: x.LoadParser,
            priority: gt.High
        },
        name: "loadKTX2",
        test (r1) {
            return Ct(r1, ".ktx2");
        },
        async load (r1, t, e) {
            const i = await Gr(), s = await Pf(r1, i), n = new Or(s);
            return re(n, e, r1);
        },
        unload (r1) {
            Array.isArray(r1) ? r1.forEach((t)=>t.destroy(!0)) : r1.destroy(!0);
        }
    }, ca = {
        rgb8unorm: {
            convertedFormat: "rgba8unorm",
            convertFunction: Rf
        },
        "rgb8unorm-srgb": {
            convertedFormat: "rgba8unorm-srgb",
            convertFunction: Rf
        }
    };
    function dT(r1) {
        const t = r1.format;
        if (ca[t]) {
            const e = ca[t].convertFunction, i = r1.resource;
            for(let s = 0; s < i.length; s++)i[s] = e(i[s]);
            r1.format = ca[t].convertedFormat;
        }
    }
    function Rf(r1) {
        const t = r1.byteLength / 3, e = new Uint32Array(t);
        for(let i = 0; i < t; ++i)e[i] = r1[i * 3] + (r1[i * 3 + 1] << 8) + (r1[i * 3 + 2] << 16) + 4278190080;
        return new Uint8Array(e.buffer);
    }
    function pT(r1) {
        const t = [];
        for(let e = 0; e < r1.numLevels; e++){
            const i = r1.getImageData(e, 0, 0), s = new Uint8Array(i.byteLength);
            s.set(i), t.push(s);
        }
        return t;
    }
    const fT = {
        6408: "rgba8unorm",
        32856: "bgra8unorm",
        32857: "rgb10a2unorm",
        33189: "depth16unorm",
        33190: "depth24plus",
        33321: "r8unorm",
        33323: "rg8unorm",
        33325: "r16float",
        33326: "r32float",
        33327: "rg16float",
        33328: "rg32float",
        33329: "r8sint",
        33330: "r8uint",
        33331: "r16sint",
        33332: "r16uint",
        33333: "r32sint",
        33334: "r32uint",
        33335: "rg8sint",
        33336: "rg8uint",
        33337: "rg16sint",
        33338: "rg16uint",
        33339: "rg32sint",
        33340: "rg32uint",
        33778: "bc2-rgba-unorm",
        33779: "bc3-rgba-unorm",
        34836: "rgba32float",
        34842: "rgba16float",
        35056: "depth24plus-stencil8",
        35898: "rg11b10ufloat",
        35901: "rgb9e5ufloat",
        35907: "rgba8unorm-srgb",
        36012: "depth32float",
        36013: "depth32float-stencil8",
        36168: "stencil8",
        36208: "rgba32uint",
        36214: "rgba16uint",
        36220: "rgba8uint",
        36226: "rgba32sint",
        36232: "rgba16sint",
        36238: "rgba8sint",
        36492: "bc7-rgba-unorm",
        36756: "r8snorm",
        36757: "rg8snorm",
        36759: "rgba8snorm",
        37496: "etc2-rgba8unorm",
        37808: "astc-4x4-unorm"
    };
    function wf(r1) {
        const t = fT[r1];
        if (t) return t;
        throw new Error(`Unsupported glInternalFormat: ${r1}`);
    }
    const mT = {
        23: "rgb8unorm",
        37: "rgba8unorm",
        43: "rgba8unorm-srgb"
    };
    function Mf(r1) {
        const t = mT[r1];
        if (t) return t;
        throw new Error(`Unsupported VkFormat: ${r1}`);
    }
    function gT(r1) {
        return r1.classId === 2 ? Mf(r1.vkFormat) : wf(r1.glInternalformat);
    }
    const _T = {
        "bc3-rgba-unorm": "BC3_RGBA",
        "bc7-rgba-unorm": "BC7_M5_RGBA",
        "etc2-rgba8unorm": "ETC2_RGBA",
        "astc-4x4-unorm": "ASTC_4x4_RGBA",
        rgba8unorm: "RGBA32",
        rg11b10ufloat: "R11F_G11F_B10F"
    };
    function bT(r1) {
        const t = _T[r1];
        if (t) return t;
        throw new Error(`Unsupported transcoderFormat: ${r1}`);
    }
    const rs = [
        "basis",
        "bc7",
        "bc6h",
        "astc",
        "etc2",
        "bc5",
        "bc4",
        "bc3",
        "bc2",
        "bc1",
        "eac"
    ], vT = {
        extension: x.ResolveParser,
        test: (r1)=>Ct(r1, [
                ".ktx",
                ".ktx2",
                ".dds"
            ]),
        parse: (r1)=>{
            var t, e;
            let i;
            const s = r1.split(".");
            if (s.length > 2) {
                const n = s[s.length - 2];
                rs.includes(n) && (i = n);
            } else i = s[s.length - 1];
            return {
                resolution: parseFloat((e = (t = qt.RETINA_PREFIX.exec(r1)) == null ? void 0 : t[1]) != null ? e : "1"),
                format: i,
                src: r1
            };
        }
    };
    let is;
    const yT = {
        extension: {
            type: x.DetectionParser,
            priority: 2
        },
        test: async ()=>!!(await wr() || Rr()),
        add: async (r1)=>{
            const t = await la();
            return is = xT(t), [
                ...is,
                ...r1
            ];
        },
        remove: async (r1)=>is ? r1.filter((t)=>!(t in is)) : r1
    };
    function xT(r1) {
        const t = [
            "basis"
        ], e = {};
        return r1.forEach((i)=>{
            const s = i.split("-")[0];
            s && !e[s] && (e[s] = !0, t.push(s));
        }), t.sort((i, s)=>{
            const n = rs.indexOf(i), o = rs.indexOf(s);
            return n === -1 ? 1 : o === -1 ? -1 : n - o;
        }), t;
    }
    const TT = new ut, ha = class {
        cull(t, e, i = !0) {
            this._cullRecursive(t, e, i);
        }
        _cullRecursive(t, e, i = !0) {
            var s;
            if (t.cullable && t.measurable && t.includeInBuild) {
                const n = (s = t.cullArea) != null ? s : er(t, i, TT);
                t.culled = !(n.x >= e.x + e.width || n.y >= e.y + e.height || n.x + n.width <= e.x || n.y + n.height <= e.y);
            }
            if (!(!t.cullableChildren || t.culled || !t.renderable || !t.measurable || !t.includeInBuild)) for(let n = 0; n < t.children.length; n++)this._cullRecursive(t.children[n], e, i);
        }
    };
    ha.shared = new ha;
    let Cf = ha;
    class Of {
        static init() {
            this._renderRef = this.render.bind(this), this.render = ()=>{
                Cf.shared.cull(this.stage, this.renderer.screen), this.renderer.render({
                    container: this.stage
                });
            };
        }
        static destroy() {
            this.render = this._renderRef;
        }
    }
    Of.extension = {
        priority: 10,
        type: x.Application,
        name: "culler"
    };
    const ST = {
        extension: {
            type: x.Environment,
            name: "browser",
            priority: -1
        },
        test: ()=>!0,
        load: async ()=>{
            await Promise.resolve().then(function() {
                return F0;
            });
        }
    };
    var ET = Object.defineProperty, ss = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, Bf = Object.prototype.propertyIsEnumerable, If = (r1, t, e)=>t in r1 ? ET(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, da = (r1, t)=>{
        for(var e in t || (t = {}))Gf.call(t, e) && If(r1, e, t[e]);
        if (ss) for (var e of ss(t))Bf.call(t, e) && If(r1, e, t[e]);
        return r1;
    }, AT = (r1, t)=>{
        var e = {};
        for(var i in r1)Gf.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && ss) for (var i of ss(r1))t.indexOf(i) < 0 && Bf.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const Ff = class Ql extends yt {
        constructor(t){
            t = da(da({}, Ql.defaultOptions), t), super(t), this.enabled = !0, this._state = Bt.for2d(), this.padding = t.padding, typeof t.antialias == "boolean" ? this.antialias = t.antialias ? "on" : "off" : this.antialias = t.antialias, this.resolution = t.resolution, this.blendRequired = t.blendRequired, this.addResource("uTexture", 0, 1);
        }
        apply(t, e, i, s) {
            t.applyFilter(this, e, i, s);
        }
        get blendMode() {
            return this._state.blendMode;
        }
        set blendMode(t) {
            this._state.blendMode = t;
        }
        static from(t) {
            const e = t, { gpu: i, gl: s } = e, n = AT(e, [
                "gpu",
                "gl"
            ]);
            let o, a;
            return i && (o = bt.from(i)), s && (a = Mt.from(s)), new Ql(da({
                gpuProgram: o,
                glProgram: a
            }, n));
        }
    };
    Ff.defaultOptions = {
        blendMode: "normal",
        resolution: 1,
        padding: 0,
        antialias: "off",
        blendRequired: !1
    };
    let Kt = Ff;
    var Df = `
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uBlend;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(uBackTexture, vTextureCoord);
    vec4 front = texture(uTexture, vTextureCoord);

    {MAIN}
}
`, Uf = `in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`, kf = `
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(0) @binding(3) var uBackTexture: texture_2d<f32>;

@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {


   var back =  textureSample(uBackTexture, uSampler, uv);
   var front = textureSample(uTexture, uSampler, uv);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`, PT = Object.defineProperty, Lf = Object.getOwnPropertySymbols, RT = Object.prototype.hasOwnProperty, wT = Object.prototype.propertyIsEnumerable, $f = (r1, t, e)=>t in r1 ? PT(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Nf = (r1, t)=>{
        for(var e in t || (t = {}))RT.call(t, e) && $f(r1, e, t[e]);
        if (Lf) for (var e of Lf(t))wT.call(t, e) && $f(r1, e, t[e]);
        return r1;
    };
    class MT extends Kt {
        constructor(t){
            const e = t.gpu, i = Hf(Nf({
                source: kf
            }, e)), s = bt.from({
                vertex: {
                    source: i,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: i,
                    entryPoint: "mainFragment"
                }
            }), n = t.gl, o = Hf(Nf({
                source: Df
            }, n)), a = Mt.from({
                vertex: Uf,
                fragment: o
            }), l = new nt({
                uBlend: {
                    value: 1,
                    type: "f32"
                }
            });
            super({
                gpuProgram: s,
                glProgram: a,
                blendRequired: !0,
                resources: {
                    blendUniforms: l,
                    uBackTexture: P.EMPTY
                }
            });
        }
    }
    function Hf(r1) {
        const { source: t, functions: e, main: i } = r1;
        return t.replace("{FUNCTIONS}", e).replace("{MAIN}", i);
    }
    const CT = `
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `, OT = `
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;
    var ns = `in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`, Xf = `
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`, pa = `struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`, GT = Object.defineProperty, BT = Object.defineProperties, IT = Object.getOwnPropertyDescriptors, os = Object.getOwnPropertySymbols, zf = Object.prototype.hasOwnProperty, jf = Object.prototype.propertyIsEnumerable, Vf = (r1, t, e)=>t in r1 ? GT(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, fa = (r1, t)=>{
        for(var e in t || (t = {}))zf.call(t, e) && Vf(r1, e, t[e]);
        if (os) for (var e of os(t))jf.call(t, e) && Vf(r1, e, t[e]);
        return r1;
    }, FT = (r1, t)=>BT(r1, IT(t)), DT = (r1, t)=>{
        var e = {};
        for(var i in r1)zf.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && os) for (var i of os(r1))t.indexOf(i) < 0 && jf.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const Wf = class Gb extends Kt {
        constructor(t){
            t = fa(fa({}, Gb.defaultOptions), t);
            const e = bt.from({
                vertex: {
                    source: pa,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: pa,
                    entryPoint: "mainFragment"
                }
            }), i = Mt.from({
                vertex: ns,
                fragment: Xf,
                name: "alpha-filter"
            }), s = t, { alpha: n } = s, o = DT(s, [
                "alpha"
            ]), a = new nt({
                uAlpha: {
                    value: n,
                    type: "f32"
                }
            });
            super(FT(fa({}, o), {
                gpuProgram: e,
                glProgram: i,
                resources: {
                    alphaUniforms: a
                }
            }));
        }
        get alpha() {
            return this.resources.alphaUniforms.uniforms.uAlpha;
        }
        set alpha(t) {
            this.resources.alphaUniforms.uniforms.uAlpha = t;
        }
    };
    Wf.defaultOptions = {
        alpha: 1
    };
    let UT = Wf;
    const ma = {
        5: [
            .153388,
            .221461,
            .250301
        ],
        7: [
            .071303,
            .131514,
            .189879,
            .214607
        ],
        9: [
            .028532,
            .067234,
            .124009,
            .179044,
            .20236
        ],
        11: [
            .0093,
            .028002,
            .065984,
            .121703,
            .175713,
            .198596
        ],
        13: [
            .002406,
            .009255,
            .027867,
            .065666,
            .121117,
            .174868,
            .197641
        ],
        15: [
            489e-6,
            .002403,
            .009246,
            .02784,
            .065602,
            .120999,
            .174697,
            .197448
        ]
    }, kT = [
        "in vec2 vBlurTexCoords[%size%];",
        "uniform sampler2D uTexture;",
        "out vec4 finalColor;",
        "void main(void)",
        "{",
        "    finalColor = vec4(0.0);",
        "    %blur%",
        "}"
    ].join(`
`);
    function Yf(r1) {
        const t = ma[r1], e = t.length;
        let i = kT, s = "";
        const n = "finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";
        let o;
        for(let a = 0; a < r1; a++){
            let l = n.replace("%index%", a.toString());
            o = a, a >= e && (o = r1 - a - 1), l = l.replace("%value%", t[o].toString()), s += l, s += `
`;
        }
        return i = i.replace("%blur%", s), i = i.replace("%size%", r1.toString()), i;
    }
    const LT = `
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
    function Kf(r1, t) {
        const e = Math.ceil(r1 / 2);
        let i = LT, s = "", n;
        t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
        for(let o = 0; o < r1; o++){
            let a = n.replace("%index%", o.toString());
            a = a.replace("%sampleIndex%", `${o - (e - 1)}.0`), s += a, s += `
`;
        }
        return i = i.replace("%blur%", s), i = i.replace("%size%", r1.toString()), i = i.replace("%dimension%", t ? "z" : "w"), i;
    }
    function qf(r1, t) {
        const e = Kf(t, r1), i = Yf(t);
        return Mt.from({
            vertex: e,
            fragment: i,
            name: `blur-${r1 ? "horizontal" : "vertical"}-pass-filter`
        });
    }
    var Zf = `

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;
    function Qf(r1, t) {
        const e = ma[t], i = e.length, s = [], n = [], o = [];
        for(let h = 0; h < t; h++){
            s[h] = `@location(${h}) offset${h}: vec2<f32>,`, r1 ? n[h] = `filteredCord + vec2(${h - i + 1} * strength, 0.0),` : n[h] = `filteredCord + vec2(0.0, ${h - i + 1} * strength),`;
            const p = h < i ? h : t - h - 1, f = e[p].toString();
            o[h] = `finalColor += textureSample(uTexture, uSampler, offset${h}) * ${f};`;
        }
        const a = s.join(`
`), l = n.join(`
`), u = o.join(`
`), c = Zf.replace("%blur-struct%", a).replace("%blur-vertex-out%", l).replace("%blur-fragment-in%", a).replace("%blur-sampling%", u);
        return bt.from({
            vertex: {
                source: c,
                entryPoint: "mainVertex"
            },
            fragment: {
                source: c,
                entryPoint: "mainFragment"
            }
        });
    }
    var $T = Object.defineProperty, Jf = Object.getOwnPropertySymbols, NT = Object.prototype.hasOwnProperty, HT = Object.prototype.propertyIsEnumerable, tm = (r1, t, e)=>t in r1 ? $T(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, ga = (r1, t)=>{
        for(var e in t || (t = {}))NT.call(t, e) && tm(r1, e, t[e]);
        if (Jf) for (var e of Jf(t))HT.call(t, e) && tm(r1, e, t[e]);
        return r1;
    };
    const em = class Bb extends Kt {
        constructor(t){
            t = ga(ga({}, Bb.defaultOptions), t);
            const e = qf(t.horizontal, t.kernelSize), i = Qf(t.horizontal, t.kernelSize);
            super(ga({
                glProgram: e,
                gpuProgram: i,
                resources: {
                    blurUniforms: {
                        uStrength: {
                            value: 0,
                            type: "f32"
                        }
                    }
                }
            }, t)), this.horizontal = t.horizontal, this._quality = 0, this.quality = t.quality, this.blur = t.strength, this._uniforms = this.resources.blurUniforms.uniforms;
        }
        apply(t, e, i, s) {
            if (this._uniforms.uStrength = this.strength / this.passes, this.passes === 1) t.applyFilter(this, e, i, s);
            else {
                const n = ct.getSameSizeTexture(e);
                let o = e, a = n;
                this._state.blend = !1;
                for(let l = 0; l < this.passes - 1; l++){
                    t.applyFilter(this, o, a, t.renderer.type === vt.WEBGPU);
                    const u = a;
                    a = o, o = u;
                }
                this._state.blend = !0, t.applyFilter(this, o, i, s), ct.returnTexture(n);
            }
        }
        get blur() {
            return this.strength;
        }
        set blur(t) {
            this.padding = 1 + Math.abs(t) * 2, this.strength = t;
        }
        get quality() {
            return this._quality;
        }
        set quality(t) {
            this._quality = t, this.passes = t;
        }
    };
    em.defaultOptions = {
        strength: 8,
        quality: 4,
        kernelSize: 5
    };
    let as = em;
    var XT = Object.defineProperty, zT = Object.defineProperties, jT = Object.getOwnPropertyDescriptors, ls = Object.getOwnPropertySymbols, rm = Object.prototype.hasOwnProperty, im = Object.prototype.propertyIsEnumerable, sm = (r1, t, e)=>t in r1 ? XT(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Fr = (r1, t)=>{
        for(var e in t || (t = {}))rm.call(t, e) && sm(r1, e, t[e]);
        if (ls) for (var e of ls(t))im.call(t, e) && sm(r1, e, t[e]);
        return r1;
    }, VT = (r1, t)=>zT(r1, jT(t)), WT = (r1, t)=>{
        var e = {};
        for(var i in r1)rm.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && ls) for (var i of ls(r1))t.indexOf(i) < 0 && im.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class nm extends Kt {
        constructor(...t){
            var e;
            let i = (e = t[0]) != null ? e : {};
            typeof i == "number" && (i = {
                strength: i
            }, t[1] && (i.quality = t[1]), t[2] && (i.resolution = t[2]), t[3] && (i.kernelSize = t[3])), i = Fr(Fr({}, as.defaultOptions), i);
            const s = i, { strength: n, quality: o } = s, a = WT(s, [
                "strength",
                "quality"
            ]);
            super(VT(Fr({}, a), {
                compatibleRenderers: vt.BOTH,
                resources: {}
            })), this._repeatEdgePixels = !1, this.blurXFilter = new as(Fr({
                horizontal: !1
            }, i)), this.blurYFilter = new as(Fr({
                horizontal: !0
            }, i)), this.quality = o, this.blur = n, this.repeatEdgePixels = !1;
        }
        apply(t, e, i, s) {
            const n = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
            if (n && o) {
                const a = ct.getSameSizeTexture(e);
                this.blurXFilter.apply(t, e, a, !0), this.blurYFilter.apply(t, a, i, s), ct.returnTexture(a);
            } else o ? this.blurYFilter.apply(t, e, i, s) : this.blurXFilter.apply(t, e, i, s);
        }
        updatePadding() {
            this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.blur), Math.abs(this.blurYFilter.blur)) * 2;
        }
        get blur() {
            return this.blurXFilter.blur;
        }
        set blur(t) {
            this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
        }
        get quality() {
            return this.blurXFilter.quality;
        }
        set quality(t) {
            this.blurXFilter.quality = this.blurYFilter.quality = t;
        }
        get blurX() {
            return this.blurXFilter.blur;
        }
        set blurX(t) {
            this.blurXFilter.blur = t, this.updatePadding();
        }
        get blurY() {
            return this.blurYFilter.blur;
        }
        set blurY(t) {
            this.blurYFilter.blur = t, this.updatePadding();
        }
        get blendMode() {
            return this.blurYFilter.blendMode;
        }
        set blendMode(t) {
            this.blurYFilter.blendMode = t;
        }
        get repeatEdgePixels() {
            return this._repeatEdgePixels;
        }
        set repeatEdgePixels(t) {
            this._repeatEdgePixels = t, this.updatePadding();
        }
    }
    nm.defaultOptions = {
        strength: 8,
        quality: 4,
        kernelSize: 5
    };
    var om = `
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`, _a = `struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`, YT = Object.defineProperty, KT = Object.defineProperties, qT = Object.getOwnPropertyDescriptors, am = Object.getOwnPropertySymbols, ZT = Object.prototype.hasOwnProperty, QT = Object.prototype.propertyIsEnumerable, lm = (r1, t, e)=>t in r1 ? YT(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, JT = (r1, t)=>{
        for(var e in t || (t = {}))ZT.call(t, e) && lm(r1, e, t[e]);
        if (am) for (var e of am(t))QT.call(t, e) && lm(r1, e, t[e]);
        return r1;
    }, tS = (r1, t)=>KT(r1, qT(t));
    class eS extends Kt {
        constructor(t = {}){
            const e = new nt({
                uColorMatrix: {
                    value: [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0
                    ],
                    type: "f32",
                    size: 20
                },
                uAlpha: {
                    value: 1,
                    type: "f32"
                }
            }), i = bt.from({
                vertex: {
                    source: _a,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: _a,
                    entryPoint: "mainFragment"
                }
            }), s = Mt.from({
                vertex: ns,
                fragment: om,
                name: "color-matrix-filter"
            });
            super(tS(JT({}, t), {
                gpuProgram: i,
                glProgram: s,
                resources: {
                    colorMatrixUniforms: e
                }
            })), this.alpha = 1;
        }
        _loadMatrix(t, e = !1) {
            let i = t;
            e && (this._multiply(i, this.matrix, t), i = this._colorMatrix(i)), this.resources.colorMatrixUniforms.uniforms.uColorMatrix = i, this.resources.colorMatrixUniforms.update();
        }
        _multiply(t, e, i) {
            return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19], t;
        }
        _colorMatrix(t) {
            const e = new Float32Array(t);
            return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e;
        }
        brightness(t, e) {
            const i = [
                t,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(i, e);
        }
        tint(t, e) {
            const [i, s, n] = Y.shared.setValue(t).toArray(), o = [
                i,
                0,
                0,
                0,
                0,
                0,
                s,
                0,
                0,
                0,
                0,
                0,
                n,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(o, e);
        }
        greyscale(t, e) {
            const i = [
                t,
                t,
                t,
                0,
                0,
                t,
                t,
                t,
                0,
                0,
                t,
                t,
                t,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(i, e);
        }
        grayscale(t, e) {
            this.greyscale(t, e);
        }
        blackAndWhite(t) {
            const e = [
                .3,
                .6,
                .1,
                0,
                0,
                .3,
                .6,
                .1,
                0,
                0,
                .3,
                .6,
                .1,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        hue(t, e) {
            t = (t || 0) / 180 * Math.PI;
            const i = Math.cos(t), s = Math.sin(t), n = Math.sqrt, o = 1 / 3, a = n(o), l = i + (1 - i) * o, u = o * (1 - i) - a * s, c = o * (1 - i) + a * s, h = o * (1 - i) + a * s, p = i + o * (1 - i), f = o * (1 - i) - a * s, m = o * (1 - i) - a * s, _ = o * (1 - i) + a * s, g = i + o * (1 - i), b = [
                l,
                u,
                c,
                0,
                0,
                h,
                p,
                f,
                0,
                0,
                m,
                _,
                g,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(b, e);
        }
        contrast(t, e) {
            const i = (t || 0) + 1, s = -0.5 * (i - 1), n = [
                i,
                0,
                0,
                0,
                s,
                0,
                i,
                0,
                0,
                s,
                0,
                0,
                i,
                0,
                s,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(n, e);
        }
        saturate(t = 0, e) {
            const i = t * 2 / 3 + 1, s = (i - 1) * -0.5, n = [
                i,
                s,
                s,
                0,
                0,
                s,
                i,
                s,
                0,
                0,
                s,
                s,
                i,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(n, e);
        }
        desaturate() {
            this.saturate(-1);
        }
        negative(t) {
            const e = [
                -1,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                -1,
                1,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        sepia(t) {
            const e = [
                .393,
                .7689999,
                .18899999,
                0,
                0,
                .349,
                .6859999,
                .16799999,
                0,
                0,
                .272,
                .5339999,
                .13099999,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        technicolor(t) {
            const e = [
                1.9125277891456083,
                -0.8545344976951645,
                -0.09155508482755585,
                0,
                11.793603434377337,
                -0.3087833385928097,
                1.7658908555458428,
                -0.10601743074722245,
                0,
                -70.35205161461398,
                -0.231103377548616,
                -0.7501899197440212,
                1.847597816108189,
                0,
                30.950940869491138,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        polaroid(t) {
            const e = [
                1.438,
                -0.062,
                -0.062,
                0,
                0,
                -0.122,
                1.378,
                -0.122,
                0,
                0,
                -0.016,
                -0.016,
                1.483,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        toBGR(t) {
            const e = [
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        kodachrome(t) {
            const e = [
                1.1285582396593525,
                -0.3967382283601348,
                -0.03992559172921793,
                0,
                63.72958762196502,
                -0.16404339962244616,
                1.0835251566291304,
                -0.05498805115633132,
                0,
                24.732407896706203,
                -0.16786010706155763,
                -0.5603416277695248,
                1.6014850761964943,
                0,
                35.62982807460946,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        browni(t) {
            const e = [
                .5997023498159715,
                .34553243048391263,
                -0.2708298674538042,
                0,
                47.43192855600873,
                -0.037703249837783157,
                .8609577587992641,
                .15059552388459913,
                0,
                -36.96841498319127,
                .24113635128153335,
                -0.07441037908422492,
                .44972182064877153,
                0,
                -7.562075277591283,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        vintage(t) {
            const e = [
                .6279345635605994,
                .3202183420819367,
                -0.03965408211312453,
                0,
                9.651285835294123,
                .02578397704808868,
                .6441188644374771,
                .03259127616149294,
                0,
                7.462829176470591,
                .0466055556782719,
                -0.0851232987247891,
                .5241648018700465,
                0,
                5.159190588235296,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        colorTone(t, e, i, s, n) {
            t = t || .2, e = e || .15, i = i || 16770432, s = s || 3375104;
            const o = Y.shared, [a, l, u] = o.setValue(i).toArray(), [c, h, p] = o.setValue(s).toArray(), f = [
                .3,
                .59,
                .11,
                0,
                0,
                a,
                l,
                u,
                t,
                0,
                c,
                h,
                p,
                e,
                0,
                a - c,
                l - h,
                u - p,
                0,
                0
            ];
            this._loadMatrix(f, n);
        }
        night(t, e) {
            t = t || .1;
            const i = [
                t * -2,
                -t,
                0,
                0,
                0,
                -t,
                0,
                t,
                0,
                0,
                0,
                t,
                t * 2,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(i, e);
        }
        predator(t, e) {
            const i = [
                11.224130630493164 * t,
                -4.794486999511719 * t,
                -2.8746118545532227 * t,
                0 * t,
                .40342438220977783 * t,
                -3.6330697536468506 * t,
                9.193157196044922 * t,
                -2.951810836791992 * t,
                0 * t,
                -1.316135048866272 * t,
                -3.2184197902679443 * t,
                -4.2375030517578125 * t,
                7.476448059082031 * t,
                0 * t,
                .8044459223747253 * t,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(i, e);
        }
        lsd(t) {
            const e = [
                2,
                -0.4,
                .5,
                0,
                0,
                -0.5,
                2,
                -0.4,
                0,
                0,
                -0.4,
                -0.5,
                3,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(e, t);
        }
        reset() {
            const t = [
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(t, !1);
        }
        get matrix() {
            return this.resources.colorMatrixUniforms.uniforms.uColorMatrix;
        }
        set matrix(t) {
            this.resources.colorMatrixUniforms.uniforms.uColorMatrix = t;
        }
        get alpha() {
            return this.resources.colorMatrixUniforms.uniforms.uAlpha;
        }
        set alpha(t) {
            this.resources.colorMatrixUniforms.uniforms.uAlpha = t;
        }
    }
    var um = `
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`, cm = `in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`, ba = `
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`, rS = Object.defineProperty, iS = Object.defineProperties, sS = Object.getOwnPropertyDescriptors, us = Object.getOwnPropertySymbols, hm = Object.prototype.hasOwnProperty, dm = Object.prototype.propertyIsEnumerable, pm = (r1, t, e)=>t in r1 ? rS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, nS = (r1, t)=>{
        for(var e in t || (t = {}))hm.call(t, e) && pm(r1, e, t[e]);
        if (us) for (var e of us(t))dm.call(t, e) && pm(r1, e, t[e]);
        return r1;
    }, oS = (r1, t)=>iS(r1, sS(t)), aS = (r1, t)=>{
        var e = {};
        for(var i in r1)hm.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && us) for (var i of us(r1))t.indexOf(i) < 0 && dm.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class lS extends Kt {
        constructor(...t){
            let e = t[0];
            e instanceof Gt && (e = {
                sprite: e,
                scale: t[1]
            });
            const i = e, { sprite: s, scale: n } = i, o = aS(i, [
                "sprite",
                "scale"
            ]);
            let a = n != null ? n : 20;
            typeof a == "number" && (a = new V(a, a));
            const l = new nt({
                uFilterMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uScale: {
                    value: a,
                    type: "vec2<f32>"
                },
                uRotation: {
                    value: new Float32Array([
                        0,
                        0,
                        0,
                        0
                    ]),
                    type: "mat2x2<f32>"
                }
            }), u = Mt.from({
                vertex: cm,
                fragment: um,
                name: "displacement-filter"
            }), c = bt.from({
                vertex: {
                    source: ba,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: ba,
                    entryPoint: "mainFragment"
                }
            }), h = s.texture.source;
            super(oS(nS({}, o), {
                gpuProgram: c,
                glProgram: u,
                resources: {
                    filterUniforms: l,
                    uMapTexture: h,
                    uMapSampler: h.style
                }
            })), this._sprite = e.sprite, this._sprite.renderable = !1;
        }
        apply(t, e, i, s) {
            const n = this.resources.filterUniforms.uniforms;
            t.calculateSpriteMatrix(n.uFilterMatrix, this._sprite);
            const o = this._sprite.worldTransform, a = Math.sqrt(o.a * o.a + o.b * o.b), l = Math.sqrt(o.c * o.c + o.d * o.d);
            a !== 0 && l !== 0 && (n.uRotation[0] = o.a / a, n.uRotation[1] = o.b / a, n.uRotation[2] = o.c / l, n.uRotation[3] = o.d / l), this.resources.uMapTexture = this._sprite.texture.source, t.applyFilter(this, e, i, s);
        }
        get scale() {
            return this.resources.filterUniforms.uniforms.uScale;
        }
    }
    var fm = `
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) *  uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    finalColor = color;
}
`, va = `

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct NoiseUniforms {
  uNoise:f32,
  uSeed:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

fn rand(co:vec2<f32>) -> f32
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}



@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);
  
    
    var sample = textureSample(uTexture, uSampler, uv);
    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);
    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;
  
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (sample.a > 0.0) {
      sample.r /= sample.a;
      sample.g /= sample.a;
      sample.b /= sample.a;
    }

    sample.r += diff;
    sample.g += diff;
    sample.b += diff;

    // Premultiply alpha again.
    sample.r *= sample.a;
    sample.g *= sample.a;
    sample.b *= sample.a;
    
    return sample;
}`, uS = Object.defineProperty, cS = Object.defineProperties, hS = Object.getOwnPropertyDescriptors, cs = Object.getOwnPropertySymbols, mm = Object.prototype.hasOwnProperty, gm = Object.prototype.propertyIsEnumerable, _m = (r1, t, e)=>t in r1 ? uS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, ya = (r1, t)=>{
        for(var e in t || (t = {}))mm.call(t, e) && _m(r1, e, t[e]);
        if (cs) for (var e of cs(t))gm.call(t, e) && _m(r1, e, t[e]);
        return r1;
    }, dS = (r1, t)=>cS(r1, hS(t)), pS = (r1, t)=>{
        var e = {};
        for(var i in r1)mm.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && cs) for (var i of cs(r1))t.indexOf(i) < 0 && gm.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const bm = class Ib extends Kt {
        constructor(t = {}){
            t = ya(ya({}, Ib.defaultOptions), t);
            const e = bt.from({
                vertex: {
                    source: va,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: va,
                    entryPoint: "mainFragment"
                }
            }), i = Mt.from({
                vertex: ns,
                fragment: fm,
                name: "noise-filter"
            }), s = t, { noise: n, seed: o } = s, a = pS(s, [
                "noise",
                "seed"
            ]);
            super(dS(ya({}, a), {
                gpuProgram: e,
                glProgram: i,
                resources: {
                    noiseUniforms: new nt({
                        uNoise: {
                            value: 1,
                            type: "f32"
                        },
                        uSeed: {
                            value: 1,
                            type: "f32"
                        }
                    })
                }
            })), this.noise = n, this.seed = o != null ? o : Math.random();
        }
        get noise() {
            return this.resources.noiseUniforms.uniforms.uNoise;
        }
        set noise(t) {
            this.resources.noiseUniforms.uniforms.uNoise = t;
        }
        get seed() {
            return this.resources.noiseUniforms.uniforms.uSeed;
        }
        set seed(t) {
            this.resources.noiseUniforms.uniforms.uSeed = t;
        }
    };
    bm.defaultOptions = {
        noise: .5
    };
    let fS = bm;
    var vm = `in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha; 
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * uAlpha * clip);

    finalColor = original;
}
`, ym = `in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`, xa = `struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,  
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

    var a = (alphaMul * mask.r) * clip;

    return vec4(source.rgb, source.a) * a;
}`, mS = Object.defineProperty, gS = Object.defineProperties, _S = Object.getOwnPropertyDescriptors, hs = Object.getOwnPropertySymbols, xm = Object.prototype.hasOwnProperty, Tm = Object.prototype.propertyIsEnumerable, Sm = (r1, t, e)=>t in r1 ? mS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, bS = (r1, t)=>{
        for(var e in t || (t = {}))xm.call(t, e) && Sm(r1, e, t[e]);
        if (hs) for (var e of hs(t))Tm.call(t, e) && Sm(r1, e, t[e]);
        return r1;
    }, vS = (r1, t)=>gS(r1, _S(t)), yS = (r1, t)=>{
        var e = {};
        for(var i in r1)xm.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && hs) for (var i of hs(r1))t.indexOf(i) < 0 && Tm.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class Em extends Kt {
        constructor(t){
            const e = t, { sprite: i } = e, s = yS(e, [
                "sprite"
            ]), n = new cn(i.texture), o = new nt({
                uFilterMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uMaskClamp: {
                    value: n.uClampFrame,
                    type: "vec4<f32>"
                },
                uAlpha: {
                    value: 1,
                    type: "f32"
                }
            }), a = bt.from({
                vertex: {
                    source: xa,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: xa,
                    entryPoint: "mainFragment"
                }
            }), l = Mt.from({
                vertex: ym,
                fragment: vm,
                name: "mask-filter"
            });
            super(vS(bS({}, s), {
                gpuProgram: a,
                glProgram: l,
                resources: {
                    filterUniforms: o,
                    uMaskTexture: i.texture.source
                }
            })), this.sprite = i, this._textureMatrix = n;
        }
        apply(t, e, i, s) {
            this._textureMatrix.texture = this.sprite.texture, t.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord), this.resources.uMaskTexture = this.sprite.texture.source, t.applyFilter(this, e, i, s);
        }
    }
    var xS = `fn getLuminosity(c: vec3<f32>) -> f32 {
  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
}

fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {
  let d: f32 = lum - getLuminosity(c);
  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);

  // clip back into legal range
  let newLum: f32 = getLuminosity(newColor);
  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));
  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));

  let t1: f32 = newLum / (newLum - cMin);
  let t2: f32 = (1.0 - newLum) / (cMax - newLum);

  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));

  return finalColor;
}

fn getSaturation(c: vec3<f32>) -> f32 {
  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
}

// Set saturation if color components are sorted in ascending order.
fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {
  var result: vec3<f32>;
  if (cSorted.z > cSorted.x) {
    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));
    result = vec3<f32>(0.0, newY, s);
  } else {
    result = vec3<f32>(0.0, 0.0, 0.0);
  }
  return vec3<f32>(result.x, result.y, result.z);
}

fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {
    var result: vec3<f32> = c;

    if (c.r <= c.g && c.r <= c.b) {
        if (c.g <= c.b) {
            result = setSaturationMinMidMax(result, s);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.r, temp.b, temp.g);
        }
    } else if (c.g <= c.r && c.g <= c.b) {
        if (c.r <= c.b) {
            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.r, temp.b);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.b, temp.r);
        }
    } else {
        if (c.r <= c.g) {
            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.r, temp.g);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.g, temp.r);
        }
    }

    return result;
}`;
    class Ta {
        constructor(t = 0, e = 0, i = 0, s = 0, n = 0, o = 0){
            this.type = "triangle", this.x = t, this.y = e, this.x2 = i, this.y2 = s, this.x3 = n, this.y3 = o;
        }
        contains(t, e) {
            const i = (this.x - this.x3) * (e - this.y3) - (this.y - this.y3) * (t - this.x3), s = (this.x2 - this.x) * (e - this.y) - (this.y2 - this.y) * (t - this.x);
            if (i < 0 != s < 0 && i !== 0 && s !== 0) return !1;
            const n = (this.x3 - this.x2) * (e - this.y2) - (this.y3 - this.y2) * (t - this.x2);
            return n === 0 || n < 0 == i + s <= 0;
        }
        strokeContains(t, e, i) {
            const s = i / 2, n = s * s, { x: o, x2: a, x3: l, y: u, y2: c, y3: h } = this;
            return br(t, e, o, u, a, h) <= n || br(t, e, a, c, l, h) <= n || br(t, e, l, h, o, u) <= n;
        }
        clone() {
            return new Ta(this.x, this.y, this.x2, this.y2, this.x3, this.y3);
        }
        copyFrom(t) {
            return this.x = t.x, this.y = t.y, this.x2 = t.x2, this.y2 = t.y2, this.x3 = t.x3, this.y3 = t.y3, this;
        }
        copyTo(t) {
            return t.copyFrom(this), t;
        }
        getBounds(t) {
            t = t || new j;
            const e = Math.min(this.x, this.x2, this.x3), i = Math.max(this.x, this.x2, this.x3), s = Math.min(this.y, this.y2, this.y3), n = Math.max(this.y, this.y2, this.y3);
            return t.x = e, t.y = s, t.width = i - e, t.height = n - s, t;
        }
    }
    const Am = class Fb {
        constructor(t){
            this._tick = ()=>{
                this.timeout = setTimeout(this._processQueue, 0);
            }, this._processQueue = ()=>{
                const { queue: e } = this;
                let i = 0;
                for(; e.length && i < Fb.uploadsPerFrame;){
                    const s = e.shift();
                    this.uploadQueueItem(s), i++;
                }
                e.length ? ht.system.addOnce(this._tick, this, zt.UTILITY) : this._resolve();
            }, this.renderer = t, this.queue = [], this.resolves = [];
        }
        getQueue() {
            return [
                ...this.queue
            ];
        }
        add(t) {
            const e = Array.isArray(t) ? t : [
                t
            ];
            for (const i of e)i instanceof W ? this._addContainer(i) : this.resolveQueueItem(i, this.queue);
            return this;
        }
        _addContainer(t) {
            this.resolveQueueItem(t, this.queue);
            for (const e of t.children)this._addContainer(e);
        }
        upload(t) {
            return t && this.add(t), new Promise((e)=>{
                this.queue.length ? (this.resolves.push(e), this.dedupeQueue(), ht.system.addOnce(this._tick, this, zt.UTILITY)) : e();
            });
        }
        dedupeQueue() {
            const t = Object.create(null);
            let e = 0;
            for(let i = 0; i < this.queue.length; i++){
                const s = this.queue[i];
                t[s.uid] || (t[s.uid] = !0, this.queue[e++] = s);
            }
            this.queue.length = e;
        }
        _resolve() {
            const { resolves: t } = this, e = t.slice(0);
            t.length = 0;
            for (const i of e)i();
        }
    };
    Am.uploadsPerFrame = 4;
    let Pm = Am;
    var TS = Object.defineProperty, ds = Object.getOwnPropertySymbols, Rm = Object.prototype.hasOwnProperty, wm = Object.prototype.propertyIsEnumerable, Mm = (r1, t, e)=>t in r1 ? TS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, SS = (r1, t)=>{
        for(var e in t || (t = {}))Rm.call(t, e) && Mm(r1, e, t[e]);
        if (ds) for (var e of ds(t))wm.call(t, e) && Mm(r1, e, t[e]);
        return r1;
    }, ES = (r1, t)=>{
        var e = {};
        for(var i in r1)Rm.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && ds) for (var i of ds(r1))t.indexOf(i) < 0 && wm.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const Cm = new _e;
    class Dr extends W {
        constructor(...t){
            var e;
            let i = t[0];
            i instanceof Ge && (i = {
                geometry: i,
                shader: t[1]
            }, t[3] && (i.geometry.topology = t[3]));
            const s = i, { geometry: n, shader: o, texture: a, roundPixels: l, state: u } = s, c = ES(s, [
                "geometry",
                "shader",
                "texture",
                "roundPixels",
                "state"
            ]);
            super(SS({
                label: "Mesh"
            }, c)), this.renderPipeId = "mesh", this.canBundle = !0, this._roundPixels = 0, this.allowChildren = !1, this.shader = o, this.texture = (e = a != null ? a : o == null ? void 0 : o.texture) != null ? e : P.WHITE, this.state = u != null ? u : Bt.for2d(), this._geometry = n, this._geometry.on("update", this.onViewUpdate, this), this.roundPixels = l != null ? l : !1;
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        get material() {
            return this._shader;
        }
        set shader(t) {
            this._shader !== t && (this._shader = t, this.onViewUpdate());
        }
        get shader() {
            return this._shader;
        }
        set geometry(t) {
            var e;
            this._geometry !== t && ((e = this._geometry) == null || e.off("update", this.onViewUpdate, this), t.on("update", this.onViewUpdate, this), this._geometry = t, this.onViewUpdate());
        }
        get geometry() {
            return this._geometry;
        }
        set texture(t) {
            t || (t = P.EMPTY);
            const e = this._texture;
            e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this.shader && (this.shader.texture = t), this._texture = t, this.onViewUpdate());
        }
        get texture() {
            return this._texture;
        }
        get batched() {
            return this._shader ? !1 : this._geometry instanceof te ? this._geometry.batchMode === "auto" ? this._geometry.positions.length / 2 <= 100 : this._geometry.batchMode === "batch" : !1;
        }
        get bounds() {
            return this._geometry.bounds;
        }
        addBounds(t) {
            t.addBounds(this.geometry.bounds);
        }
        containsPoint(t) {
            const { x: e, y: i } = t;
            if (!this.bounds.containsPoint(e, i)) return !1;
            const s = this.geometry.getBuffer("aPosition").data, n = Cm.points, o = this.geometry.getIndex().data, a = o.length, l = this.geometry.topology === "triangle-strip" ? 3 : 1;
            for(let u = 0; u + 2 < a; u += l){
                const c = o[u] * 2, h = o[u + 1] * 2, p = o[u + 2] * 2;
                if (n[0] = s[c], n[1] = s[c + 1], n[2] = s[h], n[3] = s[h + 1], n[4] = s[p], n[5] = s[p + 1], Cm.contains(e, i)) return !0;
            }
            return !1;
        }
        onViewUpdate() {
            this._didChangeId += 4096, !this.didViewUpdate && (this.didViewUpdate = !0, this.renderGroup && this.renderGroup.onChildViewUpdate(this));
        }
        destroy(t) {
            var e;
            if (super.destroy(t), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
                const i = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
                this._texture.destroy(i);
            }
            (e = this._geometry) == null || e.off("update", this.onViewUpdate, this), this._texture = null, this._geometry = null, this._shader = null;
        }
    }
    class Ur extends Gt {
        constructor(t, e = !0){
            super(t[0] instanceof P ? t[0] : t[0].texture), this._textures = null, this._durations = null, this._autoUpdate = e, this._isConnectedToTicker = !1, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = !1, this._previousFrame = null, this.textures = t;
        }
        stop() {
            this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (ht.shared.remove(this.update, this), this._isConnectedToTicker = !1));
        }
        play() {
            this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (ht.shared.add(this.update, this, zt.HIGH), this._isConnectedToTicker = !0));
        }
        gotoAndStop(t) {
            this.stop(), this.currentFrame = t;
        }
        gotoAndPlay(t) {
            this.currentFrame = t, this.play();
        }
        update(t) {
            if (!this._playing) return;
            const e = t.deltaTime, i = this.animationSpeed * e, s = this.currentFrame;
            if (this._durations !== null) {
                let n = this._currentTime % 1 * this._durations[this.currentFrame];
                for(n += i / 60 * 1e3; n < 0;)this._currentTime--, n += this._durations[this.currentFrame];
                const o = Math.sign(this.animationSpeed * e);
                for(this._currentTime = Math.floor(this._currentTime); n >= this._durations[this.currentFrame];)n -= this._durations[this.currentFrame] * o, this._currentTime += o;
                this._currentTime += n / this._durations[this.currentFrame];
            } else this._currentTime += i;
            this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : s !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < s || this.animationSpeed < 0 && this.currentFrame > s) && this.onLoop(), this._updateTexture());
        }
        _updateTexture() {
            const t = this.currentFrame;
            this._previousFrame !== t && (this._previousFrame = t, this.texture = this._textures[t], this.updateAnchor && this.anchor.copyFrom(this.texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
        }
        destroy() {
            this.stop(), super.destroy(), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
        }
        static fromFrames(t) {
            const e = [];
            for(let i = 0; i < t.length; ++i)e.push(P.from(t[i]));
            return new Ur(e);
        }
        static fromImages(t) {
            const e = [];
            for(let i = 0; i < t.length; ++i)e.push(P.from(t[i]));
            return new Ur(e);
        }
        get totalFrames() {
            return this._textures.length;
        }
        get textures() {
            return this._textures;
        }
        set textures(t) {
            if (t[0] instanceof P) this._textures = t, this._durations = null;
            else {
                this._textures = [], this._durations = [];
                for(let e = 0; e < t.length; e++)this._textures.push(t[e].texture), this._durations.push(t[e].time);
            }
            this._previousFrame = null, this.gotoAndStop(0), this._updateTexture();
        }
        get currentFrame() {
            let t = Math.floor(this._currentTime) % this._textures.length;
            return t < 0 && (t += this._textures.length), t;
        }
        set currentFrame(t) {
            if (t < 0 || t > this.totalFrames - 1) throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
            const e = this.currentFrame;
            this._currentTime = t, e !== this.currentFrame && this._updateTexture();
        }
        get playing() {
            return this._playing;
        }
        get autoUpdate() {
            return this._autoUpdate;
        }
        set autoUpdate(t) {
            t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (ht.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (ht.shared.add(this.update, this), this._isConnectedToTicker = !0));
        }
    }
    class Om {
        constructor({ matrix: t, observer: e } = {}){
            this.dirty = !0, this._matrix = t != null ? t : new B, this.observer = e, this.position = new it(this, 0, 0), this.scale = new it(this, 1, 1), this.pivot = new it(this, 0, 0), this.skew = new it(this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1;
        }
        get matrix() {
            const t = this._matrix;
            return this.dirty && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this.dirty = !1), t;
        }
        _onUpdate(t) {
            var e;
            this.dirty = !0, t === this.skew && this.updateSkew(), (e = this.observer) == null || e._onUpdate(this);
        }
        updateSkew() {
            this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this.dirty = !0;
        }
        setFromMatrix(t) {
            t.decompose(this), this.dirty = !0;
        }
        get rotation() {
            return this._rotation;
        }
        set rotation(t) {
            this._rotation !== t && (this._rotation = t, this.updateSkew());
        }
    }
    var AS = Object.defineProperty, ps = Object.getOwnPropertySymbols, Gm = Object.prototype.hasOwnProperty, Bm = Object.prototype.propertyIsEnumerable, Im = (r1, t, e)=>t in r1 ? AS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, kr = (r1, t)=>{
        for(var e in t || (t = {}))Gm.call(t, e) && Im(r1, e, t[e]);
        if (ps) for (var e of ps(t))Bm.call(t, e) && Im(r1, e, t[e]);
        return r1;
    }, PS = (r1, t)=>{
        var e = {};
        for(var i in r1)Gm.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && ps) for (var i of ps(r1))t.indexOf(i) < 0 && Bm.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const Fm = class Ds extends W {
        constructor(...t){
            let e = t[0] || {};
            e instanceof P && (e = {
                texture: e
            }), t.length > 1 && (e.width = t[1], e.height = t[2]), e = kr(kr({}, Ds.defaultOptions), e);
            const i = e != null ? e : {}, { texture: s, anchor: n, tilePosition: o, tileScale: a, tileRotation: l, width: u, height: c, applyAnchorToTexture: h, roundPixels: p } = i, f = PS(i, [
                "texture",
                "anchor",
                "tilePosition",
                "tileScale",
                "tileRotation",
                "width",
                "height",
                "applyAnchorToTexture",
                "roundPixels"
            ]);
            super(kr({
                label: "TilingSprite"
            }, f)), this.renderPipeId = "tilingSprite", this.canBundle = !0, this.batched = !0, this._roundPixels = 0, this._bounds = {
                minX: 0,
                maxX: 1,
                minY: 0,
                maxY: 0
            }, this._boundsDirty = !0, this.allowChildren = !1, this._anchor = new it(this), this._applyAnchorToTexture = h, this.texture = s, this._width = u != null ? u : s.width, this._height = c != null ? c : s.height, this._tileTransform = new Om({
                observer: {
                    _onUpdate: ()=>this.onViewUpdate()
                }
            }), n && (this.anchor = n), this.tilePosition = o, this.tileScale = a, this.tileRotation = l, this.roundPixels = p != null ? p : !1;
        }
        static from(t, e = {}) {
            return typeof t == "string" ? new Ds(kr({
                texture: K.get(t)
            }, e)) : new Ds(kr({
                texture: t
            }, e));
        }
        get clampMargin() {
            return this._texture.textureMatrix.clampMargin;
        }
        set clampMargin(t) {
            this._texture.textureMatrix.clampMargin = t;
        }
        get anchor() {
            return this._anchor;
        }
        set anchor(t) {
            typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
        }
        get tilePosition() {
            return this._tileTransform.position;
        }
        set tilePosition(t) {
            this._tileTransform.position.copyFrom(t);
        }
        get tileScale() {
            return this._tileTransform.scale;
        }
        set tileScale(t) {
            typeof t == "number" ? this._tileTransform.scale.set(t) : this._tileTransform.scale.copyFrom(t);
        }
        set tileRotation(t) {
            this._tileTransform.rotation = t;
        }
        get tileRotation() {
            return this._tileTransform.rotation;
        }
        get tileTransform() {
            return this._tileTransform;
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        get bounds() {
            return this._boundsDirty && (this._updateBounds(), this._boundsDirty = !1), this._bounds;
        }
        set texture(t) {
            t || (t = P.EMPTY);
            const e = this._texture;
            e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this.onViewUpdate());
        }
        get texture() {
            return this._texture;
        }
        set width(t) {
            this._width = t, this.onViewUpdate();
        }
        get width() {
            return this._width;
        }
        set height(t) {
            this._height = t, this.onViewUpdate();
        }
        get height() {
            return this._height;
        }
        _updateBounds() {
            const t = this._bounds, e = this._anchor, i = this._width, s = this._height;
            t.maxX = -e._x * i, t.minX = t.maxX + i, t.maxY = -e._y * s, t.minY = t.maxY + s;
        }
        addBounds(t) {
            const e = this.bounds;
            t.addFrame(e.minX, e.minY, e.maxX, e.maxY);
        }
        containsPoint(t) {
            const e = this.bounds.minX, i = this.bounds.minY, s = -e * this._anchor._x;
            let n = 0;
            return t.x >= s && t.x <= s + e && (n = -i * this._anchor._y, t.y >= n && t.y <= n + i);
        }
        onViewUpdate() {
            this._boundsDirty = !0, this._didTilingSpriteUpdate = !0, this._didChangeId += 4096, !this.didViewUpdate && (this.didViewUpdate = !0, this.renderGroup && this.renderGroup.onChildViewUpdate(this));
        }
        destroy(t = !1) {
            if (super.destroy(t), this._anchor = null, this._tileTransform = null, this._bounds = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
                const e = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
                this._texture.destroy(e);
            }
            this._texture = null;
        }
    };
    Fm.defaultOptions = {
        texture: P.EMPTY,
        anchor: {
            x: 0,
            y: 0
        },
        tilePosition: {
            x: 0,
            y: 0
        },
        tileScale: {
            x: 1,
            y: 1
        },
        tileRotation: 0,
        applyAnchorToTexture: !1
    };
    let Dm = Fm;
    var RS = Object.defineProperty, fs = Object.getOwnPropertySymbols, Um = Object.prototype.hasOwnProperty, km = Object.prototype.propertyIsEnumerable, Lm = (r1, t, e)=>t in r1 ? RS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, wS = (r1, t)=>{
        for(var e in t || (t = {}))Um.call(t, e) && Lm(r1, e, t[e]);
        if (fs) for (var e of fs(t))km.call(t, e) && Lm(r1, e, t[e]);
        return r1;
    }, MS = (r1, t)=>{
        var e = {};
        for(var i in r1)Um.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && fs) for (var i of fs(r1))t.indexOf(i) < 0 && km.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class ms extends W {
        constructor(t, e){
            const i = t, { text: s, resolution: n, style: o, anchor: a, width: l, height: u, roundPixels: c } = i, h = MS(i, [
                "text",
                "resolution",
                "style",
                "anchor",
                "width",
                "height",
                "roundPixels"
            ]);
            super(wS({}, h)), this.batched = !0, this.resolution = null, this._didTextUpdate = !0, this._roundPixels = 0, this._bounds = new ut, this._boundsDirty = !0, this._styleClass = e, this.text = s != null ? s : "", this.style = o, this.resolution = n != null ? n : null, this.allowChildren = !1, this._anchor = new it({
                _onUpdate: ()=>{
                    this.onViewUpdate();
                }
            }), a && (this.anchor = a), this.roundPixels = c != null ? c : !1, l && (this.width = l), u && (this.height = u);
        }
        get anchor() {
            return this._anchor;
        }
        set anchor(t) {
            typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        set text(t) {
            t = t.toString(), this._text !== t && (this._text = t, this.onViewUpdate());
        }
        get text() {
            return this._text;
        }
        get style() {
            return this._style;
        }
        set style(t) {
            var e;
            t = t || {}, (e = this._style) == null || e.off("update", this.onViewUpdate, this), t instanceof this._styleClass ? this._style = t : this._style = new this._styleClass(t), this._style.on("update", this.onViewUpdate, this), this.onViewUpdate();
        }
        get bounds() {
            return this._boundsDirty && (this._updateBounds(), this._boundsDirty = !1), this._bounds;
        }
        get width() {
            return Math.abs(this.scale.x) * this.bounds.width;
        }
        set width(t) {
            this._setWidth(t, this.bounds.width);
        }
        get height() {
            return Math.abs(this.scale.y) * this.bounds.height;
        }
        set height(t) {
            this._setHeight(t, this.bounds.height);
        }
        getSize(t) {
            return t || (t = {}), t.width = Math.abs(this.scale.x) * this.bounds.width, t.height = Math.abs(this.scale.y) * this.bounds.height, t;
        }
        setSize(t, e) {
            var i;
            let s, n;
            typeof t != "object" ? (s = t, n = e != null ? e : t) : (s = t.width, n = (i = t.height) != null ? i : t.width), s !== void 0 && this._setWidth(s, this.bounds.width), n !== void 0 && this._setHeight(n, this.bounds.height);
        }
        addBounds(t) {
            const e = this.bounds;
            t.addFrame(e.minX, e.minY, e.maxX, e.maxY);
        }
        containsPoint(t) {
            const e = this.bounds.maxX, i = this.bounds.maxY, s = -e * this.anchor.x;
            let n = 0;
            return t.x >= s && t.x <= s + e && (n = -i * this.anchor.y, t.y >= n && t.y <= n + i);
        }
        onViewUpdate() {
            this._didChangeId += 4096, this._boundsDirty = !0, !this.didViewUpdate && (this.didViewUpdate = !0, this._didTextUpdate = !0, this.renderGroup && this.renderGroup.onChildViewUpdate(this));
        }
        _getKey() {
            return `${this.text}:${this._style.styleKey}`;
        }
        destroy(t = !1) {
            super.destroy(t), this.owner = null, this._bounds = null, this._anchor = null, (typeof t == "boolean" ? t : t != null && t.style) && this._style.destroy(t), this._style = null, this._text = null;
        }
    }
    function gs(r1, t) {
        var e;
        let i = (e = r1[0]) != null ? e : {};
        return (typeof i == "string" || r1[1]) && (i = {
            text: i,
            style: r1[1]
        }), i;
    }
    class Sa extends ms {
        constructor(...t){
            const e = gs(t, "Text");
            super(e, Yt), this.renderPipeId = "text";
        }
        _updateBounds() {
            const t = this._bounds, e = this._style.padding, i = this._anchor, s = Ft.measureText(this._text, this._style), { width: n, height: o } = s;
            t.minX = -i._x * n - e, t.maxX = t.minX + n, t.minY = -i._y * o - e, t.maxY = t.minY + o;
        }
    }
    class $m extends Pm {
        resolveQueueItem(t, e) {
            return t instanceof W ? this.resolveContainerQueueItem(t, e) : t instanceof rt || t instanceof P ? e.push(t.source) : t instanceof Dt && e.push(t), null;
        }
        resolveContainerQueueItem(t, e) {
            t instanceof Gt || t instanceof Dm || t instanceof Dr ? e.push(t.texture.source) : t instanceof Sa ? e.push(t) : t instanceof Ue ? e.push(t.context) : t instanceof Ur && t.textures.forEach((i)=>{
                i.source ? e.push(i.source) : e.push(i.texture.source);
            });
        }
        resolveGraphicsContextQueueItem(t) {
            this.renderer.graphicsContext.getContextRenderData(t);
            const { instructions: e } = t;
            for (const i of e)if (i.action === "texture") {
                const { image: s } = i.data;
                return s.source;
            } else if (i.action === "fill") {
                const { texture: s } = i.data.style;
                return s.source;
            }
            return null;
        }
    }
    class Nm extends ms {
        constructor(...t){
            var e, i, s;
            const n = gs(t, "BitmapText");
            (e = n.style) != null || (n.style = n.style || {}), (s = (i = n.style).fill) != null || (i.fill = 16777215), super(n, Yt), this.renderPipeId = "bitmapText";
        }
        _updateBounds() {
            const t = this._bounds, e = this._style.padding, i = this._anchor, s = Tr.measureText(this.text, this._style), n = s.scale, o = s.offsetY * n, a = s.width * n, l = s.height * n;
            t.minX = -i._x * a - e, t.maxX = t.minX + a, t.minY = -i._y * (l + o) - e, t.maxY = t.minY + l;
        }
    }
    class Hm extends ms {
        constructor(...t){
            const e = gs(t, "HtmlText");
            super(e, xe), this.renderPipeId = "htmlText";
        }
        _updateBounds() {
            const t = this._bounds, e = this._style.padding, i = this._anchor, s = ko(this.text, this._style), { width: n, height: o } = s;
            t.minX = -i._x * n - e, t.maxX = t.minX + n, t.minY = -i._y * o - e, t.maxY = t.minY + o;
        }
    }
    class Xm extends $m {
        uploadQueueItem(t) {
            t instanceof rt ? this.uploadTextureSource(t) : t instanceof Sa ? this.uploadText(t) : t instanceof Hm ? this.uploadHTMLText(t) : t instanceof Nm ? this.uploadBitmapText(t) : t instanceof Dt && this.uploadGraphicsContext(t);
        }
        uploadTextureSource(t) {
            this.renderer.texture.initSource(t);
        }
        uploadText(t) {
            this.renderer.renderPipes.text.initGpuText(t);
        }
        uploadBitmapText(t) {
            this.renderer.renderPipes.bitmapText.initGpuText(t);
        }
        uploadHTMLText(t) {
            this.renderer.renderPipes.htmlText.initGpuText(t);
        }
        uploadGraphicsContext(t) {
            this.renderer.graphicsContext.getContextRenderData(t);
            const { instructions: e } = t;
            for (const i of e)if (i.action === "texture") {
                const { image: s } = i.data;
                this.uploadTextureSource(s.source);
            } else if (i.action === "fill") {
                const { texture: s } = i.data.style;
                this.uploadTextureSource(s.source);
            }
            return null;
        }
    }
    class zm extends Xm {
        destroy() {
            clearTimeout(this.timeout), this.renderer = null, this.queue = null, this.resolves = null;
        }
    }
    zm.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem
        ],
        name: "prepare"
    };
    class Ea {
        constructor(){
            this._didUpload = !1, this._tempState = Bt.for2d();
        }
        init(t) {
            const e = Ne({
                name: "batch",
                bits: [
                    Li,
                    Ni(wt),
                    Xe
                ]
            });
            this._shader = new yt({
                glProgram: e,
                resources: {
                    batchSamplers: Hi
                }
            }), t.renderer.runners.contextChange.add(this);
        }
        contextChange() {
            this._didUpload = !1;
        }
        start(t, e) {
            const i = t.renderer;
            i.shader.bind(this._shader, this._didUpload), i.shader.updateUniformGroup(i.globalUniforms.uniformGroup), i.geometry.bind(e, this._shader.glProgram);
        }
        execute(t, e) {
            const i = t.renderer;
            this._didUpload = !0, this._tempState.blendMode = e.blendMode, i.state.set(this._tempState);
            const s = e.textures.textures;
            for(let n = 0; n < s.length; n++)i.texture.bind(s[n], n);
            i.geometry.draw("triangle-list", e.size, e.start);
        }
        destroy() {
            this._shader.destroy(!0), this._shader = null;
        }
    }
    Ea.extension = {
        type: [
            x.WebGLPipesAdaptor
        ],
        name: "batch"
    };
    function CS(r1) {
        const t = [];
        let e = 0;
        for(let i = 0; i < r1; i++)t[e] = {
            texture: {
                sampleType: "float",
                viewDimension: "2d",
                multisampled: !1
            },
            binding: e,
            visibility: GPUShaderStage.FRAGMENT
        }, e++, t[e] = {
            sampler: {
                type: "filtering"
            },
            binding: e,
            visibility: GPUShaderStage.FRAGMENT
        }, e++;
        return t;
    }
    function OS(r1) {
        const t = {};
        let e = 0;
        for(let i = 0; i < r1; i++)t[`textureSource${i + 1}`] = e++, t[`textureSampler${i + 1}`] = e++;
        return t;
    }
    const _s = Bt.for2d();
    class Aa {
        init() {
            const t = $e({
                name: "batch",
                bits: [
                    ki,
                    $i(wt),
                    He
                ]
            });
            this._shader = new yt({
                gpuProgram: t,
                groups: {}
            });
        }
        start(t, e) {
            const i = t.renderer, s = i.encoder, n = this._shader.gpuProgram;
            this._geometry = e, s.setGeometry(e), _s.blendMode = "normal", i.pipeline.getPipeline(e, n, _s);
            const o = i.globalUniforms.bindGroup;
            s.resetBindGroup(1), s.setBindGroup(0, o, n);
        }
        execute(t, e) {
            const i = this._shader.gpuProgram, s = t.renderer, n = s.encoder;
            if (!e.bindGroup) {
                const l = e.textures;
                e.bindGroup = fi(l.textures, l.count);
            }
            _s.blendMode = e.blendMode;
            const o = s.bindGroup.getBindGroup(e.bindGroup, i, 1), a = s.pipeline.getPipeline(this._geometry, i, _s);
            e.bindGroup._touch(s.textureGC.count), n.setPipeline(a), n.renderPassEncoder.setBindGroup(1, o), n.renderPassEncoder.drawIndexed(e.size, 1, e.start);
        }
        destroy() {
            this._shader.destroy(!0), this._shader = null;
        }
    }
    Aa.extension = {
        type: [
            x.WebGPUPipesAdaptor
        ],
        name: "batch"
    };
    class Pa {
        constructor(t, e){
            this.state = Bt.for2d(), this._batches = Object.create(null), this._geometries = Object.create(null), this.renderer = t, this._adaptor = e, this._adaptor.init(this);
        }
        buildStart(t) {
            if (!this._batches[t.uid]) {
                const e = new Pn;
                this._batches[t.uid] = e, this._geometries[e.uid] = new xn;
            }
            this._activeBatch = this._batches[t.uid], this._activeGeometry = this._geometries[this._activeBatch.uid], this._activeBatch.begin();
        }
        addToBatch(t) {
            this._activeBatch.add(t);
        }
        break(t) {
            this._activeBatch.break(t);
        }
        buildEnd(t) {
            const e = this._activeBatch, i = this._activeGeometry;
            e.finish(t), i.indexBuffer.setDataWithSize(e.indexBuffer, e.indexSize, !0), i.buffers[0].setDataWithSize(e.attributeBuffer.float32View, e.attributeSize, !1);
        }
        upload(t) {
            const e = this._batches[t.uid], i = this._geometries[e.uid];
            e.dirty && (e.dirty = !1, i.buffers[0].update(e.attributeSize * 4));
        }
        execute(t) {
            if (t.action === "startBatch") {
                const e = t.batcher, i = this._geometries[e.uid];
                this._adaptor.start(this, i);
            }
            this._adaptor.execute(this, t);
        }
        destroy() {
            this.state = null, this.renderer = null, this._adaptor.destroy(), this._adaptor = null;
            for(const t in this._batches)this._batches[t].destroy();
            this._batches = null;
            for(const t in this._geometries)this._geometries[t].destroy();
            this._geometries = null;
        }
    }
    Pa.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "batch"
    };
    function GS(r1) {
        const t = r1.split(/([\n{}])/g).map((i)=>i.trim()).filter((i)=>i.length);
        let e = "";
        return t.map((i)=>{
            let s = e + i;
            return i === "{" ? e += "    " : i === "}" && (e = e.substr(0, e.length - 4), s = e + i), s;
        }).join(`
`);
    }
    const jm = {
        name: "texture-bit",
        vertex: {
            header: `

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,
            main: `
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `
        },
        fragment: {
            header: `
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,
            main: `
            outColor = textureSample(uTexture, uSampler, vUV);
        `
        }
    }, Vm = {
        name: "texture-bit",
        vertex: {
            header: `
            uniform mat3 uTextureMatrix;
        `,
            main: `
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `
        },
        fragment: {
            header: `
        uniform sampler2D uTexture;

         
        `,
            main: `
            outColor = texture(uTexture, vUV);
        `
        }
    };
    function Wm(r1, t) {
        const e = r1.root, i = r1.instructionSet;
        i.reset(), t.batch.buildStart(i), t.blendMode.buildStart(), t.colorMask.buildStart(), e.sortableChildren && e.sortChildren(), Ym(e, i, t, !0), t.batch.buildEnd(i), t.blendMode.buildEnd(i);
    }
    function Lr(r1, t, e) {
        r1.globalDisplayStatus < 7 || !r1.includeInBuild || (r1.sortableChildren && r1.sortChildren(), r1.isSimple ? BS(r1, t, e) : Ym(r1, t, e, !1));
    }
    function BS(r1, t, e) {
        if (r1.renderPipeId && (e.blendMode.setBlendMode(r1, r1.groupBlendMode, t), r1.didViewUpdate = !1, e[r1.renderPipeId].addRenderable(r1, t)), !r1.isRenderGroupRoot) {
            const i = r1.children, s = i.length;
            for(let n = 0; n < s; n++)Lr(i[n], t, e);
        }
    }
    function Ym(r1, t, e, i) {
        if (!i && r1.isRenderGroupRoot) e.renderGroup.addRenderGroup(r1.renderGroup, t);
        else {
            for(let o = 0; o < r1.effects.length; o++){
                const a = r1.effects[o];
                e[a.pipe].push(a, r1, t);
            }
            const s = r1.renderPipeId;
            s && (e.blendMode.setBlendMode(r1, r1.groupBlendMode, t), r1.didViewUpdate = !1, e[s].addRenderable(r1, t));
            const n = r1.children;
            if (n.length) for(let o = 0; o < n.length; o++)Lr(n[o], t, e);
            for(let o = r1.effects.length - 1; o >= 0; o--){
                const a = r1.effects[o];
                e[a.pipe].pop(a, r1, t);
            }
        }
    }
    const IS = new ut;
    class FS extends Qr {
        constructor(){
            super({
                filters: [
                    new Em({
                        sprite: new Gt(P.EMPTY)
                    })
                ]
            });
        }
        get sprite() {
            return this.filters[0].sprite;
        }
        set sprite(t) {
            this.filters[0].sprite = t;
        }
    }
    class Ra {
        constructor(t){
            this._activeMaskStage = [], this._renderer = t;
        }
        push(t, e, i) {
            const s = this._renderer;
            if (s.renderPipes.batch.break(i), i.add({
                renderPipeId: "alphaMask",
                action: "pushMaskBegin",
                mask: t,
                canBundle: !1,
                maskedContainer: e
            }), t.renderMaskToTexture) {
                const n = t.mask;
                n.includeInBuild = !0, Lr(n, i, s.renderPipes), n.includeInBuild = !1;
            }
            s.renderPipes.batch.break(i), i.add({
                renderPipeId: "alphaMask",
                action: "pushMaskEnd",
                mask: t,
                maskedContainer: e,
                canBundle: !1
            });
        }
        pop(t, e, i) {
            this._renderer.renderPipes.batch.break(i), i.add({
                renderPipeId: "alphaMask",
                action: "popMaskEnd",
                mask: t,
                canBundle: !1
            });
        }
        execute(t) {
            const e = this._renderer, i = t.mask.renderMaskToTexture;
            if (t.action === "pushMaskBegin") {
                const s = X.get(FS);
                if (i) {
                    t.mask.mask.measurable = !0;
                    const n = er(t.mask.mask, !0, IS);
                    t.mask.mask.measurable = !1, n.ceil();
                    const o = ct.getOptimalTexture(n.width, n.height, 1, !1);
                    e.renderTarget.push(o, !0), e.globalUniforms.push({
                        offset: n,
                        worldColor: 4294967295
                    });
                    const a = s.sprite;
                    a.texture = o, a.worldTransform.tx = n.minX, a.worldTransform.ty = n.minY, this._activeMaskStage.push({
                        filterEffect: s,
                        maskedContainer: t.maskedContainer,
                        filterTexture: o
                    });
                } else s.sprite = t.mask.mask, this._activeMaskStage.push({
                    filterEffect: s,
                    maskedContainer: t.maskedContainer
                });
            } else if (t.action === "pushMaskEnd") {
                const s = this._activeMaskStage[this._activeMaskStage.length - 1];
                i && (e.renderTarget.pop(), e.globalUniforms.pop()), e.filter.push({
                    renderPipeId: "filter",
                    action: "pushFilter",
                    container: s.maskedContainer,
                    filterEffect: s.filterEffect,
                    canBundle: !1
                });
            } else if (t.action === "popMaskEnd") {
                e.filter.pop();
                const s = this._activeMaskStage.pop();
                i && ct.returnTexture(s.filterTexture), X.return(s.filterEffect);
            }
        }
        destroy() {
            this._renderer = null, this._activeMaskStage = null;
        }
    }
    Ra.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "alphaMask"
    };
    class wa {
        constructor(t){
            this._colorStack = [], this._colorStackIndex = 0, this._currentColor = 0, this._renderer = t;
        }
        buildStart() {
            this._colorStack[0] = 15, this._colorStackIndex = 1, this._currentColor = 15;
        }
        push(t, e, i) {
            this._renderer.renderPipes.batch.break(i);
            const s = this._colorStack;
            s[this._colorStackIndex] = s[this._colorStackIndex - 1] & t.mask;
            const n = this._colorStack[this._colorStackIndex];
            n !== this._currentColor && (this._currentColor = n, i.add({
                renderPipeId: "colorMask",
                colorMask: n,
                canBundle: !1
            })), this._colorStackIndex++;
        }
        pop(t, e, i) {
            this._renderer.renderPipes.batch.break(i);
            const s = this._colorStack;
            this._colorStackIndex--;
            const n = s[this._colorStackIndex - 1];
            n !== this._currentColor && (this._currentColor = n, i.add({
                renderPipeId: "colorMask",
                colorMask: n,
                canBundle: !1
            }));
        }
        execute(t) {
            this._renderer.colorMask.setMask(t.colorMask);
        }
        destroy() {
            this._colorStack = null;
        }
    }
    wa.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "colorMask"
    };
    class DS {
        constructor(t){
            this.priority = 0, this.pipe = "scissorMask", this.mask = t, this.mask.renderable = !1, this.mask.measurable = !1;
        }
        addBounds(t, e) {
            hi(this.mask, t, e);
        }
        addLocalBounds(t, e) {
            di(this.mask, t, e);
        }
        containsPoint(t, e) {
            const i = this.mask;
            return e(i, t);
        }
        reset() {
            this.mask.measurable = !0, this.mask = null;
        }
        destroy() {
            this.reset();
        }
    }
    class Ma {
        constructor(t){
            this._maskStackHash = {}, this._maskHash = new WeakMap, this._renderer = t;
        }
        push(t, e, i) {
            var s, n;
            const o = t, a = this._renderer;
            a.renderPipes.batch.break(i), a.renderPipes.blendMode.setBlendMode(o.mask, "none", i), i.add({
                renderPipeId: "stencilMask",
                action: "pushMaskBegin",
                mask: t,
                canBundle: !1
            });
            const l = o.mask;
            l.includeInBuild = !0, this._maskHash.has(o) || this._maskHash.set(o, {
                instructionsStart: 0,
                instructionsLength: 0
            });
            const u = this._maskHash.get(o);
            u.instructionsStart = i.instructionSize, Lr(l, i, a.renderPipes), l.includeInBuild = !1, a.renderPipes.batch.break(i), i.add({
                renderPipeId: "stencilMask",
                action: "pushMaskEnd",
                mask: t,
                canBundle: !1
            });
            const c = i.instructionSize - u.instructionsStart - 1;
            u.instructionsLength = c;
            const h = a.renderTarget.renderTarget.uid;
            (n = (s = this._maskStackHash)[h]) != null || (s[h] = 0);
        }
        pop(t, e, i) {
            const s = t, n = this._renderer;
            n.renderPipes.batch.break(i), n.renderPipes.blendMode.setBlendMode(s.mask, "none", i), i.add({
                renderPipeId: "stencilMask",
                action: "popMaskBegin",
                canBundle: !1
            });
            const o = this._maskHash.get(t);
            for(let a = 0; a < o.instructionsLength; a++)i.instructions[i.instructionSize++] = i.instructions[o.instructionsStart++];
            i.add({
                renderPipeId: "stencilMask",
                action: "popMaskEnd",
                canBundle: !1
            });
        }
        execute(t) {
            var e, i;
            const s = this._renderer, n = s.renderTarget.renderTarget.uid;
            let o = (i = (e = this._maskStackHash)[n]) != null ? i : e[n] = 0;
            t.action === "pushMaskBegin" ? (s.renderTarget.ensureDepthStencil(), s.stencil.setStencilMode(st.RENDERING_MASK_ADD, o), o++, s.colorMask.setMask(0)) : t.action === "pushMaskEnd" ? (s.stencil.setStencilMode(st.MASK_ACTIVE, o), s.colorMask.setMask(15)) : t.action === "popMaskBegin" ? (s.colorMask.setMask(0), o !== 0 ? s.stencil.setStencilMode(st.RENDERING_MASK_REMOVE, o) : (s.renderTarget.clear(null, ft.STENCIL), s.stencil.setStencilMode(st.DISABLED, o)), o--) : t.action === "popMaskEnd" && (s.stencil.setStencilMode(st.MASK_ACTIVE, o), s.colorMask.setMask(15)), this._maskStackHash[n] = o;
        }
        destroy() {
            this._renderer = null, this._maskStackHash = null, this._maskHash = null;
        }
    }
    Ma.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "stencilMask"
    };
    var $r = ((r1)=>(r1[r1.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", r1[r1.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", r1[r1.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", r1))($r || {});
    class Km {
        constructor(t, e){
            this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.type = e;
        }
    }
    class Ca {
        constructor(t){
            this._gpuBuffers = Object.create(null), this._boundBufferBases = Object.create(null), this._renderer = t;
        }
        destroy() {
            this._renderer = null, this._gl = null, this._gpuBuffers = null, this._boundBufferBases = null;
        }
        contextChange() {
            this._gpuBuffers = Object.create(null), this._gl = this._renderer.gl;
        }
        getGlBuffer(t) {
            return this._gpuBuffers[t.uid] || this.createGLBuffer(t);
        }
        bind(t) {
            const { _gl: e } = this, i = this.getGlBuffer(t);
            e.bindBuffer(i.type, i.buffer);
        }
        bindBufferBase(t, e) {
            const { _gl: i } = this;
            if (this._boundBufferBases[e] !== t) {
                const s = this.getGlBuffer(t);
                this._boundBufferBases[e] = t, i.bindBufferBase(i.UNIFORM_BUFFER, e, s.buffer);
            }
        }
        bindBufferRange(t, e, i) {
            const { _gl: s } = this;
            i = i || 0;
            const n = this.getGlBuffer(t);
            s.bindBufferRange(s.UNIFORM_BUFFER, e || 0, n.buffer, i * 256, 256);
        }
        updateBuffer(t) {
            const { _gl: e } = this, i = this.getGlBuffer(t);
            if (t._updateID === i.updateID) return i;
            i.updateID = t._updateID, e.bindBuffer(i.type, i.buffer);
            const s = t.data;
            if (i.byteLength >= t.data.byteLength) e.bufferSubData(i.type, 0, s, 0, t._updateSize / s.BYTES_PER_ELEMENT);
            else {
                const n = t.descriptor.usage & $.STATIC ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                i.byteLength = s.byteLength, e.bufferData(i.type, s, n);
            }
            return i;
        }
        destroyAll() {
            const t = this._gl;
            for(const e in this._gpuBuffers)t.deleteBuffer(this._gpuBuffers[e].buffer);
            this._gpuBuffers = Object.create(null);
        }
        onBufferDestroy(t, e) {
            const i = this._gpuBuffers[t.uid], s = this._gl;
            e || s.deleteBuffer(i.buffer), this._gpuBuffers[t.uid] = null;
        }
        createGLBuffer(t) {
            const { _gl: e } = this;
            let i = $r.ARRAY_BUFFER;
            t.descriptor.usage & $.INDEX ? i = $r.ELEMENT_ARRAY_BUFFER : t.descriptor.usage & $.UNIFORM && (i = $r.UNIFORM_BUFFER);
            const s = new Km(e.createBuffer(), i);
            return this._gpuBuffers[t.uid] = s, t.on("destroy", this.onBufferDestroy, this), s;
        }
    }
    Ca.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "buffer"
    };
    var US = Object.defineProperty, kS = Object.defineProperties, LS = Object.getOwnPropertyDescriptors, qm = Object.getOwnPropertySymbols, $S = Object.prototype.hasOwnProperty, NS = Object.prototype.propertyIsEnumerable, Zm = (r1, t, e)=>t in r1 ? US(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, bs = (r1, t)=>{
        for(var e in t || (t = {}))$S.call(t, e) && Zm(r1, e, t[e]);
        if (qm) for (var e of qm(t))NS.call(t, e) && Zm(r1, e, t[e]);
        return r1;
    }, Qm = (r1, t)=>kS(r1, LS(t));
    const Oa = class Db {
        constructor(t){
            this.supports = {
                uint32Indices: !0,
                uniformBufferObject: !0,
                vertexArrayObject: !0,
                srgbTextures: !0,
                nonPowOf2wrapping: !0,
                msaa: !0,
                nonPowOf2mipmaps: !0
            }, this._renderer = t, this.extensions = Object.create(null), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
        }
        get isLost() {
            return !this.gl || this.gl.isContextLost();
        }
        contextChange(t) {
            this.gl = t, this._renderer.gl = t;
        }
        init(t) {
            var e, i;
            if (t = bs(bs({}, Db.defaultOptions), t), t.context) this.initFromContext(t.context);
            else {
                const s = this._renderer.background.alpha < 1, n = (e = t.premultipliedAlpha) != null ? e : !0, o = t.antialias && !this._renderer.backBuffer.useBackBuffer;
                this.createContext(t.preferWebGLVersion, {
                    alpha: s,
                    premultipliedAlpha: n,
                    antialias: o,
                    stencil: !0,
                    preserveDrawingBuffer: t.preserveDrawingBuffer,
                    powerPreference: (i = t.powerPreference) != null ? i : "default"
                });
            }
        }
        initFromContext(t) {
            this.gl = t, this.webGLVersion = t instanceof z.get().getWebGL2RenderingContext() ? 2 : 1, this.getExtensions(), this.validateContext(t), this._renderer.runners.contextChange.emit(t);
            const e = this._renderer.view.canvas;
            e.addEventListener("webglcontextlost", this.handleContextLost, !1), e.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
        }
        createContext(t, e) {
            let i;
            const s = this._renderer.view.canvas;
            if (t === 2 && (i = s.getContext("webgl2", e)), !i && (i = s.getContext("webgl", e), !i)) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
            this.gl = i, this.initFromContext(this.gl);
        }
        getExtensions() {
            const { gl: t } = this, e = {
                anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                etc: t.getExtension("WEBGL_compressed_texture_etc"),
                etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                atc: t.getExtension("WEBGL_compressed_texture_atc"),
                astc: t.getExtension("WEBGL_compressed_texture_astc"),
                bptc: t.getExtension("EXT_texture_compression_bptc"),
                rgtc: t.getExtension("EXT_texture_compression_rgtc"),
                loseContext: t.getExtension("WEBGL_lose_context")
            };
            this.webGLVersion === 1 ? this.extensions = Qm(bs({}, e), {
                drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                depthTexture: t.getExtension("WEBGL_depth_texture"),
                vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                floatTexture: t.getExtension("OES_texture_float"),
                floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                textureHalfFloat: t.getExtension("OES_texture_half_float"),
                textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear"),
                vertexAttribDivisorANGLE: t.getExtension("ANGLE_instanced_arrays"),
                srgb: t.getExtension("EXT_sRGB")
            }) : this.extensions = Qm(bs({}, e), {
                colorBufferFloat: t.getExtension("EXT_color_buffer_float")
            });
        }
        handleContextLost(t) {
            t.preventDefault(), this._contextLossForced && (this._contextLossForced = !1, setTimeout(()=>{
                var e;
                this.gl.isContextLost() && ((e = this.extensions.loseContext) == null || e.restoreContext());
            }, 0));
        }
        handleContextRestored() {
            this._renderer.runners.contextChange.emit(this.gl);
        }
        destroy() {
            var t;
            const e = this._renderer.view.canvas;
            this._renderer = null, e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), (t = this.extensions.loseContext) == null || t.loseContext();
        }
        forceContextLoss() {
            var t;
            (t = this.extensions.loseContext) == null || t.loseContext(), this._contextLossForced = !0;
        }
        validateContext(t) {
            const e = t.getContextAttributes();
            e && e.stencil;
            const i = this.supports, s = this.webGLVersion === 2, n = this.extensions;
            i.uint32Indices = s || !!n.uint32ElementIndex, i.uniformBufferObject = s, i.vertexArrayObject = s || !!n.vertexArrayObject, i.srgbTextures = s || !!n.srgb, i.nonPowOf2wrapping = s, i.nonPowOf2mipmaps = s, i.msaa = s, i.uint32Indices;
        }
    };
    Oa.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "context"
    }, Oa.defaultOptions = {
        context: null,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1,
        powerPreference: void 0,
        preferWebGLVersion: 2
    };
    let Jm = Oa, Ga = 0;
    const tg = 500;
    function vs(...r1) {
        Ga !== tg && (Ga++, Ga === tg ? console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS.") : console.warn("PixiJS Warning: ", ...r1));
    }
    function Ba(r1, t) {
        var e, i, s, n;
        for(const o in r1.attributes){
            const a = r1.attributes[o], l = t[o];
            l ? ((e = a.location) != null || (a.location = l.location), (i = a.format) != null || (a.format = l.format), (s = a.offset) != null || (a.offset = l.offset), (n = a.instance) != null || (a.instance = l.instance)) : vs(`Attribute ${o} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`);
        }
        HS(r1);
    }
    function HS(r1) {
        var t, e;
        const { buffers: i, attributes: s } = r1, n = {}, o = {};
        for(const a in i){
            const l = i[a];
            n[l.uid] = 0, o[l.uid] = 0;
        }
        for(const a in s){
            const l = s[a];
            n[l.buffer.uid] += ke(l.format).stride;
        }
        for(const a in s){
            const l = s[a];
            (t = l.stride) != null || (l.stride = n[l.buffer.uid]), (e = l.start) != null || (l.start = o[l.buffer.uid]), o[l.buffer.uid] += ke(l.format).stride;
        }
    }
    var ys = ((r1)=>(r1[r1.RGBA = 6408] = "RGBA", r1[r1.RGB = 6407] = "RGB", r1[r1.RG = 33319] = "RG", r1[r1.RED = 6403] = "RED", r1[r1.RGBA_INTEGER = 36249] = "RGBA_INTEGER", r1[r1.RGB_INTEGER = 36248] = "RGB_INTEGER", r1[r1.RG_INTEGER = 33320] = "RG_INTEGER", r1[r1.RED_INTEGER = 36244] = "RED_INTEGER", r1[r1.ALPHA = 6406] = "ALPHA", r1[r1.LUMINANCE = 6409] = "LUMINANCE", r1[r1.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", r1[r1.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", r1[r1.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", r1))(ys || {}), Ia = ((r1)=>(r1[r1.TEXTURE_2D = 3553] = "TEXTURE_2D", r1[r1.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", r1[r1.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", r1[r1.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", r1[r1.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", r1[r1.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", r1[r1.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", r1[r1.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", r1[r1.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", r1))(Ia || {}), eg = ((r1)=>(r1[r1.CLAMP = 33071] = "CLAMP", r1[r1.REPEAT = 10497] = "REPEAT", r1[r1.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", r1))(eg || {}), N = ((r1)=>(r1[r1.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", r1[r1.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", r1[r1.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", r1[r1.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", r1[r1.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", r1[r1.UNSIGNED_INT = 5125] = "UNSIGNED_INT", r1[r1.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", r1[r1.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", r1[r1.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", r1[r1.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", r1[r1.BYTE = 5120] = "BYTE", r1[r1.SHORT = 5122] = "SHORT", r1[r1.INT = 5124] = "INT", r1[r1.FLOAT = 5126] = "FLOAT", r1[r1.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", r1[r1.HALF_FLOAT = 36193] = "HALF_FLOAT", r1))(N || {});
    const rg = {
        uint8x2: N.UNSIGNED_BYTE,
        uint8x4: N.UNSIGNED_BYTE,
        sint8x2: N.BYTE,
        sint8x4: N.BYTE,
        unorm8x2: N.UNSIGNED_BYTE,
        unorm8x4: N.UNSIGNED_BYTE,
        snorm8x2: N.BYTE,
        snorm8x4: N.BYTE,
        uint16x2: N.UNSIGNED_SHORT,
        uint16x4: N.UNSIGNED_SHORT,
        sint16x2: N.SHORT,
        sint16x4: N.SHORT,
        unorm16x2: N.UNSIGNED_SHORT,
        unorm16x4: N.UNSIGNED_SHORT,
        snorm16x2: N.SHORT,
        snorm16x4: N.SHORT,
        float16x2: N.HALF_FLOAT,
        float16x4: N.HALF_FLOAT,
        float32: N.FLOAT,
        float32x2: N.FLOAT,
        float32x3: N.FLOAT,
        float32x4: N.FLOAT,
        uint32: N.UNSIGNED_INT,
        uint32x2: N.UNSIGNED_INT,
        uint32x3: N.UNSIGNED_INT,
        uint32x4: N.UNSIGNED_INT,
        sint32: N.INT,
        sint32x2: N.INT,
        sint32x3: N.INT,
        sint32x4: N.INT
    };
    function ig(r1) {
        var t;
        return (t = rg[r1]) != null ? t : rg.float32;
    }
    const XS = {
        "point-list": 0,
        "line-list": 1,
        "line-strip": 3,
        "triangle-list": 4,
        "triangle-strip": 5
    };
    class Fa {
        constructor(t){
            this._geometryVaoHash = Object.create(null), this._renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0;
        }
        contextChange() {
            const t = this.gl = this._renderer.gl;
            if (!this._renderer.context.supports.vertexArrayObject) throw new Error("[PixiJS] Vertex Array Objects are not supported on this device");
            const e = this._renderer.context.extensions.vertexArrayObject;
            e && (t.createVertexArray = ()=>e.createVertexArrayOES(), t.bindVertexArray = (s)=>e.bindVertexArrayOES(s), t.deleteVertexArray = (s)=>e.deleteVertexArrayOES(s));
            const i = this._renderer.context.extensions.vertexAttribDivisorANGLE;
            i && (t.drawArraysInstanced = (s, n, o, a)=>{
                i.drawArraysInstancedANGLE(s, n, o, a);
            }, t.drawElementsInstanced = (s, n, o, a, l)=>{
                i.drawElementsInstancedANGLE(s, n, o, a, l);
            }, t.vertexAttribDivisor = (s, n)=>i.vertexAttribDivisorANGLE(s, n)), this._activeGeometry = null, this._activeVao = null, this._geometryVaoHash = Object.create(null);
        }
        bind(t, e) {
            const i = this.gl;
            this._activeGeometry = t;
            const s = this.getVao(t, e);
            this._activeVao !== s && (this._activeVao = s, i.bindVertexArray(s)), this.updateBuffers();
        }
        reset() {
            this.unbind();
        }
        updateBuffers() {
            const t = this._activeGeometry, e = this._renderer.buffer;
            for(let i = 0; i < t.buffers.length; i++){
                const s = t.buffers[i];
                e.updateBuffer(s);
            }
        }
        checkCompatibility(t, e) {
            const i = t.attributes, s = e._attributeData;
            for(const n in s)if (!i[n]) throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`);
        }
        getSignature(t, e) {
            const i = t.attributes, s = e._attributeData, n = [
                "g",
                t.uid
            ];
            for(const o in i)s[o] && n.push(o, s[o].location);
            return n.join("-");
        }
        getVao(t, e) {
            var i;
            return ((i = this._geometryVaoHash[t.uid]) == null ? void 0 : i[e._key]) || this.initGeometryVao(t, e);
        }
        initGeometryVao(t, e, i = !0) {
            const s = this._renderer.gl, n = this._renderer.buffer;
            this._renderer.shader._getProgramData(e), this.checkCompatibility(t, e);
            const o = this.getSignature(t, e);
            this._geometryVaoHash[t.uid] || (this._geometryVaoHash[t.uid] = Object.create(null), t.on("destroy", this.onGeometryDestroy, this));
            const a = this._geometryVaoHash[t.uid];
            let l = a[o];
            if (l) return a[e._key] = l, l;
            Ba(t, e._attributeData);
            const u = t.buffers;
            l = s.createVertexArray(), s.bindVertexArray(l);
            for(let c = 0; c < u.length; c++){
                const h = u[c];
                n.bind(h);
            }
            return this.activateVao(t, e), a[e._key] = l, a[o] = l, s.bindVertexArray(null), l;
        }
        onGeometryDestroy(t, e) {
            const i = this._geometryVaoHash[t.uid], s = this.gl;
            if (i) {
                if (e) for(const n in i)this._activeVao !== i[n] && this.unbind(), s.deleteVertexArray(i[n]);
                this._geometryVaoHash[t.uid] = null;
            }
        }
        destroyAll(t = !1) {
            const e = this.gl;
            for(const i in this._geometryVaoHash){
                if (t) for(const s in this._geometryVaoHash[i]){
                    const n = this._geometryVaoHash[i];
                    this._activeVao !== n && this.unbind(), e.deleteVertexArray(n[s]);
                }
                this._geometryVaoHash[i] = null;
            }
        }
        activateVao(t, e) {
            const i = this._renderer.gl, s = this._renderer.buffer, n = t.attributes;
            t.indexBuffer && s.bind(t.indexBuffer);
            let o = null;
            for(const a in n){
                const l = n[a], u = l.buffer, c = s.getGlBuffer(u);
                if (e._attributeData[a]) {
                    o !== c && (s.bind(u), o = c);
                    const h = l.location;
                    i.enableVertexAttribArray(h);
                    const p = ke(l.format);
                    if (i.vertexAttribPointer(h, p.size, ig(l.format), p.normalised, l.stride, l.offset), l.instance) {
                        if (this.hasInstance) i.vertexAttribDivisor(h, 1);
                        else throw new Error("geometry error, GPU Instancing is not supported on this device");
                    }
                }
            }
        }
        draw(t, e, i, s) {
            const { gl: n } = this._renderer, o = this._activeGeometry, a = XS[o.topology || t];
            if (s || (s = o.instanceCount), o.indexBuffer) {
                const l = o.indexBuffer.data.BYTES_PER_ELEMENT, u = l === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                s > 1 ? n.drawElementsInstanced(a, e || o.indexBuffer.data.length, u, (i || 0) * l, s) : n.drawElements(a, e || o.indexBuffer.data.length, u, (i || 0) * l);
            } else s > 1 ? n.drawArraysInstanced(a, i || 0, e || o.getSize(), s) : n.drawArrays(a, i || 0, e || o.getSize());
            return this;
        }
        unbind() {
            this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
        }
        destroy() {
            this._renderer = null, this.gl = null, this._activeVao = null, this._activeGeometry = null;
        }
    }
    Fa.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "geometry"
    };
    var zS = Object.defineProperty, sg = Object.getOwnPropertySymbols, jS = Object.prototype.hasOwnProperty, VS = Object.prototype.propertyIsEnumerable, ng = (r1, t, e)=>t in r1 ? zS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, og = (r1, t)=>{
        for(var e in t || (t = {}))jS.call(t, e) && ng(r1, e, t[e]);
        if (sg) for (var e of sg(t))VS.call(t, e) && ng(r1, e, t[e]);
        return r1;
    };
    const WS = new Ge({
        attributes: {
            aPosition: [
                -1,
                -1,
                3,
                -1,
                -1,
                3
            ]
        }
    }), Da = class Ub {
        constructor(t){
            this.useBackBuffer = !1, this._useBackBufferThisRender = !1, this._renderer = t;
        }
        init(t = {}) {
            const { useBackBuffer: e, antialias: i } = og(og({}, Ub.defaultOptions), t);
            this.useBackBuffer = e, this._antialias = i, this._renderer.context.supports.msaa || (vs("antialiasing, is not supported on when using the back buffer"), this._antialias = !1), this._state = Bt.for2d();
            const s = new Mt({
                vertex: `
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,
                fragment: `
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,
                name: "big-triangle"
            });
            this._bigTriangleShader = new yt({
                glProgram: s,
                resources: {
                    uTexture: P.WHITE.source
                }
            });
        }
        renderStart(t) {
            const e = this._renderer.renderTarget.getRenderTarget(t.target);
            if (this._useBackBufferThisRender = this.useBackBuffer && !!e.isRoot, this._useBackBufferThisRender) {
                const i = this._renderer.renderTarget.getRenderTarget(t.target);
                this._targetTexture = i.colorTexture, t.target = this._getBackBufferTexture(i.colorTexture);
            }
        }
        renderEnd() {
            this._presentBackBuffer();
        }
        _presentBackBuffer() {
            const t = this._renderer;
            t.renderTarget.finishRenderPass(), this._useBackBufferThisRender && (t.renderTarget.bind(this._targetTexture, !1), this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source, t.encoder.draw({
                geometry: WS,
                shader: this._bigTriangleShader,
                state: this._state
            }));
        }
        _getBackBufferTexture(t) {
            return this._backBufferTexture = this._backBufferTexture || new P({
                source: new rt({
                    width: t.width,
                    height: t.height,
                    resolution: t._resolution,
                    antialias: this._antialias
                })
            }), this._backBufferTexture.source.resize(t.width, t.height, t._resolution), this._backBufferTexture;
        }
        destroy() {
            this._backBufferTexture && (this._backBufferTexture.destroy(), this._backBufferTexture = null);
        }
    };
    Da.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "backBuffer",
        priority: 1
    }, Da.defaultOptions = {
        useBackBuffer: !1
    };
    let ag = Da;
    class Ua {
        constructor(t){
            this._colorMaskCache = 15, this._renderer = t;
        }
        setMask(t) {
            this._colorMaskCache !== t && (this._colorMaskCache = t, this._renderer.gl.colorMask(!!(t & 8), !!(t & 4), !!(t & 2), !!(t & 1)));
        }
    }
    Ua.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "colorMask"
    };
    class ka {
        constructor(t){
            this.commandFinished = Promise.resolve(), this._renderer = t;
        }
        setGeometry(t, e) {
            this._renderer.geometry.bind(t, e.glProgram);
        }
        finishRenderPass() {}
        draw(t) {
            const e = this._renderer, { geometry: i, shader: s, state: n, skipSync: o, topology: a, size: l, start: u, instanceCount: c } = t;
            e.shader.bind(s, o), e.geometry.bind(i, e.shader._activeProgram), n && e.state.set(n), e.geometry.draw(a, l, u, c != null ? c : i.instanceCount);
        }
        destroy() {
            this._renderer = null;
        }
    }
    ka.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "encoder"
    };
    class lg {
        constructor(){
            this.width = -1, this.height = -1, this.msaa = !1, this.msaaRenderBuffer = [];
        }
    }
    const ie = [];
    ie[st.NONE] = void 0, ie[st.DISABLED] = {
        stencilWriteMask: 0,
        stencilReadMask: 0
    }, ie[st.RENDERING_MASK_ADD] = {
        stencilFront: {
            compare: "equal",
            passOp: "increment-clamp"
        },
        stencilBack: {
            compare: "equal",
            passOp: "increment-clamp"
        }
    }, ie[st.RENDERING_MASK_REMOVE] = {
        stencilFront: {
            compare: "equal",
            passOp: "decrement-clamp"
        },
        stencilBack: {
            compare: "equal",
            passOp: "decrement-clamp"
        }
    }, ie[st.MASK_ACTIVE] = {
        stencilWriteMask: 0,
        stencilFront: {
            compare: "equal",
            passOp: "keep"
        },
        stencilBack: {
            compare: "equal",
            passOp: "keep"
        }
    };
    class La {
        constructor(t){
            this._stencilCache = {
                enabled: !1,
                stencilReference: 0,
                stencilMode: st.NONE
            }, this._renderTargetStencilState = Object.create(null), t.renderTarget.onRenderTargetChange.add(this);
        }
        contextChange(t) {
            this._gl = t, this._comparisonFuncMapping = {
                always: t.ALWAYS,
                never: t.NEVER,
                equal: t.EQUAL,
                "not-equal": t.NOTEQUAL,
                less: t.LESS,
                "less-equal": t.LEQUAL,
                greater: t.GREATER,
                "greater-equal": t.GEQUAL
            }, this._stencilOpsMapping = {
                keep: t.KEEP,
                zero: t.ZERO,
                replace: t.REPLACE,
                invert: t.INVERT,
                "increment-clamp": t.INCR,
                "decrement-clamp": t.DECR,
                "increment-wrap": t.INCR_WRAP,
                "decrement-wrap": t.DECR_WRAP
            }, this._stencilCache.enabled = !1, this._stencilCache.stencilMode = st.NONE, this._stencilCache.stencilReference = 0;
        }
        onRenderTargetChange(t) {
            if (this._activeRenderTarget === t) return;
            this._activeRenderTarget = t;
            let e = this._renderTargetStencilState[t.uid];
            e || (e = this._renderTargetStencilState[t.uid] = {
                stencilMode: st.DISABLED,
                stencilReference: 0
            }), this.setStencilMode(e.stencilMode, e.stencilReference);
        }
        setStencilMode(t, e) {
            const i = this._renderTargetStencilState[this._activeRenderTarget.uid], s = this._gl, n = ie[t], o = this._stencilCache;
            if (i.stencilMode = t, i.stencilReference = e, t === st.DISABLED) {
                this._stencilCache.enabled && (this._stencilCache.enabled = !1, s.disable(s.STENCIL_TEST));
                return;
            }
            this._stencilCache.enabled || (this._stencilCache.enabled = !0, s.enable(s.STENCIL_TEST)), (t !== o.stencilMode || o.stencilReference !== e) && (o.stencilMode = t, o.stencilReference = e, s.stencilFunc(this._comparisonFuncMapping[n.stencilBack.compare], e, 255), s.stencilOp(s.KEEP, s.KEEP, this._stencilOpsMapping[n.stencilBack.passOp]));
        }
    }
    La.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "stencil"
    };
    class $a {
        constructor(t){
            this._syncFunctionHash = Object.create(null), this._adaptor = t, this._systemCheck();
        }
        _systemCheck() {
            if (!Yo()) throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
        }
        ensureUniformGroup(t) {
            const e = this.getUniformGroupData(t);
            t.buffer || (t.buffer = new _t({
                data: new Float32Array(e.layout.size / 4),
                usage: $.UNIFORM | $.COPY_DST
            }));
        }
        getUniformGroupData(t) {
            return this._syncFunctionHash[t._signature] || this._initUniformGroup(t);
        }
        _initUniformGroup(t) {
            const e = t._signature;
            let i = this._syncFunctionHash[e];
            if (!i) {
                const s = Object.keys(t.uniformStructures).map((a)=>t.uniformStructures[a]), n = this._adaptor.createUboElements(s), o = this._generateUboSync(n.uboElements);
                i = this._syncFunctionHash[e] = {
                    layout: n,
                    syncFunction: o
                };
            }
            return this._syncFunctionHash[e];
        }
        _generateUboSync(t) {
            return this._adaptor.generateUboSync(t);
        }
        syncUniformGroup(t, e, i) {
            const s = this.getUniformGroupData(t);
            return t.buffer || (t.buffer = new _t({
                data: new Float32Array(s.layout.size / 4),
                usage: $.UNIFORM | $.COPY_DST
            })), e || (e = t.buffer.data), i || (i = 0), s.syncFunction(t.uniforms, e, i), !0;
        }
        updateUniformGroup(t) {
            if (t.isStatic && !t._dirtyId) return !1;
            t._dirtyId = 0;
            const e = this.syncUniformGroup(t);
            return t.buffer.update(), e;
        }
        destroy() {
            this._syncFunctionHash = null;
        }
    }
    const Na = {
        f32: 4,
        "vec2<f32>": 8,
        "vec3<f32>": 12,
        "vec4<f32>": 16,
        "mat2x2<f32>": 32,
        "mat3x3<f32>": 48,
        "mat4x4<f32>": 64
    };
    function ug(r1) {
        const t = r1.map((n)=>({
                data: n,
                offset: 0,
                size: 0
            }));
        let e = 0, i = 0, s = 0;
        for(let n = 0; n < t.length; n++){
            const o = t[n];
            if (e = Na[o.data.type], !e) throw new Error(`Unknown type ${o.data.type}`);
            if (o.data.size > 1 && (e = Math.max(e, 16) * o.data.size), o.size = e, i % e !== 0 && i < 16) {
                const a = i % e % 16;
                i += a, s += a;
            }
            i + e > 16 ? (s = Math.ceil(s / 16) * 16, o.offset = s, s += e, i = e) : (o.offset = s, i += e, s += e);
        }
        return s = Math.ceil(s / 16) * 16, {
            uboElements: t,
            size: s
        };
    }
    const se = [
        {
            type: "mat3x3<f32>",
            test: (r1)=>r1.value.a !== void 0,
            ubo: `
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,
            uniform: ` 
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `
        },
        {
            type: "vec4<f32>",
            test: (r1)=>r1.type === "vec4<f32>" && r1.size === 1 && r1.value.width !== void 0,
            ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,
            uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `
        },
        {
            type: "vec2<f32>",
            test: (r1)=>r1.type === "vec2<f32>" && r1.size === 1 && r1.value.x !== void 0,
            ubo: `
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,
            uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `
        },
        {
            type: "vec4<f32>",
            test: (r1)=>r1.type === "vec4<f32>" && r1.size === 1 && r1.value.red !== void 0,
            ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,
            uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `
        },
        {
            type: "vec3<f32>",
            test: (r1)=>r1.type === "vec3<f32>" && r1.size === 1 && r1.value.red !== void 0,
            ubo: `
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,
            uniform: `
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `
        }
    ];
    function Ha(r1, t, e, i) {
        const s = [
            `
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `
        ];
        let n = 0;
        for(let a = 0; a < r1.length; a++){
            const l = r1[a], u = l.data.name;
            let c = !1, h = 0;
            for(let p = 0; p < se.length; p++)if (se[p].test(l.data)) {
                h = l.offset / 4, s.push(`name = "${u}";`, `offset += ${h - n};`, se[p][t] || se[p].ubo), c = !0;
                break;
            }
            if (!c) {
                if (l.data.size > 1) h = l.offset / 4, s.push(e(l, h - n));
                else {
                    const p = i[l.data.type];
                    h = l.offset / 4, s.push(`
                    v = uv.${u};
                    offset += ${h - n};
                    ${p};
                `);
                }
            }
            n = h;
        }
        const o = s.join(`
`);
        return new Function("uv", "data", "offset", o);
    }
    var YS = Object.defineProperty, KS = Object.defineProperties, qS = Object.getOwnPropertyDescriptors, cg = Object.getOwnPropertySymbols, ZS = Object.prototype.hasOwnProperty, QS = Object.prototype.propertyIsEnumerable, hg = (r1, t, e)=>t in r1 ? YS(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, JS = (r1, t)=>{
        for(var e in t || (t = {}))ZS.call(t, e) && hg(r1, e, t[e]);
        if (cg) for (var e of cg(t))QS.call(t, e) && hg(r1, e, t[e]);
        return r1;
    }, t2 = (r1, t)=>KS(r1, qS(t));
    function Ke(r1, t) {
        return `
        for (let i = 0; i < ${r1 * t}; i++) {
            data[offset + (((i / ${r1})|0) * 4) + (i % ${r1})] = v[i];
        }
    `;
    }
    const Xa = {
        f32: `
        data[offset] = v;`,
        i32: `
        data[offset] = v;`,
        "vec2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];`,
        "vec3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,
        "vec4<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,
        "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,
        "mat3x3<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,
        "mat4x4<f32>": `
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,
        "mat3x2<f32>": Ke(3, 2),
        "mat4x2<f32>": Ke(4, 2),
        "mat2x3<f32>": Ke(2, 3),
        "mat4x3<f32>": Ke(4, 3),
        "mat2x4<f32>": Ke(2, 4),
        "mat3x4<f32>": Ke(3, 4)
    }, dg = t2(JS({}, Xa), {
        "mat2x2<f32>": `
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `
    });
    function pg(r1, t) {
        const e = Math.max(Na[r1.data.type] / 16, 1), i = r1.data.value.length / r1.data.size, s = (4 - i % 4) % 4;
        return `
        v = uv.${r1.data.name};
        offset += ${t};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${r1.data.size * e}; i++)
        {
            for(var j = 0; j < ${i}; j++)
            {
                data[arrayOffset++] = v[t++];
            }
            ${s !== 0 ? `arrayOffset += ${s};` : ""}
        }
    `;
    }
    function fg(r1) {
        return Ha(r1, "uboStd40", pg, Xa);
    }
    class za extends $a {
        constructor(){
            super({
                createUboElements: ug,
                generateUboSync: fg
            });
        }
    }
    za.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "ubo"
    };
    class mg {
        constructor(){
            this._clearColorCache = [
                0,
                0,
                0,
                0
            ], this._viewPortCache = new j;
        }
        init(t, e) {
            this._renderer = t, this._renderTargetSystem = e, t.runners.contextChange.add(this);
        }
        contextChange() {
            this._clearColorCache = [
                0,
                0,
                0,
                0
            ], this._viewPortCache = new j;
        }
        copyToTexture(t, e, i, s, n) {
            const o = this._renderTargetSystem, a = this._renderer, l = o.getGpuRenderTarget(t), u = a.gl;
            return this.finishRenderPass(t), u.bindFramebuffer(u.FRAMEBUFFER, l.resolveTargetFramebuffer), a.texture.bind(e, 0), u.copyTexSubImage2D(u.TEXTURE_2D, 0, n.x, n.y, i.x, i.y, s.width, s.height), e;
        }
        startRenderPass(t, e = !0, i, s) {
            const n = this._renderTargetSystem, o = t.colorTexture, a = n.getGpuRenderTarget(t);
            let l = s.y;
            t.isRoot && (l = o.pixelHeight - s.height), t.colorTextures.forEach((h)=>{
                this._renderer.texture.unbind(h);
            });
            const u = this._renderer.gl;
            u.bindFramebuffer(u.FRAMEBUFFER, a.framebuffer);
            const c = this._viewPortCache;
            (c.x !== s.x || c.y !== l || c.width !== s.width || c.height !== s.height) && (c.x = s.x, c.y = l, c.width = s.width, c.height = s.height, u.viewport(s.x, l, s.width, s.height)), !a.depthStencilRenderBuffer && (t.stencil || t.depth) && this._initStencil(a), this.clear(t, e, i);
        }
        finishRenderPass(t) {
            const e = this._renderTargetSystem.getGpuRenderTarget(t);
            if (!e.msaa) return;
            const i = this._renderer.gl;
            i.bindFramebuffer(i.FRAMEBUFFER, e.resolveTargetFramebuffer), i.bindFramebuffer(i.READ_FRAMEBUFFER, e.framebuffer), i.blitFramebuffer(0, 0, e.width, e.height, 0, 0, e.width, e.height, i.COLOR_BUFFER_BIT, i.NEAREST), i.bindFramebuffer(i.FRAMEBUFFER, e.framebuffer);
        }
        initGpuRenderTarget(t) {
            const e = this._renderer.gl, i = new lg;
            return Qt.test(t.colorTexture.resource) ? (i.framebuffer = null, i) : (this._initColor(t, i), e.bindFramebuffer(e.FRAMEBUFFER, null), i);
        }
        clear(t, e, i) {
            if (!e) return;
            const s = this._renderTargetSystem;
            typeof e == "boolean" && (e = e ? ft.ALL : ft.NONE);
            const n = this._renderer.gl;
            if (e & ft.COLOR) {
                i != null || (i = s.defaultClearColor);
                const o = this._clearColorCache, a = i;
                (o[0] !== a[0] || o[1] !== a[1] || o[2] !== a[2] || o[3] !== a[3]) && (o[0] = a[0], o[1] = a[1], o[2] = a[2], o[3] = a[3], n.clearColor(a[0], a[1], a[2], a[3]));
            }
            n.clear(e);
        }
        resizeGpuRenderTarget(t) {
            if (t.isRoot) return;
            const e = this._renderTargetSystem.getGpuRenderTarget(t);
            this._resizeColor(t, e), t.stencil && this._resizeStencil(e);
        }
        _initColor(t, e) {
            const i = this._renderer, s = i.gl, n = s.createFramebuffer();
            if (e.resolveTargetFramebuffer = n, s.bindFramebuffer(s.FRAMEBUFFER, n), e.width = t.colorTexture.source.pixelWidth, e.height = t.colorTexture.source.pixelHeight, t.colorTextures.forEach((o, a)=>{
                const l = o.source;
                l.antialias && (i.context.supports.msaa ? e.msaa = !0 : vs("[RenderTexture] Antialiasing on textures is not supported in WebGL1")), i.texture.bindSource(l, 0);
                const u = i.texture.getGlSource(l).texture;
                s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + a, 3553, u, 0);
            }), e.msaa) {
                const o = s.createFramebuffer();
                e.framebuffer = o, s.bindFramebuffer(s.FRAMEBUFFER, o), t.colorTextures.forEach((a, l)=>{
                    const u = s.createRenderbuffer();
                    e.msaaRenderBuffer[l] = u;
                });
            } else e.framebuffer = n;
            this._resizeColor(t, e);
        }
        _resizeColor(t, e) {
            const i = t.colorTexture.source;
            if (e.width = i.pixelWidth, e.height = i.pixelHeight, t.colorTextures.forEach((s, n)=>{
                n !== 0 && s.source.resize(i.width, i.height, i._resolution);
            }), e.msaa) {
                const s = this._renderer, n = s.gl, o = e.framebuffer;
                n.bindFramebuffer(n.FRAMEBUFFER, o), t.colorTextures.forEach((a, l)=>{
                    const u = a.source;
                    s.texture.bindSource(u, 0);
                    const c = s.texture.getGlSource(u).internalFormat, h = e.msaaRenderBuffer[l];
                    n.bindRenderbuffer(n.RENDERBUFFER, h), n.renderbufferStorageMultisample(n.RENDERBUFFER, 4, c, u.pixelWidth, u.pixelHeight), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + l, n.RENDERBUFFER, h);
                });
            }
        }
        _initStencil(t) {
            if (t.framebuffer === null) return;
            const e = this._renderer.gl, i = e.createRenderbuffer();
            t.depthStencilRenderBuffer = i, e.bindRenderbuffer(e.RENDERBUFFER, i), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, i), this._resizeStencil(t);
        }
        _resizeStencil(t) {
            const e = this._renderer.gl;
            e.bindRenderbuffer(e.RENDERBUFFER, t.depthStencilRenderBuffer), t.msaa ? e.renderbufferStorageMultisample(e.RENDERBUFFER, 4, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, this._renderer.context.webGLVersion === 2 ? e.DEPTH24_STENCIL8 : e.DEPTH_STENCIL, t.width, t.height);
        }
    }
    function gg(r1, t, e, i, s, n) {
        const o = n ? 1 : -1;
        return r1.identity(), r1.a = 1 / i * 2, r1.d = o * (1 / s * 2), r1.tx = -1 - t * r1.a, r1.ty = -o - e * r1.d, r1;
    }
    var e2 = Object.defineProperty, _g = Object.getOwnPropertySymbols, r21 = Object.prototype.hasOwnProperty, i2 = Object.prototype.propertyIsEnumerable, bg = (r1, t, e)=>t in r1 ? e2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, s2 = (r1, t)=>{
        for(var e in t || (t = {}))r21.call(t, e) && bg(r1, e, t[e]);
        if (_g) for (var e of _g(t))i2.call(t, e) && bg(r1, e, t[e]);
        return r1;
    };
    const qe = new Map;
    function ja(r1, t) {
        if (!qe.has(r1)) {
            const e = new P({
                source: new Qt(s2({
                    resource: r1
                }, t))
            }), i = ()=>{
                qe.get(r1) === e && qe.delete(r1);
            };
            e.once("destroy", i), e.source.once("destroy", i), qe.set(r1, e);
        }
        return qe.get(r1);
    }
    function n2(r1) {
        return qe.has(r1);
    }
    function vg(r1) {
        const t = r1.colorTexture.source.resource;
        return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement && document.body.contains(t);
    }
    var o2 = Object.defineProperty, yg = Object.getOwnPropertySymbols, a2 = Object.prototype.hasOwnProperty, l2 = Object.prototype.propertyIsEnumerable, xg = (r1, t, e)=>t in r1 ? o2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Tg = (r1, t)=>{
        for(var e in t || (t = {}))a2.call(t, e) && xg(r1, e, t[e]);
        if (yg) for (var e of yg(t))l2.call(t, e) && xg(r1, e, t[e]);
        return r1;
    };
    const Sg = class kb {
        constructor(t = {}){
            if (this.uid = Q("renderTarget"), this.colorTextures = [], this.dirtyId = 0, this.isRoot = !1, this._size = new Float32Array(2), t = Tg(Tg({}, kb.defaultOptions), t), this.stencil = t.stencil, this.depth = t.depth, this.isRoot = t.isRoot, typeof t.colorTextures == "number") for(let e = 0; e < t.colorTextures; e++)this.colorTextures.push(new rt({
                width: t.width,
                height: t.height,
                resolution: t.resolution,
                antialias: t.antialias
            }));
            else {
                this.colorTextures = [
                    ...t.colorTextures.map((i)=>i.source)
                ];
                const e = this.colorTexture.source;
                this.resize(e.width, e.height, e._resolution);
            }
            this.colorTexture.source.on("resize", this.onSourceResize, this), (t.depthStencilTexture || this.stencil) && (t.depthStencilTexture instanceof P || t.depthStencilTexture instanceof rt ? this.depthStencilTexture = t.depthStencilTexture.source : this.ensureDepthStencilTexture());
        }
        get size() {
            const t = this._size;
            return t[0] = this.pixelWidth, t[1] = this.pixelHeight, t;
        }
        get width() {
            return this.colorTexture.source.width;
        }
        get height() {
            return this.colorTexture.source.height;
        }
        get pixelWidth() {
            return this.colorTexture.source.pixelWidth;
        }
        get pixelHeight() {
            return this.colorTexture.source.pixelHeight;
        }
        get resolution() {
            return this.colorTexture.source._resolution;
        }
        get colorTexture() {
            return this.colorTextures[0];
        }
        onSourceResize(t) {
            this.resize(t.width, t.height, t._resolution, !0);
        }
        ensureDepthStencilTexture() {
            this.depthStencilTexture || (this.depthStencilTexture = new rt({
                width: this.width,
                height: this.height,
                resolution: this.resolution,
                format: "depth24plus-stencil8",
                autoGenerateMipmaps: !1,
                antialias: !1,
                mipLevelCount: 1
            }));
        }
        resize(t, e, i = this.resolution, s = !1) {
            this.dirtyId++, this.colorTextures.forEach((n, o)=>{
                s && o === 0 || n.source.resize(t, e, i);
            }), this.depthStencilTexture && this.depthStencilTexture.source.resize(t, e, i);
        }
        destroy() {
            this.colorTexture.source.off("resize", this.onSourceResize, this), this.depthStencilTexture && (this.depthStencilTexture.destroy(), delete this.depthStencilTexture);
        }
    };
    Sg.defaultOptions = {
        width: 0,
        height: 0,
        resolution: 1,
        colorTextures: 1,
        stencil: !1,
        depth: !1,
        antialias: !1,
        isRoot: !1
    };
    let xs = Sg;
    class Va {
        constructor(t){
            this.rootViewPort = new j, this.viewport = new j, this.onRenderTargetChange = new Ko("onRenderTargetChange"), this.projectionMatrix = new B, this.defaultClearColor = [
                0,
                0,
                0,
                0
            ], this._renderSurfaceToRenderTargetHash = new Map, this._gpuRenderTargetHash = Object.create(null), this._renderTargetStack = [], this._renderer = t;
        }
        finishRenderPass() {
            this.adaptor.finishRenderPass(this.renderTarget);
        }
        renderStart({ target: t, clear: e, clearColor: i, frame: s }) {
            this._renderTargetStack.length = 0, this.push(t, e, i, s), this.rootViewPort.copyFrom(this.viewport), this.rootRenderTarget = this.renderTarget, this.renderingToScreen = vg(this.rootRenderTarget);
        }
        bind(t, e = !0, i, s) {
            const n = this.getRenderTarget(t), o = this.renderTarget !== n;
            this.renderTarget = n, this.renderSurface = t;
            const a = this.getGpuRenderTarget(n);
            (n.pixelWidth !== a.width || n.pixelHeight !== a.height) && (this.adaptor.resizeGpuRenderTarget(n), a.width = n.pixelWidth, a.height = n.pixelHeight);
            const l = n.colorTexture, u = this.viewport, c = l.pixelWidth, h = l.pixelHeight;
            if (!s && t instanceof P && (s = t.frame), s) {
                const p = l._resolution;
                u.x = s.x * p + .5 | 0, u.y = s.y * p + .5 | 0, u.width = s.width * p + .5 | 0, u.height = s.height * p + .5 | 0;
            } else u.x = 0, u.y = 0, u.width = c, u.height = h;
            return gg(this.projectionMatrix, 0, 0, u.width / l.resolution, u.height / l.resolution, !n.isRoot), this.adaptor.startRenderPass(n, e, i, u), o && this.onRenderTargetChange.emit(n), n;
        }
        clear(t, e = ft.ALL, i) {
            e && (t && (t = this.getRenderTarget(t)), this.adaptor.clear(t || this.renderTarget, e, i, this.viewport));
        }
        contextChange() {
            this._gpuRenderTargetHash = Object.create(null);
        }
        push(t, e = ft.ALL, i, s) {
            const n = this.bind(t, e, i, s);
            return this._renderTargetStack.push({
                renderTarget: n,
                frame: s
            }), n;
        }
        pop() {
            this._renderTargetStack.pop();
            const t = this._renderTargetStack[this._renderTargetStack.length - 1];
            this.bind(t.renderTarget, !1, null, t.frame);
        }
        getRenderTarget(t) {
            var e;
            return t.isTexture && (t = t.source), (e = this._renderSurfaceToRenderTargetHash.get(t)) != null ? e : this._initRenderTarget(t);
        }
        copyToTexture(t, e, i, s, n) {
            i.x < 0 && (s.width += i.x, n.x -= i.x, i.x = 0), i.y < 0 && (s.height += i.y, n.y -= i.y, i.y = 0);
            const { pixelWidth: o, pixelHeight: a } = t;
            return s.width = Math.min(s.width, o - i.x), s.height = Math.min(s.height, a - i.y), this.adaptor.copyToTexture(t, e, i, s, n);
        }
        ensureDepthStencil() {
            this.renderTarget.stencil || (this.renderTarget.stencil = !0, this.adaptor.startRenderPass(this.renderTarget, !1, null, this.viewport));
        }
        destroy() {
            this._renderer = null, this._renderSurfaceToRenderTargetHash.forEach((t, e)=>{
                t !== e && t.destroy();
            }), this._renderSurfaceToRenderTargetHash.clear(), this._gpuRenderTargetHash = Object.create(null);
        }
        _initRenderTarget(t) {
            let e = null;
            return Qt.test(t) && (t = ja(t)), t instanceof xs ? e = t : t instanceof rt && (e = new xs({
                colorTextures: [
                    t
                ]
            }), Qt.test(t.source.resource) && (e.isRoot = !0), t.on("destroy", ()=>{
                e.destroy();
            })), this._renderSurfaceToRenderTargetHash.set(t, e), e;
        }
        getGpuRenderTarget(t) {
            return this._gpuRenderTargetHash[t.uid] || (this._gpuRenderTargetHash[t.uid] = this.adaptor.initGpuRenderTarget(t));
        }
    }
    class Wa extends Va {
        constructor(t){
            super(t), this.adaptor = new mg, this.adaptor.init(t, this);
        }
    }
    Wa.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "renderTarget"
    };
    class Ts extends dt {
        constructor({ buffer: t, offset: e, size: i }){
            super(), this.uid = Q("buffer"), this._resourceType = "bufferResource", this._touched = 0, this._resourceId = Q("resource"), this._bufferResource = !0, this.buffer = t, this.offset = e | 0, this.size = i, this.buffer.on("change", this.onBufferChange, this);
        }
        onBufferChange() {
            this._resourceId = Q("resource"), this.emit("change", this);
        }
        destroy(t = !1) {
            t && this.buffer.destroy(), this.buffer = null;
        }
    }
    function Eg(r1, t) {
        const e = [], i = [
            `
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `
        ];
        let s = !1, n = 0, o = 0;
        const a = t._getProgramData(r1.glProgram);
        for(const u in r1.groups){
            const c = r1.groups[u];
            e.push(`
            resources = g[${u}].resources;
        `);
            for(const h in c.resources){
                const p = c.resources[h];
                if (p instanceof nt) p.ubo ? e.push(`
                        sS.bindUniformBlock(
                            resources[${h}],
                            sS._uniformBindMap[${u}[${h}],
                            ${n++}
                        );
                    `) : e.push(`
                        ugS.updateUniformGroup(resources[${h}], p, sD);
                    `);
                else if (p instanceof Ts) e.push(`
                    sS.bindUniformBlock(
                        resources[${h}],
                        sS._uniformBindMap[${u}[${h}],
                        ${n++}
                    );
                `);
                else if (p instanceof rt) {
                    const f = r1._uniformBindMap[u][h], m = a.uniformData[f];
                    m && (s || (s = !0, i.push(`
                        var tS = r.texture;
                        `)), t._gl.uniform1i(m.location, o), e.push(`
                        tS.bind(resources[${h}], ${o});
                    `), o++);
                }
            }
        }
        const l = [
            ...i,
            ...e
        ].join(`
`);
        return new Function("r", "s", "sD", l);
    }
    class u2 {
    }
    class Ag {
        constructor(t, e){
            this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBlockBindings = {};
        }
        destroy() {
            this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBlockBindings = null, this.program = null;
        }
    }
    function Ya(r1, t, e) {
        const i = r1.createShader(t);
        return r1.shaderSource(i, e), r1.compileShader(i), i;
    }
    function Ka(r1) {
        const t = new Array(r1);
        for(let e = 0; e < t.length; e++)t[e] = !1;
        return t;
    }
    function qa(r1, t) {
        switch(r1){
            case "float":
                return 0;
            case "vec2":
                return new Float32Array(2 * t);
            case "vec3":
                return new Float32Array(3 * t);
            case "vec4":
                return new Float32Array(4 * t);
            case "int":
            case "uint":
            case "sampler2D":
            case "sampler2DArray":
                return 0;
            case "ivec2":
                return new Int32Array(2 * t);
            case "ivec3":
                return new Int32Array(3 * t);
            case "ivec4":
                return new Int32Array(4 * t);
            case "uvec2":
                return new Uint32Array(2 * t);
            case "uvec3":
                return new Uint32Array(3 * t);
            case "uvec4":
                return new Uint32Array(4 * t);
            case "bool":
                return !1;
            case "bvec2":
                return Ka(2 * t);
            case "bvec3":
                return Ka(3 * t);
            case "bvec4":
                return Ka(4 * t);
            case "mat2":
                return new Float32Array([
                    1,
                    0,
                    0,
                    1
                ]);
            case "mat3":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                ]);
            case "mat4":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]);
        }
        return null;
    }
    let Ss = null;
    const Pg = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        UNSIGNED_INT: "uint",
        UNSIGNED_INT_VEC2: "uvec2",
        UNSIGNED_INT_VEC3: "uvec3",
        UNSIGNED_INT_VEC4: "uvec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D",
        INT_SAMPLER_2D: "sampler2D",
        UNSIGNED_INT_SAMPLER_2D: "sampler2D",
        SAMPLER_CUBE: "samplerCube",
        INT_SAMPLER_CUBE: "samplerCube",
        UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
        SAMPLER_2D_ARRAY: "sampler2DArray",
        INT_SAMPLER_2D_ARRAY: "sampler2DArray",
        UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
    }, c2 = {
        float: "float32",
        vec2: "float32x2",
        vec3: "float32x3",
        vec4: "float32x4",
        int: "sint32",
        ivec2: "sint32x2",
        ivec3: "sint32x3",
        ivec4: "sint32x4",
        uint: "uint32",
        uvec2: "uint32x2",
        uvec3: "uint32x3",
        uvec4: "uint32x4",
        bool: "uint32",
        bvec2: "uint32x2",
        bvec3: "uint32x3",
        bvec4: "uint32x4"
    };
    function Za(r1, t) {
        if (!Ss) {
            const e = Object.keys(Pg);
            Ss = {};
            for(let i = 0; i < e.length; ++i){
                const s = e[i];
                Ss[r1[s]] = Pg[s];
            }
        }
        return Ss[t];
    }
    function Rg(r1, t) {
        const e = Za(r1, t);
        return c2[e] || "float32";
    }
    function wg(r1, t, e = !1) {
        const i = {}, s = t.getProgramParameter(r1, t.ACTIVE_ATTRIBUTES);
        for(let o = 0; o < s; o++){
            const a = t.getActiveAttrib(r1, o);
            if (a.name.startsWith("gl_")) continue;
            const l = Rg(t, a.type);
            i[a.name] = {
                location: 0,
                format: l,
                stride: ke(l).stride,
                offset: 0,
                instance: !1,
                start: 0
            };
        }
        const n = Object.keys(i);
        if (e) {
            n.sort((o, a)=>o > a ? 1 : -1);
            for(let o = 0; o < n.length; o++)i[n[o]].location = o, t.bindAttribLocation(r1, o, n[o]);
            t.linkProgram(r1);
        } else for(let o = 0; o < n.length; o++)i[n[o]].location = t.getAttribLocation(r1, n[o]);
        return i;
    }
    function Mg(r1, t) {
        if (!t.ACTIVE_UNIFORM_BLOCKS) return {};
        const e = {}, i = t.getProgramParameter(r1, t.ACTIVE_UNIFORM_BLOCKS);
        for(let s = 0; s < i; s++){
            const n = t.getActiveUniformBlockName(r1, s), o = t.getUniformBlockIndex(r1, n), a = t.getActiveUniformBlockParameter(r1, s, t.UNIFORM_BLOCK_DATA_SIZE);
            e[n] = {
                name: n,
                index: o,
                size: a
            };
        }
        return e;
    }
    function Cg(r1, t) {
        const e = {}, i = t.getProgramParameter(r1, t.ACTIVE_UNIFORMS);
        for(let s = 0; s < i; s++){
            const n = t.getActiveUniform(r1, s), o = n.name.replace(/\[.*?\]$/, ""), a = !!n.name.match(/\[.*?\]$/), l = Za(t, n.type);
            e[o] = {
                name: o,
                index: s,
                type: l,
                size: n.size,
                isArray: a,
                value: qa(l, n.size)
            };
        }
        return e;
    }
    function Og(r1, t) {
        const e = r1.getShaderSource(t).split(`
`).map((u, c)=>`${c}: ${u}`), i = r1.getShaderInfoLog(t), s = i.split(`
`), n = {}, o = s.map((u)=>parseFloat(u.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((u)=>u && !n[u] ? (n[u] = !0, !0) : !1), a = [
            ""
        ];
        o.forEach((u)=>{
            e[u - 1] = `%c${e[u - 1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
        });
        const l = e.join(`
`);
        a[0] = l, console.error(i), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd();
    }
    function Gg(r1, t, e, i) {
        r1.getProgramParameter(t, r1.LINK_STATUS) || (r1.getShaderParameter(e, r1.COMPILE_STATUS) || Og(r1, e), r1.getShaderParameter(i, r1.COMPILE_STATUS) || Og(r1, i), console.error("PixiJS Error: Could not initialize shader."), r1.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", r1.getProgramInfoLog(t)));
    }
    function Bg(r1, t) {
        const e = Ya(r1, r1.VERTEX_SHADER, t.vertex), i = Ya(r1, r1.FRAGMENT_SHADER, t.fragment), s = r1.createProgram();
        r1.attachShader(s, e), r1.attachShader(s, i);
        const n = t.transformFeedbackVaryings;
        n && (typeof r1.transformFeedbackVaryings != "function" || r1.transformFeedbackVaryings(s, n.names, n.bufferMode === "separate" ? r1.SEPARATE_ATTRIBS : r1.INTERLEAVED_ATTRIBS)), r1.linkProgram(s), r1.getProgramParameter(s, r1.LINK_STATUS) || Gg(r1, s, e, i), t._attributeData = wg(s, r1, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex)), t._uniformData = Cg(s, r1), t._uniformBlockData = Mg(s, r1), r1.deleteShader(e), r1.deleteShader(i);
        const o = {};
        for(const a in t._uniformData){
            const l = t._uniformData[a];
            o[a] = {
                location: r1.getUniformLocation(s, a),
                value: qa(l.type, l.size)
            };
        }
        return new Ag(s, o);
    }
    const Es = {
        textureCount: 0,
        blockIndex: 0
    };
    class Qa {
        constructor(t){
            this._activeProgram = null, this._programDataHash = Object.create(null), this._nextIndex = 0, this._boundUniformsIdsToIndexHash = Object.create(null), this._boundIndexToUniformsHash = Object.create(null), this._shaderSyncFunctions = Object.create(null), this._renderer = t;
        }
        contextChange(t) {
            this._gl = t, this._maxBindings = t.MAX_UNIFORM_BUFFER_BINDINGS ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS) : 0, this._programDataHash = Object.create(null), this._boundUniformsIdsToIndexHash = Object.create(null), this._boundIndexToUniformsHash = Object.create(null), this._activeProgram = null;
        }
        bind(t, e) {
            if (this._setProgram(t.glProgram), e) return;
            Es.textureCount = 0, Es.blockIndex = 0;
            let i = this._shaderSyncFunctions[t.glProgram._key];
            i || (i = this._shaderSyncFunctions[t.glProgram._key] = this._generateShaderSync(t, this)), i(this._renderer, t, Es);
        }
        updateUniformGroup(t) {
            this._renderer.uniformGroup.updateUniformGroup(t, this._activeProgram, Es);
        }
        bindUniformBlock(t, e, i = 0) {
            const s = this._renderer.buffer, n = this._getProgramData(this._activeProgram), o = t._bufferResource;
            o && this._renderer.ubo.updateUniformGroup(t), s.updateBuffer(t.buffer);
            let a = this._boundUniformsIdsToIndexHash[t.uid];
            if (a === void 0) {
                const c = this._nextIndex++ % this._maxBindings, h = this._boundIndexToUniformsHash[c];
                h && (this._boundUniformsIdsToIndexHash[h.uid] = void 0), a = this._boundUniformsIdsToIndexHash[t.uid] = c, this._boundIndexToUniformsHash[c] = t, o ? s.bindBufferRange(t.buffer, c, t.offset) : s.bindBufferBase(t.buffer, c);
            }
            const l = this._gl, u = this._activeProgram._uniformBlockData[e].index;
            n.uniformBlockBindings[i] !== a && (n.uniformBlockBindings[i] = a, l.uniformBlockBinding(n.program, u, a));
        }
        _setProgram(t) {
            if (this._activeProgram === t) return;
            this._activeProgram = t;
            const e = this._getProgramData(t);
            this._gl.useProgram(e.program);
        }
        _getProgramData(t) {
            return this._programDataHash[t._key] || this._createProgramData(t);
        }
        _createProgramData(t) {
            const e = t._key;
            return this._programDataHash[e] = Bg(this._gl, t), this._programDataHash[e];
        }
        destroy() {
            for (const t of Object.keys(this._programDataHash))this._programDataHash[t].destroy(), this._programDataHash[t] = null;
            this._programDataHash = null, this._boundUniformsIdsToIndexHash = null;
        }
        _generateShaderSync(t, e) {
            return Eg(t, e);
        }
    }
    Qa.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "shader"
    };
    const Ig = {
        f32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,
        "vec2<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,
        "vec3<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,
        "vec4<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,
        i32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,
        "vec2<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,
        "vec3<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,
        "vec4<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,
        u32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,
        "vec2<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,
        "vec3<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,
        "vec4<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,
        bool: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,
        "vec2<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,
        "vec3<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,
        "vec4<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,
        "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
        "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
        "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);"
    }, Fg = {
        f32: "gl.uniform1fv(location, v);",
        "vec2<f32>": "gl.uniform2fv(location, v);",
        "vec3<f32>": "gl.uniform3fv(location, v);",
        "vec4<f32>": "gl.uniform4fv(location, v);",
        "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
        "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
        "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
        i32: "gl.uniform1iv(location, v);",
        "vec2<i32>": "gl.uniform2iv(location, v);",
        "vec3<i32>": "gl.uniform3iv(location, v);",
        "vec4<i32>": "gl.uniform4iv(location, v);",
        u32: "gl.uniform1iv(location, v);",
        "vec2<u32>": "gl.uniform2iv(location, v);",
        "vec3<u32>": "gl.uniform3iv(location, v);",
        "vec4<u32>": "gl.uniform4iv(location, v);",
        bool: "gl.uniform1iv(location, v);",
        "vec2<bool>": "gl.uniform2iv(location, v);",
        "vec3<bool>": "gl.uniform3iv(location, v);",
        "vec4<bool>": "gl.uniform4iv(location, v);"
    };
    function Dg(r1, t) {
        const e = [
            `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `
        ];
        for(const i in r1.uniforms){
            if (!t[i]) {
                r1.uniforms[i] instanceof nt ? r1.uniforms[i].ubo ? e.push(`
                        renderer.shader.bindUniformBlock(uv.${i}, "${i}");
                    `) : e.push(`
                        renderer.shader.updateUniformGroup(uv.${i});
                    `) : r1.uniforms[i] instanceof Ts && e.push(`
                        renderer.shader.bindBufferResource(uv.${i}, "${i}");
                    `);
                continue;
            }
            const s = r1.uniformStructures[i];
            let n = !1;
            for(let o = 0; o < se.length; o++){
                const a = se[o];
                if (s.type === a.type && a.test(s)) {
                    e.push(`name = "${i}";`, se[o].uniform), n = !0;
                    break;
                }
            }
            if (!n) {
                const o = (s.size === 1 ? Ig : Fg)[s.type].replace("location", `ud["${i}"].location`);
                e.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${o};`);
            }
        }
        return new Function("ud", "uv", "renderer", "syncData", e.join(`
`));
    }
    class Ja {
        constructor(t){
            this._cache = {}, this._uniformGroupSyncHash = {}, this._renderer = t, this.gl = null, this._cache = {};
        }
        contextChange(t) {
            this.gl = t;
        }
        updateUniformGroup(t, e, i) {
            const s = this._renderer.shader._getProgramData(e);
            (!t.isStatic || t._dirtyId !== s.uniformDirtyGroups[t.uid]) && (s.uniformDirtyGroups[t.uid] = t._dirtyId, this._getUniformSyncFunction(t, e)(s.uniformData, t.uniforms, this._renderer, i));
        }
        _getUniformSyncFunction(t, e) {
            var i;
            return ((i = this._uniformGroupSyncHash[t._signature]) == null ? void 0 : i[e._key]) || this._createUniformSyncFunction(t, e);
        }
        _createUniformSyncFunction(t, e) {
            const i = this._uniformGroupSyncHash[t._signature] || (this._uniformGroupSyncHash[t._signature] = {}), s = this._getSignature(t, e._uniformData, "u");
            return this._cache[s] || (this._cache[s] = this._generateUniformsSync(t, e._uniformData)), i[e._key] = this._cache[s], i[e._key];
        }
        _generateUniformsSync(t, e) {
            return Dg(t, e);
        }
        _getSignature(t, e, i) {
            const s = t.uniforms, n = [
                `${i}-`
            ];
            for(const o in s)n.push(o), e[o] && n.push(e[o].type);
            return n.join("-");
        }
        destroy() {
            this._renderer = null, this._cache = null;
        }
    }
    Ja.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "uniformGroup"
    };
    function h2(r1) {
        return r1 = r1.replaceAll("texture2D", "texture").replaceAll("gl_FragColor", "finalColor").replaceAll("varying", "in"), r1 = `
        out vec4 finalColor;
    ${r1}
    `, r1;
    }
    const d2 = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        uint: 1,
        uvec2: 2,
        uvec3: 3,
        uvec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };
    function p2(r1) {
        return d2[r1];
    }
    function Ug(r1) {
        const t = {};
        return t.normal = [
            r1.ONE,
            r1.ONE_MINUS_SRC_ALPHA
        ], t.add = [
            r1.ONE,
            r1.ONE
        ], t.multiply = [
            r1.DST_COLOR,
            r1.ONE_MINUS_SRC_ALPHA,
            r1.ONE,
            r1.ONE_MINUS_SRC_ALPHA
        ], t.screen = [
            r1.ONE,
            r1.ONE_MINUS_SRC_COLOR,
            r1.ONE,
            r1.ONE_MINUS_SRC_ALPHA
        ], t.none = [
            0,
            0
        ], t["normal-npm"] = [
            r1.SRC_ALPHA,
            r1.ONE_MINUS_SRC_ALPHA,
            r1.ONE,
            r1.ONE_MINUS_SRC_ALPHA
        ], t["add-npm"] = [
            r1.SRC_ALPHA,
            r1.ONE,
            r1.ONE,
            r1.ONE
        ], t["screen-npm"] = [
            r1.SRC_ALPHA,
            r1.ONE_MINUS_SRC_COLOR,
            r1.ONE,
            r1.ONE_MINUS_SRC_ALPHA
        ], t.erase = [
            r1.ZERO,
            r1.ONE_MINUS_SRC_ALPHA
        ], t;
    }
    const f2 = 0, m2 = 1, g2 = 2, _2 = 3, b2 = 4, v2 = 5, kg = class Jl {
        constructor(){
            this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = "none", this._blendEq = !1, this.map = [], this.map[f2] = this.setBlend, this.map[m2] = this.setOffset, this.map[g2] = this.setCullFace, this.map[_2] = this.setDepthTest, this.map[b2] = this.setFrontFace, this.map[v2] = this.setDepthMask, this.checks = [], this.defaultState = Bt.for2d();
        }
        contextChange(t) {
            this.gl = t, this.blendModesMap = Ug(t), this.reset();
        }
        set(t) {
            if (t = t || this.defaultState, this.stateId !== t.data) {
                let e = this.stateId ^ t.data, i = 0;
                for(; e;)e & 1 && this.map[i].call(this, !!(t.data & 1 << i)), e = e >> 1, i++;
                this.stateId = t.data;
            }
            for(let e = 0; e < this.checks.length; e++)this.checks[e](this, t);
        }
        forceState(t) {
            t = t || this.defaultState;
            for(let e = 0; e < this.map.length; e++)this.map[e].call(this, !!(t.data & 1 << e));
            for(let e = 0; e < this.checks.length; e++)this.checks[e](this, t);
            this.stateId = t.data;
        }
        setBlend(t) {
            this._updateCheck(Jl._checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND);
        }
        setOffset(t) {
            this._updateCheck(Jl._checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
        }
        setDepthTest(t) {
            this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
        }
        setDepthMask(t) {
            this.gl.depthMask(t);
        }
        setCullFace(t) {
            this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
        }
        setFrontFace(t) {
            this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
        }
        setBlendMode(t) {
            if (this.blendModesMap[t] || (t = "normal"), t === this.blendMode) return;
            this.blendMode = t;
            const e = this.blendModesMap[t], i = this.gl;
            e.length === 2 ? i.blendFunc(e[0], e[1]) : i.blendFuncSeparate(e[0], e[1], e[2], e[3]), e.length === 6 ? (this._blendEq = !0, i.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD));
        }
        setPolygonOffset(t, e) {
            this.gl.polygonOffset(t, e);
        }
        reset() {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = "", this.setBlendMode("normal");
        }
        _updateCheck(t, e) {
            const i = this.checks.indexOf(t);
            e && i === -1 ? this.checks.push(t) : !e && i !== -1 && this.checks.splice(i, 1);
        }
        static _checkBlendMode(t, e) {
            t.setBlendMode(e.blendMode);
        }
        static _checkPolygonOffset(t, e) {
            t.setPolygonOffset(1, e.polygonOffset);
        }
        destroy() {
            this.gl = null, this.checks.length = 0;
        }
    };
    kg.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "state"
    };
    let Lg = kg;
    class $g {
        constructor(t){
            this.target = Ia.TEXTURE_2D, this.texture = t, this.width = -1, this.height = -1, this.type = N.UNSIGNED_BYTE, this.internalFormat = ys.RGBA, this.format = ys.RGBA, this.samplerType = 0;
        }
    }
    const Ng = {
        id: "image",
        upload (r1, t, e) {
            t.width === r1.width || t.height === r1.height ? e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, t.format, t.type, r1.resource) : e.texImage2D(t.target, 0, t.internalFormat, r1.width, r1.height, 0, t.format, t.type, r1.resource), t.width = r1.width, t.height = r1.height;
        }
    }, y2 = {
        "bc1-rgba-unorm": !0,
        "bc1-rgba-unorm-srgb": !0,
        "bc2-rgba-unorm": !0,
        "bc2-rgba-unorm-srgb": !0,
        "bc3-rgba-unorm": !0,
        "bc3-rgba-unorm-srgb": !0,
        "bc4-r-unorm": !0,
        "bc4-r-snorm": !0,
        "bc5-rg-unorm": !0,
        "bc5-rg-snorm": !0,
        "bc6h-rgb-ufloat": !0,
        "bc6h-rgb-float": !0,
        "bc7-rgba-unorm": !0,
        "bc7-rgba-unorm-srgb": !0,
        "etc2-rgb8unorm": !0,
        "etc2-rgb8unorm-srgb": !0,
        "etc2-rgb8a1unorm": !0,
        "etc2-rgb8a1unorm-srgb": !0,
        "etc2-rgba8unorm": !0,
        "etc2-rgba8unorm-srgb": !0,
        "eac-r11unorm": !0,
        "eac-r11snorm": !0,
        "eac-rg11unorm": !0,
        "eac-rg11snorm": !0,
        "astc-4x4-unorm": !0,
        "astc-4x4-unorm-srgb": !0,
        "astc-5x4-unorm": !0,
        "astc-5x4-unorm-srgb": !0,
        "astc-5x5-unorm": !0,
        "astc-5x5-unorm-srgb": !0,
        "astc-6x5-unorm": !0,
        "astc-6x5-unorm-srgb": !0,
        "astc-6x6-unorm": !0,
        "astc-6x6-unorm-srgb": !0,
        "astc-8x5-unorm": !0,
        "astc-8x5-unorm-srgb": !0,
        "astc-8x6-unorm": !0,
        "astc-8x6-unorm-srgb": !0,
        "astc-8x8-unorm": !0,
        "astc-8x8-unorm-srgb": !0,
        "astc-10x5-unorm": !0,
        "astc-10x5-unorm-srgb": !0,
        "astc-10x6-unorm": !0,
        "astc-10x6-unorm-srgb": !0,
        "astc-10x8-unorm": !0,
        "astc-10x8-unorm-srgb": !0,
        "astc-10x10-unorm": !0,
        "astc-10x10-unorm-srgb": !0,
        "astc-12x10-unorm": !0,
        "astc-12x10-unorm-srgb": !0,
        "astc-12x12-unorm": !0,
        "astc-12x12-unorm-srgb": !0
    }, Hg = {
        id: "compressed",
        upload (r1, t, e) {
            e.pixelStorei(e.UNPACK_ALIGNMENT, 4);
            let i = r1.pixelWidth, s = r1.pixelHeight;
            const n = !!y2[r1.format];
            for(let o = 0; o < r1.resource.length; o++){
                const a = r1.resource[o];
                n ? e.compressedTexImage2D(e.TEXTURE_2D, o, t.internalFormat, i, s, 0, a) : e.texImage2D(e.TEXTURE_2D, o, t.internalFormat, i, s, 0, t.format, t.type, a), i = Math.max(i >> 1, 1), s = Math.max(s >> 1, 1);
            }
        }
    }, tl = {
        id: "image",
        upload (r1, t, e, i) {
            const s = r1.alphaMode === "premultiply-alpha-on-upload";
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s);
            const n = t.width, o = t.height, a = r1.pixelWidth, l = r1.pixelHeight, u = r1.resourceWidth, c = r1.resourceHeight;
            u < a || c < l ? ((n !== a || o !== l) && e.texImage2D(t.target, 0, t.internalFormat, a, l, 0, t.format, t.type, null), i === 2 ? e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, u, c, t.format, t.type, r1.resource) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, t.format, t.type, r1.resource)) : n === a || o === l ? e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, t.format, t.type, r1.resource) : i === 2 ? e.texImage2D(t.target, 0, t.internalFormat, a, l, 0, t.format, t.type, r1.resource) : e.texImage2D(t.target, 0, t.internalFormat, t.format, t.type, r1.resource), t.width = a, t.height = l;
        }
    }, Xg = {
        id: "video",
        upload (r1, t, e, i) {
            if (!r1.isValid) {
                e.texImage2D(t.target, 0, t.internalFormat, 1, 1, 0, t.format, t.type, null);
                return;
            }
            tl.upload(r1, t, e, i);
        }
    }, el = {
        linear: 9729,
        nearest: 9728
    }, zg = {
        linear: {
            linear: 9987,
            nearest: 9985
        },
        nearest: {
            linear: 9986,
            nearest: 9984
        }
    }, As = {
        "clamp-to-edge": 33071,
        repeat: 10497,
        "mirror-repeat": 33648
    }, jg = {
        never: 512,
        less: 513,
        equal: 514,
        "less-equal": 515,
        greater: 516,
        "not-equal": 517,
        "greater-equal": 518,
        always: 519
    };
    function rl(r1, t, e, i, s, n, o, a) {
        const l = n;
        if (!a || r1.addressModeU !== "repeat" || r1.addressModeV !== "repeat" || r1.addressModeW !== "repeat") {
            const u = As[o ? "clamp-to-edge" : r1.addressModeU], c = As[o ? "clamp-to-edge" : r1.addressModeV], h = As[o ? "clamp-to-edge" : r1.addressModeW];
            t[s](l, t.TEXTURE_WRAP_S, u), t[s](l, t.TEXTURE_WRAP_T, c), t.TEXTURE_WRAP_R && t[s](l, t.TEXTURE_WRAP_R, h);
        }
        if ((!a || r1.magFilter !== "linear") && t[s](l, t.TEXTURE_MAG_FILTER, el[r1.magFilter]), e) {
            if (!a || r1.mipmapFilter !== "linear") {
                const u = zg[r1.minFilter][r1.mipmapFilter];
                t[s](l, t.TEXTURE_MIN_FILTER, u);
            }
        } else t[s](l, t.TEXTURE_MIN_FILTER, el[r1.minFilter]);
        if (i && r1.maxAnisotropy > 1) {
            const u = Math.min(r1.maxAnisotropy, t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
            t[s](l, i.TEXTURE_MAX_ANISOTROPY_EXT, u);
        }
        r1.compare && t[s](l, t.TEXTURE_COMPARE_FUNC, jg[r1.compare]);
    }
    function Vg(r1) {
        return {
            r8unorm: r1.RED,
            r8snorm: r1.RED,
            r8uint: r1.RED,
            r8sint: r1.RED,
            r16uint: r1.RED,
            r16sint: r1.RED,
            r16float: r1.RED,
            rg8unorm: r1.RG,
            rg8snorm: r1.RG,
            rg8uint: r1.RG,
            rg8sint: r1.RG,
            r32uint: r1.RED,
            r32sint: r1.RED,
            r32float: r1.RED,
            rg16uint: r1.RG,
            rg16sint: r1.RG,
            rg16float: r1.RG,
            rgba8unorm: r1.RGBA,
            "rgba8unorm-srgb": r1.RGBA,
            rgba8snorm: r1.RGBA,
            rgba8uint: r1.RGBA,
            rgba8sint: r1.RGBA,
            bgra8unorm: r1.RGBA,
            "bgra8unorm-srgb": r1.RGBA,
            rgb9e5ufloat: r1.RGB,
            rgb10a2unorm: r1.RGBA,
            rg11b10ufloat: r1.RGB,
            rg32uint: r1.RG,
            rg32sint: r1.RG,
            rg32float: r1.RG,
            rgba16uint: r1.RGBA,
            rgba16sint: r1.RGBA,
            rgba16float: r1.RGBA,
            rgba32uint: r1.RGBA,
            rgba32sint: r1.RGBA,
            rgba32float: r1.RGBA,
            stencil8: r1.STENCIL_INDEX8,
            depth16unorm: r1.DEPTH_COMPONENT,
            depth24plus: r1.DEPTH_COMPONENT,
            "depth24plus-stencil8": r1.DEPTH_STENCIL,
            depth32float: r1.DEPTH_COMPONENT,
            "depth32float-stencil8": r1.DEPTH_STENCIL
        };
    }
    var x2 = Object.defineProperty, T2 = Object.defineProperties, S2 = Object.getOwnPropertyDescriptors, Wg = Object.getOwnPropertySymbols, E2 = Object.prototype.hasOwnProperty, A2 = Object.prototype.propertyIsEnumerable, Yg = (r1, t, e)=>t in r1 ? x2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Se = (r1, t)=>{
        for(var e in t || (t = {}))E2.call(t, e) && Yg(r1, e, t[e]);
        if (Wg) for (var e of Wg(t))A2.call(t, e) && Yg(r1, e, t[e]);
        return r1;
    }, P2 = (r1, t)=>T2(r1, S2(t));
    function Kg(r1, t) {
        let e = {}, i = r1.RGBA;
        return r1 instanceof z.get().getWebGL2RenderingContext() ? (e = {
            "rgba8unorm-srgb": r1.SRGB8_ALPHA8,
            "bgra8unorm-srgb": r1.SRGB8_ALPHA8
        }, i = r1.RGBA8) : t.srgb && (e = {
            "rgba8unorm-srgb": t.srgb.SRGB8_ALPHA8_EXT,
            "bgra8unorm-srgb": t.srgb.SRGB8_ALPHA8_EXT
        }), Se(Se(Se(Se(Se(Se(P2(Se({
            r8unorm: r1.R8,
            r8snorm: r1.R8_SNORM,
            r8uint: r1.R8UI,
            r8sint: r1.R8I,
            r16uint: r1.R16UI,
            r16sint: r1.R16I,
            r16float: r1.R16F,
            rg8unorm: r1.RG8,
            rg8snorm: r1.RG8_SNORM,
            rg8uint: r1.RG8UI,
            rg8sint: r1.RG8I,
            r32uint: r1.R32UI,
            r32sint: r1.R32I,
            r32float: r1.R32F,
            rg16uint: r1.RG16UI,
            rg16sint: r1.RG16I,
            rg16float: r1.RG16F,
            rgba8unorm: r1.RGBA
        }, e), {
            rgba8snorm: r1.RGBA8_SNORM,
            rgba8uint: r1.RGBA8UI,
            rgba8sint: r1.RGBA8I,
            bgra8unorm: i,
            rgb9e5ufloat: r1.RGB9_E5,
            rgb10a2unorm: r1.RGB10_A2,
            rg11b10ufloat: r1.R11F_G11F_B10F,
            rg32uint: r1.RG32UI,
            rg32sint: r1.RG32I,
            rg32float: r1.RG32F,
            rgba16uint: r1.RGBA16UI,
            rgba16sint: r1.RGBA16I,
            rgba16float: r1.RGBA16F,
            rgba32uint: r1.RGBA32UI,
            rgba32sint: r1.RGBA32I,
            rgba32float: r1.RGBA32F,
            stencil8: r1.STENCIL_INDEX8,
            depth16unorm: r1.DEPTH_COMPONENT16,
            depth24plus: r1.DEPTH_COMPONENT24,
            "depth24plus-stencil8": r1.DEPTH24_STENCIL8,
            depth32float: r1.DEPTH_COMPONENT32F,
            "depth32float-stencil8": r1.DEPTH32F_STENCIL8
        }), t.s3tc ? {
            "bc1-rgba-unorm": t.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,
            "bc2-rgba-unorm": t.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,
            "bc3-rgba-unorm": t.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT
        } : {}), t.s3tc_sRGB ? {
            "bc1-rgba-unorm-srgb": t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
            "bc2-rgba-unorm-srgb": t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
            "bc3-rgba-unorm-srgb": t.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
        } : {}), t.rgtc ? {
            "bc4-r-unorm": t.rgtc.COMPRESSED_RED_RGTC1_EXT,
            "bc4-r-snorm": t.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,
            "bc5-rg-unorm": t.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,
            "bc5-rg-snorm": t.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
        } : {}), t.bptc ? {
            "bc6h-rgb-float": t.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
            "bc6h-rgb-ufloat": t.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
            "bc7-rgba-unorm": t.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
            "bc7-rgba-unorm-srgb": t.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
        } : {}), t.etc ? {
            "etc2-rgb8unorm": t.etc.COMPRESSED_RGB8_ETC2,
            "etc2-rgb8unorm-srgb": t.etc.COMPRESSED_SRGB8_ETC2,
            "etc2-rgb8a1unorm": t.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
            "etc2-rgb8a1unorm-srgb": t.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
            "etc2-rgba8unorm": t.etc.COMPRESSED_RGBA8_ETC2_EAC,
            "etc2-rgba8unorm-srgb": t.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
            "eac-r11unorm": t.etc.COMPRESSED_R11_EAC,
            "eac-rg11unorm": t.etc.COMPRESSED_SIGNED_RG11_EAC
        } : {}), t.astc ? {
            "astc-4x4-unorm": t.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
            "astc-4x4-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
            "astc-5x4-unorm": t.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,
            "astc-5x4-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,
            "astc-5x5-unorm": t.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
            "astc-5x5-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
            "astc-6x5-unorm": t.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
            "astc-6x5-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
            "astc-6x6-unorm": t.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
            "astc-6x6-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
            "astc-8x5-unorm": t.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
            "astc-8x5-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
            "astc-8x6-unorm": t.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
            "astc-8x6-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
            "astc-8x8-unorm": t.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
            "astc-8x8-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
            "astc-10x5-unorm": t.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
            "astc-10x5-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
            "astc-10x6-unorm": t.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
            "astc-10x6-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
            "astc-10x8-unorm": t.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
            "astc-10x8-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
            "astc-10x10-unorm": t.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
            "astc-10x10-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
            "astc-12x10-unorm": t.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
            "astc-12x10-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
            "astc-12x12-unorm": t.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
            "astc-12x12-unorm-srgb": t.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
        } : {});
    }
    function qg(r1) {
        return {
            r8unorm: r1.UNSIGNED_BYTE,
            r8snorm: r1.BYTE,
            r8uint: r1.UNSIGNED_BYTE,
            r8sint: r1.BYTE,
            r16uint: r1.UNSIGNED_SHORT,
            r16sint: r1.SHORT,
            r16float: r1.HALF_FLOAT,
            rg8unorm: r1.UNSIGNED_BYTE,
            rg8snorm: r1.BYTE,
            rg8uint: r1.UNSIGNED_BYTE,
            rg8sint: r1.BYTE,
            r32uint: r1.UNSIGNED_INT,
            r32sint: r1.INT,
            r32float: r1.FLOAT,
            rg16uint: r1.UNSIGNED_SHORT,
            rg16sint: r1.SHORT,
            rg16float: r1.HALF_FLOAT,
            rgba8unorm: r1.UNSIGNED_BYTE,
            "rgba8unorm-srgb": r1.UNSIGNED_BYTE,
            rgba8snorm: r1.BYTE,
            rgba8uint: r1.UNSIGNED_BYTE,
            rgba8sint: r1.BYTE,
            bgra8unorm: r1.UNSIGNED_BYTE,
            "bgra8unorm-srgb": r1.UNSIGNED_BYTE,
            rgb9e5ufloat: r1.UNSIGNED_INT_5_9_9_9_REV,
            rgb10a2unorm: r1.UNSIGNED_INT_2_10_10_10_REV,
            rg11b10ufloat: r1.UNSIGNED_INT_10F_11F_11F_REV,
            rg32uint: r1.UNSIGNED_INT,
            rg32sint: r1.INT,
            rg32float: r1.FLOAT,
            rgba16uint: r1.UNSIGNED_SHORT,
            rgba16sint: r1.SHORT,
            rgba16float: r1.HALF_FLOAT,
            rgba32uint: r1.UNSIGNED_INT,
            rgba32sint: r1.INT,
            rgba32float: r1.FLOAT,
            stencil8: r1.UNSIGNED_BYTE,
            depth16unorm: r1.UNSIGNED_SHORT,
            depth24plus: r1.UNSIGNED_INT,
            "depth24plus-stencil8": r1.UNSIGNED_INT_24_8,
            depth32float: r1.FLOAT,
            "depth32float-stencil8": r1.FLOAT_32_UNSIGNED_INT_24_8_REV
        };
    }
    function R2(r1) {
        r1 instanceof Uint8ClampedArray && (r1 = new Uint8Array(r1.buffer));
        const t = r1.length;
        for(let e = 0; e < t; e += 4){
            const i = r1[e + 3];
            if (i !== 0) {
                const s = 255.001 / i;
                r1[e] = r1[e] * s + .5, r1[e + 1] = r1[e + 1] * s + .5, r1[e + 2] = r1[e + 2] * s + .5;
            }
        }
    }
    const w2 = 4;
    class il {
        constructor(t){
            this.managedTextures = [], this._glTextures = Object.create(null), this._glSamplers = Object.create(null), this._boundTextures = [], this._activeTextureLocation = -1, this._boundSamplers = Object.create(null), this._uploads = {
                image: tl,
                buffer: Ng,
                video: Xg,
                compressed: Hg
            }, this._useSeparateSamplers = !1, this._renderer = t;
        }
        contextChange(t) {
            this._gl = t, this._mapFormatToInternalFormat || (this._mapFormatToInternalFormat = Kg(t, this._renderer.context.extensions), this._mapFormatToType = qg(t), this._mapFormatToFormat = Vg(t)), this._glTextures = Object.create(null), this._glSamplers = Object.create(null), this._boundSamplers = Object.create(null);
            for(let e = 0; e < 16; e++)this.bind(P.EMPTY, e);
        }
        initSource(t) {
            this.bind(t);
        }
        bind(t, e = 0) {
            const i = t.source;
            t ? (this.bindSource(i, e), this._useSeparateSamplers && this._bindSampler(i.style, e)) : (this.bindSource(null, e), this._useSeparateSamplers && this._bindSampler(null, e));
        }
        bindSource(t, e = 0) {
            const i = this._gl;
            if (t._touched = this._renderer.textureGC.count, this._boundTextures[e] !== t) {
                this._boundTextures[e] = t, this._activateLocation(e), t = t || P.EMPTY.source;
                const s = this.getGlSource(t);
                i.bindTexture(s.target, s.texture);
            }
        }
        _bindSampler(t, e = 0) {
            const i = this._gl;
            if (!t) {
                this._boundSamplers[e] = null, i.bindSampler(e, null);
                return;
            }
            const s = this._getGlSampler(t);
            this._boundSamplers[e] !== s && (this._boundSamplers[e] = s, i.bindSampler(e, s));
        }
        unbind(t) {
            const e = t.source, i = this._boundTextures, s = this._gl;
            for(let n = 0; n < i.length; n++)if (i[n] === e) {
                this._activateLocation(n);
                const o = this.getGlSource(e);
                s.bindTexture(o.target, null), i[n] = null;
            }
        }
        _activateLocation(t) {
            this._activeTextureLocation !== t && (this._activeTextureLocation = t, this._gl.activeTexture(this._gl.TEXTURE0 + t));
        }
        _initSource(t) {
            const e = this._gl, i = new $g(e.createTexture());
            if (i.type = this._mapFormatToType[t.format], i.internalFormat = this._mapFormatToInternalFormat[t.format], i.format = this._mapFormatToFormat[t.format], t.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || t.isPowerOfTwo)) {
                const s = Math.max(t.width, t.height);
                t.mipLevelCount = Math.floor(Math.log2(s)) + 1;
            }
            return this._glTextures[t.uid] = i, this.managedTextures.includes(t) || (t.on("update", this.onSourceUpdate, this), t.on("resize", this.onSourceUpdate, this), t.on("styleChange", this.onStyleChange, this), t.on("destroy", this.onSourceDestroy, this), t.on("unload", this.onSourceUnload, this), t.on("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.push(t)), this.onSourceUpdate(t), this.updateStyle(t, !1), i;
        }
        onStyleChange(t) {
            this.updateStyle(t, !1);
        }
        updateStyle(t, e) {
            const i = this._gl, s = this.getGlSource(t);
            i.bindTexture(i.TEXTURE_2D, s.texture), this._boundTextures[this._activeTextureLocation] = t, rl(t.style, i, t.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", i.TEXTURE_2D, !this._renderer.context.supports.nonPowOf2wrapping && !t.isPowerOfTwo, e);
        }
        onSourceUnload(t) {
            const e = this._glTextures[t.uid];
            e && (this.unbind(t), this._glTextures[t.uid] = null, this._gl.deleteTexture(e.texture));
        }
        onSourceUpdate(t) {
            const e = this._gl, i = this.getGlSource(t);
            e.bindTexture(e.TEXTURE_2D, i.texture), this._boundTextures[this._activeTextureLocation] = t, this._uploads[t.uploadMethodId] ? this._uploads[t.uploadMethodId].upload(t, i, e, this._renderer.context.webGLVersion) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t.pixelWidth, t.pixelHeight, 0, e.RGBA, e.UNSIGNED_BYTE, null), t.autoGenerateMipmaps && t.mipLevelCount > 1 && this.onUpdateMipmaps(t, !1);
        }
        onUpdateMipmaps(t, e = !0) {
            e && this.bindSource(t, 0);
            const i = this.getGlSource(t);
            this._gl.generateMipmap(i.target);
        }
        onSourceDestroy(t) {
            t.off("destroy", this.onSourceDestroy, this), t.off("update", this.onSourceUpdate, this), t.off("resize", this.onSourceUpdate, this), t.off("unload", this.onSourceUnload, this), t.off("styleChange", this.onStyleChange, this), t.off("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.splice(this.managedTextures.indexOf(t), 1), this.onSourceUnload(t);
        }
        _initSampler(t) {
            const e = this._gl, i = this._gl.createSampler();
            return this._glSamplers[t._resourceId] = i, rl(t, e, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", i, !1, !0), this._glSamplers[t._resourceId];
        }
        _getGlSampler(t) {
            return this._glSamplers[t._resourceId] || this._initSampler(t);
        }
        getGlSource(t) {
            return this._glTextures[t.uid] || this._initSource(t);
        }
        generateCanvas(t) {
            const { pixels: e, width: i, height: s } = this.getPixels(t), n = z.get().createCanvas();
            n.width = i, n.height = s;
            const o = n.getContext("2d");
            if (o) {
                const a = o.createImageData(i, s);
                a.data.set(e), o.putImageData(a, 0, 0);
            }
            return n;
        }
        getPixels(t) {
            const e = t.source.resolution, i = t.frame, s = Math.max(Math.round(i.width * e), 1), n = Math.max(Math.round(i.height * e), 1), o = new Uint8Array(w2 * s * n), a = this._renderer, l = a.renderTarget.getRenderTarget(t), u = a.renderTarget.getGpuRenderTarget(l), c = a.gl;
            return c.bindFramebuffer(c.FRAMEBUFFER, u.resolveTargetFramebuffer), c.readPixels(Math.round(i.x * e), Math.round(i.y * e), s, n, c.RGBA, c.UNSIGNED_BYTE, o), {
                pixels: new Uint8ClampedArray(o.buffer),
                width: s,
                height: n
            };
        }
        destroy() {
            this.managedTextures.slice().forEach((t)=>this.onSourceDestroy(t)), this.managedTextures = null, this._renderer = null;
        }
    }
    il.extension = {
        type: [
            x.WebGLSystem
        ],
        name: "texture"
    };
    class sl {
        init() {
            const t = new nt({
                uColor: {
                    value: new Float32Array([
                        1,
                        1,
                        1,
                        1
                    ]),
                    type: "vec4<f32>"
                },
                uTransformMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uRound: {
                    value: 0,
                    type: "f32"
                }
            }), e = Ne({
                name: "graphics",
                bits: [
                    Li,
                    Ni(wt),
                    ji,
                    Xe
                ]
            });
            this.shader = new yt({
                glProgram: e,
                resources: {
                    localUniforms: t,
                    batchSamplers: Hi
                }
            });
        }
        execute(t, e) {
            const i = e.context, s = i.customShader || this.shader, n = t.renderer, o = n.graphicsContext, { geometry: a, instructions: l } = o.getContextRenderData(i);
            s.groups[0] = n.globalUniforms.bindGroup, n.shader.bind(s), n.geometry.bind(a, s.glProgram);
            const u = l.instructions;
            for(let c = 0; c < l.instructionSize; c++){
                const h = u[c];
                if (h.size) {
                    for(let p = 0; p < h.textures.textures.length; p++)n.texture.bind(h.textures.textures[p], p);
                    n.geometry.draw("triangle-list", h.size, h.start);
                }
            }
        }
        destroy() {
            this.shader.destroy(!0), this.shader = null;
        }
    }
    sl.extension = {
        type: [
            x.WebGLPipesAdaptor
        ],
        name: "graphics"
    };
    class nl {
        init() {
            const t = Ne({
                name: "mesh",
                bits: [
                    ji,
                    Vm,
                    Xe
                ]
            });
            this._shader = new yt({
                glProgram: t,
                resources: {
                    uTexture: P.EMPTY.source,
                    textureUniforms: {
                        uTextureMatrix: {
                            type: "mat3x3<f32>",
                            value: new B
                        }
                    }
                }
            });
        }
        execute(t, e) {
            const i = t.renderer;
            let s = e._shader;
            if (s) {
                if (!s.glProgram) return;
            } else {
                s = this._shader;
                const n = e.texture, o = n.source;
                s.resources.uTexture = o, s.resources.uSampler = o.style, s.resources.textureUniforms.uniforms.uTextureMatrix = n.textureMatrix.mapCoord;
            }
            s.groups[100] = i.globalUniforms.bindGroup, s.groups[101] = t.localUniformsBindGroup, i.encoder.draw({
                geometry: e._geometry,
                shader: s,
                state: e.state
            });
        }
        destroy() {
            this._shader.destroy(!0), this._shader = null;
        }
    }
    nl.extension = {
        type: [
            x.WebGLPipesAdaptor
        ],
        name: "mesh"
    };
    class ol {
        constructor(t){
            this._renderer = t;
        }
        addRenderable(t, e) {
            this._renderer.renderPipes.batch.break(e), e.add(t);
        }
        execute(t) {
            t.isRenderable && t.render(this._renderer);
        }
        destroy() {
            this._renderer = null;
        }
    }
    ol.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "customRender"
    };
    function al(r1, t) {
        const e = r1.instructionSet, i = e.instructions;
        for(let s = 0; s < e.instructionSize; s++){
            const n = i[s];
            t[n.renderPipeId].execute(n);
        }
    }
    class ll {
        constructor(t){
            this._renderer = t;
        }
        addRenderGroup(t, e) {
            this._renderer.renderPipes.batch.break(e), e.add(t);
        }
        execute(t) {
            t.isRenderable && (this._renderer.globalUniforms.push({
                worldTransformMatrix: t.worldTransform,
                worldColor: t.worldColorAlpha
            }), al(t, this._renderer.renderPipes), this._renderer.globalUniforms.pop());
        }
        destroy() {
            this._renderer = null;
        }
    }
    ll.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "renderGroup"
    };
    function ul(r1, t = []) {
        t.push(r1);
        for(let e = 0; e < r1.renderGroupChildren.length; e++)ul(r1.renderGroupChildren[e], t);
        return t;
    }
    const M2 = new W;
    function cl(r1, t = !1) {
        Zg(r1);
        const e = r1.childrenToUpdate, i = r1.updateTick;
        r1.updateTick++;
        for(const s in e){
            const n = e[s], o = n.list, a = n.index;
            for(let l = 0; l < a; l++)hl(o[l], i, 0);
            n.index = 0;
        }
        if (t) for(let s = 0; s < r1.renderGroupChildren.length; s++)cl(r1.renderGroupChildren[s], t);
    }
    function Zg(r1) {
        const t = r1.root;
        let e;
        if (r1.renderGroupParent) {
            const i = r1.renderGroupParent;
            r1.worldTransform.appendFrom(t.relativeGroupTransform, i.worldTransform), r1.worldColor = _i(t.groupColor, i.worldColor), e = t.groupAlpha * i.worldAlpha;
        } else r1.worldTransform.copyFrom(t.localTransform), r1.worldColor = t.localColor, e = t.localAlpha;
        e = e < 0 ? 0 : e > 1 ? 1 : e, r1.worldAlpha = e, r1.worldColorAlpha = r1.worldColor + ((e * 255 | 0) << 24);
    }
    function hl(r1, t, e) {
        if (t === r1.updateTick) return;
        r1.updateTick = t, r1.didChange = !1;
        const i = r1.localTransform;
        r1.updateLocalTransform();
        const s = r1.parent;
        if (s && !s.isRenderGroupRoot ? (e = e | r1._updateFlags, r1.relativeGroupTransform.appendFrom(i, s.relativeGroupTransform), e && Qg(r1, s, e)) : (e = r1._updateFlags, r1.relativeGroupTransform.copyFrom(i), e && Qg(r1, M2, e)), !r1.isRenderGroupRoot) {
            const n = r1.children, o = n.length;
            for(let l = 0; l < o; l++)hl(n[l], t, e);
            const a = r1.renderGroup;
            r1.renderPipeId && !a.structureDidChange && a.updateRenderable(r1);
        }
    }
    function Qg(r1, t, e) {
        if (e & ii) {
            r1.groupColor = _i(r1.localColor, t.groupColor);
            let i = r1.localAlpha * t.groupAlpha;
            i = i < 0 ? 0 : i > 1 ? 1 : i, r1.groupAlpha = i, r1.groupColorAlpha = r1.groupColor + ((i * 255 | 0) << 24);
        }
        e & Qs && (r1.groupBlendMode = r1.localBlendMode === "inherit" ? t.groupBlendMode : r1.localBlendMode), e & ir && (r1.globalDisplayStatus = r1.localDisplayStatus & t.globalDisplayStatus), r1._updateFlags = 0;
    }
    function Jg(r1, t) {
        const { list: e, index: i } = r1.childrenRenderablesToUpdate;
        let s = !1;
        for(let n = 0; n < i; n++){
            const o = e[n];
            if (s = t[o.renderPipeId].validateRenderable(o), s) break;
        }
        return r1.structureDidChange = s, s;
    }
    const C2 = new B;
    class dl {
        constructor(t){
            this._renderer = t;
        }
        render({ container: t, transform: e }) {
            t.isRenderGroup = !0;
            const i = t.parent, s = t.renderGroup.renderGroupParent;
            t.parent = null, t.renderGroup.renderGroupParent = null;
            const n = this._renderer, o = ul(t.renderGroup, []);
            let a = C2;
            e && (a = a.copyFrom(t.renderGroup.localTransform), t.renderGroup.localTransform.copyFrom(e));
            const l = n.renderPipes;
            for(let u = 0; u < o.length; u++){
                const c = o[u];
                c.runOnRender(), c.instructionSet.renderPipes = l, c.structureDidChange || Jg(c, l), cl(c), c.structureDidChange ? (c.structureDidChange = !1, Wm(c, l)) : O2(c), c.childrenRenderablesToUpdate.index = 0, n.renderPipes.batch.upload(c.instructionSet);
            }
            n.globalUniforms.start({
                worldTransformMatrix: e ? t.renderGroup.localTransform : t.renderGroup.worldTransform,
                worldColor: t.renderGroup.worldColorAlpha
            }), al(t.renderGroup, l), l.uniformBatch && l.uniformBatch.renderEnd(), e && t.renderGroup.localTransform.copyFrom(a), t.parent = i, t.renderGroup.renderGroupParent = s;
        }
        destroy() {
            this._renderer = null;
        }
    }
    dl.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "renderGroup"
    };
    function O2(r1) {
        const { list: t, index: e } = r1.childrenRenderablesToUpdate;
        for(let i = 0; i < e; i++){
            const s = t[i];
            s.didViewUpdate && r1.updateRenderable(s);
        }
    }
    class pl {
        constructor(t){
            this._gpuSpriteHash = Object.create(null), this._renderer = t;
        }
        addRenderable(t, e) {
            const i = this._getGpuSprite(t);
            t._didSpriteUpdate && this._updateBatchableSprite(t, i), this._renderer.renderPipes.batch.addToBatch(i);
        }
        updateRenderable(t) {
            const e = this._gpuSpriteHash[t.uid];
            t._didSpriteUpdate && this._updateBatchableSprite(t, e), e.batcher.updateElement(e);
        }
        validateRenderable(t) {
            const e = t._texture, i = this._getGpuSprite(t);
            return i.texture._source !== e._source ? !i.batcher.checkAndUpdateTexture(i, e) : !1;
        }
        destroyRenderable(t) {
            const e = this._gpuSpriteHash[t.uid];
            X.return(e), this._gpuSpriteHash[t.uid] = null;
        }
        _updateBatchableSprite(t, e) {
            t._didSpriteUpdate = !1, e.bounds = t.bounds, e.texture = t._texture;
        }
        _getGpuSprite(t) {
            return this._gpuSpriteHash[t.uid] || this._initGPUSprite(t);
        }
        _initGPUSprite(t) {
            const e = X.get(Pi);
            return e.renderable = t, e.texture = t._texture, e.bounds = t.bounds, e.roundPixels = this._renderer._roundPixels | t._roundPixels, this._gpuSpriteHash[t.uid] = e, t._didSpriteUpdate = !1, t.on("destroyed", ()=>{
                this.destroyRenderable(t);
            }), e;
        }
        destroy() {
            for(const t in this._gpuSpriteHash)X.return(this._gpuSpriteHash[t]);
            this._gpuSpriteHash = null, this._renderer = null;
        }
    }
    pl.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "sprite"
    };
    var G2 = Object.defineProperty, t_ = Object.getOwnPropertySymbols, B2 = Object.prototype.hasOwnProperty, I2 = Object.prototype.propertyIsEnumerable, e_ = (r1, t, e)=>t in r1 ? G2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, r_ = (r1, t)=>{
        for(var e in t || (t = {}))B2.call(t, e) && e_(r1, e, t[e]);
        if (t_) for (var e of t_(t))I2.call(t, e) && e_(r1, e, t[e]);
        return r1;
    };
    const fl = class Lb {
        constructor(){
            this.clearBeforeRender = !0, this._backgroundColor = new Y(0), this.color = this._backgroundColor, this.alpha = 1;
        }
        init(t) {
            t = r_(r_({}, Lb.defaultOptions), t), this.clearBeforeRender = t.clearBeforeRender, this.color = t.background || t.backgroundColor || this._backgroundColor, this.alpha = t.backgroundAlpha, this._backgroundColor.setAlpha(t.backgroundAlpha);
        }
        get color() {
            return this._backgroundColor;
        }
        set color(t) {
            this._backgroundColor.setValue(t);
        }
        get alpha() {
            return this._backgroundColor.alpha;
        }
        set alpha(t) {
            this._backgroundColor.setAlpha(t);
        }
        get colorRgba() {
            return this._backgroundColor.toArray();
        }
        destroy() {}
    };
    fl.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "background",
        priority: 0
    }, fl.defaultOptions = {
        backgroundAlpha: 1,
        backgroundColor: 0,
        clearBeforeRender: !0
    };
    let i_ = fl;
    const Nr = {};
    U.handle(x.BlendMode, (r1)=>{
        if (!r1.name) throw new Error("BlendMode extension must have a name property");
        Nr[r1.name] = r1.ref;
    }, (r1)=>{
        delete Nr[r1.name];
    });
    class ml {
        constructor(t){
            this._isAdvanced = !1, this._filterHash = Object.create(null), this._renderer = t;
        }
        setBlendMode(t, e, i) {
            if (this._activeBlendMode === e) {
                this._isAdvanced && this._renderableList.push(t);
                return;
            }
            this._activeBlendMode = e, this._isAdvanced && this._endAdvancedBlendMode(i), this._isAdvanced = !!Nr[e], this._isAdvanced && (this._beginAdvancedBlendMode(i), this._renderableList.push(t));
        }
        _beginAdvancedBlendMode(t) {
            this._renderer.renderPipes.batch.break(t);
            const e = this._activeBlendMode;
            if (!Nr[e]) return;
            this._filterHash[e] || (this._filterHash[e] = new Qr({
                filters: [
                    new Nr[e]
                ]
            }));
            const i = {
                renderPipeId: "filter",
                action: "pushFilter",
                renderables: [],
                filterEffect: this._filterHash[e],
                canBundle: !1
            };
            this._renderableList = i.renderables, t.add(i);
        }
        _endAdvancedBlendMode(t) {
            this._renderableList = null, this._renderer.renderPipes.batch.break(t), t.add({
                renderPipeId: "filter",
                action: "popFilter",
                canBundle: !1
            });
        }
        buildStart() {
            this._isAdvanced = !1;
        }
        buildEnd(t) {
            this._isAdvanced && this._endAdvancedBlendMode(t);
        }
        destroy() {
            this._renderer = null, this._renderableList = null;
            for(const t in this._filterHash)this._filterHash[t].destroy();
            this._filterHash = null;
        }
    }
    ml.extension = {
        type: [
            x.WebGLPipes,
            x.WebGPUPipes,
            x.CanvasPipes
        ],
        name: "blendMode"
    };
    var F2 = Object.defineProperty, s_ = Object.getOwnPropertySymbols, D2 = Object.prototype.hasOwnProperty, U2 = Object.prototype.propertyIsEnumerable, n_ = (r1, t, e)=>t in r1 ? F2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, gl = (r1, t)=>{
        for(var e in t || (t = {}))D2.call(t, e) && n_(r1, e, t[e]);
        if (s_) for (var e of s_(t))U2.call(t, e) && n_(r1, e, t[e]);
        return r1;
    };
    const _l = {
        png: "image/png",
        jpg: "image/jpeg",
        webp: "image/webp"
    }, bl = class $b {
        constructor(t){
            this._renderer = t;
        }
        _normalizeOptions(t, e = {}) {
            return t instanceof W || t instanceof P ? gl({
                target: t
            }, e) : gl(gl({}, e), t);
        }
        async image(t) {
            const e = new Image;
            return e.src = await this.base64(t), e;
        }
        async base64(t) {
            t = this._normalizeOptions(t, $b.defaultImageOptions);
            const { format: e, quality: i } = t, s = this.canvas(t);
            if (s.toBlob !== void 0) return new Promise((n, o)=>{
                s.toBlob((a)=>{
                    if (!a) {
                        o(new Error("ICanvas.toBlob failed!"));
                        return;
                    }
                    const l = new FileReader;
                    l.onload = ()=>n(l.result), l.onerror = o, l.readAsDataURL(a);
                }, _l[e], i);
            });
            if (s.toDataURL !== void 0) return s.toDataURL(_l[e], i);
            if (s.convertToBlob !== void 0) {
                const n = await s.convertToBlob({
                    type: _l[e],
                    quality: i
                });
                return new Promise((o, a)=>{
                    const l = new FileReader;
                    l.onload = ()=>o(l.result), l.onerror = a, l.readAsDataURL(n);
                });
            }
            throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
        }
        canvas(t) {
            t = this._normalizeOptions(t);
            const e = t.target, i = this._renderer;
            if (e instanceof P) return i.texture.generateCanvas(e);
            const s = i.textureGenerator.generateTexture(t), n = i.texture.generateCanvas(s);
            return s.destroy(), n;
        }
        pixels(t) {
            t = this._normalizeOptions(t);
            const e = t.target, i = this._renderer, s = e instanceof P ? e : i.textureGenerator.generateTexture(t), n = i.texture.getPixels(s);
            return e instanceof W && s.destroy(), n;
        }
        texture(t) {
            return t = this._normalizeOptions(t), t.target instanceof P ? t.target : this._renderer.textureGenerator.generateTexture(t);
        }
        download(t) {
            var e;
            t = this._normalizeOptions(t);
            const i = this.canvas(t), s = document.createElement("a");
            s.download = (e = t.filename) != null ? e : "image.png", s.href = i.toDataURL("image/png"), document.body.appendChild(s), s.click(), document.body.removeChild(s);
        }
        log(t) {
            var e;
            const i = (e = t.width) != null ? e : 200;
            t = this._normalizeOptions(t);
            const s = this.canvas(t), n = s.toDataURL();
            console.log(`[Pixi Texture] ${s.width}px ${s.height}px`);
            const o = [
                "font-size: 1px;",
                `padding: ${i}px 300px;`,
                `background: url(${n}) no-repeat;`,
                "background-size: contain;"
            ].join(" ");
            console.log("%c ", o);
        }
        destroy() {
            this._renderer = null;
        }
    };
    bl.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem
        ],
        name: "extract"
    }, bl.defaultImageOptions = {
        format: "png",
        quality: 1
    };
    let o_ = bl;
    class a_ extends P {
        static create(t) {
            return new P({
                source: new rt(t)
            });
        }
        resize(t, e, i) {
            return this.source.resize(t, e, i), this;
        }
    }
    var k2 = Object.defineProperty, L2 = Object.defineProperties, $2 = Object.getOwnPropertyDescriptors, l_ = Object.getOwnPropertySymbols, N2 = Object.prototype.hasOwnProperty, H2 = Object.prototype.propertyIsEnumerable, u_ = (r1, t, e)=>t in r1 ? k2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, X2 = (r1, t)=>{
        for(var e in t || (t = {}))N2.call(t, e) && u_(r1, e, t[e]);
        if (l_) for (var e of l_(t))H2.call(t, e) && u_(r1, e, t[e]);
        return r1;
    }, z2 = (r1, t)=>L2(r1, $2(t));
    const j2 = new j, V2 = new ut, W2 = [
        0,
        0,
        0,
        0
    ];
    class vl {
        constructor(t){
            this._renderer = t;
        }
        generateTexture(t) {
            var e;
            t instanceof W && (t = {
                target: t,
                frame: void 0,
                textureSourceOptions: {},
                resolution: void 0
            });
            const i = t.resolution || this._renderer.resolution, s = t.antialias || this._renderer.view.antialias, n = t.target;
            let o = t.clearColor;
            o ? o = Array.isArray(o) && o.length === 4 ? o : Y.shared.setValue(o).toArray() : o = W2;
            const a = ((e = t.frame) == null ? void 0 : e.copyTo(j2)) || ri(n, V2).rectangle;
            a.width = Math.max(a.width, 1 / i) | 0, a.height = Math.max(a.height, 1 / i) | 0;
            const l = a_.create(z2(X2({}, t.textureSourceOptions), {
                width: a.width,
                height: a.height,
                resolution: i,
                antialias: s
            })), u = B.shared.translate(-a.x, -a.y);
            return this._renderer.render({
                container: n,
                transform: u,
                target: l,
                clearColor: o
            }), l;
        }
        destroy() {
            this._renderer = null;
        }
    }
    vl.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem
        ],
        name: "textureGenerator"
    };
    class yl {
        constructor(t){
            this._stackIndex = 0, this._globalUniformDataStack = [], this._uniformsPool = [], this._activeUniforms = [], this._bindGroupPool = [], this._activeBindGroups = [], this._renderer = t;
        }
        reset() {
            this._stackIndex = 0;
            for(let t = 0; t < this._activeUniforms.length; t++)this._uniformsPool.push(this._activeUniforms[t]);
            for(let t = 0; t < this._activeBindGroups.length; t++)this._bindGroupPool.push(this._activeBindGroups[t]);
            this._activeUniforms.length = 0, this._activeBindGroups.length = 0;
        }
        start(t) {
            this.reset(), this.push(t);
        }
        bind({ size: t, projectionMatrix: e, worldTransformMatrix: i, worldColor: s, offset: n }) {
            const o = this._renderer.renderTarget.renderTarget, a = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : {
                projectionData: o,
                worldTransformMatrix: new B,
                worldColor: 4294967295,
                offset: new V
            }, l = {
                projectionMatrix: e || this._renderer.renderTarget.projectionMatrix,
                resolution: t || o.size,
                worldTransformMatrix: i || a.worldTransformMatrix,
                worldColor: s || a.worldColor,
                offset: n || a.offset,
                bindGroup: null
            }, u = this._uniformsPool.pop() || this._createUniforms();
            this._activeUniforms.push(u);
            const c = u.uniforms;
            c.uProjectionMatrix = l.projectionMatrix, c.uResolution = l.resolution, c.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix), c.uWorldTransformMatrix.tx -= l.offset.x, c.uWorldTransformMatrix.ty -= l.offset.y, fr(l.worldColor, c.uWorldColorAlpha, 0), u.update();
            let h;
            this._renderer.renderPipes.uniformBatch ? h = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(u, !1) : (h = this._bindGroupPool.pop() || new $t, this._activeBindGroups.push(h), h.setResource(u, 0)), l.bindGroup = h, this._currentGlobalUniformData = l;
        }
        push(t) {
            this.bind(t), this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData;
        }
        pop() {
            this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1], this._renderer.type === vt.WEBGL && this._currentGlobalUniformData.bindGroup.resources[0].update();
        }
        get bindGroup() {
            return this._currentGlobalUniformData.bindGroup;
        }
        get uniformGroup() {
            return this._currentGlobalUniformData.bindGroup.resources[0];
        }
        _createUniforms() {
            return new nt({
                uProjectionMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uWorldTransformMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uWorldColorAlpha: {
                    value: new Float32Array(4),
                    type: "vec4<f32>"
                },
                uResolution: {
                    value: [
                        0,
                        0
                    ],
                    type: "vec2<f32>"
                }
            }, {
                isStatic: !0
            });
        }
        destroy() {
            this._renderer = null;
        }
    }
    yl.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "globalUniforms"
    };
    let c_ = !1;
    const xl = "8.0.5";
    function h_(r1) {
        if (!c_) {
            if (z.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
                const t = [
                    `%c  %c  %c  %c  %c PixiJS %c v${xl} (${r1}) http://www.pixijs.com/

`,
                    "background: #E72264; padding:5px 0;",
                    "background: #6CA2EA; padding:5px 0;",
                    "background: #B5D33D; padding:5px 0;",
                    "background: #FED23F; padding:5px 0;",
                    "color: #FFFFFF; background: #E72264; padding:5px 0;",
                    "color: #E72264; background: #FFFFFF; padding:5px 0;"
                ];
                globalThis.console.log(...t);
            } else globalThis.console && globalThis.console.log(`PixiJS ${xl} - ${r1} - http://www.pixijs.com/`);
            c_ = !0;
        }
    }
    class Ps {
        constructor(t){
            this._renderer = t;
        }
        init(t) {
            if (t.hello) {
                let e = this._renderer.name;
                this._renderer.type === vt.WEBGL && (e += ` ${this._renderer.context.webGLVersion}`), h_(e);
            }
        }
    }
    Ps.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "hello",
        priority: -2
    }, Ps.defaultOptions = {
        hello: !1
    };
    var Y2 = Object.defineProperty, d_ = Object.getOwnPropertySymbols, K2 = Object.prototype.hasOwnProperty, q2 = Object.prototype.propertyIsEnumerable, p_ = (r1, t, e)=>t in r1 ? Y2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, f_ = (r1, t)=>{
        for(var e in t || (t = {}))K2.call(t, e) && p_(r1, e, t[e]);
        if (d_) for (var e of d_(t))q2.call(t, e) && p_(r1, e, t[e]);
        return r1;
    };
    const Tl = class Nb {
        constructor(t){
            this._renderer = t, this.count = 0, this.checkCount = 0;
        }
        init(t) {
            t = f_(f_({}, Nb.defaultOptions), t), this.checkCountMax = t.textureGCCheckCountMax, this.maxIdle = t.textureGCAMaxIdle, this.active = t.textureGCActive;
        }
        postrender() {
            this._renderer.renderingToScreen && (this.count++, this.active && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
        }
        run() {
            const t = this._renderer.texture.managedTextures;
            for(let e = 0; e < t.length; e++){
                const i = t[e];
                i.autoGarbageCollect && i.resource && i._touched > -1 && this.count - i._touched > this.maxIdle && (i._touched = -1, i.unload());
            }
        }
        destroy() {
            this._renderer = null;
        }
    };
    Tl.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem
        ],
        name: "textureGC"
    }, Tl.defaultOptions = {
        textureGCActive: !0,
        textureGCAMaxIdle: 3600,
        textureGCCheckCountMax: 600
    };
    let Sl = Tl;
    U.add(Sl);
    var Z2 = Object.defineProperty, m_ = Object.getOwnPropertySymbols, Q2 = Object.prototype.hasOwnProperty, J2 = Object.prototype.propertyIsEnumerable, g_ = (r1, t, e)=>t in r1 ? Z2(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, __ = (r1, t)=>{
        for(var e in t || (t = {}))Q2.call(t, e) && g_(r1, e, t[e]);
        if (m_) for (var e of m_(t))J2.call(t, e) && g_(r1, e, t[e]);
        return r1;
    };
    const El = class Hb {
        get resolution() {
            return this.texture.source._resolution;
        }
        set resolution(t) {
            this.texture.source.resize(this.texture.source.width, this.texture.source.height, t);
        }
        init(t) {
            t = __(__({}, Hb.defaultOptions), t), t.view && (t.canvas = t.view), this.screen = new j(0, 0, t.width, t.height), this.canvas = t.canvas || z.get().createCanvas(), this.antialias = !!t.antialias, this.texture = ja(this.canvas, t), this.renderTarget = new xs({
                colorTextures: [
                    this.texture
                ],
                depth: !!t.depth,
                isRoot: !0
            }), this.texture.source.transparent = t.backgroundAlpha < 1, this.multiView = !!t.multiView, this.autoDensity && (this.canvas.style.width = `${this.texture.width}px`, this.canvas.style.height = `${this.texture.height}px`), this.resolution = t.resolution;
        }
        resize(t, e, i) {
            this.texture.source.resize(t, e, i), this.screen.width = this.texture.frame.width, this.screen.height = this.texture.frame.height, this.autoDensity && (this.canvas.style.width = `${t}px`, this.canvas.style.height = `${e}px`);
        }
        destroy(t = !1) {
            (typeof t == "boolean" ? t : t != null && t.removeView) && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        }
    };
    El.extension = {
        type: [
            x.WebGLSystem,
            x.WebGPUSystem,
            x.CanvasSystem
        ],
        name: "view",
        priority: 0
    }, El.defaultOptions = {
        width: 800,
        height: 600,
        autoDensity: !1,
        antialias: !1
    };
    let b_ = El;
    const Al = [
        i_,
        yl,
        Ps,
        b_,
        dl,
        Sl,
        vl,
        o_
    ], Pl = [
        ml,
        Pa,
        pl,
        ll,
        Ra,
        Ma,
        wa,
        ol
    ], tE = [
        ...Al,
        za,
        ag,
        Jm,
        Ca,
        il,
        Wa,
        Fa,
        Ja,
        Qa,
        ka,
        Lg,
        La,
        Ua
    ], eE = [
        ...Pl
    ], rE = [
        Ea,
        nl,
        sl
    ], v_ = [], y_ = [], x_ = [];
    U.handleByNamedList(x.WebGLSystem, v_), U.handleByNamedList(x.WebGLPipes, y_), U.handleByNamedList(x.WebGLPipesAdaptor, x_), U.add(...tE, ...eE, ...rE);
    class T_ extends Pr {
        constructor(){
            const t = {
                name: "webgl",
                type: vt.WEBGL,
                systems: v_,
                renderPipes: y_,
                renderPipeAdaptors: x_
            };
            super(t);
        }
    }
    var iE = {
        __proto__: null,
        WebGLRenderer: T_
    };
    class Rl {
        constructor(t){
            this._hash = Object.create(null), this._renderer = t;
        }
        contextChange(t) {
            this._gpu = t;
        }
        getBindGroup(t, e, i) {
            return t._updateKey(), this._hash[t._key] || this._createBindGroup(t, e, i);
        }
        _createBindGroup(t, e, i) {
            var s;
            const n = this._gpu.device, o = e.layout[i], a = [], l = this._renderer;
            for(const h in o){
                const p = (s = t.resources[h]) != null ? s : t.resources[o[h]];
                let f;
                if (p._resourceType === "uniformGroup") {
                    const m = p;
                    l.ubo.updateUniformGroup(m);
                    const _ = m.buffer;
                    f = {
                        buffer: l.buffer.getGPUBuffer(_),
                        offset: 0,
                        size: _.descriptor.size
                    };
                } else if (p._resourceType === "buffer") {
                    const m = p;
                    f = {
                        buffer: l.buffer.getGPUBuffer(m),
                        offset: 0,
                        size: m.descriptor.size
                    };
                } else if (p._resourceType === "bufferResource") {
                    const m = p;
                    f = {
                        buffer: l.buffer.getGPUBuffer(m.buffer),
                        offset: m.offset,
                        size: m.size
                    };
                } else if (p._resourceType === "textureSampler") {
                    const m = p;
                    f = l.texture.getGpuSampler(m);
                } else if (p._resourceType === "textureSource") {
                    const m = p;
                    f = l.texture.getGpuSource(m).createView({});
                }
                a.push({
                    binding: o[h],
                    resource: f
                });
            }
            const u = l.shader.getProgramData(e).bindGroups[i], c = n.createBindGroup({
                layout: u,
                entries: a
            });
            return this._hash[t._key] = c, c;
        }
        destroy() {
            for (const t of Object.keys(this._hash))this._hash[t] = null;
            this._hash = null, this._renderer = null;
        }
    }
    Rl.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "bindGroup"
    };
    class wl {
        constructor(){
            this._gpuBuffers = Object.create(null), this._managedBuffers = [];
        }
        contextChange(t) {
            this._gpu = t;
        }
        getGPUBuffer(t) {
            return this._gpuBuffers[t.uid] || this.createGPUBuffer(t);
        }
        updateBuffer(t) {
            const e = this._gpuBuffers[t.uid] || this.createGPUBuffer(t), i = t.data;
            return t._updateID && i && (t._updateID = 0, this._gpu.device.queue.writeBuffer(e, 0, i.buffer, 0, (t._updateSize || i.byteLength) + 3 & -4)), e;
        }
        destroyAll() {
            for(const t in this._gpuBuffers)this._gpuBuffers[t].destroy();
            this._gpuBuffers = {};
        }
        createGPUBuffer(t) {
            this._gpuBuffers[t.uid] || (t.on("update", this.updateBuffer, this), t.on("change", this.onBufferChange, this), t.on("destroy", this.onBufferDestroy, this));
            const e = this._gpu.device.createBuffer(t.descriptor);
            return t._updateID = 0, t.data && (mi(t.data.buffer, e.getMappedRange()), e.unmap()), this._gpuBuffers[t.uid] = e, this._managedBuffers.push(t), e;
        }
        onBufferChange(t) {
            this._gpuBuffers[t.uid].destroy(), t._updateID = 0, this._gpuBuffers[t.uid] = this.createGPUBuffer(t);
        }
        onBufferDestroy(t) {
            this._managedBuffers.splice(this._managedBuffers.indexOf(t), 1), this._destroyBuffer(t);
        }
        destroy() {
            this._managedBuffers.forEach((t)=>this._destroyBuffer(t)), this._managedBuffers = null, this._gpuBuffers = null;
        }
        _destroyBuffer(t) {
            this._gpuBuffers[t.uid].destroy(), t.off("update", this.updateBuffer, this), t.off("change", this.onBufferChange, this), t.off("destroy", this.onBufferDestroy, this), this._gpuBuffers[t.uid] = null;
        }
    }
    wl.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "buffer"
    };
    function sE(r1, t) {
        const e = r1.descriptor.size, i = t.gpu.device, s = new _t({
            data: new Float32Array(24e5),
            usage: $.MAP_READ | $.COPY_DST
        }), n = t.buffer.createGPUBuffer(s), o = i.createCommandEncoder();
        o.copyBufferToBuffer(t.buffer.getGPUBuffer(r1), 0, n, 0, e), i.queue.submit([
            o.finish()
        ]), n.mapAsync(GPUMapMode.READ, 0, e).then(()=>{
            n.getMappedRange(0, e), n.unmap();
        });
    }
    class S_ {
        constructor({ minUniformOffsetAlignment: t }){
            this._minUniformOffsetAlignment = 256, this.byteIndex = 0, this._minUniformOffsetAlignment = t, this.data = new Float32Array(65535);
        }
        clear() {
            this.byteIndex = 0;
        }
        addEmptyGroup(t) {
            if (t > this._minUniformOffsetAlignment / 4) throw new Error(`UniformBufferBatch: array is too large: ${t * 4}`);
            const e = this.byteIndex;
            let i = e + t * 4;
            if (i = Math.ceil(i / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment, i > this.data.length * 4) throw new Error("UniformBufferBatch: ubo batch got too big");
            return this.byteIndex = i, e;
        }
        addGroup(t) {
            const e = this.addEmptyGroup(t.length);
            for(let i = 0; i < t.length; i++)this.data[e / 4 + i] = t[i];
            return e;
        }
        destroy() {
            this._buffer.destroy(), this._buffer = null, this.data = null;
        }
    }
    class Ml {
        constructor(t){
            this._colorMaskCache = 15, this._renderer = t;
        }
        setMask(t) {
            this._colorMaskCache !== t && (this._colorMaskCache = t, this._renderer.pipeline.setColorMask(t));
        }
        destroy() {
            this._renderer = null, this._colorMaskCache = null;
        }
    }
    Ml.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "colorMask"
    };
    class Rs {
        constructor(t){
            this._renderer = t;
        }
        async init(t) {
            return this._initPromise ? this._initPromise : (this._initPromise = this._createDeviceAndAdaptor(t).then((e)=>{
                this.gpu = e, this._renderer.runners.contextChange.emit(this.gpu);
            }), this._initPromise);
        }
        contextChange(t) {
            this._renderer.gpu = t;
        }
        async _createDeviceAndAdaptor(t) {
            const e = await navigator.gpu.requestAdapter({
                powerPreference: t.powerPreference,
                forceFallbackAdapter: t.forceFallbackAdapter
            }), i = [
                "texture-compression-bc",
                "texture-compression-astc",
                "texture-compression-etc2"
            ].filter((n)=>e.features.has(n)), s = await e.requestDevice({
                requiredFeatures: i
            });
            return {
                adapter: e,
                device: s
            };
        }
        destroy() {
            this.gpu = null, this._renderer = null;
        }
    }
    Rs.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "device"
    }, Rs.defaultOptions = {
        powerPreference: void 0,
        forceFallbackAdapter: !1
    };
    var nE = Object.defineProperty, E_ = Object.getOwnPropertySymbols, oE = Object.prototype.hasOwnProperty, aE = Object.prototype.propertyIsEnumerable, A_ = (r1, t, e)=>t in r1 ? nE(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, P_ = (r1, t)=>{
        for(var e in t || (t = {}))oE.call(t, e) && A_(r1, e, t[e]);
        if (E_) for (var e of E_(t))aE.call(t, e) && A_(r1, e, t[e]);
        return r1;
    };
    class Cl {
        constructor(t){
            this._boundBindGroup = Object.create(null), this._boundVertexBuffer = Object.create(null), this._renderer = t;
        }
        renderStart() {
            this.commandFinished = new Promise((t)=>{
                this._resolveCommandFinished = t;
            }), this.commandEncoder = this._renderer.gpu.device.createCommandEncoder();
        }
        beginRenderPass(t) {
            this.endRenderPass(), this._clearCache(), this.renderPassEncoder = this.commandEncoder.beginRenderPass(t.descriptor);
        }
        endRenderPass() {
            this.renderPassEncoder && this.renderPassEncoder.end(), this.renderPassEncoder = null;
        }
        setViewport(t) {
            this.renderPassEncoder.setViewport(t.x, t.y, t.width, t.height, 0, 1);
        }
        setPipelineFromGeometryProgramAndState(t, e, i, s) {
            const n = this._renderer.pipeline.getPipeline(t, e, i, s);
            this.setPipeline(n);
        }
        setPipeline(t) {
            this._boundPipeline !== t && (this._boundPipeline = t, this.renderPassEncoder.setPipeline(t));
        }
        _setVertexBuffer(t, e) {
            this._boundVertexBuffer[t] !== e && (this._boundVertexBuffer[t] = e, this.renderPassEncoder.setVertexBuffer(t, this._renderer.buffer.updateBuffer(e)));
        }
        _setIndexBuffer(t) {
            if (this._boundIndexBuffer === t) return;
            this._boundIndexBuffer = t;
            const e = t.data.BYTES_PER_ELEMENT === 2 ? "uint16" : "uint32";
            this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(t), e);
        }
        resetBindGroup(t) {
            this._boundBindGroup[t] = null;
        }
        setBindGroup(t, e, i) {
            if (this._boundBindGroup[t] === e) return;
            this._boundBindGroup[t] = e, e._touch(this._renderer.textureGC.count);
            const s = this._renderer.bindGroup.getBindGroup(e, i, t);
            this.renderPassEncoder.setBindGroup(t, s);
        }
        setGeometry(t) {
            for(const e in t.attributes){
                const i = t.attributes[e];
                this._setVertexBuffer(i.location, i.buffer);
            }
            t.indexBuffer && this._setIndexBuffer(t.indexBuffer);
        }
        _setShaderBindGroups(t, e) {
            for(const i in t.groups){
                const s = t.groups[i];
                e || this._syncBindGroup(s), this.setBindGroup(i, s, t.gpuProgram);
            }
        }
        _syncBindGroup(t) {
            for(const e in t.resources){
                const i = t.resources[e];
                i.isUniformGroup && this._renderer.ubo.updateUniformGroup(i);
            }
        }
        draw(t) {
            const { geometry: e, shader: i, state: s, topology: n, size: o, start: a, instanceCount: l, skipSync: u } = t;
            this.setPipelineFromGeometryProgramAndState(e, i.gpuProgram, s, n), this.setGeometry(e), this._setShaderBindGroups(i, u), e.indexBuffer ? this.renderPassEncoder.drawIndexed(o || e.indexBuffer.data.length, l || e.instanceCount, a || 0) : this.renderPassEncoder.draw(o || e.getSize(), l || e.instanceCount, a || 0);
        }
        finishRenderPass() {
            this.renderPassEncoder && (this.renderPassEncoder.end(), this.renderPassEncoder = null);
        }
        postrender() {
            this.finishRenderPass(), this._gpu.device.queue.submit([
                this.commandEncoder.finish()
            ]), this._resolveCommandFinished(), this.commandEncoder = null;
        }
        restoreRenderPass() {
            const t = this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget, !1, [
                0,
                0,
                0,
                1
            ]);
            this.renderPassEncoder = this.commandEncoder.beginRenderPass(t);
            const e = this._boundPipeline, i = P_({}, this._boundVertexBuffer), s = this._boundIndexBuffer, n = P_({}, this._boundBindGroup);
            this._clearCache();
            const o = this._renderer.renderTarget.viewport;
            this.renderPassEncoder.setViewport(o.x, o.y, o.width, o.height, 0, 1), this.setPipeline(e);
            for(const a in i)this._setVertexBuffer(a, i[a]);
            for(const a in n)this.setBindGroup(a, n[a], null);
            this._setIndexBuffer(s);
        }
        _clearCache() {
            for(let t = 0; t < 16; t++)this._boundBindGroup[t] = null, this._boundVertexBuffer[t] = null;
            this._boundIndexBuffer = null, this._boundPipeline = null;
        }
        destroy() {
            this._renderer = null, this._gpu = null, this._boundBindGroup = null, this._boundVertexBuffer = null, this._boundIndexBuffer = null, this._boundPipeline = null;
        }
        contextChange(t) {
            this._gpu = t;
        }
    }
    Cl.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "encoder",
        priority: 1
    };
    class Ol {
        constructor(t){
            this._renderTargetStencilState = Object.create(null), this._renderer = t, t.renderTarget.onRenderTargetChange.add(this);
        }
        onRenderTargetChange(t) {
            let e = this._renderTargetStencilState[t.uid];
            e || (e = this._renderTargetStencilState[t.uid] = {
                stencilMode: st.DISABLED,
                stencilReference: 0
            }), this._activeRenderTarget = t, this.setStencilMode(e.stencilMode, e.stencilReference);
        }
        setStencilMode(t, e) {
            const i = this._renderTargetStencilState[this._activeRenderTarget.uid];
            i.stencilMode = t, i.stencilReference = e;
            const s = this._renderer;
            s.pipeline.setStencilMode(t), s.encoder.renderPassEncoder.setStencilReference(e);
        }
        destroy() {
            this._renderer.renderTarget.onRenderTargetChange.remove(this), this._renderer = null, this._activeRenderTarget = null, this._renderTargetStencilState = null;
        }
    }
    Ol.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "stencil"
    };
    const Hr = {
        i32: {
            align: 4,
            size: 4
        },
        u32: {
            align: 4,
            size: 4
        },
        f32: {
            align: 4,
            size: 4
        },
        f16: {
            align: 2,
            size: 2
        },
        "vec2<i32>": {
            align: 8,
            size: 8
        },
        "vec2<u32>": {
            align: 8,
            size: 8
        },
        "vec2<f32>": {
            align: 8,
            size: 8
        },
        "vec2<f16>": {
            align: 4,
            size: 4
        },
        "vec3<i32>": {
            align: 16,
            size: 12
        },
        "vec3<u32>": {
            align: 16,
            size: 12
        },
        "vec3<f32>": {
            align: 16,
            size: 12
        },
        "vec3<f16>": {
            align: 8,
            size: 6
        },
        "vec4<i32>": {
            align: 16,
            size: 16
        },
        "vec4<u32>": {
            align: 16,
            size: 16
        },
        "vec4<f32>": {
            align: 16,
            size: 16
        },
        "vec4<f16>": {
            align: 8,
            size: 8
        },
        "mat2x2<f32>": {
            align: 8,
            size: 16
        },
        "mat2x2<f16>": {
            align: 4,
            size: 8
        },
        "mat3x2<f32>": {
            align: 8,
            size: 24
        },
        "mat3x2<f16>": {
            align: 4,
            size: 12
        },
        "mat4x2<f32>": {
            align: 8,
            size: 32
        },
        "mat4x2<f16>": {
            align: 4,
            size: 16
        },
        "mat2x3<f32>": {
            align: 16,
            size: 32
        },
        "mat2x3<f16>": {
            align: 8,
            size: 16
        },
        "mat3x3<f32>": {
            align: 16,
            size: 48
        },
        "mat3x3<f16>": {
            align: 8,
            size: 24
        },
        "mat4x3<f32>": {
            align: 16,
            size: 64
        },
        "mat4x3<f16>": {
            align: 8,
            size: 32
        },
        "mat2x4<f32>": {
            align: 16,
            size: 32
        },
        "mat2x4<f16>": {
            align: 8,
            size: 16
        },
        "mat3x4<f32>": {
            align: 16,
            size: 48
        },
        "mat3x4<f16>": {
            align: 8,
            size: 24
        },
        "mat4x4<f32>": {
            align: 16,
            size: 64
        },
        "mat4x4<f16>": {
            align: 8,
            size: 32
        }
    };
    function R_(r1) {
        const t = r1.map((i)=>({
                data: i,
                offset: 0,
                size: 0
            }));
        let e = 0;
        for(let i = 0; i < t.length; i++){
            const s = t[i];
            let n = Hr[s.data.type].size;
            const o = Hr[s.data.type].align;
            if (!Hr[s.data.type]) throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${s.data.type}`);
            s.data.size > 1 && (n = Math.max(n, o) * s.data.size), e = Math.ceil(e / o) * o, s.size = n, s.offset = e, e += n;
        }
        return e = Math.ceil(e / 16) * 16, {
            uboElements: t,
            size: e
        };
    }
    function w_(r1, t) {
        const { size: e, align: i } = Hr[r1.data.type], s = (i - e) / 4;
        return `
         v = uv.${r1.data.name};
         ${t !== 0 ? `offset += ${t};` : ""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${r1.data.size * (e / 4)}; i++)
         {
             for(var j = 0; j < ${e / 4}; j++)
             {
                 data[arrayOffset++] = v[t++];
             }
             ${s !== 0 ? `arrayOffset += ${s};` : ""}
         }
     `;
    }
    function M_(r1) {
        return Ha(r1, "uboWgsl", w_, dg);
    }
    class Gl extends $a {
        constructor(){
            super({
                createUboElements: R_,
                generateUboSync: M_
            });
        }
    }
    Gl.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "ubo"
    };
    const ne = 128;
    class Bl {
        constructor(t){
            this._bindGroupHash = Object.create(null), this._buffers = [], this._bindGroups = [], this._bufferResources = [], this._renderer = t, this._batchBuffer = new S_({
                minUniformOffsetAlignment: ne
            });
            const e = 256 / ne;
            for(let i = 0; i < e; i++){
                let s = $.UNIFORM | $.COPY_DST;
                i === 0 && (s |= $.COPY_SRC), this._buffers.push(new _t({
                    data: this._batchBuffer.data,
                    usage: s
                }));
            }
        }
        renderEnd() {
            this._uploadBindGroups(), this._resetBindGroups();
        }
        _resetBindGroups() {
            for(const t in this._bindGroupHash)this._bindGroupHash[t] = null;
            this._batchBuffer.clear();
        }
        getUniformBindGroup(t, e) {
            if (!e && this._bindGroupHash[t.uid]) return this._bindGroupHash[t.uid];
            this._renderer.ubo.ensureUniformGroup(t);
            const i = t.buffer.data, s = this._batchBuffer.addEmptyGroup(i.length);
            return this._renderer.ubo.syncUniformGroup(t, this._batchBuffer.data, s / 4), this._bindGroupHash[t.uid] = this._getBindGroup(s / ne), this._bindGroupHash[t.uid];
        }
        getUboResource(t) {
            this._renderer.ubo.updateUniformGroup(t);
            const e = t.buffer.data, i = this._batchBuffer.addGroup(e);
            return this._getBufferResource(i / ne);
        }
        getArrayBindGroup(t) {
            const e = this._batchBuffer.addGroup(t);
            return this._getBindGroup(e / ne);
        }
        getArrayBufferResource(t) {
            const e = this._batchBuffer.addGroup(t) / ne;
            return this._getBufferResource(e);
        }
        _getBufferResource(t) {
            if (!this._bufferResources[t]) {
                const e = this._buffers[t % 2];
                this._bufferResources[t] = new Ts({
                    buffer: e,
                    offset: (t / 2 | 0) * 256,
                    size: ne
                });
            }
            return this._bufferResources[t];
        }
        _getBindGroup(t) {
            if (!this._bindGroups[t]) {
                const e = new $t({
                    0: this._getBufferResource(t)
                });
                this._bindGroups[t] = e;
            }
            return this._bindGroups[t];
        }
        _uploadBindGroups() {
            const t = this._renderer.buffer, e = this._buffers[0];
            e.update(this._batchBuffer.byteIndex), t.updateBuffer(e);
            const i = this._renderer.gpu.device.createCommandEncoder();
            for(let s = 1; s < this._buffers.length; s++){
                const n = this._buffers[s];
                i.copyBufferToBuffer(t.getGPUBuffer(e), ne, t.getGPUBuffer(n), 0, this._batchBuffer.byteIndex);
            }
            this._renderer.gpu.device.queue.submit([
                i.finish()
            ]);
        }
        destroy() {
            for(let t = 0; t < this._bindGroups.length; t++)this._bindGroups[t].destroy();
            this._bindGroups = null, this._bindGroupHash = null;
            for(let t = 0; t < this._buffers.length; t++)this._buffers[t].destroy();
            this._buffers = null;
            for(let t = 0; t < this._bufferResources.length; t++)this._bufferResources[t].destroy();
            this._bufferResources = null, this._batchBuffer.destroy(), this._bindGroupHash = null, this._renderer = null;
        }
    }
    Bl.extension = {
        type: [
            x.WebGPUPipes
        ],
        name: "uniformBatch"
    };
    var lE = Object.defineProperty, uE = Object.defineProperties, cE = Object.getOwnPropertyDescriptors, C_ = Object.getOwnPropertySymbols, hE = Object.prototype.hasOwnProperty, dE = Object.prototype.propertyIsEnumerable, O_ = (r1, t, e)=>t in r1 ? lE(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, pE = (r1, t)=>{
        for(var e in t || (t = {}))hE.call(t, e) && O_(r1, e, t[e]);
        if (C_) for (var e of C_(t))dE.call(t, e) && O_(r1, e, t[e]);
        return r1;
    }, fE = (r1, t)=>uE(r1, cE(t));
    const mE = {
        "point-list": 0,
        "line-list": 1,
        "line-strip": 2,
        "triangle-list": 3,
        "triangle-strip": 4
    };
    function gE(r1, t, e, i, s) {
        return r1 << 24 | t << 16 | e << 10 | i << 5 | s;
    }
    function _E(r1, t, e, i) {
        return e << 6 | r1 << 3 | i << 1 | t;
    }
    class Il {
        constructor(t){
            this._moduleCache = Object.create(null), this._bufferLayoutsCache = Object.create(null), this._pipeCache = Object.create(null), this._pipeStateCaches = Object.create(null), this._colorMask = 15, this._multisampleCount = 1, this._renderer = t;
        }
        contextChange(t) {
            this._gpu = t, this.setStencilMode(st.DISABLED), this._updatePipeHash();
        }
        setMultisampleCount(t) {
            this._multisampleCount !== t && (this._multisampleCount = t, this._updatePipeHash());
        }
        setRenderTarget(t) {
            this._multisampleCount = t.msaaSamples, this._depthStencilAttachment = t.descriptor.depthStencilAttachment ? 1 : 0, this._updatePipeHash();
        }
        setColorMask(t) {
            this._colorMask !== t && (this._colorMask = t, this._updatePipeHash());
        }
        setStencilMode(t) {
            this._stencilMode !== t && (this._stencilMode = t, this._stencilState = ie[t], this._updatePipeHash());
        }
        setPipeline(t, e, i, s) {
            const n = this.getPipeline(t, e, i);
            s.setPipeline(n);
        }
        getPipeline(t, e, i, s) {
            t._layoutKey || (Ba(t, e.attributeData), this._generateBufferKey(t)), s = s || t.topology;
            const n = gE(t._layoutKey, e._layoutKey, i.data, i._blendModeId, mE[s]);
            return this._pipeCache[n] ? this._pipeCache[n] : (this._pipeCache[n] = this._createPipeline(t, e, i, s), this._pipeCache[n]);
        }
        _createPipeline(t, e, i, s) {
            const n = this._gpu.device, o = this._createVertexBufferLayouts(t), a = this._renderer.state.getColorTargets(i);
            a[0].writeMask = this._stencilMode === st.RENDERING_MASK_ADD ? 0 : this._colorMask;
            const l = this._renderer.shader.getProgramData(e).pipeline, u = {
                vertex: {
                    module: this._getModule(e.vertex.source),
                    entryPoint: e.vertex.entryPoint,
                    buffers: o
                },
                fragment: {
                    module: this._getModule(e.fragment.source),
                    entryPoint: e.fragment.entryPoint,
                    targets: a
                },
                primitive: {
                    topology: s,
                    cullMode: i.cullMode
                },
                layout: l,
                multisample: {
                    count: this._multisampleCount
                },
                label: "PIXI Pipeline"
            };
            return this._depthStencilAttachment && (u.depthStencil = fE(pE({}, this._stencilState), {
                format: "depth24plus-stencil8",
                depthWriteEnabled: i.depthTest,
                depthCompare: i.depthTest ? "less" : "always"
            })), n.createRenderPipeline(u);
        }
        _getModule(t) {
            return this._moduleCache[t] || this._createModule(t);
        }
        _createModule(t) {
            const e = this._gpu.device;
            return this._moduleCache[t] = e.createShaderModule({
                code: t
            }), this._moduleCache[t];
        }
        _generateBufferKey(t) {
            const e = [];
            let i = 0;
            const s = Object.keys(t.attributes).sort();
            for(let o = 0; o < s.length; o++){
                const a = t.attributes[s[o]];
                e[i++] = a.location, e[i++] = a.offset, e[i++] = a.format, e[i++] = a.stride;
            }
            const n = e.join("");
            return t._layoutKey = mr(n, "geometry"), t._layoutKey;
        }
        _createVertexBufferLayouts(t) {
            if (this._bufferLayoutsCache[t._layoutKey]) return this._bufferLayoutsCache[t._layoutKey];
            const e = [];
            return t.buffers.forEach((i)=>{
                const s = {
                    arrayStride: 0,
                    stepMode: "vertex",
                    attributes: []
                }, n = s.attributes;
                for(const o in t.attributes){
                    const a = t.attributes[o];
                    a.buffer === i && (s.arrayStride = a.stride, s.stepMode = a.instance ? "instance" : "vertex", n.push({
                        shaderLocation: a.location,
                        offset: a.offset,
                        format: a.format
                    }));
                }
                n.length && e.push(s);
            }), this._bufferLayoutsCache[t._layoutKey] = e, e;
        }
        _updatePipeHash() {
            const t = _E(this._stencilMode, this._multisampleCount, this._colorMask, this._depthStencilAttachment);
            this._pipeStateCaches[t] || (this._pipeStateCaches[t] = Object.create(null)), this._pipeCache = this._pipeStateCaches[t];
        }
        destroy() {
            this._renderer = null, this._bufferLayoutsCache = null;
        }
    }
    Il.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "pipeline"
    };
    class G_ {
        constructor(){
            this.contexts = [], this.msaaTextures = [], this.msaaSamples = 1;
        }
    }
    class B_ {
        init(t, e) {
            this._renderer = t, this._renderTargetSystem = e;
        }
        copyToTexture(t, e, i, s, n) {
            const o = this._renderer, a = this._getGpuColorTexture(t), l = o.texture.getGpuSource(e.source);
            return o.encoder.commandEncoder.copyTextureToTexture({
                texture: a,
                origin: i
            }, {
                texture: l,
                origin: n
            }, s), e;
        }
        startRenderPass(t, e = !0, i, s) {
            const n = this._renderTargetSystem.getGpuRenderTarget(t), o = this.getDescriptor(t, e, i);
            n.descriptor = o, this._renderer.pipeline.setRenderTarget(n), this._renderer.encoder.beginRenderPass(n), this._renderer.encoder.setViewport(s);
        }
        finishRenderPass() {
            this._renderer.encoder.endRenderPass();
        }
        _getGpuColorTexture(t) {
            const e = this._renderTargetSystem.getGpuRenderTarget(t);
            return e.contexts[0] ? e.contexts[0].getCurrentTexture() : this._renderer.texture.getGpuSource(t.colorTextures[0].source);
        }
        getDescriptor(t, e, i) {
            typeof e == "boolean" && (e = e ? ft.ALL : ft.NONE);
            const s = this._renderTargetSystem, n = s.getGpuRenderTarget(t), o = t.colorTextures.map((l, u)=>{
                const c = n.contexts[u];
                let h, p;
                c ? h = c.getCurrentTexture().createView() : h = this._renderer.texture.getGpuSource(l).createView({
                    mipLevelCount: 1
                }), n.msaaTextures[u] && (p = h, h = this._renderer.texture.getTextureView(n.msaaTextures[u]));
                const f = e & ft.COLOR ? "clear" : "load";
                return i != null || (i = s.defaultClearColor), {
                    view: h,
                    resolveTarget: p,
                    clearValue: i,
                    storeOp: "store",
                    loadOp: f
                };
            });
            let a;
            if ((t.stencil || t.depth) && !t.depthStencilTexture && (t.ensureDepthStencilTexture(), t.depthStencilTexture.source.sampleCount = n.msaa ? 4 : 1), t.depthStencilTexture) {
                const l = e & ft.STENCIL ? "clear" : "load", u = e & ft.DEPTH ? "clear" : "load";
                a = {
                    view: this._renderer.texture.getGpuSource(t.depthStencilTexture.source).createView(),
                    stencilStoreOp: "store",
                    stencilLoadOp: l,
                    depthClearValue: 1,
                    depthLoadOp: u,
                    depthStoreOp: "store"
                };
            }
            return {
                colorAttachments: o,
                depthStencilAttachment: a
            };
        }
        clear(t, e = !0, i, s) {
            if (!e) return;
            const { gpu: n, encoder: o } = this._renderer, a = n.device;
            if (o.commandEncoder === null) {
                const l = a.createCommandEncoder(), u = this.getDescriptor(t, e, i), c = l.beginRenderPass(u);
                c.setViewport(s.x, s.y, s.width, s.height, 0, 1), c.end();
                const h = l.finish();
                a.queue.submit([
                    h
                ]);
            } else this.startRenderPass(t, e, i, s);
        }
        initGpuRenderTarget(t) {
            t.isRoot = !0;
            const e = new G_;
            return t.colorTextures.forEach((i, s)=>{
                if (Qt.test(i.resource)) {
                    const n = i.resource.getContext("webgpu"), o = i.transparent ? "premultiplied" : "opaque";
                    try {
                        n.configure({
                            device: this._renderer.gpu.device,
                            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
                            format: "bgra8unorm",
                            alphaMode: o
                        });
                    } catch (a) {
                        console.error(a);
                    }
                    e.contexts[s] = n;
                }
                if (e.msaa = i.source.antialias, i.source.antialias) {
                    const n = new rt({
                        width: 0,
                        height: 0,
                        sampleCount: 4
                    });
                    e.msaaTextures[s] = n;
                }
            }), e.msaa && (e.msaaSamples = 4, t.depthStencilTexture && (t.depthStencilTexture.source.sampleCount = 4)), e;
        }
        ensureDepthStencilTexture(t) {
            const e = this._renderTargetSystem.getGpuRenderTarget(t);
            t.depthStencilTexture && e.msaa && (t.depthStencilTexture.source.sampleCount = 4);
        }
        resizeGpuRenderTarget(t) {
            const e = this._renderTargetSystem.getGpuRenderTarget(t);
            e.width = t.width, e.height = t.height, e.msaa && t.colorTextures.forEach((i, s)=>{
                const n = e.msaaTextures[s];
                n == null || n.resize(i.source.width, i.source.height, i.source._resolution);
            });
        }
    }
    class Fl extends Va {
        constructor(t){
            super(t), this.adaptor = new B_, this.adaptor.init(t, this);
        }
    }
    Fl.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "renderTarget"
    };
    class Dl {
        constructor(){
            this._gpuProgramData = Object.create(null);
        }
        contextChange(t) {
            this._gpu = t;
        }
        getProgramData(t) {
            return this._gpuProgramData[t._layoutKey] || this._createGPUProgramData(t);
        }
        _createGPUProgramData(t) {
            const e = this._gpu.device, i = t.gpuLayout.map((n)=>e.createBindGroupLayout({
                    entries: n
                })), s = {
                bindGroupLayouts: i
            };
            return this._gpuProgramData[t._layoutKey] = {
                bindGroups: i,
                pipeline: e.createPipelineLayout(s)
            }, this._gpuProgramData[t._layoutKey];
        }
        destroy() {
            this._gpu = null, this._gpuProgramData = null;
        }
    }
    Dl.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "shader"
    };
    const Tt = {};
    Tt.normal = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        }
    }, Tt.add = {
        alpha: {
            srcFactor: "src-alpha",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "one",
            dstFactor: "one",
            operation: "add"
        }
    }, Tt.multiply = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "dst",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        }
    }, Tt.screen = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "one",
            dstFactor: "one-minus-src",
            operation: "add"
        }
    }, Tt.overlay = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "one",
            dstFactor: "one-minus-src",
            operation: "add"
        }
    }, Tt.none = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "zero",
            dstFactor: "zero",
            operation: "add"
        }
    }, Tt["normal-npm"] = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "src-alpha",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        }
    }, Tt["add-npm"] = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one",
            operation: "add"
        },
        color: {
            srcFactor: "src-alpha",
            dstFactor: "one",
            operation: "add"
        }
    }, Tt["screen-npm"] = {
        alpha: {
            srcFactor: "one",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "src-alpha",
            dstFactor: "one-minus-src",
            operation: "add"
        }
    }, Tt.erase = {
        alpha: {
            srcFactor: "zero",
            dstFactor: "one-minus-src-alpha",
            operation: "add"
        },
        color: {
            srcFactor: "zero",
            dstFactor: "one-minus-src",
            operation: "add"
        }
    };
    class Ul {
        constructor(){
            this.defaultState = new Bt, this.defaultState.blend = !0;
        }
        contextChange(t) {
            this.gpu = t;
        }
        getColorTargets(t) {
            return [
                {
                    format: "bgra8unorm",
                    writeMask: 0,
                    blend: Tt[t.blendMode] || Tt.normal
                }
            ];
        }
        destroy() {
            this.gpu = null;
        }
    }
    Ul.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "state"
    };
    const I_ = {
        type: "image",
        upload (r1, t, e) {
            const i = r1.resource, s = (r1.pixelWidth | 0) * (r1.pixelHeight | 0), n = i.byteLength / s;
            e.device.queue.writeTexture({
                texture: t
            }, i, {
                offset: 0,
                rowsPerImage: r1.pixelHeight,
                bytesPerRow: r1.pixelHeight * n
            }, {
                width: r1.pixelWidth,
                height: r1.pixelHeight,
                depthOrArrayLayers: 1
            });
        }
    }, kl = {
        "bc1-rgba-unorm": {
            blockBytes: 8,
            blockWidth: 4,
            blockHeight: 4
        },
        "bc2-rgba-unorm": {
            blockBytes: 16,
            blockWidth: 4,
            blockHeight: 4
        },
        "bc3-rgba-unorm": {
            blockBytes: 16,
            blockWidth: 4,
            blockHeight: 4
        },
        "bc7-rgba-unorm": {
            blockBytes: 16,
            blockWidth: 4,
            blockHeight: 4
        },
        "etc1-rgb-unorm": {
            blockBytes: 8,
            blockWidth: 4,
            blockHeight: 4
        },
        "etc2-rgba8unorm": {
            blockBytes: 16,
            blockWidth: 4,
            blockHeight: 4
        },
        "astc-4x4-unorm": {
            blockBytes: 16,
            blockWidth: 4,
            blockHeight: 4
        }
    }, bE = {
        blockBytes: 4,
        blockWidth: 1,
        blockHeight: 1
    }, F_ = {
        type: "compressed",
        upload (r1, t, e) {
            let i = r1.pixelWidth, s = r1.pixelHeight;
            const n = kl[r1.format] || bE;
            for(let o = 0; o < r1.resource.length; o++){
                const a = r1.resource[o], l = Math.ceil(i / n.blockWidth) * n.blockBytes;
                e.device.queue.writeTexture({
                    texture: t,
                    mipLevel: o
                }, a, {
                    offset: 0,
                    bytesPerRow: l
                }, {
                    width: Math.ceil(i / n.blockWidth) * n.blockWidth,
                    height: Math.ceil(s / n.blockHeight) * n.blockHeight,
                    depthOrArrayLayers: 1
                }), i = Math.max(i >> 1, 1), s = Math.max(s >> 1, 1);
            }
        }
    }, Ll = {
        type: "image",
        upload (r1, t, e) {
            const i = r1.resource;
            if (!i) return;
            const s = Math.min(t.width, r1.resourceWidth || r1.pixelWidth), n = Math.min(t.height, r1.resourceHeight || r1.pixelHeight), o = r1.alphaMode === "premultiply-alpha-on-upload";
            e.device.queue.copyExternalImageToTexture({
                source: i
            }, {
                texture: t,
                premultipliedAlpha: o
            }, {
                width: s,
                height: n
            });
        }
    }, D_ = {
        type: "video",
        upload (r1, t, e) {
            Ll.upload(r1, t, e);
        }
    };
    class U_ {
        constructor(t){
            this.device = t, this.sampler = t.createSampler({
                minFilter: "linear"
            }), this.pipelines = {};
        }
        _getMipmapPipeline(t) {
            let e = this.pipelines[t];
            return e || (this.mipmapShaderModule || (this.mipmapShaderModule = this.device.createShaderModule({
                code: `
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `
            })), e = this.device.createRenderPipeline({
                layout: "auto",
                vertex: {
                    module: this.mipmapShaderModule,
                    entryPoint: "vertexMain"
                },
                fragment: {
                    module: this.mipmapShaderModule,
                    entryPoint: "fragmentMain",
                    targets: [
                        {
                            format: t
                        }
                    ]
                }
            }), this.pipelines[t] = e), e;
        }
        generateMipmap(t) {
            const e = this._getMipmapPipeline(t.format);
            if (t.dimension === "3d" || t.dimension === "1d") throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");
            let i = t;
            const s = t.depthOrArrayLayers || 1, n = t.usage & GPUTextureUsage.RENDER_ATTACHMENT;
            if (!n) {
                const l = {
                    size: {
                        width: Math.ceil(t.width / 2),
                        height: Math.ceil(t.height / 2),
                        depthOrArrayLayers: s
                    },
                    format: t.format,
                    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
                    mipLevelCount: t.mipLevelCount - 1
                };
                i = this.device.createTexture(l);
            }
            const o = this.device.createCommandEncoder({}), a = e.getBindGroupLayout(0);
            for(let l = 0; l < s; ++l){
                let u = t.createView({
                    baseMipLevel: 0,
                    mipLevelCount: 1,
                    dimension: "2d",
                    baseArrayLayer: l,
                    arrayLayerCount: 1
                }), c = n ? 1 : 0;
                for(let h = 1; h < t.mipLevelCount; ++h){
                    const p = i.createView({
                        baseMipLevel: c++,
                        mipLevelCount: 1,
                        dimension: "2d",
                        baseArrayLayer: l,
                        arrayLayerCount: 1
                    }), f = o.beginRenderPass({
                        colorAttachments: [
                            {
                                view: p,
                                storeOp: "store",
                                loadOp: "clear",
                                clearValue: {
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 0
                                }
                            }
                        ]
                    }), m = this.device.createBindGroup({
                        layout: a,
                        entries: [
                            {
                                binding: 0,
                                resource: this.sampler
                            },
                            {
                                binding: 1,
                                resource: u
                            }
                        ]
                    });
                    f.setPipeline(e), f.setBindGroup(0, m), f.draw(3, 1, 0, 0), f.end(), u = p;
                }
            }
            if (!n) {
                const l = {
                    width: Math.ceil(t.width / 2),
                    height: Math.ceil(t.height / 2),
                    depthOrArrayLayers: s
                };
                for(let u = 1; u < t.mipLevelCount; ++u)o.copyTextureToTexture({
                    texture: i,
                    mipLevel: u - 1
                }, {
                    texture: t,
                    mipLevel: u
                }, l), l.width = Math.ceil(l.width / 2), l.height = Math.ceil(l.height / 2);
            }
            return this.device.queue.submit([
                o.finish()
            ]), n || i.destroy(), t;
        }
    }
    class $l {
        constructor(t){
            this.managedTextures = [], this._gpuSources = Object.create(null), this._gpuSamplers = Object.create(null), this._bindGroupHash = Object.create(null), this._textureViewHash = Object.create(null), this._uploads = {
                image: Ll,
                buffer: I_,
                video: D_,
                compressed: F_
            }, this._renderer = t;
        }
        contextChange(t) {
            this._gpu = t;
        }
        initSource(t) {
            if (t.autoGenerateMipmaps) {
                const l = Math.max(t.pixelWidth, t.pixelHeight);
                t.mipLevelCount = Math.floor(Math.log2(l)) + 1;
            }
            let e = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST;
            t.uploadMethodId !== "compressed" && (e |= GPUTextureUsage.RENDER_ATTACHMENT, e |= GPUTextureUsage.COPY_SRC);
            const i = kl[t.format] || {
                blockBytes: 4,
                blockWidth: 1,
                blockHeight: 1
            }, s = Math.ceil(t.pixelWidth / i.blockWidth) * i.blockWidth, n = Math.ceil(t.pixelHeight / i.blockHeight) * i.blockHeight, o = {
                label: t.label,
                size: {
                    width: s,
                    height: n
                },
                format: t.format,
                sampleCount: t.sampleCount,
                mipLevelCount: t.mipLevelCount,
                dimension: t.dimension,
                usage: e
            }, a = this._gpu.device.createTexture(o);
            return this._gpuSources[t.uid] = a, this.managedTextures.includes(t) || (t.on("update", this.onSourceUpdate, this), t.on("resize", this.onSourceResize, this), t.on("destroy", this.onSourceDestroy, this), t.on("unload", this.onSourceUnload, this), t.on("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.push(t)), this.onSourceUpdate(t), a;
        }
        onSourceUpdate(t) {
            const e = this.getGpuSource(t);
            e && (this._uploads[t.uploadMethodId] && this._uploads[t.uploadMethodId].upload(t, e, this._gpu), t.autoGenerateMipmaps && t.mipLevelCount > 1 && this.onUpdateMipmaps(t));
        }
        onSourceUnload(t) {
            const e = this._gpuSources[t.uid];
            e && (this._gpuSources[t.uid] = null, e.destroy());
        }
        onUpdateMipmaps(t) {
            this._mipmapGenerator || (this._mipmapGenerator = new U_(this._gpu.device));
            const e = this.getGpuSource(t);
            this._mipmapGenerator.generateMipmap(e);
        }
        onSourceDestroy(t) {
            t.off("update", this.onSourceUpdate, this), t.off("unload", this.onSourceUnload, this), t.off("destroy", this.onSourceDestroy, this), t.off("resize", this.onSourceResize, this), t.off("updateMipmaps", this.onUpdateMipmaps, this), this.managedTextures.splice(this.managedTextures.indexOf(t), 1), this.onSourceUnload(t);
        }
        onSourceResize(t) {
            const e = this._gpuSources[t.uid];
            e ? (e.width !== t.pixelWidth || e.height !== t.pixelHeight) && (this._textureViewHash[t.uid] = null, this._bindGroupHash[t.uid] = null, this.onSourceUnload(t), this.initSource(t)) : this.initSource(t);
        }
        _initSampler(t) {
            return this._gpuSamplers[t._resourceId] = this._gpu.device.createSampler(t), this._gpuSamplers[t._resourceId];
        }
        getGpuSampler(t) {
            return this._gpuSamplers[t._resourceId] || this._initSampler(t);
        }
        getGpuSource(t) {
            return this._gpuSources[t.uid] || this.initSource(t);
        }
        getTextureBindGroup(t) {
            var e;
            return (e = this._bindGroupHash[t.uid]) != null ? e : this._createTextureBindGroup(t);
        }
        _createTextureBindGroup(t) {
            const e = t.source, i = e.uid;
            return this._bindGroupHash[i] = new $t({
                0: e,
                1: e.style
            }), this._bindGroupHash[i];
        }
        getTextureView(t) {
            var e;
            const i = t.source;
            return (e = this._textureViewHash[i.uid]) != null ? e : this._createTextureView(i);
        }
        _createTextureView(t) {
            return this._textureViewHash[t.uid] = this.getGpuSource(t).createView(), this._textureViewHash[t.uid];
        }
        generateCanvas(t) {
            const e = this._renderer, i = e.gpu.device.createCommandEncoder(), s = z.get().createCanvas();
            s.width = t.source.pixelWidth, s.height = t.source.pixelHeight;
            const n = s.getContext("webgpu");
            return n.configure({
                device: e.gpu.device,
                usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
                format: navigator.gpu.getPreferredCanvasFormat(),
                alphaMode: "premultiplied"
            }), i.copyTextureToTexture({
                texture: e.texture.getGpuSource(t.source),
                origin: {
                    x: 0,
                    y: 0
                }
            }, {
                texture: n.getCurrentTexture()
            }, {
                width: s.width,
                height: s.height
            }), e.gpu.device.queue.submit([
                i.finish()
            ]), s;
        }
        getPixels(t) {
            const e = this.generateCanvas(t), i = Vt.getOptimalCanvasAndContext(e.width, e.height), s = i.context;
            s.drawImage(e, 0, 0);
            const { width: n, height: o } = e, a = s.getImageData(0, 0, n, o), l = new Uint8ClampedArray(a.data.buffer);
            return Vt.returnCanvasAndContext(i), {
                pixels: l,
                width: n,
                height: o
            };
        }
        destroy() {
            this.managedTextures.slice().forEach((t)=>this.onSourceDestroy(t)), this.managedTextures = null;
            for (const t of Object.keys(this._bindGroupHash)){
                const e = Number(t), i = this._bindGroupHash[e];
                i == null || i.destroy(), this._bindGroupHash[e] = null;
            }
            this._gpu = null, this._mipmapGenerator = null, this._gpuSources = null, this._bindGroupHash = null, this._textureViewHash = null, this._gpuSamplers = null;
        }
    }
    $l.extension = {
        type: [
            x.WebGPUSystem
        ],
        name: "texture"
    };
    class Nl {
        init() {
            const t = new nt({
                uTransformMatrix: {
                    value: new B,
                    type: "mat3x3<f32>"
                },
                uColor: {
                    value: new Float32Array([
                        1,
                        1,
                        1,
                        1
                    ]),
                    type: "vec4<f32>"
                },
                uRound: {
                    value: 0,
                    type: "f32"
                }
            }), e = $e({
                name: "graphics",
                bits: [
                    ki,
                    $i(wt),
                    Jd,
                    He
                ]
            });
            this.shader = new yt({
                gpuProgram: e,
                resources: {
                    localUniforms: t
                }
            });
        }
        execute(t, e) {
            const i = e.context, s = i.customShader || this.shader, n = t.renderer, o = n.graphicsContext, { geometry: a, instructions: l } = o.getContextRenderData(i), u = n.encoder;
            u.setPipelineFromGeometryProgramAndState(a, s.gpuProgram, t.state), u.setGeometry(a);
            const c = n.globalUniforms.bindGroup;
            u.setBindGroup(0, c, s.gpuProgram);
            const h = n.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms, !0);
            u.setBindGroup(2, h, s.gpuProgram);
            const p = l.instructions;
            for(let f = 0; f < l.instructionSize; f++){
                const m = p[f];
                if (s.groups[1] = m.bindGroup, !m.gpuBindGroup) {
                    const _ = m.textures;
                    m.bindGroup = fi(_.textures, _.count), m.gpuBindGroup = n.bindGroup.getBindGroup(m.bindGroup, s.gpuProgram, 1);
                }
                u.setBindGroup(1, m.bindGroup, s.gpuProgram), u.renderPassEncoder.drawIndexed(m.size, 1, m.start);
            }
        }
        destroy() {
            this.shader.destroy(!0), this.shader = null;
        }
    }
    Nl.extension = {
        type: [
            x.WebGPUPipesAdaptor
        ],
        name: "graphics"
    };
    class Hl {
        init() {
            const t = $e({
                name: "mesh",
                bits: [
                    ze,
                    jm,
                    He
                ]
            });
            this._shader = new yt({
                gpuProgram: t,
                resources: {
                    uTexture: P.EMPTY._source,
                    uSampler: P.EMPTY._source.style,
                    textureUniforms: {
                        uTextureMatrix: {
                            type: "mat3x3<f32>",
                            value: new B
                        }
                    }
                }
            });
        }
        execute(t, e) {
            const i = t.renderer;
            let s = e._shader;
            if (!s) s = this._shader, s.resources.uTexture = e.texture.source, s.resources.uSampler = e.texture.source.style, s.resources.textureUniforms.uniforms.uTextureMatrix = e.texture.textureMatrix.mapCoord;
            else if (!s.gpuProgram) return;
            const n = s.gpuProgram;
            if (n.autoAssignGlobalUniforms && (s.groups[0] = i.globalUniforms.bindGroup), n.autoAssignLocalUniforms) {
                const o = t.localUniforms;
                s.groups[1] = i.renderPipes.uniformBatch.getUniformBindGroup(o, !0);
            }
            i.encoder.draw({
                geometry: e._geometry,
                shader: s,
                state: e.state
            });
        }
        destroy() {
            this._shader.destroy(!0), this._shader = null;
        }
    }
    Hl.extension = {
        type: [
            x.WebGPUPipesAdaptor
        ],
        name: "mesh"
    };
    const vE = [
        ...Al,
        Gl,
        Cl,
        Rs,
        wl,
        $l,
        Fl,
        Dl,
        Ul,
        Il,
        Ml,
        Ol,
        Rl
    ], yE = [
        ...Pl,
        Bl
    ], xE = [
        Aa,
        Hl,
        Nl
    ], k_ = [], L_ = [], $_ = [];
    U.handleByNamedList(x.WebGPUSystem, k_), U.handleByNamedList(x.WebGPUPipes, L_), U.handleByNamedList(x.WebGPUPipesAdaptor, $_), U.add(...vE, ...yE, ...xE);
    class N_ extends Pr {
        constructor(){
            const t = {
                name: "webgpu",
                type: vt.WEBGPU,
                systems: k_,
                renderPipes: L_,
                renderPipeAdaptors: $_
            };
            super(t);
        }
    }
    var TE = {
        __proto__: null,
        WebGPURenderer: N_
    };
    const SE = {
        POINTS: "point-list",
        LINES: "line-list",
        LINE_STRIP: "line-strip",
        TRIANGLES: "triangle-list",
        TRIANGLE_STRIP: "triangle-strip"
    }, EE = new Proxy(SE, {
        get (r1, t) {
            return r1[t];
        }
    }), AE = new j(0, 0, 1, 1);
    function PE(r1, t, e) {
        e || (e = AE);
        const i = t.pixelWidth, s = t.pixelHeight;
        return r1.x = e.x * i | 0, r1.y = e.y * s | 0, r1.width = e.width * i | 0, r1.height = e.height * s | 0, r1;
    }
    var H_ = ((r1)=>(r1[r1.NONE = 0] = "NONE", r1[r1.LOW = 2] = "LOW", r1[r1.MEDIUM = 4] = "MEDIUM", r1[r1.HIGH = 8] = "HIGH", r1))(H_ || {}), Xl = ((r1)=>(r1.CLAMP = "clamp-to-edge", r1.REPEAT = "repeat", r1.MIRRORED_REPEAT = "mirror-repeat", r1))(Xl || {});
    const RE = new Proxy(Xl, {
        get (r1, t) {
            return r1[t];
        }
    });
    var zl = ((r1)=>(r1.NEAREST = "nearest", r1.LINEAR = "linear", r1))(zl || {});
    const wE = new Proxy(zl, {
        get (r1, t) {
            return r1[t];
        }
    });
    class ME {
        constructor(){
            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
        }
        set(t, e, i) {
            const s = e.width, n = e.height;
            if (i) {
                const o = t.width / 2 / s, a = t.height / 2 / n, l = t.x / s + o, u = t.y / n + a;
                i = k.add(i, k.NW), this.x0 = l + o * k.uX(i), this.y0 = u + a * k.uY(i), i = k.add(i, 2), this.x1 = l + o * k.uX(i), this.y1 = u + a * k.uY(i), i = k.add(i, 2), this.x2 = l + o * k.uX(i), this.y2 = u + a * k.uY(i), i = k.add(i, 2), this.x3 = l + o * k.uX(i), this.y3 = u + a * k.uY(i);
            } else this.x0 = t.x / s, this.y0 = t.y / n, this.x1 = (t.x + t.width) / s, this.y1 = t.y / n, this.x2 = (t.x + t.width) / s, this.y2 = (t.y + t.height) / n, this.x3 = t.x / s, this.y3 = (t.y + t.height) / n;
            this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
        }
    }
    let CE = 0;
    function OE() {
        return CE++;
    }
    function GE(r1) {
        const t = r1.toString(), e = t.indexOf("{"), i = t.lastIndexOf("}");
        if (e === -1 || i === -1) throw new Error("getFunctionBody: No body found in function definition");
        return t.slice(e + 1, i).trim();
    }
    var BE = Object.defineProperty, ws = Object.getOwnPropertySymbols, X_ = Object.prototype.hasOwnProperty, z_ = Object.prototype.propertyIsEnumerable, j_ = (r1, t, e)=>t in r1 ? BE(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, IE = (r1, t)=>{
        for(var e in t || (t = {}))X_.call(t, e) && j_(r1, e, t[e]);
        if (ws) for (var e of ws(t))z_.call(t, e) && j_(r1, e, t[e]);
        return r1;
    }, FE = (r1, t)=>{
        var e = {};
        for(var i in r1)X_.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && ws) for (var i of ws(r1))t.indexOf(i) < 0 && z_.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class DE extends W {
        constructor(t){
            var e, i;
            typeof t == "function" && (t = {
                render: t
            });
            const s = t, { render: n } = s, o = FE(s, [
                "render"
            ]);
            super(IE({
                label: "RenderContainer"
            }, o)), this.batched = !1, this.bounds = new ut, this.canBundle = !1, this.renderPipeId = "customRender", n && (this.render = n), this.containsPoint = (e = t.containsPoint) != null ? e : ()=>!1, this.addBounds = (i = t.addBounds) != null ? i : ()=>!1;
        }
        render(t) {}
    }
    function UE(r1, t) {
        if (r1 === 16777215 || !t) return t;
        if (t === 16777215 || !r1) return r1;
        const e = r1 >> 16 & 255, i = r1 >> 8 & 255, s = r1 & 255, n = t >> 16 & 255, o = t >> 8 & 255, a = t & 255, l = e * n / 255, u = i * o / 255, c = s * a / 255;
        return (l << 16) + (u << 8) + c;
    }
    function kE(r1, t) {
        const e = t._scale, i = t._pivot, s = t._position, n = e._x, o = e._y, a = i._x, l = i._y;
        r1.a = t._cx * n, r1.b = t._sx * n, r1.c = t._cy * o, r1.d = t._sy * o, r1.tx = s._x - (a * r1.a + l * r1.c), r1.ty = s._y - (a * r1.b + l * r1.d);
    }
    function LE(r1, t, e) {
        const i = r1.a, s = r1.b, n = r1.c, o = r1.d, a = r1.tx, l = r1.ty, u = t.a, c = t.b, h = t.c, p = t.d;
        e.a = i * u + s * h, e.b = i * c + s * p, e.c = n * u + o * h, e.d = n * c + o * p, e.tx = a * u + l * h + t.tx, e.ty = a * c + l * p + t.ty;
    }
    const $E = {
        rectangle: Dn,
        polygon: Fn,
        triangle: Un,
        circle: fe,
        ellipse: fe,
        roundedRectangle: fe
    };
    function NE(r1) {
        r1 instanceof Jt && (r1 = {
            path: r1,
            textureMatrix: null,
            out: null
        });
        const t = [], e = [], i = [], s = r1.path.shapePath, n = r1.textureMatrix;
        s.shapePrimitives.forEach(({ shape: a, transform: l })=>{
            const u = i.length, c = t.length / 2, h = [], p = $E[a.type];
            p.build(a, h), l && gi(h, l), p.triangulate(h, t, 2, c, i, u);
            const f = e.length / 2;
            n ? (l && n.append(l.clone().invert()), Rn(t, 2, c, e, f, 2, t.length / 2 - c, n)) : wn(e, f, 2, t.length / 2 - c);
        });
        const o = r1.out;
        return o ? (o.positions = new Float32Array(t), o.uvs = new Float32Array(e), o.indices = new Uint32Array(i), o) : new te({
            positions: new Float32Array(t),
            uvs: new Float32Array(e),
            indices: new Uint32Array(i)
        });
    }
    var HE = Object.defineProperty, XE = Object.defineProperties, zE = Object.getOwnPropertyDescriptors, Ms = Object.getOwnPropertySymbols, V_ = Object.prototype.hasOwnProperty, W_ = Object.prototype.propertyIsEnumerable, Y_ = (r1, t, e)=>t in r1 ? HE(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, jE = (r1, t)=>{
        for(var e in t || (t = {}))V_.call(t, e) && Y_(r1, e, t[e]);
        if (Ms) for (var e of Ms(t))W_.call(t, e) && Y_(r1, e, t[e]);
        return r1;
    }, VE = (r1, t)=>XE(r1, zE(t)), WE = (r1, t)=>{
        var e = {};
        for(var i in r1)V_.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && Ms) for (var i of Ms(r1))t.indexOf(i) < 0 && W_.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class YE extends Dr {
        constructor(t){
            const e = t, { texture: i, verticesX: s, verticesY: n } = e, o = WE(e, [
                "texture",
                "verticesX",
                "verticesY"
            ]), a = new Ho(Zt({
                width: i.width,
                height: i.height,
                verticesX: s,
                verticesY: n
            }));
            super(Zt(VE(jE({}, o), {
                geometry: a,
                texture: i
            }))), this.texture = i, this.autoResize = !0;
        }
        textureUpdated() {
            const t = this.geometry, { width: e, height: i } = this.texture;
            this.autoResize && (t.width !== e || t.height !== i) && (t.width = e, t.height = i, t.build({}));
        }
        set texture(t) {
            var e;
            (e = this._texture) == null || e.off("update", this.textureUpdated, this), super.texture = t, t.on("update", this.textureUpdated, this), this.textureUpdated();
        }
        get texture() {
            return this._texture;
        }
        destroy(t) {
            this.texture.off("update", this.textureUpdated, this), super.destroy(t);
        }
    }
    var KE = Object.defineProperty, K_ = Object.getOwnPropertySymbols, qE = Object.prototype.hasOwnProperty, ZE = Object.prototype.propertyIsEnumerable, q_ = (r1, t, e)=>t in r1 ? KE(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, Z_ = (r1, t)=>{
        for(var e in t || (t = {}))qE.call(t, e) && q_(r1, e, t[e]);
        if (K_) for (var e of K_(t))ZE.call(t, e) && q_(r1, e, t[e]);
        return r1;
    };
    const Q_ = class Xb extends te {
        constructor(t){
            const { width: e, points: i, textureScale: s } = Z_(Z_({}, Xb.defaultOptions), t);
            super({
                positions: new Float32Array(i.length * 4),
                uvs: new Float32Array(i.length * 4),
                indices: new Uint32Array((i.length - 1) * 6)
            }), this.points = i, this._width = e, this.textureScale = s, this._build();
        }
        get width() {
            return this._width;
        }
        _build() {
            const t = this.points;
            if (!t) return;
            const e = this.getBuffer("aPosition"), i = this.getBuffer("aUV"), s = this.getIndex();
            if (t.length < 1) return;
            e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4), i.data = new Float32Array(t.length * 4), s.data = new Uint16Array((t.length - 1) * 6));
            const n = i.data, o = s.data;
            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
            let a = 0, l = t[0];
            const u = this._width * this.textureScale, c = t.length;
            for(let p = 0; p < c; p++){
                const f = p * 4;
                if (this.textureScale > 0) {
                    const m = l.x - t[p].x, _ = l.y - t[p].y, g = Math.sqrt(m * m + _ * _);
                    l = t[p], a += g / u;
                } else a = p / (c - 1);
                n[f] = a, n[f + 1] = 0, n[f + 2] = a, n[f + 3] = 1;
            }
            let h = 0;
            for(let p = 0; p < c - 1; p++){
                const f = p * 2;
                o[h++] = f, o[h++] = f + 1, o[h++] = f + 2, o[h++] = f + 2, o[h++] = f + 1, o[h++] = f + 3;
            }
            i.update(), s.update(), this.updateVertices();
        }
        updateVertices() {
            const t = this.points;
            if (t.length < 1) return;
            let e = t[0], i, s = 0, n = 0;
            const o = this.buffers[0].data, a = t.length, l = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
            for(let u = 0; u < a; u++){
                const c = t[u], h = u * 4;
                u < t.length - 1 ? i = t[u + 1] : i = c, n = -(i.x - e.x), s = i.y - e.y;
                let p = (1 - u / (a - 1)) * 10;
                p > 1 && (p = 1);
                const f = Math.sqrt(s * s + n * n);
                f < 1e-6 ? (s = 0, n = 0) : (s /= f, n /= f, s *= l, n *= l), o[h] = c.x + s, o[h + 1] = c.y + n, o[h + 2] = c.x - s, o[h + 3] = c.y - n, e = c;
            }
            this.buffers[0].update();
        }
        update() {
            this.textureScale > 0 ? this._build() : this.updateVertices();
        }
    };
    Q_.defaultOptions = {
        width: 200,
        points: [],
        textureScale: 0
    };
    let J_ = Q_;
    var QE = Object.defineProperty, JE = Object.defineProperties, tA = Object.getOwnPropertyDescriptors, Cs = Object.getOwnPropertySymbols, tb = Object.prototype.hasOwnProperty, eb = Object.prototype.propertyIsEnumerable, rb = (r1, t, e)=>t in r1 ? QE(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, jl = (r1, t)=>{
        for(var e in t || (t = {}))tb.call(t, e) && rb(r1, e, t[e]);
        if (Cs) for (var e of Cs(t))eb.call(t, e) && rb(r1, e, t[e]);
        return r1;
    }, eA = (r1, t)=>JE(r1, tA(t)), rA = (r1, t)=>{
        var e = {};
        for(var i in r1)tb.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && Cs) for (var i of Cs(r1))t.indexOf(i) < 0 && eb.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const ib = class zb extends Dr {
        constructor(t){
            const e = jl(jl({}, zb.defaultOptions), t), { texture: i, points: s, textureScale: n } = e, o = rA(e, [
                "texture",
                "points",
                "textureScale"
            ]), a = new J_(Zt({
                width: i.height,
                points: s,
                textureScale: n
            }));
            n > 0 && (i.source.style.addressMode = "repeat"), super(Zt(eA(jl({}, o), {
                texture: i,
                geometry: a
            }))), this.autoUpdate = !0, this.onRender = this._render;
        }
        _render() {
            const t = this.geometry;
            (this.autoUpdate || t._width !== this.texture.height) && (t._width = this.texture.height, t.update());
        }
    };
    ib.defaultOptions = {
        textureScale: 0
    };
    let iA = ib;
    var sA = Object.defineProperty, nA = Object.defineProperties, oA = Object.getOwnPropertyDescriptors, Os = Object.getOwnPropertySymbols, sb = Object.prototype.hasOwnProperty, nb = Object.prototype.propertyIsEnumerable, ob = (r1, t, e)=>t in r1 ? sA(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, aA = (r1, t)=>{
        for(var e in t || (t = {}))sb.call(t, e) && ob(r1, e, t[e]);
        if (Os) for (var e of Os(t))nb.call(t, e) && ob(r1, e, t[e]);
        return r1;
    }, lA = (r1, t)=>nA(r1, oA(t)), uA = (r1, t)=>{
        var e = {};
        for(var i in r1)sb.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && Os) for (var i of Os(r1))t.indexOf(i) < 0 && nb.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    class cA extends Dr {
        constructor(t){
            const e = t, { texture: i, vertices: s, uvs: n, indices: o, topology: a } = e, l = uA(e, [
                "texture",
                "vertices",
                "uvs",
                "indices",
                "topology"
            ]), u = new te(Zt({
                positions: s,
                uvs: n,
                indices: o,
                topology: a
            }));
            super(Zt(lA(aA({}, l), {
                texture: i,
                geometry: u
            }))), this.autoUpdate = !0, this.onRender = this._render;
        }
        get vertices() {
            return this.geometry.getBuffer("aPosition").data;
        }
        set vertices(t) {
            this.geometry.getBuffer("aPosition").data = t;
        }
        _render() {
            this.autoUpdate && this.geometry.getBuffer("aPosition").update();
        }
    }
    function hA(r1, t) {
        const { width: e, height: i } = r1.frame;
        return t.scale(1 / e, 1 / i), t;
    }
    var dA = Object.defineProperty, Gs = Object.getOwnPropertySymbols, ab = Object.prototype.hasOwnProperty, lb = Object.prototype.propertyIsEnumerable, ub = (r1, t, e)=>t in r1 ? dA(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, pA = (r1, t)=>{
        for(var e in t || (t = {}))ab.call(t, e) && ub(r1, e, t[e]);
        if (Gs) for (var e of Gs(t))lb.call(t, e) && ub(r1, e, t[e]);
        return r1;
    }, fA = (r1, t)=>{
        var e = {};
        for(var i in r1)ab.call(r1, i) && t.indexOf(i) < 0 && (e[i] = r1[i]);
        if (r1 != null && Gs) for (var i of Gs(r1))t.indexOf(i) < 0 && lb.call(r1, i) && (e[i] = r1[i]);
        return e;
    };
    const cb = class jb extends W {
        constructor(t){
            var e, i, s, n, o, a, l, u, c, h;
            t instanceof P && (t = {
                texture: t
            });
            const p = t, { width: f, height: m, leftWidth: _, rightWidth: g, topHeight: b, bottomHeight: v, texture: y, roundPixels: T } = p, E = fA(p, [
                "width",
                "height",
                "leftWidth",
                "rightWidth",
                "topHeight",
                "bottomHeight",
                "texture",
                "roundPixels"
            ]);
            super(pA({
                label: "NineSliceSprite"
            }, E)), this._roundPixels = 0, this.renderPipeId = "nineSliceSprite", this.batched = !0, this._didSpriteUpdate = !0, this.bounds = {
                minX: 0,
                minY: 0,
                maxX: 0,
                maxY: 0
            }, this._leftWidth = (i = _ != null ? _ : (e = y == null ? void 0 : y.defaultBorders) == null ? void 0 : e.left) != null ? i : ee.defaultOptions.leftWidth, this._topHeight = (n = b != null ? b : (s = y == null ? void 0 : y.defaultBorders) == null ? void 0 : s.top) != null ? n : ee.defaultOptions.topHeight, this._rightWidth = (a = g != null ? g : (o = y == null ? void 0 : y.defaultBorders) == null ? void 0 : o.right) != null ? a : ee.defaultOptions.rightWidth, this._bottomHeight = (u = v != null ? v : (l = y == null ? void 0 : y.defaultBorders) == null ? void 0 : l.bottom) != null ? u : ee.defaultOptions.bottomHeight, this.bounds.maxX = this._width = (c = f != null ? f : y.width) != null ? c : ee.defaultOptions.width, this.bounds.maxY = this._height = (h = m != null ? m : y.height) != null ? h : ee.defaultOptions.height, this.allowChildren = !1, this.texture = y != null ? y : jb.defaultOptions.texture, this.roundPixels = T != null ? T : !1;
        }
        get width() {
            return this._width;
        }
        set width(t) {
            this.bounds.maxX = this._width = t, this.onViewUpdate();
        }
        get height() {
            return this._height;
        }
        set height(t) {
            this.bounds.maxY = this._height = t, this.onViewUpdate();
        }
        get leftWidth() {
            return this._leftWidth;
        }
        set leftWidth(t) {
            this._leftWidth = t, this.onViewUpdate();
        }
        get topHeight() {
            return this._topHeight;
        }
        set topHeight(t) {
            this._topHeight = t, this.onViewUpdate();
        }
        get rightWidth() {
            return this._rightWidth;
        }
        set rightWidth(t) {
            this._rightWidth = t, this.onViewUpdate();
        }
        get bottomHeight() {
            return this._bottomHeight;
        }
        set bottomHeight(t) {
            this._bottomHeight = t, this.onViewUpdate();
        }
        get texture() {
            return this._texture;
        }
        set texture(t) {
            t || (t = P.EMPTY);
            const e = this._texture;
            e !== t && (e && e.dynamic && e.off("update", this.onViewUpdate, this), t.dynamic && t.on("update", this.onViewUpdate, this), this._texture = t, this.onViewUpdate());
        }
        get roundPixels() {
            return !!this._roundPixels;
        }
        set roundPixels(t) {
            this._roundPixels = t ? 1 : 0;
        }
        get originalWidth() {
            return this._texture.width;
        }
        get originalHeight() {
            return this._texture.height;
        }
        onViewUpdate() {
            this._didChangeId += 4096, this._didSpriteUpdate = !0, !this.didViewUpdate && (this.didViewUpdate = !0, this.renderGroup && this.renderGroup.onChildViewUpdate(this));
        }
        addBounds(t) {
            const e = this.bounds;
            t.addFrame(e.minX, e.minY, e.maxX, e.maxY);
        }
        containsPoint(t) {
            const e = this.bounds;
            return t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY;
        }
        destroy(t) {
            if (super.destroy(t), typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
                const e = typeof t == "boolean" ? t : t == null ? void 0 : t.textureSource;
                this._texture.destroy(e);
            }
            this._texture = null, this.bounds = null;
        }
    };
    cb.defaultOptions = {
        texture: P.EMPTY
    };
    let hb = cb;
    class mA extends hb {
        constructor(...t){
            let e = t[0];
            e instanceof P && (e = {
                texture: e,
                leftWidth: t[1],
                topHeight: t[2],
                rightWidth: t[3],
                bottomHeight: t[4]
            }), super(e);
        }
    }
    function gA(r1, t) {
        return t instanceof Yt || t instanceof xe ? t : r1 === "html" ? new xe(t) : new Yt(t);
    }
    const _A = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i, db = {}, bA = "8.0.0";
    function vA(r1, t, e = 3) {
        if (db[t]) return;
        let i = new Error().stack;
        typeof i == "undefined" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${r1}`) : (i = i.split(`
`).splice(e).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${r1}`), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${r1}`), console.warn(i))), db[t] = !0;
    }
    async function yA(r1, t, e = 200) {
        const i = await t.extract.base64(r1);
        await t.encoder.commandFinished;
        const s = e;
        console.log(`logging texture ${r1.source.width}px ${r1.source.height}px`);
        const n = [
            "font-size: 1px;",
            `padding: ${s}px 300px;`,
            `background: url(${i}) no-repeat;`,
            "background-size: contain;"
        ].join(" ");
        console.log("%c ", n);
    }
    var xA = Object.defineProperty, TA = Object.defineProperties, SA = Object.getOwnPropertyDescriptors, pb = Object.getOwnPropertySymbols, EA = Object.prototype.hasOwnProperty, AA = Object.prototype.propertyIsEnumerable, fb = (r1, t, e)=>t in r1 ? xA(r1, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : r1[t] = e, mb = (r1, t)=>{
        for(var e in t || (t = {}))EA.call(t, e) && fb(r1, e, t[e]);
        if (pb) for (var e of pb(t))AA.call(t, e) && fb(r1, e, t[e]);
        return r1;
    }, PA = (r1, t)=>TA(r1, SA(t));
    const RA = [
        "#000080",
        "#228B22",
        "#8B0000",
        "#4169E1",
        "#008080",
        "#800000",
        "#9400D3",
        "#FF8C00",
        "#556B2F",
        "#8B008B"
    ];
    let wA = 0;
    function gb(r1, t = 0, e = {
        color: "#000000"
    }) {
        r1.isRenderGroupRoot && (e.color = RA[wA++]);
        let i = "";
        for(let o = 0; o < t; o++)i += "    ";
        let s = r1.label;
        !s && r1 instanceof Gt && (s = `sprite:${r1.texture.label}`);
        let n = `%c ${i}|- ${s} (worldX:${r1.worldTransform.tx}, relativeRenderX:${r1.relativeGroupTransform.tx}, renderX:${r1.groupTransform.tx}, localX:${r1.x})`;
        r1.isRenderGroupRoot && (n += " (RenderGroup)"), r1.filters && (n += "(*filters)"), console.log(n, `color:${e.color}; font-weight:bold;`), t++;
        for(let o = 0; o < r1.children.length; o++){
            const a = r1.children[o];
            gb(a, t, mb({}, e));
        }
    }
    function _b(r1, t = 0, e = {
        index: 0,
        color: "#000000"
    }) {
        let i = "";
        for(let n = 0; n < t; n++)i += "    ";
        const s = `%c ${i}- ${e.index}: ${r1.root.label} worldX:${r1.worldTransform.tx}`;
        console.log(s, `color:${e.color}; font-weight:bold;`), t++;
        for(let n = 0; n < r1.renderGroupChildren.length; n++){
            const o = r1.renderGroupChildren[n];
            _b(o, t, PA(mb({}, e), {
                index: n
            }));
        }
    }
    return d.AbstractBitmapFont = eo, d.AbstractRenderer = Pr, d.AbstractText = ms, d.AccessibilitySystem = en, d.AlphaFilter = UT, d.AlphaMask = pn, d.AlphaMaskPipe = Ra, d.AnimatedSprite = Ur, d.Application = wp, d.Assets = Cr, d.AssetsClass = df, d.BLEND_TO_NPM = Dc, d.BUFFER_TYPE = $r, d.BackgroundLoader = Mp, d.BackgroundSystem = i_, d.Batch = An, d.BatchGeometry = xn, d.BatchTextureArray = En, d.BatchableGraphics = bi, d.BatchableMesh = Ai, d.BatchableSprite = Pi, d.Batcher = Pn, d.BatcherPipe = Pa, d.BigPool = X, d.BindGroup = $t, d.BindGroupSystem = Rl, d.BitmapFont = vo, d.BitmapFontManager = Tr, d.BitmapText = Nm, d.BitmapTextPipe = Go, d.BlendModeFilter = MT, d.BlendModePipe = ml, d.BlurFilter = nm, d.BlurFilterPass = as, d.Bounds = ut, d.BrowserAdapter = rc, d.Buffer = _t, d.BufferImageSource = ui, d.BufferResource = Ts, d.BufferUsage = $, d.CLEAR = ft, d.Cache = K, d.CanvasPool = Vt, d.CanvasPoolClass = oh, d.CanvasSource = Qt, d.CanvasTextMetrics = Ft, d.CanvasTextPipe = qn, d.CanvasTextSystem = to, d.Circle = wi, d.Color = Y, d.ColorMask = fn, d.ColorMaskPipe = wa, d.ColorMatrixFilter = eS, d.CompressedSource = Or, d.Container = W, d.Culler = Cf, d.CullerPlugin = Of, d.CustomRenderPipe = ol, d.DATA_URI = _A, d.DDS = I, d.DEG_TO_RAD = vu, d.DEPRECATED_SCALE_MODES = zl, d.DEPRECATED_WRAP_MODES = Xl, d.DOMAdapter = z, d.DRAW_MODES = EE, d.DXGI_TO_TEXTURE_FORMAT = mt, d.DisplacementFilter = lS, d.DynamicBitmapFont = go, d.Ellipse = Mi, d.EventBoundary = Qu, d.EventEmitter = dt, d.EventSystem = on, d.EventsTicker = jt, d.ExtensionType = x, d.ExtractSystem = o_, d.FOURCC_TO_TEXTURE_FORMAT = ua, d.FederatedContainer = ec, d.FederatedEvent = Me, d.FederatedMouseEvent = sr, d.FederatedPointerEvent = Pt, d.FederatedWheelEvent = ae, d.FillGradient = Ri, d.FillPattern = Jn, d.Filter = Kt, d.FilterEffect = Qr, d.FilterPipe = zo, d.FilterSystem = Vo, d.FontStylePromiseCache = Er, d.GAUSSIAN_VALUES = ma, d.GL_FORMATS = ys, d.GL_INTERNAL_FORMAT = Tf, d.GL_TARGETS = Ia, d.GL_TYPES = N, d.GL_WRAP_MODES = eg, d.GenerateTextureSystem = vl, d.Geometry = Ge, d.GlBackBufferSystem = ag, d.GlBatchAdaptor = Ea, d.GlBuffer = Km, d.GlBufferSystem = Ca, d.GlColorMaskSystem = Ua, d.GlContextSystem = Jm, d.GlEncoderSystem = ka, d.GlGeometrySystem = Fa, d.GlGraphicsAdaptor = sl, d.GlMeshAdaptor = nl, d.GlProgram = Mt, d.GlProgramData = Ag, d.GlRenderTarget = lg, d.GlRenderTargetAdaptor = mg, d.GlRenderTargetSystem = Wa, d.GlShaderSystem = Qa, d.GlStateSystem = Lg, d.GlStencilSystem = La, d.GlTexture = $g, d.GlTextureSystem = il, d.GlUboSystem = za, d.GlUniformGroupSystem = Ja, d.GlobalUniformSystem = yl, d.GpuBatchAdaptor = Aa, d.GpuBlendModesToPixi = Tt, d.GpuBufferSystem = wl, d.GpuColorMaskSystem = Ml, d.GpuDeviceSystem = Rs, d.GpuEncoderSystem = Cl, d.GpuGraphicsAdaptor = Nl, d.GpuGraphicsContext = Qc, d.GpuMeshAdapter = Hl, d.GpuMipmapGenerator = U_, d.GpuProgram = bt, d.GpuReadBuffer = sE, d.GpuRenderTarget = G_, d.GpuRenderTargetAdaptor = B_, d.GpuRenderTargetSystem = Fl, d.GpuShaderSystem = Dl, d.GpuStateSystem = Ul, d.GpuStencilModesToPixi = ie, d.GpuStencilSystem = Ol, d.GpuTextureSystem = $l, d.GpuUboSystem = Gl, d.GpuUniformBatchPipe = Bl, d.Graphics = Ue, d.GraphicsContext = Dt, d.GraphicsContextRenderData = Jc, d.GraphicsContextSystem = Ei, d.GraphicsPath = Jt, d.GraphicsPipe = Wn, d.HTMLText = Hm, d.HTMLTextPipe = Bo, d.HTMLTextRenderData = Do, d.HTMLTextStyle = xe, d.HTMLTextSystem = zi, d.HelloSystem = Ps, d.IGLUniformData = u2, d.ImageSource = pe, d.InstructionSet = Ys, d.KTX = tt, d.Loader = $p, d.LoaderParserPriority = gt, d.MAX_TEXTURES = wt, d.MSAA_QUALITY = H_, d.MaskEffectManager = ti, d.MaskEffectManagerClass = Tu, d.MaskFilter = Em, d.Matrix = B, d.Mesh = Dr, d.MeshGeometry = te, d.MeshPipe = Kn, d.MeshPlane = YE, d.MeshRope = iA, d.MeshSimple = cA, d.NOOP = ln, d.NineSliceGeometry = ee, d.NineSlicePlane = mA, d.NineSliceSprite = hb, d.NineSliceSpritePipe = Xo, d.NoiseFilter = fS, d.ObservablePoint = it, d.PI_2 = _u, d.PipelineSystem = Il, d.PlaneGeometry = Ho, d.Point = V, d.Polygon = _e, d.Pool = Jr, d.PoolGroupClass = xu, d.PrepareBase = Pm, d.PrepareQueue = $m, d.PrepareSystem = zm, d.PrepareUpload = Xm, d.QuadGeometry = ip, d.RAD_TO_DEG = bu, d.Rectangle = j, d.RenderContainer = DE, d.RenderGroup = Gu, d.RenderGroupPipe = ll, d.RenderGroupSystem = dl, d.RenderTarget = xs, d.RenderTargetSystem = Va, d.RenderTexture = a_, d.RendererType = vt, d.ResizePlugin = rn, d.Resolver = qt, d.RopeGeometry = J_, d.RoundedRectangle = Oi, d.SCALE_MODES = wE, d.STENCIL_MODES = st, d.SVGParser = Ph, d.SVGToGraphicsPath = mh, d.ScissorMask = DS, d.SdfShader = Cd, d.Shader = yt, d.ShaderStage = Le, d.ShapePath = Sh, d.SharedRenderPipes = Pl, d.SharedSystems = Al, d.Sprite = Gt, d.SpritePipe = pl, d.Spritesheet = hn, d.State = Bt, d.StencilMask = mn, d.StencilMaskPipe = Ma, d.SystemRunner = Ko, d.TEXTURE_FORMAT_BLOCK_SIZE = yf, d.Text = Sa, d.TextStyle = Yt, d.Texture = P, d.TextureGCSystem = Sl, d.TextureMatrix = cn, d.TexturePool = ct, d.TexturePoolClass = uh, d.TextureSource = rt, d.TextureStyle = mc, d.TextureUvs = ME, d.Ticker = ht, d.TickerListener = oi, d.TickerPlugin = sn, d.TilingSprite = Dm, d.TilingSpritePipe = No, d.TilingSpriteShader = rp, d.Transform = Om, d.Triangle = Ta, d.UNIFORM_TO_ARRAY_SETTERS = Fg, d.UNIFORM_TO_SINGLE_SETTERS = Ig, d.UPDATE_BLEND = Qs, d.UPDATE_COLOR = ii, d.UPDATE_PRIORITY = zt, d.UPDATE_TRANSFORM = gv, d.UPDATE_VISIBLE = ir, d.UboBatch = S_, d.UboSystem = $a, d.UniformGroup = nt, d.VERSION = xl, d.VideoSource = ur, d.ViewSystem = b_, d.ViewableBuffer = Tn, d.WGSL_ALIGN_SIZE_DATA = Hr, d.WGSL_TO_STD40_SIZE = Na, d.WRAP_MODES = RE, d.WebGLRenderer = T_, d.WebGPURenderer = N_, d.WorkerManager = ea, d._getGlobalBounds = Vs, d._getGlobalBoundsRecursive = jo, d.accessibilityTarget = qu, d.addBits = Ao, d.addMaskBounds = hi, d.addMaskLocalBounds = di, d.addProgramDefines = Vh, d.alphaFrag = Xf, d.alphaWgsl = pa, d.applyMatrix = np, d.applyStyleParams = rl, d.assignWithIgnore = Bu, d.autoDetectEnvironment = _p, d.autoDetectRenderer = Ep, d.autoDetectSource = Oc, d.basisTranscoderUrls = ts, d.batchSamplersUniformGroup = Hi, d.bitmapFontCachePlugin = Lh, d.bitmapFontTextParser = Ii, d.bitmapFontXMLParser = yo, d.bitmapFontXMLStringParser = xo, d.blendTemplateFrag = Df, d.blendTemplateVert = Uf, d.blendTemplateWgsl = kf, d.blockDataMap = kl, d.blurTemplateWgsl = Zf, d.boundsPool = Lt, d.browserExt = ST, d.buildAdaptiveBezier = so, d.buildAdaptiveQuadratic = _h, d.buildArc = ao, d.buildArcTo = bh, d.buildArcToSvg = yh, d.buildCircle = fe, d.buildContextBatches = qc, d.buildGeometryFromPath = NE, d.buildInstructions = Wm, d.buildLine = zc, d.buildPolygon = Fn, d.buildRectangle = Dn, d.buildSimpleUvs = wn, d.buildTriangle = Un, d.buildUvs = Rn, d.cacheTextureArray = Cp, d.calculateProjection = gg, d.checkChildrenDidChange = Ws, d.checkDataUrl = Te, d.checkExtension = Ct, d.childrenHelperMixin = yu, d.closePointEps = Nc, d.collectAllRenderables = Lr, d.collectRenderGroups = ul, d.color32BitToUniform = fr, d.colorBit = ki, d.colorBitGl = Li, d.colorMatrixFilterFrag = om, d.colorMatrixFilterWgsl = _a, d.colorToUniform = jy, d.compareModeToGlCompare = jg, d.compileHighShader = cd, d.compileHighShaderGl = hd, d.compileHighShaderGlProgram = Ne, d.compileHighShaderGpuProgram = $e, d.compileHooks = Po, d.compileInputs = Ro, d.compileOutputs = ud, d.compileShader = Ya, d.convertFillInputToFillStyle = Wt, d.convertFormatIfRequired = dT, d.convertToList = Rt, d.copySearchParams = ai, d.createIdFromString = mr, d.createLevelBuffers = j1, d.createLevelBuffersFromKTX = pT, d.createStringVariations = nc, d.createTexture = re, d.createUboElementsSTD40 = ug, d.createUboElementsWGSL = R_, d.createUboSyncFunction = Ha, d.createUboSyncFunctionSTD40 = fg, d.createUboSyncFunctionWGSL = M_, d.crossOrigin = af, d.cullingMixin = gu, d.curveEps = Cn, d.defaultFilterVert = ns, d.defaultValue = qa, d.definedProps = Zt, d.deprecation = vA, d.detectAvif = Op, d.detectBasis = $1, d.detectCompressed = yT, d.detectDefaults = Bp, d.detectMp4 = Ip, d.detectOgv = Fp, d.detectVideoAlphaMode = _n, d.detectWebm = Dp, d.detectWebp = Up, d.determineCrossOrigin = uf, d.displacementFrag = um, d.displacementVert = cm, d.displacementWgsl = ba, d.earcut = Kc, d.effectsMixin = Su, d.ensureAttributes = Ba, d.ensureIsBuffer = yn, d.ensureOptions = gs, d.ensurePrecision = Wh, d.ensureTextStyle = gA, d.executeInstructions = al, d.extensions = U, d.extractAttributesFromGlProgram = wg, d.extractAttributesFromGpuProgram = rd, d.extractFontFamilies = kd, d.extractStructAndGroups = Ui, d.fastCopy = mi, d.findHooksRx = od, d.findMixin = Eu, d.fontStringFromTextStyle = gr, d.formatShader = GS, d.fragmentGPUTemplate = md, d.fragmentGlTemplate = _d, d.generateArraySyncSTD40 = pg, d.generateArraySyncWGSL = w_, d.generateBlurFragSource = Yf, d.generateBlurGlProgram = qf, d.generateBlurProgram = Qf, d.generateBlurVertSource = Kf, d.generateGPULayout = CS, d.generateGpuLayoutGroups = id, d.generateLayout = OS, d.generateLayoutHash = sd, d.generateProgram = Bg, d.generateShaderSyncCode = Eg, d.generateTextStyleKey = po, d.generateTextureBatchBit = $i, d.generateTextureBatchBitGl = Ni, d.generateUID = OE, d.generateUniformsSync = Dg, d.getAdjustedBlendModeBlend = Sn, d.getAttributeInfoFromFormat = ke, d.getBitmapTextLayout = _o, d.getCanvasBoundingBox = dh, d.getCanvasFillStyle = _r, d.getCanvasTexture = ja, d.getDefaultUniformValue = eh, d.getFastGlobalBounds = mp, d.getFontCss = $d, d.getFontFamilyName = jp, d.getGeometryBounds = Ic, d.getGlTypeFromFormat = ig, d.getGlobalBounds = er, d.getGlobalRenderableBounds = gp, d.getLocalBounds = ri, d.getMatrixRelativeToParent = dn, d.getMaxFragmentPrecision = jh, d.getOrientationOfPoints = Hc, d.getParent = Ru, d.getPo2TextureFromSource = Zn, d.getResolutionOfUrl = Ki, d.getSVGUrl = Nd, d.getSupportedCompressedTextureFormats = la, d.getSupportedGPUCompressedTextureFormats = oa, d.getSupportedGlCompressedTextureFormats = na, d.getSupportedTextureFormats = Gr, d.getTemporaryCanvasFromImage = Hd, d.getTestContext = zh, d.getTextureBatchBindGroup = fi, d.getTextureDefaultMatrix = hA, d.getTextureFormatFromKTXTexture = gT, d.getUboData = Mg, d.getUniformData = Cg, d.getUrlExtension = lc, d.glFormatToGPUFormat = wf, d.glUploadBufferImageResource = Ng, d.glUploadCompressedTextureResource = Hg, d.glUploadImageResource = tl, d.glUploadVideoResource = Xg, d.globalUniformsBit = bd, d.globalUniformsBitGl = vd, d.globalUniformsUBOBitGl = a0, d.gpuFormatToBasisTranscoderFormat = W1, d.gpuFormatToKTXBasisTranscoderFormat = bT, d.gpuUploadBufferImageResource = I_, d.gpuUploadCompressedTextureResource = F_, d.gpuUploadImageResource = Ll, d.gpuUploadVideoResource = D_, d.groupD8 = k, d.hasCachedCanvasTexture = n2, d.hslWgsl = xS, d.hslgl = CT, d.hslgpu = OT, d.injectBits = wo, d.insertVersion = Yh, d.isMobile = Wu, d.isPow2 = un, d.isRenderingToScreen = vg, d.isSafari = Gd, d.isSingleItem = ar, d.isWebGLSupported = Rr, d.isWebGPUSupported = wr, d.ktxTranscoderUrls = es, d.loadBasis = z1, d.loadBasisOnWorker = _f, d.loadBitmapFont = $h, d.loadDDS = tT, d.loadFontAsBase64 = Ld, d.loadFontCSS = Uo, d.loadImageBitmap = ef, d.loadJson = Np, d.loadKTX = aT, d.loadKTX2 = hT, d.loadKTX2onWorker = Pf, d.loadSVGImage = Xd, d.loadSvg = qp, d.loadTextures = ra, d.loadTxt = Hp, d.loadVideoTextures = cf, d.loadWebFont = Vp, d.localUniformBit = ze, d.localUniformBitGl = ji, d.localUniformBitGroup2 = Jd, d.localUniformMSDFBit = Pd, d.localUniformMSDFBitGl = Rd, d.log2 = Xv, d.logDebugTexture = yA, d.logProgramError = Gg, d.logRenderGroupScene = _b, d.logScene = gb, d.mSDFBit = wd, d.mSDFBitGl = Md, d.mapFormatToGlFormat = Vg, d.mapFormatToGlInternalFormat = Kg, d.mapFormatToGlType = qg, d.mapGlToVertexFormat = Rg, d.mapSize = p2, d.mapType = Za, d.mapWebGLBlendModesToPixi = Ug, d.maskFrag = vm, d.maskVert = ym, d.maskWgsl = xa, d.matrixPool = kt, d.measureHtmlText = ko, d.measureMixin = wu, d.migrateFragmentFromV7toV8 = h2, d.mipmapScaleModeToGlFilter = zg, d.mixColors = _i, d.mixHexColors = Mn, d.mixStandardAnd32BitColors = Sy, d.multiplyHexColors = UE, d.nextPow2 = de, d.noiseFrag = fm, d.noiseWgsl = va, d.nonCompressedFormats = ff, d.normalizeExtensionPriority = Qe, d.nssvg = Io, d.nsxhtml = Fo, d.onRenderMixin = Mu, d.parseDDS = xf, d.parseFunctionBody = GE, d.parseKTX = Sf, d.path = pt, d.preloadVideo = lf, d.removeItems = js, d.removeStructAndGroupDuplicates = nd, d.resetUids = pv, d.resolveCharacters = mo, d.resolveCompressedTextureUrl = vT, d.resolveJsonUrl = hf, d.resolveTextureUrl = sa, d.resourceToTexture = Gc, d.roundPixelsBit = He, d.roundPixelsBitGl = Xe, d.roundedShapeArc = xh, d.roundedShapeQuadraticCurve = Th, d.sayHello = h_, d.scaleModeToGlFilter = el, d.setBasisTranscoderPath = H1, d.setKTXTranscoderPath = uT, d.setPositions = sp, d.setProgramName = Kh, d.setUvs = op, d.sortMixin = Cu, d.spritesheetAsset = Ac, d.squaredDistanceToLineSegment = br, d.stripVersion = qh, d.testImageFormat = Qo, d.testVideoFormat = Yi, d.textStyleToCSS = Bd, d.textureBit = jm, d.textureBitGl = Vm, d.textureFrom = Bc, d.tilingBit = tp, d.tilingBitGl = ep, d.toLocalGlobalMixin = Ou, d.transformVertices = gi, d.triangulateWithHoles = In, d.uboSyncFunctionsSTD40 = Xa, d.uboSyncFunctionsWGSL = dg, d.uid = Q, d.uniformParsers = se, d.unpremultiplyAlpha = R2, d.unsafeEvalSupported = Yo, d.updateLocalTransform = kE, d.updateQuadBounds = lr, d.updateRenderGroupTransform = Zg, d.updateRenderGroupTransforms = cl, d.updateTransformAndChildren = hl, d.updateTransformBackwards = rr, d.updateWorldTransform = LE, d.v8_0_0 = bA, d.validFormats = rs, d.validateRenderables = Jg, d.vertexGPUTemplate = fd, d.vertexGlTemplate = gd, d.viewportFromFrame = PE, d.vkFormatToGPUFormat = Mf, d.warn = vs, d.wrapModeToGlAddress = As, d;
}({}); //# sourceMappingURL=pixi.min.js.map

},{}]},["1ROjY","u4Zar"], "u4Zar", "parcelRequire716c")

//# sourceMappingURL=index.dff42510.js.map
