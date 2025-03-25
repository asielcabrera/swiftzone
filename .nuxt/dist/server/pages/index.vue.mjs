import _sfc_main$1 from "../components/ui/Hero.vue.mjs";
import _sfc_main$2 from "../components/ui/Services.vue.mjs";
import _sfc_main$3 from "../components/ui/About.vue.mjs";
import _sfc_main$4 from "../components/ui/Projects.vue.mjs";
import _sfc_main$5 from "../components/ui/Testimonials.vue.mjs";
import _sfc_main$6 from "../components/ui/Contact.vue.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = _sfc_main$1;
  const _component_Services = _sfc_main$2;
  const _component_About = _sfc_main$3;
  const _component_Projects = _sfc_main$4;
  const _component_Testimonials = _sfc_main$5;
  const _component_Contact = _sfc_main$6;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.vue.mjs.map
