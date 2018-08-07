<template>
	<div id="loading-component">
		<transition name="fade">
			<div class="loading-wrapper" v-if="loading">
				<div class="message">
					<span>Carregando...</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
  import { mapGetters } from 'vuex';

	export default {
		name: 'TheLoading',
    computed: mapGetters({ loading: 'App/Loading' }),
	}
</script>

<style lang="scss">
.loading-wrapper {
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;

	z-index: 99999;

	background-color: rgba($blue, .8);

	.message {
		font-size: 1.4em;
		color: $white;
		text-shadow: 0 4px 3px rgba($blue, .5);
	}
}
</style>
