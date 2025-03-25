import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/server-renderer/index.mjs';
import { u as useRoute } from './server.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ufo/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/hookable/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unctx/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/radix3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/defu/dist/defu.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/klona/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${route.path}`, () => {
      return queryContent("blog").find();
    })), __temp = await __temp, __restore(), __temp);
    console.log(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue.mjs.map
