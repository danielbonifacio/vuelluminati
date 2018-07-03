<template>
	<div id="not-found" class="view-box">
		<h1>404</h1>
		<p>Página não encontrada</p>
		<p>
			<router-link :to="{ name: 'Home' }">
				Voltar para a Home
			</router-link>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'NotFount'
	}
</script>
