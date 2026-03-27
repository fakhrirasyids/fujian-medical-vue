<template>
  <section id="contact" class="section-space pt-0">
    <div class="container-shell">
      <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="surface-card p-8 sm:p-10">
          <SectionTitle
            :eyebrow="t('contact.eyebrow')"
            :title="t('contact.title')"
            :description="t('contact.description')"
          />

          <div class="mt-8 space-y-4 text-sm text-slate-600">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="font-semibold text-slate-900">{{ t('contact.cards.email.label') }}</p>
              <p class="mt-1">{{ t('contact.cards.email.value') }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="font-semibold text-slate-900">{{ t('contact.cards.phone.label') }}</p>
              <p class="mt-1">{{ t('contact.cards.phone.value') }}</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p class="font-semibold text-slate-900">{{ t('contact.cards.address.label') }}</p>
              <p class="mt-1">{{ t('contact.cards.address.value') }}</p>
            </div>
          </div>
        </div>

        <div class="surface-card p-8 sm:p-10">
          <div class="rounded-[2rem] bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">{{ t('contact.form.eyebrow') }}</p>
            <h3 class="mt-3 text-2xl font-bold text-slate-900">{{ t('contact.form.title') }}</h3>
            <p class="mt-3 max-w-xl text-sm leading-7 text-slate-600">{{ t('contact.form.description') }}</p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-white p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{{ t('contact.form.fields.name') }}</p>
                <p class="mt-3 text-sm text-slate-400">{{ t('contact.form.placeholders.name') }}</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{{ t('contact.form.fields.email') }}</p>
                <p class="mt-3 text-sm text-slate-400">{{ t('contact.form.placeholders.email') }}</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{{ t('contact.form.fields.company') }}</p>
                <p class="mt-3 text-sm text-slate-400">{{ t('contact.form.placeholders.company') }}</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{{ t('contact.form.fields.message') }}</p>
                <p class="mt-3 text-sm text-slate-400">{{ t('contact.form.placeholders.message') }}</p>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <button class="primary-button" type="button">{{ t('contact.form.submit') }}</button>
              <span class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                {{ t('contact.form.note') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionTitle from '@/components/SectionTitle.vue'

const { t } = useI18n({ useScope: 'global' })
</script>
