<template>
  <div id="info" class="mt-4 mb-11">
    <v-container fluid>
      <v-row align="center" justify="center">
        <info-card :icon="card1.icon" :text="card1.text" :title="card1.title" />
        <info-card :icon="card2.icon" :text="card2.text" :title="card2.title" />
        <info-card :icon="card3.icon" :text="card3.text" :title="card3.title" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import InfoCard from '@/components/Home/info/InfoCard';
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { InfoCard },
  name: 'Info',
  data() {
    return {
      card1: {
        title: 'Kiedy?',
        text: 'Od 6 do 11 września 2021r.',
        icon: 'icon_calendar_dark.svg',
      },
      card2: {
        title: 'Gdzie?',
        text:
          'W ośrodku wypoczynkowym "Jelonek" w Karpicku niedaleko Wolsztyna',
        icon: 'map-location_dark.svg',
      },
      card3: {
        title: 'Dlaczego?',
        text:
          'Karpicko to najlepszy sposób na rozpoczęcie studenckiej przygody!',
        icon: 'info_dark.svg',
      },
    };
  },
};
</script>

<style scoped></style>
