<template>
  <div class="container mx-auto p-4 text-about ">
    <div class="bg-white p-6 text-center">

      <h2 class="text-5xl mb-2">ABOUT</h2>
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '歡迎來到我們的公司！',
      description: '這是一個關於我們公司的基本介紹。'
    };
  }
};
</script>

<style scoped>
@import '~/assets/css/main.scss';
.text-about {
  color: #153f76;
  font-family: Avenir Next LT W01 Bold;
}

</style>