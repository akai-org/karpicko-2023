<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
    <custom-footer />
  </v-app>
</template>

<style></style>
<script>
import Navbar from '@/components/Navbar';
import CustomFooter from './components/CustomFooter.vue';
export default {
  components: { CustomFooter, Navbar },
};
</script>
