import { inject } from 'file:///Users/spider/Downloads/SWIFTZONE/WebSite/swiftzone/node_modules/vue/index.mjs';

function useLanguage() {
  const languageContext = inject("language");
  if (!languageContext) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return languageContext;
}

export { useLanguage as u };
//# sourceMappingURL=language-context.mjs.map
