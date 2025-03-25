import __nuxt_component_0 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../../public/logo-white.svg.mjs";
import { useLanguage } from "../../context/language-context.mjs";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Icon = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary text-white pt-16 pb-8" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div><img${ssrRenderAttr("src", _imports_0)} alt="SwiftZone" class="h-10 mb-6"><p class="text-white mb-6">${ssrInterpolate(unref(t)("footer.tagline"))}</p></div><div><h3 class="text-lg font-semibold mb-6">${ssrInterpolate(unref(t)("footer.quickLinks"))}</h3><ul class="space-y-3"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/#services",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/#projects",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.projects"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/#aboutus",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.blog"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-6">${ssrInterpolate(unref(t)("footer.services"))}</h3><ul class="space-y-3"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/web-development",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.web"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.web")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/software-development",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.software"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.software")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/digital-marketing",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.marketing"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.marketing")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/ux-ui-design",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.uxui"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.uxui")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/digital-strategy",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.strategy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.strategy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-6">${ssrInterpolate(unref(t)("footer.contact"))}</h3><ul class="space-y-3"><li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span class="text-white"> +1 (786) 480-3088 </span></li><li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span class="text-white"> info@swiftzone.com </span></li><li class="flex items-start"><div class="flex space-x-4"><a href="https://x.com/swiftzonedev" class="text-white hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:twitter-x" }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/swiftzone.dev/" class="text-white hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:instagram" }, null, _parent));
      _push(`</a></div></li></ul></div></div><div class="border-t border-gray-800 mt-12 pt-8"><div class="flex flex-col md:flex-row justify-between items-center"><p class="text-white text-sm"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SwiftZone. ${ssrInterpolate(unref(t)("footer.rights"))}</p><div class="flex space-x-6 mt-4 md:mt-0">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/privacy-policy",
        class: "text-white hover:text-white text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/terms-conditions",
        class: "text-white hover:text-white text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("footer.terms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("footer.terms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Footer.vue.mjs.map
