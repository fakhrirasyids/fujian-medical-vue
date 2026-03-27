<template>
  <div :class="centered ? 'text-center mx-auto' : ''">
    <div class="eyebrow">{{ eyebrow }}</div>
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-copy" :class="centered ? 'mx-auto' : ''">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}>()
</script>
