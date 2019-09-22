<template>
  <v-app>
    <Header v-on:changeTheme="changeTheme"></Header>
    <router-view v-bind:theme="themeMode"></router-view>
    <Footer></Footer>
  </v-app>
</template>
<script>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";

export default {
  data: () => ({
    themeMode: true
  }),
  components: {
    Header,
    Footer
  },
  methods: {
    changeTheme(mode) {
      this.themeMode = mode;
    }
  }
};
</script>
<style>
</style>