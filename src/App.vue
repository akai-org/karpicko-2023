<template>
  <v-app>
    <navbar />
    <v-main>
    <home />
    </v-main>
    <custom-footer />
  </v-app>
</template>

<style></style>
<script>
import Navbar from '@/components/Navbar';
import Home from '@/views/Home';
import CustomFooter from './components/CustomFooter.vue';
export default {
  components: { CustomFooter, Navbar, Home },
};
</script>
