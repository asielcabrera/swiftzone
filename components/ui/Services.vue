<template>
  <!-- Services Section -->
  <section id="services" class="section-padding bg-white scroll-mt-24">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 aos-init aos-animate"
          data-aos="fade-up"
        >
          {{ t("services.title") }}
        </h2>
        <p
          class="text-gray-600 dark:text-gray-400 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
        {{ t("services.subtitle") }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="150"
          v-for="(service, index) in services"
          :key="index"
        >
          <div
            class="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
            :class="service.color"
          >
            <Icon :name="service.icon" :class="service.iconColor"/>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ t(service.titleKey) }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ t(service.descriptionKey) }}
          </p>
          <nuxt-link
            :to="`/services/${service.slug}`"
            class="inline-flex items-center text-primary font-medium hover:underline cursor-pointer"
          >
            {{ t("services.seeMore") }}
            <Icon name="lucide:arrow-up-right" class="ml-1 h-4 w-4" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useLanguage();
import { useLanguage } from "~/context/language-context";
import { services } from "~/context/services";

</script>


