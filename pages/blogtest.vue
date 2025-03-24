<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-28 bg-secondary" data-aos="fade-down">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <nuxt-link to="/" class="inline-flex items-center text-primary font-medium mb-6 hover:underline" data-aos="fade-right" data-aos-delay="100">
            <Icon name="lucide:arrow-left" class="h-4 w-4 mr-2" /> Volver al inicio
          </nuxt-link>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200">
            Blog
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            Últimas noticias, artículos y recursos sobre marketing digital, desarrollo de software y tendencias tecnológicas.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="py-16 md:py-24" data-aos="fade-up">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(post, index) in blogPosts"
            :key="post.id"
            class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            :data-aos-delay="150 + (index * 100)"
          >
            <div class="relative h-56 w-full">
              <img
                :src="post.image"
                :alt="post.title"
                class="object-cover w-full h-full"
              />
              <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {{ post.category }}
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ post.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ post.author }}</span>
              </div>
              <h3 class="text-xl font-bold mb-2 line-clamp-2">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ post.summary }}
              </p>
              <nuxt-link :to="`/blog/${post.id}`">
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-4 py-2 w-full border-primary text-primary bg-transparent hover:bg-primary hover:text-white">
                  Leer artículo
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 py-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white mx-auto">
            Cargar más artículos
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {blogPosts} from '~/context/blogpost';
</script>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>