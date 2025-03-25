import { ssrRenderSlot } from "vue/server-renderer";
import { ref, provide, useSSRContext } from "vue";
import enTranslations from "../locales/en.json.mjs";
import esTranslations from "../locales/es.json.mjs";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageProvider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=LanguageProvider.vue.mjs.map
