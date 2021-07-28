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
            alt="sspp-name"
            contain
            min-width="10"
            src="@/assets/other/logo_sspp_white_narrow.png"
            width="90"
          />
        </v-btn>
      </div>
      <v-spacer />
      <template v-if="currentRouteName == '/'">
        <div v-for="(item, index) in items" :key="index">
          <v-btn
            text
            class="hidden-md-and-down text-button"
            elevation="0"
            @click="$vuetify.goTo(item.id)"
            >{{ item.title }}</v-btn
          >
        </div>
      </template>
      <template v-else>
        <div>
          <v-btn
            text
            class="hidden-md-and-down text-button"
            elevation="0"
            :href="mainpage.url"
            >{{ mainpage.title }}</v-btn
          >
        </div>
      </template>
      <div v-for="page in pages" :key="page.title">
        <v-btn
          text
          class="hidden-md-and-down text-button"
          elevation="0"
          :href="page.url"
        >
          {{ page.title }}
        </v-btn>
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
              min-width="10"
              src="@/assets/other/logo_sspp_white_narrow.png"
              width="90"
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
        <v-list-item v-for="page in pages" :key="page.url" :href="page.url">
          <v-list-item-content>
            <v-list-item-title>
              {{ page.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  data() {
    return {
      appTitle: 'Karpicko 2021',
      drawer: false,
      navbarColor: 'primary',
      navbarElevation: 10,
      main: { title: 'Karpicko 2021', id: '#hero' },
      mainpage: { title: 'Strona główna', url: '#/' },
      items: [
        { title: 'Rekrutacja', id: '#invitation' },
        { title: 'Atrakcje', id: '#about' },
        { title: 'Zakwaterowanie', id: '#accommodation' },
        { title: 'Opinie', id: '#opinions' },
        { title: 'Partnerzy', id: '#partners' },
        { title: 'Kontakt', id: '#contact' },
      ],
      pages: [
        { title: 'Kadra', url: '#/kadra' },
        //  { title: 'Regulamin', url: '/rules/Regulamin-Karpicko-2020.pdf' },
      ],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
  methods: {
    changeColor() {
      if (
        this.currentRouteName != '/' ||
        document.body.scrollTop > 85 ||
        document.documentElement.scrollTop > 85
      ) {
        this.navbarColor = 'primary';
        this.navbarElevation = 10;
      } else {
        this.navbarColor = 'transparent';
        this.navbarElevation = 0;
      }
    },
  },
  watch: {
    $route() {
      this.changeColor();
    },
  },
};
</script>

<style scoped></style>
