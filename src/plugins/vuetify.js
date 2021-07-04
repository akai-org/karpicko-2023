import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#830628",
        secondary: "#821590",
        anchor: "#000000"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
