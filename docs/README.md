# Vuelluminati

> Helper para aplicações escaláveis com Vue.js

## Setup

``` bash
# Clona o repositório
$ git clone https://github.com/danielbonifacio/vuelluminati ./my-dir

# Navega para a pasta em que o repositório foi criado
$ cd my-dir

# Instala as dependências
$ npm install

# Inicia o servidor de desenvolvimento com hot update
$ npm run dev

# Compila para produção
$ npm run build
```

Este repositório utiliza como base o template [webpack](http://vuejs-templates.github.io/webpack/).

## Suporte

O Vuelluminati utiliza o ecossistema do Vue, logo, seu suporte será o mesmo das versões dos componentes do ecossistema instalados.

Você pode verificar todas as versões através do arquivo `package.json`.

**O Vuelluminate não pretende suportar nenhuma versão do Internet Explorer. Não irá levar em consideração nenhuma versão deste navegador para implementação de alguma feature futuramente. Caso pretenda dar suporte à este navegador, certifique-se de adicionar todos os pollyfills e workarounds necessários.**

Atualmente o suporte vai **parcialmente** até a versão 10 (já incluso polyfill de Promises).

## Store
### Módulos
> Módulos são pequenas distribuições de states dentro da aplicação

O Vuelluminati utiliza o ecossistema padrão do vue, e traz com ele o [vuex](https://vuex.vuejs.org/), que é o gerenciador de states do vue.

A estrutura padrão do vuex é a seguinte:
``` sh
store
├── index.js          # exportação de todos os módulos
└── modules
    ├── App.js        # módulo da aplicação
    └── System.js     # módulo do sistema
```

Você encontra os arquivos do vuex no diretório `@/core/store`

#### Módulo da aplicação

O módulo da aplicação contém informações sobre o estado da aplicação.

O **Vuelluminati** considera como estados da aplicação verificações como "Esta aplicação está carregando?" ou "Estou logado nesta aplicação?".

Estas informações podem ser recuperadas através dos getters: `Loading`, `Logged`, `Success` e `Error`.

Exemplo de uso:
``` vue
<template>
	<div class="app" v-if="Logged">
		Estou logado
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'App',
		computed: mapGetters({ 'Logged': 'App/Logged' })
	}
</script>
```

O Vuelluminati recomenda a utilização de namespaces em módulos e vem com eles ativados por padrão.

Você pode criar um helpers de namespaces para facilitar e evitar repetição de código.

``` javascript
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('App')
export default {
	computed: mapGetters(['Logged']),
	methods: {
		...mapActions(['Login'])
	}
}
```
##### Loading

>Controla se o estado da aplicação é "carregando".

O componente referente à este state está no diretório `~Atoms/Loading`
Exemplos de uso:
``` vue
<template>
	<div id="app">
		<a-loading v-if="Loading"/>
		<o-view v-else>
			<button @click="setLoading(true)"></button>
		</o-view>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'App',
		computed: mapGetters({ 'Loading': 'App/Loading' }),
		created () {
			this.$store.dispatch('Cars/getRecentCars')
		}
	}
</script>
```
``` javascript
import http from '../../http'
import config from '../../config'

const Cars = {
	namespaced: true,
	state: {
		cars: []
	},
	mutations: {
		pushCars: (state, payload) => state.cars.push(Object.assign({}, payload))
	},
	actions: {
		getRecentCars: ({ commit, dispatch }, payload, { root: true }) => {
			// Informa que a aplicação está carregando
			dispatch('App/Loading', true)

			http.get(`${config.envs[config.env].api}/cars/${payload}`)
			.then( res => {
				commit('pushCars', res.data)

				// Informa que a aplicação não está mais carregando
				dispatch('App/Loading', false)
			})
		}
	}
}

export default Cars
```

Somente actions com `{ root: true }` poderão acessar o módulo `App`.

Você pode fazer um `dispatch` diretamente de um método do componente, mas trabalhar com módulos no `vuex` traz diversas vantagens e o Vuelluminati recomenda fortemente.

##### Logged
> Antes de criar o componente raiz, verifica se foi feito o login

Por padrão, o estado da aplicação é deslogado.

Você pode esconder e exibir componentes através da diretiva `v-if` comparando com este state.

``` vue
<template>
	<div id="app">
		<div v-if="Logged">
			Estou logado
		</div>
		<div v-else>
			Não estou logado
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'App',
		computed: mapGetters({ 'Logged': 'App/Logged' })
	}
</script>
```

Você pode configurar a action de login em `@/core/config/login.js` para agir da forma como você desejar.

Por padrão, a action faz uma requisição do tipo get para external route 'API/Login'.

Esta requisição verifica se o token foi setado e envia como um header `Authorization`.

Você pode configurar se este token é um Bearer ou não no arquivo de *Preciso criar esta opção*
