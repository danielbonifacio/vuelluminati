<template>
	<div id="home" class="view-box">
		<img src="@/assets/svg/logo.svg" alt="Vuelluminati">
		<h1 v-html="title"></h1>
		<p class="description">Uma estrutura para projetos escaláveis com Vuejs</p>
		<p>Vuelluminati <strong>{{ version }}</strong></p>
		<p><i class="fab fa-vuejs"></i>Vue <strong>{{ vueVersion }}</strong></p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'Home',
		data: () => ({
			title: `<span>Vue</span>lluminati`
		}),
		computed: mapGetters({ version: 'Sys/Version', vueVersion: 'Sys/Vue' })
	}
</script>

<style lang="scss">
	img {
		margin-bottom: 20px;
		max-width: 160px;
	}

	.description {
		margin-top: -20px;
		margin-bottom: 20px;
		color: rgba($blue, .7);
	}
</style>

