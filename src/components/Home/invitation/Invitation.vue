<template>
  <div id="invitation">
    <v-container fluid>
      <component-title :text="invitation_title" />
      <component-text :text="invitation_text" />
      <v-row align="start" class="mt-10" justify="center">
        <invitation-card
          :icon="card1.icon"
          :text="card1.text"
          :title="card1.title"
        />
        <invitation-card
          :icon="card2.icon"
          :text="card2.text"
          :title="card2.title"
        />
        <invitation-card
          :icon="card3.icon"
          :text="card3.text"
          :title="card3.title"
        />
      </v-row>
      <component-title :text="invitation_title2" />
      <component-text :text="invitation_text2" />
    </v-container>
  </div>
</template>

<script>
import InvitationCard from '@/components/Home/invitation/InvitationCard';
import ComponentTitle from '@/components/general/ComponentTitle';
import ComponentText from '@/components/general/ComponentText';

export default {
  name: 'Invitation',
  components: { ComponentText, ComponentTitle, InvitationCard },
  data() {
    return {
      invitation_title: 'Obóz Integracyjno-Szkoleniowy "Karpicko"',
      invitation_text:
        'Jest to obóz adaptacyjny Politechniki Poznańskiej, który w najlepszy sposób przygotuje Was do wejścia w nowy etap życia - studia. ' +
        'Wszystko zorganizowane jest przez studentów dla studentów - czyli przez Samorząd Studentów Politechniki Poznańskiej dla nowych studentów.',
      card1: {
        title: 'Jedyna taka okazja!',
        text:
          'Czy wiesz, że na Karpicko możesz zapisać się tylko jeden raz? Na samym obozie będą tylko studenci, którzy po raz pierwszy rekrutują się na naszą politechnikę! Jest to niepowtarzalna okazja by poznać znajomości na lata!',
        icon: 'stopwatch.svg'
      },
      card2: {
        title: 'Nowe znajomości',
        text:
          'Będziecie mieli możliwość poznać zarówno innych pierwszorocznych studentów, którzy tak jak Wy po raz pierwszy przekraczają mury Uczelni, ale także starszych kolegów z Samorządu Studentów, którzy wprowadzą Was w tajniki życia studenckiego. ',
        icon: 'users.svg'
      },
      card3: {
        title: 'Niezapomniane chwile',
        text:
          'Chwile na Karpicku pozostaną na lata! Najlepsze wspomnienia, których z zazdrością będą wysłuchiwać osoby, które nie zdecydowały się pojechać na obóz. Sięgnij z nami po dozę wrażeń oraz nowych przyjaźni. Nie może Cię zabraknąć!\n',
        icon: 'hourglass.svg'
      },
      invitation_title2: 'Zapraszamy!',
      invitation_text2: 'Drodzy Studenci Pierwszego Roku! Jest nam szalenie miło zaprosić was do uczestnictwa' +
        ' w obozie Integracyjno-Szkoleniowym "Karpicko" dla pierwszorocznych studentów Politechniki Poznańskiej, który planowany jest na wrzesień 2021!'
    };
  }
};
</script>

<style scoped></style>
