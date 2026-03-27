<template>
  <div class="bg-white">
    <PageHero
      eyebrow="Our Services"
      title="Integrated Engineering Solutions"
      description="Lifecycle-based infrastructure solutions from concept to completion"
      image="/assets/asset-fujian-hero-services.png"
      overlay-class="bg-gradient-to-r from-[#0b5db2]/95 via-[#0b5db2]/84 to-[#0b5db2]/55"
    />

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Complete Service Flow"
          title="Full Project Lifecycle Services"
          description="From concept to commissioning we handle every phase"
        />

        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="service in lifecycleServices"
            :key="service.number"
            class="rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
          >
            <div class="mb-5 h-1 rounded-full" :style="{ backgroundColor: service.accent }" />
            <div class="text-[38px] font-black leading-none tracking-[-0.04em] text-slate-100">
              {{ service.number }}
            </div>
            <h3 class="mt-3 text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
              {{ service.title }}
            </h3>
            <p class="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em]" :style="{ color: service.accent }">
              {{ service.kicker }}
            </p>
            <p class="mt-3 text-[13px] leading-6 text-slate-500">
              {{ service.description }}
            </p>

            <ul class="mt-4 space-y-2.5">
              <li
                v-for="point in service.points"
                :key="point"
                class="flex items-start gap-2.5 text-[12px] leading-6 text-slate-500"
              >
                <span class="mt-1.5 h-2.5 w-2.5 rounded-full border border-[#4d8dd6]" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f5f8fc] py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Design Capabilities"
          title="Engineering Design Capabilities"
          description=""
        />

        <div class="mt-10 grid gap-5 lg:grid-cols-2">
          <article
            v-for="capability in designCapabilities"
            :key="capability.title"
            class="rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
          >
            <div class="grid grid-cols-[4px_1fr] gap-4">
              <div class="rounded-full bg-[#0b5db2]" />
              <div>
                <h3 class="text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
                  {{ capability.title }}
                </h3>
                <ul class="mt-4 space-y-2.5">
                  <li
                    v-for="point in capability.points"
                    :key="point"
                    class="flex items-start gap-2.5 text-[12px] leading-6 text-slate-500"
                  >
                    <span class="mt-1.5 h-2.5 w-2.5 rounded-full border border-[#4d8dd6]" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto grid max-w-[1180px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <img
          src="/assets/asset-fujian-project-management.png"
          alt="Comprehensive EPC and PMC service system"
          class="w-full rounded-[26px] shadow-[0_24px_48px_rgba(15,23,42,0.12)]"
        />

        <div>
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d6bc5]">Project Management</p>
          <h2 class="mt-3 text-[26px] font-black uppercase leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-[32px] lg:text-[42px]">
            Comprehensive EPC & PMC Service System
          </h2>
          <p class="mt-5 text-[14px] leading-7 text-slate-600">
            The company has established a comprehensive EPC and PMC all-round service system under the
            leadership of project managers, utilizing advanced management concepts, systems, and tools
            to ensure strong technical capabilities, quality control, cost management, safety, and
            environmental occupational health.
          </p>

          <div class="mt-6 space-y-3">
            <article
              v-for="item in serviceSystem"
              :key="item"
              class="flex items-center gap-3 rounded-2xl bg-[#f5f8fc] px-4 py-3 text-[13px] font-semibold text-slate-700"
            >
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#4d8dd6] text-[11px] text-[#0b5db2]">✓</span>
              <span>{{ item }}</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Ready to Start Your Project?"
      description="Let us help you deliver your infrastructure project with certainty and excellence"
      compact
    >
      <template #actions>
        <AppButton variant="light" @click="emit('contact')">
          <span>Contact Our Team</span>
          <ArrowRight :size="16" />
        </AppButton>
      </template>
    </CtaBand>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import AppButton from '@/components/AppButton.vue'
import CtaBand from '@/components/CtaBand.vue'
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'

const emit = defineEmits<{
  (e: 'contact'): void
}>()

const lifecycleServices = [
  {
    number: '01',
    accent: '#4b87f0',
    title: 'Consultation',
    kicker: 'Strategic Planning',
    description: 'Feasibility studies, technical assessment, and master planning to ensure project success from the start.',
    points: ['Feasibility Studies', 'Technical Assessment', 'Master Planning', 'Risk Analysis'],
  },
  {
    number: '02',
    accent: '#21c55d',
    title: 'Engineering Design',
    kicker: 'Design Excellence',
    description: 'Comprehensive engineering design across all disciplines using advanced digital tools.',
    points: ['Architectural Design', 'Structural Engineering', 'MEP Systems', 'Process Engineering'],
  },
  {
    number: '03',
    accent: '#e8ab13',
    title: 'Procurement',
    kicker: 'Optimized Sourcing',
    description: 'Strategic procurement management ensuring quality, cost-effectiveness, and timely delivery.',
    points: ['Vendor Selection', 'Equipment Sourcing', 'Cost Optimization', 'Quality Assurance'],
  },
  {
    number: '04',
    accent: '#ff7a22',
    title: 'Construction',
    kicker: 'Professional Execution',
    description: 'Expert construction management with rigorous safety and quality standards.',
    points: ['Construction Management', 'Site Supervision', 'Quality Control', 'Safety Management'],
  },
  {
    number: '05',
    accent: '#b250ff',
    title: 'Commissioning',
    kicker: 'Operational Readiness',
    description: 'Comprehensive testing and commissioning to ensure systems perform as designed.',
    points: ['System Testing', 'Performance Verification', 'Regulatory Approval', 'Training & Handover'],
  },
  {
    number: '06',
    accent: '#ff4c4c',
    title: 'Completion',
    kicker: 'Long-term Success',
    description: 'Final handover with complete documentation and ongoing support.',
    points: ['Documentation', 'Final Inspection', 'Warranty Support', 'Operational Guidance'],
  },
]

const designCapabilities = [
  {
    title: 'Architectural & Structural',
    points: ['Architectural design and planning', 'Structural engineering and analysis', 'Foundation design', 'Steel and concrete structures', 'Seismic design'],
  },
  {
    title: 'Mechanical & Electrical',
    points: ['HVAC systems design', 'Electrical power distribution', 'Process piping systems', 'Fire protection systems', 'Automation & control systems'],
  },
  {
    title: 'Process Engineering',
    points: ['Process flow design', 'Equipment selection', 'Piping & instrumentation diagrams (P&ID)', 'Process optimization', 'Safety systems design'],
  },
  {
    title: 'Environmental & Compliance',
    points: ['Environmental impact assessment', 'Waste treatment systems', 'Clean room design (GMP compliance)', 'Occupational health & safety', 'Regulatory compliance'],
  },
]

const serviceSystem = [
  'Integrated Project Management Systems',
  'Advanced Scheduling and Tracking',
  'Cost Control and Budget Management',
  'Quality Assurance Programs',
  'Safety and Environmental Compliance',
  'Stakeholder Communication',
  'Risk Management',
]
</script>
