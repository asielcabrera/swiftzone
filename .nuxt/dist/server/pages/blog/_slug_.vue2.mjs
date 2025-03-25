import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "../../node_modules/nuxt/dist/app/composables/router.mjs";
import { useAsyncData } from "../../node_modules/nuxt/dist/app/composables/asyncData.mjs";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_.vue2.mjs.map
