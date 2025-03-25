import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../../_virtual/virtual_public5.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = {
  __name: "digital-marketing",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Digital Marketing - SwiftZone",
      meta: [
        { name: "description", content: "Digital marketing services for businesses. Effective strategies that increase your online visibility, attract potential customers, and maximize ROI." }
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
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Digital Marketing </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> Effective digital marketing strategies that increase your online visibility, attract potential customers, and maximize return on investment. </p></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div data-aos="fade-right"><h2 class="text-2xl md:text-3xl font-bold mb-6">Boost your digital presence and increase your conversions</h2><p class="text-gray-700 mb-6"> At SwiftZone, we develop customized digital marketing strategies that connect with your target audience and generate measurable results. Our data-driven approach allows us to continuously optimize your campaigns to maximize ROI. </p><p class="text-gray-700 mb-6"> From SEO to PPC campaigns and content marketing, we offer comprehensive solutions for all your digital marketing needs. </p><ul class="space-y-3 mb-8"><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>SEO (Search Engine Optimization)</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>SEM and Pay-Per-Click (PPC) campaigns</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Content Marketing</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Social Media Marketing</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Email marketing and automation</span></li></ul></div><div class="relative" data-aos="fade-left"><img${ssrRenderAttr("src", _imports_0)} alt="Digital Marketing" class="rounded-xl shadow-lg w-full h-auto"></div></div></div></section><section class="py-16 bg-gray-50"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our Approach</h2><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Research</h3><p class="text-gray-700">We analyze your market, competition, and audience to develop effective strategies.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:target",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Strategy</h3><p class="text-gray-700">We create customized plans that align with your business objectives and budget.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:play",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Implementation</h3><p class="text-gray-700">We execute campaigns with precision, using industry best practices.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:bar-chart-2",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Optimization</h3><p class="text-gray-700">We continuously monitor and adjust to maximize performance and ROI.</p></div></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Results You Can Expect</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center" data-aos="fade-up" data-aos-delay="100"><div class="text-5xl font-bold text-primary mb-4">+150%</div><p class="text-lg font-medium">Average increase in organic traffic</p></div><div class="text-center" data-aos="fade-up" data-aos-delay="200"><div class="text-5xl font-bold text-primary mb-4">+85%</div><p class="text-lg font-medium">Increase in conversion rate</p></div><div class="text-center" data-aos="fade-up" data-aos-delay="300"><div class="text-5xl font-bold text-primary mb-4">-30%</div><p class="text-lg font-medium">Reduction in cost per acquisition</p></div></div></div></section><section class="py-16 bg-gray-50"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our Digital Marketing Services</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100"><div class="flex items-start mb-4"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold mb-2">SEO</h3><p class="text-gray-700">We optimize your website to improve its visibility in search engines and attract qualified organic traffic.</p></div></div><ul class="ml-16 space-y-2 text-gray-700"><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Complete SEO audit</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>On-page and technical optimization</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>SEO content strategy</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Quality link building</span></li></ul></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200"><div class="flex items-start mb-4"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mouse-pointer-click",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold mb-2">SEM and PPC</h3><p class="text-gray-700">We create and manage online advertising campaigns that generate immediate results and maximize your investment.</p></div></div><ul class="ml-16 space-y-2 text-gray-700"><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Google Ads campaigns</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Social media advertising</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Remarketing and retargeting</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Continuous campaign optimization</span></li></ul></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300"><div class="flex items-start mb-4"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:file-text",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold mb-2">Content Marketing</h3><p class="text-gray-700">We create relevant and valuable content that attracts, informs, and converts your target audience.</p></div></div><ul class="ml-16 space-y-2 text-gray-700"><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Content strategy</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Blog and article creation</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Social media content</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Infographics and visual content</span></li></ul></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400"><div class="flex items-start mb-4"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mail",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold mb-2">Email Marketing</h3><p class="text-gray-700">We design email marketing strategies that nurture leads, build customer loyalty, and increase sales.</p></div></div><ul class="ml-16 space-y-2 text-gray-700"><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Subscriber acquisition strategies</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Newsletter and campaign design</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Automation and segmentation</span></li><li class="flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "h-4 w-4 text-primary mr-2"
      }, null, _parent));
      _push(`<span>Results analysis and optimization</span></li></ul></div></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Tools We Use</h2><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8" data-aos="fade-up" data-aos-delay="200"><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-analytics",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Google Analytics</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-ads",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Google Ads</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "simple-icons:semrush",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">SEMrush</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:mailchimp",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Mailchimp</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:hootsuite",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Hootsuite</span></div></div></div></section><section class="py-16 bg-primary text-white"><div class="container-custom"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Ready to boost your digital marketing strategy?</h2><p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100"> Contact us today to discuss how we can help you increase your online visibility and generate more qualified leads. </p><div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/digital-marketing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=digital-marketing.vue.mjs.map
