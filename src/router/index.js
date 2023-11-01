import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Post from '../views/Post.vue';
import Create from '../views/Create.vue';
import Update from "@/views/Update.vue";
import Login from "@/views/Login.vue";
import Me from "@/views/Me.vue";
import Register from "@/views/Register.vue";

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
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/me',
        name: 'Me',
        component: Me
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
