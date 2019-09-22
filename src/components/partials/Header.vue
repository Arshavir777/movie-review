<template>
  <div>
    <v-card v-bind:class="{ 'night': nightMode, 'light': !nightMode }" :elevation="`10`">
      <div class="navbar">
        <div class="ml-1">
          <v-btn outlined color="success" to="/home" text>MOVIE *_*</v-btn>
        </div>
        <div>
          <v-switch
            
            @change="changeTheme()"
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
    <!-- Abou Dialog -->
    <v-dialog v-model="dialog" scrollable max-width="350">
      <v-card>
        <v-card-title class="headline">About EXCEPTION</v-card-title>

        <v-card-text>
          <v-alert outlined color="blue">
            <div class="title">Lorem Ipsum</div>
            <div>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</div>
          </v-alert>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: () => ({
    sidebar: false,
    name: "ARSHAVIR",
    nightMode: true,
    dialog: false
  }),
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.nightMode);
    }
  }
};
</script>
<style>
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
  font-family: "Product-Font-Regular";
  src: url("../../../assets/fonts/Product Sans Regular.ttf");
}

* {
  font-family: Product-Font-Regular;
  font-size: large;
}
</style>