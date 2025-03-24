import { inject } from 'vue';
import LanguageProvider from '~/components/LanguageProvider.vue';

export function useLanguage() {
  const languageContext = inject('language');
  
  if (!languageContext) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return languageContext;
}

export { LanguageProvider };