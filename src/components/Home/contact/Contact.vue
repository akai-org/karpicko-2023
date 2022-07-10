<template>
  <div id="contact" class="mb-15">
    <v-container>
      <component-title text="Kontakt" class="mb-5 mt-10" />

      <component-text class="mt-8 text-center" :text="contactByForm" />

      <v-row align="center" justify="center">
        <v-col cols="11" lg="7" md="9" class="justify-center text-center">
          <v-btn
            href="https://forms.gle/PRmxEa21A4cziC6c8"
            target="_blank"
            x-large
            outlined
            rounded
            class="text-button"
            color="primary"
            type="link"
          >
            {{ contactUs }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentText from '@/components/shared/ComponentText';

import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  name: 'Contact',

  components: { ComponentTitle, ComponentText },
  data() {
    return {
      contactUs: 'Skontaktuj się z nami',
      contactByForm: 'Chcesz się z nami skontaktować? Użyj poniższego formularza!',
    };
  },
};
</script>

<style scoped></style>
