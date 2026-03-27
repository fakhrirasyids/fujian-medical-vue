<template>
  <div class="bg-white">
    <PageHero
      eyebrow="About Us"
      title="National Engineering Design Institute"
      description="Delivering integrated infrastructure solutions for complex facilities"
      image="/assets/asset-fujian-hero-about.png"
      overlay-class="bg-gradient-to-r from-[#0b5db2]/94 via-[#0b5db2]/86 to-[#0b5db2]/7"
    />

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto grid max-w-[1180px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">Company Overview</p>
          <h2 class="mt-3 max-w-[520px] text-[26px] font-black uppercase leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-[32px] lg:text-[42px]">
            Fujian Medical Engineering Design Institute Co., Ltd.
          </h2>

          <p class="mt-5 max-w-[520px] text-[14px] leading-7 text-slate-600">
            A nationally qualified engineering institute delivering integrated infrastructure solutions for
            complex, high-performance facilities.
          </p>
          <p class="mt-4 max-w-[520px] text-[14px] leading-7 text-slate-600">
            With multi-disciplinary expertise and advanced digital engineering capabilities, we provide
            end-to-end services from feasibility studies to EPC execution and commissioning.
          </p>

          <div class="mt-6 max-w-[470px] rounded-2xl border-l-4 border-[#1d6bc5] bg-[#f5f8fc] px-5 py-4">
            <p class="text-[15px] font-semibold leading-7 text-slate-800">
              We do not simply construct buildings. We engineer regulated, operational, future-ready
              environments.
            </p>
          </div>
        </div>

        <img
          src="/assets/asset-fujian-about-us.png"
          alt="Fujian Medical Engineering headquarters"
          class="w-full rounded-[28px] shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
        />
      </div>
    </section>

    <StatsStrip :items="stats" carded />

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Qualifications"
          title="National-Level Qualifications & Certifications"
          description="Our institute holds national-level engineering design qualifications and construction certifications"
        />

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in qualifications"
            :key="item"
            class="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 text-[13px] font-medium text-slate-600 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
          >
            <div class="flex items-start gap-3">
              <span class="mt-1 h-3 w-3 rounded-full border-2 border-[#3a84db]" />
              <span class="leading-6">{{ item }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto grid max-w-[1180px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:items-start lg:gap-16 lg:px-8">
        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">Human Resources</p>
          <h2 class="mt-3 text-[26px] font-black uppercase leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-[32px] lg:text-[42px]">
            Professional Technical Team
          </h2>
          <p class="mt-4 max-w-[470px] text-[14px] leading-7 text-slate-600">
            Our team consists of over 3,000 highly qualified professionals including doctoral graduates,
            masters degree holders, and experienced engineers.
          </p>

          <div class="mt-8 space-y-4">
            <article
              v-for="member in technicalTeam"
              :key="member.label"
              class="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
            >
              <div class="flex items-end justify-between gap-4">
                <div>
                  <h3 class="text-[14px] font-semibold text-slate-900">{{ member.label }}</h3>
                  <p class="mt-1 text-[12px] text-slate-500">{{ member.note }}</p>
                </div>
                <div class="text-[28px] font-black leading-none tracking-[-0.04em] text-[#0b5db2]">
                  {{ member.value }}
                </div>
              </div>
              <div class="mt-4 h-1.5 rounded-full bg-slate-200">
                <div
                  class="h-full rounded-full bg-[#0b5db2]"
                  :style="{ width: member.value }"
                />
              </div>
            </article>
          </div>
        </div>

        <img
          src="/assets/asset-fujian-technical-team.png"
          alt="Professional technical team"
          class="w-full rounded-[26px] shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
        />
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Management"
          title="Comprehensive Management System"
          description="Established since 1986, operating comprehensive management systems aligned with ISO standards"
        />

        <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="item in managementSystem"
            :key="item.number"
            class="rounded-2xl border border-slate-200/80 bg-white px-4 py-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
          >
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf3fd] text-[13px] font-bold text-[#0b5db2]">
              {{ item.number }}
            </div>
            <h3 class="mt-4 text-[16px] font-extrabold leading-tight tracking-[-0.02em] text-slate-900">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-[12px] leading-6 text-slate-500">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <CtaBand
      eyebrow="Innovation"
      title="Continuous Innovation is Our DNA"
      description="We maintain multiple engineering patents and continuously develop proprietary technical methodologies"
      note="Innovation is embedded into our engineering DNA"
      compact
    />
  </div>
</template>

<script setup lang="ts">
import CtaBand from '@/components/CtaBand.vue'
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import StatsStrip from '@/components/StatsStrip.vue'

const stats = [
  { icon: '/assets/asset-icon-completed-projects.png', value: '200+', label: 'Completed Projects' },
  { icon: '/assets/asset-icon-team-members.png', value: '3000+', label: 'Team Members' },
  { icon: '/assets/asset-icon-experience.png', value: '30+', label: 'Years Experience' },
  { icon: '/assets/asset-icon-patents.png', value: '50+', label: 'Engineering Patents' },
]

const qualifications = [
  'Class A Engineering Design Qualification',
  'National Engineering Consulting Qualification',
  'Class A Engineering Supervision Qualification',
  'Class A Project Management Qualification',
  'ISO9001:2015 Quality Management System',
  'ISO14001:2015 Environmental Management System',
  'ISO45001:2018 Occupational Health & Safety',
  'Construction General Contracting Qualification',
  'Municipal Engineering Contracting Qualification',
]

const technicalTeam = [
  { label: 'Senior Engineers', value: '35%', note: 'Leading complex project execution' },
  { label: 'Professional Engineers', value: '34%', note: 'Specialized technical expertise' },
  { label: 'Experienced Engineers', value: '23%', note: 'Proven project delivery' },
  { label: 'Technical Support', value: '8%', note: 'Essential operational support' },
]

const managementSystem = [
  { number: '1', title: 'Scientific Management', description: 'Data-driven decision making and process optimization' },
  { number: '2', title: 'Careful Design', description: 'Precision engineering with attention to detail' },
  { number: '3', title: 'Superior Quality', description: 'Consistent delivery of high-quality solutions' },
  { number: '4', title: 'Excellent Planning', description: 'Strategic project planning and execution' },
  { number: '5', title: 'Health & Safety', description: 'Comprehensive safety protocols and compliance' },
  { number: '6', title: 'Environmental Protection', description: 'Sustainable practices and environmental stewardship' },
  { number: '7', title: 'Integrity & Law-abiding', description: 'Ethical conduct and full regulatory compliance' },
  { number: '8', title: 'Win-win Harmony', description: 'Collaborative partnerships for mutual success' },
]
</script>
