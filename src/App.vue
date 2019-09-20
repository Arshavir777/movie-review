<template>
  <v-app id="APP">
    <v-alert 
    type="dark" 
    :value="true">
      <div class="navbar">
        <div class="green--text">ExceptION</div>
        <div>
          <v-btn 
          text 
          small 
          color="info" 
          @click="dialog = !dialog"
          >About</v-btn>
        </div>
      </div>
    </v-alert>
    <v-alert text type="success" class="text-center">
      <strong>Comming Soon.</strong>
    </v-alert>
    <v-container grid-list-sm>
      <div id="textDiv"
        class="blue--text"
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
    </v-container>

    <v-layout justify-center></v-layout>
    <v-dialog v-model="dialog" scrollable max-width="350">
      <v-card>
        <v-card-title class="headline">About ExceptION</v-card-title>

        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    name: "ARSHAVIR",
    dialog: false
  })
};
</script>
<style >
.navbar {
  display: flex;
  justify-content: space-between;
}
#APP{
    background-color: black;
}
@font-face {
  font-family: "Product-Font-Bold";
  src: url("/assets/fonts/Product Sans Bold.ttf");
}
@font-face {
  font-family: "Product-Font-Bold-Italic";
  src: url("/assets/fonts/Product Sans Bold Italic.ttf");
}
@font-face {
  font-family: "Product-Font-Italic";
  src: url("/assets/fonts/Product Sans Italic.ttf");
}
@font-face {
  font-family: "Product-Font-Regular";
  src: url("/assets/fonts/Product Sans Regular.ttf");
}

* {
  font-size: large;
  font-family: Product-Font-Regular;
}
</style>