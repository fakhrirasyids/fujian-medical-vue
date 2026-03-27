<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-[13px] font-semibold transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2',
      fullWidth ? 'w-full' : '',
      size === 'sm' ? 'min-h-[42px] px-4 py-2.5 text-[12px]' : 'min-h-[46px]',
      variantClasses,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'brand' | 'brand-outline' | 'light' | 'light-outline'
    size?: 'sm' | 'md'
    type?: 'button' | 'submit' | 'reset'
    fullWidth?: boolean
  }>(),
  {
    variant: 'brand',
    size: 'md',
    type: 'button',
    fullWidth: false,
  },
)

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'brand-outline':
      return 'border-[#0b5db2] bg-transparent text-[#0b5db2] hover:bg-[#0b5db2]/5 focus:ring-[#0b5db2]'
    case 'light':
      return 'border-white bg-white text-[#0b5db2] shadow-[0_14px_30px_rgba(15,23,42,0.14)] hover:-translate-y-0.5 focus:ring-white'
    case 'light-outline':
      return 'border-white/70 bg-transparent text-white hover:bg-white/10 focus:ring-white'
    default:
      return 'border-[#0b5db2] bg-[#0b5db2] text-white shadow-[0_12px_26px_rgba(11,93,178,0.24)] hover:-translate-y-0.5 hover:bg-[#094d92] focus:ring-[#0b5db2]'
  }
})
</script>
