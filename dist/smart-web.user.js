// ==UserScript==
// @name               Smart Web
// @name:zh-CN         Smart Web
// @name:zh-TW         Smart Web
// @namespace          nicepkg
// @version            0.0.1
// @author             nicepkg
// @description        Make web page smarter.
// @description:zh-CN  让网页更智能。
// @description:zh-TW  讓網頁更智能。
// @license            MIT
// @icon               https://chat.openai.com/favicon.ico
// @match              *://*/*
// @require            https://registry.npmmirror.com/react/18.3.1/files/umd/react.production.min.js
// @require            https://registry.npmmirror.com/react-dom/18.3.1/files/umd/react-dom.production.min.js
// @require            https://registry.npmmirror.com/i18next/23.11.5/files/dist/umd/i18next.min.js
// @require            https://registry.npmmirror.com/react-draggable/4.4.6/files/build/web/react-draggable.min.js
// @require            https://registry.npmmirror.com/zustand/4.5.4/files/umd/middleware.production.js
// @grant              GM_addStyle
// @grant              GM_deleteValue
// @grant              GM_getValue
// @grant              GM_setValue
// @run-at             document-end
// ==/UserScript==

(r=>{if(typeof GM_addStyle=="function"){GM_addStyle(r);return}const n=document.createElement("style");n.textContent=r,document.head.append(n)})(` *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.container,.uno-gzz0fc{width:100%;}.uno-eakdl5{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}.uno-iqiz04{pointer-events:auto;width:100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));overflow:hidden;border-radius:0.5rem;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.uno-oo2p1k{pointer-events:none;position:fixed;inset:0;z-index:99;display:flex;touch-action:none;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;}.uno-4bau06{position:relative;display:inline-flex;cursor:pointer;align-items:center;}.uno-qhihqc{position:fixed;bottom:1rem;right:1rem;z-index:50;height:3.5rem;width:3.5rem;display:flex;cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;border-radius:9999px;--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity));--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:300ms;}.uno-pd2td5::after{position:absolute;left:2px;top:0.125rem;height:1.25rem;width:1.25rem;border-width:1px;--un-border-opacity:1;border-color:rgb(209 213 219 / var(--un-border-opacity));border-radius:9999px;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;content:'';}.uno-27dpxk{margin-bottom:1rem;font-size:1.5rem;line-height:2rem;--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity));font-weight:600;}.uno-939eke{margin-top:1.5rem;border-top-width:1px;--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));padding-top:1rem;}.uno-jq74bi{margin-bottom:1.5rem;font-size:1.5rem;line-height:2rem;--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity));font-weight:600;}.uno-sj6hcf{margin-bottom:0.75rem;font-size:1.125rem;line-height:1.75rem;--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));font-weight:600;}.uno-y0qa2l{margin-right:0.5rem;animation:spin 1s linear infinite;}.uno-ike2jk{height:100%;display:flex;align-items:center;justify-content:center;}.uno-jscex3{max-height:300px;max-width:280px;min-height:200px;min-width:260px;overflow:auto;padding:1rem;}.uno-pd2td5{height:1.5rem;width:2.75rem;border-radius:9999px;--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity));}.uno-ukjnge{height:16rem;overflow-y:auto;border-radius:0.5rem;--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity));padding:1rem;--un-shadow:inset 0 2px 4px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.uno-wr5v1u{height:1.5rem;width:1.5rem;}.uno-3vlqif{display:flex;cursor:move;align-items:center;justify-content:space-between;--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity));padding:1rem;}.uno-gw6dv1{display:flex;align-items:center;justify-content:space-between;}.uno-kagvzm,.uno-sjfmdy{display:flex;}.uno-umshe5{display:flex;justify-content:flex-end;--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity));padding:1rem;}.uno-f6crrb{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0.375rem;font-weight:500;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.peer:checked~.uno-pd2td5::after{--un-translate-x:100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));}.uno-3ftjyn{animation:pulse 2s cubic-bezier(0.4,0,.6,1) infinite;--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity));}.uno-k2agtf{cursor:pointer;--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.uno-noviie{cursor:not-allowed;opacity:0.75;}.uno-sev2av{cursor:not-allowed;opacity:0.5;}.uno-9pc71d>:not([hidden])~:not([hidden]),.uno-pfikq2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}.uno-oljrn5>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.25rem * var(--un-space-y-reverse));}.uno-sjfmdy>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.5rem * var(--un-space-x-reverse));}.uno-umshe5>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.75rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.75rem * var(--un-space-x-reverse));}.uno-wdbt9d{border-width:1px;--un-border-opacity:1;border-color:rgb(209 213 219 / var(--un-border-opacity));--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));}.uno-7vaw05{border-bottom-width:1px;--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}.uno-ne2n0a{border-bottom-width:2px;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;}.uno-blh9r8,[uno-blh9r8=""]{border-color:transparent;--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity));}.uno-wun44x{--un-border-opacity:1;border-color:rgb(59 130 246 / var(--un-border-opacity));--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity));}.uno-blh9r8:hover{--un-border-opacity:1;border-color:rgb(209 213 219 / var(--un-border-opacity));--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));}[uno-blh9r8=""]:hover{--un-border-opacity:1;border-color:rgb(209 213 219 / var(--un-border-opacity));--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));}.uno-9pc71d,.uno-blqzjk{border-radius:0.5rem;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));padding:1.5rem;--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.uno-dlekmq{border-radius:0.25rem;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.75rem;line-height:1rem;--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity));font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.uno-512amd{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity));}.uno-ja2hls{--un-bg-opacity:1;background-color:rgb(37 99 235 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity));}.peer:checked~.uno-pd2td5{--un-bg-opacity:1;background-color:rgb(37 99 235 / var(--un-bg-opacity));}.uno-512amd:hover{--un-bg-opacity:1;background-color:rgb(209 213 219 / var(--un-bg-opacity));}.uno-atmkfn:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity));}.uno-ja2hls:hover{--un-bg-opacity:1;background-color:rgb(29 78 216 / var(--un-bg-opacity));}.uno-qhihqc:hover{--un-bg-opacity:1;background-color:rgb(37 99 235 / var(--un-bg-opacity));}.uno-wdbt9d:hover{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity));}.uno-64nfu8{padding:1.5rem;}.uno-3stqip{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;}.uno-gae9ci{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:1.125rem;line-height:1.75rem;}.uno-l7dlov{padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem;}.uno-cbgd7b{text-align:center;}.uno-6mrwng{font-size:1.25rem;line-height:1.75rem;--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity));font-weight:600;}.uno-85n0vz{font-size:0.75rem;line-height:1rem;--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity));}.uno-dk190z{font-size:0.875rem;line-height:1.25rem;--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity));}.uno-s9yxer{font-size:0.875rem;line-height:1.25rem;font-weight:700;}.uno-ymhvkx{font-size:1.125rem;line-height:1.75rem;--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));}.uno-atmkfn,.uno-r1r61e{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));}.uno-ovxox2{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity));text-decoration-line:underline;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms;}.uno-k2agtf:hover{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity));}.uno-ovxox2:hover{--un-text-opacity:1;color:rgb(30 64 175 / var(--un-text-opacity));}.uno-s9yxer:hover{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity));}.uno-f6crrb:focus{outline:2px solid transparent;outline-offset:2px;--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);--un-ring-offset-width:2px;}.peer:focus~.uno-pd2td5{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);--un-ring-opacity:1;--un-ring-color:rgb(147 197 253 / var(--un-ring-opacity));}.uno-512amd:focus{--un-ring-opacity:1;--un-ring-color:rgb(107 114 128 / var(--un-ring-opacity));}.uno-atmkfn:focus{--un-ring-opacity:1;--un-ring-color:rgb(107 114 128 / var(--un-ring-opacity));}.uno-ja2hls:focus{--un-ring-opacity:1;--un-ring-color:rgb(59 130 246 / var(--un-ring-opacity));}.uno-wdbt9d:focus{--un-ring-opacity:1;--un-ring-color:rgb(107 114 128 / var(--un-ring-opacity));}@media (min-width: 640px){.container{max-width:640px;}.uno-cbgd7b{text-align:left;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}.static{position:static;}[size~="\\32 4"]{width:6rem;height:6rem;}[size~="md"]{width:28rem;height:28rem;}@keyframes pulse{0%, 100% {opacity:1} 50% {opacity:.5}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.tab,[tab=""]{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}.outline{outline-style:solid;} .i-icon{display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.i-icon-spin svg{animation:i-icon-spin 1s infinite linear}.i-icon-rtl{transform:scaleX(-1)}@keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}} `);

