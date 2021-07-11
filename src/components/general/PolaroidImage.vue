<template>
  <div class="elevation-5 pa-3 justify-center align-center text-center">
    <v-img
      :src="require(`@/assets/${src}`)"
      :alt="description"
      :aspect-ratio="1 / 1"
    />
    <p class="body-1 mt-5">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'PolaroidImage',
  props: {
    src: String,
    description: String,
  },
};
</script>

<style scoped></style>
