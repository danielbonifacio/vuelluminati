<template>
	<div id="success">
		<transition name="fade">
			<div class="success" v-if="state">
				<div class="content">
					<div class="main-text">
						Sucesso
					</div>
					<div class="err-description">
						{{ Success.message }}
					</div>
					<div class="exit">
						<button @click="close">Ata</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Success',
	computed: mapGetters({ Success: 'App/Success' }),
	props: {
		state: Boolean
	},
	methods: {
		close () {
			if (this.Success.route) {
				this.$router.push(typeof this.Success.route == 'object' ? this.Success.route : { name: this.Success.route })
			}
			this.$store.dispatch('App/Success', false)
		}
	}
}
</script>

<style lang="scss">
.success {
	background-color: rgba($green, .7);
	color: white;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	z-index: 99999;

	.err-description {
		font-size: 1.3em;
	}

	text-shadow: 0 3px 10px rgba($black, .3);

	.main-text {
		font-size: 4em;
		margin-bottom: 20px;
		font-weight: 900;
	}

	button {
		padding: 20px;
		color: rgba($green, .7);
		background-color: white;

		border: 0;
		box-shadow: 0 3px 10px rgba($black, .3);

		border-radius: 10px;
		font-size: 1.3em;
		font-weight: bold;
		text-transform: uppercase;
		margin-top: 20px;

		transition: .25s cubic-bezier(.4,0,.2,1);

		cursor: pointer;

		&:hover {
			background-color: rgba(black, .8);
			color: white;
			transform: translateY(-3px);
			box-shadow: 0 5px 20px rgba($black, .3);
		}
	}
}
</style>
