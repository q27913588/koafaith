<template>
    <div ref="gameContainer" class="w-full h-screen relative">
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div v-for="(direction, index) in directions" :key="index" :class="['w-16 h-16 flex items-center justify-center text-2xl', { 'bg-yellow-500': activeKey === direction, 'bg-gray-700 text-white': activeKey !== direction }]">
          {{ direction }}
        </div>
      </div>
      <div ref="line" class="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-black to-gray-500"></div>
      <div class="absolute top-4 left-1/2 transform -translate-x-1/2 text-black text-3xl">Score: {{ score }}</div>
      <div v-if="gameOver" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-4xl">
        Game Over
        <button @click="restartGame" class="ml-4 px-4 py-2 bg-white text-black rounded">Restart</button>
      </div>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
  
  export default {
    name: 'Service',
    setup() {
      const gameContainer = ref(null);
      const directions = ref(['K', 'O', 'A', 'F']);
      const score = ref(0);
      const activeKey = ref(null);
      const gameOver = ref(false);
      const missedCount = ref(0);
      let scene, camera, renderer, fallingObjects, clock, font, particles, line, speed;
  
      const initThreeJS = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        gameContainer.value.appendChild(renderer.domElement);
  
        camera.position.z = 5;
  
        fallingObjects = [];
        particles = [];
        clock = new THREE.Clock();
        speed = 2;
  
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
          font = loadedFont;
          animate();
        });
  
        // Create 3D line
        const lineGeometry = new THREE.BoxGeometry(10, 0.1, 0.1);
        const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
        line = new THREE.Mesh(lineGeometry, lineMaterial);
        line.position.y = 0;
        scene.add(line);
      };
  
      const createFallingObject = () => {
        const direction = directions.value[Math.floor(Math.random() * directions.value.length)];
        const textGeometry = new TextGeometry(direction, {
          font: font,
          size: 0.5,
          depth: 0.2,
        });
        const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
        const textMesh = new THREE.Mesh(textGeometry, material);
  
        textMesh.position.x = (Math.random() - 0.5) * 4;
        textMesh.position.y = 5;
        textMesh.direction = direction;
  
        fallingObjects.push(textMesh);
        scene.add(textMesh);
      };
  
      const createParticles = (position) => {
        const particleCount = 100;
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
  
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = position.x + (Math.random() - 0.5) * 0.5;
          positions[i * 3 + 1] = position.y + (Math.random() - 0.5) * 0.5;
          positions[i * 3 + 2] = position.z + (Math.random() - 0.5) * 0.5;
        }
  
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  
        particles.push(particleSystem);
        scene.add(particleSystem);
  
        setTimeout(() => {
          scene.remove(particleSystem);
          particles.splice(particles.indexOf(particleSystem), 1);
        }, 1000);
      };
  
      const animate = () => {
        if (gameOver.value) return;
  
        requestAnimationFrame(animate);
  
        const delta = clock.getDelta();
  
        fallingObjects.forEach((obj, index) => {
          obj.position.y -= delta * speed;
  
          if (obj.position.y < -5) {
            scene.remove(obj);
            fallingObjects.splice(index, 1);
            missedCount.value++;
            if (missedCount.value >= 5) {
              gameOver.value = true;
            }
          }
        });
  
        particles.forEach((particleSystem) => {
          particleSystem.geometry.attributes.position.array.forEach((_, i) => {
            particleSystem.geometry.attributes.position.array[i * 3 + 1] -= delta * speed;
          });
          particleSystem.geometry.attributes.position.needsUpdate = true;
        });
  
        renderer.render(scene, camera);
      };
  
      const handleKeyPress = (event) => {
        if (gameOver.value) return;
  
        console.log('Key pressed:', event.key);
  
        const keyMap = {
          KeyK: 'K',
          KeyI: 'O',
          KeyA: 'A',
          KeyF: 'F',
          k: 'k',
          o: 'O',
          a: 'A',
          f: 'F',
        };
  
        const direction = keyMap[event.key];
        console.log('Mapped direction:', direction);
        if (!direction) return;
  
        activeKey.value = direction;
  
        fallingObjects.forEach((obj, index) => {
          console.log('Checking object:', obj.direction, obj.position.y);
          if (obj.position.y < 0.25 && obj.position.y > -0.25 && obj.direction === direction) {
            console.log('Object hit:', obj.direction);
            createParticles(obj.position);
            scene.remove(obj);
            fallingObjects.splice(index, 1);
            score.value++;
            speed += 0.1; // 增加掉落速度
          }
        });
  
        nextTick(() => {
          activeKey.value = null;
        });
      };
  
      const restartGame = () => {
        gameOver.value = false;
        score.value = 0;
        missedCount.value = 0;
        speed = 2;
        fallingObjects.forEach((obj) => scene.remove(obj));
        fallingObjects = [];
      };
  
      onMounted(() => {
        initThreeJS();
        window.addEventListener('keydown', handleKeyPress);
        setInterval(createFallingObject, 1000);
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('keydown', handleKeyPress);
      });
  
      return {
        gameContainer,
        directions,
        score,
        activeKey,
        gameOver,
        restartGame,
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    overflow: hidden;
  }
  </style>