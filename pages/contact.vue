<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-28 bg-secondary" data-aos="fade-down">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <nuxt-link to="/" class="inline-flex items-center text-primary font-medium mb-6 hover:underline" data-aos="fade-right" data-aos-delay="100">
            <Icon name="lucide:arrow-left" class="h-4 w-4 mr-2" /> Back to home
          </nuxt-link>
          <h1 class="text-3xl md:text-5xl font-bold mb-6 text-primary" data-aos="fade-up" data-aos-delay="200">
            Contact
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            We're here to help. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 md:py-24" data-aos="fade-up">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{'border-red-500': errors.name}"
                required
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{'border-red-500': errors.email}"
                required
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{'border-red-500': errors.subject}"
                required
              />
              <p v-if="errors.subject" class="mt-1 text-sm text-red-500">{{ errors.subject }}</p>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="5" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                :class="{'border-red-500': errors.message}"
                required
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
            </div>
            
            <div>
              <button 
                type="submit" 
                class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <Icon name="lucide:loader" class="animate-spin h-5 w-5" />
                </span>
                {{ isSubmitting ? 'Sending...' : 'Send message' }}
              </button>
            </div>
            
            <div v-if="submitStatus" :class="submitStatus.success ? 'text-green-600' : 'text-red-600'" class="text-center mt-4">
              {{ submitStatus.message }}
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
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
        message: 'Message sent successfully! We will contact you soon.'
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