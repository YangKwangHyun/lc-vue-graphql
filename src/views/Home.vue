<template>
  <div class="home">
    <div>
      <div v-if="$apollo.queries.posts.loading">Loading...</div>
      <ul v-else>
        <li v-for="post in posts.data" :key="post.id">
          <!-- post.id로 /post/:id 페이지 링크 -->
          <router-link :to="`/post/${post.id}`">
            {{ post.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Home',
  apollo: {
    // Simple query that will update the 'hello' vue property
    posts: gql`
      query {
        posts {
          data {
           id
           title
           body
          }
        }
      }
    `,
  },
}
</script>