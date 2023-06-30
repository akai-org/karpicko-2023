<template>
  <div id="opinions">
    <v-container fluid>
      <component-title text="Opinie" class="mb-5 mt-10" />

      <v-row justify="center" align="center">
          <v-carousel
            cycle
            show-arrows-on-hover
            hide-delimiters
            interval="20000"
            height="600"
            class="hidden-sm-and-down"
          >
            <v-carousel-item v-for="(slide, index) in opinionList" :key="index">
              <opinion-item
                :src="slide.src"
                :name="slide.name"
                :quote="slide.quote"
                style="height:100%"
              />
            </v-carousel-item>
          </v-carousel>
        <v-col cols="12" class="hidden-md-and-up">
          <v-carousel cycle show-arrows-on-hover hide-delimiters height="800">
            <v-carousel-item v-for="(slide, index) in opinionList" :key="index">
              <opinion-item-sm-and-down
                :src="slide.src"
                :name="slide.name"
                :quote="slide.quote"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OpinionItem from '@/components/Home/opinions/OpinionItem';
import OpinionItemSmAndDown from '@/components/Home/opinions/OpinionItemSmAndDown';
import ComponentTitle from '@/components/shared/ComponentTitle';
export default {
  name: 'Opinions',
  components: { ComponentTitle, OpinionItemSmAndDown, OpinionItem },
  data() {
    return {
      opinionList: [
        {
          src: 'Joanna_Przybyła.jpg',
          quote:
            '"Karpicko wspominam jako miejsce pełne nowych znajomości, ciągłych wrażeń i\n' +
            ' niezapomnianych chwil. To tam miałam okazję poznać osoby, z którymi do dziś się spotykam i\n' +
            ' nie wyobrażam sobie życia studenckiego bez nich. Jest to jedyna okazja, aby zacząć życie\n' +
            ' studenckie przed studiami i przygotować się na to co będzie czekać na nas na studiach."',
          name: '- Joanna Przybyła',
        },
        {
          src: 'Antoni_Zienkiewicz.jpg',
          quote:
            '"Karpicko to super miejsce do rozpoczęcia swojego życia studenckiego. Kadra\n' +
            ' organizująca wyjazd co roku pokazuje jak wiele można osiągnąć i zorganizować wspólna pracą i\n' +
            ' przy okazji czerpać z tego ogromną radość. Wyjazd jest w rozsądnej cenie, a atrakcje\n' +
            ' przygotowane dla uczestników nieraz potrafią zaskakiwać. Serdecznie polecam."',
          name: '- Antoni Zienkiewicz',
        },
        {
          src: 'Nadia_Dur.jpg',
          quote:
            '"Niesamowici ludzie, niezapomniane wrażenia, przyjaźnie na lata- tak\n' +
            ' podsumowałabym swoje Karpicko. Polecam każdemu przeżycie takiego wyjazdu! Będzie co\n' +
            ' wspominać"',
          name: '- Nadia Dur',
        },
        {
          src: 'Anna_Stawiarz.jpg',
          quote:
            '"Na początku nie byłam pewna czy chcę jechać na obóz. Dobrze, że nie\n' +
            ' zrezygnowałam, bo wyjazd był jedną z najlepszych decyzji jakie podjęłam! Cudowni ludzie, dużo\n' +
            ' przydatnych informacji, niesamowicie spędzony czas, brak możliwości na nudę! Wspaniałe\n' +
            ' przeżycie!',
          name: '- Anna Stawiarz',
        },
        {
          src: 'Zofia_Pol.jpg',
          quote:
            '"Spędziłam bardzo kreatywnie cały tydzień i nigdy nie było czasu na nudę. Ponadto\n' +
            ' poznałam dużo osób, z którymi mam kontakt do dzisiaj i zawsze dobrze wspominamy nasz czas\n' +
            ' na Karpicku. Na samym obozie miałam także możliwość porozmawiać ze starszymi studentami\n' +
            ' mojego kierunku i z chęcią odpowiadali na moje wszelkie pytania, dzięki czemu idąc na studia\n' +
            ' byłam bardziej świadoma czego mogę się spodziewać. Na pewno zapamiętam Karpicko na\n' +
            ' bardzo długo!!',
          name: '- Zofia Pol',
        },
        {
          src: 'Karolina_Brauntsch.jpg',
          quote:
            '"Karpicko wspominam jako tydzień przepełniony wydarzeniami. Nigdy w życiu nie\n' +
            ' byłam tak szczęśliwa i zmęczona od ilości atrakcji i wrażeń. Poznałam tam swoich obecnych\n' +
            ' przyjaciół”"',
          name: '- Karolina Brauntsch',
        },
        {
          src: 'Patryk_Maciejewski.jpg',
          quote:
            '" O Karpicku usłyszałem, gdy składałem dokumenty na uczelnie. Choć przez chwilę\n' +
            ' wahałem się między ostatnimi dniami w rodzinnym miasteczku a wyjazdem, ostatecznie nie\n' +
            ' mógłbym być bardziej zadowolony ze swojej decyzji. Karpicko jest idealnym rozpoczęciem\n' +
            ' przygody studiowania w nowym mieście. Dzięki wcześniejszemu poznaniu studentów mojego\n' +
            ' kierunku, na uczelni od początku czułem się zadomowiony. Co więcej, poza godzinami nauki\n' +
            ' nadal widuję się z uczestnikami Karpicka z innych wydziałów nawet dwa lata po wyjeździe i\n' +
            ' nadal zdarza nam się wspominać wyjazd, integrację i całą zabawę z tym związaną. Na obozie\n' +
            ' możesz poznać ludzi, dzięki którym dołączysz do swojego wymarzonego koła naukowego lub\n' +
            ' innej organizacji studenckiej, co całkowicie odmieni tok Twoich studiów i co jakiś czas będziesz\n' +
            ' sam sobie wdzięczny- za odpowiednią decyzję."',
          name: '- Patryk Maciejewski',
        },
      ],
    };
  },
};
</script>

<style>
.fa-chevron-right,
.fa-chevron-left {
  font-size: 24px !important;
}
.fa-chevron-right {
  margin-right: -3px;
}
.fa-chevron-left {
  margin-left: -3px;
}
</style>
