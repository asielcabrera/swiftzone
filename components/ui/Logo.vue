<template>
  <div :class="`flex items-center gap-2 ${className}`">
    <div :class="withBackground ? 'relative rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center w-10 h-10' : ''">
      <LogoSvg
        :width="logoSize.width"
        :height="logoSize.height"
        :variant="variant"
        class="flex-shrink-0"
      />
    </div>
    <span v-if="withText" :class="`text-xl font-bold ${textColor}`">
      Swift<span class="text-primary">Zone</span>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  withText: {
    type: Boolean,
    default: false
  },
  withBackground: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
});

const textColor = computed(() => props.variant === 'light' ? 'text-white' : 'text-primary');

// Para las dimensiones
const logoSize = computed(() => ({
  width: props.withBackground ? 35 : 40,
  height: props.withBackground ? 35 : 40
}));
</script>