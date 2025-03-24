<template>
  <footer class="bg-primary text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <img src="public/logo-white.svg" alt="SwiftZone" class="h-10 mb-6" />
          <p class="text-white mb-6">
            {{ t("footer.tagline") }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">
            {{ t("footer.quickLinks") }}
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-white hover:text-white">
                {{ t("nav.home") }}
              </router-link>
            </li>
            <li>
              <router-link to="/#services" class="text-white hover:text-white">
                {{ t("nav.services") }}
              </router-link>
            </li>
            <li>
              <router-link to="/#projects" class="text-white hover:text-white">
                {{ t("nav.projects") }}
              </router-link>
            </li>
            <li>
              <router-link to="/#aboutus" class="text-white hover:text-white">
                {{ t("nav.about") }}
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-white hover:text-white">
                {{ t("nav.blog") }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6">{{ t("footer.services") }}</h3>
          <ul class="space-y-3">
            <li>
              <router-link
                to="/services/web-development"
                class="text-white hover:text-white"
              >
                {{ t("services.web") }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/software-development"
                class="text-white hover:text-white"
              >
                {{ t("services.software") }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/digital-marketing"
                class="text-white hover:text-white"
              >
                {{ t("services.marketing") }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/ux-ui-design"
                class="text-white hover:text-white"
              >
                {{ t("services.uxui") }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/digital-strategy"
                class="text-white hover:text-white"
              >
                {{ t("services.strategy") }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6">{{ t("footer.contact") }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-white"> +1 (786) 480-3088 </span>
            </li>
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-white"> info@swiftzone.com </span>
            </li>

            <li class="flex items-start">
              <div class="flex space-x-4">
                <a href="https://x.com/swiftzonedev" class="text-white hover:text-white">
                  <Icon name="bi:twitter-x" />
                </a>
                <a href="https://www.instagram.com/swiftzone.dev/" class="text-white hover:text-white">
                  <Icon name="bi:instagram" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-white text-sm">
            &copy; {{ new Date().getFullYear() }} SwiftZone.
            {{ t("footer.rights") }}
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <router-link
              to="/privacy-policy"
              class="text-white hover:text-white text-sm"
            >
              {{ t("footer.privacy") }}
            </router-link>
            <router-link
              to="/terms-conditions"
              class="text-white hover:text-white text-sm"
            >
              {{ t("footer.terms") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from "~/context/language-context";

const { t } = useLanguage();
</script>