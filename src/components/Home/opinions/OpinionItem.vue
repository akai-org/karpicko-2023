<template>
  <v-row justify="center">
    <v-col cols="4" class="d-flex justify-center text-center align-center">
      <v-img
        :aspect-ratio="1 / 1"
        :src="require(`@/assets/opinions/${src}`)"
        min-width="300"
        max-width="300"
        id="opinion_avatar"
        class="justify-center"
      />
    </v-col>
    <v-col
      cols="6"
      class="d-flex justify-center text-center align-center flex-column"
    >
      <blockquote class="blockquote text-h5 black--text">
        {{ quote }}
      </blockquote>
      <p class="text-right align-baseline grey--text">{{ name }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'OpinionItem',
  props: {
    src: String,
    quote: String,
    name: String,
  },
};
</script>

<style scoped>
#opinion_avatar {
  border-radius: 50%;
}
</style>
