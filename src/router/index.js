import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Post from '../views/Post.vue';
import Create from '../views/Create.vue';
import Update from "@/views/Update.vue";

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
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/post/:id/edit',
        name: 'Update',
        component: Update
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
