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
      const particlesCount = 8000;
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);
      const targetPositions = new Float32Array(particlesCount * 3);

      const radius = 40;
      for (let i = 0; i < particlesCount; i++) {
        // 初始位置在外部隨機位置
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

        // 目標位置在球體上
        const u = Math.random() * 2 * Math.PI;
        const v = (Math.random() - 0.5) * 2;

        const x = (1 + (v / 2) * Math.cos(u / 2)) * Math.cos(u) * radius;
        const y = (1 + (v / 2) * Math.cos(u / 2)) * Math.sin(u) * radius;
        const z = (v / 2) * Math.sin(u / 2) * radius;
        targetPositions[i * 3] = x;
        targetPositions[i * 3 + 1] = y;
        targetPositions[i * 3 + 2] = z;

        const colorFactor = (v + 1) / 2;
        const black = { r: 1, g: 1, b: 1 };
        const gray = { r: 1, g: 1, b: 1 };

        colors[i * 3] = black.r * (1 - colorFactor) + gray.r * colorFactor;
        colors[i * 3 + 1] = black.g * (1 - colorFactor) + gray.g * colorFactor;
        colors[i * 3 + 2] = black.b * (1 - colorFactor) + gray.b * colorFactor;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('targetPosition', new THREE.BufferAttribute(targetPositions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.2,
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

        // 更新位置
        const positions = geometry.attributes.position.array;
        const targetPositions = geometry.attributes.targetPosition.array;
        for (let i = 0; i < positions.length; i++) {
          positions[i] += (targetPositions[i] - positions[i]) * 0.02; // 緩動效果
        }
        geometry.attributes.position.needsUpdate = true;

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
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background-color: transparent;
}

.three-container {
  width: 100%;
  height: 100%;
}
</style>