<template>

    <div class="container mx-auto p-4 text-project mt-10 ">
        <div class=" p-6 text-center">
            <h2 class="text-5xl mb-2">PROJECT</h2>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div v-for="(image, index) in images" :key="index" class="relative group">
            <transition name="fade">
            <img :src="image.src" :alt="image.alt"
                class="w-full h-full object-cover max-h-96 md:max-h-450px lg:max-h-600px">
            </transition>
            <div
                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 flex items-center justify-center">
                <span class="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">{{ image.text
                    }}</span>
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
                { src: 'https://trendy.taipei/wp-content/uploads/2024/06/Taipei-Codefest2024.jpg', alt: 'Image 1', text: 'Image 1' },
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
.text-project {
    font-family: Avenir Next LT W01 Bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>