<template>
  <section id="projects" class="section-padding bg-white scroll-mt-24">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          {{ t('projects.title') }}
        </h2>
        <p
          class="text-gray-600 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ t('projects.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          data-aos="fade-up"
          :data-aos-delay="150 + (index * 50)"
        >
          <div class="relative h-60 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span 
                v-for="(tag, tagIndex) in project.tags" 
                :key="tagIndex"
                class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {{ tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <a 
              href="#" 
              class="inline-flex items-center text-primary font-medium hover:underline"
            >
              {{ t('projects.viewDetails') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-1 h-4 w-4"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all"
        >
          {{ t('projects.viewAll') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '~/context/language-context';
const { t } = useLanguage();

// Sample projects data - you can replace this with your actual data
const projects = [
  {
    title: "E-commerce Platform Redesign",
    description: "Complete redesign and development of an e-commerce platform with improved UX and conversion rates.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    tags: ["E-commerce", "UX/UI", "Web Development"]
  },
  {
    title: "Marketing Automation System",
    description: "Custom marketing automation solution that increased lead generation by 45% for a B2B company.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
    tags: ["Marketing", "Automation", "CRM"]
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application with advanced features and biometric authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Mobile App", "Fintech", "Security"]
  }
];
</script>