## Componente

O Lummi também te permite criar componentes diretamente da linha de comando, e ele gera uma estrutura completa, poupando algum tempo.

Crie componentes usando o comando:
``` sh
node lummi add component NOME_DO_COMPONENTE [PREPROCESSADOR]
```

Para testar o output do comando, execute a seguinte linha de comando:

``` sh
node lummi add component myCoolComponentWithCamelCase scss
```

O resultado esperado em `Components/MyCoolComponentWithCamelCase.vue` é:

``` vue
<template>
	<div id="my-cool-component-with-camel-case">

	</div>
</template>

<script>
	export default {
		name: 'MyCoolComponentWithCamelCase',
	};
</script>

<style lang="scss">
	#my-cool-component-with-camel-case {

	}
</style>
```


Note que o Lummi, assim como o Vuelluminati, segue o lint do [airbnb](https://github.com/airbnb/javascript).
