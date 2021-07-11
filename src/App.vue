<template>
	<v-app>
		<navbar />
		<v-content>
			<router-view />
		</v-content>
		<karpicko-footer />
	</v-app>
</template>

<style></style>
<script>
import Navbar from '@/components/Navbar';
import KarpickoFooter from '@/components/KarpickoFooter';
export default {
	components: { KarpickoFooter, Navbar },
};
</script>
