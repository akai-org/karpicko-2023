<template>
  <div id="registration">
    <v-parallax
      dark
      src="@/assets/invitation/karpicko_zaproszenie.png"
      height="350"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" lg="4" md="5" sm="7" xl="3" cols="12">
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      link:
        'https://docs.google.com/forms/d/e/1FAIpQLSeND9jAc0E4iZt-7b3h8FkW1GwIwZUlZvtVLPQ30PDH4cOy2w/viewform',
      title: 'Rejestracja',
    };
  },
};
</script>

<style scoped></style>
