<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div v-for="(image, index) in images" :key="index" class="relative group max-h-600">
        <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover max-h-600">
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 flex items-center justify-center">
          <span class="text-white text-lg opacity-0 group-hover:opacity-50 transition duration-300">{{ image.text }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Service',
    data() {
      return {
        images: [
          { src: '/assets/project-1.png', alt: 'Image 1', text: 'Image 1' },
          { src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', alt: 'Image 2', text: 'Image 2' },
          { src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', alt: 'Image 3', text: 'Image 3' },
          { src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', alt: 'Image 4', text: 'Image 4' },
          { src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', alt: 'Image 5', text: 'Image 5' },
          { src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', alt: 'Image 6', text: 'Image 6' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .max-h-600 {
    max-height: 600px;
  }
  </style>