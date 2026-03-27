<template>
  <footer id="site-footer" class="bg-[#1d1d34] py-12 text-white/72">
    <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_1fr_1fr]">
        <div>
          <h2 class="text-[18px] font-semibold text-white">Fujian Medical Engineering</h2>
          <p class="mt-2 text-[13px] text-white/55">Design Institute Co., Ltd.</p>
          <p class="mt-4 max-w-[280px] text-[13px] leading-6 text-white/55">
            {{ footerDescription }}
          </p>
        </div>

        <div>
          <h3 class="text-[15px] font-semibold text-white">Quick Links</h3>
          <div class="mt-4 flex flex-col gap-3">
            <button
              v-for="item in footerLinks"
              :key="item.label"
              type="button"
              class="text-left text-[13px] text-white/60 transition hover:text-white"
              @click="handleFooter(item.id)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>

        <div>
          <h3 class="text-[15px] font-semibold text-white">Engineering Fields</h3>
          <div class="mt-4 space-y-3">
            <p v-for="item in footerFields" :key="item" class="text-[13px] text-white/60">
              {{ item }}
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-[15px] font-semibold text-white">Contact Information</h3>
          <div class="mt-4 space-y-3">
            <div
              v-for="item in footerContact"
              :key="item.label"
              class="flex items-center gap-3 text-[13px] text-white/60"
            >
              <MapPin v-if="item.type === 'location'" :size="15" class="text-[#2b81da]" />
              <Phone v-else-if="item.type === 'phone'" :size="15" class="text-[#2b81da]" />
              <Mail v-else :size="15" class="text-[#2b81da]" />
              <span>{{ item.label }}</span>
            </div>
          </div>

          <div class="mt-5 flex items-center gap-3">
            <a
              v-for="item in socialIcons"
              :key="item.label"
              href="/"
              class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/15"
              @click.prevent
            >
              <img :src="item.icon" :alt="item.label" class="h-[17px] w-[17px] object-contain" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-5 text-center text-[12px] text-white/45">
        © 2026 Fujian Medical Engineering Design Institute Co., Ltd. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next'
import { footerContact, footerDescription, footerFields, footerLinks, socialIcons } from '@/constants/site'
import type { PageId } from '@/constants/navigation'

const emit = defineEmits<{
  (e: 'navigate', page: PageId): void
  (e: 'contact'): void
}>()

function handleFooter(id: PageId | 'contact') {
  if (id === 'contact') {
    emit('contact')
    return
  }

  emit('navigate', id)
}
</script>
