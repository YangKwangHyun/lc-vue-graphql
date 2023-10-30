import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Post from '../views/Post.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;