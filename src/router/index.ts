import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/Main.vue';
import CompanyBoard from '@/page/CompanyBoard/CompanyBoard.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/companyboard', component: CompanyBoard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;