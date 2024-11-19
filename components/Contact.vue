<template>
  <transition name="fade">
    <div class="container mx-auto p-4 text-contact">
      <div class="p-6 text-center">
        
        <p class="mb-6 text-lg font-medium text-gray-700 max-w-2xl mx-auto">
          我們致力於提供最佳解決方案，以滿足您的業務需求。無論是技術諮詢、專案合作，還是產品與服務的詳細資訊，我們的團隊隨時為您提供專業且客製化的支援。請隨時與我們聯繫，以獲取更多資訊並開啟雙方合作的契機。
        </p>
      
        <div class="contact-info p-6">
          <div class="contact-item flex justify-center items-center">
            


            <div class="w-full max-w-xl">
              

              <form action="https://formspree.io/f/xqakbagv" method="POST" class="p-6 rounded-lg">
                <div class="mb-4 flex items-center">
                  <label for="email" class="block text-lg font-medium text-gray-700 w-1/3 text-left">您的電子郵件</label>
                  <input type="email" id="email" name="email" class="p-2 w-2/3 border border-gray-300 rounded-md bg-opacity-50" required>
                </div>
                <div class="mb-4 flex items-center">
                  <label for="message" class="block text-lg font-medium text-gray-700 w-1/3 text-left">留言訊息</label>
                  <textarea id="message" name="message" rows="4" class="p-2 w-2/3 border border-gray-300 rounded-md bg-opacity-50" required></textarea>
                </div>
                <button type="submit" class="mt-5 px-6 py-2 border-2 border-gray-500 text-gray-500 text-lg font-bold rounded hover:bg-orange-500 hover:text-white min-w-60">送出</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // 處理表單提交邏輯
      console.log('Email:', this.form.email);
      console.log('Message:', this.form.message);
      // 清空表單
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.text-contact {
  font-family: 'Avenir Next LT W01 Bold';
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
form {
  background-color: transparent;
}
input, textarea {
  background-color: rgba(255, 255, 255, 0.8); /* 設置透明度為 50% */
}
button {
  background-color: transparent;
}
</style>
