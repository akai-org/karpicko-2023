<template>
  <div id="hero">
    <v-parallax dark src="@/assets/karpicko_2018_sm.jpg" height="750">
      <v-row align="center" justify="center" class="mt-n12">
        <v-col class="text-center" cols="12">
          <v-img
            src="@/assets/other/Karpicko_White_Logo_2020.png"
            contain
            max-height="300"
          ></v-img>
          <h2 class="display-0 font-weight-thin mb-4">
            Obóz Integracyjno - Szkoleniowy Karpicko 2021
          </h2>
          <h3 class="subheading">Zapisy</h3>
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
