<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-28 bg-secondary" data-aos="fade-down">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <nuxt-link to="/#services" class="inline-flex items-center text-primary font-medium mb-6 hover:underline" data-aos="fade-right" data-aos-delay="100">
            <Icon name="lucide:arrow-left" class="h-4 w-4 mr-2" /> Back to Services
          </nuxt-link>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200">
            UX/UI Design
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            We create intuitive and attractive digital experiences that connect with your users and enhance conversion.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 class="text-2xl md:text-3xl font-bold mb-6">User-centered design</h2>
            <p class="text-gray-700 mb-6">
              At SwiftZone, we create interfaces that are not only visually attractive but also functional and intuitive. Our user-centered approach ensures that every design element has a purpose and contributes to a seamless experience.
            </p>
            <p class="text-gray-700 mb-6">
              We combine principles of psychology, user research, and the latest design trends to create digital experiences that stand out and convert.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>User Interface (UI) Design</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>User Experience (UX)</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Wireframing and prototyping</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>User research</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Design systems</span>
              </li>
            </ul>
          </div>
          <div class="relative" data-aos="fade-left">
            <img src="/images/services/ux-ui-design.jpg" alt="UX/UI Design" class="rounded-xl shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our design process</h2>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:search" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Research</h3>
            <p class="text-gray-700">We understand your users, their needs, and behaviors.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:layout" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Wireframing</h3>
            <p class="text-gray-700">We create basic layouts to define structure and functionality.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:palette" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Visual Design</h3>
            <p class="text-gray-700">We apply visual styles aligned with your brand and objectives.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:smartphone" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Prototyping</h3>
            <p class="text-gray-700">We create interactive prototypes to validate the experience.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="500">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:check-square" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Testing</h3>
            <p class="text-gray-700">We validate the design with real users and refine based on feedback.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Tools we use</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-aos="fade-up" data-aos-delay="200">
          <div class="flex flex-col items-center">
            <Icon name="logos:figma" class="h-16 mb-4" />
            <span class="text-center font-medium">Figma</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="logos:sketch" class="h-16 mb-4" />
            <span class="text-center font-medium">Sketch</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="logos:adobe-xd" class="h-16 mb-4" />
            <span class="text-center font-medium">Adobe XD</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="logos:invision" class="h-16 mb-4" />
            <span class="text-center font-medium">InVision</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="logos:zeplin" class="h-16 mb-4" />
            <span class="text-center font-medium">Zeplin</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="logos:adobe-photoshop" class="h-16 mb-4" />
            <span class="text-center font-medium">Photoshop</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Ready to improve your users' experience?</h2>
          <p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Contact us today to discuss how we can help you create intuitive and attractive interfaces.
          </p>
          <div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <nuxt-link to="/contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90">
              Contact now
            </nuxt-link>
            <!-- <nuxt-link to="/projects" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all">
              View projects
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page metadata
useHead({
  title: 'UX/UI Design - SwiftZone',
  meta: [
    { name: 'description', content: 'Professional UX/UI design services. We create intuitive and attractive digital experiences that connect with your users and enhance conversion.' }
  ]
})
</script>