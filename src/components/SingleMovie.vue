<template>
  <v-app v-bind:class="{ 'night': theme, 'light': !theme }">
    <v-container grid-list-md>
      <v-alert border="left" outlined color="blue" class="mt-4">
        <div class="title">Lorem Ipsum</div>
        <div >
          imdbID: {{$route.params.id}}
          <br />
          data: {{movie}}
        </div>
      </v-alert>
    </v-container>
  </v-app>
</template>
<script>
const movie = require("node-movie").getByID;

export default {
  name: "SingleMovie",
  data: () => ({
    movie: ""
  }),
  props: {
    theme: Boolean
  },
  mounted() {
    this.getSingleMovie();
  },
  methods: {
    getSingleMovie() {
      movie(this.$route.params.id, data => {
        this.movie = data;
        console.log(data);
      });
    }
  }
};
</script>