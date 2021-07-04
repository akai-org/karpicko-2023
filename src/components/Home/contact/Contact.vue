<template>
  <div id="contact">
    <v-container fluid>
      <component-title text="Koordynatorzy" />
      <v-row class="mt-10" align="start" justify="center">
        <coordinator-card
          :title="bartosz.title"
          :text="bartosz.text"
          :avatar="bartosz.avatar"
        />
        <coordinator-card
          :title="coordinator.title"
          :text="coordinator.text"
          :avatar="coordinator.avatar"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoordinatorCard from "@/components/Home/contact/CoordinatorCard";
import ComponentTitle from "@/components/general/ComponentTitle";

export default {
  name: "Contact",
  components: { ComponentTitle, CoordinatorCard },
  data() {
    return {
      bartosz: {
        title: "Bartosz Cieślewicz",
        text: {
          email: "bartek123@somemail.com",
          phone: "+48 213 769 666",
          faculty: "WIiT"
        },
        avatar: "Bartek_C.jpg"
      },
      coordinator: {
        title: "Bartosz Cieślewicz",
        text: {
          email: "bartek123@somemail.com",
          phone: "+48 213 769 666",
          faculty: "WIiT"
        },
        avatar: "Bartek_C.jpg"
      }
    };
  }
};
</script>

<style scoped></style>
