<template>
  <div class="relative">
    
    <transition name="height-transition">
      <div :class="divClass" class="flex transition-all duration-500 ease-in-out ">
        <!-- <div ref="logoContainer" class="flex-1 relative hidden md:block"></div> -->
        <div class=" absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/assets/logo-black.png" alt="Your Image" class="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        </div>

      </div>
      
    </transition>

    <div class="w-full flex justify-center mt-10">
      <ul class="flex space-x-12 items-center font">
        <li>
          <a href="#" @click="setCurrentPage('About')" :class="{'text-gray-900 scale-125 underline': currentPage === 'About'}" class="block text-gray-700 hover:text-gray-900 hover:scale-125 hover:underline transition-transform duration-300">ABOUT</a>
        </li>
        <li>
          <a href="#" @click="setCurrentPage('Project')" :class="{'text-gray-900 scale-125 underline': currentPage === 'Project'}" class="block text-gray-700 hover:text-gray-900 hover:scale-125 hover:underline transition-transform duration-300">PROJECT</a>
        </li>
        <li>
          <a href="#" @click="setCurrentPage('Service')" :class="{'text-gray-900 scale-125 underline': currentPage === 'Service'}" class="block text-gray-700 hover:text-gray-900 hover:scale-125 hover:underline transition-transform duration-300">SERVICE</a>
        </li>
        <li>
          <a href="#" @click="setCurrentPage('Contact')" :class="{'text-gray-900 scale-125 underline': currentPage === 'Contact'}" class="block text-gray-700 hover:text-gray-900 hover:scale-125 hover:underline transition-transform duration-300">CONTACT</a>
        </li>
      </ul>

    </div>

    <component class="mt-10" :is="currentPageComponent" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
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

    const currentPageComponent = computed(() => {
      return currentPage.value;
    });

    const divClass = computed(() => {
      return isExpanded.value ? 'h-96' : 'h-72';
    });

    const setCurrentPage = (page) => {
      currentPage.value = page;
    };

    
    return {
      currentPage,
      currentPageComponent,
      divClass,
      setCurrentPage
    };
  }
};
</script>

<style scoped>
.height-transition-enter-active, .height-transition-leave-active {
  transition: height 0.5s ease;
}
.height-transition-enter-from, .height-transition-leave-to {
  height: 24rem; /* Tailwind CSS class h-96 */
}
.height-transition-enter-to, .height-transition-leave-from {
  height: 18rem; /* Tailwind CSS class h-72 */
}

.font {
  font-family: 'Avenir Next LT W01 Bold';
}
</style>