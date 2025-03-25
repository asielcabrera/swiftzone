import __nuxt_component_0 from "../../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0$1 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { withAsyncContext, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useAsyncData } from "../../node_modules/nuxt/dist/app/composables/asyncData.mjs";
import { queryCollection } from "../../node_modules/_nuxt/content/dist/runtime/app.mjs";
import { useHead } from "../../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
/* empty css            */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-posts",
      () => queryContent("blog").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const { data: blog } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => queryCollection("content").path("/").first(), "$ns2Xa_1kks")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Blog - SwiftZone",
      meta: [
        { name: "description", content: "Latest news, articles, and resources about digital marketing, software development, and technology trends." }
      ]
    });
    console.log("Posts loaded:", blog.value);
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
            _push2(` Back to home `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "h-4 w-4 mr-2"
              }),
              createTextVNode(" Back to home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200"> Blog </h1><p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300"> Latest news, articles, and resources about digital marketing, software development, and technology trends. </p></div></div></section><section class="py-16 md:py-24" data-aos="fade-up"><div class="container-custom"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(`<div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300" data-aos="zoom-in"${ssrRenderAttr("data-aos-delay", 150 + index * 100)}><div class="relative h-56 w-full"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="object-cover w-full h-full"><div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">${ssrInterpolate(post.category)}</div></div><div class="p-6"><div class="flex items-center text-sm text-gray-500 mb-3"><span>${ssrInterpolate(post.date)}</span><span class="mx-2">•</span><span>${ssrInterpolate(post.author)}</span></div><h3 class="text-xl font-bold mb-2 line-clamp-2">${ssrInterpolate(post.title)}</h3><p class="text-gray-600 mb-4 line-clamp-3">${ssrInterpolate(post.description)}</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: post._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-10 rounded-md px-4 py-2 w-full border-primary text-primary bg-transparent hover:bg-primary hover:text-white"${_scopeId}> Read article </button>`);
            } else {
              return [
                createVNode("button", { class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-4 py-2 w-full border-primary text-primary bg-transparent hover:bg-primary hover:text-white" }, " Read article ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="600"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 py-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white mx-auto"> Load more articles </button></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
