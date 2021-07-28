<template>
  <div id="contact" class="mb-15">
    <v-container>
      <component-title text="Kontakt" class="mb-5 mt-10" />

      <component-text
        class="mt-8 text-center"
        text="Aby się z nami skontaktować użyj poniższego formularza"
      />

      <v-row align="center" justify="center">
        <v-col cols="11" lg="7" md="9" class="justify-center text-center">
          <v-btn
            href="https://forms.gle/7oTmvfcVns338BwH7"
            target="_blank"
            x-large
            outlined
            rounded
            class="text-button"
            color="primary"
          >
            Skontaktuj się z nami
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentText from '@/components/general/ComponentText';

import ComponentTitle from '@/components/general/ComponentTitle';

export default {
  name: 'Contact',

  components: { ComponentTitle, ComponentText },
};
</script>

<style scoped></style>
