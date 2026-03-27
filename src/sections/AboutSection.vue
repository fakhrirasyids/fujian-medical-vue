<template>
  <section id="about" class="section-space pt-8">
    <div class="container-shell">
      <div class="surface-card p-8 sm:p-10 lg:p-12">
        <SectionTitle
          :eyebrow="t('about.eyebrow')"
          :title="t('about.title')"
          :description="t('about.description')"
        />

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <article v-for="item in cards" :key="item.title" class="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
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

const cards = computed(() => [
  {
    kicker: t('about.cards.mission.kicker'),
    title: t('about.cards.mission.title'),
    description: t('about.cards.mission.description'),
  },
  {
    kicker: t('about.cards.quality.kicker'),
    title: t('about.cards.quality.title'),
    description: t('about.cards.quality.description'),
  },
  {
    kicker: t('about.cards.partnership.kicker'),
    title: t('about.cards.partnership.title'),
    description: t('about.cards.partnership.description'),
  },
])
</script>
