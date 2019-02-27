<template>
  <div class="grid-container">
    <div class="card" v-for="post in posts">
      <div>
        <div class="header">{{post.title}}</div>
        <div class="body">{{post.body}}</div>
        <div class="footer">
          <button @click="aboutUser(post.userId)">User Detail</button>
           <button @click="aboutPost(post.id)">AboutPost</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },

  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.posts = response.data;
    });
  },

  methods:{
    aboutPost(postId) {
      this.$router.push({name: 'about', params: { id: postId }});
    },
    aboutUser(userId) {
      this.$router.push({name: 'user', params: { id: userId }});
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.body{
  background-color: transparent;
  height: 120px;
}

.header{
  height: 40px;
  background-color: lightskyblue;
}

.card {
  border: 1px solid #d3d3d3;
  border-radius: 0.25rem;
}

/* .content {
  padding: 15px;
} */

.footer {
  /* position: fixed; */
  background-color: #d3d3d3;
}

button {
  background-color: transparent;
  border: 1px solid #2196f3;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}
</style>


