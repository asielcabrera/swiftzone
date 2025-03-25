import _sfc_main$1 from "../components/LanguageProvider.vue.mjs";
import _sfc_main$2 from "../components/ui/NavBar.vue.mjs";
import _sfc_main$3 from "../components/ui/Footer.vue.mjs";
import { mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LanguageProvider = _sfc_main$1;
  const _component_NavBar = _sfc_main$2;
  const _component_Footer = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LanguageProvider, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NavBar, null, null, _parent2, _scopeId));
        _push2(`<main class="min-h-screen pt-20"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</main>`);
        _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NavBar),
          createVNode("main", { class: "min-h-screen pt-20" }, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createVNode(_component_Footer)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default.vue.mjs.map
