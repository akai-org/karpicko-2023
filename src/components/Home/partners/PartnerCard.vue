<template>
  <v-card class="elevation-0 transparent justify-center text-center">
    <v-card-text class="text-xs-center hidden-xs-only">
      <img :src="require(`@/assets/partners/${src}`)" class="partner_card" height="100" />
    </v-card-text>
    <v-card-text class="text-xs-center hidden-sm-and-up">
      <img :src="require(`@/assets/partners/${src}`)" class="partner_card" height="80" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PartnerCard',
  props: {
    src: String,
  },
};
</script>

<style scoped>
.partner_card {
  max-width: 100% !important;
}
</style>
