import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import firebase from 'firebase/app';
import 'firebase/analytics';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyDOI5zPxByqgKTt4BgzhpH2ALnlp5-ywI0',
  authDomain: 'karpicko2021.firebaseapp.com',
  projectId: 'karpicko2021',
  storageBucket: 'karpicko2021.appspot.com',
  messagingSenderId: '337236181649',
  appId: '1:337236181649:web:b71c930359d6d52ced7530',
  measurementId: 'G-FN72CDV7NS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.use(VueMeta);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
