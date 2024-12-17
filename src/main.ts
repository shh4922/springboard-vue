import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import {createPinia} from "pinia";

const app = createApp(App);

/**
 * 전역적으로 사용할 라이브러리 정의
 */
app.use(router);
app.use(createPinia);
app.mount('#app')
