<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
    <fut-footer />
  </v-app>
</template>

<style></style>
<script>
import Navbar from "@/components/Navbar";
import FutFooter from "@/components/FutFooter";
export default {
  components: { FutFooter, Navbar }
};
</script>
