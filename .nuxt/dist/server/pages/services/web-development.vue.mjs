import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import "../../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue.mjs";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
import _sfc_main$1 from "../../node_modules/_nuxt/image/dist/runtime/components/NuxtImg.vue2.mjs";
const _sfc_main = {
  __name: "web-development",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Web Development - SwiftZone",
      meta: [
        { name: "description", content: "Professional web development services for businesses. We create custom websites and web applications that drive your business growth." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$1;
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
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Web Development </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> We create custom websites and web applications that drive your business growth and enhance your users&#39; experience. </p></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div data-aos="fade-right"><h2 class="text-2xl md:text-3xl font-bold mb-6">Custom web solutions for your business</h2><p class="text-gray-700 mb-6"> At SwiftZone, we develop websites and web applications that not only look good but also function perfectly. Our approach focuses on creating digital experiences that convert visitors into customers. </p><p class="text-gray-700 mb-6"> We use the latest technologies and best practices to ensure your web presence is fast, secure, and scalable. </p><ul class="space-y-3 mb-8"><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Corporate websites and landing pages</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Online stores and e-commerce platforms</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Progressive Web Applications (PWA)</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Mobile optimization</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>CMS and content management system integration</span></li></ul></div><div class="relative" data-aos="fade-left">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/services/web-development.jpg",
        alt: "Web Development",
        class: "rounded-xl shadow-lg w-full h-auto"
      }, null, _parent));
      _push(`</div></div></div></section><section class="py-16 bg-gray-50"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Technologies we use</h2><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-aos="fade-up" data-aos-delay="200"><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ci:html5",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">HTML5</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ci:css3",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">CSS3</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ci:javascript",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">JavaScript</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "hugeicons:react",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">React</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:vuejs",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Vue.js</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "proicons:nodejs",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Node.js</span></div></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our development process</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:lightbulb",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Discovery</h3><p class="text-gray-700">We understand your needs, goals, and target audience to create an effective strategy.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:pencil",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Design</h3><p class="text-gray-700">We create wireframes and visual designs that reflect your brand and enhance the user experience.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:code",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Development</h3><p class="text-gray-700">We transform designs into code, building functional and optimized websites.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:rocket",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Launch</h3><p class="text-gray-700">We conduct thorough testing and deploy your website, ensuring optimal performance.</p></div></div></div></section><section class="py-16 bg-primary text-white"><div class="container-custom"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Ready to boost your web presence?</h2><p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100"> Contact us today to discuss how we can help you create an exceptional web experience. </p><div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/web-development.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=web-development.vue.mjs.map
