<template>
  <div class="three-page">
    <div ref="threeContainer" class="three-container"></div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';

export default {
  name: 'ThreePage',
  setup() {
    const threeContainer = ref(null);

    onMounted(() => {
      if (!threeContainer.value) {
        console.error('threeContainer ref is not defined');
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      threeContainer.value.appendChild(renderer.domElement);

      camera.position.z = 80;

      function createCircleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 30;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
      }

      const geometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);

      const radius = 40;
      for (let i = 0; i < particlesCount; i++) {
        const u = Math.random() * 2 * Math.PI;
        const v = (Math.random() - 0.5) * 2;

        const x = (1 + (v / 2) * Math.cos(u / 2)) * Math.cos(u) * radius;
        const y = (1 + (v / 2) * Math.cos(u / 2)) * Math.sin(u) * radius;
        const z = (v / 2) * Math.sin(u / 2) * radius;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const colorFactor = (v + 1) / 2;
        const black = { r: 0, g: 0, b: 0 };
        const gray = { r: 0.5, g: 0.5, b: 0.5 };

        colors[i * 3] = black.r * (1 - colorFactor) + gray.r * colorFactor;
        colors[i * 3 + 1] = black.g * (1 - colorFactor) + gray.g * colorFactor;
        colors[i * 3 + 2] = black.b * (1 - colorFactor) + gray.b * colorFactor;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.1,
        map: createCircleTexture(),
        transparent: true,
        alphaTest: 0.5,
        opacity: 0.8,
        vertexColors: true
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const rotationSpeedX = 0.001; // 固定的旋轉速度
      const rotationSpeedY = 0.001; // 固定的旋轉速度

      const animate = () => {
        requestAnimationFrame(animate);

        particles.rotation.x += rotationSpeedX;
        particles.rotation.y += rotationSpeedY;

        renderer.render(scene, camera);
      };

      animate();

      onBeforeUnmount(() => {
        window.removeEventListener('resize', onResize);
      });

      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', onResize);
    });

    return {
      threeContainer
    };
  }
};
</script>

<style scoped>
.three-page {
  position: fixed;
  top: 100px; /* 固定在距離視窗頂部 100px 的位置 */
  left: 0;
  width: 100%;
  height: calc(100% - 100px); /* 減去 top 的 100px */
  z-index: 2;
  pointer-events: none;
  background-color: transparent;
}


</style>