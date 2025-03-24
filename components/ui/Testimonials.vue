<template>
  <section class="section-padding bg-secondary scroll-mt-24">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 text-primary"
          data-aos="fade-up"
        >
          {{ t('testimonials.title') }}
        </h2>
        <p
          class="text-gray-700 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ t('testimonials.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          data-aos="fade-up"
          :data-aos-delay="150 + (index * 50)"
        >
          <div class="flex items-center mb-6">
            <div class="mr-4">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                class="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-bold text-lg">{{ testimonial.name }}</h4>
              <p class="text-gray-600 text-sm">{{ testimonial.position }}, {{ testimonial.company }}</p>
            </div>
          </div>
          
          <div class="mb-4">
            <div class="flex text-yellow-400">
              <Icon v-for="i in 5" :key="i" name="material-symbols:star" :size="20" />
            </div>
          </div>
          
          <p class="text-gray-700 italic">
            "{{ testimonial.quote }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '~/context/language-context';
const { t } = useLanguage();

// Sample testimonials data - you can replace this with your actual data
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "Working with SwiftZone has been a game-changer for our digital marketing strategy. Their team is professional, creative, and delivers results that exceed expectations. Our online presence has grown significantly since partnering with them."
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The software solution developed by SwiftZone has streamlined our operations and increased our productivity by 35%. Their attention to detail and commitment to understanding our business needs made all the difference."
  },
  {
    name: "Emily Rodriguez",
    position: "E-commerce Manager",
    company: "StyleHub",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "The website redesign by SwiftZone transformed our online store. Not only does it look amazing, but our conversion rates have improved by 40%. Their team was responsive, professional, and a pleasure to work with."
  }
];
</script>