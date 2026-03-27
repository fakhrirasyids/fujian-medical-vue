<template>
  <div class="inline-flex items-center rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm">
    <button
      v-for="item in locales"
      :key="item.value"
      class="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition"
      :class="locale === item.value ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'"
      @click="changeLocale(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocaleRef, type SupportedLocale } from '@/i18n'

const { locale } = useI18n({ useScope: 'global' })

const locales = computed<{ label: string; value: SupportedLocale }[]>(() => [
  { label: 'EN', value: 'en' },
  { label: 'ID', value: 'id' },
  { label: '中文', value: 'zh' },
])

function changeLocale(next: SupportedLocale) {
  setLocaleRef(locale, next)
}
</script>
