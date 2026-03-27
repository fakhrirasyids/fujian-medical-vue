<template>
  <div class="bg-white">
    <PageHero
      eyebrow="Project Experience"
      title="Project Portfolio"
      description="Over 200 completed projects demonstrating excellence in complex, capital-intensive infrastructure"
      image="/assets/asset-fujian-hero-projects.png"
      overlay-class="bg-gradient-to-r from-[#0b5db2]/95 via-[#0b5db2]/84 to-[#0b5db2]/64"
    />

    <StatsStrip :items="stats" carded />

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Our Project Portfolio"
          description="We have delivered exceptional results across multiple sectors"
        />

        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="project in portfolioCards"
            :key="project.title"
            class="rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
          >
            <div class="mb-5 h-1 rounded-full" :style="{ backgroundColor: project.accent }" />
            <h3 class="text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
              {{ project.title }}
            </h3>
            <p class="mt-3 text-[13px] leading-6 text-slate-500">
              {{ project.description }}
            </p>
            <p class="mt-4 text-[13px] font-semibold text-[#0b5db2]">
              {{ project.count }}
            </p>
          </article>
        </div>

        <div class="mt-10 overflow-hidden rounded-[28px] shadow-[0_22px_48px_rgba(15,23,42,0.12)]">
          <img
            src="/assets/asset-fujian-reference-project-portofolio.png"
            alt="Reference projects portfolio"
            class="w-full"
          />
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project Management"
          title="Project Management Excellence"
          description="Our comprehensive project management approach ensures successful delivery"
        />

        <div class="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <img
            src="/assets/asset-fujian-projects-section-project-management.png"
            alt="Integrated project delivery"
            class="w-full rounded-[24px] shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
          />

          <div>
            <h3 class="text-[26px] font-extrabold uppercase leading-tight tracking-[-0.03em] text-slate-900">
              Integrated Project Delivery
            </h3>
            <p class="mt-4 text-[14px] leading-7 text-slate-600">
              The company has established a comprehensive EPC and PMC all-round service system under the
              leadership of project managers, including design excellence, procurement management,
              engineering construction, and project services.
            </p>

            <div class="mt-6 space-y-3">
              <article
                v-for="step in deliverySteps"
                :key="step.number"
                class="grid grid-cols-[40px_1fr] gap-4 rounded-2xl bg-[#f5f8fc] px-4 py-3"
              >
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0b5db2] text-[12px] font-bold text-white">
                  {{ step.number }}
                </div>
                <div>
                  <h4 class="text-[14px] font-semibold text-slate-900">{{ step.title }}</h4>
                  <p class="mt-1 text-[12px] text-slate-500">{{ step.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Factors"
          title="Our Project Success Formula"
          description="Key factors ensuring project excellence"
        />

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <article
            v-for="factor in successFactors"
            :key="factor.title"
            class="rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_14px_28px_rgba(15,23,42,0.05)]"
          >
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3fd]">
              <img :src="factor.icon" :alt="factor.title" class="h-5 w-5 object-contain" />
            </div>
            <h3 class="mt-4 text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
              {{ factor.title }}
            </h3>
            <ul class="mt-4 space-y-2.5">
              <li
                v-for="point in factor.points"
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

    <CtaBand
      title="We Provide Certainty in Complex Environments"
      description="We transform infrastructure complexity into strategic advantage"
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
  { icon: '/assets/asset-icon-industry-awards.png', value: '50+', label: 'Industry Awards' },
  { icon: '/assets/asset-icon-experience.png', value: '30+', label: 'Years Experience' },
  { icon: '/assets/asset-icon-success-rate.png', value: '100%', label: 'Success Rate' },
]

const portfolioCards = [
  { title: 'Large-Scale Pharmaceutical Plants', description: 'GMP-compliant facilities with advanced production capabilities.', count: '40+ Projects', accent: '#2f78ff' },
  { title: 'Industrial Processing Facilities', description: 'High-capacity chemical and industrial manufacturing plants.', count: '50+ Projects', accent: '#22c55e' },
  { title: 'LNG Terminals', description: 'Complex liquefied natural gas storage and handling facilities.', count: '15+ Projects', accent: '#e5a100' },
  { title: 'Healthcare Infrastructure', description: 'Medical institutions and specialized healthcare facilities.', count: '30+ Projects', accent: '#ff6c1d' },
  { title: 'Energy Production Systems', description: 'Power generation and energy infrastructure projects.', count: '25+ Projects', accent: '#b250ff' },
  { title: 'Research Facilities', description: 'Advanced R&D laboratories and testing centers.', count: '40+ Projects', accent: '#ff4c4c' },
]

const deliverySteps = [
  { number: '1', title: 'Design Excellence', description: 'Engineering excellence and innovation' },
  { number: '2', title: 'Procurement Management', description: 'Strategic sourcing and cost optimization' },
  { number: '3', title: 'Engineering Construction', description: 'Professional execution and quality control' },
  { number: '4', title: 'Project Services', description: 'Comprehensive support and coordination' },
]

const successFactors = [
  {
    icon: '/assets/asset-icon-completed-projects.png',
    title: 'Integrated Delivery',
    points: ['Unified EPC management', 'Single point of responsibility', 'Seamless coordination'],
  },
  {
    icon: '/assets/asset-icon-key-digital.png',
    title: 'Technical Excellence',
    points: ['Advanced engineering tools', 'Expert multi-disciplinary teams', 'Innovation-driven solutions'],
  },
  {
    icon: '/assets/asset-icon-experience.png',
    title: 'Quality Assurance',
    points: ['Rigorous quality control', 'International standards compliance', 'Continuous improvement'],
  },
]
</script>
