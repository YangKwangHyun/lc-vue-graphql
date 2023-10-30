<template>
  <div>
    <h1>This is the post page for id: {{ $route.params.id }}</h1>

    <div>
      <div v-if="$apollo.queries.post.loading">Loading...</div>
      <div v-else>
        <div v-if="post">
          <h2>{{ post.title }}</h2>
          <div>
            {{ post.body }}
          </div>
        </div>
        <div v-else>
          <h2>No Post was found</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Post',
  apollo: {
    // Simple query that will update the 'hello' vue property
    post: {
      query: gql`
        query getPost($id: ID!) {
          post(id: $id){
            title
            body
          }
        }
    `,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  },
}
</script>