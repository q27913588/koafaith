<template>
    <div class="container mx-auto p-4 text-project mt-10">
      <div class="p-6 text-center">
        <h2 class="text-5xl mb-2 text-white">PROJECT</h2>
      </div>
    </div>
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div v-for="(image, index) in images" :key="index" class="relative group h-96">
        <transition name="fade">
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover">
        </transition>
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 flex flex-col items-center justify-center p-4">
          <h3 class="text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300">{{ image.title }}</h3>
          <p class="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition duration-300">{{ image.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Project',
    data() {
      return {
        images: [
          { 
            src: '/assets/project-1.png', 
            alt: 'Image 1', 
            title: '台北開源城市通APP', 
            description: '台北市推出的開源平台，讓市民參與市政應用的開發與優化。' 
          },
          { 
            src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', 
            alt: 'Image 2', 
            title: '台北秋季程式節黑客松比賽', 
            description: '台北秋季程式節，鼓勵開發者們參與城市解決方案的黑客松比賽。' 
          },
          { 
            src: '/assets/project-2.png', 
            alt: 'Image 3', 
            title: '台北孕婦乘車專案', 
            description: '為孕婦提供的便捷乘車服務，讓出行更加安全舒適。' 
          },
          { 
            src: '/assets/project-3.png', 
            alt: 'Image 4', 
            title: '創新創業推廣中心官方網頁開發專案', 
            description: '創新創業推廣中心網站，展示最新的創新與創業資訊。' 
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .text-project {
    font-family: 'Avenir Next LT W01 Bold';
  }
/*   
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  } */
  
  .group-hover h3 {
    transition: opacity 0.25s ease;
  }
  
  .group-hover p {
    transition: opacity 0.25s ease;
  }
  </style>
  