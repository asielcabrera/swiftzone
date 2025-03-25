import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_0$1 from './index2.mjs';
import { withAsyncContext, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/server-renderer/index.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import { withoutTrailingSlash } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ufo/dist/index.mjs';
import { t as tryUseNuxtApp } from './server.mjs';
import { u as useHead } from './v3.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/hookable/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unctx/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/radix3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/defu/dist/defu.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/klona/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/destr/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ohash/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/pathe/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/consola/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ipx/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/devalue/index.js';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/plugins.mjs';

const checksums = {
  "content": "v3.3.0--kVyh9ytt1LZ570XJ2fTn6WUq8mXAgyzxlKCNZbrOWOg"
};
const tables = {
  "content": "_content_content",
  "info": "_content_info"
};

const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts == null ? void 0 : opts.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = (opts == null ? void 0 : opts.limit) || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

async function fetchQuery(event, collection, sql) {
  return await $fetch(`/__nuxt_content/${collection}/query`, {
    context: event ? { cloudflare: event.context.cloudflare } : {},
    headers: { "content-type": "application/json" },
    query: { v: checksums[String(collection)], t: void 0 },
    method: "POST",
    body: {
      sql
    }
  });
}

const queryCollection = (collection) => {
  var _a, _b;
  const event = (_b = (_a = tryUseNuxtApp()) == null ? void 0 : _a.ssrContext) == null ? void 0 : _b.event;
  return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
async function executeContentQuery(event, collection, sql) {
  {
    return fetchQuery(event, String(collection), sql);
  }
}

/* empty css            */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-posts",
      () => queryContent("blog").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const { data: blog } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => queryCollection("content").path("/").first(), "$ns2Xa_1kks")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Blog - SwiftZone",
      meta: [
        { name: "description", content: "Latest news, articles, and resources about digital marketing, software development, and technology trends." }
      ]
    });
    console.log("Posts loaded:", blog.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-20 md:py-28 bg-secondary" data-aos="fade-down"><div class="container-custom"><div class="max-w-3xl mx-auto">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "inline-flex items-center text-primary font-medium mb-6 hover:underline",
        "data-aos": "fade-right",
        "data-aos-delay": "100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "h-4 w-4 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Back to home `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-4 w-4 mr-2"
              }),
              createTextVNode(" Back to home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Blog </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> Latest news, articles, and resources about digital marketing, software development, and technology trends. </p></div></div></section><section class="py-16 md:py-24" data-aos="fade-up"><div class="container-custom"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(`<div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", 150 + index * 100)}><div class="relative h-56 w-full"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="object-cover w-full h-full"><div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">${ssrInterpolate(post.category)}</div></div><div class="p-6"><div class="flex items-center text-sm text-gray-500 mb-3"><span>${ssrInterpolate(post.date)}</span><span class="mx-2">•</span><span>${ssrInterpolate(post.author)}</span></div><h3 class="text-xl font-bold mb-2 line-clamp-2">${ssrInterpolate(post.title)}</h3><p class="text-gray-600 mb-4 line-clamp-3">${ssrInterpolate(post.description)}</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: post._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-10 rounded-md px-4 py-2 w-full border-primary text-primary bg-transparent hover:bg-primary hover:text-white"${_scopeId}> Read article </button>`);
            } else {
              return [
                createVNode("button", { class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-4 py-2 w-full border-primary text-primary bg-transparent hover:bg-primary hover:text-white" }, " Read article ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="600"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 py-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white mx-auto"> Load more articles </button></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
