<template>
	<div id="testar">
		<status-box
      @click.native="toggleError()"
      c-name="Erro"
      namespace="App"
      state="Error"
      />
		<status-box
      @click.native="toggleLoading()"
      c-name="Carregando"
      namespace="App"
      state="Loading"
      />
		<status-box
      @click.native="toggleSuccess()"
      c-name="Sucesso"
      namespace="App"
      state="Success"
      />
		<p>
    	Ir para a <router-link :to="{ name: 'Home' }">Home</router-link>
    </p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import StatusBox from 'Components/StatusBox';

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
				this.$store.dispatch('App/setError', { message: 'Você causou um erro. Olha que burro!' });
			},
			toggleSuccess () {
				this.$store.dispatch('App/setSuccess', { message: 'Finalmente fez uma boa pra deus ver!' });
			},
			toggleLoading () {
				let dispatch = this.$store.dispatch;
				dispatch('App/setLoading', true);
				setTimeout(() => dispatch('App/setLoading', false), 1500);
			},
		}
	}
</script>
