<template>
  <section class="bg-[#0b5db2]">
    <div class="mx-auto max-w-[1180px] px-4 py-16 text-center sm:px-6 lg:px-8">
      <p v-if="eyebrow" class="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 font-black uppercase tracking-[-0.04em] text-white" :class="titleClass">
        {{ title }}
      </h2>
      <p class="mx-auto mt-4 max-w-[680px] text-[14px] leading-6 text-white/78">
        {{ description }}
      </p>

      <p v-if="note" class="mt-4 text-[14px] font-semibold text-white/88">
        {{ note }}
      </p>

      <div v-if="$slots.actions" class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description: string
    note?: string
    compact?: boolean
  }>(),
  {
    eyebrow: '',
    note: '',
    compact: false,
  },
)

const titleClass = computed(() =>
  props.compact ? 'text-[28px] sm:text-[32px] lg:text-[42px]' : 'text-[32px] sm:text-[38px] lg:text-[50px]',
)
</script>
