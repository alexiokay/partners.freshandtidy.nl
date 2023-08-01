globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getRequestHost, getRequestProtocol, setHeader, getHeader, getQuery as getQuery$1, getCookie, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash as hash$1 } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, hasProtocol, withBase, withTrailingSlash, withHttps, isRelative } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'pathe';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import slugify from 'slugify';
import { position } from 'unist-util-position';
import { visit } from 'unist-util-visit';
import { FontStyle, BUNDLED_LANGUAGES, BUNDLED_THEMES, getHighlighter } from 'shiki-es';
import { consola } from 'unenv/runtime/npm/consola';
import { createIPX, createIPXMiddleware } from 'ipx';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/**": {
        "ssr": true
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "test": "test",
    "cwd": "E:\\OneDrive\\webdev2023Temp\\LeadGeneration\\cleaning\\partners.freshandtidy",
    "BASE_URL": "",
    "API_TOKEN": "",
    "API_URL": "http://127.0.0.1:8001/",
    "HOST": "",
    "FETCH_HOST": "localhost:3000",
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1690851577100,
      "experimental": {
        "stripQueryParameters": false,
        "clientDB": false
      },
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    },
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    },
    "site": {
      "_context": {
        "defaultLocale": "defaults",
        "trailingSlash": "defaults",
        "titleSeparator": "defaults",
        "name": "package.json",
        "indexable": "system",
        "debug": "nuxt:config:site"
      },
      "defaultLocale": "en",
      "trailingSlash": false,
      "titleSeparator": "|",
      "name": "freshandtidy",
      "indexable": true,
      "debug": false
    }
  },
  "GOOGLE_MAPS_API_KEY": "AIzaSyBUmO4Y2x2BdqwJdN3zI0phmcPrOVozDNE",
  "TWILIO_ACCOUNT_SID": "",
  "TWILIO_AUTH_TOKEN": "",
  "TWILIO_SHORT_NAME": "",
  "TWILIO_PHONE_NUMBER": "",
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "kc4UzpZUjI",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "documentDriven": false,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false
    }
  },
  "nuxt-simple-sitemap": {
    "version": "3.0.15",
    "moduleConfig": {
      "autoLastmod": true,
      "xsl": "/__sitemap__/style.xsl",
      "xslTips": true,
      "cacheTtl": 3600000,
      "runtimeCacheStorage": "default",
      "autoAlternativeLangPrefixes": "",
      "credits": true,
      "defaults": {},
      "xslColumns": [
        {
          "label": "URL",
          "width": "50%"
        },
        {
          "label": "Images",
          "width": "25%",
          "select": "count(image:image)"
        },
        {
          "label": "Last Updated",
          "width": "25%",
          "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
        }
      ],
      "include": [],
      "exclude": [],
      "sitemaps": false,
      "sitemapName": "sitemap.xml",
      "dynamicUrlsApiEndpoint": "/api/_sitemap-urls",
      "urls": [],
      "debug": false,
      "discoverImages": true
    },
    "buildTimeMeta": {
      "isNuxtContentDocumentDriven": false,
      "hasApiRoutesUrl": false,
      "hasPrerenderedRoutesPayload": false,
      "prerenderSitemap": true,
      "version": "3.0.15"
    }
  },
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"","mtime":"2023-08-01T00:59:51.608Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"","mtime":"2023-08-01T00:59:51.608Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash$1([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash$1(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash$1(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash$1(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-07-26T17:12:11.050Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2a584-HUAsKiHHGyU9DYNiOIqIicxf/GQ\"",
    "mtime": "2023-08-01T00:59:51.481Z",
    "size": 173444,
    "path": "../public/index.html"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"88e-/3o+xEFaoTQ31Xikl/xfABilpBc\"",
    "mtime": "2023-08-01T00:59:51.597Z",
    "size": 2190,
    "path": "../public/sitemap.xml"
  },
  "/calls/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2a921-QH6V81mjGZj+PheU9iebltthleY\"",
    "mtime": "2023-08-01T00:59:51.561Z",
    "size": 174369,
    "path": "../public/calls/index.html"
  },
  "/dashboard/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2f8f6-hIirfxdYhrM2+eQOi3lDpjb6g0E\"",
    "mtime": "2023-08-01T00:59:51.590Z",
    "size": 194806,
    "path": "../public/dashboard/index.html"
  },
  "/fonts/brown-bold.ttf": {
    "type": "font/ttf",
    "etag": "\"11bc8-WY38XI4oP2qrf7fUnfZu1nTlHbI\"",
    "mtime": "2023-07-26T17:12:11.124Z",
    "size": 72648,
    "path": "../public/fonts/brown-bold.ttf"
  },
  "/fonts/FlamaBook-Regular.otf": {
    "type": "font/otf",
    "etag": "\"5f80-AWYpPfofLGwGsETlE/B5Kti2sxg\"",
    "mtime": "2023-07-26T17:12:11.050Z",
    "size": 24448,
    "path": "../public/fonts/FlamaBook-Regular.otf"
  },
  "/fonts/INTERN.ttf": {
    "type": "font/ttf",
    "etag": "\"c4238-RLQV87CsHafzBEumvMVCpknUpEc\"",
    "mtime": "2023-07-26T17:12:11.059Z",
    "size": 803384,
    "path": "../public/fonts/INTERN.ttf"
  },
  "/fonts/Itim-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"58890-VBtO6WpEGdEPZ/zAAac5oFUpjkc\"",
    "mtime": "2023-07-26T17:12:11.062Z",
    "size": 362640,
    "path": "../public/fonts/Itim-Regular.ttf"
  },
  "/fonts/Roboto-Bold.ttf": {
    "type": "font/ttf",
    "etag": "\"28da8-YkQqGKn+lFfBr+q/aD0mOmkbd5g\"",
    "mtime": "2023-07-26T17:12:11.121Z",
    "size": 167336,
    "path": "../public/fonts/Roboto-Bold.ttf"
  },
  "/fonts/Roboto-Light.ttf": {
    "type": "font/ttf",
    "etag": "\"28c58-GHiMXWMPppX5KD9jk7+lQbIDFQg\"",
    "mtime": "2023-07-26T17:12:11.123Z",
    "size": 167000,
    "path": "../public/fonts/Roboto-Light.ttf"
  },
  "/icons/car_services.png": {
    "type": "image/png",
    "etag": "\"2a6d-s4kLg2ozxnGxuuSe2mVnDuCSLKw\"",
    "mtime": "2023-07-26T17:12:11.132Z",
    "size": 10861,
    "path": "../public/icons/car_services.png"
  },
  "/icons/commercial_services.png": {
    "type": "image/png",
    "etag": "\"3925-j59rBWHuVBWYbc/AFBosdXMp8gI\"",
    "mtime": "2023-07-26T17:12:11.132Z",
    "size": 14629,
    "path": "../public/icons/commercial_services.png"
  },
  "/icons/icon-13.png": {
    "type": "image/png",
    "etag": "\"a9b0f-rLysps2riajsKuNCKb+MSQP91mI\"",
    "mtime": "2023-07-26T17:12:11.139Z",
    "size": 695055,
    "path": "../public/icons/icon-13.png"
  },
  "/icons/icon-23.png": {
    "type": "image/png",
    "etag": "\"a347b-celHG0y7E4JvnUNTJybBPYFgAW0\"",
    "mtime": "2023-07-26T17:12:11.143Z",
    "size": 668795,
    "path": "../public/icons/icon-23.png"
  },
  "/icons/icon-33.png": {
    "type": "image/png",
    "etag": "\"595f0-CmVLuN9gOXFSEHKlQUvOR3lS4KY\"",
    "mtime": "2023-07-26T17:12:11.147Z",
    "size": 366064,
    "path": "../public/icons/icon-33.png"
  },
  "/icons/icon-43.png": {
    "type": "image/png",
    "etag": "\"7a24c-I6WhPZaXjRJi2mHG5bj+BmtL2AE\"",
    "mtime": "2023-07-26T17:12:11.151Z",
    "size": 500300,
    "path": "../public/icons/icon-43.png"
  },
  "/icons/icon-53.png": {
    "type": "image/png",
    "etag": "\"c2b29-YvOJKbNrOPEvfAfe2GU5yPdtjwY\"",
    "mtime": "2023-07-26T17:12:11.156Z",
    "size": 797481,
    "path": "../public/icons/icon-53.png"
  },
  "/icons/quote.png": {
    "type": "image/png",
    "etag": "\"c21-htIt6QgTVzxn+yDJ0/XiS18Dsns\"",
    "mtime": "2023-07-26T17:12:11.159Z",
    "size": 3105,
    "path": "../public/icons/quote.png"
  },
  "/icons/rank.png": {
    "type": "image/png",
    "etag": "\"201ac-ECenfkeTNz13lzhbqrf9+tm1URk\"",
    "mtime": "2023-07-26T17:12:11.161Z",
    "size": 131500,
    "path": "../public/icons/rank.png"
  },
  "/icons/residental_services.png": {
    "type": "image/png",
    "etag": "\"2480-mOj8AiBNqKHIRm/fmvzsmX28ntk\"",
    "mtime": "2023-07-26T17:12:11.162Z",
    "size": 9344,
    "path": "../public/icons/residental_services.png"
  },
  "/icons/shield.png": {
    "type": "image/png",
    "etag": "\"413f-DPxXVWccmnEFpJZQ7FRHrfHaCqY\"",
    "mtime": "2023-07-26T17:12:11.164Z",
    "size": 16703,
    "path": "../public/icons/shield.png"
  },
  "/images/circles-bg.png": {
    "type": "image/png",
    "etag": "\"d4609f-VIYCNRkWS5lyeMxRJUbCV/jvc2I\"",
    "mtime": "2023-07-26T17:12:11.250Z",
    "size": 13918367,
    "path": "../public/images/circles-bg.png"
  },
  "/images/download.jpeg": {
    "type": "image/jpeg",
    "etag": "\"2155-SpXVo474yHomI5jL5o3lmSWUyrY\"",
    "mtime": "2023-07-27T15:46:36.444Z",
    "size": 8533,
    "path": "../public/images/download.jpeg"
  },
  "/images/loginpage.png": {
    "type": "image/png",
    "etag": "\"10d637-OTkzOy+S/8tRoQ4qrZz1K0VG8wY\"",
    "mtime": "2023-07-26T17:12:11.259Z",
    "size": 1103415,
    "path": "../public/images/loginpage.png"
  },
  "/images/loginpage2.png": {
    "type": "image/png",
    "etag": "\"167b232-G4+WkVGKayBlG2T/5ms34rLA+rM\"",
    "mtime": "2023-07-26T17:12:11.378Z",
    "size": 23573042,
    "path": "../public/images/loginpage2.png"
  },
  "/images/logo.png": {
    "type": "image/png",
    "etag": "\"5a37a-dJV/Ou3DdWovnTjgCyszMeQlqsw\"",
    "mtime": "2023-07-26T17:12:11.385Z",
    "size": 369530,
    "path": "../public/images/logo.png"
  },
  "/locations/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2e38c-MOl97S9tiYaooqzCXh2X5uYibTM\"",
    "mtime": "2023-08-01T00:59:51.589Z",
    "size": 189324,
    "path": "../public/locations/index.html"
  },
  "/schedule/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2a3e2-TwN/VdFE0xpK5kEmTPSokDTtgr4\"",
    "mtime": "2023-08-01T00:59:51.560Z",
    "size": 173026,
    "path": "../public/schedule/index.html"
  },
  "/services/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2c274-lak6flrpByXMEfwmqDlEc8TzXp0\"",
    "mtime": "2023-08-01T00:59:51.589Z",
    "size": 180852,
    "path": "../public/services/index.html"
  },
  "/sounds/pc-buzzing-fan-66135.mp3": {
    "type": "audio/mpeg",
    "etag": "\"13ce00-BRFIys6VCkUmU7LBPCFUFWvv1Uk\"",
    "mtime": "2023-07-26T17:12:11.410Z",
    "size": 1297920,
    "path": "../public/sounds/pc-buzzing-fan-66135.mp3"
  },
  "/videos/gpu-bg.mp4": {
    "type": "video/mp4",
    "etag": "\"bb79cf-JXkSnzKF6frj1JU2aNFB8OjUHo0\"",
    "mtime": "2023-07-26T17:12:11.468Z",
    "size": 12286415,
    "path": "../public/videos/gpu-bg.mp4"
  },
  "/videos/gpu.gif": {
    "type": "image/gif",
    "etag": "\"3e60c5-jgrmxi+osU9VDpVDO5n2atsT+cA\"",
    "mtime": "2023-07-26T17:12:11.490Z",
    "size": 4088005,
    "path": "../public/videos/gpu.gif"
  },
  "/__sitemap__/style.xsl": {
    "type": "application/xml",
    "etag": "\"168c-DZBtl7/BaoKb82gq9FaNx5UUtVI\"",
    "mtime": "2023-08-01T00:59:51.409Z",
    "size": 5772,
    "path": "../public/__sitemap__/style.xsl"
  },
  "/_nuxt/activation.12812e7a.js": {
    "type": "application/javascript",
    "etag": "\"10d-aTHXBKPaciI/Y0DzRsLaBjNwKF4\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 269,
    "path": "../public/_nuxt/activation.12812e7a.js"
  },
  "/_nuxt/Approved.235e1bb7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3-LW8WogaWUdyDjoCKb2qrLA3SxOA\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 435,
    "path": "../public/_nuxt/Approved.235e1bb7.css"
  },
  "/_nuxt/Approved.vue.5b1fc114.js": {
    "type": "application/javascript",
    "etag": "\"874-q7i/P+pXjXvkh4IjDzsG0Ml7NMU\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 2164,
    "path": "../public/_nuxt/Approved.vue.5b1fc114.js"
  },
  "/_nuxt/arrow-right-alt-rounded.f930b554.js": {
    "type": "application/javascript",
    "etag": "\"21a-zimNUArR+ooE93KtHT9qzweAIqE\"",
    "mtime": "2023-08-01T00:59:43.413Z",
    "size": 538,
    "path": "../public/_nuxt/arrow-right-alt-rounded.f930b554.js"
  },
  "/_nuxt/arrow.a3b00da4.js": {
    "type": "application/javascript",
    "etag": "\"1e00-B4EPkU5qAecO8FDC85huamnxJdk\"",
    "mtime": "2023-08-01T00:59:43.435Z",
    "size": 7680,
    "path": "../public/_nuxt/arrow.a3b00da4.js"
  },
  "/_nuxt/asyncData.76d472c8.js": {
    "type": "application/javascript",
    "etag": "\"924-WaZWPxEOx2nIiM7dZLFNBdgKmK4\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 2340,
    "path": "../public/_nuxt/asyncData.76d472c8.js"
  },
  "/_nuxt/auth-arrow-employee.4ed993c7.js": {
    "type": "application/javascript",
    "etag": "\"1-rcg7GeeTSRscbqD9i0bNnzLlkvw\"",
    "mtime": "2023-08-01T00:59:43.378Z",
    "size": 1,
    "path": "../public/_nuxt/auth-arrow-employee.4ed993c7.js"
  },
  "/_nuxt/calendar-week.c22d7ab8.js": {
    "type": "application/javascript",
    "etag": "\"319-8Hyx/0QfzOlMTQVtnIM4/I0VFpQ\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 793,
    "path": "../public/_nuxt/calendar-week.c22d7ab8.js"
  },
  "/_nuxt/calls.dcdc6f2f.js": {
    "type": "application/javascript",
    "etag": "\"764-9F0Dp+r770tWUycGxbse9rzrPtQ\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 1892,
    "path": "../public/_nuxt/calls.dcdc6f2f.js"
  },
  "/_nuxt/carrier.a9b0f7dd.js": {
    "type": "application/javascript",
    "etag": "\"1f32-526ezxrI+4k60bp914QmNczyqqk\"",
    "mtime": "2023-08-01T00:59:43.435Z",
    "size": 7986,
    "path": "../public/_nuxt/carrier.a9b0f7dd.js"
  },
  "/_nuxt/client-db.57b101cc.js": {
    "type": "application/javascript",
    "etag": "\"548a-GVP+C1ueeXNufRThDCy+AVeylOQ\"",
    "mtime": "2023-08-01T00:59:43.432Z",
    "size": 21642,
    "path": "../public/_nuxt/client-db.57b101cc.js"
  },
  "/_nuxt/ContentDoc.0e78e212.js": {
    "type": "application/javascript",
    "etag": "\"82e-sFhaiNn/Wivr/J/2sS6kIsOnv2o\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 2094,
    "path": "../public/_nuxt/ContentDoc.0e78e212.js"
  },
  "/_nuxt/ContentList.af5f45f9.js": {
    "type": "application/javascript",
    "etag": "\"3d4-IWTxdXljSBLVyAE8hPlPJr44v58\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 980,
    "path": "../public/_nuxt/ContentList.af5f45f9.js"
  },
  "/_nuxt/ContentNavigation.b8bc5c21.js": {
    "type": "application/javascript",
    "etag": "\"73b-pHVh2zqW5R5288dVpILCPBln5MY\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 1851,
    "path": "../public/_nuxt/ContentNavigation.b8bc5c21.js"
  },
  "/_nuxt/ContentQuery.98c20933.js": {
    "type": "application/javascript",
    "etag": "\"92b-mUbULK0llNwTty2GpYqek/2NRXk\"",
    "mtime": "2023-08-01T00:59:43.413Z",
    "size": 2347,
    "path": "../public/_nuxt/ContentQuery.98c20933.js"
  },
  "/_nuxt/ContentRenderer.1a993347.js": {
    "type": "application/javascript",
    "etag": "\"4f0-7M9pypk+jc7mfcn49WLHQTrfgfE\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 1264,
    "path": "../public/_nuxt/ContentRenderer.1a993347.js"
  },
  "/_nuxt/ContentRendererMarkdown.99f0738d.js": {
    "type": "application/javascript",
    "etag": "\"5b03-0sfpX+dIGebVWoHEXAXsoM3Er7g\"",
    "mtime": "2023-08-01T00:59:43.432Z",
    "size": 23299,
    "path": "../public/_nuxt/ContentRendererMarkdown.99f0738d.js"
  },
  "/_nuxt/ContentSlot.73f18a8a.js": {
    "type": "application/javascript",
    "etag": "\"422-8sF3MaVZxVfFFyqqHZG1QqMC9RA\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 1058,
    "path": "../public/_nuxt/ContentSlot.73f18a8a.js"
  },
  "/_nuxt/default.4489819b.js": {
    "type": "application/javascript",
    "etag": "\"9103-HFv8Oex5UMuL8p5LUNcDmEGu4Bc\"",
    "mtime": "2023-08-01T00:59:43.435Z",
    "size": 37123,
    "path": "../public/_nuxt/default.4489819b.js"
  },
  "/_nuxt/default.f4478c78.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"775-zTU+455TJt2tbCH4UGDj74FBIOs\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 1909,
    "path": "../public/_nuxt/default.f4478c78.css"
  },
  "/_nuxt/DocumentDrivenEmpty.1bc046cf.js": {
    "type": "application/javascript",
    "etag": "\"120-DzybOQLGBc1t071xWtrxxPvtZ/o\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.1bc046cf.js"
  },
  "/_nuxt/DocumentDrivenNotFound.b001d537.js": {
    "type": "application/javascript",
    "etag": "\"9f-tQQW4z8lKkxm3hC9sxhDqpdwyR4\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 159,
    "path": "../public/_nuxt/DocumentDrivenNotFound.b001d537.js"
  },
  "/_nuxt/entry.bf527e2a.js": {
    "type": "application/javascript",
    "etag": "\"5c989-1WKd1mdIK1VqYEPXrvmbZNjEReQ\"",
    "mtime": "2023-08-01T00:59:43.437Z",
    "size": 379273,
    "path": "../public/_nuxt/entry.bf527e2a.js"
  },
  "/_nuxt/error-404.2e807028.js": {
    "type": "application/javascript",
    "etag": "\"907-0Ylgn6LP99ny1IsjSORAurbDIFU\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 2311,
    "path": "../public/_nuxt/error-404.2e807028.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-500.114ca597.js": {
    "type": "application/javascript",
    "etag": "\"78b-DWE4DA+oq9SmY3Tpk2ADl+isVFo\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 1931,
    "path": "../public/_nuxt/error-500.114ca597.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/fetch.65851757.js": {
    "type": "application/javascript",
    "etag": "\"45f-LE+6TjdVYmK9YMvcVEyyY6s1QUo\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 1119,
    "path": "../public/_nuxt/fetch.65851757.js"
  },
  "/_nuxt/index.2a4b7d8d.js": {
    "type": "application/javascript",
    "etag": "\"407-kMfMJ3V2M2xVi/SPMIwUajQ54YI\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 1031,
    "path": "../public/_nuxt/index.2a4b7d8d.js"
  },
  "/_nuxt/index.5543029c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a8-ZJWurpHq+swEJPcLUo+XnCBf1mU\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 168,
    "path": "../public/_nuxt/index.5543029c.css"
  },
  "/_nuxt/index.72934641.js": {
    "type": "application/javascript",
    "etag": "\"1b6-LjQJgk/XATIfqzIC/GwKFF686Ds\"",
    "mtime": "2023-08-01T00:59:43.432Z",
    "size": 438,
    "path": "../public/_nuxt/index.72934641.js"
  },
  "/_nuxt/index.a6ef77ff.js": {
    "type": "application/javascript",
    "etag": "\"26c-+VpW5S3yY9LeN0pZkd2hWLzNeBY\"",
    "mtime": "2023-08-01T00:59:43.422Z",
    "size": 620,
    "path": "../public/_nuxt/index.a6ef77ff.js"
  },
  "/_nuxt/index.c76b1712.js": {
    "type": "application/javascript",
    "etag": "\"2f372-Ny1K9X1TDGra11U0H584yrLRZ0o\"",
    "mtime": "2023-08-01T00:59:43.436Z",
    "size": 193394,
    "path": "../public/_nuxt/index.c76b1712.js"
  },
  "/_nuxt/index.dc897115.js": {
    "type": "application/javascript",
    "etag": "\"15da-OB6vwlmPRsu3QbhfNpzf+Zg97dQ\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 5594,
    "path": "../public/_nuxt/index.dc897115.js"
  },
  "/_nuxt/index.f489387e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"215b-4GIvMaQvhJWL1KvQwWqA1Dnps+I\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 8539,
    "path": "../public/_nuxt/index.f489387e.css"
  },
  "/_nuxt/locations.8b466953.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3ae0-d79g2dz2O47BVH1dYfVvWj23pLo\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 15072,
    "path": "../public/_nuxt/locations.8b466953.css"
  },
  "/_nuxt/locations.8f1182d2.js": {
    "type": "application/javascript",
    "etag": "\"6711b-QSBuc1m3aO8KWOM1If487DQhBIg\"",
    "mtime": "2023-08-01T00:59:43.438Z",
    "size": 422171,
    "path": "../public/_nuxt/locations.8f1182d2.js"
  },
  "/_nuxt/login.2b8e8036.js": {
    "type": "application/javascript",
    "etag": "\"14d9-yjF/74bWrabddB51gUdmwWpN0dc\"",
    "mtime": "2023-08-01T00:59:43.435Z",
    "size": 5337,
    "path": "../public/_nuxt/login.2b8e8036.js"
  },
  "/_nuxt/Main.8dee3ae2.js": {
    "type": "application/javascript",
    "etag": "\"1b2f-TbumaQx6htiB9Kxvj+fC70IqwzQ\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 6959,
    "path": "../public/_nuxt/Main.8dee3ae2.js"
  },
  "/_nuxt/Markdown.db22e5df.js": {
    "type": "application/javascript",
    "etag": "\"19f-/EkUe2Pksqi4OhtrEcCnSkOvohQ\"",
    "mtime": "2023-08-01T00:59:43.422Z",
    "size": 415,
    "path": "../public/_nuxt/Markdown.db22e5df.js"
  },
  "/_nuxt/notifications.f891fabb.js": {
    "type": "application/javascript",
    "etag": "\"a1-w072/O/YGyxG41So2RmsBins6EY\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 161,
    "path": "../public/_nuxt/notifications.f891fabb.js"
  },
  "/_nuxt/nuxt-img.41367877.js": {
    "type": "application/javascript",
    "etag": "\"26be-tUJ7d/vqS3ehtcsleDMxmjOwit4\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 9918,
    "path": "../public/_nuxt/nuxt-img.41367877.js"
  },
  "/_nuxt/nuxt-link.ef7ed224.js": {
    "type": "application/javascript",
    "etag": "\"10f8-uCGxFL/NYnq3i6K9qwG8ClHabzY\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 4344,
    "path": "../public/_nuxt/nuxt-link.ef7ed224.js"
  },
  "/_nuxt/outline-close.ccee7d5a.js": {
    "type": "application/javascript",
    "etag": "\"176-SoJdbyr57yqM29cdYdif8PX3ZR0\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 374,
    "path": "../public/_nuxt/outline-close.ccee7d5a.js"
  },
  "/_nuxt/preview.2e32a103.js": {
    "type": "application/javascript",
    "etag": "\"219-bzcmpfrkZmfzs8gWnLVXdr3p9rc\"",
    "mtime": "2023-08-01T00:59:43.381Z",
    "size": 537,
    "path": "../public/_nuxt/preview.2e32a103.js"
  },
  "/_nuxt/privacy.0532e3c1.js": {
    "type": "application/javascript",
    "etag": "\"2cba-t+2TKjutaaFnTncdF7CKUT9nIno\"",
    "mtime": "2023-08-01T00:59:43.435Z",
    "size": 11450,
    "path": "../public/_nuxt/privacy.0532e3c1.js"
  },
  "/_nuxt/privacy.c5409eac.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"88-mo8VTi7TlUivIe+LancbRkiKD7E\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 136,
    "path": "../public/_nuxt/privacy.c5409eac.css"
  },
  "/_nuxt/ProseA.73cb39b4.js": {
    "type": "application/javascript",
    "etag": "\"18b-uKjsZn2gD5u2YY/StAzfyhFoDeQ\"",
    "mtime": "2023-08-01T00:59:43.408Z",
    "size": 395,
    "path": "../public/_nuxt/ProseA.73cb39b4.js"
  },
  "/_nuxt/ProseBlockquote.ae70b905.js": {
    "type": "application/javascript",
    "etag": "\"f7-W4TcBTmUGHcK5ncfKPRM7qDuAuE\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 247,
    "path": "../public/_nuxt/ProseBlockquote.ae70b905.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 46,
    "path": "../public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCode.f6777f37.js": {
    "type": "application/javascript",
    "etag": "\"194-pZ0+dlEsMY2S+8Nqy2xBZil9O9I\"",
    "mtime": "2023-08-01T00:59:43.432Z",
    "size": 404,
    "path": "../public/_nuxt/ProseCode.f6777f37.js"
  },
  "/_nuxt/ProseCodeInline.67382a6c.js": {
    "type": "application/javascript",
    "etag": "\"f1-B3mbktPGD+0vgHiM+vo2JHZ+wbE\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 241,
    "path": "../public/_nuxt/ProseCodeInline.67382a6c.js"
  },
  "/_nuxt/ProseEm.197021b3.js": {
    "type": "application/javascript",
    "etag": "\"ef-f67SSPg9M8zHAZv2WWmBiY31tUI\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 239,
    "path": "../public/_nuxt/ProseEm.197021b3.js"
  },
  "/_nuxt/ProseH1.f394d65f.js": {
    "type": "application/javascript",
    "etag": "\"1ad-mpmLbJd1zAFqiG7rF5mk7HWGJu0\"",
    "mtime": "2023-08-01T00:59:43.422Z",
    "size": 429,
    "path": "../public/_nuxt/ProseH1.f394d65f.js"
  },
  "/_nuxt/ProseH2.a1b96ae5.js": {
    "type": "application/javascript",
    "etag": "\"1ad-lPMQFiOPn+h+Ray4h9Dd4hr1aUg\"",
    "mtime": "2023-08-01T00:59:43.422Z",
    "size": 429,
    "path": "../public/_nuxt/ProseH2.a1b96ae5.js"
  },
  "/_nuxt/ProseH3.c809611f.js": {
    "type": "application/javascript",
    "etag": "\"1ad-THPwiO9uI12O5JxKIBvrkiHvqmY\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 429,
    "path": "../public/_nuxt/ProseH3.c809611f.js"
  },
  "/_nuxt/ProseH4.6e2eb348.js": {
    "type": "application/javascript",
    "etag": "\"1ad-iE2uwYuN/7ndKvU7hERiH03ac9c\"",
    "mtime": "2023-08-01T00:59:43.413Z",
    "size": 429,
    "path": "../public/_nuxt/ProseH4.6e2eb348.js"
  },
  "/_nuxt/ProseH5.b1eb516b.js": {
    "type": "application/javascript",
    "etag": "\"1ad-LxVOpwtXAk4rfW/RXVcjD9FY4Hc\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 429,
    "path": "../public/_nuxt/ProseH5.b1eb516b.js"
  },
  "/_nuxt/ProseH6.453a60e4.js": {
    "type": "application/javascript",
    "etag": "\"1ad-Ww3hbxaJNKZxOflR0htkNqzwLF8\"",
    "mtime": "2023-08-01T00:59:43.413Z",
    "size": 429,
    "path": "../public/_nuxt/ProseH6.453a60e4.js"
  },
  "/_nuxt/ProseHr.bdf82ea3.js": {
    "type": "application/javascript",
    "etag": "\"cb-4qp+FXEjxr7xXRoTmuXOAm61vvM\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 203,
    "path": "../public/_nuxt/ProseHr.bdf82ea3.js"
  },
  "/_nuxt/ProseImg.f8247879.js": {
    "type": "application/javascript",
    "etag": "\"242-isF+kX4s4zQB+Mm1DBWQdR1XkSI\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 578,
    "path": "../public/_nuxt/ProseImg.f8247879.js"
  },
  "/_nuxt/ProseLi.bdfc5daf.js": {
    "type": "application/javascript",
    "etag": "\"ef-Q2SDgfqaYmMH+E6N0cKtcvKuweM\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 239,
    "path": "../public/_nuxt/ProseLi.bdfc5daf.js"
  },
  "/_nuxt/ProseOl.42dc7c57.js": {
    "type": "application/javascript",
    "etag": "\"ef-psOooW6+sbrKaaEzddPQiCJzh0o\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 239,
    "path": "../public/_nuxt/ProseOl.42dc7c57.js"
  },
  "/_nuxt/ProseP.49a0ae21.js": {
    "type": "application/javascript",
    "etag": "\"ee-4NO4XMLsdMS240LBshAUxBKFMLs\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 238,
    "path": "../public/_nuxt/ProseP.49a0ae21.js"
  },
  "/_nuxt/ProseStrong.dc100977.js": {
    "type": "application/javascript",
    "etag": "\"f3-/Il2/FQazk0wDtnziYiSeeqHU3o\"",
    "mtime": "2023-08-01T00:59:43.408Z",
    "size": 243,
    "path": "../public/_nuxt/ProseStrong.dc100977.js"
  },
  "/_nuxt/ProseTable.589bd465.js": {
    "type": "application/javascript",
    "etag": "\"f2-vyMLlg6DjaQ5a87zaPzbFueXEXg\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 242,
    "path": "../public/_nuxt/ProseTable.589bd465.js"
  },
  "/_nuxt/ProseTbody.e6ac0ab1.js": {
    "type": "application/javascript",
    "etag": "\"f2-Ay+k0SN3YO4Om8HhAW+RBxjScr4\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 242,
    "path": "../public/_nuxt/ProseTbody.e6ac0ab1.js"
  },
  "/_nuxt/ProseTd.c6418677.js": {
    "type": "application/javascript",
    "etag": "\"ef-E47wThjIWc/wXdbrBZWr17h9lp0\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 239,
    "path": "../public/_nuxt/ProseTd.c6418677.js"
  },
  "/_nuxt/ProseTh.8297f7da.js": {
    "type": "application/javascript",
    "etag": "\"ef-aAQeA7eXKw3HcZ2A59Q9FkxT/Y8\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 239,
    "path": "../public/_nuxt/ProseTh.8297f7da.js"
  },
  "/_nuxt/ProseThead.da4daa4b.js": {
    "type": "application/javascript",
    "etag": "\"f2-Tr+Ji/HXpasfSF8RbLjqlzr13HU\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 242,
    "path": "../public/_nuxt/ProseThead.da4daa4b.js"
  },
  "/_nuxt/ProseTr.f41a7375.js": {
    "type": "application/javascript",
    "etag": "\"ea-F7BEQ0moAD90gw+yl9PaGLNIxlw\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 234,
    "path": "../public/_nuxt/ProseTr.f41a7375.js"
  },
  "/_nuxt/ProseUl.b4598492.js": {
    "type": "application/javascript",
    "etag": "\"ef-BQKufAHi+LvQ+9hPdIqCrkbM0x8\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 239,
    "path": "../public/_nuxt/ProseUl.b4598492.js"
  },
  "/_nuxt/query.6e4f72da.js": {
    "type": "application/javascript",
    "etag": "\"d77-DngwQiL8fEOMvUrbMkBTRzti9E0\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 3447,
    "path": "../public/_nuxt/query.6e4f72da.js"
  },
  "/_nuxt/redirect-if-logged.5b04838b.js": {
    "type": "application/javascript",
    "etag": "\"a2-RFTrQY3gHNm4qvTHGTT9T4zTjvM\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 162,
    "path": "../public/_nuxt/redirect-if-logged.5b04838b.js"
  },
  "/_nuxt/reservation.2a85d084.js": {
    "type": "application/javascript",
    "etag": "\"2c7-K7gUXyU+sNwsB7A/rEzyDZVtX0g\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 711,
    "path": "../public/_nuxt/reservation.2a85d084.js"
  },
  "/_nuxt/schedule.f84ef04f.js": {
    "type": "application/javascript",
    "etag": "\"8f-9yRkzGQIIDq9Rb3Pyc3mxDo7wPw\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 143,
    "path": "../public/_nuxt/schedule.f84ef04f.js"
  },
  "/_nuxt/Service.vue.47342ee8.js": {
    "type": "application/javascript",
    "etag": "\"3d2-xZYohP5IL24d96jTVj13bPqoLXU\"",
    "mtime": "2023-08-01T00:59:43.398Z",
    "size": 978,
    "path": "../public/_nuxt/Service.vue.47342ee8.js"
  },
  "/_nuxt/services.12d8c871.js": {
    "type": "application/javascript",
    "etag": "\"1a6e-3q1kYCFIqGZstkCujLyDSlMa5mQ\"",
    "mtime": "2023-08-01T00:59:43.435Z",
    "size": 6766,
    "path": "../public/_nuxt/services.12d8c871.js"
  },
  "/_nuxt/services3.73010f01.js": {
    "type": "application/javascript",
    "etag": "\"1019-Hi5fyuyjaDUyRRn90wdfCpMQMTw\"",
    "mtime": "2023-08-01T00:59:43.434Z",
    "size": 4121,
    "path": "../public/_nuxt/services3.73010f01.js"
  },
  "/_nuxt/services3.b9c90aec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f1-rBDb0I348QWcTj5yR6mmVP5hZJ0\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 1009,
    "path": "../public/_nuxt/services3.b9c90aec.css"
  },
  "/_nuxt/settings.1c6e0566.js": {
    "type": "application/javascript",
    "etag": "\"1191-bqkrDWE0usIDwhaIKit2htGlkr4\"",
    "mtime": "2023-08-01T00:59:43.433Z",
    "size": 4497,
    "path": "../public/_nuxt/settings.1c6e0566.js"
  },
  "/_nuxt/show.00742b5d.js": {
    "type": "application/javascript",
    "etag": "\"50f-tK6HTxK46RI6nnztss1xAvn5m8M\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 1295,
    "path": "../public/_nuxt/show.00742b5d.js"
  },
  "/_nuxt/switch.b09f8dd3.js": {
    "type": "application/javascript",
    "etag": "\"18d9-VoFuaPaeCs6RlKEXR9LxnB2VQwc\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 6361,
    "path": "../public/_nuxt/switch.b09f8dd3.js"
  },
  "/_nuxt/timeslots.f0d19dd6.js": {
    "type": "application/javascript",
    "etag": "\"1004-7wpQHecr7kaTrjaDSKsKYEwBIRA\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 4100,
    "path": "../public/_nuxt/timeslots.f0d19dd6.js"
  },
  "/_nuxt/useLang.98303ae6.js": {
    "type": "application/javascript",
    "etag": "\"61-YGuKgpUuxt35SOYKh9wu7EUZRL8\"",
    "mtime": "2023-08-01T00:59:43.380Z",
    "size": 97,
    "path": "../public/_nuxt/useLang.98303ae6.js"
  },
  "/_nuxt/utils.94c62ae2.js": {
    "type": "application/javascript",
    "etag": "\"5b6-iN57lr1omUXsrt6uIh7W1kbqwPA\"",
    "mtime": "2023-08-01T00:59:43.412Z",
    "size": 1462,
    "path": "../public/_nuxt/utils.94c62ae2.js"
  },
  "/_nuxt/_id_.49358936.js": {
    "type": "application/javascript",
    "etag": "\"212e-Gp1QeTur3sElZuvGRjVe7ghvBiY\"",
    "mtime": "2023-08-01T00:59:43.428Z",
    "size": 8494,
    "path": "../public/_nuxt/_id_.49358936.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-08-01T00:59:43.426Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/api/_content/cache.1690851577100.json": {
    "type": "application/json",
    "etag": "\"4d-zztjSenbkc8FT34P+jQ8BWn/kkU\"",
    "mtime": "2023-08-01T00:59:51.436Z",
    "size": 77,
    "path": "../public/api/_content/cache.1690851577100.json"
  },
  "/dashboard/settings/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"2b276-hb0d0drm4AGmEQQVtypMcq7+e5k\"",
    "mtime": "2023-08-01T00:59:51.590Z",
    "size": 176758,
    "path": "../public/dashboard/settings/index.html"
  },
  "/fonts/elMessiri/ElMessiri-Bold.ttf": {
    "type": "font/ttf",
    "etag": "\"151f4-hpD2xbqS6BV722TwxFqzs0e7/lM\"",
    "mtime": "2023-07-26T17:12:11.126Z",
    "size": 86516,
    "path": "../public/fonts/elMessiri/ElMessiri-Bold.ttf"
  },
  "/fonts/elMessiri/ElMessiri-Medium.ttf": {
    "type": "font/ttf",
    "etag": "\"152fc-xjdUSSv7EjORjk4yDYXIelEHDt0\"",
    "mtime": "2023-07-26T17:12:11.128Z",
    "size": 86780,
    "path": "../public/fonts/elMessiri/ElMessiri-Medium.ttf"
  },
  "/fonts/elMessiri/ElMessiri-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"150e0-itrh9apFj/Qng5FklBl4aycSclE\"",
    "mtime": "2023-07-26T17:12:11.130Z",
    "size": 86240,
    "path": "../public/fonts/elMessiri/ElMessiri-Regular.ttf"
  },
  "/fonts/elMessiri/ElMessiri-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"15378-64c8ZwwJpWG2xWs5fTlbcMFzjHE\"",
    "mtime": "2023-07-26T17:12:11.131Z",
    "size": 86904,
    "path": "../public/fonts/elMessiri/ElMessiri-SemiBold.ttf"
  },
  "/fonts/Montserrat/Montserrat-Black.ttf": {
    "type": "font/ttf",
    "etag": "\"30500-/KEw8hYBNGzON7uKlSb/Aa9m2RI\"",
    "mtime": "2023-07-26T17:12:11.065Z",
    "size": 197888,
    "path": "../public/fonts/Montserrat/Montserrat-Black.ttf"
  },
  "/fonts/Montserrat/Montserrat-BlackItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"31640-UMoGYBecKMMe8d68VVBqHqs2ZEY\"",
    "mtime": "2023-07-26T17:12:11.068Z",
    "size": 202304,
    "path": "../public/fonts/Montserrat/Montserrat-BlackItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-Bold.ttf": {
    "type": "font/ttf",
    "etag": "\"305b8-BAUtw7hGYJIW3h4MvOwzfGtudPY\"",
    "mtime": "2023-07-26T17:12:11.070Z",
    "size": 198072,
    "path": "../public/fonts/Montserrat/Montserrat-Bold.ttf"
  },
  "/fonts/Montserrat/Montserrat-BoldItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"316fc-7V5TO2Vx4zrbbQEpjLjRpaJGZlc\"",
    "mtime": "2023-07-26T17:12:11.072Z",
    "size": 202492,
    "path": "../public/fonts/Montserrat/Montserrat-BoldItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-ExtraBold.ttf": {
    "type": "font/ttf",
    "etag": "\"30604-GRS8GYHmzs6tsvbXJFW06J4Ellw\"",
    "mtime": "2023-07-26T17:12:11.075Z",
    "size": 198148,
    "path": "../public/fonts/Montserrat/Montserrat-ExtraBold.ttf"
  },
  "/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"316dc-SXWKDqWf5/gsY5o4Wius89TeM5g\"",
    "mtime": "2023-07-26T17:12:11.078Z",
    "size": 202460,
    "path": "../public/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-ExtraLight.ttf": {
    "type": "font/ttf",
    "etag": "\"30498-fFlLEmlBRgvS87Rwl/1iIvUid+c\"",
    "mtime": "2023-07-26T17:12:11.081Z",
    "size": 197784,
    "path": "../public/fonts/Montserrat/Montserrat-ExtraLight.ttf"
  },
  "/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"3167c-+7uXK2FsO4TZmXbd+Etv7N60x8o\"",
    "mtime": "2023-07-26T17:12:11.083Z",
    "size": 202364,
    "path": "../public/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-Italic.ttf": {
    "type": "font/ttf",
    "etag": "\"3168c-TujwfHQUAJZF0D2HzXLfFWWP6fQ\"",
    "mtime": "2023-07-26T17:12:11.086Z",
    "size": 202380,
    "path": "../public/fonts/Montserrat/Montserrat-Italic.ttf"
  },
  "/fonts/Montserrat/Montserrat-Light.ttf": {
    "type": "font/ttf",
    "etag": "\"305b8-byGJSoAEklnvcfy6E1IYaVtBtno\"",
    "mtime": "2023-07-26T17:12:11.088Z",
    "size": 198072,
    "path": "../public/fonts/Montserrat/Montserrat-Light.ttf"
  },
  "/fonts/Montserrat/Montserrat-LightItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"3171c-jpgPdqNWdazVhvgp3Sro0ALdl9Y\"",
    "mtime": "2023-07-26T17:12:11.090Z",
    "size": 202524,
    "path": "../public/fonts/Montserrat/Montserrat-LightItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-Medium.ttf": {
    "type": "font/ttf",
    "etag": "\"305d8-a1fRLgGMZDUuIC+O879/Qx922TU\"",
    "mtime": "2023-07-26T17:12:11.093Z",
    "size": 198104,
    "path": "../public/fonts/Montserrat/Montserrat-Medium.ttf"
  },
  "/fonts/Montserrat/Montserrat-MediumItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"316fc-iyxGTkLwf8MH/ducWNIC7P8Zvio\"",
    "mtime": "2023-07-26T17:12:11.095Z",
    "size": 202492,
    "path": "../public/fonts/Montserrat/Montserrat-MediumItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"30558-3leqA+SCH9vmw07CyJXotckU6Dc\"",
    "mtime": "2023-07-26T17:12:11.098Z",
    "size": 197976,
    "path": "../public/fonts/Montserrat/Montserrat-Regular.ttf"
  },
  "/fonts/Montserrat/Montserrat-SemiBold.ttf": {
    "type": "font/ttf",
    "etag": "\"3063c-hYDeyCS722ziTQTTqvNgd2M58Kc\"",
    "mtime": "2023-07-26T17:12:11.100Z",
    "size": 198204,
    "path": "../public/fonts/Montserrat/Montserrat-SemiBold.ttf"
  },
  "/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"317a4-UWJpAvnysKoksjW7aLJkBiLxVrk\"",
    "mtime": "2023-07-26T17:12:11.103Z",
    "size": 202660,
    "path": "../public/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf"
  },
  "/fonts/Montserrat/Montserrat-Thin.ttf": {
    "type": "font/ttf",
    "etag": "\"30358-jIcZkZYPUgoxY1+Vvmw0a2WeLIw\"",
    "mtime": "2023-07-26T17:12:11.105Z",
    "size": 197464,
    "path": "../public/fonts/Montserrat/Montserrat-Thin.ttf"
  },
  "/fonts/Montserrat/Montserrat-ThinItalic.ttf": {
    "type": "font/ttf",
    "etag": "\"314c4-99iH/GtQFXCB/WAILSAznEM/mVU\"",
    "mtime": "2023-07-26T17:12:11.108Z",
    "size": 201924,
    "path": "../public/fonts/Montserrat/Montserrat-ThinItalic.ttf"
  },
  "/fonts/Mulish/Mulish-Italic-VariableFont_wght.ttf": {
    "type": "font/ttf",
    "etag": "\"35230-AY6r38jv+TOk2Sn9z1m+Cg8LC7U\"",
    "mtime": "2023-07-26T17:12:11.111Z",
    "size": 217648,
    "path": "../public/fonts/Mulish/Mulish-Italic-VariableFont_wght.ttf"
  },
  "/fonts/Mulish/Mulish-VariableFont_wght.ttf": {
    "type": "font/ttf",
    "etag": "\"335cc-IZ1tmfo8uigawvmDt91/NrmKngI\"",
    "mtime": "2023-07-26T17:12:11.113Z",
    "size": 210380,
    "path": "../public/fonts/Mulish/Mulish-VariableFont_wght.ttf"
  },
  "/fonts/PublicSans/PublicSans-Italic-VariableFont_wght.ttf": {
    "type": "font/ttf",
    "etag": "\"19df8-OzoOIL1h3t4g/h6antThdnMDal4\"",
    "mtime": "2023-07-26T17:12:11.115Z",
    "size": 105976,
    "path": "../public/fonts/PublicSans/PublicSans-Italic-VariableFont_wght.ttf"
  },
  "/fonts/PublicSans/PublicSans-VariableFont_wght.ttf": {
    "type": "font/ttf",
    "etag": "\"18cd8-njHlNDumAOXKjHoE+UzgakHAa08\"",
    "mtime": "2023-07-26T17:12:11.117Z",
    "size": 101592,
    "path": "../public/fonts/PublicSans/PublicSans-VariableFont_wght.ttf"
  },
  "/fonts/Righteous/OFL.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"11ae-3aBz4sO986loMWgWc60UATpKaog\"",
    "mtime": "2023-07-26T17:12:11.117Z",
    "size": 4526,
    "path": "../public/fonts/Righteous/OFL.txt"
  },
  "/fonts/Righteous/Righteous-Regular.ttf": {
    "type": "font/ttf",
    "etag": "\"9fbc-MSnitH4iTewILEFps5ax+iepV0k\"",
    "mtime": "2023-07-26T17:12:11.118Z",
    "size": 40892,
    "path": "../public/fonts/Righteous/Righteous-Regular.ttf"
  },
  "/images/button-bg/1.png": {
    "type": "image/png",
    "etag": "\"b3900-fyvNpvcv9gwJoxbf/iUxnMEuxVw\"",
    "mtime": "2023-07-26T17:12:11.172Z",
    "size": 735488,
    "path": "../public/images/button-bg/1.png"
  },
  "/images/button-bg/2.png": {
    "type": "image/png",
    "etag": "\"47754-EP5HKPCM7pfCS1lX1dAsoktbsR0\"",
    "mtime": "2023-07-26T17:12:11.174Z",
    "size": 292692,
    "path": "../public/images/button-bg/2.png"
  },
  "/images/button-bg/4.png": {
    "type": "image/png",
    "etag": "\"65caa-8ysjR/1nXESiyL5zndZMGhA3A/w\"",
    "mtime": "2023-07-26T17:12:11.178Z",
    "size": 416938,
    "path": "../public/images/button-bg/4.png"
  },
  "/images/news/news_1.png": {
    "type": "image/png",
    "etag": "\"32c4d-w/nJFw6QOf+2t4GTTQykS3TxyvE\"",
    "mtime": "2023-07-26T17:12:11.387Z",
    "size": 207949,
    "path": "../public/images/news/news_1.png"
  },
  "/images/news/news_2.png": {
    "type": "image/png",
    "etag": "\"44809-OFXNkp/pT2eAdqVnpU44Q5NxzFw\"",
    "mtime": "2023-07-26T17:12:11.389Z",
    "size": 280585,
    "path": "../public/images/news/news_2.png"
  },
  "/images/news/news_3.png": {
    "type": "image/png",
    "etag": "\"4a6e0-1m5Y9HhcY5jJfJZ/NdEwhvUBKAE\"",
    "mtime": "2023-07-26T17:12:11.391Z",
    "size": 304864,
    "path": "../public/images/news/news_3.png"
  },
  "/images/partners/p1.png": {
    "type": "image/png",
    "etag": "\"2282-ftchNyEUXKNv0W4NBaM/RQI9d4o\"",
    "mtime": "2023-07-26T17:12:11.392Z",
    "size": 8834,
    "path": "../public/images/partners/p1.png"
  },
  "/images/partners/p2.png": {
    "type": "image/png",
    "etag": "\"2a99-l8ngSFNwh/d3xI5dXVzeE6Lx6BA\"",
    "mtime": "2023-07-26T17:12:11.392Z",
    "size": 10905,
    "path": "../public/images/partners/p2.png"
  },
  "/images/partners/p3.png": {
    "type": "image/png",
    "etag": "\"2b12-jFx6qqQ39K6uzbPBjLRRJLMGqm8\"",
    "mtime": "2023-07-26T17:12:11.393Z",
    "size": 11026,
    "path": "../public/images/partners/p3.png"
  },
  "/images/partners/p4.png": {
    "type": "image/png",
    "etag": "\"29ef-2XuLMEvjKoPrkl46kMF/QG8NPp8\"",
    "mtime": "2023-07-26T17:12:11.393Z",
    "size": 10735,
    "path": "../public/images/partners/p4.png"
  },
  "/images/partners/p5.png": {
    "type": "image/png",
    "etag": "\"2989-2t3zwTVZuEjYmsGAUMj7cgq/JDQ\"",
    "mtime": "2023-07-26T17:12:11.394Z",
    "size": 10633,
    "path": "../public/images/partners/p5.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

function createSiteConfigStack() {
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    stack.push(input);
  }
  function get() {
    const siteConfig = {
      _context: {}
    };
    for (const o in stack) {
      for (const k in stack[o]) {
        const key = k;
        const val = stack[o][k];
        if (!k.endsWith("context") && typeof val !== "undefined") {
          siteConfig[k] = val;
          siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined")
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  return config;
}
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base);
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const origin = options.absolute ? options.siteUrl : "";
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  const isFileUrl = $url.pathname.includes(".");
  if (isFileUrl)
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function useSiteConfig(e) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  return e.context.siteConfig.get();
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = process.env.NITRO_PORT || process.env.PORT || (false);
  let protocol = cert && key || !false ? "https" : "http";
  if (!e) ; else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return `${protocol}://${host}${port}/`;
}

function updateSiteConfig(e, input) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  e.context.siteConfig.push(input);
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig().app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const _zRTlRU = defineEventHandler((e) => {
  if (!e.context.siteConfig) {
    const appConfig = useAppConfig();
    const nitroOrigin = useNitroOrigin(e);
    e.context.siteConfigNitroOrigin = nitroOrigin;
    const { public: publicRuntimeConfig } = useRuntimeConfig();
    updateSiteConfig(e, {
      _context: "nitro:init",
      url: nitroOrigin
    });
    updateSiteConfig(e, publicRuntimeConfig.site);
    if (appConfig.site) {
      updateSiteConfig(e, {
        _context: "app:config",
        ...appConfig.site
      });
    }
    if (e.context._nitro.routeRules.site) {
      updateSiteConfig(e, {
        _context: "route-rules",
        ...e.context._nitro.routeRules.site
      });
    }
  }
});

const _xraQWE = defineEventHandler(async (e) => {
  setHeader(e, "Content-Type", "application/xslt+xml");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { version, moduleConfig } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || void 0;
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the  <a href="nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it.',
    `URLs missing? Check the <a href="${withQuery("/api/__sitemap__/debug", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...moduleConfig.xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-5">${siteName} XML Sitemap</h1>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

async function resolveUrls(urls) {
  if (typeof urls === "function")
    urls = urls();
  urls = await urls;
  return urls;
}
async function resolveAsyncDataSources(input) {
  const { hasPrerenderedRoutesPayload, isNuxtContentDocumentDriven } = input.buildTimeMeta;
  const entries = [];
  entries.push({
    context: "pages",
    urls: input.pages
  });
  if (input.prerenderUrls) {
    entries.push({
      context: "prerender",
      urls: input.prerenderUrls
    });
  }
  entries.push({
    context: "nuxt-config",
    path: "urls",
    urls: await resolveUrls(input.moduleConfig.urls)
  });
  function doFetch(url) {
    const context = "api";
    const start = Date.now();
    let isHtmlResponse = false;
    return globalThis.$fetch(url, {
      responseType: "json",
      headers: {
        Accept: "application/json"
      },
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    }).then((urls) => {
      const timeTakenMs = Date.now() - start;
      if (isHtmlResponse) {
        entries.push({
          context,
          timeTakenMs,
          urls: [],
          path: url,
          error: "Received HTML response instead of JSON"
        });
      } else {
        entries.push({
          context,
          timeTakenMs,
          path: url,
          urls
        });
      }
    }).catch((err) => {
      entries.push({
        context,
        urls: [],
        path: url,
        error: err
      });
    });
  }
  const waitables = [];
  async function loadSitemapSources(sitemap) {
    if (sitemap.urls) {
      entries.push({
        context: "nuxt-config",
        path: `sitemaps.${sitemap.sitemapName}.urls`,
        urls: await resolveUrls(sitemap.urls)
      });
    }
    if (sitemap.dynamicUrlsApiEndpoint)
      waitables.push(doFetch(sitemap.dynamicUrlsApiEndpoint));
  }
  if (input.buildTimeMeta.hasApiRoutesUrl)
    waitables.push(doFetch(input.moduleConfig.dynamicUrlsApiEndpoint));
  if (!input.sitemap && typeof input.moduleConfig.sitemaps === "object") {
    for (const entry of Object.entries(input.moduleConfig.sitemaps)) {
      const [sitemapName, sitemap] = entry;
      await loadSitemapSources({
        sitemapName,
        ...sitemap
      });
    }
  } else if (input.sitemap) {
    await loadSitemapSources(input.sitemap);
  }
  if (hasPrerenderedRoutesPayload)
    waitables.push(doFetch(input.nitroUrlResolver("/__sitemap__/routes.json")));
  if (isNuxtContentDocumentDriven)
    waitables.push(doFetch("/api/__sitemap__/document-driven-urls"));
  await Promise.all(waitables);
  return entries;
}

function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, ...options }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = defu$1(item, res[k] || {});
  });
  return Object.values(res);
}

async function normaliseSitemapData(data, options) {
  const {
    defaults,
    exclude,
    include,
    autoLastmod,
    autoAlternativeLangPrefixes
  } = options.moduleConfig;
  const combinedInclude = [...options.sitemap?.include || [], ...include || []];
  const combinedExclude = [...options.sitemap?.exclude || [], ...exclude || []];
  const urlFilter = createFilter({ include: combinedInclude, exclude: combinedExclude });
  function resolve(s) {
    if (!s)
      return;
    s = typeof s === "string" ? s : s.toString();
    if (hasProtocol(s, { acceptRelative: true, strict: false }))
      return s;
    return options.canonicalUrlResolver(s);
  }
  const defaultEntryData = { ...defaults || {} };
  if (autoLastmod)
    defaultEntryData.lastmod = defaultEntryData.lastmod || /* @__PURE__ */ new Date();
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    e = defu$1(e, defaultEntryData);
    return e;
  }).map((e) => {
    const routeRules = options.getRouteRulesForPath(e.loc);
    if (routeRules.index === false)
      return false;
    return defu$1(routeRules.sitemap || {}, e);
  }).filter((e) => e && urlFilter(e.loc));
  if (Array.isArray(autoAlternativeLangPrefixes)) {
    entries.map((e) => {
      e.alternatives = e.alternatives || autoAlternativeLangPrefixes.map((prefix) => ({
        hreflang: prefix,
        href: joinURL(prefix, e.loc)
      }));
      return e;
    });
  }
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((a) => {
        a = { ...a };
        a.href = resolve(typeof a.href === "string" ? a.href : a.href.href);
        return a;
      }), "href");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        v.contentLoc = resolve(v.contentLoc);
        return v;
      });
    }
    return e;
  }
  function normaliseEntries(entries2) {
    return mergeOnKey(entries2.map(normaliseEntry), "loc").sort((a, b) => {
      if (a.loc > b.loc)
        return 1;
      if (a.loc < b.loc)
        return -1;
      return 0;
    }).sort((a, b) => {
      const aSegments = a.loc.split("/").length;
      const bSegments = b.loc.split("/").length;
      if (aSegments > bSegments)
        return 1;
      if (aSegments < bSegments)
        return -1;
      return 0;
    });
  }
  const ctx = { urls: normaliseEntries(entries), sitemapName: options.sitemap?.sitemapName || "sitemap" };
  if (options.callHook)
    await options.callHook(ctx);
  return normaliseEntries(ctx.urls);
}
function normaliseDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (!(d instanceof Date))
    return false;
  const z = (n) => `0${n}`.slice(-2);
  return `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}+00:00`;
}

