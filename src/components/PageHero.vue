<template>
  <section class="relative overflow-hidden bg-[#0b5db2]">
    <div
      :class="['absolute inset-0 bg-cover', imageClass]"
      :style="{ backgroundImage: `url(${image})` }"
    />
    <div :class="['absolute inset-0', overlayClass]" />

    <div
      :class="[
        'relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8',
        wrapperClass,
      ]"
    >
      <div :class="contentClass">
        <p v-if="eyebrow" class="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
          {{ eyebrow }}
        </p>
        <h1
          :class="[
            'font-black uppercase tracking-[-0.04em] text-white',
            titleClass,
          ]"
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h1>
        <p
          :class="[
            'mt-4 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)]',
            descriptionClass,
          ]"
        >
          {{ description }}
        </p>

        <div v-if="$slots.actions" :class="actionsClass">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description: string
    image: string
    variant?: 'home' | 'page'
    overlayClass?: string
    imageClass?: string
    wrapperClass?: string
    contentClass?: string
    titleClass?: string
    descriptionClass?: string
    actionsClass?: string
  }>(),
  {
    variant: 'page',
    overlayClass: 'bg-gradient-to-r from-[#0b5db2]/95 via-[#0b5db2]/85 to-[#0b5db2]/72',
    imageClass: 'bg-center',
    wrapperClass: 'py-10 md:py-12 lg:py-14',
    contentClass: 'max-w-[980px]',
    titleClass: 'text-[28px] leading-[1.02] sm:text-[34px] lg:text-[54px]',
    descriptionClass: 'max-w-[760px] text-[14px] leading-6',
    actionsClass: 'mt-7 flex flex-col gap-3 sm:flex-row sm:items-center',
  },
)
</script>
