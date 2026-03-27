<template>
  <section id="industries" class="section-space pt-0">
    <div class="container-shell">
      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionTitle
            :eyebrow="t('industries.eyebrow')"
            :title="t('industries.title')"
            :description="t('industries.description')"
          />
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <article v-for="item in items" :key="item.title" class="surface-card p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">{{ item.kicker }}</p>
            <h3 class="mt-3 text-xl font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionTitle from '@/components/SectionTitle.vue'

const { t } = useI18n({ useScope: 'global' })

const items = computed(() => [
  {
    kicker: t('industries.cards.hospital.kicker'),
    title: t('industries.cards.hospital.title'),
    description: t('industries.cards.hospital.description'),
  },
  {
    kicker: t('industries.cards.diagnostics.kicker'),
    title: t('industries.cards.diagnostics.title'),
    description: t('industries.cards.diagnostics.description'),
  },
  {
    kicker: t('industries.cards.rehab.kicker'),
    title: t('industries.cards.rehab.title'),
    description: t('industries.cards.rehab.description'),
  },
  {
    kicker: t('industries.cards.oem.kicker'),
    title: t('industries.cards.oem.title'),
    description: t('industries.cards.oem.description'),
  },
])
</script>
