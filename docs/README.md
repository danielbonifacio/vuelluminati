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

O gerenciador da aplicação, Lummi, precisa do **node 5.6.0** ou superior.

## Lummi
O Lummi é o gerenciador de aplicações que usam a estrutura do Vuelluminati. Ele é tipo um artisan da vida, e te permite executar algumas tarefas pela linha de comando.

Os scripts do Lummi se encontram dentro do diretório `/lummi` e você precisa do node para rodar os comandos.

No diretório do seu projeto, digite o comando `node lummi -h` e, caso veja a lista de comandos do lummi, tudo estará pronto para uso.

Sinta-se à vontade para criar um alias no seu terminal como `alias lummi="node lummi"`

## Estrutura

O vuelluminati nada mais é do que uma estrutura base com dependências, componentes e módulos comuns para aplicações em vue.

Uma rápida análise sobre sua estrutura:
``` sh
src
├── assets        # Assets que serão compilados pelo Webpack
├── components    # Todos os componentes (see atomic design)
    ├── atoms
    ├── molecules
    ├── organisms
    └── Hello.vue

├── core                # Core da aplicação
    ├── abstractions    # Todas as classes que serão usadas
    ├── config          # Arquivos de configuração (see Lummi)
    └── ecosystem       # Ecossistema do Vuelluminati

├── views          # Componentes que serão chamados pelo Router
    ├── 404.vue    # Quando uma rota não existe
    └── Home.vue   # Quando não é passada uma rota

├── App.vue         # Componente raiz
├── main.js         # Renderizador do Vue
└── vue.config.js   # Config do renderizador
```

Na hora de importar arquivos com o webpack, alguns atalhos estão disponíveis:

|atalho      |destino                   |
|------------|--------------------------|
|`@`         |/src                      |
|`%`         |/src/core                 |
|`Assets`    |/src/assets               |
|`Components`|/src/components           |
|`Atoms`     |/src/components/atoms     |
|`Molecules` |/src/components/molecules |
|`Organisms` |/src/components/organisms |
|`Views`     |/src/views                |
|`Config`    |/src/core/config          |

Você pode visualizar e alterar estes alias em `/lummi/build/webpack-base.conf.js`

## Ecossistema
> O Ecossistema do Vuelluminati é a

O Vuelluminatti já trás consigo o Vuex, Vue router e adiciona uma dependência ao ecossistema: `axios` (`http`).


## Ambientes
> Gerencie vários ambientes com o Lummi

> `%/config/envs`

O vuelluminati te permite criar vários ambientes e te ajuda a gerir eles com muita facilidade.

Por padrão, há dois ambientes: `dev` e `prod`.

`prod` é um ambinete protegido. Você não pode renomear ou deletar este ambiente, apenas definir seus valores.

Um ambientes possui 3 propriedades:
- `Name`: Nome do ambiente
- `Api`: URL base da API da aplicação (não geriada pelo vue)
- `App`: URL base da aplicação (link para acessar a aplicação)
- `Comment`: Descrição do ambiente (irá aparecer na listagem) *opcional*

### Criando ambientes
Há duas formas de criar um ambiente usando o Lummi:
- Comando `add env <name> <api> <app> [<comment>]`
- Comando `-s env` *Step by Step*

Exemplo:

`node lummi add env front https://api.host/app http://localhost:8080 Somente-front-end`

Irá gerar o seguinte ambiente:

``` sh
front
# Somente front end
app - https://api.host/app
api - http://localhost:8080
```

Repare que o caracter hífen (`-`) é substituído por espaços no valor final do comentário. Isso ocorre tanto no modo step by step quanto no modo single line.

### Visualizando ambientes
Você pode visualizar todos os ambientes que estão cadastrados através do comando `show envs`

Exemplo:

`node lummi show envs`

Por padrão irá gerar:
``` sh
dev
# Ambiente de desenvolvimento
app  - http://localhost:8080
api  - http://localhost:3000

prod
# Ambiente de produção
app  - https://apps.mydomain.com/appname
api  - https://apis.mydomain.com/appname
```

Caso queira visualizar somente o ambiente que está em uso, use o comando `show env`

### Editando ambientes
Há duas formas de editar um ambiente:
- Comando `update env <name> <new-name> <new-api> <new-app> [<comment>]`
- Comando `-s env` *Step by Step*

O ambiente `prod` é um ambiente protegido pelo lummi e você não pode alterar seu nome.

Para editar seu valor, use o comando: `set prod <api> <app> [<comment>]`

### Deletando ambientes
Há duas formas de editar um ambiente:
- Comando `delete env <name>`
- Comando `-s env` *Step by Step*

O ambiente `prod` é um ambiente protegido pelo lummi e você não pode o deletar.

Você não conseguirá deletar um ambiente que esteja em uso.

### Alternando entre ambientes
Você pode alternar entre ambientes de forma fácil com o comando: `change env <name>`

