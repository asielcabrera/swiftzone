import { ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/server-renderer/index.mjs';
import { ref, provide, useSSRContext, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, resolveComponent, renderSlot } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_0$1 from './index2.mjs';
import { useRoute } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useLanguage } from './language-context.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ufo/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/vue/dist/iconify.mjs';
import './v3.mjs';
import '../_/renderer.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/destr/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/hookable/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ohash/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/klona/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/defu/dist/defu.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/scule/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unctx/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/radix3/dist/index.mjs';
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

const nav$1 = { "home": "Home", "services": "Services", "projects": "Projects", "about": "About Us", "blog": "Blog", "contact": "Contact", "login": "Login", "contactUs": "Contact Us" };
const hero = { "title": "We Drive Digital Growth for Your Business", "subtitle": "We are an agency specialized in digital marketing and software development that combines creativity and technology to boost your digital presence.", "cta": { "services": "Our Services", "contact": "Contact Us" } };
const clients = { "title": "THEY TRUST US" };
const services = { "title": "Our Services", "subtitle": "We offer comprehensive digital marketing and software development solutions to help you achieve your business goals.", "uxui": "UX/UI Design", "uxuiDesc": "We create intuitive and attractive digital experiences that captivate users and increase conversion.", "software": "Software Development", "softwareDesc": "We develop custom technological solutions, web and mobile applications that optimize processes and improve results.", "marketing": "Digital Marketing", "marketingDesc": "We implement effective digital marketing strategies to increase your online visibility and generate qualified leads.", "strategy": "Digital Strategy", "strategyDesc": "We design comprehensive digital strategies that align your business objectives with actions in the digital environment.", "web": "Web Development", "webDesc": "We create modern, responsive and SEO-optimized websites that highlight your brand and generate results.", "consulting": "Technology Consulting", "consultingDesc": "We advise on the implementation of technological solutions that optimize processes and enhance business growth.", "seeMore": "Learn more" };
const about$1 = { "title": "We Transform Ideas into Digital Solutions", "p1": "At SwiftZone, we are passionate about innovation and developing digital solutions that make a difference. With over 5 years of experience, we have helped companies from various sectors enhance their digital presence.", "p2": "Our multidisciplinary team combines expertise in digital marketing, software development, and UX/UI design to offer comprehensive solutions that positively impact your business growth.", "stat1": "Satisfied Clients", "stat2": "Completed Projects", "stat3": "Professionals", "stat4": "Years of Experience", "cta": "Concact Us", "exp": "Experience in the sector" };
const footer = { "rights": "Copyright © 2025 SwiftZone. All rights reserved.", "privacy": "Privacy Policy", "terms": "Terms of Service", "quickLinks": "Quick Links", "contact": "Contact Us", "services": "Our Services", "tagline": "We are an agency specialized in digital marketing and software development that combines creativity and technology to boost your digital presence." };
const language$1 = { "switch": "ES" };
const projects = { "title": "Our Projects", "subtitle": "Check out some of our recent work that showcases our expertise and creativity.", "viewAll": "View All Projects", "viewDetails": "View Details" };
const testimonials = { "title": "What Our Clients Say", "subtitle": "Don't just take our word for it. Here's what our clients have to say about working with us." };
const enTranslations = {
  nav: nav$1,
  hero,
  clients,
  services,
  about: about$1,
  footer,
  language: language$1,
  projects,
  testimonials
};

const nav = { "home": "Inicio", "services": "Servicios", "projects": "Proyectos", "about": "Acerca de", "blog": "Blog", "contact": "Contacto" };
const about = { "title": "Transformamos Ideas en Soluciones Digitales", "p1": "En SwiftZone, nos apasiona la innovación y el desarrollo de soluciones digitales que marcan la diferencia. Con más de 5 años de experiencia, hemos ayudado a empresas de diversos sectores a potenciar su presencia digital.", "p2": "Nuestro equipo multidisciplinar combina expertise en marketing digital, desarrollo de software y diseño UX/UI para ofrecer soluciones integrales que impactan positivamente en el crecimiento de tu negocio.", "stat1": "Clientes satisfechos", "stat2": "Proyectos completados", "stat3": "Profesionales", "stat4": "Años de experiencia", "cta": "Conoce a nuestro equipo", "exp": "Experiencia en el sector" };
const language = { "switch": "EN" };
const esTranslations = {
  nav,
  about,
  language
};

