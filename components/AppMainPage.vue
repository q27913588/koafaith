<template class="z-20"> 
  <div >
    <transition name="height-transition">
      <div :class="divClass" class="flex bg-gray-200 transition-all duration-500 ease-in-out">
        <div ref="logoContainer" class="flex-1 relative"></div>
      </div>
    </transition>
    <component :is="currentPageComponent" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import About from './About.vue';

export default {
  name: 'AppMainPage',
  components: {
    About
  },
  setup() {
    const logoContainer = ref(null);
    const currentPage = ref('About');
    const isExpanded = ref(true);

    const currentPageComponent = computed(() => {
      return currentPage.value;
    });

    const divClass = computed(() => {
      return isExpanded.value ? 'h-96' : 'h-72';
    });

    onMounted(() => {
      if (!logoContainer.value) {
        console.error('logoContainer ref is not defined');
        return;
      }

      // 初始化 Three.js 場景
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio); // 設置像素比率
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // 確保背景透明
      logoContainer.value.appendChild(renderer.domElement);

      camera.position.z = 120;
      camera.position.y = -50;

      // 添加 3D logo
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        '/assets/logo-black.png',
        (logoTexture) => {
          const image = logoTexture.image;
          const width = image.width / 5.5;
          const height = image.height / 5.5;

          const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true });
          const logoGeometry = new THREE.PlaneGeometry(width, height); // 使用圖片的原始尺寸
          const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
          scene.add(logoMesh);

          const onMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            const rotateX = mouseY * 0.1; // 調整旋轉幅度
            const rotateY = mouseX * 0.1; // 調整旋轉幅度

            logoMesh.rotation.x = rotateX;
            logoMesh.rotation.y = rotateY;
          };

          document.addEventListener('mousemove', onMouseMove);

          const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
          };

          window.addEventListener('resize', onResize);

          const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
          };

          animate();

          onBeforeUnmount(() => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
          });
        },
        undefined,
        (error) => {
          console.error('Error loading texture:', error);
        }
      );

      // 延遲觸發高度變化
      setTimeout(() => {
        isExpanded.value = false;
      }, 1000); // 1秒後觸發
    });

    return {
      logoContainer,
      currentPage,
      currentPageComponent,
      divClass
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
</style>