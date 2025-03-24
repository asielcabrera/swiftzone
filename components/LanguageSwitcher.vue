<template>
  <button
    v-if="variant === 'minimal'"
    @click="toggleLanguage"
    :class="[
      'flex items-center justify-center p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800',
      className
    ]"
    :aria-label="`Switch to ${language === 'es' ? 'English' : 'Spanish'}`"
  >
    <span class="text-sm font-medium">{{ t('language.switch') }}</span>
  </button>

  <button
    v-else
    @click="toggleLanguage"
    :class="[
      'flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800',
      className
    ]"
    :aria-label="`Switch to ${language === 'es' ? 'English' : 'Spanish'}`"
  >
    <!-- <Globe class="w-4 h-4" /> -->
    <span class="text-sm font-medium">{{ t('language.switch') }}</span>
  </button>
</template>

<script setup>
// import { Globe } from 'lucide-vue-next';
import { useLanguage } from '~/context/language-context';

const props = defineProps({
  variant: {
    type: String,
    default: 'minimal',
    validator: (value) => ['minimal', 'full'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
});

const { language, setLanguage, t } = useLanguage();

const toggleLanguage = () => {
  setLanguage(language.value === "es" ? "en" : "es");
};
</script>