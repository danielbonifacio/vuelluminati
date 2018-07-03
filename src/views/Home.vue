<template>
	<div id="home" class="view-box">
		<h1 v-html="title"></h1>
		<p>Vuelluminati <strong>{{ version }}</strong></p>
		<p><i class="fab fa-vuejs"></i>Vue <strong>{{ vueVersion }}</strong></p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'Home',
		data: () => ({
			title: `
				<span>Vue</span>lluminati
			`
		}),
		computed: mapGetters({ version: 'Sys/Version', vueVersion: 'Sys/Vue' })
	}
</script>
