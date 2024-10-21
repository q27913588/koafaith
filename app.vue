<template>
  <div class="bg-gray min-h-screen  flex flex-col " >
    <AppHeader />
    <ThreePage />
    <AppMainPage />


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