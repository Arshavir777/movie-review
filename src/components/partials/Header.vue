<template>
  <div>
    <v-toolbar
      fixed="true"
      src="https://www.ubackground.com/_ph/22/443371895.jpg"
      dark
      :elevation="`10`"
    >
      <v-toolbar-title>
        <div id="logo-div">
          <div>
            <strong>Movie</strong>
            <span>Review</span>
          </div>
        </div>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      v-bind:class="{ 'night': nightMode, 'light': !nightMode }"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>
              <v-img height="100%" width="80px" :src="logo"></v-img>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <div>
              <v-switch
                @change="changeTheme()"
                v-model.lazy="nightMode"
                color="blue"
                prepend-icon="mdi-brightness-6"
                append-icon="mdi-brightness-4"
              ></v-switch>
            </div>
          </v-list-item>
          <v-list-item>
            <v-btn text small color="info" @click="dialog = !dialog">About</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>

       <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>

    </v-navigation-drawer>
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
    drawer: false,
    group: null,
    name: "ARSHAVIR",
    nightMode: true,
    dialog: false,
    logo: require("../../../assets/images/bird-logo.png")
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.nightMode);
    }
  }
};
</script>
<style>
#logo-div {
  display: flex;
  align-items: flex-end;
}
#logo-div strong {
  margin-bottom: auto;
  font-size: xx-large;
  color: white;
  font-variant: small-caps;
}
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