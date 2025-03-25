import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { ref, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { useLanguage } from "../../context/language-context.mjs";
const _sfc_main = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    const navLinksLeft = [
      { key: "nav.about", href: "/#aboutus", isAnchor: true, anchorId: "about" },
      { key: "nav.services", href: "#services", isAnchor: true, anchorId: "services" }
    ];
    const navLinksRight = [
      { key: "nav.blog", href: "/blog", isAnchor: false },
      { key: "nav.contact", href: "#contact", isAnchor: true, anchorId: "contact" }
    ];
    const isOpen = ref(false);
    const scrolled = ref(false);
    const mounted = ref(false);
    const route = useRoute();
    computed(() => {
      return mounted.value && !scrolled.value && route.path === "/";
    });
    const handleAnchorClick = (e, anchorId) => {
      if (!anchorId) return;
      e.preventDefault();
      isOpen.value = false;
      if (route.path === "/") {
        const element = (void 0).getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        (void 0).location.href = `/#${anchorId}`;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled.value ? "bg-secondary/95 backdrop-blur-md py-3 shadow-sm" : "bg-secondary py-4"
        ]
      }, _attrs))}><div class="container-custom"><div class="flex items-center justify-between"><nav class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navLinksLeft, (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: link.key,
          to: link.href,
          onClick: (e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : void 0,
          class: "text-primary hover:text-primary/80 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(link.key))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(link.key)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="hidden md:flex flex-shrink-0 justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 pt-5 pb-5">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "Logo:dark",
              size: 45
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "Logo:dark",
                size: 45
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden flex items-center">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "Logo:dark",
              size: 45
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "Logo:dark",
                size: 45
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navLinksRight, (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: link.key,
          to: link.href,
          onClick: (e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : void 0,
          class: "text-primary hover:text-primary/80 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(link.key))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(link.key)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="md:hidden flex items-center gap-3 relative z-50"><button type="button" class="focus:outline-none text-primary p-2 rounded-md transition-colors" aria-label="Toggle menu">`);
      if (isOpen.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:close",
          size: 24
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:bars-3",
          size: 24
        }, null, _parent));
      }
      _push(`</button></div></div></div><div class="${ssrRenderClass([
        "fixed inset-0 z-40 bg-secondary md:hidden transition-transform duration-300 ease-in-out pt-20",
        isOpen.value ? "translate-x-0" : "translate-x-full"
      ])}"><div class="flex flex-col h-full p-6"><nav class="flex flex-col space-y-6 items-center"><!--[-->`);
      ssrRenderList([...navLinksLeft, ...navLinksRight], (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: link.key,
          to: link.href,
          onClick: (e) => {
            if (link.isAnchor) {
              handleAnchorClick(e, link.anchorId);
            } else {
              isOpen.value = false;
            }
          },
          class: "text-lg font-medium text-primary hover:text-primary/80 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(link.key))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(link.key)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=NavBar.vue.mjs.map