const MaxSitemapSize = 1e3;

function wrapSitemapXml(input, { xsl, credits, version }) {
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by Nuxt Simple Sitemap V${version} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(options) {
  const sitemapsConfig = options.moduleConfig.sitemaps;
  const sources = await resolveAsyncDataSources(options);
  let entries = await normaliseSitemapData(sources.map((e) => e.urls).flat(), options);
  if (sitemapsConfig === true)
    entries = entries.slice(Number(options.sitemap?.sitemapName) * MaxSitemapSize, (Number(options.sitemap?.sitemapName) + 1) * MaxSitemapSize);
  const ctx = { urls: entries, sitemapName: options?.sitemap?.sitemapName || "sitemap" };
  await options.callHook?.(ctx);
  const resolveKey = (k) => {
    switch (k) {
      case "images":
        return "image";
      case "videos":
        return "video";
      default:
        return k;
    }
  };
  const handleArray = (key, arr) => {
    if (arr.length === 0)
      return false;
    key = resolveKey(key);
    if (key === "alternatives") {
      return arr.map((obj) => [
        `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
      ].join("\n")).join("\n");
    }
    return arr.map((obj) => [
      `        <${key}:${key}>`,
      ...Object.entries(obj).map(([sk, sv]) => `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`),
      `        </${key}:${key}>`
    ].join("\n")).join("\n");
  };
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ctx.urls?.map((e) => `    <url>
${Object.keys(e).map((k) => Array.isArray(e[k]) ? handleArray(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`).filter((l) => l !== false).join("\n")}
    </url>`) ?? [],
    "</urlset>"
  ], {
    xsl: options.moduleConfig.xsl ? options.relativeBaseUrlResolver(options.moduleConfig.xsl) : false,
    credits: options.moduleConfig.credits,
    version: options.buildTimeMeta.version
  });
}

async function setupCache(e, key) {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  const useCache = moduleConfig.runtimeCacheStorage && moduleConfig.cacheTtl && moduleConfig.cacheTtl > 0;
  const baseCacheKey = moduleConfig.runtimeCacheStorage === "default" ? `/cache/nuxt-simple-sitemap${buildTimeMeta.version}` : `/nuxt-simple-sitemap/${buildTimeMeta.version}`;
  const cache = prefixStorage(useStorage(), `${baseCacheKey}/sitemaps`);
  let xSitemapCacheHeader = "MISS";
  let xSitemapCacheExpires = 0;
  const purge = typeof getQuery$1(e).purge !== "undefined";
  let cachedSitemap = false;
  if (useCache && await cache.hasItem(key)) {
    const { value, expiresAt } = await cache.getItem(key);
    if (expiresAt > Date.now()) {
      if (purge) {
        xSitemapCacheHeader = "PURGE";
        await cache.removeItem(key);
      } else {
        xSitemapCacheHeader = "HIT";
        xSitemapCacheExpires = expiresAt;
        cachedSitemap = value;
      }
    } else {
      await cache.removeItem(key);
    }
  }
  setHeader(e, "x-sitemap-cache", xSitemapCacheHeader);
  setHeader(e, "x-sitemap-cache-expires", xSitemapCacheExpires.toString());
  return {
    cachedSitemap,
    cache: async (sitemap) => {
      if (useCache)
        await cache.setItem(key, { value: sitemap, expiresAt: Date.now() + (moduleConfig.cacheTtl || 0) });
    }
  };
}

const pages = [
  {
    "loc": "/calls",
    "lastmod": "2023-07-29T13:13:18.233Z"
  },
  {
    "loc": "/dashboard",
    "lastmod": "2023-07-26T18:37:39.828Z"
  },
  {
    "loc": "/dashboard/notifications",
    "lastmod": "2023-07-26T17:12:11.035Z"
  },
  {
    "loc": "/dashboard/settings",
    "lastmod": "2023-07-26T17:12:11.037Z"
  },
  {
    "loc": "/dashboard/shipments",
    "lastmod": "2023-07-26T17:12:11.038Z"
  },
  {
    "loc": "/dashboard/timeslots",
    "lastmod": "2023-07-26T17:12:11.039Z"
  },
  {
    "loc": "/",
    "lastmod": "2023-07-26T17:12:11.040Z"
  },
  {
    "loc": "/locations",
    "lastmod": "2023-08-01T00:24:29.005Z"
  },
  {
    "loc": "/login",
    "lastmod": "2023-07-26T17:12:11.040Z"
  },
  {
    "loc": "/privacy",
    "lastmod": "2023-07-26T17:12:11.041Z"
  },
  {
    "loc": "/reservation",
    "lastmod": "2023-07-26T17:12:11.041Z"
  },
  {
    "loc": "/schedule",
    "lastmod": "2023-07-30T10:45:01.028Z"
  },
  {
    "loc": "/services",
    "lastmod": "2023-08-01T00:59:32.626Z"
  },
  {
    "loc": "/services3",
    "lastmod": "2023-07-29T11:09:51.161Z"
  },
  {
    "loc": "/signup/activation",
    "lastmod": "2023-07-26T17:12:11.044Z"
  },
  {
    "loc": "/signup/arrow",
    "lastmod": "2023-07-26T17:12:11.046Z"
  },
  {
    "loc": "/signup/carrier",
    "lastmod": "2023-07-26T17:12:11.046Z"
  }
];

const _R03aAr = defineEventHandler(async (e) => {
  const { moduleConfig, buildTimeMeta } = useRuntimeConfig()["nuxt-simple-sitemap"];
  if (moduleConfig.sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  const { cachedSitemap, cache } = await setupCache(e, "sitemap", getQuery$1(e).purge);
  let sitemap = cachedSitemap;
  if (!cachedSitemap) {
    const nitro = useNitroApp();
    const callHook = async (ctx2) => {
      await nitro.hooks.callHook("sitemap:resolved", ctx2);
    };
    const canonicalQuery = getQuery$1(e).canonical;
    const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
    sitemap = await buildSitemap({
      moduleConfig,
      buildTimeMeta,
      nitroUrlResolver: createSitePathResolver(e, { canonical: false, absolute: true, withBase: true }),
      canonicalUrlResolver: createSitePathResolver(e, { canonical: isShowingCanonical || !false, absolute: true, withBase: true }),
      relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true }),
      getRouteRulesForPath,
      callHook,
      pages
    });
    const ctx = { sitemap, sitemapName: "sitemap" };
    await nitro.hooks.callHook("sitemap:output", ctx);
    sitemap = ctx.sitemap;
    await cache(sitemap);
  }
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  setHeader(e, "Cache-Control", "max-age=600, must-revalidate");
  return sitemap;
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    // Conditions
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    // Sort data
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    // Surround logic
    (data, params) => params.surround ? surround(data, params.surround) : data,
    // Skip first items
    (data, params) => params.skip ? data.slice(params.skip) : data,
    // Pick first items
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    // Remove unwanted fields
    (data, params) => apply(withoutKeys(params.without))(data),
    // Select only wanted fields
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0,
      meta: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]*)}/);
  const filenameTokens = lang.match(/\[([^\]]*)\]/);
  const meta = lang.replace(/^\w*\s*(\[[^\]]*\]|\{[^}]*\})?\s*(\[[^\]]*\]|\{[^}]*\})?\s*/, "");
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) && filenameTokens[1] ? filenameTokens[1] : void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      meta,
      code,
      className: [`language-${language}`]
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    // @ts-ignore
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const isSafeAttribute = (attribute, value) => {
  if (attribute.startsWith("on")) {
    console.warn(`[@nuxt/content] removing unsafe attribute: ${attribute}="${value}"`);
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.properties) {
      node.properties = Object.entries(node.properties).reduce((acc, [key, value]) => {
        if (isSafeAttribute(key, value)) {
          acc[key] = value;
        }
        return acc;
      }, {});
    }
    if (node.tagName?.startsWith("h") && node.properties.id) {
      node.properties.id = node.properties.id.replace(/-+/g, "-").replace(/-$/, "").replace(/^-/, "").replace(/^(\d)/, "_$1");
    }
    if (node.type === "element") {
      switch (node.tagName) {
        case "li": {
          let hasPreviousParagraph = false;
          node.children = node.children?.flatMap((child) => {
            if (child.tagName === "p") {
              if (hasPreviousParagraph) {
                child.children.unshift({
                  type: "element",
                  tagName: "br",
                  properties: {}
                });
              }
              hasPreviousParagraph = true;
              return child.children;
            }
            return child;
          });
          break;
        }
        case "component-slot":
          node.tagName = "template";
          break;
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return void 0;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return void 0;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const grammar = {
  "information_for_contributors": [
    "This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
    "If you want to provide a fix or improvement, please create a pull request against the original repository.",
    "Once accepted there, we are happy to receive an update request."
  ],
  "version": "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json",
  "name": "markdown",
  "injectionSelector": "L:text.html.markdown",
  "scopeName": "text.markdown.mdc",
  "patterns": [
    {
      "include": "text.html.markdown#frontMatter"
    },
    {
      "include": "#component_block"
    },
    {
      "include": "#block"
    }
  ],
  "repository": {
    "block": {
      "comment": "Same as `text.html.markdown#block`, but without `raw_block`",
      "patterns": [
        {
          "include": "#component_block"
        },
        {
          "include": "text.html.markdown#separator"
        },
        {
          "include": "#heading"
        },
        {
          "include": "#blockquote"
        },
        {
          "include": "#lists"
        },
        {
          "include": "#paragraph"
        },
        {
          "include": "text.html.markdown#fenced_code_block"
        },
        {
          "include": "text.html.markdown#link-def"
        },
        {
          "include": "text.html.markdown#html"
        }
      ]
    },
    "inline": {
      "patterns": [
        {
          "include": "#component_inline"
        },
        {
          "include": "#span"
        },
        {
          "include": "#markdown_attributes"
        }
      ]
    },
    "markdown_attributes": {
      "match": "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.component.attribute",
      "captures": {
        "4": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "span": {
      "match": "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
      "name": "markup.component.span",
      "captures": {
        "2": {
          "name": "string.other.link.description.title.markdown"
        },
        "4": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "attributes": {
      "match": "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.attributes",
      "captures": {
        "3": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "component_inline": {
      "match": "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
      "name": "markup.component.inline",
      "captures": {
        "2": {
          "name": "punctuation.definition.tag.start.component"
        },
        "3": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        },
        "6": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "7": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "8": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "component_block": {
      "begin": "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
      "name": "markup.component.block",
      "end": "(^|\\G)(\\2)(\\3)\\s*$",
      "beginCaptures": {
        "4": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      },
      "patterns": [
        {
          "include": "#content"
        }
      ]
    },
    "content": {
      "begin": "(^|\\G)(\\s*)(.*)",
      "while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
      "contentName": "meta.embedded.block.component",
      "patterns": [
        {
          "begin": "(^|\\G)(\\s*)(-{3})(\\s*)$",
          "end": "(^|\\G)(\\s*(-{3})(\\s*)$)",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "match": "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "name": "comment.block.html"
            }
          }
        },
        {
          "comment": "Block Repository created to disable 4-space raw block inside components",
          "include": "#block"
        }
      ]
    },
    "attribute": {
      "patterns": [
        {
          "match": `(?x)
  (
    ([^=><\\s]*)  # attribute name
    (             # attribute value
        =["]([^"]*)(["])|[']([^']*)(['])
      | =[^\\s'"]*
    )?
    \\s*
  )`,
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "patterns": [
                {
                  "include": "#attribute-interior"
                }
              ]
            }
          }
        }
      ]
    },
    "attribute-interior": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
      "patterns": [
        {
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.key-value.html"
            }
          },
          "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
          "patterns": [
            {
              "match": "([^\\s\"'=<>`/]|/(?!>))+",
              "name": "string.unquoted.html"
            },
            {
              "begin": '"',
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": '"',
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.double.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.single.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "match": "=",
              "name": "invalid.illegal.unexpected-equals-sign.html"
            }
          ]
        }
      ]
    },
    "entities": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "912": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
          "match": "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
          "name": "constant.character.entity.named.$2.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[0-9]+(;)",
          "name": "constant.character.entity.numeric.decimal.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[xX][0-9a-fA-F]+(;)",
          "name": "constant.character.entity.numeric.hexadecimal.html"
        },
        {
          "match": "&(?=[a-zA-Z0-9]+;)",
          "name": "invalid.illegal.ambiguous-ampersand.html"
        }
      ]
    },
    "heading": {
      "match": "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
      "captures": {
        "1": {
          "patterns": [
            {
              "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.6.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.5.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.4.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.3.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.2.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.1.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            }
          ]
        }
      },
      "name": "markup.heading.markdown",
      "patterns": [
        {
          "include": "text.html.markdown#inline"
        }
      ]
    },
    "heading-setext": {
      "patterns": [
        {
          "match": "^(={3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.1.markdown"
        },
        {
          "match": "^(-{3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.2.markdown"
        }
      ]
    },
    "lists": {
      "patterns": [
        {
          "begin": "(^|\\G)([ ]*)([*+-])([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "comment": "Currently does not support un-indented second lines.",
          "name": "markup.list.unnumbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        },
        {
          "begin": "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "name": "markup.list.numbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        }
      ]
    },
    "paragraph": {
      "begin": "(^|\\G)[ ]*(?=\\S)",
      "name": "meta.paragraph.markdown",
      "patterns": [
        {
          "include": "#inline"
        },
        {
          "include": "text.html.markdown#inline"
        },
        {
          "include": "text.html.derivative"
        },
        {
          "include": "#heading-setext"
        }
      ],
      "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
    },
    "blockquote": {
      "begin": "(^|\\G)[ ]*(>) ?",
      "captures": {
        "2": {
          "name": "punctuation.definition.quote.begin.markdown"
        }
      },
      "name": "markup.quote.markdown",
      "patterns": [
        {
          "include": "#block"
        }
      ],
      "while": "(^|\\G)\\s*(>) ?"
    }
  }
};
const mdcTMLanguage = grammar;

const logger = consola.withTag("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang));
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        theme: theme?.default || theme || "dark-plus",
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          {
            id: "md",
            scopeName: "text.markdown.mdc",
            path: "mdc.tmLanguage.json",
            aliases: ["markdown", "md", "mdc"],
            grammar: mdcTMLanguage
          }
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const splitCodeToLines = (code) => {
    const lines = code.split(/\r\n|\r|\n/);
    return [...lines.map((line) => [{ content: line }])];
  };
  const getHighlightedTokens = async (code, lang, theme2) => {
    const highlighter = await getShikiHighlighter();
    code = code.replace(/\n+$/, "");
    lang = resolveLang(lang || "")?.id || lang;
    theme2 = resolveTheme(theme2 || "") || { default: highlighter.getTheme() };
    if (!lang) {
      return splitCodeToLines(code);
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      const languageRegistration = resolveLang(lang);
      if (languageRegistration) {
        await highlighter.loadLanguage(languageRegistration);
      } else {
        logger.warn(`Language '${lang}' is not supported by shiki. Skipping highlight.`);
        return splitCodeToLines(code);
      }
    }
    const newThemes = Object.values(theme2).filter((t) => !highlighter.getLoadedThemes().includes(t));
    if (newThemes.length) {
      await Promise.all(newThemes.map(highlighter.loadTheme));
    }
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3, { includeExplanation: false }).map((line) => line.map((token) => ({
        content: token.content,
        style: {
          [key]: {
            color: token.color,
            fontStyle: token.fontStyle
          }
        }
      })));
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    const lines = await getHighlightedTokens(code, lang, theme2);
    const { highlights = [], styleMap = {} } = opts2 || {};
    return lines.map((line, lineIndex) => {
      if (lineIndex !== lines.length - 1) {
        if (line.length === 0) {
          line.push({ content: "" });
        }
        line[line.length - 1].content += "\n";
      }
      return {
        type: "element",
        tag: "span",
        props: {
          class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim(),
          line: lineIndex + 1
        },
        children: line.map(tokenSpan)
      };
    });
    function getSpanProps(token) {
      if (!token.style) {
        return {};
      }
      const key = Object.values(token.style).map((themeStyle) => Object.values(themeStyle).join("")).join("");
      if (!styleMap[key]) {
        styleMap[key] = {
          style: token.style,
          // Using the hash value of the style as the className,
          // ensure that the className remains stable over multiple compilations,
          // which facilitates content caching.
          className: "ct-" + hash(key)
        };
      }
      return { class: styleMap[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getSpanProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  };
  const getHighlightedCode = async (code, lang, theme2, opts2) => {
    const styleMap = opts2?.styleMap || {};
    const highlights = opts2?.highlights || [];
    const ast = await getHighlightedAST(code, lang, theme2, { styleMap, highlights });
    function renderNode(node) {
      if (node.type === "text") {
        return node.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const children = node.children.map(renderNode).join("");
      return `<${node.tag} class="${node.props.class}">${children}</${node.tag}>`;
    }
    return {
      code: ast.map(renderNode).join(""),
      styles: generateStyles(styleMap)
    };
  };
  const generateStyles = (styleMap) => {
    const styles = [];
    for (const styleToken of Object.values(styleMap)) {
      const defaultStyle = styleToken.style.default;
      const hasColor = !!defaultStyle?.color;
      const hasBold = isBold(defaultStyle);
      const hasItalic = isItalic(defaultStyle);
      const hasUnderline = isUnderline(defaultStyle);
      const themeStyles = Object.entries(styleToken.style).map(([variant, style]) => {
        const styleText = [
          // If the default theme has a style, but the current theme does not have one,
          // we need to override to reset style
          ["color", style.color || (hasColor ? "unset" : "")],
          ["font-weight", isBold(style) ? "bold" : hasBold ? "unset" : ""],
          ["font-style", isItalic(style) ? "italic" : hasItalic ? "unset" : ""],
          ["text-decoration", isUnderline(style) ? "bold" : hasUnderline ? "unset" : ""]
        ].filter((kv) => kv[1]).map((kv) => kv.join(":") + ";").join("");
        return { variant, styleText };
      });
      const defaultThemeStyle = themeStyles.find((themeStyle) => themeStyle.variant === "default");
      themeStyles.forEach((themeStyle) => {
        if (themeStyle.variant === "default") {
          styles.push(`.${styleToken.className}{${themeStyle.styleText}}`);
        } else if (themeStyle.styleText !== defaultThemeStyle?.styleText) {
          styles.push(`.${themeStyle.variant} .${styleToken.className}{${themeStyle.styleText}}`);
        }
      });
    }
    return styles.join("\n");
  };
  return {
    getHighlightedTokens,
    getHighlightedAST,
    getHighlightedCode,
    generateStyles
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const right = {
    key: line1.key,
    tokens: line1.tokens.slice()
  };
  const left = {
    key: line2.key,
    tokens: line2.tokens.slice()
  };
  let index = 0;
  while (index < right.tokens.length) {
    const rightToken = right.tokens[index];
    const leftToken = left.tokens[index];
    if (rightToken.content === leftToken.content) {
      mergedTokens.push({
        content: rightToken.content,
        style: {
          ...right.tokens[index].style,
          ...left.tokens[index].style
        }
      });
      index += 1;
      continue;
    }
    if (rightToken.content.startsWith(leftToken.content)) {
      const nextRightToken = {
        ...rightToken,
        content: rightToken.content.slice(leftToken.content.length)
      };
      rightToken.content = leftToken.content;
      right.tokens.splice(index + 1, 0, nextRightToken);
      continue;
    }
    if (leftToken.content.startsWith(rightToken.content)) {
      const nextLeftToken = {
        ...leftToken,
        content: leftToken.content.slice(rightToken.content.length)
      };
      leftToken.content = rightToken.content;
      left.tokens.splice(index + 1, 0, nextLeftToken);
      continue;
    }
    throw new Error("Unexpected token");
  }
  return mergedTokens;
}
function isBold(style) {
  return style && style.fontStyle === FontStyle.Bold;
}
function isItalic(style) {
  return style && style.fontStyle === FontStyle.Italic;
}
function isUnderline(style) {
  return style && style.fontStyle === FontStyle.Underline;
}
function hash(str) {
  return Array.from(str).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0).toString().slice(-6);
}

const shiki = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const shikiHighlighter = useShikiHighlighter(options);
    await Promise.all([
      highlight(content.body),
      highlight(content.excerpt)
    ]);
    return content;
    async function highlight(document) {
      if (!document) {
        return;
      }
      const styleMap = {};
      const codeBlocks = [];
      const inlineCodes = [];
      visit(
        document,
        (node) => node?.tag === "code" && node?.props.code || node?.tag === "code-inline" && (node.props?.lang || node.props?.language),
        (node) => {
          if (node?.tag === "code") {
            codeBlocks.push(node);
          } else if (node?.tag === "code-inline") {
            inlineCodes.push(node);
          }
        }
      );
      await Promise.all(codeBlocks.map((node) => highlightBlock(node, styleMap)));
      await Promise.all(inlineCodes.map((node) => highlightInline(node, styleMap)));
      if (Object.values(styleMap).length) {
        document?.children.push({
          type: "element",
          tag: "style",
          children: [{ type: "text", value: shikiHighlighter.generateStyles(styleMap) }]
        });
      }
    }
    async function highlightInline(node, styleMap) {
      const code = node.children[0].value;
      const lines = await shikiHighlighter.getHighlightedAST(code, node.props.lang || node.props.language, options.theme, { styleMap });
      node.children = lines[0].children;
      node.props = Object.assign(node.props || {}, { class: "colored" });
      return node;
    }
    async function highlightBlock(node, styleMap) {
      const { code, language: lang, highlights = [] } = node.props;
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = await shikiHighlighter.getHighlightedAST(code, lang, options.theme, { styleMap, highlights });
      return node;
    }
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  shiki,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replaceAll(":", "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash = hash$1({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const queryBuilder = createQuery(createServerQueryFetch(event), typeof query !== "string" ? query || {} : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _VPXwca = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (_dir && !Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _7IZhP7 = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _pRoeYN = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _B9ilc7 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const ipxOptions = {
    ...opts,
    // TODO: Switch to storage API when ipx supports it
    dir: opts.dir ? fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url)) : void 0
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_IdE5q8 = () => import('../get_province.post.mjs');
const _lazy_nNCYbC = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/get_province', handler: _lazy_IdE5q8, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_nNCYbC, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _zRTlRU, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _xraQWE, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _R03aAr, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _VPXwca, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _VPXwca, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _VPXwca, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1690851577100.json', handler: _7IZhP7, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _pRoeYN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _pRoeYN, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _pRoeYN, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _B9ilc7, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_nNCYbC, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useNitroApp as a, getRouteRules as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
