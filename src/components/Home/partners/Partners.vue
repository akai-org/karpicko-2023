<template>
  <div id="partners">
    <v-container fluid class="mb-10">
      <component-title text="Organizatorzy i Partnerzy poprzedniej edycji" class=" mt-10" />
      <v-row class="mt-10" align="start" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row class="mt-10" align="start" justify="center" no-gutters>
            <v-col
              cols="10"
              lg="3"
              md="4"
              sm="5"
              v-for="(item, index) in organizerList"
              :key="index"
            >
              <organizer-card :src="item.src" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-10" align="start" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row class="mt-10" align="start" justify="center" no-gutters>

              <partner-card
                v-for="(item, index) in partnerList"
                :key="index" :src="item.src" />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrganizerCard from '@/components/Home/partners/OrganizerCard';
import ComponentTitle from '@/components/shared/ComponentTitle';
import PartnerCard from '@/components/Home/partners/PartnerCard';
export default {
  name: 'Partners',
  components: { PartnerCard, ComponentTitle, OrganizerCard },
  data() {
    return {
      organizerList: [
        {
          src: 'pp.png',
        },
        {
          src: 'logo_sspp_black_narrow.png',
        },
      ],
      partnerList: [
        {
          src: 'logo_pils.png',
        },
        {
          src: 'dirtydaniels-logo.png',
        },
        {
          src: 'kultowa_logo.png',
        },
        {
          src: 'browar_fortuna_pieczec.png',
        },
        {
          src: 'logofaje_czarne.png',
        },
        {
          src: 'AKAI.svg',
        },
        {
          src: 'silent_king.png',
        },
        {
          src: 'smsapi_color_darklabel.png',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
