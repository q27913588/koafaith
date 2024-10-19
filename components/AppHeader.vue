<template>
  <header class=" text-white p-4">
    <div class="container mx-auto flex justify-between items-center  mt-4">
      <!-- 左邊區塊 -->
      <div class="flex space-x-6 items-start text-header">
        <div>
          <p class="text-xs">
            WWW.KOAFAITH.TW<br>©KOAFAITH.
          </p>
        </div>
        <div>
          <p class="text-xs">
            WEB + GRAPHIC + CI<br>FRONT AND BACKEND PROGRAMMING
          </p>
        </div>
      </div>
      <!-- 右邊區塊 -->
      <div class="flex items-center space-x-6">
        <!-- 音量控制 -->
        <div>
          <p class="sound text-sm">
            <a href="#" class="text-white">ON</a> /
            <a href="#" class="text-gray-400 on">OFF</a>
          </p>
          <audio preload="auto" loop>
            <source src="https://www.hys-inc.jp/admin/wp-content/themes/hys/assets/sound/sound.mp3" type="audio/mp3">
            <source src="https://www.hys-inc.jp/admin/wp-content/themes/hys/assets/sound/sound.ogg" type="audio/ogg">
          </audio>
        </div>

        <!-- 社交媒體連結 -->
        <ul class="sns flex space-x-4">
          <li>
            <a href="" target="_blank" class="tw text-sm hover:text-gray-400">Twitter</a>
          </li>
          <li>
            <a href="" target="_blank"
              class="fb text-sm hover:text-gray-400">Facebook</a>
          </li>
          <li>
            <a href="" target="_blank" class="tb text-sm hover:text-gray-400">Tumblr</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
.text-header {
  color: #153f76;
  font-family: Avenir Next LT W01 Bold;

}
// .sound a.on {
//   color: $highlight-orange; /* 使用定義的顏色變數 */
// }
</style>
