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
        <a href="public/rules/Regulamin-Karpicko-2020.pdf" style="color: white;">Regulamin</a> |
        <a href="public/rules/Regulamin-Karpicko-2020.pdf" style="color: white;">Zasady Bezpieczeństwa</a> |
        <a href="public/rules/Regulamin-Karpicko-2020.pdf" style="color: white;">Polityka Prywatności</a>
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
        url:
          'https://www.facebook.com/events/140145264887833'
      },
      {
        fa: 'fab fa-instagram',
        url: 'https://www.instagram.com/samorzadpp/'
      },
      {
        fa: 'fas fa-envelope',
        url: 'mailto:samorzad@samorzad.put.poznan.pl'
      }
    ]
  })
};
</script>

<style scoped></style>
