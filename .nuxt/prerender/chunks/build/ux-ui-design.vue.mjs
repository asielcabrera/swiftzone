import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_0$1 from './index2.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useHead } from './v3.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/hookable/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unctx/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/radix3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/defu/dist/defu.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/klona/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/css/icon.mjs';
import './asyncData.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/destr/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ohash/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/pathe/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/consola/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ipx/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/devalue/index.js';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/plugins.mjs';

const _imports_0 = publicAssetsURL("/images/services/ux-ui-design.jpg");

const _sfc_main = {
  __name: "ux-ui-design",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "UX/UI Design - SwiftZone",
      meta: [
        { name: "description", content: "Professional UX/UI design services. We create intuitive and attractive digital experiences that connect with your users and enhance conversion." }
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
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> UX/UI Design </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> We create intuitive and attractive digital experiences that connect with your users and enhance conversion. </p></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div data-aos="fade-right"><h2 class="text-2xl md:text-3xl font-bold mb-6">User-centered design</h2><p class="text-gray-700 mb-6"> At SwiftZone, we create interfaces that are not only visually attractive but also functional and intuitive. Our user-centered approach ensures that every design element has a purpose and contributes to a seamless experience. </p><p class="text-gray-700 mb-6"> We combine principles of psychology, user research, and the latest design trends to create digital experiences that stand out and convert. </p><ul class="space-y-3 mb-8"><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>User Interface (UI) Design</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>User Experience (UX)</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Wireframing and prototyping</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>User research</span></li><li class="flex items-start">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<span>Design systems</span></li></ul></div><div class="relative" data-aos="fade-left"><img${ssrRenderAttr("src", _imports_0)} alt="UX/UI Design" class="rounded-xl shadow-lg w-full h-auto"></div></div></div></section><section class="py-16 bg-gray-50"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our design process</h2><div class="grid grid-cols-1 md:grid-cols-5 gap-8"><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Research</h3><p class="text-gray-700">We understand your users, their needs, and behaviors.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:layout",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Wireframing</h3><p class="text-gray-700">We create basic layouts to define structure and functionality.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:palette",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Visual Design</h3><p class="text-gray-700">We apply visual styles aligned with your brand and objectives.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:smartphone",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Prototyping</h3><p class="text-gray-700">We create interactive prototypes to validate the experience.</p></div><div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="500"><div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-square",
        class: "h-6 w-6 text-primary"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3">Testing</h3><p class="text-gray-700">We validate the design with real users and refine based on feedback.</p></div></div></div></section><section class="py-16 md:py-24"><div class="container-custom"><h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Tools we use</h2><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-aos="fade-up" data-aos-delay="200"><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:figma",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Figma</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:sketch",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Sketch</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:adobe-xd",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Adobe XD</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:invision",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">InVision</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:zeplin",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Zeplin</span></div><div class="flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:adobe-photoshop",
        class: "h-16 mb-4"
      }, null, _parent));
      _push(`<span class="text-center font-medium">Photoshop</span></div></div></div></section><section class="py-16 bg-primary text-white"><div class="container-custom"><div class="max-w-3xl mx-auto text-center"><h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Ready to improve your users&#39; experience?</h2><p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100"> Contact us today to discuss how we can help you create intuitive and attractive interfaces. </p><div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/ux-ui-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ux-ui-design.vue.mjs.map
