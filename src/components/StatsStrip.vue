<template>
  <section class="bg-white">
    <div class="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
      <div :class="['grid gap-4 sm:grid-cols-2 lg:grid-cols-4', carded ? '' : 'text-center']">
        <article
          v-for="item in items"
          :key="item.label"
          :class="[
            'flex flex-col items-center justify-center text-center',
            carded
              ? 'rounded-2xl border border-slate-200/80 bg-white px-4 py-5 shadow-[0_14px_32px_rgba(15,23,42,0.08)]'
              : 'px-3 py-2',
          ]"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf3fd]">
            <img :src="item.icon" :alt="item.label" class="h-6 w-6 object-contain" />
          </div>
          <div class="mt-4 text-[36px] font-black leading-none tracking-[-0.04em] text-slate-900">
            {{ item.value }}
          </div>
          <div class="mt-2 text-[12px] font-semibold text-slate-700">
            {{ item.label }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ icon: string; value: string; label: string }>
  carded?: boolean
}>()
</script>
