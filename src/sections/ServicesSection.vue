<template>
  <section id="services" class="section-space">
    <div class="container-shell">
      <SectionTitle
        :eyebrow="t('services.eyebrow')"
        :title="t('services.title')"
        :description="t('services.description')"
        centered
      />

      <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="service in services" :key="service.title" class="surface-card p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
            <component :is="service.icon" :size="22" />
          </div>
          <h3 class="mt-5 text-xl font-bold text-slate-900">{{ service.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">{{ service.description }}</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-600">
            <li v-for="point in service.points" :key="point" class="flex gap-2">
              <span class="mt-1 h-2 w-2 rounded-full bg-sky-500" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Cpu, FileCheck2, Settings2, Stethoscope } from 'lucide-vue-next'
import SectionTitle from '@/components/SectionTitle.vue'

const { t } = useI18n({ useScope: 'global' })

const services = computed(() => [
  {
    icon: Cpu,
    title: t('services.cards.engineering.title'),
    description: t('services.cards.engineering.description'),
    points: [
      t('services.cards.engineering.points.0'),
      t('services.cards.engineering.points.1'),
      t('services.cards.engineering.points.2'),
    ],
  },
  {
    icon: Settings2,
    title: t('services.cards.manufacturing.title'),
    description: t('services.cards.manufacturing.description'),
    points: [
      t('services.cards.manufacturing.points.0'),
      t('services.cards.manufacturing.points.1'),
      t('services.cards.manufacturing.points.2'),
    ],
  },
  {
    icon: FileCheck2,
    title: t('services.cards.compliance.title'),
    description: t('services.cards.compliance.description'),
    points: [
      t('services.cards.compliance.points.0'),
      t('services.cards.compliance.points.1'),
      t('services.cards.compliance.points.2'),
    ],
  },
  {
    icon: Stethoscope,
    title: t('services.cards.lifecycle.title'),
    description: t('services.cards.lifecycle.description'),
    points: [
      t('services.cards.lifecycle.points.0'),
      t('services.cards.lifecycle.points.1'),
      t('services.cards.lifecycle.points.2'),
    ],
  },
])
</script>
