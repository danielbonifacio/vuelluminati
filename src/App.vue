<template>
	<!-- Componente Raiz -->
	<div id="app" v-if=''>
		<router-view/>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('App')

export default {
	name: 'App',
	computed: mapGetters(['Logged', 'Loading', 'Success', 'Error'])
}

</script>

<style lang="scss">
#app {
	// Alinhamento
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	// Tamanho
	height: 100vh;

	// Cores
	background-color: $white;
	color: $blue;
}
</style>
