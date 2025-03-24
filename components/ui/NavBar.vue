<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-secondary/95 backdrop-blur-md py-3 shadow-sm' : 'bg-secondary py-4'
    ]"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between">
        <!-- Left Navigation Links -->
        <nav class="hidden md:flex items-center gap-8">
          <nuxt-link
            v-for="link in navLinksLeft"
            :key="link.key"
            :to="link.href"
            @click="(e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : undefined"
            class="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {{ t(link.key) }}
          </nuxt-link>
        </nav>

        <!-- Center Logo for Desktop -->
        <div class="hidden md:flex flex-shrink-0 justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 pt-5 pb-5">
          <nuxt-link to="/" class="flex items-center">
          <Icon name="Logo:dark" :size="45"/>
          </nuxt-link>
        </div>

        <!-- Logo for Mobile -->
        <div class="md:hidden flex items-center">
          <nuxt-link to="/" class="flex items-center">
            <Icon name="Logo:dark" :size="45"/>
          </nuxt-link>
        </div>

        <!-- Right Navigation Links -->
        <nav class="hidden md:flex items-center gap-8">
          <nuxt-link
            v-for="link in navLinksRight"
            :key="link.key"
            :to="link.href"
            @click="(e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : undefined"
            class="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {{ t(link.key) }}
          </nuxt-link>
          <!-- <LanguageSwitcher
            variant="minimal"
            class="text-primary hover:text-primary/80"
          /> -->
        </nav>

        <!-- Mobile Button -->
        <div class="md:hidden flex items-center gap-3 relative z-50">
          <!-- <LanguageSwitcher
            variant="minimal"
            class="text-primary"
          /> -->
          <button
            type="button"
            class="focus:outline-none text-primary p-2 rounded-md transition-colors"
            @click="isOpen = !isOpen"
            aria-label="Toggle menu"
          >
            <Icon v-if="isOpen" name="material-symbols:close" :size="24" />
            <Icon v-else name="heroicons:bars-3" :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'fixed inset-0 z-40 bg-secondary md:hidden transition-transform duration-300 ease-in-out pt-20',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full p-6">
        <nav class="flex flex-col space-y-6 items-center">
          <nuxt-link
            v-for="link in [...navLinksLeft, ...navLinksRight]"
            :key="link.key"
            :to="link.href"
            @click="(e) => {
              if (link.isAnchor) {
                handleAnchorClick(e, link.anchorId);
              } else {
                isOpen = false;
              }
            }"
            class="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {{ t(link.key) }}
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '~/context/language-context';

const { t } = useLanguage();

import LanguageSwitcher from '~/components/LanguageSwitcher.vue';

const navLinksLeft = [
  { key: "nav.about", href: "/#aboutus", isAnchor: true, anchorId: "about" },
  { key: "nav.services", href: "#services", isAnchor: true, anchorId: "services" },
];

const navLinksRight = [
  { key: "nav.blog", href: "/blog", isAnchor: false },
  { key: "nav.contact", href: "#contact", isAnchor: true, anchorId: "contact" },
];

const isOpen = ref(false);
const scrolled = ref(false);
const mounted = ref(false);
const route = useRoute();

// Determine if we're on the home page and not scrolled
const isHomeAndNotScrolled = computed(() => {
  return mounted.value && !scrolled.value && route.path === "/";
});

onMounted(() => {
  mounted.value = true;

  const handleScroll = () => {
    if (window.scrollY > 10) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  };

  window.addEventListener("scroll", handleScroll);
  
  // Cleanup
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});

// Handle smooth scrolling for anchor links
const handleAnchorClick = (e, anchorId) => {
  if (!anchorId) return;

  e.preventDefault();
  isOpen.value = false; // Close mobile menu if open

  // Only scroll if we're on the home page
  if (route.path === '/') {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // If on another page, navigate to home with hash
    window.location.href = `/#${anchorId}`;
  }
};
</script>

