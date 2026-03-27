<template>
  <div :class="[centered ? 'mx-auto max-w-[860px] text-center' : 'max-w-[760px]']">
    <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 font-black uppercase tracking-[-0.04em] text-slate-900" :class="titleClass">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-[13px] leading-6 text-slate-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    centered?: boolean
  }>(),
  {
    description: '',
    centered: true,
  },
)

const titleClass = computed(() =>
  props.centered ? 'text-[28px] sm:text-[34px] lg:text-[46px]' : 'text-[24px] sm:text-[30px] lg:text-[40px]',
)
</script>
