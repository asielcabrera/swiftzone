import __nuxt_component_0 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Contact",
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
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "section-padding bg-primary text-white scroll-mt-24"
      }, _attrs))}><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div data-aos="fade-right" class="aos-init"><h2 class="text-3xl md:text-4xl font-bold mb-6"> Ready to Boost Your Digital Presence? </h2><p class="text-primary-foreground/90 text-lg mb-8 max-w-xl"> Contact us today and discover how we can help you achieve your business goals through innovative digital solutions. </p></div><div class="relative aos-init" data-aos="fade-left"><div class="bg-primary-foreground/10 p-8 rounded-xl backdrop-blur-sm"><h3 class="text-xl font-bold mb-4">Have a question?</h3><p class="text-primary-foreground/80 mb-6"> Fill out the form and we&#39;ll get back to you as soon as possible. </p><form class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><input type="text" placeholder="Name"${ssrRenderAttr("value", formData.name)} class="${ssrRenderClass([{ "border-red-500": errors.name }, "w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"])}">`);
      if (errors.name) {
        _push(`<p class="mt-1 text-sm text-red-300">${ssrInterpolate(errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><input type="email" placeholder="Email"${ssrRenderAttr("value", formData.email)} class="${ssrRenderClass([{ "border-red-500": errors.email }, "w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"])}">`);
      if (errors.email) {
        _push(`<p class="mt-1 text-sm text-red-300">${ssrInterpolate(errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><input type="text" placeholder="Subject"${ssrRenderAttr("value", formData.subject)} class="${ssrRenderClass([{ "border-red-500": errors.subject }, "w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"])}">`);
      if (errors.subject) {
        _push(`<p class="mt-1 text-sm text-red-300">${ssrInterpolate(errors.subject)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><textarea placeholder="Message" rows="4" class="${ssrRenderClass([{ "border-red-500": errors.message }, "w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"])}">${ssrInterpolate(formData.message)}</textarea>`);
      if (errors.message) {
        _push(`<p class="mt-1 text-sm text-red-300">${ssrInterpolate(errors.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90">`);
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
      _push(` ${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</button>`);
      if (submitStatus.value) {
        _push(`<div class="${ssrRenderClass([submitStatus.value.success ? "text-green-300" : "text-red-300", "text-center mt-4"])}">${ssrInterpolate(submitStatus.value.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Contact.vue.mjs.map
