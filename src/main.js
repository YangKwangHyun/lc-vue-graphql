import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

import { createApolloProvider } from '@vue/apollo-option'
import router from "@/router";

import VueApolloComponents from '@vue/apollo-components'

function getHeaders() {
    const headers = {}
    const token = localStorage.getItem('apollo-token')
    if(token){
        headers.authorization = `Bearer ${token}`
    }

    return headers
}

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://lc-laravel-graphql.test/graphql',
    headers: getHeaders(),
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
    defaultOptions: {
        $query: {
            fetchPolicy: 'cache-and-network',
        },
    }
})

createApp(App).use(router).use(apolloProvider).use(VueApolloComponents).mount('#app')
