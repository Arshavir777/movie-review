<template>
  <div v-bind:class="{ 'night': theme, 'light': !theme }">
    <v-container grid-list-sm>
      <v-alert border="left" outlined color="blue" class="mt-4">
        <div class="title">Lorem Ipsum</div>
        <div>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</div>
      </v-alert>

      <v-row>
        <v-col v-for="n in movies" :key="n.imdbID" md="4">
          <v-card
            elevation="15"
            height="100%"
            :light="theme"
            :dark="theme"
            v-bind:class="{ 'night': theme, 'light': !theme }"
          >
            <v-card-text class="mx-0">
              <v-img aspect-ratio="2" position="end" contain :src="n.Poster"></v-img>
            </v-card-text>

            <v-card-title>{{n.Title}}</v-card-title>
            <v-card-text>{{n.Plot}}</v-card-text>
            <v-card-text>
              <strong>IMDB</strong>
              <span class="grey--text text--lighten-2 caption mr-2">({{ n.imdbRating }})</span>
              <v-rating
                :length="`10`"
                :v-model="`7`"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
              ></v-rating>
            </v-card-text>

            <v-card-actions>
              <v-btn text icon color="pink">
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="openSingleMovie(n.imdbID)" text>Read</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div
        id="textDiv"
        class="blue--text"
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
    </v-container>

    <v-layout justify-center></v-layout>
  </div>
</template>
<script>
import axios from "axios";
import movie from "node-movie";

export default {
  name: "Home",
  data: () => ({
    movies: [],
    tops: ["fury", "avengers", "spider man 3", "avatar", "batman", "inception"],
    appTitle: "Awesome App",
    rating: 4
  }),
  props: {
    theme: Boolean
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.tops.forEach(elem => {
        movie(elem, data => {
          this.movies.push(data);
        });
      });
    },
    openSingleMovie(imdbID) {
      this.$router.push("/single-movie/" + imdbID );
    }
  }
};
</script>
<style >
</style>