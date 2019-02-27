<template>
  <div class="grid-container">
    <div class="card">
      <b>{{user.name}}</b>
      <p>{{user.email}}</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {}
    
    };
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users`
      )
      .then(response => {
        this.user = response.data.find(x => x.id === this.$route.params.id);
      });
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

