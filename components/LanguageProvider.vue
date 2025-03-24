<template>
    <slot></slot>
</template>

<script setup>
import { ref, provide } from 'vue';
import enTranslations from '~/locales/en.json';
import esTranslations from '~/locales/es.json';

const language = ref('en');
const translations = {
  en: enTranslations,
  es: esTranslations
};

const t = (key) => {
  const keys = key.split('.');
  let result = translations[language.value];
  
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }
  
  return result;
};

const setLanguage = (lang) => {
  if (translations[lang]) {
    language.value = lang;
  }
};

// Provide the language context to all components
provide('language', {
  language,
  t,
  setLanguage
});
</script>