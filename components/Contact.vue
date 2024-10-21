<template>
            <transition name="fade">
    <div class="container mx-auto p-4 text-contact">
      <div class="p-6 text-center">
        <h1 class="text-4xl font-bold mb-6">CONTACT</h1>
        <div class="contact-info  p-6 ">
          <div class="contact-item mb-4">
            <h2 class="text-2xl font-semibold">電話</h2>
            <p class="text-lg">+886-2-1234-5678</p>
          </div>
          <div class="contact-item mb-4">
            <h2 class="text-2xl font-semibold">公司地址</h2>
            <p class="text-lg">台北市信義區信義路五段7號</p>
          </div>
          <div class="contact-item mb-4">
            <h2 class="text-2xl font-semibold">電子郵件</h2>
            <p class="text-lg">info@company.com</p>
          </div>
          <div class="contact-item">
            <h2 class="text-2xl font-semibold">營業時間</h2>
            <p class="text-lg">週一至週五：09:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
</transition>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        // Add your component data here
      };
    },
    methods: {
      // Add your component methods here
    },
    computed: {
      // Add your computed properties here
    },
  };
  </script>
  
  <style scoped>
  .text-contact {
    font-family: 'Avenir Next LT W01 Bold';
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

  </style>