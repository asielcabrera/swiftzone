import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public7.mjs";
import { useLanguage } from "../../context/language-context.mjs";
const _sfc_main = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "relative bg-secondary text-primary overflow-hidden pt-24"
      }, _attrs))}><div class="container-custom relative z-10 py-16 md:py-24"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"><div><h1 class="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}">${ssrInterpolate(unref(t)("hero.title"))}</h1><p class="text-base md:text-lg text-primary/80 mb-8 max-w-xl" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}">${ssrInterpolate(unref(t)("hero.subtitle"))}</p><div class="flex flex-wrap gap-4" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#services",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.cta.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.cta.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#contact",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.cta.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.cta.contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden lg:flex justify-center items-center"><div class="relative" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}"><img${ssrRenderAttr("src", _imports_0)} alt="SwiftZone Logo" width="450" height="450" class="float-animation" style="${ssrRenderStyle({ "max-width": "100%" })}"></div></div></div></div><div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Hero.vue.mjs.map
