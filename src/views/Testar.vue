<template>
	<div id="testar">
		<status-box c-name="Erro" @click.native="toggleError()" namespace="App" state="Error"/>
		<status-box c-name="Carregando" @click.native="toggleLoading()" namespace="App" state="Loading"/>
		<status-box c-name="Sucesso" @click.native="toggleSuccess()" namespace="App" state="Success"/>
		<p>
    	Ir para a <router-link :to="{ name: 'Home' }">Home</router-link>
    </p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import StatusBox from 'Atoms/StatusBox'

	export default {
		name: 'Testar',
		computed: mapGetters({
			error: 'App/Error',
			success: 'App/Success',
			loading: 'App/Loading',
		}),
		components: { StatusBox },
		methods: {
			toggleError () {
				this.$store.dispatch('App/Error', { message: 'Você causou um erro. Olha que burro!' })
			},
			toggleSuccess () {
				this.$store.dispatch('App/Success', { message: 'Finalmente fez uma boa pra deus ver!' })
			},
			toggleLoading () {
				let dispatch = this.$store.dispatch
				dispatch('App/Loading', true)
				setTimeout(() => dispatch('App/Loading', false), 1500)
			}
		}
	}
</script>
