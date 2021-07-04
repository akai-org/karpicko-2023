<template>
  <span>
    <v-app-bar app :color="navbarColor" dark flat :elevation="navbarElevation">
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class=" hidden-lg-and-up"></v-spacer>
      <div class="d-flex align-center">
        <v-btn
          text
          block
          x-large
          href="#/"
          @click="() => $vuetify.goTo(main.id)"
        >
          <v-img
            alt="fut-name"
            contain
            min-width="100"
            src="@/assets/other/FUT_white.png"
            width="200"
          />
        </v-btn>
      </div>
      <v-spacer />
      <div v-for="(item, index) in items" :key="index">
        <v-btn
          text
          class="hidden-md-and-down text-button"
          elevation="0"
          @click="$vuetify.goTo(item.id)"
          >{{ item.title }}</v-btn
        >
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="primary"
      dark
      disable-resize-watcher
    >
      <v-list>
        <v-list-item @click="$vuetify.goTo(main.id)">
          <div class="d-flex align-center">
            <v-img
              alt="Fut-name"
              contain
              min-width="100"
              src="@/assets/other/FUT_white.png"
              width="200"
            />
          </div>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="$vuetify.goTo(item.id)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "FUT Poznan",
      drawer: false,
      navbarColor: "transparent",
      navbarElevation: 0,
      main: { title: "FUT Poznan", id: "#hero" },
      items: [
        { title: "Zaproszenie", id: "#invitation" },
        { title: "Rejestracja", id: "#registration" },
        { title: "O nas", id: "#about" },
        { title: "Harmonogram", id: "#agenda" },
        { title: "Zakwaterowanie", id: "#accommodation" },
        { title: "Kontakt", id: "#contact" },
        { title: "Partnerzy", id: "#partners" }
      ]
    };
  },
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 85 ||
        document.documentElement.scrollTop > 85
      ) {
        this.navbarColor = "primary";
        this.navbarElevation = 10;
      } else {
        this.navbarColor = "transparent";
        this.navbarElevation = 0;
      }
    }
  }
};
</script>

<style scoped></style>
