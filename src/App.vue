<template>
  <div class="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]">
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div class="mx-auto flex max-w-[1240px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button class="shrink-0" type="button" @click="scrollToSection('home')">
          <img
            src="/assets/asset-logo-fujian.png"
            :alt="t('brand.name')"
            class="h-7 w-auto sm:h-9"
          />
        </button>

        <nav class="hidden flex-1 items-center justify-center gap-1.5 lg:flex" aria-label="Primary navigation">
          <button
            v-for="item in navItems"
            :key="item.id"
            type="button"
            class="rounded-2xl px-4 py-2.5 text-[14px] font-semibold transition"
            :class="
              activeSection === item.id
                ? 'bg-[#0b61b6] text-white shadow-[0_16px_32px_rgba(11,97,182,0.22)]'
                : 'text-slate-700 hover:bg-slate-100 hover:text-[#0b61b6]'
            "
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </button>
        </nav>

        <div class="ml-auto hidden items-center gap-3 lg:flex">
          <div ref="languageMenuRef" class="relative">
            <button
              type="button"
              class="inline-flex min-w-[146px] items-center justify-between gap-3 rounded-full border-2 border-[#0b61b6] bg-white px-4 py-2.5 text-[14px] font-semibold text-[#0b61b6] transition hover:bg-[#f2f8ff]"
              :aria-expanded="languageOpen"
              @click.stop="languageOpen = !languageOpen"
            >
              <span>{{ currentLocaleLabel }}</span>
              <ChevronDown
                :size="18"
                class="transition"
                :class="languageOpen ? 'rotate-180' : ''"
              />
            </button>

            <div
              v-if="languageOpen"
              class="absolute right-0 top-[calc(100%+10px)] w-[178px] overflow-hidden rounded-[22px] border border-slate-200 bg-white p-2 shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            >
              <button
                v-for="item in localeOptions"
                :key="item.value"
                type="button"
                class="flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-left text-[13px] font-semibold transition"
                :class="
                  locale === item.value
                    ? 'bg-[#0b61b6] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                "
                @click="changeLocale(item.value)"
              >
                <span>{{ item.label }}</span>
                <BadgeCheck v-if="locale === item.value" :size="16" />
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:border-[#0b61b6]/20 hover:bg-slate-50 hover:text-[#0b61b6] lg:hidden"
          :aria-label="mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" :size="20" />
          <Menu v-else :size="20" />
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
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition duration-250 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <aside
          v-if="mobileOpen"
          class="fixed inset-y-0 right-0 z-50 flex h-screen w-[300px] max-w-[86vw] flex-col overflow-y-auto bg-white shadow-[-24px_0_72px_rgba(15,23,42,0.18)] lg:hidden"
        >
          <div class="flex items-center justify-between border-b border-slate-200 px-5 py-3.5">
            <img
              src="/assets/asset-logo-fujian.png"
              :alt="t('brand.name')"
              class="h-7 w-auto"
            />

            <button
              type="button"
              class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700"
              :aria-label="t('nav.closeMenu')"
              @click="mobileOpen = false"
            >
              <X :size="18" />
            </button>
          </div>

          <nav class="flex flex-1 flex-col gap-2 px-4 py-4" aria-label="Mobile navigation">
            <button
              v-for="item in navItems"
              :key="item.id"
              type="button"
              class="rounded-2xl px-4 py-2.5 text-left text-[14px] font-semibold transition"
              :class="
                activeSection === item.id
                  ? 'bg-[#0b61b6] text-white'
                  : 'border border-slate-200 text-slate-700 hover:border-[#0b61b6]/25 hover:text-[#0b61b6]'
              "
              @click="scrollToSection(item.id)"
            >
              {{ item.label }}
            </button>

            <div class="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
              <div class="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-500">
                <Globe2 :size="16" />
                <span>{{ t('language.label') }}</span>
              </div>

              <div class="mt-3 grid grid-cols-3 gap-2">
                <button
                  v-for="item in localeOptions"
                  :key="item.value"
                  type="button"
                  class="rounded-2xl px-3 py-2.5 text-[12px] font-semibold transition"
                  :class="
                    locale === item.value
                      ? 'bg-[#0b61b6] text-white'
                      : 'bg-white text-slate-700 hover:text-[#0b61b6]'
                  "
                  @click="changeLocale(item.value)"
                >
                  {{ item.label }}
                </button>
              </div>
            </div>
          </nav>
        </aside>
      </Transition>
    </header>

    <main>
      <section
        id="home"
        data-nav-section="home"
        class="relative isolate overflow-hidden bg-[#0b61b6]"
      >
        <img
          src="/assets/asset-fujian-hero-home.png"
          alt=""
          class="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,97,182,0.96)_0%,rgba(11,97,182,0.93)_34%,rgba(11,97,182,0.45)_58%,rgba(11,97,182,0.12)_100%)]" />
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%)]" />

        <div class="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1240px] items-center px-4 py-16 sm:px-6 lg:min-h-[620px] lg:px-8">
          <div class="max-w-[760px]">
            <h1 class="max-w-[720px] text-[clamp(2.45rem,7vw,5.85rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white">
              {{ t('hero.title') }}
            </h1>
            <p class="mt-6 max-w-[700px] text-[clamp(1rem,1.75vw,1.3rem)] leading-relaxed text-white/90">
              {{ t('hero.description') }}
            </p>

            <div class="mt-8">
              <button
                type="button"
                class="inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 text-[0.98rem] font-bold text-[#0b61b6] shadow-[0_20px_34px_rgba(8,73,137,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_42px_rgba(8,73,137,0.26)]"
                @click="scrollToSection('contact')"
              >
                <span>{{ t('hero.cta') }}</span>
                <ArrowRight :size="18" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        data-nav-section="about"
        class="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div class="mx-auto grid max-w-[1240px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <span class="section-pill">
              {{ t('about.badge') }}
            </span>
            <h2
              class="mt-8 max-w-[560px] text-[clamp(3.05rem,5.5vw,4.9rem)] font-black leading-[0.9] tracking-[-0.04em] text-slate-950"
              :class="locale === 'zh' ? '' : 'uppercase'"
            >
              <span
                v-for="line in aboutTitleLines"
                :key="line"
                class="block sm:whitespace-nowrap"
              >
                {{ line }}
              </span>
            </h2>

            <div class="mt-8 max-w-[470px] space-y-6 text-[1rem] leading-8 text-slate-500">
              <p v-for="paragraph in aboutParagraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-9 flex max-w-[470px] gap-5">
              <div class="w-[3px] shrink-0 rounded-full bg-[#0b61b6]" />
              <p class="text-[1.02rem] font-extrabold leading-8 text-slate-900">
                {{ t('about.quote') }}
              </p>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[420px] xl:max-w-[460px]">
              <div class="absolute right-0 top-0 h-[85%] w-[85%] translate-x-[14px] -translate-y-[14px] rounded-[28px] bg-[#0b61b6]" />
              <img
                src="/assets/asset-fujian-about-us.png"
                :alt="t('about.imageAlt')"
                class="relative w-full rounded-[28px] object-cover shadow-[0_26px_44px_rgba(15,23,42,0.16)]"
              />
            </div>
          </div>
        </div>

        <div class="mx-auto mt-20 max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="item in aboutStats"
              :key="item.label"
              class="text-center"
            >
              <div class="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#edf5ff] text-[#0b61b6]">
                <component :is="item.icon" :size="24" />
              </div>
              <p class="mt-5 text-[clamp(2.55rem,3.8vw,3.55rem)] font-black leading-none tracking-[-0.04em] text-slate-950">
                {{ item.value }}
              </p>
              <p class="mt-2 text-[0.82rem] font-semibold text-slate-700">
                {{ item.label }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="services"
        data-nav-section="services"
        class="relative overflow-hidden bg-gradient-to-b from-white to-[#eff6fd] py-20 sm:py-24 lg:py-28"
      >
        <div class="services-corner pointer-events-none absolute right-0 top-0 hidden h-[320px] w-[480px] xl:block" />

        <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <span class="section-pill">{{ t('services.badge') }}</span>

          <div class="mt-8 max-w-[680px]">
            <h2 class="text-[clamp(2.2rem,4.8vw,4.3rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-slate-950">
              {{ t('services.title') }}
            </h2>
            <p class="mt-5 text-[clamp(1rem,1.8vw,1.5rem)] font-extrabold leading-tight text-[#0b61b6]">
              {{ t('services.subtitle') }}
            </p>
          </div>

          <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <article
              v-for="item in services"
              :key="item.title"
              class="text-center"
            >
              <div class="mx-auto h-[148px] w-[148px] overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_8px_24px_rgba(15,23,42,0.10)]">
                <img :src="item.image" :alt="item.title" class="h-full w-full rounded-full object-cover" />
              </div>
              <h3 class="mt-5 text-[1.1rem] font-extrabold leading-tight text-slate-900">
                {{ item.title }}
              </h3>
              <p class="mt-2.5 text-[0.88rem] leading-relaxed text-slate-500">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Portfolio: 400+ Completed Projects -->
      <section
        id="portfolio"
        data-nav-section="portfolio"
        class="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span class="section-pill">{{ t('portfolio.badge') }}</span>
              <p class="mt-5 text-[clamp(2.4rem,5vw,4.35rem)] font-black leading-none text-slate-950">
                {{ t('portfolio.leadValue') }}
              </p>
              <h2 class="max-w-[320px] text-[clamp(2.05rem,4.2vw,3.75rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-slate-950">
                {{ t('portfolio.leadTitle') }}
              </h2>
              <p class="mt-3 max-w-[360px] text-[0.94rem] leading-6 text-slate-500">
                {{ t('portfolio.leadDescription') }}
              </p>
              <ul class="mt-5 space-y-2.5">
                <li
                  v-for="bullet in portfolioBullets"
                  :key="bullet"
                  class="flex items-start gap-3 text-[0.88rem] font-semibold text-slate-700"
                >
                  <span class="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-slate-950" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/assets/asset-400-completed-projects.png"
                :alt="t('portfolio.leadTitle')"
                class="w-full rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Project 1: CP Group -->
      <section class="bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
        <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div class="grid items-start gap-10 lg:grid-cols-[320px_1fr]">
            <div class="flex flex-col items-center lg:items-start">
              <div class="h-[260px] w-[260px] overflow-hidden rounded-full border-[5px] border-[#dce8f5] bg-white sm:h-[300px] sm:w-[300px]">
                <img
                  :src="featuredProjectImages[0]"
                  :alt="t('portfolio.featured[0].title')"
                  class="h-full w-full rounded-full object-cover"
                />
              </div>
              <p class="mt-6 max-w-[320px] text-center text-[0.94rem] font-bold italic leading-6 text-slate-700 lg:text-left">
                {{ t('portfolio.featured[0].summary') }}
              </p>
            </div>

            <div>
              <span class="section-pill">{{ t('portfolio.featured[0].badge') }}</span>
              <h3 class="mt-5 max-w-[600px] text-[clamp(1.65rem,3.5vw,2.6rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-slate-950">
                {{ t('portfolio.featured[0].title') }}
                <span class="text-[#0b61b6]">{{ t('portfolio.featured[0].titleHighlight') }}</span>
              </h3>

              <div class="mt-6 overflow-hidden rounded-[12px] border border-slate-200 bg-white">
                <div class="grid grid-cols-[1.4fr_0.6fr] bg-[#0b61b6] px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white">
                  <span>{{ t('portfolio.featured[0].projectHeaders.name') }}</span>
                  <span>{{ t('portfolio.featured[0].projectHeaders.industry') }}</span>
                </div>
                <div
                  v-for="(row, idx) in (tm('portfolio.featured[0].projects') as TableRow[])"
                  :key="idx"
                  class="grid grid-cols-[1.4fr_0.6fr] border-t border-slate-100 px-4 py-3 text-[0.86rem] text-slate-600"
                >
                  <span class="font-medium">{{ row.name }}</span>
                  <span>{{ row.industry }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Project 2: Oman -->
      <section class="bg-white py-16 sm:py-20 lg:py-24">
        <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-10 lg:grid-cols-[320px_1fr]">
            <div class="flex justify-center lg:justify-start">
              <div class="h-[260px] w-[260px] overflow-hidden rounded-full border-[5px] border-[#dce8f5] bg-white sm:h-[300px] sm:w-[300px]">
                <img
                  :src="featuredProjectImages[1]"
                  :alt="t('portfolio.featured[1].title')"
                  class="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <div>
              <span class="section-pill">{{ t('portfolio.featured[1].badge') }}</span>
              <h3 class="mt-5 max-w-[600px] text-[clamp(1.65rem,3.5vw,2.6rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-slate-950">
                {{ t('portfolio.featured[1].title') }}
                <span class="text-[#0b61b6]">{{ t('portfolio.featured[1].titleHighlight') }}</span>
              </h3>
              <p class="mt-4 max-w-[600px] text-[0.94rem] leading-6 text-slate-500">
                {{ t('portfolio.featured[1].summary') }}
              </p>

              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="flex items-start gap-3">
                  <div class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-[#0b61b6]">
                    <MapPin :size="18" />
                  </div>
                  <div>
                    <p class="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-400">{{ t('portfolio.labels.location') }}</p>
                    <p class="mt-0.5 text-[0.88rem] font-semibold text-slate-800">{{ t('portfolio.featured[1].location') }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-[#0b61b6]">
                    <CircleDollarSign :size="18" />
                  </div>
                  <div>
                    <p class="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-400">{{ t('portfolio.labels.cost') }}</p>
                    <p class="mt-0.5 text-[0.88rem] font-semibold text-slate-800">{{ t('portfolio.featured[1].cost') }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-[#0b61b6]">
                    <Wrench :size="18" />
                  </div>
                  <div>
                    <p class="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-400">{{ t('portfolio.labels.projectType') }}</p>
                    <p class="mt-0.5 text-[0.88rem] font-semibold text-slate-800">{{ t('portfolio.featured[1].projectType') }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-[#0b61b6]">
                    <BookOpen :size="18" />
                  </div>
                  <div>
                    <p class="text-[0.72rem] font-semibold uppercase tracking-wider text-slate-400">{{ t('portfolio.labels.scope') }}</p>
                    <p class="mt-0.5 text-[0.88rem] font-semibold text-slate-800">{{ t('portfolio.featured[1].scope') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Projects -->
      <section class="bg-[#f7f8fb] py-16 sm:py-20">
        <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h3 class="text-[clamp(1.6rem,3.2vw,2.45rem)] font-black uppercase leading-none tracking-[-0.03em] text-slate-950">
            {{ t('portfolio.otherProjects.title') }}
          </h3>

          <div class="mt-8 overflow-hidden rounded-[12px] border border-slate-200 bg-white">
            <div class="grid grid-cols-[1.4fr_0.6fr] bg-slate-100 px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">
              <span>{{ t('portfolio.otherProjects.headers.name') }}</span>
              <span>{{ t('portfolio.otherProjects.headers.industry') }}</span>
            </div>
            <div
              v-for="(row, idx) in otherProjects"
              :key="idx"
              class="grid grid-cols-[1.4fr_0.6fr] border-t border-slate-100 px-5 py-3.5 text-[0.88rem] text-slate-600"
            >
              <span class="font-semibold text-slate-800">{{ row.name }}</span>
              <span>{{ row.industry }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="bg-white py-16 sm:py-20 lg:py-24">
        <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div class="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span class="section-pill">{{ t('portfolio.certifications.badge') }}</span>
              <h3 class="mt-5 max-w-[500px] text-[clamp(1.7rem,3.7vw,2.8rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-slate-950">
                {{ t('portfolio.certifications.title') }}
              </h3>

              <div class="mt-8 overflow-hidden rounded-[12px] border border-slate-200 bg-white">
                <div class="grid grid-cols-[1.2fr_0.8fr] bg-[#0b61b6] px-4 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                  <span>{{ t('portfolio.certifications.headers.qualification') }}</span>
                  <span>{{ t('portfolio.certifications.headers.authority') }}</span>
                </div>
                <div
                  v-for="(row, idx) in certificationRows"
                  :key="idx"
                  class="grid grid-cols-[1.2fr_0.8fr] border-t border-slate-100 px-4 py-3"
                >
                  <div>
                    <p class="text-[0.86rem] font-semibold text-slate-800">{{ row.qualification }}</p>
                    <p v-if="row.subtitle" class="mt-0.5 text-[0.76rem] leading-snug text-slate-400">{{ row.subtitle }}</p>
                  </div>
                  <p class="text-[0.84rem] text-slate-600">{{ row.authority }}</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <img
                v-for="img in certificationImages"
                :key="img"
                :src="img"
                alt="Certification"
                class="w-full rounded-[12px] border border-slate-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      id="contact"
      data-nav-section="contact"
      class="bg-[#1a1b31] py-12 text-white/72"
    >
      <div class="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr]">
          <div>
            <h2 class="text-[1.7rem] font-black leading-none text-white">
              {{ t('brand.name') }}
            </h2>
            <p class="mt-2 text-[0.9rem] text-white/55">
              {{ t('footer.companySuffix') }}
            </p>
            <p class="mt-5 max-w-[290px] text-[0.92rem] leading-7 text-white/55">
              {{ t('footer.description') }}
            </p>
          </div>

          <div>
            <h3 class="text-[1.14rem] font-black text-white">
              {{ t('footer.quickLinks.title') }}
            </h3>
            <div class="mt-4 flex flex-col gap-2.5">
              <button
                v-for="item in footerLinks"
                :key="item.id"
                type="button"
                class="text-left text-[0.92rem] text-white/60 transition hover:text-white"
                @click="scrollToSection(item.id)"
              >
                {{ item.label }}
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-[1.14rem] font-black text-white">
              {{ t('footer.fieldsTitle') }}
            </h3>
            <div class="mt-4 space-y-2.5">
              <p
                v-for="field in footerFields"
                :key="field"
                class="text-[0.92rem] leading-6 text-white/60"
              >
                {{ field }}
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-[1.14rem] font-black text-white">
              {{ t('footer.contactTitle') }}
            </h3>

            <div class="mt-4 space-y-3.5">
              <div class="flex items-start gap-3 text-[0.92rem] leading-7 text-white/60">
                <MapPin :size="16" class="mt-1 shrink-0 text-[#2591ff]" />
                <span>{{ t('footer.address') }}</span>
              </div>

              <a
                :href="`tel:${t('footer.phone')}`"
                class="flex items-center gap-3 text-[0.92rem] text-white/60 transition hover:text-white"
              >
                <Phone :size="16" class="shrink-0 text-[#2591ff]" />
                <span>{{ t('footer.phone') }}</span>
              </a>

              <a
                :href="`mailto:${t('footer.email')}`"
                class="flex items-center gap-3 text-[0.92rem] text-white/60 transition hover:text-white"
              >
                <Mail :size="16" class="shrink-0 text-[#2591ff]" />
                <span>{{ t('footer.email') }}</span>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-white/10 pt-4 text-center text-[0.86rem] text-white/45">
          © {{ currentYear }} {{ t('brand.legal') }}. {{ t('footer.rights') }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
  Wrench,
  X,
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { setLocaleRef, type SupportedLocale } from '@/i18n'

type ServiceMessage = {
  title: string
  description: string
}

type StatMessage = {
  value: string
  label: string
}

type TableRow = {
  name: string
  industry: string
}

type CertificationRow = {
  qualification: string
  subtitle: string
  authority: string
}

const sectionIds = ['home', 'about', 'services', 'portfolio', 'contact'] as const
const footerLinkIds = ['about', 'services', 'portfolio', 'contact'] as const
const serviceImageMap = [
  '/assets/asset-fujian-project-management.png',
  '/assets/asset-fujian-core-advantages.png',
  '/assets/asset-fujian-digital-engineering.png',
  '/assets/asset-fujian-about-us.png',
  '/assets/asset-fujian-technical-team.png',
] as const
const featuredProjectImages = [
  '/assets/asset-portfolio-strategic-industrial.png',
  '/assets/asset-portfolio-middle-east.png',
] as const
const certificationImages = [
  '/assets/asset-certification-1.png',
  '/assets/asset-certification-2.png',
] as const
const statIcons = [Building2, Users, BookOpen, BookOpen] as const

type SectionId = (typeof sectionIds)[number]
type FooterLinkId = (typeof footerLinkIds)[number]

const { locale, t, tm } = useI18n({ useScope: 'global' })
const activeSection = ref<SectionId>('home')
const languageMenuRef = ref<HTMLElement | null>(null)
const languageOpen = ref(false)
const mobileOpen = ref(false)
const currentYear = new Date().getFullYear()

const localeOptions = computed(() => [
  { value: 'en' as SupportedLocale, label: t('language.options.en') },
  { value: 'id' as SupportedLocale, label: t('language.options.id') },
  { value: 'zh' as SupportedLocale, label: t('language.options.zh') },
])

const currentLocaleLabel = computed(
  () => localeOptions.value.find((item) => item.value === locale.value)?.label ?? 'English',
)

const navItems = computed(() =>
  sectionIds.map((id) => ({
    id,
    label: t(`nav.${id}`),
  })),
)

const footerLinks = computed(() =>
  footerLinkIds.map((id) => ({
    id,
    label: t(`footer.quickLinks.items.${id}`),
  })),
)

const aboutTitleLines = computed(() => {
  if (locale.value === 'zh') {
    return ['福建医工', '设计院']
  }

  return ['Fujian Medical', 'Engineering', 'Design Institute']
})

const aboutParagraphs = computed(() => tm('about.paragraphs') as string[])
const portfolioBullets = computed(() => tm('portfolio.bullets') as string[])
const footerFields = computed(() => tm('footer.fields') as string[])

const aboutStats = computed(() =>
  (tm('about.stats') as StatMessage[]).map((item, index) => ({
    ...item,
    icon: statIcons[index % statIcons.length],
  })),
)

// Merge static imagery with localized copy so section content changes cleanly with the locale.
const services = computed(() =>
  (tm('services.items') as ServiceMessage[]).map((item, index) => ({
    ...item,
    image: serviceImageMap[index % serviceImageMap.length],
  })),
)

const otherProjects = computed(() => tm('portfolio.otherProjects.rows') as TableRow[])
const certificationRows = computed(() => tm('portfolio.certifications.rows') as CertificationRow[])

watch(
  mobileOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  { immediate: true },
)

watch(locale, (next) => {
  document.documentElement.lang = next
})

function isSectionId(value: string): value is SectionId {
  return sectionIds.includes(value as SectionId)
}

function changeLocale(next: SupportedLocale) {
  setLocaleRef(locale, next)
  languageOpen.value = false
}

function getHeaderOffset() {
  return document.querySelector('header')?.getBoundingClientRect().height ?? 0
}

function scrollToSection(id: SectionId, behavior: ScrollBehavior = 'smooth') {
  const target = document.getElementById(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
  activeSection.value = id
  languageOpen.value = false
  mobileOpen.value = false
  window.history.replaceState(null, '', `#${id}`)
  window.scrollTo({ top, left: 0, behavior })
}

// Keep the active nav state aligned with the section currently in view.
function updateActiveSection() {
  const marker = window.scrollY + getHeaderOffset() + 88
  let current: SectionId = 'home'

  for (const id of sectionIds) {
    const element = document.getElementById(id)
    if (element && marker >= element.offsetTop) {
      current = id
    }
  }

  activeSection.value = current
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '')
  if (!isSectionId(hash)) return
  scrollToSection(hash, 'auto')
}

function handlePointerDown(event: PointerEvent) {
  if (!languageMenuRef.value) return
  if (languageMenuRef.value.contains(event.target as Node)) return
  languageOpen.value = false
}

let scrollTicking = false

function handleScroll() {
  if (scrollTicking) return

  scrollTicking = true
  window.requestAnimationFrame(() => {
    updateActiveSection()
    scrollTicking = false
  })
}

onMounted(() => {
  document.documentElement.lang = locale.value
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateActiveSection)
  window.addEventListener('hashchange', handleHashChange)
  document.addEventListener('pointerdown', handlePointerDown)

  updateActiveSection()

  const initialHash = window.location.hash.replace('#', '')
  if (isSectionId(initialHash)) {
    window.requestAnimationFrame(() => scrollToSection(initialHash, 'auto'))
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateActiveSection)
  window.removeEventListener('hashchange', handleHashChange)
  document.removeEventListener('pointerdown', handlePointerDown)
})
</script>

<style scoped>
.section-pill {
  @apply inline-flex items-center rounded-md bg-[#0b61b6] px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_20px_rgba(11,97,182,0.18)];
}

.services-corner {
  background: radial-gradient(
    ellipse at 100% 0%,
    rgba(15, 23, 42, 0.06) 0%,
    rgba(15, 23, 42, 0.03) 40%,
    transparent 70%
  );
}

</style>
