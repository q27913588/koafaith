<template>
  <div>
    <AppHeader />
    <AppMainPage />
    <ThreePage />

    <NuxtRouteAnnouncer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppMainPage from '~/components/AppMainPage.vue'
import ThreePage from '~/components/ThreePage.vue'

export default {
  components: {
    AppHeader,
    AppMainPage,
    ThreePage
  }
}
</script>