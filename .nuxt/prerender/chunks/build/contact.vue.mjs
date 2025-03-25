import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_0$1 from './index2.mjs';
import { reactive, ref, withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/server-renderer/index.mjs';
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
import './v3.mjs';
import '../_/renderer.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
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
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/devalue/index.js';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/plugins.mjs';
import './asyncData.mjs';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const errors = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const submitStatus = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-20 md:py-28 bg-secondary" data-aos="fade-down"><div class="container-custom"><div class="max-w-3xl mx-auto">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
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
            _push2(` Volver al inicio `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-4 w-4 mr-2"
              }),
              createTextVNode(" Volver al inicio ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Contacto </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible. </p></div></div></section><section class="py-16 md:py-24" data-aos="fade-up"><div class="container-custom"><div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8"><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label><input type="text" id="name"${ssrRenderAttr("value", formData.name)} class="${ssrRenderClass([{ "border-red-500": errors.name }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"])}" required>`);
      if (errors.name) {
        _push(`<p class="mt-1 text-sm text-red-500">${ssrInterpolate(errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label><input type="email" id="email"${ssrRenderAttr("value", formData.email)} class="${ssrRenderClass([{ "border-red-500": errors.email }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"])}" required>`);
      if (errors.email) {
        _push(`<p class="mt-1 text-sm text-red-500">${ssrInterpolate(errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label><input type="text" id="subject"${ssrRenderAttr("value", formData.subject)} class="${ssrRenderClass([{ "border-red-500": errors.subject }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"])}" required>`);
      if (errors.subject) {
        _push(`<p class="mt-1 text-sm text-red-500">${ssrInterpolate(errors.subject)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label><textarea id="message" rows="5" class="${ssrRenderClass([{ "border-red-500": errors.message }, "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"])}" required>${ssrInterpolate(formData.message)}</textarea>`);
      if (errors.message) {
        _push(`<p class="mt-1 text-sm text-red-500">${ssrInterpolate(errors.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><button type="submit" class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}>`);
      if (isSubmitting.value) {
        _push(`<span class="mr-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader",
          class: "animate-spin h-5 w-5"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Enviar mensaje")}</button></div>`);
      if (submitStatus.value) {
        _push(`<div class="${ssrRenderClass([submitStatus.value.success ? "text-green-600" : "text-red-600", "text-center mt-4"])}">${ssrInterpolate(submitStatus.value.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.vue.mjs.map
