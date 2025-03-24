<template>
  <!-- Hero Section -->
  <section
    id="home"
    class="relative bg-secondary text-primary overflow-hidden pt-24"
  >
    <div class="container-custom relative z-10 py-16 md:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <h1
            class="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight"
            style="opacity: 1; transform: none"
          >
          {{ t('hero.title') }}

          </h1>
          <p
            class="text-base md:text-lg text-primary/80 mb-8 max-w-xl"
            style="opacity: 1; transform: none"
          >
          {{ t('hero.subtitle')}}
          </p>
          <div class="flex flex-wrap gap-4" style="opacity: 1; transform: none">
            <nuxt-link
              to="/#services"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
            >
              {{t('hero.cta.services')}}
            </nuxt-link>
            <nuxt-link
              to="/#contact"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all"
            >
              {{t('hero.cta.contact')}}
            </nuxt-link>
          </div>
        </div>
        <div class="hidden lg:flex justify-center items-center">
          <div class="relative" style="opacity: 1; transform: none">
            <img
              src="/logo.svg"
              alt="SwiftZone Logo"
              width="450"
              height="450"
              class="float-animation"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"
    ></div>
  </section>
</template>

<script setup>
const { t } = useLanguage();
import { useLanguage } from '~/context/language-context';

</script>