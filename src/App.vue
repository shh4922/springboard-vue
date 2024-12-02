<template>
  <div id="app">
    <Header/>
    <MainLayout/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MainLayout from "@/components/MainLayout.vue";

@Options({
  components: {
    MainLayout,
    Header,Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
/* 전역 스타일 */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Flex 컨테이너 설정 */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 뷰포트 전체를 차지 */
}

/* Header 스타일 */
header {
  background-color: #f4f4f4;
  flex: 0 0 5%; /* 고정 높이, 유연하지 않음 */
}

/* Main 영역 */
main {

  flex: 1; /* 남은 공간 모두 차지 */
  display: flex;
}

/* Footer 스타일 */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  flex: 0 0 5%; /* 고정 높이 */
}

/* 공통 링크 스타일 */
a {
  text-decoration: none;
}
</style>