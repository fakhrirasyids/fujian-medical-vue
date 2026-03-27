<template>
  <div class="bg-white">
    <PageHero
      variant="home"
      eyebrow=""
      title="Engineering the Future of Critical Infrastructure"
      description="Integrated EPC, Engineering Design, and Project Management for Healthcare, Energy, and Advanced Industrial Facilities"
      image="/assets/asset-fujian-hero-home.png"
      image-class="bg-[position:78%_50%]"
      wrapper-class="py-10 md:py-12 lg:py-[52px]"
      content-class="max-w-[520px]"
      title-class="max-w-[500px] text-[28px] leading-[0.95] sm:text-[36px] lg:text-[46px]"
      description-class="max-w-[470px] text-[12px] leading-5 sm:text-[12px] sm:leading-6 lg:text-[12px]"
      actions-class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
      overlay-class="bg-[linear-gradient(90deg,rgba(11,93,178,0.98)_0%,rgba(11,93,178,0.96)_34%,rgba(11,93,178,0.9)_62%,rgba(11,93,178,0.66)_100%)]"
    >
      <template #title>
        <span class="block">Engineering the</span>
        <span class="block">Future of Critical</span>
        <span class="block">Infrastructure</span>
      </template>

      <template #actions>
        <AppButton variant="light" size="sm" @click="scrollToOverview">
          <span>Learn More</span>
          <ArrowRight :size="16" />
        </AppButton>
        <AppButton variant="light-outline" size="sm" @click="emit('contact')">
          <span>Contact Us</span>
        </AppButton>
      </template>
    </PageHero>

    <StatsStrip :items="stats" />

    <section id="home-overview" class="bg-white py-16 sm:py-20">
      <div class="mx-auto grid max-w-[1120px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_0.9fr] lg:items-center lg:gap-14 lg:px-8">
        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">About Us</p>
          <h2 class="mt-3 max-w-[440px] text-[24px] font-black uppercase leading-[1.04] tracking-[-0.04em] text-slate-900 sm:text-[30px] lg:text-[38px]">
            National Engineering Design Institute
          </h2>
          <p class="mt-5 max-w-[470px] text-[13px] leading-7 text-slate-600">
            Fujian Medical Engineering Design Institute Co., Ltd. is a nationally qualified engineering
            institute delivering integrated infrastructure solutions for complex, high-performance facilities.
          </p>
          <p class="mt-4 max-w-[470px] text-[13px] leading-7 text-slate-600">
            With multi-disciplinary expertise and advanced digital engineering capabilities, we provide
            end-to-end services from feasibility studies to EPC execution and commissioning.
          </p>

          <div class="mt-6 max-w-[430px] rounded-xl border border-slate-200/80 border-l-4 border-l-[#1d6bc5] bg-[#f7faff] px-4 py-3 shadow-[0_12px_26px_rgba(15,23,42,0.05)]">
            <p class="text-[13px] font-semibold leading-6 text-slate-800">
              We engineer regulated, operational, future-ready environments.
            </p>
          </div>

          <button
            type="button"
            class="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#0b5db2] transition hover:text-[#094d92]"
            @click="emit('navigate', 'about')"
          >
            <span>Learn More About Us</span>
            <ArrowRight :size="15" />
          </button>
        </div>

        <div class="relative mx-auto w-full max-w-[470px]">
          <img
            src="/assets/asset-fujian-about-us.png"
            alt="Fujian Medical Engineering building"
            class="w-full rounded-[28px] shadow-[0_24px_48px_rgba(15,23,42,0.14)]"
          />

          <div class="absolute bottom-5 left-4 rounded-xl bg-[#0b5db2] px-4 py-3 text-white shadow-[0_16px_28px_rgba(11,93,178,0.26)] sm:-left-5">
            <div class="text-[28px] font-black leading-none tracking-[-0.04em]">30+</div>
            <div class="mt-1 text-[11px] text-white/82">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-[700px] text-center">
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">Our Services</p>
          <h2 class="mt-3 text-[22px] font-black uppercase leading-[1.04] tracking-[-0.04em] text-slate-900 sm:text-[28px] lg:text-[36px]">
            Integrated Engineering Solutions
          </h2>
          <p class="mt-3 text-[13px] leading-6 text-slate-500">
            Lifecycle-based infrastructure solutions from concept to completion
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="service in services"
            :key="service.number"
            class="rounded-2xl border border-slate-200/80 bg-white px-4 py-5 shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
          >
            <div class="text-[34px] font-black leading-none tracking-[-0.04em] text-[#a7c8ee]">
              {{ service.number }}
            </div>
            <h3 class="mt-3 text-[17px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
              {{ service.title }}
            </h3>
            <p class="mt-2.5 text-[12px] leading-6 text-slate-500">
              {{ service.description }}
            </p>
          </article>
        </div>

        <div class="mt-8 flex justify-center">
          <AppButton variant="brand" size="sm" @click="emit('navigate', 'services')">
            <span>View All Services</span>
            <ArrowRight :size="15" />
          </AppButton>
        </div>
      </div>
    </section>

    <section class="bg-[#f5f8fc] py-16 sm:py-20">
      <div class="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-[700px] text-center">
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">Engineering Fields</p>
          <h2 class="mt-3 text-[22px] font-black uppercase leading-[1.04] tracking-[-0.04em] text-slate-900 sm:text-[28px] lg:text-[36px]">
            Specialized Expertise
          </h2>
          <p class="mt-3 text-[13px] leading-6 text-slate-500">
            Critical infrastructure sectors where we deliver excellence
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="field in expertise"
            :key="field.title"
            class="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_10px_22px_rgba(15,23,42,0.04)]"
          >
            <div class="mb-4 h-1 rounded-full" :style="{ backgroundColor: field.accent }" />
            <h3 class="text-[16px] font-extrabold leading-snug tracking-[-0.03em] text-slate-900">
              {{ field.title }}
            </h3>
            <p class="mt-2.5 text-[12px] leading-6 text-slate-500">
              {{ field.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto grid max-w-[1120px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <img
          src="/assets/asset-fujian-core-advantages.png"
          alt="Engineering facility exterior"
          class="w-full rounded-[24px] shadow-[0_20px_42px_rgba(15,23,42,0.12)]"
        />

        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">Why Choose Us</p>
          <h2 class="mt-3 text-[22px] font-black uppercase leading-[1.04] tracking-[-0.04em] text-slate-900 sm:text-[28px] lg:text-[36px]">
            Core Advantages
          </h2>

          <div class="mt-7 space-y-4">
            <article
              v-for="item in advantages"
              :key="item.title"
              class="grid grid-cols-[44px_1fr] gap-4"
            >
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3fd]">
                <img :src="item.icon" :alt="item.title" class="h-4.5 w-4.5 object-contain" />
              </div>

              <div>
                <h3 class="text-[16px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
                  {{ item.title }}
                </h3>
                <p class="mt-1.5 text-[12px] leading-6 text-slate-500">
                  {{ item.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#0b5db2]">
      <div class="mx-auto max-w-[1120px] px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 class="mx-auto max-w-[780px] text-[22px] font-bold tracking-[-0.03em] text-white sm:text-[28px] lg:text-[34px]">
          Engineering Infrastructure That Moves Industries Forward
        </h2>
        <p class="mx-auto mt-3 max-w-[620px] text-[13px] leading-6 text-white/78">
          Partner with us to build compliant, high-performance facilities designed for long-term success
        </p>

        <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <AppButton variant="light" @click="emit('contact')">
            <span>Contact Our Team</span>
            <ArrowRight :size="16" />
          </AppButton>
          <AppButton variant="light-outline" @click="emit('navigate', 'projects')">
            <span>Download Company Profile</span>
          </AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import AppButton from '@/components/AppButton.vue'
import PageHero from '@/components/PageHero.vue'
import StatsStrip from '@/components/StatsStrip.vue'
import type { PageId } from '@/constants/navigation'

const emit = defineEmits<{
  (e: 'navigate', page: PageId): void
  (e: 'contact'): void
}>()

const stats = [
  { icon: '/assets/asset-icon-completed-projects.png', value: '200+', label: 'Completed Projects' },
  { icon: '/assets/asset-icon-team-members.png', value: '3000+', label: 'Team Members' },
  { icon: '/assets/asset-icon-experience.png', value: '30+', label: 'Years Experience' },
  { icon: '/assets/asset-icon-patents.png', value: '50+', label: 'Engineering Patents' },
]

const services = [
  { number: '01', title: 'Strategic Consulting', description: 'Feasibility studies, technical assessment, and master planning.' },
  { number: '02', title: 'Engineering Design', description: 'Architectural, structural, mechanical, electrical, and process systems.' },
  { number: '03', title: 'EPC Delivery', description: 'Seamless engineering, procurement, and construction management.' },
  { number: '04', title: 'Procurement Management', description: 'Vendor selection, equipment sourcing, and cost optimization.' },
  { number: '05', title: 'Commissioning & Handover', description: 'System testing, regulatory approval, and operational readiness.' },
  { number: '06', title: 'Project Management', description: 'Comprehensive project control and execution management.' },
]

const expertise = [
  { title: 'Pharmaceutical & Chemical', description: 'Precision-engineered GMP-compliant production environments.', accent: '#2f78ff' },
  { title: 'Environmental Engineering', description: 'Comprehensive environmental solutions.', accent: '#23c463' },
  { title: 'New Energy', description: 'Advanced energy infrastructure facilities.', accent: '#e5a100' },
  { title: 'Oil & Gas', description: 'Complex energy systems requiring technical excellence.', accent: '#ff6c1d' },
]

const advantages = [
  { icon: '/assets/asset-icon-industry-awards.png', title: 'National Qualification', description: 'National-level engineering design qualification and construction certifications.' },
  { icon: '/assets/asset-icon-key-digital.png', title: 'Digital Engineering', description: 'Advanced BIM and 3D design systems.' },
  { icon: '/assets/asset-icon-team-members.png', title: 'Expert Team', description: 'Experienced multi-disciplinary professional teams.' },
  { icon: '/assets/asset-icon-success-rate.png', title: 'Excellence Execution', description: 'Large-scale project execution capability and success record.' },
]

function scrollToOverview() {
  const element = document.getElementById('home-overview')
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
