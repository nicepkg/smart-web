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
// @require            https://registry.npmmirror.com/@emotion/react/11.11.4/files/dist/emotion-react.umd.min.js
// @grant              GM_addStyle
// @grant              GM_deleteValue
// @grant              GM_getValue
// @grant              GM_setValue
// @run-at             document-end
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(" .i-icon{display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.i-icon-spin svg{animation:i-icon-spin 1s infinite linear}.i-icon-rtl{transform:scaleX(-1)}@keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}} ");

(function (require$$0, i18n, react, require$$0$1) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return {
      $$typeof: k,
      type: c,
      key: e,
      ref: h,
      props: d,
      _owner: n.current
    };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
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
  class GMStorage {
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
  }
  __publicField(GMStorage, "supported", typeof _GM_getValue === "function" && typeof _GM_setValue === "function" && typeof _GM_deleteValue === "function");
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
      if (GMStorage.supported) {
        try {
          return GMStorage.get(key);
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
      if (GMStorage.supported) {
        try {
          return GMStorage.set(key, value);
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
      if (GMStorage.supported) {
        try {
          return GMStorage.delete(key);
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
  function ConfigPanel() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      children: "ConfigPanel"
    });
  }
  const isServer = typeof window === "undefined";
  const isDev = false;
  function hslToRgb(h, s, l2) {
    s /= 100;
    l2 /= 100;
    const c = (1 - Math.abs(2 * l2 - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m2 = l2 - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m2) * 255);
    g = Math.round((g + m2) * 255);
    b = Math.round((b + m2) * 255);
    return [r, g, b];
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
  class ErrorBoundary extends require$$0.Component {
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
  function FloatingButton() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      children: "FloatingButton"
    });
  }
  function LogPanel() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      children: "LogPanel"
    });
  }
  const theme = {
    colors: {
      primary: "rgb(255, 255, 255)",
      // 60%
      secondary: "rgb(230, 230, 230)",
      // 30%
      active: "#2196f3",
      // 10%
      activeSecondary: "rgb(231, 243, 255)",
      error: "rgb(231, 71, 93)"
    }
  };
  function App() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ThemeProvider, {
        theme,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ErrorBoundary, {
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(LogPanel, {}), /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigPanel, {}), /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButton, {})]
        })
      })
    });
  }
  var createRoot;
  var m = require$$0$1;
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

})(React, i18next, emotionReact, ReactDOM);