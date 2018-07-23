<template>
	<div class="status-box">
		<div class="status-item">
			<span>{{ cName }}</span>
		</div>
		<div class="status-module" v-if="state != undefined">
			{{ `${namespace}/${state}` }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'StatusBox',
		props: {
			cName: String,
			status: Boolean,
			state: String,
			namespace: String
		}
	}
</script>

<style lang="scss">

	.status-box{
		&:not(:last-child) {
			margin-bottom: 40px;
		}

		.status-module {
			color: $yellow;
			margin-top: 20px;
		}

		.status-item {
				display: block;
				background: $green;
				color: $white;
				padding: 20px;
				font-size: 1.4em;
				box-shadow: -7px 7px 0 rgba($green, .2);
				transition: .25s $animation;

				cursor: pointer;
				&:hover {
					box-shadow: -10px 10px 0 rgba($green, .2);
					-webkit-transform: translateY(-3px) translateX(3px);
					   -moz-transform: translateY(-3px) translateX(3px);
					    -ms-transform: translateY(-3px) translateX(3px);
					     -o-transform: translateY(-3px) translateX(3px);
					        transform: translateY(-3px) translateX(3px);
				}
		}
	}
</style>
