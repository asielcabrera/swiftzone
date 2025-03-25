import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode, reactive, ref } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useLanguage } from './language-context.mjs';
import __nuxt_component_0$1 from './index2.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/ufo/dist/index.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/h3/dist/index.mjs';
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
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/@iconify/vue/dist/iconify.mjs';
import './v3.mjs';
import '../_/renderer.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/server.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/devalue/index.js';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/unhead/dist/plugins.mjs';
import './asyncData.mjs';
import 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = publicAssetsURL("/logo.svg");

const _sfc_main$6 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "relative bg-secondary text-primary overflow-hidden pt-24"
      }, _attrs))}><div class="container-custom relative z-10 py-16 md:py-24"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"><div><h1 class="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}">${ssrInterpolate(unref(t)("hero.title"))}</h1><p class="text-base md:text-lg text-primary/80 mb-8 max-w-xl" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}">${ssrInterpolate(unref(t)("hero.subtitle"))}</p><div class="flex flex-wrap gap-4" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#services",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.cta.services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.cta.services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#contact",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.cta.contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.cta.contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden lg:flex justify-center items-center"><div class="relative" style="${ssrRenderStyle({ "opacity": "1", "transform": "none" })}"><img${ssrRenderAttr("src", _imports_0)} alt="SwiftZone Logo" width="450" height="450" class="float-animation" style="${ssrRenderStyle({ "max-width": "100%" })}"></div></div></div></div><div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const services = [
  {
    id: "diseno-ux-ui",
    titleKey: "services.uxui",
    descriptionKey: "services.uxuiDesc",
    icon: "lucide:pen-tool",
    color: "bg-violet-100 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    slug: "ux-ui-design",
    features: [
      "Investigación y análisis de usuarios",
      "Wireframes y prototipos interactivos",
      "Diseño visual de interfaces",
      "Pruebas de usabilidad",
      "Optimización de experiencia de usuario"
    ]
  },
  {
    id: "desarrollo-software",
    titleKey: "services.software",
    descriptionKey: "services.softwareDesc",
    icon: "lucide:code",
    color: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    slug: "software-development",
    features: [
      "Desarrollo a medida",
      "Aplicaciones web progresivas (PWA)",
      "Arquitectura de software",
      "Integración de APIs",
      "Mantenimiento y soporte"
    ]
  },
  {
    id: "marketing-digital",
    titleKey: "services.marketing",
    descriptionKey: "services.marketingDesc",
    icon: "lucide:chart-no-axes-column-increasing",
    color: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    slug: "digital-marketing",
    features: [
      "SEO (Optimización para motores de búsqueda)",
      "SEM (Marketing en motores de búsqueda)",
      "Gestión de redes sociales",
      "Email marketing",
      "Análisis y reporting"
    ]
  },
  {
    id: "estrategia-digital",
    titleKey: "services.strategy",
    descriptionKey: "services.strategyDesc",
    icon: "lucide:layers",
    color: "bg-red-100 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400",
    slug: "digital-strategy",
    features: [
      "Consultoría estratégica digital",
      "Planificación de roadmap digital",
      "Análisis de competencia",
      "Definición de KPIs",
      "Optimización de conversión"
    ]
  },
  {
    id: "desarrollo-web",
    titleKey: "services.web",
    descriptionKey: "services.webDesc",
    icon: "lucide:monitor",
    color: "bg-amber-100 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    slug: "web-development",
    features: [
      "Diseño web a medida",
      "Desarrollo de tiendas online",
      "Optimización de velocidad",
      "Sitios web responsivos",
      "CMS personalizados"
    ]
  },
  {
    id: "consultoria-tecnologica",
    titleKey: "services.consulting",
    descriptionKey: "services.consultingDesc",
    icon: "lucide:message-square",
    color: "bg-teal-100 dark:bg-teal-900/20",
    iconColor: "text-teal-600 dark:text-teal-400",
    slug: "technology-consulting",
    features: [
      "Auditoría de sistemas",
      "Consultoría de transformación digital",
      "Optimización de infraestructura",
      "Análisis de datos",
      "Seguridad informática"
    ]
  }
];

