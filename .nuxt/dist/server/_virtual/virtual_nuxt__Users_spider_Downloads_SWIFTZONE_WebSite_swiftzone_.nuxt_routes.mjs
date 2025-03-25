function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/contact.vue.mjs")
  },
  {
    name: "blogtest",
    path: "/blogtest",
    component: () => import("../pages/blogtest.vue.mjs")
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import("../pages/blog/index.vue.mjs")
  },
  {
    name: "blog-slug",
    path: "/blog/:slug()",
    component: () => import("../pages/blog/_slug_.vue.mjs")
  },
  {
    name: "services-ux-ui-design",
    path: "/services/ux-ui-design",
    component: () => import("../pages/services/ux-ui-design.vue.mjs")
  },
  {
    name: "services-web-development",
    path: "/services/web-development",
    component: () => import("../pages/services/web-development.vue.mjs")
  },
  {
    name: "services-digital-strategy",
    path: "/services/digital-strategy",
    component: () => import("../pages/services/digital-strategy.vue.mjs")
  },
  {
    name: "services-digital-marketing",
    path: "/services/digital-marketing",
    component: () => import("../pages/services/digital-marketing.vue.mjs")
  },
  {
    name: "services-software-development",
    path: "/services/software-development",
    component: () => import("../pages/services/software-development.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__Users_spider_Downloads_SWIFTZONE_WebSite_swiftzone_.nuxt_routes.mjs.map
