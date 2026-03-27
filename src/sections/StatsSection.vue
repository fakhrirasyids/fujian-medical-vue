<template>
  <section class="section-space pt-0">
    <div class="container-shell">
      <div class="surface-card overflow-hidden border-none bg-slate-900 p-8 text-white sm:p-10 lg:p-12">
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div class="eyebrow border-slate-700 bg-slate-800 text-sky-200">{{ t('stats.eyebrow') }}</div>
            <h2 class="section-title text-white">{{ t('stats.title') }}</h2>
            <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {{ t('stats.description') }}
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article v-for="stat in stats" :key="stat.value" class="rounded-[1.75rem] border border-slate-800 bg-white/5 p-6">
              <p class="text-3xl font-black text-white">{{ stat.value }}</p>
              <p class="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">{{ stat.label }}</p>
              <p class="mt-3 text-sm leading-7 text-slate-300">{{ stat.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const stats = computed(() => [
  {
    value: t('stats.items.0.value'),
    label: t('stats.items.0.label'),
    description: t('stats.items.0.description'),
  },
  {
    value: t('stats.items.1.value'),
    label: t('stats.items.1.label'),
    description: t('stats.items.1.description'),
  },
  {
    value: t('stats.items.2.value'),
    label: t('stats.items.2.label'),
    description: t('stats.items.2.description'),
  },
  {
    value: t('stats.items.3.value'),
    label: t('stats.items.3.label'),
    description: t('stats.items.3.description'),
  },
])
</script>
