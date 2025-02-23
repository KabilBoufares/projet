<template>
  <div class="app">
    <NavBar />
    <AppHeader />
    <StatsSection />
    <ArtisansSection />
    <CtaSection />
    <AppFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppHeader from './components/Header.vue'
import StatsSection from './components/StatsSection.vue'
import ArtisansSection from './components/ArtisansSection.vue'
import CtaSection from './components/CtaSection.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AppHeader,
    StatsSection,
    ArtisansSection,
    CtaSection,
    AppFooter
  }
}
</script>

<style>
/* Global styles can go here */
</style>