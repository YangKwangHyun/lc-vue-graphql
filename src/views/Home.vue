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

      <div v-if="posts">
        <div>{{ posts.paginatorInfo.total }} total results</div>
        <div>Page {{ posts.paginatorInfo.currentPage }} of {{ posts.paginatorInfo.lastPage }}</div>
        <div>
          <router-link :to="`/?page=${posts.paginatorInfo.currentPage - 1}`" v-if="posts.paginatorInfo.currentPage != 1">
            Prev
          </router-link>
          &nbsp;
          <router-link :to="`/?page=${posts.paginatorInfo.currentPage + 1}`" v-if="posts.paginatorInfo.hasMorePages">
            Next
          </router-link>
        </div>

      </div>
    </div>

    <div>
      <h2>Apollo Query Component</h2>
      <ApolloQuery
          :query="gql => gql`
            query {
              posts {
                data {
                 id
                 title
                }
              }
            }
          `"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
            <ul>
              <li v-for="post in data.posts.data" :key="post.id">
                <!-- post.id로 /post/:id 페이지 링크 -->
                <router-link :to="`/post/${post.id}`">
                  {{ post.title }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Home',
  apollo: {
    // Simple query that will update the 'hello' vue property
    posts: {
      query: gql`
        query getPosts($page: Int!) {
          posts(page: $page){
            paginatorInfo{
              currentPage
              lastPage
              total
              hasMorePages
            }
            data {
              id
              title
            }
          }
        }
      `,
      variables() {
        return {
          page: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
        }
      }
    },
  },
}
</script>