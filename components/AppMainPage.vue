<template>
  <div class="relative">
    <transition name="height-transition">
      <div :class="divClass" class="flex transition-all duration-500 ease-in-out">
        <!-- <div ref="logoContainer" class="flex-1 relative hidden md:block"></div> -->
        <div class="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/assets/logo-white.png" alt="logo" class="h-auto w-[450px] md:w-[400px] lg:w-[350px] xl:w-[300px]" @click="handleLogoClick">
        </div>
      </div>
    </transition>

    <div ref="menu" class="w-full flex justify-center mt-10">
      <ul class="flex space-x-12 items-center font">
        <li>
          <a href="#" @click="setCurrentPage('About')" :class="{'text-white scale-125 underline': currentPage === 'About'}" class="block text-white hover:text-white hover:scale-125 hover:underline transition-transform duration-300">ABOUT</a>
        </li>
        <li>
          <a href="#" @click="setCurrentPage('Project')" :class="{'text-white  scale-125 underline': currentPage === 'Project'}" class="block text-white hover:text-white hover:scale-125 hover:underline transition-transform duration-300">PROJECT</a>
        </li>
        <li>
          <a href="#" @click="setCurrentPage('Contact')" :class="{'text-white  scale-125 underline': currentPage === 'Contact'}" class="block text-white hover:text-white hover:scale-125 hover:underline transition-transform duration-300">CONTACT</a>
        </li>
          <!-- <li>
            <a href="#" @click="setCurrentPage('Service')" :class="{'text-gray-900 scale-125 underline': currentPage === 'Service'}" class="block text-gray-700 hover:text-gray-900 hover:scale-125 hover:underline transition-transform duration-300">GAME</a>
          </li> -->
      </ul>
    </div>

    <transition name="fade" mode="default">
      <component :is="currentPageComponent" key="currentPage" class="mt-10" />
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted, nextTick } from 'vue';
import About from './About.vue';
import Project from './Project.vue';
import Service from './Service.vue';
import Contact from './Contact.vue';

export default {
  name: 'AppMainPage',
  components: {
    About,
    Project,
    Service,
    Contact
  },
  setup() {
    const currentPage = ref('About');
    const isExpanded = ref(true);
    const menu = ref(null);
    const logoClickCount = ref(0);

    const currentPageComponent = computed(() => {
      return currentPage.value;
    });

    const divClass = computed(() => {
      return isExpanded.value ? 'h-72' : 'h-72';
    });

    const setCurrentPage = (page) => {
      currentPage.value = page;
      // setTimeout(() => {
      //   nextTick(() => {
      //     if (menu.value) {
      //       menu.value.scrollIntoView({ behavior: 'smooth' });
      //     }
      //   });
      // }, 300);
    };

    const handleLogoClick = () => {
      logoClickCount.value++;
      if (logoClickCount.value >= 10) {
        currentPage.value = 'Service';
        logoClickCount.value = 0; // 重置計數器
      }
    };

    return {
      currentPage,
      currentPageComponent,
      divClass,
      setCurrentPage,
      menu,
      handleLogoClick
    };
  }
};
</script>

<style scoped>
/* .height-transition-enter-active, .height-transition-leave-active {
  transition: height 0.5s ease;
} */
.height-transition-enter-from, .height-transition-leave-to {
  height: 24rem; /* Tailwind CSS class h-96 */
}
.height-transition-enter-to, .height-transition-leave-from {
  height: 18rem; /* Tailwind CSS class h-72 */
}

/* .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
} */

.font {
  font-family: 'Avenir Next LT W01 Bold';
}
</style>