<template>
	<div id="loading-component">
		<transition name="fade">
			<div class="loading-wrapper" v-if="state">
				<div class="message">
					<span>Carregando...</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'Loading',
		props: ['state']
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

	background-color: rgba($blue, .8);

	.message {
		font-size: 1.4em;
		color: $white;
		text-shadow: 0 4px 3px rgba($blue, .5);
	}
}
</style>
