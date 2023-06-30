<template>
  <div id="invitation">
    <v-container fluid class="mb-5">
      <component-title :text="invitation_title" class="mb-5 mt-5" />
      <component-text :text="invitation_text" />
      <v-row align="start" class="mt-10" justify="center">
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
import IconSection from '@/components/shared/IconSection.vue';

export default {
  name: 'Invitation',
  components: { ComponentText, ComponentTitle, IconSection },
  data() {
    return {
      invitation_title: 'OBÓZ INTEGRACYJNO-SZKOLENIOWY PP - KARPICKO 2023',
      invitation_text:
        `To obóz adaptacyjny Politechniki Poznańskiej, który w najlepszy sposób przygotuje Cię do
        nowego etapu w Twoim życiu- studiów. Podczas Karpicka zapewnimy Ci prawdziwie
        studencką atmosferę z mnóstwem zabawy i aktywności, oprócz tego będziesz mieć okazję
        zdobyć niezbędną wiedzę dla przyszłego studenta naszej uczelni.`,
      card1: {
        title: 'Jedyna taka okazja!',
        text:
          'Czy wiesz, że na nasz obóz możesz zapisać się tylko raz? Na Karpicko mogą pojechać\n' +
          ' jedynie studenci, którzy po raz pierwszy rekrutują się na Politechnikę Poznańską!',
        icon: 'stopwatch_dark.svg',
      },
      card2: {
        title: 'Nowe znajomości',
        text:
          'Nie masz z kim jechać? Nic nie stoi na przeszkodzie. To właśnie tutaj poznasz masę nowych\n' +
          ' znajomych, którzy tak jak Ty po raz pierwszy przekraczają mury Uczelni, a także starszych\n' +
          ' kolegów z Samorządu Studentów.',
        icon: 'users_dark.svg',
      },
      card3: {
        title: 'Niezapomniane chwile',
        text:
          'Chwile przeżyte na obozie na długo pozostaną w Twojej pamięci! Wspaniałe wspomnienia,\n' +
          ' których z zazdrością będą wysłuchiwać osoby, które nie zdecydowały się pojechać. Sięgnij z\n' +
          ' nami po dozę wrażeń oraz nowych przyjaźni.',
        icon: 'hourglass_dark.svg',
      },
    };
  },
};
</script>

<style scoped></style>
