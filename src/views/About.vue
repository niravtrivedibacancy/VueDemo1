<template>
  <div class="grid-container">
    <div v-if="!id">
      <b>You not selected any post</b>
    </div>
    <div v-else class="card">
      <b>{{body}}</b>
      <p>{{title}}</p>
      <div v-for="commet in commets">
        <hr>
        <b>{{commet.body}}</b>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      commets: [],
      title: "",
      body: "",
      id: true
    };
  },
  created() {
    if(this.$route.params.id === undefined){
      this.id = false;
    }
    else{
   axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
      .then(response => {
        this.body = response.data.body;
        this.title = response.data.title;
        axios
          .get(
            `https://jsonplaceholder.typicode.com/comments?postId=${
              response.data.id
            }`
          )
          .then(res => {
            this.commets = res.data;
          });
      });
    }
 
  }
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
}

.card {
  border: 1px solid #d3d3d3;
  border-radius: 0.25rem;
}
</style>

