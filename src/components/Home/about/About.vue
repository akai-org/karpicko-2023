<template>
  <div id="about">
    <v-container fluid>
      <component-title text="Atrakcje" class="mb-10 mt-5" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="8" md="9">
          <v-row justify="center" align="center">
            <v-col
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="10"
              class="align-content-center"
            >
              <h2
                class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-center"
              >
                Damy Wam okazję do rozpoczęcia swojej przygody ze studiami w
                najlepszej możliwej formie. Rozmaite atrakcje i aktywności,
                niezapomniane przeżycia oraz przede wszystkim zabawa do białego
                rana – a to nie wszystko co dla Was przygotowaliśmy.
              </h2>
            </v-col>
            <v-col cols="12" xl="5" lg="6" md="6" sm="7" offset-xl="1">
              <polaroid-image
                src="agenda/agenda_01.jpg"
                description="Karpicko 2019"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="11" lg="8" md="9">
          <v-row justify="center" align="center">
            <!--            <v-spacer />-->
            <v-col
              cols="12"
              xl="5"
              lg="6"
              md="6"
              sm="7"
              order-md="first"
              order="last"
            >
              <polaroid-image
                src="agenda/agenda_02.jpg"
                description="KARPICKO 2019"
              />
            </v-col>
            <v-col
              cols="12"
              xl="6"
              lg="6"
              md="6"
              sm="10"
              offset-xl="1"
              class="align-content-center"
              order-2
              order-lg1
            >
              <h2
                class="text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 text-subtitle-1 headline text-center mt-10 mb-7 mb-md-0 mt-md-0"
              >
                Nie zdradzimy Wam na razie szczegółów, ale nie martwcie się!
                Organizujemy obóz już od wielu lat, więc wiemy, co robimy.
                Będziecie również mieli okazję skorzystać ze szkoleń, które
                okażą się bardzo przydatne na początku studiów.
              </h2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/general/ComponentTitle';
import PolaroidImage from '@/components/general/PolaroidImage';

export default {
  name: 'About',
  components: { ComponentTitle, PolaroidImage },
};
</script>

<style scoped></style>
