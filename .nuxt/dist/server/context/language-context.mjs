import { inject } from "vue";
function useLanguage() {
  const languageContext = inject("language");
  if (!languageContext) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return languageContext;
}
export {
  useLanguage
};
//# sourceMappingURL=language-context.mjs.map
