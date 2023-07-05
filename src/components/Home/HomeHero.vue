<template>
  <div id="hero">
    <v-img
      src="@/assets/background_2023.png"
      cover
      height="750"
      class="main-image"
    >
      <div class="background"></div>

      <v-container fluid>
        <v-row>
          <img
            v-rellax="{ speed: -5 }"
            width="400"
            style="z-index:200; position:relative; margin-left: auto; margin-right: auto"
            src="@/assets/other/Karpicko_White_Logo_2023.png"
            alt="dupa"
          />
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'HomeHero'
};
</script>

<style scoped>
#hero {
  margin-top: -80px;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.main-image {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
