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
            Contacto
          </h1>
          <p class="text-gray-700 text-lg mb-10" data-aos="fade-up" data-aos-delay="300">
            Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.
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
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
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
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
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
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
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
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
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
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
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
    errors.name = 'El nombre es requerido';
    isValid = false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'El correo electrónico es requerido';
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Por favor ingrese un correo electrónico válido';
    isValid = false;
  }
  
  // Validate subject
  if (!formData.subject.trim()) {
    errors.subject = 'El asunto es requerido';
    isValid = false;
  }
  
  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'El mensaje es requerido';
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
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
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      };
      
      // Reset form
      Object.keys(formData).forEach(key => formData[key] = '');
    } else {
      submitStatus.value = {
        success: false,
        message: data.error || 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.'
      };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    submitStatus.value = {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.'
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>