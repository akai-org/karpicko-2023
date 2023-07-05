<template>
	<div id="about">
		<v-container fluid>
			<component-title text="Co na was czeka?" class="mb-10 mt-5" />
			<polaroid-section
				:text="sections[0].text"
				:srcs="sections[0].srcs"
				:polaroid_text="sections[0].polaroid_text"
				:reversed="sections[0].reversed"
			/>
			<polaroid-section
				:text="sections[1].text"
				:srcs="sections[1].srcs"
				:polaroid_text="sections[1].polaroid_text"
				:reversed="sections[1].reversed"
			/>
			<polaroid-section
				:text="sections[2].text"
				:srcs="sections[2].srcs"
				:polaroid_text="sections[2].polaroid_text"
				:reversed="sections[2].reversed"
			/>
		</v-container>
	</div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';
import PolaroidSection from '../../shared/PolaroidSection.vue';

export default {
  name: 'About',
  components: { ComponentTitle, PolaroidSection },
  data() {
    return {
      sections: [
        {
          text:
						' Na obozie adaptacyjnym damy Wam okazję do rozpoczęcia swojej przygody ze\n' +
						' studiami w najlepszej możliwej formie. Rozmaite atrakcje, aktywności i zabawy do białego\n' +
						' rana – a to nie wszystko co dla Was przygotowaliśmy!',
          srcs: ['agenda/carousel/carousel_1.jpg', 'agenda/carousel/carousel_2.jpg', 'agenda/carousel/carousel_3.jpg', 'agenda/carousel/carousel_4.jpg'],
          polaroid_text: ' ',
          reversed: false,
        },
        {
          text:
						'Na Karpicku będziecie mieli okazję skorzystać ze szkoleń oraz warsztatów, które\n' +
						' będą bardzo przydatne na początku studiów. Nie możemy Wam zdradzać szczegółów, ale\n' +
						'zaufajcie nam! Organizujemy obóz od wielu lat, więc wiemy, co zrobić, aby stworzyć chwile\n' +
						' których nigdy nie zapomnicie.',
          srcs: ['agenda/carousel/carousel_5.jpg', 'agenda/carousel/carousel_6.jpg', 'agenda/carousel/carousel_7.jpg', 'agenda/carousel/carousel_8.jpg'],
          polaroid_text: ' ',
          reversed: true,
        },
        {
          text:
						' Oprócz tego na Karpicku będziecie mieć okazję spotkać się z członkami Kół\n' +
						' Naukowych i Organizacji Studenckich Politechniki Poznańskiej. Jest to jedyna taka\n' +
						' możliwość przed studiami, aby dowiedzieć się od starszych kolegów czym się zajmują,\n' +
						' porozmawiać o swoich zainteresowaniach, a może i nawet pomyśleć nad rekrutacją do\n' +
						' jednego z nich!',
          srcs: ['agenda/carousel/carousel_9.jpg', 'agenda/carousel/carousel_10.jpg', 'agenda/carousel/carousel_11.jpg', 'agenda/carousel/carousel_12.jpg'],
          polaroid_text: ' ',
          reversed: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
