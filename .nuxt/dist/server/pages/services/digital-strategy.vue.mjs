import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public2.mjs";
import _imports_1 from "../../_virtual/virtual_public3.mjs";
import _imports_2 from "../../_virtual/virtual_public4.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = {
  __name: "digital-strategy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Digital Strategy - SwiftZone",
      meta: [
        { name: "description", content: "Digital strategy services for businesses. We develop comprehensive strategies that align your business objectives with your customers' needs." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-20 md:py-28 bg-secondary" data-aos="fade-down"><div class="container-custom"><div class="max-w-3xl mx-auto">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#services",
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
            _push2(` Back to Services `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-4 w-4 mr-2"
              }),
              createTextVNode(" Back to Services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Digital Strategy </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> We develop comprehensive digital strategies that align your business objectives with your customers&#39; needs to drive growth. </p></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="relative order-2 lg:order-1" data-aos="fade-right"><img${ssrRenderAttr("src", _imports_0)} alt="Digital Strategy" class="rounded-xl shadow-lg w-full h-auto"></div><div class="order-1 lg:order-2" data-aos="fade-left"><h2 class="text-2xl md:text-3xl font-bold mb-6">Results-oriented digital transformation</h2><p class="text-gray-700 mb-6"> At SwiftZone, we help businesses navigate the complex digital landscape with clear and actionable strategies. Our approach is data-driven and focused on measurable results. </p><p class="text-gray-700 mb-6"> We analyze your current situation, identify opportunities, and develop digital roadmaps that help you achieve your business objectives. </p><ul class="space-y-3 mb-8"><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Digital transformation consulting</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Competitive and market analysis</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Content and channel strategy</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Customer journey optimization</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Results measurement and analysis</span></li></ul></div></div></div></section><section class="py-16 bg-gray-50"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Key components of our strategy</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:users",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Audience analysis</h3><p class="text-gray-700">We identify and understand your target audience to create strategies that resonate with them.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Journey mapping</h3><p class="text-gray-700">We analyze each touchpoint to optimize the customer experience and increase conversions.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:bar-chart-4",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Data analysis</h3><p class="text-gray-700">We use data to make informed decisions and measure the impact of our strategies.</p></div></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Success stories</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white rounded-xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="100"><img${ssrRenderAttr("src", _imports_1)} alt="Success Case 1" class="w-full h-48 object-cover"><div class="p-6"><h3 class="text-xl font-bold mb-2">Digital transformation for retail company</h3><p class="text-gray-700 mb-4">We helped a retail chain implement an omnichannel strategy that increased their online sales by 150% in 6 months.</p><div class="flex items-center text-sm text-gray-500"><span class="font-medium text-primary">Results:</span><span class="mx-2">•</span><span>+150% online sales</span><span class="mx-2">•</span><span>+35% customer retention</span></div></div></div><div class="bg-white rounded-xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200"><img${ssrRenderAttr("src", _imports_2)} alt="Success Case 2" class="w-full h-48 object-cover"><div class="p-6"><h3 class="text-xl font-bold mb-2">Content strategy for B2B</h3><p class="text-gray-700 mb-4">We developed a content strategy for a B2B company that tripled their qualified leads in 12 months.</p><div class="flex items-center text-sm text-gray-500"><span class="font-medium text-primary">Results:</span><span class="mx-2">•</span><span>+200% qualified leads</span><span class="mx-2">•</span><span>-25% cost per acquisition</span></div></div></div></div></div></section><section class="py-16 bg-primary text-white"><div class="container-custom"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Ready to transform your digital presence?</h2><p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100"> Contact us today to discuss how we can help you develop an effective digital strategy. </p><div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/contact",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact now `);
          } else {
            return [
              createTextVNode(" Contact now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/digital-strategy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=digital-strategy.vue.mjs.map
