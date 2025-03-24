<template>
  <img
    :src="logoSrc"
    alt="SwiftZone Logo"
    :width="width"
    :height="height"
    :class="className"
    style="max-width: 100%"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 80
  },
  height: {
    type: Number,
    default: 80
  },
  className: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['light', 'dark'].includes(value)
  }
});

// Usamos el logo verde para el modo oscuro, y el logo con fondo claro para el modo claro
const logoSrc = computed(() => 
  props.variant === "dark" ? "/logo.svg" : "/logo-white.svg"
);
</script>