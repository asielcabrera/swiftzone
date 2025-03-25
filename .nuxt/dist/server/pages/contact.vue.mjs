import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { reactive, ref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=contact.vue.mjs.map
