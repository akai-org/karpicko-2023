<template>
	<v-carousel hide-delimiters>
		<template v-for="(item, index) in slider">
			<v-carousel-item
				v-if="(index + 1) % columns === 1 || columns === 1"
				:key="index"
			>
				<v-row class="flex-nowrap" style="height:100%">
					<template v-for="(n, i) in columns">
						<template v-if="+index + i < slider.length">
							<v-col :key="i">
								<v-img
									:aspect-ratio="1 / 1"
									:src="require(`@/assets/agenda/carousel/${slider[+index + i]}`)"
									class="justify-center"
								>
								</v-img>
							</v-col>
						</template>
					</template>
				</v-row>
			</v-carousel-item>
		</template>
	</v-carousel>
</template>

<script>
export default {
  name: 'AboutCarousel',
  data() {
    return {
      slider: [
        'carousel_1.jpg',
        'carousel_2.jpg',
        'carousel_3.jpg',
        'carousel_4.jpg',
        'carousel_5.jpg',
        'carousel_6.jpg',
        'carousel_7.jpg',
        'carousel_8.jpg',
        'carousel_9.jpg',
        'carousel_10.jpg',
        'carousel_11.jpg',
        'carousel_12.jpg',
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    },
  },
};
</script>
