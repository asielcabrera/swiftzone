<template>
  <section
    id="aboutus"
    class="section-padding bg-secondary scroll-mt-24"
  >
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          class="order-2 lg:order-1 aos-init aos-animate"
          data-aos="fade-right"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">
            {{ t('about.title') }}
          </h2>
          <p class="text-gray-700 dark:text-gray-400 mb-6">
            {{ t('about.p1')}}
          </p>
          <p class="text-gray-700 dark:text-gray-400 mb-8">
            {{ t('about.p2')}}
          </p>
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="text-3xl font-bold text-primary mb-2">+50</p>
              <p class="text-gray-700 dark:text-gray-400">{{ t('about.stat1') }}</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-primary mb-2">+100</p>
              <p class="text-gray-700 dark:text-gray-400">{{ t('about.stat2') }}</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-primary mb-2">+20</p>
              <p class="text-gray-700 dark:text-gray-400">{{ t('about.stat3') }}</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-primary mb-2">+5</p>
              <p class="text-gray-700 dark:text-gray-400">
                {{ t('about.stat4') }}
              </p>
            </div>
          </div>
          <nuxt-link
            to="/#contact"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-primary text-white hover:bg-primary/90"
          >
            {{ t('about.cta') }}
          </nuxt-link>
        </div>
        <div
          class="order-1 lg:order-2 relative aos-init aos-animate"
          data-aos="fade-left"
        >
          <div class="relative h-[500px] w-full rounded-2xl overflow-hidden">
            <img
              alt="Equipo SwiftZone trabajando"
              decoding="async"
              data-nimg="fill"
              class="object-cover"
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                color: transparent;
              "
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#1A531D]/40 to-transparent"
            ></div>
          </div>
          <div
            class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl"
          >
            <p class="text-lg font-semibold mb-1">
              5+
              <!-- -->{{ t('about.exp') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '~/context/language-context';
const { t } = useLanguage();
</script>