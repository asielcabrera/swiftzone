<template>
  <!-- CTA Section -->
  <section 
    id="contact"
    class="section-padding bg-primary text-white scroll-mt-24"
  >
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" class="aos-init">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Digital Presence?
          </h2>
          <p class="text-primary-foreground/90 text-lg mb-8 max-w-xl">
            Contact us today and discover how we can help you achieve your
            business goals through innovative digital solutions.
          </p>
          <!-- <div class="flex flex-wrap gap-4">
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90"
            >
              Request Quote</button
            ><button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all"
            >
              Schedule a Call
            </button>
          </div> -->
        </div>
        <div class="relative aos-init" data-aos="fade-left">
          <div class="bg-primary-foreground/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 class="text-xl font-bold mb-4">Have a question?</h3>
            <p class="text-primary-foreground/80 mb-6">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    v-model="formData.name"
                    :class="{'border-red-500': errors.name}"
                    class="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-300">{{ errors.name }}</p>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="formData.email"
                    :class="{'border-red-500': errors.email}"
                    class="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-300">{{ errors.email }}</p>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  v-model="formData.subject"
                  :class="{'border-red-500': errors.subject}"
                  class="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <p v-if="errors.subject" class="mt-1 text-sm text-red-300">{{ errors.subject }}</p>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  v-model="formData.message"
                  :class="{'border-red-500': errors.message}"
                  class="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-300">{{ errors.message }}</p>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <Icon name="lucide:loader" class="animate-spin h-5 w-5" />
                </span>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="submitStatus" :class="submitStatus.success ? 'text-green-300' : 'text-red-300'" class="text-center mt-4">
                {{ submitStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '');
  
  // Validate name
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Validate subject
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }
  
  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
    isValid = false;
  }
  
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  submitStatus.value = null;
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (response.ok) {
      submitStatus.value = {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.'
      };
      
      // Reset form
      Object.keys(formData).forEach(key => formData[key] = '');
    } else {
      submitStatus.value = {
        success: false,
        message: data.error || 'There was an error sending your message. Please try again.'
      };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    submitStatus.value = {
      success: false,
      message: 'There was an error sending your message. Please try again.'
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>
