<template>
  <div id="invitation">
    <v-container fluid>
      <component-title :text="invitation_title" />
      <component-text :text="invitation_text" />
      <v-row class="mt-10" align="start" justify="center">
        <invitation-card
          :title="card1.title"
          :text="card1.text"
          :icon="card1.icon"
        />
        <invitation-card
          :title="card2.title"
          :text="card2.text"
          :icon="card2.icon"
        />
        <invitation-card
          :title="card3.title"
          :text="card3.text"
          :icon="card3.icon"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import InvitationCard from "@/components/Home/invitation/InvitationCard";
import ComponentTitle from "@/components/general/ComponentTitle";
import ComponentText from "@/components/general/ComponentText";
export default {
  name: "Invitation",
  components: { ComponentText, ComponentTitle, InvitationCard },
  data() {
    return {
      invitation_title: "Zapraszamy!",
      invitation_text:
        "Koleżanki i Koledzy! Jest nam niezmiernie miło zaprosić Was do " +
        "uczestnictwa w zjeździe Forum Uczelni Technicznych, który odbędzie " +
        "się w Poznaniu gdzieś w październiku 2020.",
      card1: {
        title: "Mertoryczne szkolenia",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
          "facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi, sit amet " +
          "mollis massa justo eget sapien. Phasellus quis consequat justo. Nulla " +
          "elementum mattis dapibus.",
        icon: "icon_presentation.png"
      },
      card2: {
        title: "Pełni pasji ludzie",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
          "facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi.",
        icon: "icon_people.png"
      },
      card3: {
        title: "Poznań miasto doznań",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus " +
          "facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi, sit amet " +
          "mollis massa justo eget sapien. Phasellus quis consequat justo. Nulla ",
        icon: "icon_city.png"
      }
    };
  }
};
</script>

<style scoped></style>
