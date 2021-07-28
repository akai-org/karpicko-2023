<template>
  <div id="opinions">
    <v-container fluid>
      <component-title text="Opinie" class="mb-5 mt-10" />

      <v-row justify="center" align="center">
        <v-col cols="12" lg="7" md="9" class="hidden-sm-and-down">
          <v-carousel
            cycle
            show-arrows-on-hover
            hide-delimiters
            interval="10000"
            height="400"
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
        </v-col>
        <v-col cols="12" class="hidden-md-and-up">
          <v-carousel cycle show-arrows-on-hover hide-delimiters height="500">
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
import ComponentTitle from '@/components/general/ComponentTitle';
export default {
  name: 'Opinions',
  components: { ComponentTitle, OpinionItemSmAndDown, OpinionItem },
  data() {
    return {
      opinionList: [
        {
          src: 'Marianna.jpg',
          quote:
            '"Wyjazd na Karpicko to jeden z najlepszych sposób ' +
            'na rozpoczęcie przygody ze studiowaniem! Razem z przyjaciółką ' +
            'poznałyśmy dzięki temu wiele ciekawych osób, które tak jak my ' +
            'dopiero zaczynały swoją przygodę z Politechniką Poznańską"',
          name: '- Marianna Zawal',
        },
        {
          src: 'Anna.jpg',
          quote:
            '"Karpicko? Brzmi niewinnie, jednak raz przeżyte wspomina się latami. ' +
            'Tak naprawdę słowa nie opiszą atmosfery, która panuje na tym wyjeździe ' +
            '- to po prostu trzeba przeżyć. Osobiście polecam całym informatycznym ' +
            'serduszkiem. Karpicko jest nie do podrobienia"',
          name: '- Anna Prałat',
        },
        {
          src: 'Weronika.jpg',
          quote:
            '"Zapisując się na obóz nie znałam nikogo ale było warto! ' +
            'Wspaniali ludzie, pełni pozytywnej energii. Świetna atmosfera ' +
            'i dobra zabawa. Z chęcią przeżyłabym to jeszcze raz!"',
          name: '- Weronika Jaworska',
        },
        {
          src: 'Katarzyna.jpg',
          quote:
            '"Karpicko to nie wyjazd integracyjny, to stan umysłu. Czy polecam? Zdecydowanie! ' +
            'Czy pojechałabym jeszcze raz? BARDZO CHĘTNIE! ' +
            'Nie wahajcie się, wysyłajcie zgłoszenia, pakujcie ubrania i pędem na Karpicko!"',
          name: '- Katarzyna Chmielewska',
        },
        {
          src: 'Bartosz.jpg',
          quote:
            '"Fajny wyjazd, miło spędzony czas i dużo nowo poznanych ' +
            'osób. Polecam, naprawde warto"',
          name: '- Bartosz Chazan',
        },
        {
          src: 'Ola.jpg',
          quote:
            '"Karpicko to niesamowite wspomnienia, czas wypełniony po brzegi i ' +
            'wspaniali ludzie, którzy zostają na długo po zakończeniu obozu. To ' +
            'pełno emocji, pełno śmiechu, pełno zabawy i pierwsze niezapomniane studenckie przeżycie"',
          name: '- Aleksandra Baumgart',
        },
        {
          src: 'Mikolaj.jpg',
          quote:
            '"Karpicko to niezwykły czas byłem zarówno uczestnikiem jak i opiekunem. Poznałem tam wielu niesamowitych ludzi"',
          name: '- Mikołaj Gemzicki',
        },
        {
          src: 'Natalia.jpg',
          quote:
            '"Naaaajlepszy wyjazd na jakim byłam! Mnóstwo śmiechu, mnóstwo zabawy, mnóstwo nowych ludzi, z którymi nadal się trzymam. Dało to potężnego kopa (również do Samorządowania)  jeszcze przed studiami, mogłam poznać z czym się to je, dlatego wracam na Karpicko już trzeci raz - już jako kadra!"',
          name: '- Natalia Fedko',
        },
        {
          src: 'Wiktoria.jpg',
          quote:
            '"Karpicko dało mi możliwość poznania świetnych ludzi! Z niektórymi trzymam się bliżej do dzisiaj lub współpracujemy razem w ramach Samorządu. Była to na pewno niezapomniana przygoda, sami się o tym przekonacie!"',
          name: '- Wiktoria Stachowicz',
        },
        {
          src: 'Wojtek.jpg',
          quote:
            '"Z perspektywy czasu nie wyobrażam sobie lepszego rozpoczęcia studiów. Karpicko pozwoliło poznać mi niesamowitych ludzi. To nie jest zwykły wyjazd, to jest stan umysłu. Gdybym miał okazję pojechać jeszcze raz jako uczestnik nie zastanawiałbym się w ogóle."',
          name: '- Wojciech Gindera',
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
