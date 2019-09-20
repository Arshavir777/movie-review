<template>
  <v-app v-bind:class="{ 'night': true, 'light': !nightMode }" id="APP">
    <v-card v-bind:class="{ 'night': true, 'light': !nightMode }" class="mb-4" :elevation="`10`">
      <div class="navbar">
        <div class="green--text ml-1">
          <strong>EXCEPTION</strong>
        </div>
        <div>
          <v-switch
            v-model.lazy="nightMode"
            color="blue"
            prepend-icon="mdi-brightness-6"
            append-icon="mdi-brightness-4"
          ></v-switch>
        </div>
        <div>
          <v-btn text small color="info" @click="dialog = !dialog">About</v-btn>
        </div>
      </div>
    </v-card>
    <v-container grid-list-md>
      <v-alert border="left" outlined color="blue">
        <div class="title">Lorem Ipsum</div>
        <div>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</div>
      </v-alert>
      <v-container grid-list-sm>
        <v-row>
          <v-col v-for="n in 4" :key="n" md="3">
            <v-card hover="true" elevation="15">
              <v-img src="https://picsum.photos/510/300?random"></v-img>
              <v-card-title>I'm a title</v-card-title>
              <v-card-text>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi...</v-card-text>
               <v-rating 
                v-model="rating" 
                background-color="purple lighten-3" 
                color="purple"
                small >
                </v-rating>
              <v-card-actions>
               
                <v-btn text icon color="pink">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text>Read</v-btn>
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
      <v-dialog v-model="dialog" scrollable max-width="350">
        <v-card>
          <v-card-title class="headline">About EXCEPTION</v-card-title>

          <v-card-text>
            <v-alert outlined color="purple">
              <div class="title">Lorem Ipsum</div>
              <div>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</div>
            </v-alert>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <v-footer dark padless>
      <div class="mr-2">
        <v-icon class="blue--text">mdi-facebook</v-icon>
        <v-icon class="blue--text">mdi-twitter</v-icon>
      </div>
      <div class="flex-grow-1"></div>
      <div class="white--text mr-2">Exception Application | &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    appTitle: "Awesome App",
    rating: 4,
    sidebar: false,
    name: "ARSHAVIR",
    nightMode: true,
    dialog: false
  })
};
</script>
<style >
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.night {
  background-color: #1c2022 !important;
}

.light {
  background-color: azure !important;
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
  font-family: Product-Font-Regular;
  font-size: large;
}
</style>