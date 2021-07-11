<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title text="Zakwaterowanie" />
      <v-row justify="center" align="center">
        <v-col cols="11" lg="7" md="9">
          <v-row justify="center" align="center">
            <!--            <v-spacer />-->
            <v-col cols="12" xl="6" lg="6" md="6" sm="7">
              <polaroid-image
                src="accommodation/mercure.jpg"
                description="Test"
              />
            </v-col>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra
                nulla ac diam. Quisque semper justo at risus. Donec venenatis,
                turpis vel hendrerit interdum, dui ligula ultricies purus, sed
                posuere libero dui id orci.
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
  name: 'Accommodation',
  components: { ComponentTitle, PolaroidImage },
};
</script>

<style scoped></style>