const _sfc_main$3 = {
  __name: "LanguageProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const language = ref("en");
    const translations = {
      en: enTranslations,
      es: esTranslations
    };
    const t = (key) => {
      const keys = key.split(".");
      let result = translations[language.value];
      for (const k of keys) {
        if (result && result[k]) {
          result = result[k];
        } else {
          return key;
        }
      }
      return result;
    };
    const setLanguage = (lang) => {
      if (translations[lang]) {
        language.value = lang;
      }
    };
    provide("language", {
      language,
      t,
      setLanguage
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageProvider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    const navLinksLeft = [
      { key: "nav.about", href: "/#aboutus", isAnchor: true, anchorId: "about" },
      { key: "nav.services", href: "#services", isAnchor: true, anchorId: "services" }
    ];
    const navLinksRight = [
      { key: "nav.blog", href: "/blog", isAnchor: false },
      { key: "nav.contact", href: "#contact", isAnchor: true, anchorId: "contact" }
    ];
    const isOpen = ref(false);
    const scrolled = ref(false);
    const mounted = ref(false);
    const route = useRoute();
    computed(() => {
      return mounted.value && !scrolled.value && route.path === "/";
    });
    const handleAnchorClick = (e, anchorId) => {
      if (!anchorId) return;
      e.preventDefault();
      isOpen.value = false;
      if (route.path === "/") {
        const element = (void 0).getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        (void 0).location.href = `/#${anchorId}`;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled.value ? "bg-secondary/95 backdrop-blur-md py-3 shadow-sm" : "bg-secondary py-4"
        ]
      }, _attrs))}><div class="container-custom"><div class="flex items-center justify-between"><nav class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navLinksLeft, (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: link.key,
          to: link.href,
          onClick: (e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : void 0,
          class: "text-primary hover:text-primary/80 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(link.key))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(link.key)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="hidden md:flex flex-shrink-0 justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 pt-5 pb-5">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "Logo:dark",
              size: 45
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "Logo:dark",
                size: 45
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden flex items-center">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "Logo:dark",
              size: 45
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "Logo:dark",
                size: 45
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navLinksRight, (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: link.key,
          to: link.href,
          onClick: (e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : void 0,
          class: "text-primary hover:text-primary/80 font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(link.key))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(link.key)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="md:hidden flex items-center gap-3 relative z-50"><button type="button" class="focus:outline-none text-primary p-2 rounded-md transition-colors" aria-label="Toggle menu">`);
      if (isOpen.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:close",
          size: 24
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:bars-3",
          size: 24
        }, null, _parent));
      }
      _push(`</button></div></div></div><div class="${ssrRenderClass([
        "fixed inset-0 z-40 bg-secondary md:hidden transition-transform duration-300 ease-in-out pt-20",
        isOpen.value ? "translate-x-0" : "translate-x-full"
      ])}"><div class="flex flex-col h-full p-6"><nav class="flex flex-col space-y-6 items-center"><!--[-->`);
      ssrRenderList([...navLinksLeft, ...navLinksRight], (link) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: link.key,
          to: link.href,
          onClick: (e) => {
            if (link.isAnchor) {
              handleAnchorClick(e, link.anchorId);
            } else {
              isOpen.value = false;
            }
          },
          class: "text-lg font-medium text-primary hover:text-primary/80 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(link.key))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(link.key)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _imports_0 = "" + __buildAssetsURL("logo-white.COLERL2I.svg");

const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Icon = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary text-white pt-16 pb-8" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div><img${ssrRenderAttr("src", _imports_0)} alt="SwiftZone" class="h-10 mb-6"><p class="text-white mb-6">${ssrInterpolate(unref(t)("footer.tagline"))}</p></div><div><h3 class="text-lg font-semibold mb-6">${ssrInterpolate(unref(t)("footer.quickLinks"))}</h3><ul class="space-y-3"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/#services",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/#projects",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.projects"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/#aboutus",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/blog",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.blog"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.blog")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-6">${ssrInterpolate(unref(t)("footer.services"))}</h3><ul class="space-y-3"><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/web-development",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.web"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.web")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/software-development",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.software"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.software")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/digital-marketing",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.marketing"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.marketing")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/ux-ui-design",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.uxui"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.uxui")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/services/digital-strategy",
        class: "text-white hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services.strategy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services.strategy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-6">${ssrInterpolate(unref(t)("footer.contact"))}</h3><ul class="space-y-3"><li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span class="text-white"> +1 (786) 480-3088 </span></li><li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span class="text-white"> info@swiftzone.com </span></li><li class="flex items-start"><div class="flex space-x-4"><a href="https://x.com/swiftzonedev" class="text-white hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:twitter-x" }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/swiftzone.dev/" class="text-white hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, { name: "bi:instagram" }, null, _parent));
      _push(`</a></div></li></ul></div></div><div class="border-t border-gray-800 mt-12 pt-8"><div class="flex flex-col md:flex-row justify-between items-center"><p class="text-white text-sm"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SwiftZone. ${ssrInterpolate(unref(t)("footer.rights"))}</p><div class="flex space-x-6 mt-4 md:mt-0">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/privacy-policy",
        class: "text-white hover:text-white text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "/terms-conditions",
        class: "text-white hover:text-white text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("footer.terms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("footer.terms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LanguageProvider = _sfc_main$3;
  const _component_NavBar = _sfc_main$2;
  const _component_Footer = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LanguageProvider, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NavBar, null, null, _parent2, _scopeId));
        _push2(`<main class="min-h-screen pt-20"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</main>`);
        _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NavBar),
          createVNode("main", { class: "min-h-screen pt-20" }, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createVNode(_component_Footer)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
