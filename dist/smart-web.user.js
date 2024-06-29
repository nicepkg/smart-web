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
// @require            https://registry.npmmirror.com/@emotion/styled/11.11.5/files/dist/emotion-styled.umd.min.js
// @require            https://registry.npmmirror.com/@mui/material/5.15.21/files/umd/material-ui.production.min.js
// @require            https://registry.npmmirror.com/react-draggable/4.4.6/files/build/web/react-draggable.min.js
// @grant              GM_addStyle
// @grant              GM_deleteValue
// @grant              GM_getValue
// @grant              GM_setValue
// @run-at             document-end
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const n=document.createElement("style");n.textContent=t,document.head.append(n)})(` .i-icon{display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.i-icon-spin svg{animation:i-icon-spin 1s infinite linear}.i-icon-rtl{transform:scaleX(-1)}@keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes i-icon-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.floating-overlay {
  position: fixed;
  top: 0;
  left: 0;
  /*right: 0;*/
  /*bottom: 0;*/
  z-index: 1001;
}

.floating-overlay .MuiDialog-root {
  position: static;
} `);

(function (React, i18n, react, material, Draggable, emStyled, ReactDOM) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule) return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a.prototype = f2.prototype;
    } else a = {};
    Object.defineProperty(a, "__esModule", {
      value: true
    });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a;
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
  var f$1 = React, k$2 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$3 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function q$3(c2, a, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a.key && (e2 = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b2 in a) m$3.call(a, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a[b2]);
    if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
    return {
      $$typeof: k$2,
      type: c2,
      key: e2,
      ref: h2,
      props: d2,
      _owner: n$3.current
    };
  }
  reactJsxRuntime_production_min.Fragment = l$2;
  reactJsxRuntime_production_min.jsx = q$3;
  reactJsxRuntime_production_min.jsxs = q$3;
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
  function DraggableFloatingDialog({
    title: title2,
    canBeClosed = true,
    handleClose,
    actions,
    draggableProps,
    dialogProps,
    maxWidth: maxWidth2,
    children
  }) {
    const [open, setOpen] = React.useState(true);
    const nodeRef = React.useRef(null);
    const titleId = React.useId();
    const handleDialogClose = () => {
      setOpen(false);
      if (handleClose) {
        handleClose();
      }
    };
    return open && /* @__PURE__ */ jsxRuntimeExports.jsx(Draggable, {
      handle: `#${titleId}`,
      cancel: '[class*="MuiDialogContent-root"]',
      nodeRef,
      ...draggableProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "floating-overlay",
        ref: nodeRef,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(material.Dialog, {
          open: true,
          hideBackdrop: true,
          disableEnforceFocus: true,
          disableAutoFocus: true,
          disableScrollLock: true,
          disablePortal: true,
          maxWidth: maxWidth2 || "xs",
          "aria-labelledby": titleId,
          container: () => document.querySelector(".floating-overlay"),
          ...dialogProps,
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(material.DialogTitle, {
            style: {
              cursor: "move"
            },
            id: titleId,
            children: title2
          }), canBeClosed && /* @__PURE__ */ jsxRuntimeExports.jsx(material.IconButton, {
            "aria-label": "close",
            onClick: handleDialogClose,
            sx: {
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme2) => theme2.palette.grey[500]
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(material.Icon, {
              children: "close"
            })
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(material.DialogContent, {
            dividers: true,
            sx: {
              p: 0
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(material.DialogContentText, {
              component: "div",
              children
            })
          }), actions && /* @__PURE__ */ jsxRuntimeExports.jsx(material.DialogActions, {
            children: actions
          })]
        })
      })
    });
  }
  const isServer = typeof window === "undefined";
  const isDev = false;
  function hslToRgb$1(h2, s, l2) {
    s /= 100;
    l2 /= 100;
    const c2 = (1 - Math.abs(2 * l2 - 1)) * s;
    const x = c2 * (1 - Math.abs(h2 / 60 % 2 - 1));
    const m2 = l2 - c2 / 2;
    let r2 = 0;
    let g2 = 0;
    let b2 = 0;
    if (h2 >= 0 && h2 < 60) {
      r2 = c2;
      g2 = x;
      b2 = 0;
    } else if (h2 >= 60 && h2 < 120) {
      r2 = x;
      g2 = c2;
      b2 = 0;
    } else if (h2 >= 120 && h2 < 180) {
      r2 = 0;
      g2 = c2;
      b2 = x;
    } else if (h2 >= 180 && h2 < 240) {
      r2 = 0;
      g2 = x;
      b2 = c2;
    } else if (h2 >= 240 && h2 < 300) {
      r2 = x;
      g2 = 0;
      b2 = c2;
    } else if (h2 >= 300 && h2 < 360) {
      r2 = c2;
      g2 = 0;
      b2 = x;
    }
    r2 = Math.round((r2 + m2) * 255);
    g2 = Math.round((g2 + m2) * 255);
    b2 = Math.round((b2 + m2) * 255);
    return [r2, g2, b2];
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
        let hash2 = 0;
        for (let i = 0; i < label.length; i++) {
          hash2 = (hash2 << 5) - hash2 + label.charCodeAt(i);
          hash2 |= 0;
        }
        const hue = hash2 % 360;
        const saturation = 50;
        const lightness = 50;
        if (isServer) {
          return `\x1B[38;2;${hslToRgb$1(hue, saturation, lightness).join(";")}m`;
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
  var _excluded$c = ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "className", "spin"];
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
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
  function _objectWithoutPropertiesLoose$1(source, excluded) {
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
    var theme2 = icon.theme || config.theme;
    switch (theme2) {
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
      var size = props.size, strokeWidth = props.strokeWidth, strokeLinecap = props.strokeLinecap, strokeLinejoin = props.strokeLinejoin, theme2 = props.theme, fill = props.fill, className = props.className, spin = props.spin, extra = _objectWithoutProperties(props, _excluded$c);
      var ICON_CONFIGS = React.useContext(IconContext);
      var id = React.useMemo(guid, []);
      var svgProps = IconConverter(id, {
        size,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        theme: theme2,
        fill
      }, ICON_CONFIGS);
      var cls = [ICON_CONFIGS.prefix + "-icon"];
      cls.push(ICON_CONFIGS.prefix + "-icon-" + name);
      if (ICON_CONFIGS.rtl) {
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
    onClick
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(material.Fab, {
      color: "primary",
      "aria-label": "setting",
      onClick,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(_SettingConfig, {
        theme: "outline",
        size: "24",
        fill: "#333"
      })
    });
  }
  function formatMuiErrorMessage$1(code) {
    let url = "https://mui.com/production-error/?code=" + code;
    for (let i = 1; i < arguments.length; i += 1) {
      url += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
  }
  const formatMuiErrorMessage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: formatMuiErrorMessage$1
  }, Symbol.toStringTag, { value: "Module" }));
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e2) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  }();
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2) {
    return {
      value,
      root,
      parent,
      type,
      props,
      children,
      line,
      column,
      length: length2,
      return: ""
    };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, {
      length: -root.length
    }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek()) if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next()) switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39) delimiter(character);
        break;
      case 40:
        if (type === 41) delimiter(type);
        break;
      case 92:
        next();
        break;
    }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10) break;
      else if (type + character === 42 + 42 && peek() === 47) break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek())) next();
    return slice(index, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning) switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1) ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2) append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123) if (offset === 0) parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
            else switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
              case 100:
              case 108:
              case 109:
              case 115:
                parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                break;
              default:
                parse(characters2, reference, reference, reference, [""], children, 0, points, children);
            }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123) --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125) continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45) characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2) variable = 0;
        }
    }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k2 = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k2++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i = 0; i < length2; i++) output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i = 0; i < length2; i++) output += collection[i](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return) callback(element);
      }
    };
  }
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent) return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k2 = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k2++) {
        element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
        break;
      case 4949:
        if (charat(value, length2 + 1) !== 115) break;
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index, children, callback) {
    if (element.length > -1) {
      if (!element["return"]) switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length) return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, {
                  props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], callback);
              case "::placeholder":
                return serialize([copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                })], callback);
            }
            return "";
          });
      }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache2.inserted[serialized.name] = true;
        }
      };
    }
    var cache2 = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache2.sheet.hydrate(nodesToHydrate);
    return cache2;
  };
  let cache;
  if (typeof document === "object") {
    cache = createCache({
      key: "css",
      prepend: true
    });
  }
  function StyledEngineProvider(props) {
    const {
      injectFirst,
      children
    } = props;
    return injectFirst && cache ? /* @__PURE__ */ jsxRuntimeExports.jsx(react.CacheProvider, {
      value: cache,
      children
    }) : children;
  }
  function isEmpty$1(obj) {
    return obj === void 0 || obj === null || Object.keys(obj).length === 0;
  }
  function GlobalStyles(props) {
    const {
      styles,
      defaultTheme: defaultTheme2 = {}
    } = props;
    const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty$1(themeInput) ? defaultTheme2 : themeInput) : styles;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(react.Global, {
      styles: globalStyles
    });
  }
  function styled$1(tag, options) {
    const stylesFactory = emStyled(tag, options);
    return stylesFactory;
  }
  const internal_processStyles = (tag, processor) => {
    if (Array.isArray(tag.__emotion_styles)) {
      tag.__emotion_styles = processor(tag.__emotion_styles);
    }
  };
  const styledEngine = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    GlobalStyles,
    StyledEngineProvider,
    ThemeContext: react.ThemeContext,
    css: react.css,
    default: styled$1,
    internal_processStyles,
    keyframes: react.keyframes
  }, Symbol.toStringTag, { value: "Module" }));
  function _extends$1() {
    return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
      }
      return n2;
    }, _extends$1.apply(null, arguments);
  }
  function _objectWithoutPropertiesLoose(r2, e2) {
    if (null == r2) return {};
    var t2 = {};
    for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
      if (e2.indexOf(n2) >= 0) continue;
      t2[n2] = r2[n2];
    }
    return t2;
  }
  function isPlainObject(item) {
    if (typeof item !== "object" || item === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
  }
  function deepClone(source) {
    if (!isPlainObject(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach((key) => {
      output[key] = deepClone(source[key]);
    });
    return output;
  }
  function deepmerge$1(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends$1({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isPlainObject(source[key]) && // Avoid prototype pollution
        Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
          output[key] = deepmerge$1(target[key], source[key], options);
        } else if (options.clone) {
          output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }
  const deepmerge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: deepmerge$1,
    isPlainObject
  }, Symbol.toStringTag, { value: "Module" }));
  const _excluded$b = ["values", "unit", "step"];
  const sortBreakpointsValues = (values2) => {
    const breakpointsAsArray = Object.keys(values2).map((key) => ({
      key,
      val: values2[key]
    })) || [];
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return _extends$1({}, acc, {
        [obj.key]: obj.val
      });
    }, {});
  };
  function createBreakpoints(breakpoints) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values: values2 = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536
        // large screen
      },
      unit = "px",
      step = 5
    } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded$b);
    const sortedValues = sortBreakpointsValues(values2);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values2[key] === "number" ? values2[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values2[key] === "number" ? values2[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
    }
    return _extends$1({
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit
    }, other);
  }
  const shape = {
    borderRadius: 4
  };
  function merge(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge$1(acc, item, {
      clone: false
      // No need to clone deep, it's way faster.
    });
  }
  const values$1 = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536
    // large screen
  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (key) => `@media (min-width:${values$1[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme2 = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === "object") {
      const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style2) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style2);
  }
  function capitalize$1(string) {
    if (typeof string !== "string") {
      throw new Error(formatMuiErrorMessage$1(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalize = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: capitalize$1
  }, Symbol.toStringTag, { value: "Module" }));
  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== "string") {
      return null;
    }
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split(".").reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === "function") {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style$1(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;
    const fn = (props) => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme2 = props.theme;
      const themeMapping = getPath(theme2, themeKey) || {};
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = {};
    fn.filterProps = [prop];
    return fn;
  }
  function memoize(fn) {
    const cache2 = {};
    return (arg) => {
      if (cache2[arg] === void 0) {
        cache2[arg] = fn(arg);
      }
      return cache2[arg];
    };
  }
  const properties = {
    m: "margin",
    p: "padding"
  };
  const directions = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  const aliases = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  const getCssProperties = memoize((prop) => {
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b2] = prop.split("");
    const property = properties[a];
    const direction = directions[b2] || "";
    return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
  });
  const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
  const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
  [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme2, themeKey, defaultValue, propName) {
    var _getPath;
    const themeSpacing = (_getPath = getPath(theme2, themeKey, false)) != null ? _getPath : defaultValue;
    if (typeof themeSpacing === "number") {
      return (abs2) => {
        if (typeof abs2 === "string") {
          return abs2;
        }
        return themeSpacing * abs2;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return (abs2) => {
        if (typeof abs2 === "string") {
          return abs2;
        }
        return themeSpacing[abs2];
      };
    }
    if (typeof themeSpacing === "function") {
      return themeSpacing;
    }
    return () => void 0;
  }
  function createUnarySpacing(theme2) {
    return createUnaryUnit(theme2, "spacing", 8);
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === "string" || propValue == null) {
      return propValue;
    }
    const abs2 = Math.abs(propValue);
    const transformed = transformer(abs2);
    if (propValue >= 0) {
      return transformed;
    }
    if (typeof transformed === "number") {
      return -transformed;
    }
    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return (propValue) => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    if (keys.indexOf(prop) === -1) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }
  function margin(props) {
    return style(props, marginKeys);
  }
  margin.propTypes = {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style(props, paddingKeys);
  }
  padding.propTypes = {};
  padding.filterProps = paddingKeys;
  function createSpacing(spacingInput = 8) {
    if (spacingInput.mui) {
      return spacingInput;
    }
    const transform = createUnarySpacing({
      spacing: spacingInput
    });
    const spacing = (...argsInput) => {
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map((argument) => {
        const output = transform(argument);
        return typeof output === "number" ? `${output}px` : output;
      }).join(" ");
    };
    spacing.mui = true;
    return spacing;
  }
  function compose(...styles) {
    const handlers = styles.reduce((acc, style2) => {
      style2.filterProps.forEach((prop) => {
        acc[prop] = style2;
      });
      return acc;
    }, {});
    const fn = (props) => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = {};
    fn.filterProps = styles.reduce((acc, style2) => acc.concat(style2.filterProps), []);
    return fn;
  }
  function borderTransform(value) {
    if (typeof value !== "number") {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style$1({
      prop,
      themeKey: "borders",
      transform
    });
  }
  const border = createBorderStyle("border", borderTransform);
  const borderTop = createBorderStyle("borderTop", borderTransform);
  const borderRight = createBorderStyle("borderRight", borderTransform);
  const borderBottom = createBorderStyle("borderBottom", borderTransform);
  const borderLeft = createBorderStyle("borderLeft", borderTransform);
  const borderColor = createBorderStyle("borderColor");
  const borderTopColor = createBorderStyle("borderTopColor");
  const borderRightColor = createBorderStyle("borderRightColor");
  const borderBottomColor = createBorderStyle("borderBottomColor");
  const borderLeftColor = createBorderStyle("borderLeftColor");
  const outline = createBorderStyle("outline", borderTransform);
  const outlineColor = createBorderStyle("outlineColor");
  const borderRadius = (props) => {
    if (props.borderRadius !== void 0 && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
      const styleFromPropValue = (propValue) => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = {};
  borderRadius.filterProps = ["borderRadius"];
  compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
  const gap = (props) => {
    if (props.gap !== void 0 && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8);
      const styleFromPropValue = (propValue) => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = {};
  gap.filterProps = ["gap"];
  const columnGap = (props) => {
    if (props.columnGap !== void 0 && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8);
      const styleFromPropValue = (propValue) => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = {};
  columnGap.filterProps = ["columnGap"];
  const rowGap = (props) => {
    if (props.rowGap !== void 0 && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8);
      const styleFromPropValue = (propValue) => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = {};
  rowGap.filterProps = ["rowGap"];
  const gridColumn = style$1({
    prop: "gridColumn"
  });
  const gridRow = style$1({
    prop: "gridRow"
  });
  const gridAutoFlow = style$1({
    prop: "gridAutoFlow"
  });
  const gridAutoColumns = style$1({
    prop: "gridAutoColumns"
  });
  const gridAutoRows = style$1({
    prop: "gridAutoRows"
  });
  const gridTemplateColumns = style$1({
    prop: "gridTemplateColumns"
  });
  const gridTemplateRows = style$1({
    prop: "gridTemplateRows"
  });
  const gridTemplateAreas = style$1({
    prop: "gridTemplateAreas"
  });
  const gridArea = style$1({
    prop: "gridArea"
  });
  compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
  function paletteTransform(value, userValue) {
    if (userValue === "grey") {
      return userValue;
    }
    return value;
  }
  const color = style$1({
    prop: "color",
    themeKey: "palette",
    transform: paletteTransform
  });
  const bgcolor = style$1({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  const backgroundColor = style$1({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  compose(color, bgcolor, backgroundColor);
  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  const width = style$1({
    prop: "width",
    transform: sizingTransform
  });
  const maxWidth = (props) => {
    if (props.maxWidth !== void 0 && props.maxWidth !== null) {
      const styleFromPropValue = (propValue) => {
        var _props$theme, _props$theme2;
        const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values$1[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ["maxWidth"];
  const minWidth = style$1({
    prop: "minWidth",
    transform: sizingTransform
  });
  const height = style$1({
    prop: "height",
    transform: sizingTransform
  });
  const maxHeight = style$1({
    prop: "maxHeight",
    transform: sizingTransform
  });
  const minHeight = style$1({
    prop: "minHeight",
    transform: sizingTransform
  });
  style$1({
    prop: "size",
    cssProperty: "width",
    transform: sizingTransform
  });
  style$1({
    prop: "size",
    cssProperty: "height",
    transform: sizingTransform
  });
  const boxSizing = style$1({
    prop: "boxSizing"
  });
  compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
  const defaultSxConfig = {
    // borders
    border: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderTop: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderRight: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderBottom: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderLeft: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: borderTransform
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: borderRadius
    },
    // palette
    color: {
      themeKey: "palette",
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: "palette",
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: "shadows"
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every((object) => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
  }
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme2, config) {
      const props = {
        [prop]: val,
        theme: theme2
      };
      const options = config[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style: style2
      } = options;
      if (val == null) {
        return null;
      }
      if (themeKey === "typography" && val === "inherit") {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme2, themeKey) || {};
      if (style2) {
        return style2(props);
      }
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize$1(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx2(props) {
      var _theme$unstable_sxCon;
      const {
        sx,
        theme: theme2 = {}
      } = props || {};
      if (!sx) {
        return null;
      }
      const config = (_theme$unstable_sxCon = theme2.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === "function") {
          sxObject = sxInput(theme2);
        } else if (typeof sxInput !== "object") {
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme2.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css2 = emptyBreakpoints;
        Object.keys(sxObject).forEach((styleKey) => {
          const value = callIfFn(sxObject[styleKey], theme2);
          if (value !== null && value !== void 0) {
            if (typeof value === "object") {
              if (config[styleKey]) {
                css2 = merge(css2, getThemeValue(styleKey, value, theme2, config));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme: theme2
                }, value, (x) => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css2[styleKey] = styleFunctionSx2({
                    sx: value,
                    theme: theme2
                  });
                } else {
                  css2 = merge(css2, breakpointsValues);
                }
              }
            } else {
              css2 = merge(css2, getThemeValue(styleKey, value, theme2, config));
            }
          }
        });
        return removeUnusedBreakpoints(breakpointsKeys, css2);
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx2;
  }
  const styleFunctionSx$1 = unstable_createStyleFunctionSx();
  styleFunctionSx$1.filterProps = ["sx"];
  function applyStyles(key, styles) {
    const theme2 = this;
    if (theme2.vars && typeof theme2.getColorSchemeSelector === "function") {
      const selector = theme2.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
      return {
        [selector]: styles
      };
    }
    if (theme2.palette.mode === key) {
      return styles;
    }
    return {};
  }
  const _excluded$a = ["breakpoints", "palette", "spacing", "shape"];
  function createTheme$2(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded$a);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge$1({
      breakpoints,
      direction: "ltr",
      components: {},
      // Inject component definitions.
      palette: _extends$1({
        mode: "light"
      }, paletteInput),
      spacing,
      shape: _extends$1({}, shape, shapeInput)
    }, other);
    muiTheme.applyStyles = applyStyles;
    muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  const createTheme$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: createTheme$2,
    private_createBreakpoints: createBreakpoints,
    unstable_applyStyles: applyStyles
  }, Symbol.toStringTag, { value: "Module" }));
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme$1(defaultTheme2 = null) {
    const contextTheme = React__namespace.useContext(react.ThemeContext);
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
  }
  const systemDefaultTheme$1 = createTheme$2();
  function useTheme(defaultTheme2 = systemDefaultTheme$1) {
    return useTheme$1(defaultTheme2);
  }
  const _excluded$9 = ["sx"];
  const splitProps = (props) => {
    var _props$theme$unstable, _props$theme;
    const result = {
      systemProps: {},
      otherProps: {}
    };
    const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
    Object.keys(props).forEach((prop) => {
      if (config[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp(props) {
    const {
      sx: inSx
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === "function") {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!isPlainObject(result)) {
          return systemProps;
        }
        return _extends$1({}, systemProps, result);
      };
    } else {
      finalSx = _extends$1({}, systemProps, inSx);
    }
    return _extends$1({}, otherProps, {
      sx: finalSx
    });
  }
  const styleFunctionSx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: styleFunctionSx$1,
    extendSxProp,
    unstable_createStyleFunctionSx,
    unstable_defaultSxConfig: defaultSxConfig
  }, Symbol.toStringTag, { value: "Module" }));
  const defaultGenerator = (componentName) => componentName;
  const createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  const ClassNameGenerator = createClassNameGenerator();
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
  const _excluded$8 = ["className", "component"];
  function createBox(options = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme2,
      defaultClassName = "MuiBox-root",
      generateClassName
    } = options;
    const BoxRoot = styled$1("div", {
      shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
    })(styleFunctionSx$1);
    const Box2 = /* @__PURE__ */ React__namespace.forwardRef(function Box3(inProps, ref) {
      const theme2 = useTheme(defaultTheme2);
      const _extendSxProp = extendSxProp(inProps), {
        className,
        component = "div"
      } = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$8);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BoxRoot, _extends$1({
        as: component,
        ref,
        className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
        theme: themeId ? theme2[themeId] || theme2 : theme2
      }, other));
    });
    return Box2;
  }
  const globalStateClasses = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
  }
  function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
    const result = {};
    slots.forEach((slot) => {
      result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
    });
    return result;
  }
  var reactIs = { exports: {} };
  var reactIs_production_min = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e$1 = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h$2 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$2 = Symbol.for("react.suspense"), n$2 = Symbol.for("react.suspense_list"), p$2 = Symbol.for("react.memo"), q$2 = Symbol.for("react.lazy"), t$2 = Symbol.for("react.offscreen"), u$2;
  u$2 = Symbol.for("react.module.reference");
  function v$1(a) {
    if ("object" === typeof a && null !== a) {
      var r2 = a.$$typeof;
      switch (r2) {
        case b:
          switch (a = a.type, a) {
            case d:
            case f:
            case e$1:
            case m$2:
            case n$2:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k$1:
                case h$2:
                case l$1:
                case q$2:
                case p$2:
                case g:
                  return a;
                default:
                  return r2;
              }
          }
        case c:
          return r2;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h$2;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l$1;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q$2;
  reactIs_production_min.Memo = p$2;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f;
  reactIs_production_min.StrictMode = e$1;
  reactIs_production_min.Suspense = m$2;
  reactIs_production_min.SuspenseList = n$2;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return v$1(a) === h$2;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return v$1(a) === g;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return v$1(a) === l$1;
  };
  reactIs_production_min.isFragment = function(a) {
    return v$1(a) === d;
  };
  reactIs_production_min.isLazy = function(a) {
    return v$1(a) === q$2;
  };
  reactIs_production_min.isMemo = function(a) {
    return v$1(a) === p$2;
  };
  reactIs_production_min.isPortal = function(a) {
    return v$1(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return v$1(a) === f;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return v$1(a) === e$1;
  };
  reactIs_production_min.isSuspense = function(a) {
    return v$1(a) === m$2;
  };
  reactIs_production_min.isSuspenseList = function(a) {
    return v$1(a) === n$2;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e$1 || a === m$2 || a === n$2 || a === t$2 || "object" === typeof a && null !== a && (a.$$typeof === q$2 || a.$$typeof === p$2 || a.$$typeof === g || a.$$typeof === h$2 || a.$$typeof === l$1 || a.$$typeof === u$2 || void 0 !== a.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v$1;
  {
    reactIs.exports = reactIs_production_min;
  }
  var reactIsExports = reactIs.exports;
  const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
  function getFunctionName(fn) {
    const match2 = `${fn}`.match(fnNameMatchRegex);
    const name = match2 && match2[1];
    return name || "";
  }
  function getFunctionComponentName(Component, fallback = "") {
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
  }
  function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
  }
  function getDisplayName$1(Component) {
    if (Component == null) {
      return void 0;
    }
    if (typeof Component === "string") {
      return Component;
    }
    if (typeof Component === "function") {
      return getFunctionComponentName(Component, "Component");
    }
    if (typeof Component === "object") {
      switch (Component.$$typeof) {
        case reactIsExports.ForwardRef:
          return getWrappedName(Component, Component.render, "ForwardRef");
        case reactIsExports.Memo:
          return getWrappedName(Component, Component.type, "memo");
        default:
          return void 0;
      }
    }
    return void 0;
  }
  const getDisplayName = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: getDisplayName$1,
    getFunctionName
  }, Symbol.toStringTag, { value: "Module" }));
  function resolveProps(defaultProps2, props) {
    const output = _extends$1({}, props);
    Object.keys(defaultProps2).forEach((propName) => {
      if (propName.toString().match(/^(components|slots)$/)) {
        output[propName] = _extends$1({}, defaultProps2[propName], output[propName]);
      } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
        const defaultSlotProps = defaultProps2[propName] || {};
        const slotProps = props[propName];
        output[propName] = {};
        if (!slotProps || !Object.keys(slotProps)) {
          output[propName] = defaultSlotProps;
        } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
          output[propName] = slotProps;
        } else {
          output[propName] = _extends$1({}, slotProps);
          Object.keys(defaultSlotProps).forEach((slotPropName) => {
            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
          });
        }
      } else if (output[propName] === void 0) {
        output[propName] = defaultProps2[propName];
      }
    });
    return output;
  }
  function getThemeProps(params) {
    const {
      theme: theme2,
      name,
      props
    } = params;
    if (!theme2 || !theme2.components || !theme2.components[name] || !theme2.components[name].defaultProps) {
      return props;
    }
    return resolveProps(theme2.components[name].defaultProps, props);
  }
  function useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme2,
    themeId
  }) {
    let theme2 = useTheme(defaultTheme2);
    if (themeId) {
      theme2 = theme2[themeId] || theme2;
    }
    const mergedProps = getThemeProps({
      theme: theme2,
      name,
      props
    });
    return mergedProps;
  }
  const useEnhancedEffect = typeof window !== "undefined" ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
  }
  const clamp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: clamp$1
  }, Symbol.toStringTag, { value: "Module" }));
  function setRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }
  function useEventCallback(fn) {
    const ref = React__namespace.useRef(fn);
    useEnhancedEffect(() => {
      ref.current = fn;
    });
    return React__namespace.useRef((...args) => (
      // @ts-expect-error hide `this`
      (0, ref.current)(...args)
    )).current;
  }
  function useForkRef(...refs) {
    return React__namespace.useMemo(() => {
      if (refs.every((ref) => ref == null)) {
        return null;
      }
      return (instance) => {
        refs.forEach((ref) => {
          setRef(ref, instance);
        });
      };
    }, refs);
  }
  const UNINITIALIZED = {};
  function useLazyRef(init, initArg) {
    const ref = React__namespace.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }
  const EMPTY = [];
  function useOnMount(fn) {
    React__namespace.useEffect(fn, EMPTY);
  }
  class Timeout {
    constructor() {
      this.currentId = null;
      this.clear = () => {
        if (this.currentId !== null) {
          clearTimeout(this.currentId);
          this.currentId = null;
        }
      };
      this.disposeEffect = () => {
        return this.clear;
      };
    }
    static create() {
      return new Timeout();
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = null;
        fn();
      }, delay);
    }
  }
  function useTimeout() {
    const timeout = useLazyRef(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }
  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  const hadFocusVisibleRecentlyTimeout = new Timeout();
  const inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    "datetime-local": true
  };
  function focusTriggersKeyboardModality(node2) {
    const {
      type,
      tagName
    } = node2;
    if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
      return true;
    }
    if (tagName === "TEXTAREA" && !node2.readOnly) {
      return true;
    }
    if (node2.isContentEditable) {
      return true;
    }
    return false;
  }
  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }
  function handlePointerDown() {
    hadKeyboardEvent = false;
  }
  function handleVisibilityChange() {
    if (this.visibilityState === "hidden") {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }
  function prepare(doc) {
    doc.addEventListener("keydown", handleKeyDown, true);
    doc.addEventListener("mousedown", handlePointerDown, true);
    doc.addEventListener("pointerdown", handlePointerDown, true);
    doc.addEventListener("touchstart", handlePointerDown, true);
    doc.addEventListener("visibilitychange", handleVisibilityChange, true);
  }
  function isFocusVisible(event) {
    const {
      target
    } = event;
    try {
      return target.matches(":focus-visible");
    } catch (error) {
    }
    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  function useIsFocusVisible() {
    const ref = React__namespace.useCallback((node2) => {
      if (node2 != null) {
        prepare(node2.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = React__namespace.useRef(false);
    function handleBlurVisible() {
      if (isFocusVisibleRef.current) {
        hadFocusVisibleRecently = true;
        hadFocusVisibleRecentlyTimeout.start(100, () => {
          hadFocusVisibleRecently = false;
        });
        isFocusVisibleRef.current = false;
        return true;
      }
      return false;
    }
    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }
      return false;
    }
    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }
  function composeClasses(slots, getUtilityClass, classes = void 0) {
    const output = {};
    Object.keys(slots).forEach(
      // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
      // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
      (slot) => {
        output[slot] = slots[slot].reduce((acc, key) => {
          if (key) {
            const utilityClass = getUtilityClass(key);
            if (utilityClass !== "") {
              acc.push(utilityClass);
            }
            if (classes && classes[key]) {
              acc.push(classes[key]);
            }
          }
          return acc;
        }, []).join(" ");
      }
    );
    return output;
  }
  const THEME_ID = "$$material";
  function createMixins(breakpoints, mixins) {
    return _extends$1({
      toolbar: {
        minHeight: 56,
        [breakpoints.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [breakpoints.up("sm")]: {
          minHeight: 64
        }
      }
    }, mixins);
  }
  var colorManipulator = {};
  var interopRequireDefault = { exports: {} };
  (function(module) {
    function _interopRequireDefault2(e2) {
      return e2 && e2.__esModule ? e2 : {
        "default": e2
      };
    }
    module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(interopRequireDefault);
  var interopRequireDefaultExports = interopRequireDefault.exports;
  const require$$1 = /* @__PURE__ */ getAugmentedNamespace(formatMuiErrorMessage);
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(clamp);
  var _interopRequireDefault$1 = interopRequireDefaultExports;
  Object.defineProperty(colorManipulator, "__esModule", {
    value: true
  });
  colorManipulator.alpha = alpha;
  colorManipulator.blend = blend;
  colorManipulator.colorChannel = void 0;
  var darken_1 = colorManipulator.darken = darken;
  colorManipulator.decomposeColor = decomposeColor;
  colorManipulator.emphasize = emphasize;
  var getContrastRatio_1 = colorManipulator.getContrastRatio = getContrastRatio;
  colorManipulator.getLuminance = getLuminance;
  colorManipulator.hexToRgb = hexToRgb;
  colorManipulator.hslToRgb = hslToRgb;
  var lighten_1 = colorManipulator.lighten = lighten;
  colorManipulator.private_safeAlpha = private_safeAlpha;
  colorManipulator.private_safeColorChannel = void 0;
  colorManipulator.private_safeDarken = private_safeDarken;
  colorManipulator.private_safeEmphasize = private_safeEmphasize;
  colorManipulator.private_safeLighten = private_safeLighten;
  colorManipulator.recomposeColor = recomposeColor;
  colorManipulator.rgbToHex = rgbToHex;
  var _formatMuiErrorMessage2 = _interopRequireDefault$1(require$$1);
  var _clamp = _interopRequireDefault$1(require$$2);
  function clampWrapper(value, min = 0, max = 1) {
    return (0, _clamp.default)(value, min, max);
  }
  function hexToRgb(color2) {
    color2 = color2.slice(1);
    const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
    let colors = color2.match(re);
    if (colors && colors[0].length === 1) {
      colors = colors.map((n2) => n2 + n2);
    }
    return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
  }
  function intToHex(int) {
    const hex = int.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
  function decomposeColor(color2) {
    if (color2.type) {
      return color2;
    }
    if (color2.charAt(0) === "#") {
      return decomposeColor(hexToRgb(color2));
    }
    const marker = color2.indexOf("(");
    const type = color2.substring(0, marker);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
      throw new Error((0, _formatMuiErrorMessage2.default)(9, color2));
    }
    let values2 = color2.substring(marker + 1, color2.length - 1);
    let colorSpace;
    if (type === "color") {
      values2 = values2.split(" ");
      colorSpace = values2.shift();
      if (values2.length === 4 && values2[3].charAt(0) === "/") {
        values2[3] = values2[3].slice(1);
      }
      if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
        throw new Error((0, _formatMuiErrorMessage2.default)(10, colorSpace));
      }
    } else {
      values2 = values2.split(",");
    }
    values2 = values2.map((value) => parseFloat(value));
    return {
      type,
      values: values2,
      colorSpace
    };
  }
  const colorChannel = (color2) => {
    const decomposedColor = decomposeColor(color2);
    return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
  };
  colorManipulator.colorChannel = colorChannel;
  const private_safeColorChannel = (color2, warning) => {
    try {
      return colorChannel(color2);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  };
  colorManipulator.private_safeColorChannel = private_safeColorChannel;
  function recomposeColor(color2) {
    const {
      type,
      colorSpace
    } = color2;
    let {
      values: values2
    } = color2;
    if (type.indexOf("rgb") !== -1) {
      values2 = values2.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
    } else if (type.indexOf("hsl") !== -1) {
      values2[1] = `${values2[1]}%`;
      values2[2] = `${values2[2]}%`;
    }
    if (type.indexOf("color") !== -1) {
      values2 = `${colorSpace} ${values2.join(" ")}`;
    } else {
      values2 = `${values2.join(", ")}`;
    }
    return `${type}(${values2})`;
  }
  function rgbToHex(color2) {
    if (color2.indexOf("#") === 0) {
      return color2;
    }
    const {
      values: values2
    } = decomposeColor(color2);
    return `#${values2.map((n2, i) => intToHex(i === 3 ? Math.round(255 * n2) : n2)).join("")}`;
  }
  function hslToRgb(color2) {
    color2 = decomposeColor(color2);
    const {
      values: values2
    } = color2;
    const h2 = values2[0];
    const s = values2[1] / 100;
    const l2 = values2[2] / 100;
    const a = s * Math.min(l2, 1 - l2);
    const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
    let type = "rgb";
    const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
    if (color2.type === "hsla") {
      type += "a";
      rgb.push(values2[3]);
    }
    return recomposeColor({
      type,
      values: rgb
    });
  }
  function getLuminance(color2) {
    color2 = decomposeColor(color2);
    let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
    rgb = rgb.map((val) => {
      if (color2.type !== "color") {
        val /= 255;
      }
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  function alpha(color2, value) {
    color2 = decomposeColor(color2);
    value = clampWrapper(value);
    if (color2.type === "rgb" || color2.type === "hsl") {
      color2.type += "a";
    }
    if (color2.type === "color") {
      color2.values[3] = `/${value}`;
    } else {
      color2.values[3] = value;
    }
    return recomposeColor(color2);
  }
  function private_safeAlpha(color2, value, warning) {
    try {
      return alpha(color2, value);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function darken(color2, coefficient) {
    color2 = decomposeColor(color2);
    coefficient = clampWrapper(coefficient);
    if (color2.type.indexOf("hsl") !== -1) {
      color2.values[2] *= 1 - coefficient;
    } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] *= 1 - coefficient;
      }
    }
    return recomposeColor(color2);
  }
  function private_safeDarken(color2, coefficient, warning) {
    try {
      return darken(color2, coefficient);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function lighten(color2, coefficient) {
    color2 = decomposeColor(color2);
    coefficient = clampWrapper(coefficient);
    if (color2.type.indexOf("hsl") !== -1) {
      color2.values[2] += (100 - color2.values[2]) * coefficient;
    } else if (color2.type.indexOf("rgb") !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] += (255 - color2.values[i]) * coefficient;
      }
    } else if (color2.type.indexOf("color") !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] += (1 - color2.values[i]) * coefficient;
      }
    }
    return recomposeColor(color2);
  }
  function private_safeLighten(color2, coefficient, warning) {
    try {
      return lighten(color2, coefficient);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function emphasize(color2, coefficient = 0.15) {
    return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
  }
  function private_safeEmphasize(color2, coefficient, warning) {
    try {
      return emphasize(color2, coefficient);
    } catch (error) {
      if (warning && false) {
        console.warn(warning);
      }
      return color2;
    }
  }
  function blend(background, overlay, opacity, gamma = 1) {
    const blendChannel = (b2, o) => Math.round((b2 ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
    const backgroundColor2 = decomposeColor(background);
    const overlayColor = decomposeColor(overlay);
    const rgb = [blendChannel(backgroundColor2.values[0], overlayColor.values[0]), blendChannel(backgroundColor2.values[1], overlayColor.values[1]), blendChannel(backgroundColor2.values[2], overlayColor.values[2])];
    return recomposeColor({
      type: "rgb",
      values: rgb
    });
  }
  const common = {
    black: "#000",
    white: "#fff"
  };
  const grey = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  const purple = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  const red = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  const orange = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  const blue = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  const lightBlue = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  const green = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  const _excluded$7 = ["mode", "contrastThreshold", "tonalOffset"];
  const light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  const dark = {
    text: {
      primary: common.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: common.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = lighten_1(intent.main, tonalOffsetLight);
      } else if (direction === "dark") {
        intent.dark = darken_1(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = "light") {
    if (mode === "dark") {
      return {
        main: blue[200],
        light: blue[50],
        dark: blue[400]
      };
    }
    return {
      main: blue[700],
      light: blue[400],
      dark: blue[800]
    };
  }
  function getDefaultSecondary(mode = "light") {
    if (mode === "dark") {
      return {
        main: purple[200],
        light: purple[50],
        dark: purple[400]
      };
    }
    return {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    };
  }
  function getDefaultError(mode = "light") {
    if (mode === "dark") {
      return {
        main: red[500],
        light: red[300],
        dark: red[700]
      };
    }
    return {
      main: red[700],
      light: red[400],
      dark: red[800]
    };
  }
  function getDefaultInfo(mode = "light") {
    if (mode === "dark") {
      return {
        main: lightBlue[400],
        light: lightBlue[300],
        dark: lightBlue[700]
      };
    }
    return {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900]
    };
  }
  function getDefaultSuccess(mode = "light") {
    if (mode === "dark") {
      return {
        main: green[400],
        light: green[300],
        dark: green[700]
      };
    }
    return {
      main: green[800],
      light: green[500],
      dark: green[900]
    };
  }
  function getDefaultWarning(mode = "light") {
    if (mode === "dark") {
      return {
        main: orange[400],
        light: orange[300],
        dark: orange[700]
      };
    }
    return {
      main: "#ed6c02",
      // closest to orange[800] that pass 3:1.
      light: orange[500],
      dark: orange[900]
    };
  }
  function createPalette(palette) {
    const {
      mode = "light",
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette, other = _objectWithoutPropertiesLoose(palette, _excluded$7);
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);
    function getContrastText(background) {
      const contrastText = getContrastRatio_1(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      return contrastText;
    }
    const augmentColor = ({
      color: color2,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color2 = _extends$1({}, color2);
      if (!color2.main && color2[mainShade]) {
        color2.main = color2[mainShade];
      }
      if (!color2.hasOwnProperty("main")) {
        throw new Error(formatMuiErrorMessage$1(11, name ? ` (${name})` : "", mainShade));
      }
      if (typeof color2.main !== "string") {
        throw new Error(formatMuiErrorMessage$1(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
      }
      addLightOrDark(color2, "light", lightShade, tonalOffset);
      addLightOrDark(color2, "dark", darkShade, tonalOffset);
      if (!color2.contrastText) {
        color2.contrastText = getContrastText(color2.main);
      }
      return color2;
    };
    const modes = {
      dark,
      light
    };
    const paletteOutput = deepmerge$1(_extends$1({
      // A collection of common colors.
      common: _extends$1({}, common),
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: "primary"
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: "error"
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: "warning"
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: "info"
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: "success"
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }
  const _excluded$6 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const caseAllCaps = {
    textTransform: "uppercase"
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  function createTypography(palette, typography) {
    const _ref = typeof typography === "function" ? typography(palette) : typography, {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$6);
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return deepmerge$1(_extends$1({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false
      // No need to clone deep
    });
  }
  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
  }
  const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  const _excluded$5 = ["duration", "easing", "delay"];
  const easing = {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    const constant = height2 / 36;
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = _extends$1({}, easing, inputTransitions.easing);
    const mergedDuration = _extends$1({}, duration, inputTransitions.duration);
    const create2 = (props = ["all"], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options;
      _objectWithoutPropertiesLoose(options, _excluded$5);
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
    };
    return _extends$1({
      getAutoHeightDuration,
      create: create2
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }
  const zIndex = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  const _excluded$4 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
  function createTheme(options = {}, ...args) {
    const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded$4);
    if (options.vars) {
      throw new Error(formatMuiErrorMessage$1(18));
    }
    const palette = createPalette(paletteInput);
    const systemTheme = createTheme$2(options);
    let muiTheme = deepmerge$1(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends$1({}, zIndex)
    });
    muiTheme = deepmerge$1(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  const defaultTheme$1 = createTheme();
  function useThemeProps({
    props,
    name
  }) {
    return useThemeProps$1({
      props,
      name,
      defaultTheme: defaultTheme$1,
      themeId: THEME_ID
    });
  }
  var createStyled$1 = {};
  var _extends = { exports: {} };
  var hasRequired_extends;
  function require_extends() {
    if (hasRequired_extends) return _extends.exports;
    hasRequired_extends = 1;
    (function(module) {
      function _extends3() {
        return module.exports = _extends3 = Object.assign ? Object.assign.bind() : function(n2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var t2 = arguments[e2];
            for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
          }
          return n2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends3.apply(null, arguments);
      }
      module.exports = _extends3, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(_extends);
    return _extends.exports;
  }
  var objectWithoutPropertiesLoose = { exports: {} };
  var hasRequiredObjectWithoutPropertiesLoose;
  function requireObjectWithoutPropertiesLoose() {
    if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
    hasRequiredObjectWithoutPropertiesLoose = 1;
    (function(module) {
      function _objectWithoutPropertiesLoose3(r2, e2) {
        if (null == r2) return {};
        var t2 = {};
        for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
          if (e2.indexOf(n2) >= 0) continue;
          t2[n2] = r2[n2];
        }
        return t2;
      }
      module.exports = _objectWithoutPropertiesLoose3, module.exports.__esModule = true, module.exports["default"] = module.exports;
    })(objectWithoutPropertiesLoose);
    return objectWithoutPropertiesLoose.exports;
  }
  const require$$3 = /* @__PURE__ */ getAugmentedNamespace(styledEngine);
  const require$$4 = /* @__PURE__ */ getAugmentedNamespace(deepmerge);
  const require$$5 = /* @__PURE__ */ getAugmentedNamespace(capitalize);
  const require$$6 = /* @__PURE__ */ getAugmentedNamespace(getDisplayName);
  const require$$7 = /* @__PURE__ */ getAugmentedNamespace(createTheme$1);
  const require$$8 = /* @__PURE__ */ getAugmentedNamespace(styleFunctionSx);
  var _interopRequireDefault = interopRequireDefaultExports;
  Object.defineProperty(createStyled$1, "__esModule", {
    value: true
  });
  var _default = createStyled$1.default = createStyled;
  createStyled$1.shouldForwardProp = shouldForwardProp;
  createStyled$1.systemDefaultTheme = void 0;
  var _extends2 = _interopRequireDefault(require_extends());
  var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  var _styledEngine = _interopRequireWildcard(require$$3);
  var _deepmerge = require$$4;
  _interopRequireDefault(require$$5);
  _interopRequireDefault(require$$6);
  var _createTheme = _interopRequireDefault(require$$7);
  var _styleFunctionSx = _interopRequireDefault(require$$8);
  const _excluded$3 = ["ownerState"], _excluded2 = ["variants"], _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function _getRequireWildcardCache(e2) {
    if ("function" != typeof WeakMap) return null;
    var r2 = /* @__PURE__ */ new WeakMap(), t2 = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(e22) {
      return e22 ? t2 : r2;
    })(e2);
  }
  function _interopRequireWildcard(e2, r2) {
    if (e2 && e2.__esModule) return e2;
    if (null === e2 || "object" != typeof e2 && "function" != typeof e2) return {
      default: e2
    };
    var t2 = _getRequireWildcardCache(r2);
    if (t2 && t2.has(e2)) return t2.get(e2);
    var n2 = {
      __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u2 in e2) if ("default" !== u2 && Object.prototype.hasOwnProperty.call(e2, u2)) {
      var i = a ? Object.getOwnPropertyDescriptor(e2, u2) : null;
      i && (i.get || i.set) ? Object.defineProperty(n2, u2, i) : n2[u2] = e2[u2];
    }
    return n2.default = e2, t2 && t2.set(e2, n2), n2;
  }
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function isStringTag(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }
  function shouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  const systemDefaultTheme = createStyled$1.systemDefaultTheme = (0, _createTheme.default)();
  const lowercaseFirstLetter = (string) => {
    if (!string) {
      return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  };
  function resolveTheme({
    defaultTheme: defaultTheme2,
    theme: theme2,
    themeId
  }) {
    return isEmpty(theme2) ? defaultTheme2 : theme2[themeId] || theme2;
  }
  function defaultOverridesResolver(slot) {
    if (!slot) {
      return null;
    }
    return (props, styles) => styles[slot];
  }
  function processStyleArg(callableStyle, _ref) {
    let {
      ownerState
    } = _ref, props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded$3);
    const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle((0, _extends2.default)({
      ownerState
    }, props)) : callableStyle;
    if (Array.isArray(resolvedStylesArg)) {
      return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg(resolvedStyle, (0, _extends2.default)({
        ownerState
      }, props)));
    }
    if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
      const {
        variants = []
      } = resolvedStylesArg, otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2);
      let result = otherStyles;
      variants.forEach((variant) => {
        let isMatch = true;
        if (typeof variant.props === "function") {
          isMatch = variant.props((0, _extends2.default)({
            ownerState
          }, props, ownerState));
        } else {
          Object.keys(variant.props).forEach((key) => {
            if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
              isMatch = false;
            }
          });
        }
        if (isMatch) {
          if (!Array.isArray(result)) {
            result = [result];
          }
          result.push(typeof variant.style === "function" ? variant.style((0, _extends2.default)({
            ownerState
          }, props, ownerState)) : variant.style);
        }
      });
      return result;
    }
    return resolvedStylesArg;
  }
  function createStyled(input = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme2 = systemDefaultTheme,
      rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
      slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
    } = input;
    const systemSx = (props) => {
      return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
        theme: resolveTheme((0, _extends2.default)({}, props, {
          defaultTheme: defaultTheme2,
          themeId
        }))
      }));
    };
    systemSx.__mui_systemSx = true;
    return (tag, inputOptions = {}) => {
      (0, _styledEngine.internal_processStyles)(tag, (styles) => styles.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions, options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3);
      const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
      );
      const skipSx = inputSkipSx || false;
      let label;
      let shouldForwardPropOption = shouldForwardProp;
      if (componentSlot === "Root" || componentSlot === "root") {
        shouldForwardPropOption = rootShouldForwardProp2;
      } else if (componentSlot) {
        shouldForwardPropOption = slotShouldForwardProp2;
      } else if (isStringTag(tag)) {
        shouldForwardPropOption = void 0;
      }
      const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
        shouldForwardProp: shouldForwardPropOption,
        label
      }, options));
      const transformStyleArg = (stylesArg) => {
        if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
          return (props) => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
            theme: resolveTheme({
              theme: props.theme,
              defaultTheme: defaultTheme2,
              themeId
            })
          }));
        }
        return stylesArg;
      };
      const muiStyledResolver = (styleArg, ...expressions) => {
        let transformedStyleArg = transformStyleArg(styleArg);
        const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
        if (componentName && overridesResolver) {
          expressionsWithDefaultTheme.push((props) => {
            const theme2 = resolveTheme((0, _extends2.default)({}, props, {
              defaultTheme: defaultTheme2,
              themeId
            }));
            if (!theme2.components || !theme2.components[componentName] || !theme2.components[componentName].styleOverrides) {
              return null;
            }
            const styleOverrides = theme2.components[componentName].styleOverrides;
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
                theme: theme2
              }));
            });
            return overridesResolver(props, resolvedStyleOverrides);
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsWithDefaultTheme.push((props) => {
            var _theme$components;
            const theme2 = resolveTheme((0, _extends2.default)({}, props, {
              defaultTheme: defaultTheme2,
              themeId
            }));
            const themeVariants = theme2 == null || (_theme$components = theme2.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
            return processStyleArg({
              variants: themeVariants
            }, (0, _extends2.default)({}, props, {
              theme: theme2
            }));
          });
        }
        if (!skipSx) {
          expressionsWithDefaultTheme.push(systemSx);
        }
        const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
        if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
          const placeholders = new Array(numOfCustomFnsApplied).fill("");
          transformedStyleArg = [...styleArg, ...placeholders];
          transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
        }
        const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
  }
  function slotShouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  const rootShouldForwardProp = (prop) => slotShouldForwardProp(prop) && prop !== "classes";
  const styled = _default({
    themeId: THEME_ID,
    defaultTheme: defaultTheme$1,
    rootShouldForwardProp
  });
  const boxClasses = generateUtilityClasses("MuiBox", ["root"]);
  const defaultTheme = createTheme();
  const Box = createBox({
    themeId: THEME_ID,
    defaultTheme,
    defaultClassName: boxClasses.root,
    generateClassName: ClassNameGenerator.generate
  });
  function _setPrototypeOf(t2, e2) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, _setPrototypeOf(t2, e2);
  }
  function _inheritsLoose(t2, o) {
    t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
  }
  const TransitionGroupContext = React.createContext(null);
  function _assertThisInitialized(e2) {
    if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function getChildMapping(children, mapFn) {
    var mapper = function mapper2(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };
    var result = /* @__PURE__ */ Object.create(null);
    if (children) React.Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
    return result;
  }
  function mergeChildMappings(prev2, next2) {
    prev2 = prev2 || {};
    next2 = next2 || {};
    function getValueForKey(key) {
      return key in next2 ? next2[key] : prev2[key];
    }
    var nextKeysPending = /* @__PURE__ */ Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev2) {
      if (prevKey in next2) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next2) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, "appear", props),
        enter: getProp(child, "enter", props),
        exit: getProp(child, "exit", props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      }
    });
    return children;
  }
  var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k2) {
      return obj[k2];
    });
  };
  var defaultProps = {
    component: "div",
    childFactory: function childFactory(child) {
      return child;
    }
  };
  var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(TransitionGroup2, _React$Component);
    function TransitionGroup2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited,
        firstRender: true
      };
      return _this;
    }
    var _proto = TransitionGroup2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
    TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };
    _proto.handleExited = function handleExited(child, node2) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;
      if (child.props.onExited) {
        child.props.onExited(node2);
      }
      if (this.mounted) {
        this.setState(function(state) {
          var children = _extends$1({}, state.children);
          delete children[child.key];
          return {
            children
          };
        });
      }
    };
    _proto.render = function render() {
      var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory2);
      delete props.appear;
      delete props.enter;
      delete props.exit;
      if (Component === null) {
        return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }
      return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /* @__PURE__ */ React.createElement(Component, props, children));
    };
    return TransitionGroup2;
  }(React.Component);
  TransitionGroup.propTypes = {};
  TransitionGroup.defaultProps = defaultProps;
  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout
    } = props;
    const [leaving, setLeaving] = React__namespace.useState(false);
    const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
      setLeaving(true);
    }
    React__namespace.useEffect(() => {
      if (!inProp && onExited != null) {
        const timeoutId = setTimeout(onExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }
      return void 0;
    }, [onExited, inProp, timeout]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: childClassName
      })
    });
  }
  const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
  const _excluded$2 = ["center", "classes", "className"];
  let _ = (t2) => t2, _t, _t2, _t3, _t4;
  const DURATION = 550;
  const DELAY_RIPPLE = 80;
  const enterKeyframe = react.keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
  const exitKeyframe = react.keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
  const pulsateKeyframe = react.keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
  const TouchRippleRoot = styled("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  });
  const TouchRippleRipple = styled(Ripple, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
    theme: theme2
  }) => theme2.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
    theme: theme2
  }) => theme2.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
    theme: theme2
  }) => theme2.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
    theme: theme2
  }) => theme2.transitions.easing.easeInOut);
  const TouchRipple = /* @__PURE__ */ React__namespace.forwardRef(function TouchRipple2(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: "MuiTouchRipple"
    });
    const {
      center: centerProp = false,
      classes = {},
      className
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
    const [ripples, setRipples] = React__namespace.useState([]);
    const nextKey = React__namespace.useRef(0);
    const rippleCallback = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);
    const ignoringMouseDown = React__namespace.useRef(false);
    const startTimer = useTimeout();
    const startTimerCommit = React__namespace.useRef(null);
    const container = React__namespace.useRef(null);
    const startCommit = React__namespace.useCallback((params) => {
      const {
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
        classes: {
          ripple: clsx(classes.ripple, touchRippleClasses.ripple),
          rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
          ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
          child: clsx(classes.child, touchRippleClasses.child),
          childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
          childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start = React__namespace.useCallback((event = {}, options = {}, cb = () => {
    }) => {
      const {
        pulsate: pulsate2 = false,
        center = centerProp || options.pulsate,
        fakeElement = false
        // For test purposes
      } = options;
      if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }
      if ((event == null ? void 0 : event.type) === "touchstart") {
        ignoringMouseDown.current = true;
      }
      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let rippleX;
      let rippleY;
      let rippleSize;
      if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }
      if (event != null && event.touches) {
        if (startTimerCommit.current === null) {
          startTimerCommit.current = () => {
            startCommit({
              pulsate: pulsate2,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          };
          startTimer.start(DELAY_RIPPLE, () => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          });
        }
      } else {
        startCommit({
          pulsate: pulsate2,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit, startTimer]);
    const pulsate = React__namespace.useCallback(() => {
      start({}, {
        pulsate: true
      });
    }, [start]);
    const stop = React__namespace.useCallback((event, cb) => {
      startTimer.clear();
      if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.start(0, () => {
          stop(event, cb);
        });
        return;
      }
      startTimerCommit.current = null;
      setRipples((oldRipples) => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }
        return oldRipples;
      });
      rippleCallback.current = cb;
    }, [startTimer]);
    React__namespace.useImperativeHandle(ref, () => ({
      pulsate,
      start,
      stop
    }), [pulsate, start, stop]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, _extends$1({
      className: clsx(touchRippleClasses.root, classes.root, className),
      ref: container
    }, other, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup, {
        component: null,
        exit: true,
        children: ripples
      })
    }));
  });
  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass("MuiButtonBase", slot);
  }
  const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
  const _excluded$1 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
  const useUtilityClasses$1 = (ownerState) => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const ButtonBaseRoot = styled("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    textDecoration: "none",
    // So we take precedent over the style of a native <a /> element.
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    [`&.${buttonBaseClasses.disabled}`]: {
      pointerEvents: "none",
      // Disable link interactions
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  const ButtonBase = /* @__PURE__ */ React__namespace.forwardRef(function ButtonBase2(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: "MuiButtonBase"
    });
    const {
      action,
      centerRipple = false,
      children,
      className,
      component = "button",
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      LinkComponent = "a",
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
    const buttonRef = React__namespace.useRef(null);
    const rippleRef = React__namespace.useRef(null);
    const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = React__namespace.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    const [mountedState, setMountedState] = React__namespace.useState(false);
    React__namespace.useEffect(() => {
      setMountedState(true);
    }, []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;
    React__namespace.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple && mountedState) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible, mountedState]);
    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
      return useEventCallback((event) => {
        if (eventCallback) {
          eventCallback(event);
        }
        const ignore = skipRippleAction;
        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }
        return true;
      });
    }
    const handleMouseDown = useRippleHandler("start", onMouseDown);
    const handleContextMenu = useRippleHandler("stop", onContextMenu);
    const handleDragLeave = useRippleHandler("stop", onDragLeave);
    const handleMouseUp = useRippleHandler("stop", onMouseUp);
    const handleMouseLeave = useRippleHandler("stop", (event) => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    const handleTouchStart = useRippleHandler("start", onTouchStart);
    const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
    const handleTouchMove = useRippleHandler("stop", onTouchMove);
    const handleBlur = useRippleHandler("stop", (event) => {
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback((event) => {
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);
        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }
      if (onFocus) {
        onFocus(event);
      }
    });
    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== "button" && !(button.tagName === "A" && button.href);
    };
    const keydownRef = React__namespace.useRef(false);
    const handleKeyDown2 = useEventCallback((event) => {
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
        keydownRef.current = true;
        rippleRef.current.stop(event, () => {
          rippleRef.current.start(event);
        });
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback((event) => {
      if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        rippleRef.current.stop(event, () => {
          rippleRef.current.pulsate(event);
        });
      }
      if (onKeyUp) {
        onKeyUp(event);
      }
      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;
    if (ComponentProp === "button" && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === "button") {
      buttonProps.type = type === void 0 ? "button" : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = "button";
      }
      if (disabled) {
        buttonProps["aria-disabled"] = disabled;
      }
    }
    const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
    const ownerState = _extends$1({}, props, {
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    });
    const classes = useUtilityClasses$1(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends$1({
      as: ComponentProp,
      className: clsx(classes.root, className),
      ownerState,
      onBlur: handleBlur,
      onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown2,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type
    }, buttonProps, other, {
      children: [children, enableTouchRipple ? (
        /* TouchRipple is only needed client-side, x2 boost on the server. */
        /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple, _extends$1({
          ref: handleRippleRef,
          center: centerRipple
        }, TouchRippleProps))
      ) : null]
    }));
  });
  function getTabUtilityClass(slot) {
    return generateUtilityClass("MuiTab", slot);
  }
  const tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
  const _excluded = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"];
  const useUtilityClasses = (ownerState) => {
    const {
      classes,
      textColor,
      fullWidth,
      wrapped,
      icon,
      label,
      selected,
      disabled
    } = ownerState;
    const slots = {
      root: ["root", icon && label && "labelIcon", `textColor${capitalize$1(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
      iconWrapper: ["iconWrapper"]
    };
    return composeClasses(slots, getTabUtilityClass, classes);
  };
  const TabRoot = styled(ButtonBase, {
    name: "MuiTab",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.label && ownerState.icon && styles.labelIcon, styles[`textColor${capitalize$1(ownerState.textColor)}`], ownerState.fullWidth && styles.fullWidth, ownerState.wrapped && styles.wrapped, {
        [`& .${tabClasses.iconWrapper}`]: styles.iconWrapper
      }];
    }
  })(({
    theme: theme2,
    ownerState
  }) => _extends$1({}, theme2.typography.button, {
    maxWidth: 360,
    minWidth: 90,
    position: "relative",
    minHeight: 48,
    flexShrink: 0,
    padding: "12px 16px",
    overflow: "hidden",
    whiteSpace: "normal",
    textAlign: "center"
  }, ownerState.label && {
    flexDirection: ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom" ? "column" : "row"
  }, {
    lineHeight: 1.25
  }, ownerState.icon && ownerState.label && {
    minHeight: 72,
    paddingTop: 9,
    paddingBottom: 9,
    [`& > .${tabClasses.iconWrapper}`]: _extends$1({}, ownerState.iconPosition === "top" && {
      marginBottom: 6
    }, ownerState.iconPosition === "bottom" && {
      marginTop: 6
    }, ownerState.iconPosition === "start" && {
      marginRight: theme2.spacing(1)
    }, ownerState.iconPosition === "end" && {
      marginLeft: theme2.spacing(1)
    })
  }, ownerState.textColor === "inherit" && {
    color: "inherit",
    opacity: 0.6,
    // same opacity as theme.palette.text.secondary
    [`&.${tabClasses.selected}`]: {
      opacity: 1
    },
    [`&.${tabClasses.disabled}`]: {
      opacity: (theme2.vars || theme2).palette.action.disabledOpacity
    }
  }, ownerState.textColor === "primary" && {
    color: (theme2.vars || theme2).palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: (theme2.vars || theme2).palette.primary.main
    },
    [`&.${tabClasses.disabled}`]: {
      color: (theme2.vars || theme2).palette.text.disabled
    }
  }, ownerState.textColor === "secondary" && {
    color: (theme2.vars || theme2).palette.text.secondary,
    [`&.${tabClasses.selected}`]: {
      color: (theme2.vars || theme2).palette.secondary.main
    },
    [`&.${tabClasses.disabled}`]: {
      color: (theme2.vars || theme2).palette.text.disabled
    }
  }, ownerState.fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: "none"
  }, ownerState.wrapped && {
    fontSize: theme2.typography.pxToRem(12)
  }));
  const Tab = /* @__PURE__ */ React__namespace.forwardRef(function Tab2(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: "MuiTab"
    });
    const {
      className,
      disabled = false,
      disableFocusRipple = false,
      // eslint-disable-next-line react/prop-types
      fullWidth,
      icon: iconProp,
      iconPosition = "top",
      // eslint-disable-next-line react/prop-types
      indicator,
      label,
      onChange,
      onClick,
      onFocus,
      // eslint-disable-next-line react/prop-types
      selected,
      // eslint-disable-next-line react/prop-types
      selectionFollowsFocus,
      // eslint-disable-next-line react/prop-types
      textColor = "inherit",
      value,
      wrapped = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
    const ownerState = _extends$1({}, props, {
      disabled,
      disableFocusRipple,
      selected,
      icon: !!iconProp,
      iconPosition,
      label: !!label,
      fullWidth,
      textColor,
      wrapped
    });
    const classes = useUtilityClasses(ownerState);
    const icon = iconProp && label && /* @__PURE__ */ React__namespace.isValidElement(iconProp) ? /* @__PURE__ */ React__namespace.cloneElement(iconProp, {
      className: clsx(classes.iconWrapper, iconProp.props.className)
    }) : iconProp;
    const handleClick = (event) => {
      if (!selected && onChange) {
        onChange(event, value);
      }
      if (onClick) {
        onClick(event);
      }
    };
    const handleFocus = (event) => {
      if (selectionFollowsFocus && !selected && onChange) {
        onChange(event, value);
      }
      if (onFocus) {
        onFocus(event);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabRoot, _extends$1({
      focusRipple: !disableFocusRipple,
      className: clsx(classes.root, className),
      ref,
      role: "tab",
      "aria-selected": selected,
      disabled,
      onClick: handleClick,
      onFocus: handleFocus,
      ownerState,
      tabIndex: selected ? 0 : -1
    }, other, {
      children: [iconPosition === "top" || iconPosition === "start" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
        children: [icon, label]
      }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
        children: [label, icon]
      }), indicator]
    }));
  });
  function PanelAbout() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(material.Typography, {
        variant: "body1",
        gutterBottom: true,
        children: "让网页更智能"
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs(material.Typography, {
        variant: "body2",
        gutterBottom: true,
        children: ["作者：", /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
          href: "http://github.com/2214962083",
          target: "_blank",
          rel: "noreferrer",
          children: "@葬爱非主流小明"
        })]
      })]
    });
  }
  var define_import_meta_env_default$2 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace2) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace2 != null ? replace2 : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
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
      if ((define_import_meta_env_default$2 ? "production" : void 0) !== "production") {
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
  function h$1(a, b2) {
    return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
  }
  var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m$1 = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
  function q$1(a, b2) {
    var d2 = b2(), f2 = l({
      inst: {
        value: d2,
        getSnapshot: b2
      }
    }), c2 = f2[0].inst, g2 = f2[1];
    n$1(function() {
      c2.value = d2;
      c2.getSnapshot = b2;
      r$1(c2) && g2({
        inst: c2
      });
    }, [a, d2, b2]);
    m$1(function() {
      r$1(c2) && g2({
        inst: c2
      });
      return a(function() {
        r$1(c2) && g2({
          inst: c2
        });
      });
    }, [a]);
    p$1(d2);
    return d2;
  }
  function r$1(a) {
    var b2 = a.getSnapshot;
    a = a.value;
    try {
      var d2 = b2();
      return !k(a, d2);
    } catch (f2) {
      return true;
    }
  }
  function t$1(a, b2) {
    return b2();
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
  function p(a, b2) {
    return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
  }
  var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
  withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b2, e2, l2, g2) {
    var c2 = t(null);
    if (null === c2.current) {
      var f2 = {
        hasValue: false,
        value: null
      };
      c2.current = f2;
    } else f2 = c2.current;
    c2 = v(function() {
      function a2(a3) {
        if (!c3) {
          c3 = true;
          d3 = a3;
          a3 = l2(a3);
          if (void 0 !== g2 && f2.hasValue) {
            var b3 = f2.value;
            if (g2(b3, a3)) return k2 = b3;
          }
          return k2 = a3;
        }
        b3 = k2;
        if (q(d3, a3)) return b3;
        var e3 = l2(a3);
        if (void 0 !== g2 && g2(b3, e3)) return b3;
        d3 = a3;
        return k2 = e3;
      }
      var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
      return [function() {
        return a2(b2());
      }, null === m2 ? void 0 : function() {
        return a2(m2());
      }];
    }, [b2, e2, l2, g2]);
    var d2 = r(a, c2[0], c2[1]);
    u(function() {
      f2.hasValue = true;
      f2.value = d2;
    }, [d2]);
    w(d2);
    return d2;
  };
  {
    withSelector.exports = withSelector_production_min;
  }
  var withSelectorExports = withSelector.exports;
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
  var define_import_meta_env_default$1 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const { useDebugValue } = React;
  const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
  let didWarnAboutEqualityFn = false;
  const identity = (arg) => arg;
  function useStore(api, selector = identity, equalityFn) {
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
      console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
      );
      didWarnAboutEqualityFn = true;
    }
    const slice2 = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getInitialState,
      selector,
      equalityFn
    );
    useDebugValue(slice2);
    return slice2;
  }
  const createImpl = (createState) => {
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && typeof createState !== "function") {
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
  var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  function createJSONStorage(getStorage, options) {
    let storage;
    try {
      storage = getStorage();
    } catch (e2) {
      return;
    }
    const persistStorage = {
      getItem: (name) => {
        var _a2;
        const parse2 = (str2) => {
          if (str2 === null) {
            return null;
          }
          return JSON.parse(str2, void 0);
        };
        const str = (_a2 = storage.getItem(name)) != null ? _a2 : null;
        if (str instanceof Promise) {
          return str.then(parse2);
        }
        return parse2(str);
      },
      setItem: (name, newValue) => storage.setItem(
        name,
        JSON.stringify(newValue, void 0)
      ),
      removeItem: (name) => storage.removeItem(name)
    };
    return persistStorage;
  }
  const toThenable = (fn) => (input) => {
    try {
      const result = fn(input);
      if (result instanceof Promise) {
        return result;
      }
      return {
        then(onFulfilled) {
          return toThenable(onFulfilled)(result);
        },
        catch(_onRejected) {
          return this;
        }
      };
    } catch (e2) {
      return {
        then(_onFulfilled) {
          return this;
        },
        catch(onRejected) {
          return toThenable(onRejected)(e2);
        }
      };
    }
  };
  const oldImpl = (config, baseOptions) => (set, get, api) => {
    let options = {
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: (state) => state,
      version: 0,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState
      }),
      ...baseOptions
    };
    let hasHydrated = false;
    const hydrationListeners = /* @__PURE__ */ new Set();
    const finishHydrationListeners = /* @__PURE__ */ new Set();
    let storage;
    try {
      storage = options.getStorage();
    } catch (e2) {
    }
    if (!storage) {
      return config(
        (...args) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
          );
          set(...args);
        },
        get,
        api
      );
    }
    const thenableSerialize = toThenable(options.serialize);
    const setItem = () => {
      const state = options.partialize({ ...get() });
      let errorInSync;
      const thenable = thenableSerialize({ state, version: options.version }).then(
        (serializedValue) => storage.setItem(options.name, serializedValue)
      ).catch((e2) => {
        errorInSync = e2;
      });
      if (errorInSync) {
        throw errorInSync;
      }
      return thenable;
    };
    const savedSetState = api.setState;
    api.setState = (state, replace2) => {
      savedSetState(state, replace2);
      void setItem();
    };
    const configResult = config(
      (...args) => {
        set(...args);
        void setItem();
      },
      get,
      api
    );
    let stateFromStorage;
    const hydrate = () => {
      var _a2;
      if (!storage) return;
      hasHydrated = false;
      hydrationListeners.forEach((cb) => cb(get()));
      const postRehydrationCallback = ((_a2 = options.onRehydrateStorage) == null ? void 0 : _a2.call(options, get())) || void 0;
      return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
        if (storageValue) {
          return options.deserialize(storageValue);
        }
      }).then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              );
            }
            console.error(
              `State loaded from storage couldn't be migrated since no migrate function was provided`
            );
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then((migratedState) => {
        var _a22;
        stateFromStorage = options.merge(
          migratedState,
          (_a22 = get()) != null ? _a22 : configResult
        );
        set(stateFromStorage, true);
        return setItem();
      }).then(() => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
        hasHydrated = true;
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
      }).catch((e2) => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
      });
    };
    api.persist = {
      setOptions: (newOptions) => {
        options = {
          ...options,
          ...newOptions
        };
        if (newOptions.getStorage) {
          storage = newOptions.getStorage();
        }
      },
      clearStorage: () => {
        storage == null ? void 0 : storage.removeItem(options.name);
      },
      getOptions: () => options,
      rehydrate: () => hydrate(),
      hasHydrated: () => hasHydrated,
      onHydrate: (cb) => {
        hydrationListeners.add(cb);
        return () => {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: (cb) => {
        finishHydrationListeners.add(cb);
        return () => {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    hydrate();
    return stateFromStorage || configResult;
  };
  const newImpl = (config, baseOptions) => (set, get, api) => {
    let options = {
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => state,
      version: 0,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState
      }),
      ...baseOptions
    };
    let hasHydrated = false;
    const hydrationListeners = /* @__PURE__ */ new Set();
    const finishHydrationListeners = /* @__PURE__ */ new Set();
    let storage = options.storage;
    if (!storage) {
      return config(
        (...args) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
          );
          set(...args);
        },
        get,
        api
      );
    }
    const setItem = () => {
      const state = options.partialize({ ...get() });
      return storage.setItem(options.name, {
        state,
        version: options.version
      });
    };
    const savedSetState = api.setState;
    api.setState = (state, replace2) => {
      savedSetState(state, replace2);
      void setItem();
    };
    const configResult = config(
      (...args) => {
        set(...args);
        void setItem();
      },
      get,
      api
    );
    api.getInitialState = () => configResult;
    let stateFromStorage;
    const hydrate = () => {
      var _a2, _b;
      if (!storage) return;
      hasHydrated = false;
      hydrationListeners.forEach((cb) => {
        var _a22;
        return cb((_a22 = get()) != null ? _a22 : configResult);
      });
      const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a2 = get()) != null ? _a2 : configResult)) || void 0;
      return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              );
            }
            console.error(
              `State loaded from storage couldn't be migrated since no migrate function was provided`
            );
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then((migratedState) => {
        var _a22;
        stateFromStorage = options.merge(
          migratedState,
          (_a22 = get()) != null ? _a22 : configResult
        );
        set(stateFromStorage, true);
        return setItem();
      }).then(() => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
        stateFromStorage = get();
        hasHydrated = true;
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
      }).catch((e2) => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
      });
    };
    api.persist = {
      setOptions: (newOptions) => {
        options = {
          ...options,
          ...newOptions
        };
        if (newOptions.storage) {
          storage = newOptions.storage;
        }
      },
      clearStorage: () => {
        storage == null ? void 0 : storage.removeItem(options.name);
      },
      getOptions: () => options,
      rehydrate: () => hydrate(),
      hasHydrated: () => hasHydrated,
      onHydrate: (cb) => {
        hydrationListeners.add(cb);
        return () => {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: (cb) => {
        finishHydrationListeners.add(cb);
        return () => {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    if (!options.skipHydration) {
      hydrate();
    }
    return stateFromStorage || configResult;
  };
  const persistImpl = (config, baseOptions) => {
    if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
      if ((define_import_meta_env_default ? "production" : void 0) !== "production") {
        console.warn(
          "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
        );
      }
      return oldImpl(config, baseOptions);
    }
    return newImpl(config, baseOptions);
  };
  const persist = persistImpl;
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(material.List, {
      dense: true,
      sx: {},
      children: [logItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(material.ListItem, {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(material.ListItemText, {
          primary: item,
          sx: {
            typography: "overline",
            lineHeight: "normal",
            px: 0,
            my: 0
          },
          disableTypography: true
        })
      }, index)), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
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
  const useSettingsStore = createStore()(persist((set, get) => ({
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
    storage: createJSONStorage(() => GMStorage),
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
      return /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Loading..."
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(material.List, {
      sx: {},
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(material.ListItem, {
        sx: {
          pt: 3
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(material.Switch, {
          checked: showLog,
          onChange: () => setShowLog(!showLog),
          inputProps: {
            "aria-label": "controlled"
          }
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(material.ListItem, {
        sx: {
          pt: 3
        }
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
      children: value === index && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
        sx: {
          p: 0,
          maxWidth: 280,
          maxHeight: 300,
          minWidth: 260,
          minHeight: 200,
          overflow: "auto"
        },
        children
      })
    });
  }
  function a11yProps(index) {
    return {
      id: `cx-auto-tab-${index}`,
      "aria-controls": `cx-auto-tabpanel-${index}`
    };
  }
  function TabPanel() {
    const [tab, setTab] = React.useState(0);
    const handleChange = (event, newValue) => {
      setTab(newValue);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, {
      sx: {
        width: "100%"
      },
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
        sx: {
          borderBottom: 1,
          borderColor: "divider"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(material.Tabs, {
          value: tab,
          onChange: handleChange,
          "aria-label": "basic tabs example",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
            label: "状态",
            ...a11yProps(0)
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
            label: "设定",
            ...a11yProps(1)
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, {
            label: "关于",
            ...a11yProps(2)
          })]
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, {
        value: tab,
        index: 0,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLog, {})
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, {
          value: tab,
          index: 1,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelSettings, {})
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTabPanel, {
          value: tab,
          index: 2,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelAbout, {})
        })]
      })]
    });
  }
  function PanelActions() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(material.Button, {
        variant: "contained",
        color: "primary",
        size: "small",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(material.Icon, {
          children: "add"
        }),
        sx: {
          mr: 1
        },
        children: "新建"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(material.Button, {
        variant: "contained",
        color: "primary",
        size: "small",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(material.Icon, {
          children: "edit"
        }),
        sx: {
          mr: 1
        },
        children: "编辑"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(material.Button, {
        variant: "contained",
        color: "primary",
        size: "small",
        startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(material.Icon, {
          children: "delete"
        }),
        sx: {
          mr: 1
        },
        children: "删除"
      })]
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
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(react.ThemeProvider, {
        theme,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ErrorBoundary, {
          children: [open && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DraggableFloatingDialog, {
              title: "Smart web",
              actions: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelActions, {}),
              canBeClosed: true,
              handleClose,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, {})
            })
          }), /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButton, {
            onClick: () => {
              setOpen(true);
            }
          })]
        })
      })
    });
  }
  var createRoot;
  var m = ReactDOM;
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

})(React, i18next, emotionReact, MaterialUI, ReactDraggable, emotionStyled, ReactDOM);