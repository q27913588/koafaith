<template>
    <div class="app-main-page">
        <div ref="logoContainer" class="logo-container"></div>
    </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';

export default {
    name: 'AppMainPage',
    setup() {
        const logoContainer = ref(null);

        onMounted(() => {
            if (!logoContainer.value) {
                console.error('logoContainer ref is not defined');
                return;
            }

            // 初始化 Three.js 場景
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0); // 確保背景透明
            logoContainer.value.appendChild(renderer.domElement);

            camera.position.z = 120;

            // 添加 3D logo
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(
                './assets/static/image/logo-black.png',
                (logoTexture) => {
                    const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true });
                    const logoGeometry = new THREE.PlaneGeometry(20, 20);
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
        });

        return {
            logoContainer
        };
    }
};
</script>

<style scoped>
.app-main-page {
    height: 450px;
    position: relative; /* 確保子元素可以使用絕對定位 */
}

.logo-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10; /* 確保 logo 在其他元素之上 */
}
</style>