### Acessando ambientes
Para acessar os ambinetes dentro do vue, utilize: `vm.$app` e `vm.$api`:
``` vue
<template>
  <div id="test">
    Api: {{ $api }} <br>
    App: {{ $app }}
  </div>
</template>

<script>
  export default {
    beforeCreate () {
      this.$http
        .get(`${this.$api}/auth`)
        .catch(() => this.$store.dispatch('App/Logout'))
    }
  }
</script>
```

Para acessar os ambientes dentro de algum arquivo JavaScript, você precisa importar o Config:

``` javascript
import Config from '%/config'

let api = Config.envs[Config.env].api
let app = Config.envs[Config.env].app

console.log(api) // => http://localhost:3000
console.log(app) // => http://localhost:8080
```

## Módulos
> Módulos são pequenas distribuições de states dentro da aplicação

> `%/ecosystem/store/modules`

O Vuelluminati utiliza o ecossistema padrão do vue, e traz com ele o [vuex](https://vuex.vuejs.org/), que é o gerenciador de states do vue.

A estrutura padrão do vuex é a seguinte:
``` sh
store
├── index.js          # exportação de todos os módulos
└── modules
    ├── App.js        # módulo da aplicação
    └── System.js     # módulo do sistema
```

### Criando módulos
O Lummi te permite criar módulos com facilidade atrávés do comando `add module`.

Eeste comando aceita 3 parâmetros:
- `Module Name`: Nome do módulo que será criado
- `State Name`: Nome do state que será criado no módulo
- `State Value`: Um valor para o State que será criado *opcional **undefined***

Exemplo:

`lummi add module test-module my-state "'some string value'"`

Irá gerar:

``` javascript
'use strict'

let TestModule = {
  namespaced: true,
  state: {
    my_state: 'some string value'
  },
  getters: {
    myState: state => state.my_state
  },
  mutations: {
    myState: (state, payload) => state.my_state = payload
  },
  actions: {
    setMyState: ({commit}, payload) => {
      commit('myState', payload)
    }
  }
}

export default TestModule
```

### Módulo da aplicação

Gerencie estados comuns da aplicação

O **Vuelluminati** considera como estados da aplicação verificações como "Estou executando uma tarefa?" ou "O usuário está autenticado?".

Getters e actions: `Loading`, `Logged`, `Success` e `Error`.

O Vuelluminati recomenda a utilização de namespaces em módulos e vem com eles ativados por padrão.
``` javascript
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({ 'Loading': 'App/Loading' }),
  methods: {
    doSomething (payload) {
      this.$store.dispatch('App/Loading', true)
      ...
      .finnaly(() => this.$store.dispatch('App/Loading', false))
    }
  }
}
```

#### Objetos como payload
Os states `Success` e `Error` esperam como payload um objeto com o modelo:
``` javascript
let payloadModel = {
  status: true,
  message: 'Success on action',
  route: { name: 'Home' }
}
vm.$store.dispatch('App/Success', payloadModel)
```

Porém, as actions fazem uma verificação sobre o tipo de payload que está sendo enviado, assumindo os padrões:

``` javascript
// Caso o payload seja uma string:
new_payload = {
  message: payload,
  status: true,
  route: null
}

// Caso o payload seja um booleano:
new_payload = {
  message: 'Success on action',
  status: payload,
  route: null
}

// Caso o payload seja um objeto
payload.route   = payload.route     != undefined  ? payload.route   : null
payload.status  = payload.status    != undefined  ? payload.status  : true
payload.message = payload.message   != undefined  ? payload.message : 'Success on action'

new_payload = payload
```

#### Login
> Envia requisições de Login e Autenticação para o servidor

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

##### Método

Você pode configurar o método de login **padrão** em `@/core/config/login.js`

A chave `Mode` pode receber 2 valores: `TokenValidate`, `PostLogin` (o modo `PostLogin`ignora completamente `method`)

**TokenValidate**

Envia uma requisição para o servidor com com o método informado na chave `method` com o token que está armazenado no storage do navegador.

**PostLogin**

Envia um post para o servidor com com usuário, senha e *adições*.

Este método espera como parâmetro 3 itens:
- `user` (string)
- `password` (string)
- `_aditions` (object) (opcional)

``` javascript
...
  methods: {
    tryLogin () {
      let payload = {
        user: 'foo',
        password: 'bar',
        _aditions: { baz: 'qux', corge: 'grault' ... }
      }
      this.$store.dispatch('App/PostLogin', payload)
    }
  }
...
```

É importante lembrar que o servidor irá receber as chaves `user`, `password` e `aditions` (sem uderscore).

Você deve configurar a função de login diretamente no módulo App:
``` javascript

```

Por padrão, a action faz uma requisição do tipo get para external route 'API/Login'.

Esta requisição verifica se o token foi setado e envia como um header `Authorization`.

Você pode configurar se este token é um Bearer ou não no arquivo de *Preciso criar esta opção*

