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
            <polaroid-image :src="src" :description="polaroid_text" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PolaroidImage from '@/components/shared/PolaroidImage';

export default {
  name: 'PoloaridSection',
  components: { PolaroidImage },
  props: {
    text: String,
    src: String,
    polaroid_text: String,
    reversed: { type: Boolean, default: false },
  },
};
</script>

<style scoped></style>
