<template>
  <section class="py-12 bg-background">
    <div class="container-custom">
      <p
        class="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8"
      >
       {{t('clients.title')}}
      </p>
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <div
          class="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
        <div
          class="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        ></div>
        <div
          class="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        ></div>
        <div
          class="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="400"
        ></div>
        <div
          class="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded opacity-60 hover:opacity-100 transition-opacity aos-init"
          data-aos="fade-up"
          data-aos-delay="500"
        ></div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t, language, setLanguage } = useLanguage();
import { useLanguage } from '~/context/language-context';

</script>

<style>
</style>