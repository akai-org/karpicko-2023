<template>
  <div id="registration">
    <v-parallax
      dark
      class="d-none d-xl-flex"
      src="@/assets/background_2023.png"
      height="350"
    >
    </v-parallax>
    <v-parallax
      dark
      class="d-none d-lg-flex d-xl-none"
      src="@/assets/background_2023_lg.png"
      height="350"
    >
    </v-parallax>
    <v-parallax
      dark
      class="d-none d-md-flex d-xl-none d-lg-none"
      src="@/assets/background_2023_md.png"
      height="350"
    >
    </v-parallax>
    <v-parallax
      dark
      class="d-none d-sm-flex d-md-none d-xl-none d-lg-none"
      src="@/assets/background_2023_sm.png"
      height="350"
    >
    </v-parallax>
    <v-parallax
      dark
      class="d-flex d-sm-none d-md-none d-xl-none d-lg-none"
      src="@/assets/background_2023_xs.png"
      height="350"
    >
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
