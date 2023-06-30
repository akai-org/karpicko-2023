<template>
  <div id="info" class="mt-4 mb-11">
    <v-container fluid>
      <component-title :text="info_title" class="mb-3" />
      <component-text :text="info_text" />
      <v-row align="center" justify="center">
        <icon-section
          :icon="card1.icon"
          :text="card1.text"
          :title="card1.title"
        />
        <icon-section
          :icon="card2.icon"
          :text="card2.text"
          :title="card2.title"
        />
        <icon-section
          :icon="card3.icon"
          :text="card3.text"
          :title="card3.title"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';
import ComponentText from '@/components/shared/ComponentText';
import IconSection from '@/components/shared/IconSection';
export default {
  components: { ComponentText, ComponentTitle, IconSection },
  name: 'Info',
  data() {
    return {
      info_title: 'Nie może cię zabraknąć! ',
      info_text:
        'Drodzy Studenci Pierwszego Roku! Jest nam szalenie miło zaprosić Was do uczestnictwa w\n' +
        ' Obozie Integracyjno-Szkoleniowym Politechniki Poznańskiej- Karpicko 2023 dla\n' +
        ' pierwszorocznych studentów, który planowany jest na wrzesień 2023!',
      card1: {
        title: 'Kiedy?',
        text: 'Od 4 do 9 września 2023 roku',
        icon: 'icon_calendar_dark.svg',
      },
      card2: {
        title: 'Gdzie?',
        text:
          'W Ośrodku Wypoczynkowym "Jelonek" w Karpicku niedaleko Wolsztyna',
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
