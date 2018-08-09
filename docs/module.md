## Módulo

O Vuelluminati utiliza o ecossistema padrão do vue, e traz com ele o [vuex](https://vuex.vuejs.org/), que é o gerenciador de states do vue.

A estrutura padrão do vuex é a seguinte:
``` sh
Store
├── index.js   # exportação de todos os módulos
└── modules
    └── ...js   # módulo
```

Crie módulos usando o comando:

```
node lummi add module NOME_DO_MODULE NOME_DO_STATE [VALOR_DO_STATE]
```

Vamos criar um módulo, usando o comando:

```
node lummi add module myCustomModule myAwesomeState "'My Cool Value of my Awesome State'"
```

O resultado esperado em `Core/Store/modules/myCustomModule.js` é:

``` javascript
const MY_AWESOME_STATE = 'MY_AWESOME_STATE';

const MyCustomModule = {
  namespaced: true,
  state: {
    my_awesome_state: 'My Cool Value of my Awesome State',
  },
  getters: {
    MyAwesomeState: state => state.my_awesome_state,
  },
  mutations: {
    [MY_AWESOME_STATE]: (state, payload) => {
      state.my_awesome_state = payload;
    },
  },
  actions: {
    setMyAwesomeState: ({ commit }, payload) => {
      commit(MY_AWESOME_STATE, payload);
    },
  },
};

export default MyCustomModule;
```

O Lummi entende que sua responsabilidade é de apenas gerar o arquivo do módulo.

Você deve importar seu módulo manualmente no `Vuex.Store` e não há uma alternativa nativa para automativar o processo na versão atual do Lummi.
