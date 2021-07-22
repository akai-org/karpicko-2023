<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title text="Zakwaterowanie" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="7" md="9">
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
                Zakwaterowani będziecie w czteroosobowych domkach w Karpicku, niedaleko Jeziora Wolsztyńskiego, nad którym również przygotowane są atrakcje. Dla tych, którzy kochają naturę znajdą się miejsca na rozłożenie kocyka na trawie. Natomiast Ci którzy cenią sobie wygodne miejsce do integracji z nowopoznanymi znajomymi, mogą zrelaksować się w strefie chillu.

              </h2>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6" sm="7">
              <polaroid-image src="karpicko_2019_sm.jpg" description="Karpicko 2019" />
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
  name: 'Accommodation',
  components: { ComponentTitle, PolaroidImage },
};
</script>

<style scoped></style>
