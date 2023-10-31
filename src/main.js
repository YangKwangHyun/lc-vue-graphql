import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

import { createApolloProvider } from '@vue/apollo-option'
import router from "@/router";

import VueApolloComponents from '@vue/apollo-components'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://lc-laravel-graphql.test/graphql',
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
})

createApp(App).use(router).use(apolloProvider).use(VueApolloComponents).mount('#app')
