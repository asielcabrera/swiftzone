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
            Technology Consulting
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            We help businesses make informed technology decisions, optimize their IT infrastructure, and implement solutions that drive growth and efficiency.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 class="text-2xl md:text-3xl font-bold mb-6">Strategic technology guidance</h2>
            <p class="text-gray-700 mb-6">
              At SwiftZone, we provide expert technology consulting services to help businesses navigate the complex digital landscape. Our team of experienced consultants works closely with you to understand your business challenges and objectives.
            </p>
            <p class="text-gray-700 mb-6">
              We analyze your current technology stack, identify gaps and opportunities, and develop strategic roadmaps that align with your business goals and budget constraints.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>IT infrastructure assessment</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Digital transformation consulting</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Technology stack optimization</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>IT security audits</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check-circle" class="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Cloud migration strategies</span>
              </li>
            </ul>
          </div>
          <div class="relative" data-aos="fade-left">
            <img src="/images/services/technology-consulting.jpg" alt="Technology Consulting" class="rounded-xl shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Our consulting approach</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:search" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Discovery</h3>
            <p class="text-gray-700">We analyze your current technology landscape and business requirements.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:lightbulb" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Strategy</h3>
            <p class="text-gray-700">We develop a tailored technology roadmap aligned with your business goals.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:settings" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Implementation</h3>
            <p class="text-gray-700">We help you execute the strategy with the right tools and technologies.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400">
            <div class="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:bar-chart" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-3">Optimization</h3>
            <p class="text-gray-700">We continuously monitor and improve your technology solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-16 md:py-24">
      <div class="container-custom">
        <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center" data-aos="fade-up">Success stories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/case-studies/case-study-1.jpg" alt="Success Case 1" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Cloud migration for financial services</h3>
              <p class="text-gray-700 mb-4">We helped a financial services company migrate their legacy systems to the cloud, resulting in 40% cost reduction and improved security.</p>
              <div class="flex items-center text-sm text-gray-500">
                <span class="font-medium text-primary">Results:</span>
                <span class="mx-2">•</span>
                <span>40% cost reduction</span>
                <span class="mx-2">•</span>
                <span>99.9% uptime</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/case-studies/case-study-2.jpg" alt="Success Case 2" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">IT security audit for healthcare provider</h3>
              <p class="text-gray-700 mb-4">We conducted a comprehensive security audit for a healthcare provider, identifying and addressing critical vulnerabilities.</p>
              <div class="flex items-center text-sm text-gray-500">
                <span class="font-medium text-primary">Results:</span>
                <span class="mx-2">•</span>
                <span>HIPAA compliance achieved</span>
                <span class="mx-2">•</span>
                <span>Zero security breaches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary text-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">Ready to optimize your technology infrastructure?</h2>
          <p class="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
            Contact us today to discuss how our technology consulting services can help your business thrive in the digital age.
          </p>
          <div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <nuxt-link to="/contact" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90">
              Contact now
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page metadata
useHead({
  title: 'Technology Consulting - SwiftZone',
  meta: [
    { name: 'description', content: 'Expert technology consulting services. We help businesses make informed technology decisions, optimize their IT infrastructure, and implement solutions that drive growth.' }
  ]
})
</script>