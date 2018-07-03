# Vuelluminati

> Helper para aplicações escaláveis com Vuejs

## Setup

``` bash

# Clona o repositório
git clone https://github.com/danielbonifacio/vuelluminati ./my-dir

# Navega para a pasta em que o repositório foi criado
cd my-dir

# Instala as dependências
npm install

# Inicia o servidor de desenvolvimento com hot update
npm run dev

# Compila para produção
npm run build
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
``` app.vue
<template>
	<div class="app" v-if="Logged">
		Estou logado
	</div>
</template>
<script>
	// Importando o helper do vuex
	import { mapGetters } from 'vuex'

	export default {
		name: 'App',
		computed: mapGetters({ 'Logged': 'App/Logged' })
	}
</script>
```

Os módulos vêm com namespace ativado por padrão.