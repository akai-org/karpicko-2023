<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="11" lg="8" md="9">
        <v-row justify="center" align="center">
          <v-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="10"
            class="align-content-center"
            :order-lg="reversed ? 'last' : ''"
            :order="reversed ? 'first' : ''"
            :offset-lg="reversed ? 1 : 0"
          >
            <h2
              class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-center"
            >
              {{ text }}
            </h2>
          </v-col>
          <v-col
            cols="12"
            xl="4"
            lg="5"
            md="6"
            sm="7"
            :offset-lg="reversed ? 0 : 1"
          >
            <v-carousel
              cycle
              show-arrows-on-hover
              hide-delimiters
              interval="20000"
              height="300"
              class="hidden-sm-and-down"
            >
              <v-carousel-item v-for="(src, index) in srcs" :key="index">
                <v-row>
                  <v-col cols="12">
                    <v-img
                      max-width="400"
                      min-width="400"
                      height="300"
                      :src="require(`@/assets/${src}`)"
                      :aspect-ratio="1 / 1"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
            <v-carousel
              cycle
              show-arrows-on-hover
              hide-delimiters
              interval="20000"
              height="300"
              class="hidden-md-and-up"
            >
              <v-carousel-item v-for="(src, index) in srcs" :key="index">
                <v-row>
                  <v-col cols="12">
                    <v-img
                      max-width="450"
                      min-width="400"
                      height="300"
                      :src="require(`@/assets/${src}`)"
                      :aspect-ratio="1 / 1"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PolaroidSection',
  components: {},
  props: {
    text: String,
    srcs: Array,
    polaroid_text: String,
    reversed: { type: Boolean, default: false }
  }
};
</script>

<style scoped></style>
