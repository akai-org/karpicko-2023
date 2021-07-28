<template>
  <v-footer dark padless>
    <link
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      rel="stylesheet"
    />
    <v-card class="primary white--text text-center" flat tile width="100%">
      <v-card-text class="mt-n1 mb-n7">
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          :href="icon.url"
          class="mx-4 white--text"
          icon
          target="_blank"
        >
          <v-icon size="24px">{{ icon.fa }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-6">
        Za treść niniejszego serwisu odpowiedzialny jest Samorząd Studentów
        Politechniki Poznańskiej.
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <!--<a href="public/rules/Regulamin_Karpicko_2021.pdf" target="_blank" style="color: white;" download>Regulamin</a> |
        <a href="public/rules/Zasady_bezpieczenstwa.pdf" target="_blank" style="color: white;" download>Zasady Bezpieczeństwa</a> |
        <a href="public/rules/Polityka_prywatnosci.pdf"  target="_blank" style="color: white;" download>Polityka Prywatności</a>-->

        <v-row align="center" justify="center" class="mt-1">
          <v-btn
            download
            href="/rules/Regulamin_Karpicko_2021.pdf"
            class=" text-button"
            plain
          >
            Regulamin
          </v-btn>

          <v-btn
            download
            href="/rules/Zasady_bezpieczenstwa.pdf"
            class="text-button"
            plain
          >
            Zasady bezpieczeństwa
          </v-btn>

          <v-btn
            download
            href="/rules/Polityka_prywatnosci.pdf"
            class="text-button"
            plain
          >
            Polityka Prywatności
          </v-btn>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;{{ new Date().getFullYear() }} —
        <strong>Samorząd Studentów Politechniki Poznańskiej</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'KarpickoFooter',
  data: () => ({
    icons: [
      {
        fa: 'fab fa-facebook',
        url: 'https://www.facebook.com/events/140145264887833',
      },
      {
        fa: 'fab fa-instagram',
        url: 'https://www.instagram.com/samorzadpp/',
      },
      {
        fa: 'fas fa-envelope',
        url: 'mailto:samorzad@samorzad.put.poznan.pl',
      },
    ],
  }),
};
</script>

<style scoped></style>
