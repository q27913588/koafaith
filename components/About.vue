<template>
  <div class="container mx-auto p-4 text-about">
    <div class="p-6 text-center">
      <h2 class="text-5xl mb-2">ABOUT</h2>
      <div class="text-body p-5 max-w-4xl mx-auto text-left">
        <p class="tracking-wide" v-html="typedText"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullText: `
        隨著全球數位化的快速推進，企業對雲端技術和開放原始碼解決方案的需求越來越大。熊有誠足股份有限公司作為雲端技術領域的先驅，致力於為各行各業提供靈活、高效且具備前瞻性的解決方案。我們的使命不僅是幫助企業從傳統架構平滑過渡到雲端，還致力於提供一個開放、可持續發展的技術生態系。
        <br><br>
        我們相信，技術的力量應該被用來促進全球協作和知識共享。通過整合開放原始碼技術和強大的雲端基礎設施，我們提供可擴展性強、靈活且經濟高效的雲端解決方案，幫助企業在當前競爭激烈的市場環境中脫穎而出。我們的服務涵蓋雲端架構設計、資料遷移、DevOps 自動化以及安全合規等多個方面，力求為每一位客戶量身打造最合適的解決方案。
        <br><br>
        我們的團隊由來自各個領域的專家組成，他們擁有豐富的技術經驗，並對雲端技術充滿熱情。我們秉承著“追求卓越”的理念，不斷推動技術創新，並以開放原始碼為核心，強調合作、透明和可持續發展。我們深信，通過創新技術與最佳實踐相結合，我們能夠幫助企業更高效地應對未來挑戰，實現長遠發展。
        <br><br>
        熊有誠足股份有限公司將繼續秉持著“開放、靈活、創新”的核心價值，成為企業數位轉型和技術創新的長期合作夥伴。我們期待與您攜手合作，共創更加智能、高效的未來！
      `,
      typedText: '',
      typingIndex: 0,
      typingSpeed: 1 // 打字速度（毫秒）
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const interval = setInterval(() => {
        if (this.typingIndex < this.fullText.length) {
          this.typedText += this.fullText[this.typingIndex];
          this.typingIndex++;
        } else {
          clearInterval(interval);
        }
      }, this.typingSpeed);
    }
  }
};
</script>

<style scoped>
@import '~/assets/css/main.scss';
.text-about {
  font-family: Avenir Next LT W01 Bold;
}
.text-body {
  font-family: Avenir Next LT W01 Demi;
  line-height: 2.0;
  font-size: 18px;
}
</style>