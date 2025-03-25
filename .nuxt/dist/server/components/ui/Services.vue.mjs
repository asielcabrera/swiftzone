import __nuxt_component_0 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import __nuxt_component_0$1 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { useLanguage } from "../../context/language-context.mjs";
import { services } from "../../context/services.mjs";
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section-padding bg-white scroll-mt-24"
      }, _attrs))}><div class="container-custom"><div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4 aos-init aos-animate" data-aos="fade-up">${ssrInterpolate(unref(t)("services.title"))}</h2><p class="text-gray-600 dark:text-gray-400 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">${ssrInterpolate(unref(t)("services.subtitle"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(services), (service, index) => {
        _push(`<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"><div class="${ssrRenderClass([service.color, "w-14 h-14 rounded-lg flex items-center justify-center mb-6"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          class: service.iconColor
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold mb-3">${ssrInterpolate(unref(t)(service.titleKey))}</h3><p class="text-gray-600 dark:text-gray-400 mb-4">${ssrInterpolate(unref(t)(service.descriptionKey))}</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/services/${service.slug}`,
          class: "inline-flex items-center text-primary font-medium hover:underline cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("services.seeMore"))} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "ml-1 h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("services.seeMore")) + " ", 1),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-up-right",
                  class: "ml-1 h-4 w-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Services.vue.mjs.map
