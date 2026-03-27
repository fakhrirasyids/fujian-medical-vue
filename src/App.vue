<template>
  <div class="min-h-screen bg-white text-slate-900">
    <SiteHeader :active-page="activePage" @navigate="navigateToPage" @contact="scrollToFooter" />

    <main>
      <component :is="activeComponent" @navigate="navigateToPage" @contact="scrollToFooter" />
    </main>

    <SiteFooter @navigate="navigateToPage" @contact="scrollToFooter" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import { primaryPages, type PageId } from '@/constants/navigation'
import AboutPage from '@/pages/AboutPage.vue'
import EngineeringPage from '@/pages/EngineeringPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'

const pageMap = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  engineering: EngineeringPage,
  projects: ProjectsPage,
} satisfies Record<PageId, typeof HomePage>

const activePage = ref<PageId>('home')
const activeComponent = computed(() => pageMap[activePage.value])

function resolveHash(hash: string): PageId {
  const normalized = hash.replace('#', '') as PageId
  return primaryPages.some((item) => item.id === normalized) ? normalized : 'home'
}

function syncPageFromHash() {
  if (!window.location.hash) {
    window.history.replaceState(null, '', '#home')
  }

  activePage.value = resolveHash(window.location.hash)
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

function navigateToPage(page: PageId) {
  if (window.location.hash !== `#${page}`) {
    window.location.hash = page
    return
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function scrollToFooter() {
  const footer = document.getElementById('site-footer')
  if (!footer) return
  footer.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  syncPageFromHash()
  window.addEventListener('hashchange', syncPageFromHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncPageFromHash)
})
</script>
