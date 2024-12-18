import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from "@/stores/store"
const app = createApp(App);

/**
 * 전역적으로 사용할 라이브러리 정의
 */
app.use(router);
app.use(store)
app.mount('#app')
