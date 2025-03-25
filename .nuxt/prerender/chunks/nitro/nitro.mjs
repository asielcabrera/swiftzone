import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, appendResponseHeader, removeResponseHeader, createError, getResponseStatus, getQuery as getQuery$1, getRouterParam, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ufo/dist/index.mjs';
import destr from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest, hash as hash$1 } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename, isAbsolute } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/index.mjs';
import { consola } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/consola/dist/index.mjs';
import localAdapter from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ipx/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
const normalizeFsKey = item => decodeURIComponent(item.replaceAll(':', '_'));

/**
 * @param {{ base: string }} opts
 */
const _47Users_47spider_47Downloads_47SWIFTZONE_47WebSite_47swiftzone_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47utils_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1000 });

  return {
    ...fs, // fall back to file system - only the bottom three methods are used in renderer
    async setItem (key, value, opts) {
      await Promise.all([
        fs.setItem?.(normalizeFsKey(key), value, opts),
        lru.setItem?.(key, value, opts),
      ]);
    },
    async hasItem (key, opts) {
      return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
    },
    async getItem (key, opts) {
      return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
    },
  }
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Users_47spider_47Downloads_47SWIFTZONE_47WebSite_47swiftzone_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47utils_47cache_45driver_46js({"driver":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js","base":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/.nuxt/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
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
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
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
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
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
    const response = await _cachedHandler(
      event
    );
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
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
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

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons",
      "Logo"
    ],
    "fetchTimeout": 1500,
    "customCollections": [
      "Logo"
    ]
  }
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "51d49ac8-2542-4760-8f7e-fef8194e2c70",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/__nuxt_content/content/sql_dump": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "content": {
      "wsUrl": ""
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {}
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "content": {
    "databaseVersion": "v3.3.0",
    "version": "3.4.0",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
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

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
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
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

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
const _SOJo80 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
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
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const checksums = {
  "content": "v3.3.0--kVyh9ytt1LZ570XJ2fTn6WUq8mXAgyzxlKCNZbrOWOg"
};
const checksumsStructure = {
  "content": "bgIYhpjRuV8zbHJE_CfelwKpJ_Td6YuGJwixiek8lmI"
};
const tables = {
  "content": "_content_content",
  "info": "_content_info"
};
const contentManifest = {
  "content": {
    "type": "page",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "path": "string",
      "title": "string",
      "description": "string",
      "seo": "json",
      "body": "json",
      "navigation": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

async function fetchDatabase(event, collection) {
  return await $fetch(`/__nuxt_content/${collection}/sql_dump`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    responseType: "text",
    headers: { "content-type": "text/plain" },
    query: { v: checksums[String(collection)], t: void 0 }
  });
}

const collections = {
  'ci': () => import('../_/icons.mjs').then(m => m.default),
  'heroicons': () => import('../_/icons2.mjs').then(m => m.default),
  'lucide': () => import('../_/icons3.mjs').then(m => m.default),
  'material-symbols': () => import('../_/icons4.mjs').then(m => m.default),
  'uil': () => import('../_/icons5.mjs').then(m => m.default),
  'Logo': () => ({"prefix":"Logo","icons":{"dark":{"left":-557.23,"top":-584.173,"width":1105.0031,"height":886.9929,"body":"<g transform=\"matrix(1, 0, 0, 1, 131.1199951171875, -1152.8699951171875)\" id=\"object-0\"><path d=\"M 200.653 664.697 L 204.653 665.697 L 219.653 674.697 L 231.653 683.697 L 242.653 692.697 L 256.653 704.697 L 270.653 717.694 L 278.653 724.694 L 291.653 736.694 L 315.653 760.694 L 322.653 768.694 L 329.653 775.694 L 336.653 783.694 L 345.653 793.694 L 352.653 801.694 L 364.653 814.694 L 386.653 838.694 L 394.653 848.694 L 405.653 861.694 L 414.653 874.694 L 416.653 879.694 L 415.653 886.694 L 403.653 922.694 L 391.653 957.694 L 378.653 992.694 L 360.653 1039.69 L 348.653 1067.69 L 328.653 1114.69 L 322.653 1130.69 L 319.653 1130.69 L 319.653 1117.69 L 336.653 1032.69 L 343.653 992.694 L 349.653 956.694 L 363.653 856.694 L 363.653 850.694 L 356.653 842.694 L 349.653 835.694 L 342.653 830.694 L 341.653 850.694 L 332.653 924.694 L 319.653 1003.69 L 310.653 1054.69 L 304.653 1091.69 L 302.653 1106.69 L 300.653 1109.69 L 298.653 1099.69 L 293.653 1055.69 L 288.653 1005.69 L 279.653 936.694 L 267.653 863.694 L 256.653 806.694 L 246.653 759.694 L 239.653 735.694 L 235.653 727.694 L 227.653 719.694 L 210.653 709.697 L 214.653 722.694 L 223.653 757.694 L 233.653 802.694 L 243.653 851.694 L 252.653 902.694 L 259.653 946.694 L 264.653 986.694 L 270.653 1038.69 L 273.653 1073.69 L 275.653 1113.69 L 275.653 1137.69 L 273.653 1136.69 L 259.653 1093.69 L 242.653 1044.69 L 229.653 1009.69 L 210.653 960.694 L 198.653 931.694 L 187.653 906.694 L 181.653 893.694 L 168.653 865.694 L 158.653 844.694 L 148.653 825.694 L 136.653 802.694 L 123.653 779.694 L 111.653 757.694 L 104.653 747.694 L 103.653 746.694 L 86.653 747.694 L 21.653 756.694 L -10.347 762.694 L -24.347 765.694 L -32.347 765.694 L -34.347 764.694 L -34.347 762.694 L -9.347 753.694 L 31.653 738.694 L 80.653 718.694 L 104.653 708.697 L 140.653 692.697 L 175.653 676.697 L 191.653 668.697 L 200.653 664.697 Z\" style=\"fill: rgb(26, 83, 29);\"/><path d=\"M -477.35 665.697 L -471.35 666.697 L -435.35 682.697 L -398.35 699.697 L -364.35 714.694 L -310.35 736.694 L -265.35 752.694 L -241.35 761.694 L -239.35 762.694 L -239.35 765.694 L -248.35 765.694 L -288.35 757.694 L -309.35 753.694 L -357.35 747.694 L -377.35 746.694 L -379.35 750.694 L -391.35 771.694 L -404.35 794.694 L -417.35 818.694 L -427.35 837.694 L -435.35 853.694 L -452.35 890.694 L -462.35 912.694 L -473.35 938.694 L -484.35 965.694 L -495.35 993.694 L -505.35 1019.69 L -518.35 1053.69 L -527.35 1077.69 L -536.35 1106.69 L -543.35 1132.69 L -545.35 1134.69 L -546.35 1133.69 L -548.35 1115.69 L -548.35 1101.69 L -542.35 1037.69 L -537.35 997.694 L -531.35 943.694 L -522.35 887.694 L -513.35 840.694 L -504.35 795.694 L -488.35 727.694 L -484.35 712.697 L -484.35 709.697 L -495.35 717.694 L -507.35 726.694 L -510.35 729.694 L -515.35 745.694 L -529.35 806.694 L -538.35 854.694 L -544.35 891.694 L -550.35 926.694 L -558.35 985.694 L -564.35 1041.69 L -569.35 1094.69 L -571.35 1107.69 L -573.35 1109.69 L -579.35 1077.69 L -589.35 1019.69 L -602.35 942.694 L -611.35 868.694 L -613.35 853.694 L -614.35 830.694 L -623.35 837.694 L -632.35 845.694 L -634.35 848.694 L -634.35 863.694 L -628.35 913.694 L -622.35 953.694 L -616.35 989.694 L -607.35 1038.69 L -603.35 1059.69 L -598.35 1087.69 L -590.35 1125.69 L -590.35 1135.69 L -593.35 1132.69 L -605.35 1103.69 L -619.35 1073.69 L -631.35 1042.69 L -642.35 1015.69 L -658.35 972.694 L -672.35 932.694 L -684.35 897.694 L -688.35 882.694 L -688.35 876.694 L -680.35 865.694 L -668.35 851.694 L -659.35 840.694 L -647.35 826.694 L -635.35 813.694 L -628.35 805.694 L -617.35 793.694 L -610.35 785.694 L -596.35 770.694 L -584.35 757.694 L -552.35 725.694 L -544.35 718.694 L -531.35 706.697 L -517.35 694.697 L -505.35 684.697 L -486.35 670.697 L -477.35 665.697 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-1\"/><path d=\"M 88.653 768.694 L 93.653 770.694 L 103.653 787.694 L 112.653 803.694 L 120.653 817.694 L 147.653 871.694 L 163.653 904.694 L 179.653 940.694 L 193.653 976.694 L 202.653 998.694 L 199.653 999.694 L 180.653 988.694 L 151.653 975.694 L 115.653 963.694 L 91.653 957.694 L 51.653 949.694 L 42.653 947.694 L 39.653 944.694 L 24.653 907.694 L 25.653 905.694 L 56.653 905.694 L 79.653 907.694 L 111.653 912.694 L 136.653 918.694 L 143.653 920.694 L 137.653 904.694 L 133.653 896.694 L 127.653 893.694 L 88.653 886.694 L 61.653 883.694 L 15.653 882.694 L 11.653 873.694 L 1.653 844.694 L 1.653 840.694 L 26.653 837.694 L 47.653 835.694 L 64.653 834.694 L 103.653 833.694 L 96.653 813.694 L 94.653 812.694 L 58.653 813.694 L 28.653 815.694 L -6.347 820.694 L -9.347 816.694 L -19.347 790.694 L -19.347 785.694 L 4.653 780.694 L 57.653 772.694 L 88.653 768.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-2\"/><path d=\"M 218.653 568.697 L 223.653 569.697 L 234.653 582.697 L 243.653 592.697 L 252.653 603.697 L 266.653 621.697 L 276.653 634.697 L 288.653 650.697 L 301.653 668.697 L 312.653 684.697 L 322.653 699.697 L 336.653 721.694 L 353.653 749.694 L 365.653 769.694 L 376.653 790.694 L 379.653 799.694 L 375.653 797.694 L 363.653 783.694 L 353.653 772.694 L 344.653 761.694 L 332.653 748.694 L 321.653 736.694 L 309.653 724.694 L 301.653 717.694 L 294.653 710.697 L 286.653 703.697 L 274.653 692.697 L 263.653 683.697 L 251.653 672.697 L 229.653 654.697 L 214.653 642.697 L 207.653 638.697 L 183.653 649.697 L 148.653 665.697 L 108.653 683.697 L 77.653 696.697 L 41.653 711.697 L 11.653 723.694 L -31.347 739.694 L -51.347 746.694 L -53.347 746.694 L -52.347 739.694 L -38.347 706.697 L -31.347 700.697 L -8.347 689.697 L 11.653 680.697 L 41.653 666.697 L 70.653 652.697 L 90.653 642.697 L 109.653 632.697 L 136.653 618.697 L 159.653 605.697 L 185.653 590.697 L 200.653 580.697 L 213.653 571.697 L 218.653 568.697 Z\" style=\"fill: rgb(26, 83, 29);\"/><path d=\"M -494.35 568.697 L -490.35 569.697 L -475.35 579.697 L -453.35 592.697 L -438.35 601.697 L -413.35 615.697 L -390.35 628.697 L -374.35 636.697 L -333.35 657.697 L -304.35 671.697 L -275.35 684.697 L -247.35 697.697 L -235.35 703.697 L -229.35 715.694 L -219.35 741.694 L -220.35 745.694 L -229.35 744.694 L -257.35 733.694 L -302.35 716.694 L -339.35 701.697 L -383.35 682.697 L -403.35 673.697 L -438.35 657.697 L -464.35 645.697 L -478.35 639.697 L -482.35 638.697 L -495.35 649.697 L -506.35 658.697 L -519.35 669.697 L -529.35 677.697 L -543.35 689.697 L -556.35 701.697 L -564.35 708.697 L -571.35 715.694 L -579.35 722.694 L -611.35 754.694 L -612.35 756.694 L -614.35 756.694 L -616.35 760.694 L -625.35 770.694 L -634.35 781.694 L -642.35 790.694 L -647.35 796.694 L -649.35 796.694 L -647.35 787.694 L -636.35 766.694 L -612.35 727.694 L -596.35 702.697 L -586.35 686.697 L -566.35 658.697 L -555.35 643.697 L -540.35 623.697 L -529.35 610.697 L -518.35 596.697 L -507.35 583.697 L -498.35 573.697 L -494.35 568.697 Z\" style=\"fill: rgb(26, 83, 29);\"/><path d=\"M -364.35 769.694 L -354.35 769.694 L -310.35 775.694 L -275.35 781.694 L -254.35 785.694 L -252.35 786.694 L -253.35 792.694 L -264.35 819.694 L -268.35 820.694 L -286.35 817.694 L -315.35 814.694 L -361.35 812.694 L -367.35 812.694 L -378.35 835.694 L -329.35 835.694 L -273.35 840.694 L -274.35 846.694 L -281.35 865.694 L -288.35 882.694 L -292.35 884.694 L -299.35 883.694 L -330.35 883.694 L -354.35 885.694 L -392.35 891.694 L -403.35 894.694 L -408.35 902.694 L -413.35 913.694 L -415.35 920.694 L -389.35 913.694 L -353.35 907.694 L -322.35 905.694 L -298.35 905.694 L -299.35 912.694 L -311.35 943.694 L -315.35 948.694 L -336.35 951.694 L -373.35 959.694 L -402.35 967.694 L -424.35 975.694 L -447.35 985.694 L -460.35 992.694 L -470.35 998.694 L -474.35 997.694 L -460.35 963.694 L -450.35 938.694 L -438.35 910.694 L -426.35 884.694 L -418.35 868.694 L -408.35 847.694 L -388.35 809.694 L -375.35 786.694 L -364.35 769.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-3\"/><path d=\"M -295.35 1265.69 L -291.35 1265.69 L -281.35 1279.69 L -270.35 1292.69 L -259.35 1306.69 L -250.35 1316.69 L -242.35 1326.69 L -230.35 1339.69 L -223.35 1347.69 L -214.35 1356.69 L -206.35 1363.69 L -196.35 1372.69 L -174.35 1390.69 L -160.35 1401.69 L -150.35 1409.69 L -138.35 1417.69 L -133.35 1416.69 L -122.35 1409.69 L -106.35 1397.69 L -93.347 1387.69 L -82.347 1377.69 L -71.347 1368.69 L -61.347 1359.69 L -33.347 1331.69 L -24.347 1320.69 L -11.347 1305.69 L -3.347 1296.69 L 8.653 1279.69 L 16.653 1268.69 L 18.653 1265.69 L 22.653 1266.69 L 54.653 1287.69 L 53.653 1292.69 L 44.653 1303.69 L 32.653 1316.69 L 25.653 1324.69 L 3.653 1346.69 L 1.653 1346.69 L -0.347 1350.69 L -26.347 1374.69 L -38.347 1385.69 L -52.347 1397.69 L -66.347 1408.69 L -82.347 1421.69 L -101.35 1434.69 L -112.35 1442.69 L -133.35 1455.69 L -140.35 1454.69 L -162.35 1440.69 L -174.35 1432.69 L -193.35 1418.69 L -202.35 1411.69 L -213.35 1402.69 L -239.35 1380.69 L -253.35 1368.69 L -260.35 1361.69 L -268.35 1354.69 L -305.35 1317.69 L -314.35 1306.69 L -325.35 1294.69 L -328.35 1290.69 L -327.35 1287.69 L -309.35 1276.69 L -302.35 1270.69 L -295.35 1265.69 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-4\"/><path d=\"M -136.35 1244.69 L -132.35 1246.69 L -122.35 1259.69 L -109.35 1275.69 L -100.35 1286.69 L -84.347 1303.69 L -68.347 1319.69 L -68.347 1321.69 L -64.347 1323.69 L -63.347 1329.69 L -71.347 1336.69 L -84.347 1349.69 L -92.347 1356.69 L -103.35 1366.69 L -114.35 1375.69 L -127.35 1386.69 L -134.35 1392.69 L -139.35 1390.69 L -152.35 1379.69 L -163.35 1370.69 L -177.35 1358.69 L -192.35 1345.69 L -205.35 1333.69 L -210.35 1328.69 L -209.35 1324.69 L -201.35 1317.69 L -180.35 1296.69 L -171.35 1285.69 L -164.35 1278.69 L -153.35 1264.69 L -144.35 1253.69 L -137.35 1245.69 L -136.35 1244.69 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-5\"/><path d=\"M -207.35 777.694 L -203.35 779.694 L -193.35 800.694 L -176.35 839.694 L -152.35 895.694 L -148.35 907.694 L -147.35 913.694 L -146.35 983.694 L -148.35 986.694 L -159.35 972.694 L -169.35 959.694 L -182.35 940.694 L -192.35 925.694 L -205.35 904.694 L -215.35 887.694 L -235.35 851.694 L -243.35 837.694 L -244.35 835.694 L -243.35 826.694 L -231.35 795.694 L -227.35 789.694 L -219.35 784.694 L -207.35 777.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-6\"/><path d=\"M -66.347 778.694 L -61.347 780.694 L -53.347 784.694 L -44.347 788.694 L -38.347 800.694 L -30.347 822.694 L -29.347 826.694 L -29.347 836.694 L -42.347 862.694 L -50.347 876.694 L -65.347 902.694 L -72.347 913.694 L -96.347 949.694 L -104.35 960.694 L -117.35 977.694 L -124.35 984.694 L -125.35 984.694 L -125.35 913.694 L -123.35 902.694 L -116.35 885.694 L -108.35 869.694 L -92.347 832.694 L -77.347 797.694 L -70.347 783.694 L -66.347 778.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-7\"/><path d=\"M -86.347 1175.69 L -82.347 1176.69 L -68.347 1190.69 L -60.347 1197.69 L -43.347 1213.69 L -30.347 1224.69 L -17.347 1234.69 L 0.653 1247.69 L 2.653 1251.69 L -11.347 1269.69 L -21.347 1282.69 L -32.347 1295.69 L -43.347 1309.69 L -48.347 1308.69 L -63.347 1293.69 L -70.347 1285.69 L -84.347 1270.69 L -93.347 1259.69 L -102.35 1249.69 L -109.35 1241.69 L -120.35 1228.69 L -118.35 1223.69 L -101.35 1197.69 L -89.347 1178.69 L -86.347 1175.69 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-8\"/><path d=\"M -187.35 1175.69 L -184.35 1175.69 L -163.35 1207.69 L -152.35 1225.69 L -151.35 1228.69 L -158.35 1236.69 L -169.35 1248.69 L -179.35 1259.69 L -186.35 1267.69 L -195.35 1277.69 L -206.35 1289.69 L -212.35 1296.69 L -214.35 1296.69 L -216.35 1300.69 L -225.35 1309.69 L -230.35 1307.69 L -243.35 1291.69 L -252.35 1280.69 L -263.35 1267.69 L -274.35 1251.69 L -272.35 1247.69 L -258.35 1237.69 L -245.35 1227.69 L -232.35 1216.69 L -221.35 1207.69 L -213.35 1199.69 L -205.35 1192.69 L -192.35 1179.69 L -187.35 1175.69 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-9\"/><path d=\"M -258.35 862.694 L -255.35 863.694 L -238.35 891.694 L -221.35 920.694 L -207.35 942.694 L -196.35 958.694 L -183.35 976.694 L -171.35 992.694 L -162.35 1003.69 L -147.35 1018.69 L -146.35 1061.69 L -146.35 1082.69 L -149.35 1082.69 L -158.35 1071.69 L -172.35 1054.69 L -181.35 1041.69 L -193.35 1024.69 L -207.35 1002.69 L -217.35 987.694 L -231.35 964.694 L -244.35 941.694 L -258.35 916.694 L -267.35 900.694 L -268.35 898.694 L -268.35 891.694 L -259.35 864.694 L -258.35 862.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-10\"/><path d=\"M -16.347 862.694 L -13.347 863.694 L -3.347 892.694 L -4.347 898.694 L -24.347 936.694 L -34.347 953.694 L -45.347 972.694 L -56.347 989.694 L -68.347 1008.69 L -85.347 1033.69 L -95.347 1047.69 L -104.35 1059.69 L -114.35 1071.69 L -121.35 1079.69 L -125.35 1081.69 L -125.35 1021.69 L -121.35 1015.69 L -109.35 1003.69 L -98.347 989.694 L -90.347 979.694 L -78.347 962.694 L -54.347 926.694 L -41.347 904.694 L -33.347 891.694 L -19.347 866.694 L -16.347 862.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-11\"/><path d=\"M -280.35 925.694 L -276.35 926.694 L -266.35 947.694 L -253.35 970.694 L -239.35 993.694 L -226.35 1013.69 L -210.35 1037.69 L -196.35 1057.69 L -182.35 1076.69 L -171.35 1090.69 L -162.35 1100.69 L -154.35 1110.69 L -156.35 1115.69 L -166.35 1125.69 L -173.35 1133.69 L -178.35 1138.69 L -181.35 1138.69 L -193.35 1119.69 L -207.35 1096.69 L -216.35 1081.69 L -232.35 1055.69 L -246.35 1032.69 L -256.35 1016.69 L -277.35 981.694 L -287.35 965.694 L -291.35 957.694 L -290.35 948.694 L -281.35 927.694 L -280.35 925.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-12\"/><path d=\"M 6.653 925.694 L 9.653 926.694 L 17.653 945.694 L 20.653 954.694 L 15.653 964.694 L 7.653 977.694 L -4.347 997.694 L -21.347 1025.69 L -33.347 1044.69 L -43.347 1061.69 L -57.347 1084.69 L -70.347 1105.69 L -78.347 1118.69 L -87.347 1133.69 L -91.347 1139.69 L -95.347 1137.69 L -104.35 1128.69 L -118.35 1112.69 L -116.35 1108.69 L -106.35 1097.69 L -98.347 1087.69 L -85.347 1071.69 L -77.347 1060.69 L -67.347 1046.69 L -43.347 1010.69 L -33.347 994.694 L -17.347 968.694 L -4.347 944.694 L 6.653 925.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-13\"/><path d=\"M -163.35 596.697 L -109.35 596.697 L -108.35 597.697 L -107.35 641.697 L -107.35 703.697 L -108.35 704.697 L -164.35 703.697 L -164.35 597.697 L -163.35 596.697 Z\" style=\"fill: rgb(26, 83, 29);\"/><path d=\"M -98.347 742.694 L -93.347 745.694 L -88.347 755.694 L -88.347 764.694 L -94.347 780.694 L -107.35 812.694 L -117.35 835.694 L -129.35 864.694 L -134.35 877.694 L -137.35 874.694 L -147.35 852.694 L -157.35 828.694 L -170.35 799.694 L -181.35 771.694 L -184.35 763.694 L -184.35 757.694 L -176.35 743.694 L -172.35 743.694 L -159.35 768.694 L -147.35 790.694 L -135.35 811.694 L -127.35 795.694 L -111.35 766.694 L -103.35 750.694 L -98.347 742.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-14\"/><path d=\"M -137.35 1128.69 L -133.35 1129.69 L -124.35 1139.69 L -116.35 1146.69 L -105.35 1157.69 L -106.35 1162.69 L -116.35 1179.69 L -134.35 1209.69 L -139.35 1204.69 L -148.35 1190.69 L -161.35 1169.69 L -167.35 1160.69 L -166.35 1155.69 L -152.35 1143.69 L -137.35 1128.69 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-15\"/><path d=\"M -186.35 641.697 L -185.35 641.697 L -186.35 708.697 L -189.35 720.694 L -195.35 732.694 L -199.35 730.694 L -212.35 702.697 L -213.35 695.697 L -206.35 679.697 L -190.35 647.697 L -186.35 641.697 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-16\"/><path d=\"M -86.347 642.697 L -84.347 642.697 L -63.347 684.697 L -59.347 696.697 L -60.347 704.697 L -66.347 717.694 L -71.347 732.694 L -73.347 734.694 L -82.347 722.694 L -85.347 713.694 L -86.347 642.697 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-17\"/><path d=\"M -148.35 725.694 L -119.35 725.694 L -116.35 727.694 L -134.35 763.694 L -137.35 762.694 L -150.35 738.694 L -155.35 729.694 L -155.35 726.694 L -148.35 725.694 Z\" style=\"fill: rgb(26, 83, 29);\" id=\"object-18\"/></g>"},"white":{"left":-557.23,"top":-584.173,"width":1105.0031,"height":886.9929,"body":"<g transform=\"matrix(1, 0, 0, 1, 131.1199951171875, -1152.8699951171875)\" id=\"object-0\"><path d=\"M 200.653 664.697 L 204.653 665.697 L 219.653 674.697 L 231.653 683.697 L 242.653 692.697 L 256.653 704.697 L 270.653 717.694 L 278.653 724.694 L 291.653 736.694 L 315.653 760.694 L 322.653 768.694 L 329.653 775.694 L 336.653 783.694 L 345.653 793.694 L 352.653 801.694 L 364.653 814.694 L 386.653 838.694 L 394.653 848.694 L 405.653 861.694 L 414.653 874.694 L 416.653 879.694 L 415.653 886.694 L 403.653 922.694 L 391.653 957.694 L 378.653 992.694 L 360.653 1039.69 L 348.653 1067.69 L 328.653 1114.69 L 322.653 1130.69 L 319.653 1130.69 L 319.653 1117.69 L 336.653 1032.69 L 343.653 992.694 L 349.653 956.694 L 363.653 856.694 L 363.653 850.694 L 356.653 842.694 L 349.653 835.694 L 342.653 830.694 L 341.653 850.694 L 332.653 924.694 L 319.653 1003.69 L 310.653 1054.69 L 304.653 1091.69 L 302.653 1106.69 L 300.653 1109.69 L 298.653 1099.69 L 293.653 1055.69 L 288.653 1005.69 L 279.653 936.694 L 267.653 863.694 L 256.653 806.694 L 246.653 759.694 L 239.653 735.694 L 235.653 727.694 L 227.653 719.694 L 210.653 709.697 L 214.653 722.694 L 223.653 757.694 L 233.653 802.694 L 243.653 851.694 L 252.653 902.694 L 259.653 946.694 L 264.653 986.694 L 270.653 1038.69 L 273.653 1073.69 L 275.653 1113.69 L 275.653 1137.69 L 273.653 1136.69 L 259.653 1093.69 L 242.653 1044.69 L 229.653 1009.69 L 210.653 960.694 L 198.653 931.694 L 187.653 906.694 L 181.653 893.694 L 168.653 865.694 L 158.653 844.694 L 148.653 825.694 L 136.653 802.694 L 123.653 779.694 L 111.653 757.694 L 104.653 747.694 L 103.653 746.694 L 86.653 747.694 L 21.653 756.694 L -10.347 762.694 L -24.347 765.694 L -32.347 765.694 L -34.347 764.694 L -34.347 762.694 L -9.347 753.694 L 31.653 738.694 L 80.653 718.694 L 104.653 708.697 L 140.653 692.697 L 175.653 676.697 L 191.653 668.697 L 200.653 664.697 Z\" fill=\"#EFF6DF\"/><path d=\"M -477.35 665.697 L -471.35 666.697 L -435.35 682.697 L -398.35 699.697 L -364.35 714.694 L -310.35 736.694 L -265.35 752.694 L -241.35 761.694 L -239.35 762.694 L -239.35 765.694 L -248.35 765.694 L -288.35 757.694 L -309.35 753.694 L -357.35 747.694 L -377.35 746.694 L -379.35 750.694 L -391.35 771.694 L -404.35 794.694 L -417.35 818.694 L -427.35 837.694 L -435.35 853.694 L -452.35 890.694 L -462.35 912.694 L -473.35 938.694 L -484.35 965.694 L -495.35 993.694 L -505.35 1019.69 L -518.35 1053.69 L -527.35 1077.69 L -536.35 1106.69 L -543.35 1132.69 L -545.35 1134.69 L -546.35 1133.69 L -548.35 1115.69 L -548.35 1101.69 L -542.35 1037.69 L -537.35 997.694 L -531.35 943.694 L -522.35 887.694 L -513.35 840.694 L -504.35 795.694 L -488.35 727.694 L -484.35 712.697 L -484.35 709.697 L -495.35 717.694 L -507.35 726.694 L -510.35 729.694 L -515.35 745.694 L -529.35 806.694 L -538.35 854.694 L -544.35 891.694 L -550.35 926.694 L -558.35 985.694 L -564.35 1041.69 L -569.35 1094.69 L -571.35 1107.69 L -573.35 1109.69 L -579.35 1077.69 L -589.35 1019.69 L -602.35 942.694 L -611.35 868.694 L -613.35 853.694 L -614.35 830.694 L -623.35 837.694 L -632.35 845.694 L -634.35 848.694 L -634.35 863.694 L -628.35 913.694 L -622.35 953.694 L -616.35 989.694 L -607.35 1038.69 L -603.35 1059.69 L -598.35 1087.69 L -590.35 1125.69 L -590.35 1135.69 L -593.35 1132.69 L -605.35 1103.69 L -619.35 1073.69 L -631.35 1042.69 L -642.35 1015.69 L -658.35 972.694 L -672.35 932.694 L -684.35 897.694 L -688.35 882.694 L -688.35 876.694 L -680.35 865.694 L -668.35 851.694 L -659.35 840.694 L -647.35 826.694 L -635.35 813.694 L -628.35 805.694 L -617.35 793.694 L -610.35 785.694 L -596.35 770.694 L -584.35 757.694 L -552.35 725.694 L -544.35 718.694 L -531.35 706.697 L -517.35 694.697 L -505.35 684.697 L -486.35 670.697 L -477.35 665.697 Z\" fill=\"#EFF6DF\"/><path d=\"M 88.653 768.694 L 93.653 770.694 L 103.653 787.694 L 112.653 803.694 L 120.653 817.694 L 147.653 871.694 L 163.653 904.694 L 179.653 940.694 L 193.653 976.694 L 202.653 998.694 L 199.653 999.694 L 180.653 988.694 L 151.653 975.694 L 115.653 963.694 L 91.653 957.694 L 51.653 949.694 L 42.653 947.694 L 39.653 944.694 L 24.653 907.694 L 25.653 905.694 L 56.653 905.694 L 79.653 907.694 L 111.653 912.694 L 136.653 918.694 L 143.653 920.694 L 137.653 904.694 L 133.653 896.694 L 127.653 893.694 L 88.653 886.694 L 61.653 883.694 L 15.653 882.694 L 11.653 873.694 L 1.653 844.694 L 1.653 840.694 L 26.653 837.694 L 47.653 835.694 L 64.653 834.694 L 103.653 833.694 L 96.653 813.694 L 94.653 812.694 L 58.653 813.694 L 28.653 815.694 L -6.347 820.694 L -9.347 816.694 L -19.347 790.694 L -19.347 785.694 L 4.653 780.694 L 57.653 772.694 L 88.653 768.694 Z\" fill=\"#EFF6DF\"/><path d=\"M 218.653 568.697 L 223.653 569.697 L 234.653 582.697 L 243.653 592.697 L 252.653 603.697 L 266.653 621.697 L 276.653 634.697 L 288.653 650.697 L 301.653 668.697 L 312.653 684.697 L 322.653 699.697 L 336.653 721.694 L 353.653 749.694 L 365.653 769.694 L 376.653 790.694 L 379.653 799.694 L 375.653 797.694 L 363.653 783.694 L 353.653 772.694 L 344.653 761.694 L 332.653 748.694 L 321.653 736.694 L 309.653 724.694 L 301.653 717.694 L 294.653 710.697 L 286.653 703.697 L 274.653 692.697 L 263.653 683.697 L 251.653 672.697 L 229.653 654.697 L 214.653 642.697 L 207.653 638.697 L 183.653 649.697 L 148.653 665.697 L 108.653 683.697 L 77.653 696.697 L 41.653 711.697 L 11.653 723.694 L -31.347 739.694 L -51.347 746.694 L -53.347 746.694 L -52.347 739.694 L -38.347 706.697 L -31.347 700.697 L -8.347 689.697 L 11.653 680.697 L 41.653 666.697 L 70.653 652.697 L 90.653 642.697 L 109.653 632.697 L 136.653 618.697 L 159.653 605.697 L 185.653 590.697 L 200.653 580.697 L 213.653 571.697 L 218.653 568.697 Z\" fill=\"#EFF6DF\"/><path d=\"M -494.35 568.697 L -490.35 569.697 L -475.35 579.697 L -453.35 592.697 L -438.35 601.697 L -413.35 615.697 L -390.35 628.697 L -374.35 636.697 L -333.35 657.697 L -304.35 671.697 L -275.35 684.697 L -247.35 697.697 L -235.35 703.697 L -229.35 715.694 L -219.35 741.694 L -220.35 745.694 L -229.35 744.694 L -257.35 733.694 L -302.35 716.694 L -339.35 701.697 L -383.35 682.697 L -403.35 673.697 L -438.35 657.697 L -464.35 645.697 L -478.35 639.697 L -482.35 638.697 L -495.35 649.697 L -506.35 658.697 L -519.35 669.697 L -529.35 677.697 L -543.35 689.697 L -556.35 701.697 L -564.35 708.697 L -571.35 715.694 L -579.35 722.694 L -611.35 754.694 L -612.35 756.694 L -614.35 756.694 L -616.35 760.694 L -625.35 770.694 L -634.35 781.694 L -642.35 790.694 L -647.35 796.694 L -649.35 796.694 L -647.35 787.694 L -636.35 766.694 L -612.35 727.694 L -596.35 702.697 L -586.35 686.697 L -566.35 658.697 L -555.35 643.697 L -540.35 623.697 L -529.35 610.697 L -518.35 596.697 L -507.35 583.697 L -498.35 573.697 L -494.35 568.697 Z\" fill=\"#EFF6DF\"/><path d=\"M -364.35 769.694 L -354.35 769.694 L -310.35 775.694 L -275.35 781.694 L -254.35 785.694 L -252.35 786.694 L -253.35 792.694 L -264.35 819.694 L -268.35 820.694 L -286.35 817.694 L -315.35 814.694 L -361.35 812.694 L -367.35 812.694 L -378.35 835.694 L -329.35 835.694 L -273.35 840.694 L -274.35 846.694 L -281.35 865.694 L -288.35 882.694 L -292.35 884.694 L -299.35 883.694 L -330.35 883.694 L -354.35 885.694 L -392.35 891.694 L -403.35 894.694 L -408.35 902.694 L -413.35 913.694 L -415.35 920.694 L -389.35 913.694 L -353.35 907.694 L -322.35 905.694 L -298.35 905.694 L -299.35 912.694 L -311.35 943.694 L -315.35 948.694 L -336.35 951.694 L -373.35 959.694 L -402.35 967.694 L -424.35 975.694 L -447.35 985.694 L -460.35 992.694 L -470.35 998.694 L -474.35 997.694 L -460.35 963.694 L -450.35 938.694 L -438.35 910.694 L -426.35 884.694 L -418.35 868.694 L -408.35 847.694 L -388.35 809.694 L -375.35 786.694 L -364.35 769.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -295.35 1265.69 L -291.35 1265.69 L -281.35 1279.69 L -270.35 1292.69 L -259.35 1306.69 L -250.35 1316.69 L -242.35 1326.69 L -230.35 1339.69 L -223.35 1347.69 L -214.35 1356.69 L -206.35 1363.69 L -196.35 1372.69 L -174.35 1390.69 L -160.35 1401.69 L -150.35 1409.69 L -138.35 1417.69 L -133.35 1416.69 L -122.35 1409.69 L -106.35 1397.69 L -93.347 1387.69 L -82.347 1377.69 L -71.347 1368.69 L -61.347 1359.69 L -33.347 1331.69 L -24.347 1320.69 L -11.347 1305.69 L -3.347 1296.69 L 8.653 1279.69 L 16.653 1268.69 L 18.653 1265.69 L 22.653 1266.69 L 54.653 1287.69 L 53.653 1292.69 L 44.653 1303.69 L 32.653 1316.69 L 25.653 1324.69 L 3.653 1346.69 L 1.653 1346.69 L -0.347 1350.69 L -26.347 1374.69 L -38.347 1385.69 L -52.347 1397.69 L -66.347 1408.69 L -82.347 1421.69 L -101.35 1434.69 L -112.35 1442.69 L -133.35 1455.69 L -140.35 1454.69 L -162.35 1440.69 L -174.35 1432.69 L -193.35 1418.69 L -202.35 1411.69 L -213.35 1402.69 L -239.35 1380.69 L -253.35 1368.69 L -260.35 1361.69 L -268.35 1354.69 L -305.35 1317.69 L -314.35 1306.69 L -325.35 1294.69 L -328.35 1290.69 L -327.35 1287.69 L -309.35 1276.69 L -302.35 1270.69 L -295.35 1265.69 Z\" fill=\"#EFF6DF\"/><path d=\"M -136.35 1244.69 L -132.35 1246.69 L -122.35 1259.69 L -109.35 1275.69 L -100.35 1286.69 L -84.347 1303.69 L -68.347 1319.69 L -68.347 1321.69 L -64.347 1323.69 L -63.347 1329.69 L -71.347 1336.69 L -84.347 1349.69 L -92.347 1356.69 L -103.35 1366.69 L -114.35 1375.69 L -127.35 1386.69 L -134.35 1392.69 L -139.35 1390.69 L -152.35 1379.69 L -163.35 1370.69 L -177.35 1358.69 L -192.35 1345.69 L -205.35 1333.69 L -210.35 1328.69 L -209.35 1324.69 L -201.35 1317.69 L -180.35 1296.69 L -171.35 1285.69 L -164.35 1278.69 L -153.35 1264.69 L -144.35 1253.69 L -137.35 1245.69 L -136.35 1244.69 Z\" fill=\"#EFF6DF\"/><path d=\"M -207.35 777.694 L -203.35 779.694 L -193.35 800.694 L -176.35 839.694 L -152.35 895.694 L -148.35 907.694 L -147.35 913.694 L -146.35 983.694 L -148.35 986.694 L -159.35 972.694 L -169.35 959.694 L -182.35 940.694 L -192.35 925.694 L -205.35 904.694 L -215.35 887.694 L -235.35 851.694 L -243.35 837.694 L -244.35 835.694 L -243.35 826.694 L -231.35 795.694 L -227.35 789.694 L -219.35 784.694 L -207.35 777.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -66.347 778.694 L -61.347 780.694 L -53.347 784.694 L -44.347 788.694 L -38.347 800.694 L -30.347 822.694 L -29.347 826.694 L -29.347 836.694 L -42.347 862.694 L -50.347 876.694 L -65.347 902.694 L -72.347 913.694 L -96.347 949.694 L -104.35 960.694 L -117.35 977.694 L -124.35 984.694 L -125.35 984.694 L -125.35 913.694 L -123.35 902.694 L -116.35 885.694 L -108.35 869.694 L -92.347 832.694 L -77.347 797.694 L -70.347 783.694 L -66.347 778.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -86.347 1175.69 L -82.347 1176.69 L -68.347 1190.69 L -60.347 1197.69 L -43.347 1213.69 L -30.347 1224.69 L -17.347 1234.69 L 0.653 1247.69 L 2.653 1251.69 L -11.347 1269.69 L -21.347 1282.69 L -32.347 1295.69 L -43.347 1309.69 L -48.347 1308.69 L -63.347 1293.69 L -70.347 1285.69 L -84.347 1270.69 L -93.347 1259.69 L -102.35 1249.69 L -109.35 1241.69 L -120.35 1228.69 L -118.35 1223.69 L -101.35 1197.69 L -89.347 1178.69 L -86.347 1175.69 Z\" fill=\"#EFF6DF\"/><path d=\"M -187.35 1175.69 L -184.35 1175.69 L -163.35 1207.69 L -152.35 1225.69 L -151.35 1228.69 L -158.35 1236.69 L -169.35 1248.69 L -179.35 1259.69 L -186.35 1267.69 L -195.35 1277.69 L -206.35 1289.69 L -212.35 1296.69 L -214.35 1296.69 L -216.35 1300.69 L -225.35 1309.69 L -230.35 1307.69 L -243.35 1291.69 L -252.35 1280.69 L -263.35 1267.69 L -274.35 1251.69 L -272.35 1247.69 L -258.35 1237.69 L -245.35 1227.69 L -232.35 1216.69 L -221.35 1207.69 L -213.35 1199.69 L -205.35 1192.69 L -192.35 1179.69 L -187.35 1175.69 Z\" fill=\"#EFF6DF\"/><path d=\"M -258.35 862.694 L -255.35 863.694 L -238.35 891.694 L -221.35 920.694 L -207.35 942.694 L -196.35 958.694 L -183.35 976.694 L -171.35 992.694 L -162.35 1003.69 L -147.35 1018.69 L -146.35 1061.69 L -146.35 1082.69 L -149.35 1082.69 L -158.35 1071.69 L -172.35 1054.69 L -181.35 1041.69 L -193.35 1024.69 L -207.35 1002.69 L -217.35 987.694 L -231.35 964.694 L -244.35 941.694 L -258.35 916.694 L -267.35 900.694 L -268.35 898.694 L -268.35 891.694 L -259.35 864.694 L -258.35 862.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -16.347 862.694 L -13.347 863.694 L -3.347 892.694 L -4.347 898.694 L -24.347 936.694 L -34.347 953.694 L -45.347 972.694 L -56.347 989.694 L -68.347 1008.69 L -85.347 1033.69 L -95.347 1047.69 L -104.35 1059.69 L -114.35 1071.69 L -121.35 1079.69 L -125.35 1081.69 L -125.35 1021.69 L -121.35 1015.69 L -109.35 1003.69 L -98.347 989.694 L -90.347 979.694 L -78.347 962.694 L -54.347 926.694 L -41.347 904.694 L -33.347 891.694 L -19.347 866.694 L -16.347 862.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -280.35 925.694 L -276.35 926.694 L -266.35 947.694 L -253.35 970.694 L -239.35 993.694 L -226.35 1013.69 L -210.35 1037.69 L -196.35 1057.69 L -182.35 1076.69 L -171.35 1090.69 L -162.35 1100.69 L -154.35 1110.69 L -156.35 1115.69 L -166.35 1125.69 L -173.35 1133.69 L -178.35 1138.69 L -181.35 1138.69 L -193.35 1119.69 L -207.35 1096.69 L -216.35 1081.69 L -232.35 1055.69 L -246.35 1032.69 L -256.35 1016.69 L -277.35 981.694 L -287.35 965.694 L -291.35 957.694 L -290.35 948.694 L -281.35 927.694 L -280.35 925.694 Z\" fill=\"#EFF6DF\"/><path d=\"M 6.653 925.694 L 9.653 926.694 L 17.653 945.694 L 20.653 954.694 L 15.653 964.694 L 7.653 977.694 L -4.347 997.694 L -21.347 1025.69 L -33.347 1044.69 L -43.347 1061.69 L -57.347 1084.69 L -70.347 1105.69 L -78.347 1118.69 L -87.347 1133.69 L -91.347 1139.69 L -95.347 1137.69 L -104.35 1128.69 L -118.35 1112.69 L -116.35 1108.69 L -106.35 1097.69 L -98.347 1087.69 L -85.347 1071.69 L -77.347 1060.69 L -67.347 1046.69 L -43.347 1010.69 L -33.347 994.694 L -17.347 968.694 L -4.347 944.694 L 6.653 925.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -163.35 596.697 L -109.35 596.697 L -108.35 597.697 L -107.35 641.697 L -107.35 703.697 L -108.35 704.697 L -164.35 703.697 L -164.35 597.697 L -163.35 596.697 Z\" fill=\"#EFF6DF\"/><path d=\"M -98.347 742.694 L -93.347 745.694 L -88.347 755.694 L -88.347 764.694 L -94.347 780.694 L -107.35 812.694 L -117.35 835.694 L -129.35 864.694 L -134.35 877.694 L -137.35 874.694 L -147.35 852.694 L -157.35 828.694 L -170.35 799.694 L -181.35 771.694 L -184.35 763.694 L -184.35 757.694 L -176.35 743.694 L -172.35 743.694 L -159.35 768.694 L -147.35 790.694 L -135.35 811.694 L -127.35 795.694 L -111.35 766.694 L -103.35 750.694 L -98.347 742.694 Z\" fill=\"#EFF6DF\"/><path d=\"M -137.35 1128.69 L -133.35 1129.69 L -124.35 1139.69 L -116.35 1146.69 L -105.35 1157.69 L -106.35 1162.69 L -116.35 1179.69 L -134.35 1209.69 L -139.35 1204.69 L -148.35 1190.69 L -161.35 1169.69 L -167.35 1160.69 L -166.35 1155.69 L -152.35 1143.69 L -137.35 1128.69 Z\" fill=\"#EFF6DF\"/><path d=\"M -186.35 641.697 L -185.35 641.697 L -186.35 708.697 L -189.35 720.694 L -195.35 732.694 L -199.35 730.694 L -212.35 702.697 L -213.35 695.697 L -206.35 679.697 L -190.35 647.697 L -186.35 641.697 Z\" fill=\"#EFF6DF\"/><path d=\"M -86.347 642.697 L -84.347 642.697 L -63.347 684.697 L -59.347 696.697 L -60.347 704.697 L -66.347 717.694 L -71.347 732.694 L -73.347 734.694 L -82.347 722.694 L -85.347 713.694 L -86.347 642.697 Z\" fill=\"#EFF6DF\"/><path d=\"M -148.35 725.694 L -119.35 725.694 L -116.35 727.694 L -134.35 763.694 L -137.35 762.694 L -150.35 738.694 L -155.35 729.694 L -155.35 726.694 L -148.35 725.694 Z\" fill=\"#EFF6DF\"/></g>"}}}),
};

const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _2MVPMT = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _dTiX11 = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('../build/database.compressed.mjs').then((m) => m[collection]);
});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  const binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const decompressedText = await new Response(decompressedStream).text();
  return decompressedText.split("\n");
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    if (["nitro-prerender", "nitro-dev"].includes("nitro-prerender")) {
      db = localAdapter(refineDatabaseConfig(localDatabase));
    } else {
      db = localAdapter(refineDatabaseConfig(database));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = {};
const integrityCheckPromise = {};
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity[String(collection)] !== false) {
    checkDatabaseIntegrity[String(collection)] = false;
    integrityCheckPromise[String(collection)] = integrityCheckPromise[String(collection)] || _checkAndImportDatabaseIntegrity(event, collection, checksums[String(collection)], checksumsStructure[String(collection)], config).then((isValid) => {
      checkDatabaseIntegrity[String(collection)] = !isValid;
    }).catch((error) => {
      console.error("Database integrity check failed", error);
      checkDatabaseIntegrity[String(collection)] = true;
      integrityCheckPromise[String(collection)] = null;
    });
  }
  if (integrityCheckPromise[String(collection)]) {
    await integrityCheckPromise[String(collection)];
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, String(collection)).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: "memory" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select.trim().split(", ");
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0].match(SQL_COUNT_REGEX) && !columns[0].match(/^"[a-z_]\w+"$/i)) {
      throw new Error("Invalid query");
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query");
  }
  if (from !== `_content_${collection}`) {
    throw new Error("Invalid query");
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

const _K2gzDH = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection");
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _s6QxPl = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_HTY1Tj = () => import('../routes/api/send-email.mjs');
const _lazy_uZUEk_ = () => import('../_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _SOJo80, lazy: false, middleware: true, method: undefined },
  { route: '/api/send-email', handler: _lazy_HTY1Tj, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _2MVPMT, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/sql_dump', handler: _dTiX11, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/:collection/query', handler: _K2gzDH, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _s6QxPl, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_uZUEk_, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
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
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useStorage as a, buildAssetsURL as b, useNitroApp as c, defineRenderHandler as d, closePrerenderer as e, getRouteRules as g, localFetch as l, publicAssetsURL as p, useRuntimeConfig as u };
//# sourceMappingURL=nitro.mjs.map
