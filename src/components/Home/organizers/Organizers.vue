<template>
  <div id="organizers">
    <v-container fluid class="mb-5">
      <component-title :text="organizers_title" class="mb-5 mt-5" />
      <component-text :text="organizers_text" />
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle.vue';
import ComponentText from '@/components/shared/ComponentText.vue';

export default {
  components: { ComponentText, ComponentTitle },
  data() {
    return {
      organizers_title: 'Organizator',
      organizers_text: 'Organizatorem obozu jest Samorząd Studentów Politechniki Poznańskiej.\n' +
        ' Samorząd Studentów Politechniki Poznańskiej to organizacja studencka, która reprezentuje\n' +
        ' interesy studentów na naszej uczelni. Naszym celem jest zapewnienie atrakcyjnego i\n' +
        ' bogatego życia studenckiego poprzez organizację różnorodnych wydarzeń, inicjatyw i\n' +
        ' aktywności.'
    };
  }
};
</script>

<style scoped></style>
