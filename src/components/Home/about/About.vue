<template>
  <div id="about">
    <v-container fluid>
      <component-title text="O nas" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras
                vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra
                nulla ac diam. Quisque semper justo at risus. Donec venenatis,
                turpis vel hendrerit interdum, dui ligula ultricies purus, sed
                posuere libero dui id orci.
              </h2>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6" sm="7">
              <v-img
                src="@/assets/about/pp.jpg"
                max-height="500"
                max-width="500"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from "@/components/general/ComponentTitle";
export default {
  name: "About",
  components: { ComponentTitle }
};
</script>

<style scoped></style>
