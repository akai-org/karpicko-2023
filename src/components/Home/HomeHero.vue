<template>
  <div id="hero">
    <v-parallax dark src="@/assets/other/stary_rynek.jpg" height="750">
      <v-row align="center" justify="center" class="mt-n12">
        <v-col class="text-center" cols="12">
          <v-img
            src="@/assets/other/FUT_poznan.png"
            contain
            max-height="300"
          ></v-img>
          <h2 class="display-0 font-weight-thin mb-4">
            Forum Uczelni Technicznych - Poznań 2020
          </h2>
          <h3 class="subheading">Zapraszamy!</h3>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style scoped>
#hero {
  margin-top: -80px;
}
</style>
