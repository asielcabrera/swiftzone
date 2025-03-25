import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public6.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = {
  __name: "software-development",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Software Development - SwiftZone",
      meta: [
        { name: "description", content: "Custom software development services for businesses. We create tailored solutions that automate processes and improve efficiency." }
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
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Software Development </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> We develop custom software solutions that automate processes, improve efficiency, and enhance your company&#39;s growth. </p></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="relative order-2 lg:order-1" data-aos="fade-right"><img${ssrRenderAttr("src", _imports_0)} alt="Software Development" class="rounded-xl shadow-lg w-full h-auto"></div><div class="order-1 lg:order-2" data-aos="fade-left"><h2 class="text-2xl md:text-3xl font-bold mb-6">Custom software for specific needs</h2><p class="text-gray-700 mb-6"> At SwiftZone, we create custom software solutions that perfectly adapt to your business&#39;s unique requirements. Our approach focuses on developing robust, scalable, and user-friendly applications. </p><p class="text-gray-700 mb-6"> From business applications to complex management systems, our team of expert developers can turn your ideas into reality. </p><ul class="space-y-3 mb-8"><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Custom business applications</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Resource management systems (ERP, CRM)</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Native and hybrid mobile applications</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>System integration and APIs</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Cloud-based solutions</span></li></ul></div></div></div></section><section class="py-16 bg-gray-50"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Technologies we use</h2><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-aos="fade-up" data-aos-delay="200"><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:python",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Python</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:java",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Java</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:c-sharp",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">C#</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:react",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">React Native</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:flutter",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Flutter</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:aws",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">AWS</span></div></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Benefits of our solutions</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:settings",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Complete customization</h3><p class="text-gray-700">We develop software that perfectly adapts to your business processes, not the other way around.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:bar-chart",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Greater efficiency</h3><p class="text-gray-700">Automate manual processes and reduce errors, increasing your team&#39;s productivity.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:trending-up",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Scalability</h3><p class="text-gray-700">Our solutions grow with your business, adapting to new needs and data volumes.</p></div></div></div></section><section class="py-16 bg-primary text-white"><div class="container-custom"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Need a custom software solution?</h2><p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100"> Contact us today to discuss how we can help transform your business with custom software. </p><div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/software-development.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=software-development.vue.mjs.map
