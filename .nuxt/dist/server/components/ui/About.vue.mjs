import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { useLanguage } from "../../context/language-context.mjs";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "aboutus",
        class: "section-padding bg-secondary scroll-mt-24"
      }, _attrs))}><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="order-2 lg:order-1 aos-init aos-animate" data-aos="fade-right"><h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">${ssrInterpolate(unref(t)("about.title"))}</h2><p class="text-gray-700 dark:text-gray-400 mb-6">${ssrInterpolate(unref(t)("about.p1"))}</p><p class="text-gray-700 dark:text-gray-400 mb-8">${ssrInterpolate(unref(t)("about.p2"))}</p><div class="grid grid-cols-2 gap-6 mb-8"><div><p class="text-3xl font-bold text-primary mb-2">+50</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat1"))}</p></div><div><p class="text-3xl font-bold text-primary mb-2">+100</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat2"))}</p></div><div><p class="text-3xl font-bold text-primary mb-2">+20</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat3"))}</p></div><div><p class="text-3xl font-bold text-primary mb-2">+5</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat4"))}</p></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#contact",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("about.cta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("about.cta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="order-1 lg:order-2 relative aos-init aos-animate" data-aos="fade-left"><div class="relative h-[500px] w-full rounded-2xl overflow-hidden"><img alt="Equipo SwiftZone trabajando" decoding="async" data-nimg="fill" class="object-cover" style="${ssrRenderStyle({ "position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent" })}" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"><div class="absolute inset-0 bg-gradient-to-t from-[#1A531D]/40 to-transparent"></div></div><div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl"><p class="text-lg font-semibold mb-1"> 5+ ${ssrInterpolate(unref(t)("about.exp"))}</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=About.vue.mjs.map
