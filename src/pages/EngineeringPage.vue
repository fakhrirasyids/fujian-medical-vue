<template>
  <div class="bg-white">
    <PageHero
      eyebrow="Engineering Fields"
      title="Specialized Engineering Fields"
      description="Specialized expertise across critical infrastructure sectors"
      image="/assets/asset-fujian-hero-engineering.png"
      overlay-class="bg-gradient-to-r from-[#0b5db2]/95 via-[#0b5db2]/85 to-[#0b5db2]/5"
    />

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialized Fields"
          title="Our Areas of Expertise"
          description="Delivering excellence across critical infrastructure sectors"
        />

        <div class="mt-10 grid gap-5 lg:grid-cols-2">
          <article
            v-for="field in expertiseCards"
            :key="field.title"
            class="rounded-[24px] border px-5 py-5 shadow-[0_16px_34px_rgba(15,23,42,0.06)]"
            :class="field.surfaceClass"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl shadow-[0_10px_18px_rgba(15,23,42,0.1)]" :class="field.iconShellClass">
                <img :src="field.icon" :alt="field.title" class="h-5 w-5 object-contain" />
              </div>
              <h3 class="text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
                {{ field.title }}
              </h3>
            </div>

            <p class="mt-4 text-[13px] leading-6 text-slate-500">
              {{ field.description }}
            </p>

            <div class="mt-5 grid gap-2.5 sm:grid-cols-2">
              <div
                v-for="point in field.points"
                :key="point"
                class="flex items-start gap-2.5 text-[12px] leading-6 text-slate-500"
              >
                <span class="mt-1.5 h-2.5 w-2.5 rounded-full border" :class="field.dotClass" />
                <span>{{ point }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Digital Engineering"
          title="Digital Engineering Advantages"
          description="We leverage advanced software systems to ensure precision and efficiency"
        />

        <div class="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <img
            src="/assets/asset-fujian-digital-engineering.png"
            alt="Professional software tools"
            class="w-full rounded-[24px] shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
          />

          <div>
            <h3 class="text-[24px] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
              Professional Software Tools
            </h3>
            <div class="mt-5 space-y-3">
              <article
                v-for="tool in digitalTools"
                :key="tool.name"
                class="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
              >
                <div class="grid grid-cols-[3px_1fr] gap-3">
                  <div class="rounded-full bg-[#0b5db2]" />
                  <div>
                    <h4 class="text-[14px] font-semibold text-slate-900">{{ tool.name }}</h4>
                    <p class="mt-1 text-[12px] text-slate-500">{{ tool.description }}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white pb-16 sm:pb-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div class="rounded-[26px] bg-[#0b5db2] px-5 py-8 shadow-[0_22px_44px_rgba(11,93,178,0.28)] sm:px-8">
          <div class="flex justify-center">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <img src="/assets/asset-icon-key-digital.png" alt="Key digital capabilities" class="h-6 w-6 object-contain" />
            </div>
          </div>

          <h3 class="mt-5 text-center text-[28px] font-black uppercase tracking-[-0.04em] text-white sm:text-[32px]">
            Key Digital Capabilities
          </h3>

          <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article v-for="item in digitalCapabilities" :key="item.number" class="text-center text-white">
              <div class="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/16 text-[13px] font-bold">
                {{ item.number }}
              </div>
              <h4 class="mt-4 text-[14px] font-semibold">{{ item.title }}</h4>
              <p class="mt-2 text-[12px] leading-6 text-white/75">{{ item.description }}</p>
            </article>
          </div>

          <p class="mt-7 text-center text-[13px] font-medium text-white/82">
            Digital engineering enhances coordination, reduces risk, and accelerates project timelines
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white pb-16 sm:pb-20">
      <div class="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Innovation"
          title="Patents & Proprietary Technology"
          description="We maintain multiple engineering patents and continuously develop proprietary technical methodologies"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'

const expertiseCards = [
  {
    icon: '/assets/asset-icon-pharmaceutical.png',
    title: 'Pharmaceutical & Chemical Engineering',
    description: 'Precision-engineered production environments compliant with international GMP standards.',
    points: [
      'GMP Pharmaceutical Plants',
      'Chemical Synthesis Facilities',
      'Biological Production',
      'Active Pharmaceutical Ingredients',
      'Traditional Chinese Medicine Extraction',
      'Pharmaceutical Intermediates',
      'Advanced Chemical Materials',
    ],
    surfaceClass: 'border-[#cfe0fb] bg-[#f5f9ff]',
    iconShellClass: 'bg-[#2f78ff]',
    dotClass: 'border-[#6ea4ef]',
  },
  {
    icon: '/assets/asset-icon-enviromental.png',
    title: 'Environmental Engineering',
    description: 'Comprehensive environmental solutions for industrial and municipal applications.',
    points: [
      'VOCs Gas Treatment Systems',
      'Atmospheric Pollution Control',
      'Wastewater Treatment Facilities',
      'Industrial Effluent Systems',
      'Solid Waste Management',
      'Clean Room Technology',
      'Environmental Compliance',
    ],
    surfaceClass: 'border-[#cdeeda] bg-[#f5fff8]',
    iconShellClass: 'bg-[#21c55d]',
    dotClass: 'border-[#5ed38b]',
  },
  {
    icon: '/assets/asset-icon-new-energy.png',
    title: 'New Energy Engineering',
    description: 'Advanced energy infrastructure and battery material production facilities.',
    points: ['Electronic Chemicals Production', 'Battery Materials', 'Electrolyte Manufacturing', 'Energy Storage Systems'],
    surfaceClass: 'border-[#f4e2a8] bg-[#fffdf4]',
    iconShellClass: 'bg-[#e5a100]',
    dotClass: 'border-[#efc24b]',
  },
  {
    icon: '/assets/asset-icon-oil-gas.png',
    title: 'Oil & Gas Storage Engineering',
    description: 'Complex energy systems requiring the highest safety and technical standards.',
    points: ['LNG Terminals and Facilities', 'LPG Processing Plants', 'Natural Gas Infrastructure', 'Petrochemical Facilities'],
    surfaceClass: 'border-[#f5d6c1] bg-[#fff9f4]',
    iconShellClass: 'bg-[#ff6c1d]',
    dotClass: 'border-[#ff9a64]',
  },
]

const digitalTools = [
  { name: 'ZWPD 3D Factory Design Software', description: 'Advanced 3D plant layout and design' },
  { name: 'ZWPD Piping Software', description: 'Comprehensive piping design and analysis' },
  { name: 'PKPM Structural Computing Software', description: 'Structural engineering and simulation' },
  { name: 'UESOFT (Stress Analysis)', description: 'Advanced stress and load analysis' },
  { name: 'SN&D Equipment Software', description: 'Equipment and systems design' },
]

const digitalCapabilities = [
  { number: '1', title: '3D Design & BIM Integration', description: 'Complete 3D modeling and coordination' },
  { number: '2', title: 'Structural Simulation', description: 'Advanced analysis and optimization' },
  { number: '3', title: 'Process Modeling', description: 'Process flow simulation' },
  { number: '4', title: 'MEP Systems Engineering', description: 'Integrated building systems' },
]
</script>