(function (React, i18n, Draggable, middleware, require$$0) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = React, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function q$2(c, a, g) {
    var b, d = {}, e2 = null, h2 = null;
    void 0 !== g && (e2 = "" + g);
    void 0 !== a.key && (e2 = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b in a) m$2.call(a, b) && !p$2.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return {
      $$typeof: k$1,
      type: c,
      key: e2,
      ref: h2,
      props: d,
      _owner: n$2.current
    };
  }
  reactJsxRuntime_production_min.Fragment = l$1;
  reactJsxRuntime_production_min.jsx = q$2;
  reactJsxRuntime_production_min.jsxs = q$2;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  function onloadSafe(fn) {
    if (document.readyState === "complete") {
      fn();
    } else {
      window.addEventListener("load", fn);
    }
  }
  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash;
    }
    return Math.abs(hash).toString(36);
  }
  var sentinel_umd = { exports: {} };
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function() {
      var isArray = Array.isArray, selectorToAnimationMap = {}, animationCallbacks = {}, styleEl, styleSheet, cssRules;
      return {
        /**
         * Add watcher.
         * @param {array} cssSelectors - List of CSS selector strings
         * @param {Function} callback - The callback function
         */
        on: function(cssSelectors, callback) {
          if (!callback) return;
          if (!styleEl) {
            var doc = document, head = doc.head;
            doc.addEventListener("animationstart", function(ev, callbacks, l2, i) {
              callbacks = animationCallbacks[ev.animationName];
              if (!callbacks) return;
              ev.stopImmediatePropagation();
              l2 = callbacks.length;
              for (i = 0; i < l2; i++) callbacks[i](ev.target);
            }, true);
            styleEl = doc.getElementById("sentinel-css");
            if (!styleEl) {
              styleEl = doc.createElement("style");
              head.insertBefore(styleEl, head.firstChild);
            }
            styleSheet = styleEl.sheet;
            cssRules = styleSheet.cssRules;
          }
          (isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, isCustomName) {
            animId = selectorToAnimationMap[selector];
            if (!animId) {
              isCustomName = selector[0] == "!";
              selectorToAnimationMap[selector] = animId = isCustomName ? selector.slice(1) : "sentinel-" + Math.random().toString(16).slice(2);
              cssRules[styleSheet.insertRule("@keyframes " + animId + "{from{transform:none;}to{transform:none;}}", cssRules.length)]._id = selector;
              if (!isCustomName) {
                cssRules[styleSheet.insertRule(selector + "{animation-duration:0.0001s;animation-name:" + animId + ";}", cssRules.length)]._id = selector;
              }
              selectorToAnimationMap[selector] = animId;
            }
            (animationCallbacks[animId] = animationCallbacks[animId] || []).push(callback);
          });
        },
        /**
         * Remove watcher.
         * @param {array} cssSelectors - List of CSS selector strings
         * @param {Function} callback - The callback function (optional)
         */
        off: function(cssSelectors, callback) {
          (isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, callbackList, i) {
            if (!(animId = selectorToAnimationMap[selector])) return;
            callbackList = animationCallbacks[animId];
            if (callback) {
              i = callbackList.length;
              while (i--) {
                if (callbackList[i] === callback) callbackList.splice(i, 1);
              }
            } else {
              callbackList = [];
            }
            if (callbackList.length) return;
            i = cssRules.length;
            while (i--) {
              if (cssRules[i]._id == selector) styleSheet.deleteRule(i);
            }
            delete selectorToAnimationMap[selector];
            delete animationCallbacks[animId];
          });
        },
        /**
         * Reset watchers and cache
         */
        reset: function() {
          selectorToAnimationMap = {};
          animationCallbacks = {};
          if (styleEl) styleEl.parentNode.removeChild(styleEl);
          styleEl = 0;
        }
      };
    });
  })(sentinel_umd);
  var sentinel_umdExports = sentinel_umd.exports;
  const sentinel = /* @__PURE__ */ getDefaultExportFromCjs(sentinel_umdExports);
  new URL(window.location.href).origin;
  const KEY_LANGUAGE = "smart-web:language";
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  let GMStorage$1 = (_a = class {
    static get(key) {
      const item = _GM_getValue(key, "");
      if (item) {
        try {
          return JSON.parse(item);
        } catch {
          return null;
        }
      }
      return null;
    }
    static set(key, value) {
      const item = JSON.stringify(value);
      _GM_setValue(key, item);
    }
    static delete(key) {
      _GM_deleteValue(key);
    }
  }, __publicField(_a, "supported", typeof _GM_getValue === "function" && typeof _GM_setValue === "function" && typeof _GM_deleteValue === "function"), _a);
  class LocalStorage {
    static get(key) {
      const item = localStorage.getItem(key);
      if (item) {
        try {
          return JSON.parse(item);
        } catch {
          return null;
        }
      }
      return null;
    }
    static set(key, value) {
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    }
    static delete(key) {
      localStorage.removeItem(key);
    }
  }
  __publicField(LocalStorage, "supported", typeof localStorage === "object");
  class MemoryStorage {
    static get(key) {
      const item = this.map.get(key);
      if (!item) return null;
      return item;
    }
    static set(key, value) {
      this.map.set(key, value);
    }
    static delete(key) {
      this.map.delete(key);
    }
  }
  __publicField(MemoryStorage, "map", /* @__PURE__ */ new Map());
  __publicField(MemoryStorage, "supported", true);
  class ScriptStorage {
    static get(key) {
      if (GMStorage$1.supported) {
        try {
          return GMStorage$1.get(key);
        } catch {
        }
      }
      if (LocalStorage.supported) {
        try {
          return LocalStorage.get(key);
        } catch {
        }
      }
      return MemoryStorage.get(key);
    }
    static set(key, value) {
      if (GMStorage$1.supported) {
        try {
          return GMStorage$1.set(key, value);
        } catch {
        }
      }
      if (LocalStorage.supported) {
        try {
          return LocalStorage.set(key, value);
        } catch {
        }
      }
      return MemoryStorage.set(key, value);
    }
    static delete(key) {
      if (GMStorage$1.supported) {
        try {
          return GMStorage$1.delete(key);
        } catch {
        }
      }
      if (LocalStorage.supported) {
        try {
          return LocalStorage.delete(key);
        } catch {
        }
      }
      return MemoryStorage.delete(key);
    }
  }
  const title$2 = "ChatGPT Exporter";
  const ExportHelper$2 = "Export";
  const Setting$2 = "Setting";
  const Language$2 = "Language";
  const Screenshot$2 = "Screenshot";
  const Markdown$2 = "Markdown";
  const HTML$2 = "HTML";
  const Archive$2 = "Archive";
  const Save$2 = "Save";
  const Delete$2 = "Delete";
  const Export$2 = "Export";
  const Loading$2 = "Loading";
  const Preview$2 = "Preview";
  const en_US = {
    title: title$2,
    ExportHelper: ExportHelper$2,
    Setting: Setting$2,
    Language: Language$2,
    "Copy Text": "Copy Text",
    "Copied!": "Copied!",
    Screenshot: Screenshot$2,
    Markdown: Markdown$2,
    HTML: HTML$2,
    "JSON": "JSON",
    Archive: Archive$2,
    Save: Save$2,
    Delete: Delete$2,
    "Select All": "Select All",
    Export: Export$2,
    "Error": "Error",
    Loading: Loading$2,
    Preview: Preview$2,
    "File Name": "File Name",
    "Export All": "Export All",
    "Exporter Settings": "Exporter Settings",
    "Export Dialog Title": "Export Conversations",
    "Invalid File Format": "Invalid File Format",
    "Export from official export file": "Export from official export file",
    "Export from API": "Export from API",
    "Available variables": "Available variables",
    "Conversation Timestamp": "Conversation Timestamp",
    "Conversation Timestamp Description": "Will show on the page.",
    "Enable on HTML": "Enable on HTML files",
    "Enable on Markdown": "Enable on Markdown files",
    "Use 24-hour format": "Use 24-hour format (eg. 23:59)",
    "Export Format": "Export Format",
    "Export Metadata": "Export Metadata",
    "Export Metadata Description": "Add metadata to exported Markdown and HTML files.",
    "OpenAI Official Format": "OpenAI Official Format",
    "Conversation Archive Alert": "Are you sure you want to archive all selected conversations?",
    "Conversation Archived Message": "All selected conversations have been archived. Please refresh the page to see the changes.",
    "Conversation Delete Alert": "Are you sure you want to delete all selected conversations?",
    "Conversation Deleted Message": "All selected conversations have been deleted. Please refresh the page to see the changes.",
    "Please start a conversation first": "Please start a conversation first."
  };
  const title$1 = "ChatGPT Exporter";
  const ExportHelper$1 = "导出助手";
  const Setting$1 = "设置";
  const Language$1 = "语言";
  const Screenshot$1 = "截屏";
  const Markdown$1 = "Markdown";
  const HTML$1 = "HTML";
  const Archive$1 = "归档";
  const Save$1 = "保存";
  const Delete$1 = "删除";
  const Export$1 = "导出";
  const Loading$1 = "加载中";
  const Preview$1 = "预览";
  const zh_Hans = {
    title: title$1,
    ExportHelper: ExportHelper$1,
    Setting: Setting$1,
    Language: Language$1,
    "Copy Text": "复制文字",
    "Copied!": "已复制!",
    Screenshot: Screenshot$1,
    Markdown: Markdown$1,
    HTML: HTML$1,
    "JSON": "JSON",
    Archive: Archive$1,
    Save: Save$1,
    Delete: Delete$1,
    "Select All": "全选",
    Export: Export$1,
    "Error": "错误",
    Loading: Loading$1,
    Preview: Preview$1,
    "File Name": "文件名",
    "Export All": "批量导出",
    "Exporter Settings": "导出设置",
    "Export Dialog Title": "导出对话",
    "Invalid File Format": "无效的文件格式",
    "Export from official export file": "从官方导出文件导出",
    "Export from API": "从 API 导出",
    "Available variables": "可用变量",
    "Conversation Timestamp": "对话时间戳",
    "Conversation Timestamp Description": "会显示在页面上。",
    "Enable on HTML": "在 HTML 文件上启用",
    "Enable on Markdown": "在 Markdown 文件上启用",
    "Use 24-hour format": "使用24小时制 (例如 23:59)",
    "Export Format": "导出格式",
    "Export Metadata": "导出元数据",
    "Export Metadata Description": "会添加至 Markdown 以及 HTML 导出。",
    "OpenAI Official Format": "OpenAI 官方格式",
    "Conversation Archive Alert": "确定要归档所有选取的对话？",
    "Conversation Archived Message": "所有所选的对话已归档。请刷新页面。",
    "Conversation Delete Alert": "确定要删除所有选取的对话？",
    "Conversation Deleted Message": "所有所选的对话已删除。请刷新页面。",
    "Please start a conversation first": "请先开始对话。"
  };
  const title = "ChatGPT Exporter";
  const ExportHelper = "Export";
  const Setting = "設定";
  const Language = "語言";
  const Screenshot = "截圖";
  const Markdown = "Markdown";
  const HTML = "HTML";
  const Archive = "封存";
  const Save = "保存";
  const Delete = "刪除";
  const Export = "匯出";
  const Loading = "載入中";
  const Preview = "預覽";
  const zh_Hant = {
    title,
    ExportHelper,
    Setting,
    Language,
    "Copy Text": "複製文字",
    "Copied!": "已複製!",
    Screenshot,
    Markdown,
    HTML,
    "JSON": "JSON",
    Archive,
    Save,
    Delete,
    "Select All": "全選",
    Export,
    "Error": "錯誤",
    Loading,
    Preview,
    "File Name": "檔案名稱",
    "Export All": "批量匯出",
    "Exporter Settings": "設定",
    "Export Dialog Title": "匯出對話",
    "Invalid File Format": "無效的檔案格式",
    "Export from official export file": "從官方匯出檔案匯出",
    "Export from API": "從 API 匯出",
    "Available variables": "可用變數",
    "Conversation Timestamp": "對話時間戳",
    "Conversation Timestamp Description": "會顯示在頁面上。",
    "Enable on HTML": "在 HTML 檔案上啟用",
    "Enable on Markdown": "在 Markdown 檔案上啟用",
    "Use 24-hour format": "使用24小時制 (例如 23:59)",
    "Export Format": "匯出格式",
    "Export Metadata": "匯出元資料",
    "Export Metadata Description": "會添加至 Markdown 以及 HTML 匯出。",
    "OpenAI Official Format": "OpenAI 官方格式",
    "Conversation Archive Alert": "確定要封存所有選取的對話？",
    "Conversation Archived Message": "所有選取的對話已封存。請重新整理頁面。",
    "Conversation Delete Alert": "確定要刪除所有選取的對話？",
    "Conversation Deleted Message": "所有選取的對話已刪除。請重新整理頁面。",
    "Please start a conversation first": "請先開始對話。"
  };
  const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
  const htmlEntities = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
  };
  const unescapeHtmlEntity = (m2) => htmlEntities[m2];
  const unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
  let defaultOptions = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: true,
    unescape
  };
  function setDefaults() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    defaultOptions = {
      ...defaultOptions,
      ...options
    };
  }
  const initReactI18next = {
    type: "3rdParty",
    init(instance) {
      setDefaults(instance.options.react);
    }
  };
  const EN_US = {
    name: "English",
    code: "en-US",
    resource: en_US
  };
  const ZH_Hans = {
    name: "简体中文",
    code: "zh-Hans",
    resource: zh_Hans
  };
  const ZH_Hant = {
    name: "繁體中文",
    code: "zh-Hant",
    resource: zh_Hant
  };
  const LOCALES = [EN_US, ZH_Hans, ZH_Hant];
  const LanguageMapping = {
    en: EN_US.code,
    "en-US": EN_US.code,
    zh: ZH_Hans.code,
    "zh-CN": ZH_Hans.code,
    "zh-MO": ZH_Hans.code,
    "zh-SG": ZH_Hans.code,
    "zh-Hans": ZH_Hans.code,
    "zh-HK": ZH_Hant.code,
    "zh-TW": ZH_Hant.code,
    "zh-Hant": ZH_Hant.code
  };
  const resources = LOCALES.reduce((acc, cur) => {
    acc[cur.code] = {
      translation: cur.resource
    };
    return acc;
  }, {});
  function standardizeLanguage(language) {
    if (language in LanguageMapping) return LanguageMapping[language];
    const shortLang = language.split("-")[0] || language;
    if (shortLang in LanguageMapping) return LanguageMapping[shortLang];
    return language;
  }
  function getNavigatorLanguage() {
    const {
      language,
      languages
    } = navigator;
    if (language) return language;
    if (languages && languages.length) {
      return languages[0];
    }
    return null;
  }
  function getDefaultLanguage() {
    const storedLanguage = ScriptStorage.get(KEY_LANGUAGE);
    if (storedLanguage) return standardizeLanguage(storedLanguage);
    const browserLanguage = getNavigatorLanguage();
    if (browserLanguage) return standardizeLanguage(browserLanguage);
    return EN_US.code;
  }
  i18n.use(initReactI18next).init({
    fallbackLng: EN_US.code,
    lng: getDefaultLanguage(),
    debug: false,
    resources,
    interpolation: {
      escapeValue: false
      // not needed for react as it escapes by default
    }
  });
  i18n.on("languageChanged", (lng) => {
    ScriptStorage.set(KEY_LANGUAGE, lng);
  });
  var _excluded = ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "className", "spin"];
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var DEFAULT_ICON_CONFIGS = {
    size: "1em",
    strokeWidth: 4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    rtl: false,
    theme: "outline",
    colors: {
      outline: {
        fill: "#333",
        background: "transparent"
      },
      filled: {
        fill: "#333",
        background: "#FFF"
      },
      twoTone: {
        fill: "#333",
        twoTone: "#2F88FF"
      },
      multiColor: {
        outStrokeColor: "#333",
        outFillColor: "#2F88FF",
        innerStrokeColor: "#FFF",
        innerFillColor: "#43CCF8"
      }
    },
    prefix: "i"
  };
  function guid() {
    return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
  }
  function IconConverter(id, icon, config) {
    var fill = typeof icon.fill === "string" ? [icon.fill] : icon.fill || [];
    var colors = [];
    var theme = icon.theme || config.theme;
    switch (theme) {
      case "outline":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push("none");
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push("none");
        break;
      case "filled":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push("#FFF");
        colors.push("#FFF");
        break;
      case "two-tone":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.twoTone.twoTone);
        break;
      case "multi-color":
        colors.push(typeof fill[0] === "string" ? fill[0] : "currentColor");
        colors.push(typeof fill[1] === "string" ? fill[1] : config.colors.multiColor.outFillColor);
        colors.push(typeof fill[2] === "string" ? fill[2] : config.colors.multiColor.innerStrokeColor);
        colors.push(typeof fill[3] === "string" ? fill[3] : config.colors.multiColor.innerFillColor);
        break;
    }
    return {
      size: icon.size || config.size,
      strokeWidth: icon.strokeWidth || config.strokeWidth,
      strokeLinecap: icon.strokeLinecap || config.strokeLinecap,
      strokeLinejoin: icon.strokeLinejoin || config.strokeLinejoin,
      colors,
      id
    };
  }
  var IconContext = /* @__PURE__ */ React.createContext(DEFAULT_ICON_CONFIGS);
  IconContext.Provider;
  function IconWrapper(name, rtl, render) {
    return function(props) {
      var size = props.size, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, strokeLinejoin = props.strokeLinejoin, theme = props.theme, fill = props.fill, className = props.className, spin = props.spin, extra = _objectWithoutProperties(props, _excluded);
      var ICON_CONFIGS = React.useContext(IconContext);
      var id = React.useMemo(guid, []);
      var svgProps = IconConverter(id, {
        size,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        theme,
        fill
      }, ICON_CONFIGS);
      var cls = [ICON_CONFIGS.prefix + "-icon"];
      cls.push(ICON_CONFIGS.prefix + "-icon-" + name);
      if (rtl && ICON_CONFIGS.rtl) {
        cls.push(ICON_CONFIGS.prefix + "-icon-rtl");
      }
      if (spin) {
        cls.push(ICON_CONFIGS.prefix + "-icon-spin");
      }
      if (className) {
        cls.push(className);
      }
      return /* @__PURE__ */ React.createElement("span", _objectSpread(_objectSpread({}, extra), {}, {
        className: cls.join(" ")
      }), render(svgProps));
    };
  }
  const _Close = IconWrapper("close", false, function(props) {
    return /* @__PURE__ */ React.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M8 8L40 40",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M8 40L40 8",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }));
  });
  function useHashId() {
    const originalId = React.useId();
    const hashId = React.useMemo(() => `id-${simpleHash(originalId)}`, [originalId]);
    return hashId;
  }
  function DraggableFloatingDialog({
    title: title2,
    canBeClosed = true,
    onClose,
    actions,
    draggableProps,
    dialogProps,
    maxWidth = "md",
    children
  }) {
    const [isOpen, setIsOpen] = React.useState(true);
    const nodeRef = React.useRef(null);
    const titleId = useHashId();
    const handleClose = () => {
      setIsOpen(false);
      onClose == null ? void 0 : onClose();
    };
    if (!isOpen) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Draggable, {
      handle: `#${titleId}`,
      nodeRef,
      ...draggableProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        ref: nodeRef,
        className: "uno-oo2p1k",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          role: "dialog",
          "aria-labelledby": titleId,
          className: `uno-iqiz04 max-w-${maxWidth}`,
          ...dialogProps,
          children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            id: titleId,
            className: "uno-3vlqif",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
              className: "uno-6mrwng",
              children: title2
            }), canBeClosed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              onClick: handleClose,
              className: "uno-k2agtf",
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(_Close, {
                theme: "outline",
                size: "24",
                className: "uno-wr5v1u"
              })
            })]
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "uno-64nfu8 dialog-content",
            children
          }), actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "uno-umshe5",
            children: actions
          })]
        })
      })
    });
  }
  const isServer = typeof window === "undefined";
  const isDev = false;
  function hslToRgb(h2, s, l2) {
    s /= 100;
    l2 /= 100;
    const c = (1 - Math.abs(2 * l2 - 1)) * s;
    const x = c * (1 - Math.abs(h2 / 60 % 2 - 1));
    const m2 = l2 - c / 2;
    let r2 = 0;
    let g = 0;
    let b = 0;
    if (h2 >= 0 && h2 < 60) {
      r2 = c;
      g = x;
      b = 0;
    } else if (h2 >= 60 && h2 < 120) {
      r2 = x;
      g = c;
      b = 0;
    } else if (h2 >= 120 && h2 < 180) {
      r2 = 0;
      g = c;
      b = x;
    } else if (h2 >= 180 && h2 < 240) {
      r2 = 0;
      g = x;
      b = c;
    } else if (h2 >= 240 && h2 < 300) {
      r2 = x;
      g = 0;
      b = c;
    } else if (h2 >= 300 && h2 < 360) {
      r2 = c;
      g = 0;
      b = x;
    }
    r2 = Math.round((r2 + m2) * 255);
    g = Math.round((g + m2) * 255);
    b = Math.round((b + m2) * 255);
    return [r2, g, b];
  }
  const _Logger = class _Logger {
    constructor(optionsOrLabel) {
      __publicField(this, "logStorageFlagName");
      __publicField(this, "label");
      __publicField(this, "color");
      // TODO: calculate color based on label, support both browser and node
      __publicField(this, "_enableDebug");
      __publicField(this, "calculateColor", (label) => {
        if (!label) return void 0;
        let hash = 0;
        for (let i = 0; i < label.length; i++) {
          hash = (hash << 5) - hash + label.charCodeAt(i);
          hash |= 0;
        }
        const hue = hash % 360;
        const saturation = 50;
        const lightness = 50;
        if (isServer) {
          return `\x1B[38;2;${hslToRgb(hue, saturation, lightness).join(";")}m`;
        }
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      });
      __publicField(this, "getLabelWithColor", () => {
        if (isServer) {
          return `${this.color}[${this.label}]\x1B[0m`;
        }
        return `[${this.label}]`;
      });
      __publicField(this, "logWithColor", (method, ...args) => {
        if (!this.label) {
          console[method](...args);
          return;
        }
        const labelWithColor = this.getLabelWithColor();
        const logArgs = [labelWithColor, ...args];
        if (isServer) {
          console[method](...logArgs);
        } else {
          console[method](`%c${labelWithColor}`, `color: ${this.color}`, ...args);
        }
      });
      // Check if logging should occur
      __publicField(this, "shouldLog", () => this.enableDebug);
      // Enable logging
      __publicField(this, "enable", () => {
        this.enableDebug = true;
      });
      // Disable logging
      __publicField(this, "disable", () => {
        this.enableDebug = false;
      });
      __publicField(this, "log", (...args) => {
        if (!this.shouldLog()) return;
        this.logWithColor("log", ...args);
      });
      __publicField(this, "warn", (...args) => {
        if (!this.shouldLog()) return;
        this.logWithColor("warn", ...args);
      });
      __publicField(this, "error", (...args) => {
        if (!this.shouldLog()) return;
        this.logWithColor("error", ...args);
      });
      __publicField(this, "verbose", (...args) => {
        if (!this.shouldLog()) return;
        this.logWithColor("debug", ...args);
      });
      const options = (typeof optionsOrLabel === "string" ? {
        label: optionsOrLabel
      } : optionsOrLabel) || {};
      const {
        enableDebug,
        logStorageFlagName = _Logger.DEFAULT_LOG_STORAGE_FLAG_NAME,
        label
      } = options;
      this.logStorageFlagName = logStorageFlagName;
      this.label = label;
      this.color = this.calculateColor(label);
      this.enableDebug = enableDebug;
    }
    get enableDebug() {
      if (this._enableDebug !== void 0) {
        return this._enableDebug;
      }
      if (isServer) {
        this._enableDebug = isDev;
        return this._enableDebug;
      }
      const enableDebugFromStorage = localStorage.getItem(this.logStorageFlagName);
      this.enableDebug = enableDebugFromStorage ? enableDebugFromStorage === "true" : true;
      return this._enableDebug;
    }
    set enableDebug(value) {
      this._enableDebug = value;
      if (!isServer && value !== void 0) {
        localStorage.setItem(this.logStorageFlagName, value ? "true" : "false");
      }
    }
  };
  __publicField(_Logger, "DEFAULT_LOG_STORAGE_FLAG_NAME", "logger-enable");
  let Logger = _Logger;
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      __publicField(this, "logger");
      this.state = {
        hasError: false
      };
      this.logger = new Logger({
        label: "ErrorBoundary"
      });
    }
    static getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
    componentDidCatch(error, info) {
      this.logger.log(error, info.componentStack);
    }
    render() {
      if (this.state.hasError) {
        return this.props.fallback;
      }
      return this.props.children;
    }
  }
  const _SettingConfig = IconWrapper("setting-config", true, function(props) {
    return /* @__PURE__ */ React.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M41.5 10H35.5",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M27.5 6V14",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M27.5 10L5.5 10",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M13.5 24H5.5",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M21.5 20V28",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M43.5 24H21.5",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M41.5 38H35.5",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M27.5 34V42",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M27.5 38H5.5",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }));
  });
  function FloatingButton({
    onClick,
    draggableProps
  }) {
    const nodeRef = React.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Draggable, {
      nodeRef,
      ...draggableProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        ref: nodeRef,
        className: "uno-qhihqc",
        "aria-label": "setting",
        onClick,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(_SettingConfig, {
          theme: "outline",
          size: "24",
          fill: "#ffffff"
        })
      })
    });
  }
  function r$2(e2) {
    var t2, f2, n2 = "";
    if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
    else if ("object" == typeof e2) if (Array.isArray(e2)) {
      var o = e2.length;
      for (t2 = 0; t2 < o; t2++) e2[t2] && (f2 = r$2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
    return n2;
  }
  function clsx() {
    for (var e2, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++) (e2 = arguments[f2]) && (t2 = r$2(e2)) && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  function PanelAbout() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "uno-9pc71d",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
        className: "uno-27dpxk",
        children: "关于"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        className: "uno-ymhvkx",
        children: "让网页更智能"
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
        className: "uno-dk190z",
        children: ["作者：", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "http://github.com/2214962083",
          target: "_blank",
          rel: "noreferrer",
          className: "uno-ovxox2",
          children: "@葬爱非主流小明"
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "uno-939eke",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "uno-85n0vz",
          children: "© 2024 All rights reserved"
        })
      })]
    });
  }
  var define_import_meta_env_default$1 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const getInitialState2 = () => initialState;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => {
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
        );
      }
      listeners.clear();
    };
    const api = { setState, getState, getInitialState: getInitialState2, subscribe, destroy };
    const initialState = state = createState(setState, getState, api);
    return api;
  };
  const createStore$1 = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  var withSelector = { exports: {} };
  var withSelector_production_min = {};
  var shim = { exports: {} };
  var useSyncExternalStoreShim_production_min = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e = React;
  function h$1(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m$1 = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
  function q$1(a, b) {
    var d = b(), f2 = l({
      inst: {
        value: d,
        getSnapshot: b
      }
    }), c = f2[0].inst, g = f2[1];
    n$1(function() {
      c.value = d;
      c.getSnapshot = b;
      r$1(c) && g({
        inst: c
      });
    }, [a, d, b]);
    m$1(function() {
      r$1(c) && g({
        inst: c
      });
      return a(function() {
        r$1(c) && g({
          inst: c
        });
      });
    }, [a]);
    p$1(d);
    return d;
  }
  function r$1(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var d = b();
      return !k(a, d);
    } catch (f2) {
      return true;
    }
  }
  function t$1(a, b) {
    return b();
  }
  var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$1;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
  {
    shim.exports = useSyncExternalStoreShim_production_min;
  }
  var shimExports = shim.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var h = React, n = shimExports;
  function p(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
  withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e2, l2, g) {
    var c = t(null);
    if (null === c.current) {
      var f2 = {
        hasValue: false,
        value: null
      };
      c.current = f2;
    } else f2 = c.current;
    c = v(function() {
      function a2(a3) {
        if (!c2) {
          c2 = true;
          d2 = a3;
          a3 = l2(a3);
          if (void 0 !== g && f2.hasValue) {
            var b2 = f2.value;
            if (g(b2, a3)) return k2 = b2;
          }
          return k2 = a3;
        }
        b2 = k2;
        if (q(d2, a3)) return b2;
        var e3 = l2(a3);
        if (void 0 !== g && g(b2, e3)) return b2;
        d2 = a3;
        return k2 = e3;
      }
      var c2 = false, d2, k2, m2 = void 0 === e2 ? null : e2;
      return [function() {
        return a2(b());
      }, null === m2 ? void 0 : function() {
        return a2(m2());
      }];
    }, [b, e2, l2, g]);
    var d = r(a, c[0], c[1]);
    u(function() {
      f2.hasValue = true;
      f2.value = d;
    }, [d]);
    w(d);
    return d;
  };
  {
    withSelector.exports = withSelector_production_min;
  }
  var withSelectorExports = withSelector.exports;
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
  var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const { useDebugValue } = React;
  const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
  let didWarnAboutEqualityFn = false;
  const identity = (arg) => arg;
  function useStore(api, selector = identity, equalityFn) {
    if ((define_import_meta_env_default ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
      console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
      );
      didWarnAboutEqualityFn = true;
    }
    const slice = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getInitialState,
      selector,
      equalityFn
    );
    useDebugValue(slice);
    return slice;
  }
  const createImpl = (createState) => {
    if ((define_import_meta_env_default ? "production" : void 0) !== "production" && typeof createState !== "function") {
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    }
    const api = typeof createState === "function" ? createStore$1(createState) : createState;
    const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
    Object.assign(useBoundStore, api);
    return useBoundStore;
  };
  const create = (createState) => createState ? createImpl(createState) : createImpl;
  function createStore(devtoolsName) {
    const newCreate = (store) => {
      let result;
      {
        result = create(store);
      }
      return result;
    };
    return newCreate;
  }
  const getInitialState$1 = () => ({
    logItems: []
  });
  const useLogStore = createStore()((set, get) => ({
    ...getInitialState$1(),
    addLogItem: (logItem) => {
      set((state) => ({
        ...state,
        logItems: [...state.logItems, logItem]
      }));
    }
  }));
  function PanelLog() {
    const {
      logItems
    } = useLogStore();
    const endOfList = React.useRef(null);
    React.useEffect(() => {
      if (endOfList.current) {
        endOfList.current.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, [logItems]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "uno-ukjnge",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
        className: "uno-sj6hcf",
        children: "Log"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
        className: "uno-oljrn5",
        children: logItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
          className: "uno-dlekmq",
          children: item
        }, index))
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        ref: endOfList
      })]
    });
  }
  const GMStorage = {
    getItem: async (name) => (
      // console.debug(name, "has been retrieved");
      await _GM_getValue(name) || null
    ),
    setItem: async (name, value) => {
      await _GM_setValue(name, value);
    },
    removeItem: async (name) => {
      await _GM_deleteValue(name);
    }
  };
  const getInitialState = () => ({
    hasHydrated: false,
    showLog: false
  });
  const useSettingsStore = createStore()(middleware.persist((set, get) => ({
    ...getInitialState(),
    setHasHydrated(hasHydrated) {
      set({
        hasHydrated
      });
    },
    setShowLog(showLog) {
      set({
        showLog
      });
    }
  }), {
    name: "smart-web:settings-store",
    storage: middleware.createJSONStorage(() => GMStorage),
    onRehydrateStorage: () => (state) => {
      if (state) {
        state.setHasHydrated(true);
      }
    }
  }));
  function PanelSettings() {
    const {
      showLog,
      setShowLog,
      hasHydrated
    } = useSettingsStore();
    if (!hasHydrated) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "uno-ike2jk",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "uno-3ftjyn",
          children: "Loading..."
        })
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "uno-blqzjk",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
        className: "uno-jq74bi",
        children: "Settings"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
        className: "uno-pfikq2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", {
          className: "uno-gw6dv1",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "uno-r1r61e",
            children: "Show Log"
          }), /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
            className: "uno-4bau06",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsx("input", {
              type: "checkbox",
              className: "uno-eakdl5",
              checked: showLog,
              onChange: () => setShowLog(!showLog),
              "aria-label": "Toggle show log"
            }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "uno-pd2td5"
            })]
          })]
        })
      })]
    });
  }
  function CustomTabPanel(props) {
    const {
      children,
      value,
      index,
      ...other
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      role: "tabpanel",
      hidden: value !== index,
      id: `cx-auto-tabpanel-${index}`,
      "aria-labelledby": `cx-auto-tab-${index}`,
      ...other,
      children: value === index && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "uno-jscex3",
        children
      })
    });
  }
  function TabPanel() {
    const [tab, setTab] = React.useState(0);
    const handleChange = (newValue) => {
      setTab(newValue);
    };
    const tabs = [{
      label: "状态",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLog, {})
    }, {
      label: "设定",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelSettings, {})
    }, {
      label: "关于",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelAbout, {})
    }];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "uno-gzz0fc",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "uno-7vaw05",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", {
          className: "uno-kagvzm",
          "aria-label": "Tabs",
          children: tabs.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            onClick: () => handleChange(index),
            className: clsx("uno-ne2n0a", tab === index ? "uno-wun44x" : "uno-blh9r8"),
            id: `cx-auto-tab-${index}`,
            "aria-controls": `cx-auto-tabpanel-${index}`,
            children: item.label
          }, index))
        })
      }), tabs.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, {
        value: tab,
        index,
        children: item.content
      }, index))]
    });
  }
  const _Loading = IconWrapper("loading", true, function(props) {
    return /* @__PURE__ */ React.createElement("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 48 48",
      fill: "none"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
      stroke: props.colors[0],
      strokeWidth: props.strokeWidth,
      strokeLinecap: props.strokeLinecap,
      strokeLinejoin: props.strokeLinejoin
    }));
  });
  const Button = ({
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    children,
    className = "",
    disabled,
    onClick,
    ...props
  }) => {
    const baseClasses = "uno-f6crrb";
    const variantClasses = {
      primary: "uno-ja2hls",
      secondary: "uno-512amd",
      outline: "uno-wdbt9d",
      ghost: "uno-atmkfn"
    };
    const sizeClasses = {
      sm: "uno-3stqip",
      md: "uno-l7dlov",
      lg: "uno-gae9ci"
    };
    const classes = [baseClasses, variantClasses[variant], sizeClasses[size], fullWidth ? "uno-gzz0fc" : "", loading ? "uno-noviie" : "", disabled ? "uno-sev2av" : "", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      ...props,
      className: classes,
      onClick: () => {
        if (loading || disabled) return;
        onClick == null ? void 0 : onClick();
      },
      children: [loading && /* @__PURE__ */ jsxRuntimeExports.jsx(_Loading, {
        className: "uno-y0qa2l i-gg-spinner-two-alt",
        "aria-hidden": "true"
      }), children]
    });
  };
  function PanelActions() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "uno-sjfmdy",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        loading: true,
        variant: "primary",
        size: "md",
        children: "新建"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        variant: "secondary",
        size: "md",
        children: "编辑"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        variant: "outline",
        size: "md",
        children: "删除"
      })]
    });
  }
  function App() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ErrorBoundary, {
        children: [open && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DraggableFloatingDialog, {
            title: "Smart web",
            actions: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelActions, {}),
            canBeClosed: true,
            onClose: handleClose,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, {})
          })
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButton, {
          onClick: () => {
            setOpen(true);
          }
        })]
      })
    });
  }
  var createRoot;
  var m = require$$0;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }
  main();
  function main() {
    onloadSafe(() => {
      const container = document.createElement("div");
      const root = createRoot(container);
      root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
      sentinel.on("body", (body) => {
        body.append(container);
      });
    });
  }

})(React, i18next, ReactDraggable, zustandMiddleware, ReactDOM);