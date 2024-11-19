<template>
  <header class="p-4 pb-10" >
    <div class="container mx-auto flex justify-between items-center  mt-4">
      <!-- 左邊區塊 -->
      <div class="flex space-x-6 items-start text-header">
        <div>
          <p class="text-xs">
            WWW.KOAFAITH.TW<br>©KOAFAITH.
          </p>
        </div>
        <div class="hidden md:block">
          <p class="text-xs">
            WEB + GRAPHIC + CI<br>FRONT AND BACKEND PROGRAMMING
          </p>
        </div>
      </div>
      <!-- 右邊區塊 -->
      <div class="flex items-center space-x-6">
        <!-- 音量控制 -->
        <div>
          
          <audio preload="auto" loop>
          </audio>
        </div>

        <!-- 社交媒體連結 -->
        <!-- <ul class="sns flex space-x-4">
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
        </ul> -->
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
  
  font-family: Avenir Next LT W01 Bold;

}
.bg{
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
}
// .sound a.on {
//   color: $highlight-orange; /* 使用定義的顏色變數 */
// }
</style>
