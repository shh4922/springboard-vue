import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';

import Home from "@/page/Home/Home.vue";
import Board from "@/page/Board/Board.vue";
import CreateBoardPost from "@/page/Board/CreateBoardPost.vue";
import LoginPage from "@/page/Login/LoginPage.vue";
const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: Home},
            { path: '/loginPage', component: LoginPage },
            { path: '/board', component: Board },
            { path: '/create-post', component: CreateBoardPost }
        ]
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;