const _sfc_main$5 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section-padding bg-white scroll-mt-24"
      }, _attrs))}><div class="container-custom"><div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4 aos-init aos-animate" data-aos="fade-up">${ssrInterpolate(unref(t)("services.title"))}</h2><p class="text-gray-600 dark:text-gray-400 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">${ssrInterpolate(unref(t)("services.subtitle"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(services), (service, index) => {
        _push(`<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"><div class="${ssrRenderClass([service.color, "w-14 h-14 rounded-lg flex items-center justify-center mb-6"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          class: service.iconColor
        }, null, _parent));
        _push(`</div><h3 class="text-xl font-bold mb-3">${ssrInterpolate(unref(t)(service.titleKey))}</h3><p class="text-gray-600 dark:text-gray-400 mb-4">${ssrInterpolate(unref(t)(service.descriptionKey))}</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/services/${service.slug}`,
          class: "inline-flex items-center text-primary font-medium hover:underline cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("services.seeMore"))} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "ml-1 h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("services.seeMore")) + " ", 1),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-up-right",
                  class: "ml-1 h-4 w-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "aboutus",
        class: "section-padding bg-secondary scroll-mt-24"
      }, _attrs))}><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="order-2 lg:order-1 aos-init aos-animate" data-aos="fade-right"><h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">${ssrInterpolate(unref(t)("about.title"))}</h2><p class="text-gray-700 dark:text-gray-400 mb-6">${ssrInterpolate(unref(t)("about.p1"))}</p><p class="text-gray-700 dark:text-gray-400 mb-8">${ssrInterpolate(unref(t)("about.p2"))}</p><div class="grid grid-cols-2 gap-6 mb-8"><div><p class="text-3xl font-bold text-primary mb-2">+50</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat1"))}</p></div><div><p class="text-3xl font-bold text-primary mb-2">+100</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat2"))}</p></div><div><p class="text-3xl font-bold text-primary mb-2">+20</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat3"))}</p></div><div><p class="text-3xl font-bold text-primary mb-2">+5</p><p class="text-gray-700 dark:text-gray-400">${ssrInterpolate(unref(t)("about.stat4"))}</p></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/#contact",
        class: "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("about.cta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("about.cta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="order-1 lg:order-2 relative aos-init aos-animate" data-aos="fade-left"><div class="relative h-[500px] w-full rounded-2xl overflow-hidden"><img alt="Equipo SwiftZone trabajando" decoding="async" data-nimg="fill" class="object-cover" style="${ssrRenderStyle({ "position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent" })}" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"><div class="absolute inset-0 bg-gradient-to-t from-[#1A531D]/40 to-transparent"></div></div><div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl"><p class="text-lg font-semibold mb-1"> 5+ ${ssrInterpolate(unref(t)("about.exp"))}</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    const projects = [
      {
        title: "E-commerce Platform Redesign",
        description: "Complete redesign and development of an e-commerce platform with improved UX and conversion rates.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        tags: ["E-commerce", "UX/UI", "Web Development"]
      },
      {
        title: "Marketing Automation System",
        description: "Custom marketing automation solution that increased lead generation by 45% for a B2B company.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        tags: ["Marketing", "Automation", "CRM"]
      },
      {
        title: "Mobile Banking App",
        description: "Secure and user-friendly mobile banking application with advanced features and biometric authentication.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["Mobile App", "Fintech", "Security"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "section-padding bg-white scroll-mt-24"
      }, _attrs))}><div class="container-custom"><div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">${ssrInterpolate(unref(t)("projects.title"))}</h2><p class="text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">${ssrInterpolate(unref(t)("projects.subtitle"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(projects, (project, index) => {
        _push(`<div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", 150 + index * 50)}><div class="relative h-60 overflow-hidden"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"></div><div class="p-6"><div class="flex flex-wrap gap-2 mb-3"><!--[-->`);
        ssrRenderList(project.tags, (tag, tagIndex) => {
          _push(`<span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><h3 class="text-xl font-bold mb-2">${ssrInterpolate(project.title)}</h3><p class="text-gray-600 dark:text-gray-400 mb-4">${ssrInterpolate(project.description)}</p><a href="#" class="inline-flex items-center text-primary font-medium hover:underline">${ssrInterpolate(unref(t)("projects.viewDetails"))} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-12"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all">${ssrInterpolate(unref(t)("projects.viewAll"))}</button></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Projects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLanguage();
    const testimonials = [
      {
        name: "Sarah Johnson",
        position: "Marketing Director",
        company: "TechCorp",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        quote: "Working with SwiftZone has been a game-changer for our digital marketing strategy. Their team is professional, creative, and delivers results that exceed expectations. Our online presence has grown significantly since partnering with them."
      },
      {
        name: "Michael Chen",
        position: "CEO",
        company: "Innovate Solutions",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "The software solution developed by SwiftZone has streamlined our operations and increased our productivity by 35%. Their attention to detail and commitment to understanding our business needs made all the difference."
      },
      {
        name: "Emily Rodriguez",
        position: "E-commerce Manager",
        company: "StyleHub",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        quote: "The website redesign by SwiftZone transformed our online store. Not only does it look amazing, but our conversion rates have improved by 40%. Their team was responsive, professional, and a pleasure to work with."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding bg-secondary scroll-mt-24" }, _attrs))}><div class="container-custom"><div class="text-center max-w-3xl mx-auto mb-16"><h2 class="text-3xl md:text-4xl font-bold mb-4 text-primary" data-aos="fade-up">${ssrInterpolate(unref(t)("testimonials.title"))}</h2><p class="text-gray-700 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">${ssrInterpolate(unref(t)("testimonials.subtitle"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(`<div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", 150 + index * 50)}><div class="flex items-center mb-6"><div class="mr-4"><img${ssrRenderAttr("src", testimonial.avatar)}${ssrRenderAttr("alt", testimonial.name)} class="w-14 h-14 rounded-full object-cover"></div><div><h4 class="font-bold text-lg">${ssrInterpolate(testimonial.name)}</h4><p class="text-gray-600 text-sm">${ssrInterpolate(testimonial.position)}, ${ssrInterpolate(testimonial.company)}</p></div></div><div class="mb-4"><div class="flex text-yellow-400"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(ssrRenderComponent(_component_Icon, {
            key: i,
            name: "material-symbols:star",
            size: 20
          }, null, _parent));
        });
        _push(`<!--]--></div></div><p class="text-gray-700 italic"> &quot;${ssrInterpolate(testimonial.quote)}&quot; </p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
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
      const _component_Icon = __nuxt_component_0$1;
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = _sfc_main$6;
  const _component_Services = _sfc_main$5;
  const _component_About = _sfc_main$4;
  const _component_Projects = _sfc_main$3;
  const _component_Testimonials = _sfc_main$2;
  const _component_Contact = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Projects, null, null, _parent));
  _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
