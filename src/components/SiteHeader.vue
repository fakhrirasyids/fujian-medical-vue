<template>
  <header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <button class="shrink-0" type="button" @click="emit('navigate', 'home')">
        <img
          src="/assets/asset-logo-fujian.png"
          alt="Fujian Medical Engineering"
          class="h-8 w-auto sm:h-9"
        />
      </button>

      <nav class="hidden items-center gap-1.5 lg:flex" aria-label="Primary navigation">
        <button
          v-for="item in navItems"
          :key="item.label"
          type="button"
          :class="desktopLinkClass(item.id)"
          @click="handleNav(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
        aria-label="Open navigation"
        @click="mobileOpen = true"
      >
        <Menu :size="20" />
      </button>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-if="mobileOpen"
        type="button"
        class="fixed inset-0 z-40 bg-slate-950/35 lg:hidden"
        aria-label="Close navigation"
        @click="mobileOpen = false"
      />
    </Transition>

    <Transition
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition duration-250 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="mobileOpen"
        class="fixed inset-y-0 left-0 z-50 flex h-screen w-[290px] max-w-[82vw] flex-col overflow-y-auto bg-white shadow-[0_24px_64px_rgba(15,23,42,0.18)] lg:hidden"
      >
        <div class="flex items-center justify-between border-b border-slate-200/80 px-5 py-4">
          <img
            src="/assets/asset-logo-fujian.png"
            alt="Fujian Medical Engineering"
            class="h-7 w-auto"
          />

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700"
            aria-label="Close navigation"
            @click="mobileOpen = false"
          >
            <X :size="18" />
          </button>
        </div>

        <nav class="flex flex-1 flex-col gap-2 bg-white px-4 py-5" aria-label="Mobile navigation">
          <button
            v-for="item in navItems"
            :key="item.label"
            type="button"
            :class="mobileLinkClass(item.id)"
            @click="handleNav(item.id)"
          >
            {{ item.label }}
          </button>
        </nav>

        <div class="border-t border-slate-200/80 bg-white px-4 py-4">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-400">Contact</p>
          <button
            type="button"
            class="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#0b5db2] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_12px_26px_rgba(11,93,178,0.24)]"
            @click="handleNav('contact')"
          >
            Contact Information
          </button>
        </div>
      </aside>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { primaryPages, type PageId } from '@/constants/navigation'

const props = defineProps<{
  activePage: PageId
}>()

const emit = defineEmits<{
  (e: 'navigate', page: PageId): void
  (e: 'contact'): void
}>()

const mobileOpen = ref(false)

const navItems = [...primaryPages, { id: 'contact' as const, label: 'Contact' }]

watch(
  mobileOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

function handleNav(id: PageId | 'contact') {
  mobileOpen.value = false
  if (id === 'contact') {
    emit('contact')
    return
  }

  emit('navigate', id)
}

function desktopLinkClass(id: PageId | 'contact') {
  if (id !== 'contact' && props.activePage === id) {
    return 'rounded-lg bg-[#0b5db2] px-4 py-2.5 text-[12px] font-semibold text-white'
  }

  return 'rounded-lg px-4 py-2.5 text-[12px] font-semibold text-slate-600 transition hover:text-[#0b5db2]'
}

function mobileLinkClass(id: PageId | 'contact') {
  if (id !== 'contact' && props.activePage === id) {
    return 'rounded-2xl bg-[#0b5db2] px-4 py-3 text-left text-[13px] font-semibold text-white'
  }

  return 'rounded-2xl border border-slate-200 px-4 py-3 text-left text-[13px] font-semibold text-slate-700 transition hover:border-[#0b5db2]/40 hover:text-[#0b5db2]'
}
</script>
