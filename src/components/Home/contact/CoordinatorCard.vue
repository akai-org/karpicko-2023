<template>
  <v-col cols="10" lg="3" md="4">
    <v-card class="elevation-0 transparent">
      <v-card-text class="text-center">
        <v-avatar class="hidden-xs-only" size="300">
          <img v-if="avatar" :src="require(`@/assets/contact/${avatar}`)"/>
        </v-avatar>
        <v-avatar class="hidden-sm-and-up" size="220">
          <img src="@/assets/contact/Bartek_C.jpg" />
        </v-avatar>
      </v-card-text>
      <v-card-title primary-title class="layout justify-center">
        <div class="headline text-center">{{ title }}</div>
      </v-card-title>
      <v-card-text>
        <p class="mt-n4 text-center">{{ text.email }}</p>
        <p class="mt-n4 text-center">{{ text.phone }}</p>
        <p class="mt-n4 text-center">{{ text.faculty }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CoordinatorCard",
  props: {
    title: String,
    text: Object,
    avatar: String
  }
};
</script>

<style scoped></style>
