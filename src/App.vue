<template>
	<!-- A aplicação só irá aparecer caso o estado da aplicação seja logado -->
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('App')

export default {
	name: 'App',
	computed: mapGetters(['Logged', 'Loading', 'Success', 'Error']),
	beforeCreate () {
		// Caso não esteja logado (refresh ou primeira requisição) tenta logar
		if(!this.logged) {
			this.$store.dispatch('App/ValidateToken')
		}
	}
};
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
