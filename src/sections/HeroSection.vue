<template>
  <section class="section-space overflow-hidden">
    <div class="container-shell">
      <div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div class="eyebrow">{{ t('hero.badge') }}</div>
          <h1 class="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {{ t('hero.title') }}
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {{ t('hero.description') }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" class="primary-button" @click.prevent="scrollTo('#contact')">
              {{ t('hero.primaryCta') }}
            </a>
            <a href="#services" class="secondary-button" @click.prevent="scrollTo('#services')">
              {{ t('hero.secondaryCta') }}
            </a>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div v-for="item in highlights" :key="item.title" class="surface-card p-5">
              <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">{{ item.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 -translate-x-4 translate-y-6 rounded-[2rem] bg-sky-100/70 blur-2xl" />
          <div class="surface-card relative overflow-hidden p-8 sm:p-10">
            <div class="grid gap-6">
              <div class="rounded-[2rem] bg-slate-900 p-6 text-white">
                <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">{{ t('hero.panel.label') }}</p>
                <h2 class="mt-3 text-2xl font-bold">{{ t('hero.panel.title') }}</h2>
                <p class="mt-3 text-sm leading-6 text-slate-200">{{ t('hero.panel.description') }}</p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p class="text-sm font-semibold text-slate-900">{{ t('hero.panel.cards.fast.title') }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">{{ t('hero.panel.cards.fast.description') }}</p>
                </div>
                <div class="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p class="text-sm font-semibold text-slate-900">{{ t('hero.panel.cards.compliance.title') }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">{{ t('hero.panel.cards.compliance.description') }}</p>
                </div>
              </div>

              <div class="rounded-[1.5rem] border border-dashed border-sky-300 bg-sky-50/70 p-5">
                <p class="text-sm font-semibold text-sky-800">{{ t('hero.panel.noteTitle') }}</p>
                <p class="mt-2 text-sm leading-6 text-sky-900/80">{{ t('hero.panel.noteDescription') }}</p>
              </div>
            </div>
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

const highlights = computed(() => [
  { title: t('hero.highlights.engineering.title'), description: t('hero.highlights.engineering.description') },
  { title: t('hero.highlights.production.title'), description: t('hero.highlights.production.description') },
  { title: t('hero.highlights.support.title'), description: t('hero.highlights.support.description') },
])

function scrollTo(selector: string) {
  const element = document.querySelector(selector)
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
