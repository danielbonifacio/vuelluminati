## Módulo da aplicação

O Módulo App traz consigo alguns states padrão:

- `Loading` *Boolean*
- `Error` *Object*
- `Success` *Object*
- `Login` *Boolean*

### Loading

Controla se `Components/TheLoading` irá ou não ficar visível no viewport.

``` javascript
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    Loading: 'App/Loading',
  }),
  methods: {
    doSomething() {
      this.$store.dispatch('App/setLoading', true);
      myPromiseBasedFunction()
        .finally(() => {
          this.$store.dispatch('App/setLoading', false);
        });
    },
  },
};
```

### Error e Success

Controla como `Components/TheError` e `Components/TheSuccess` irão se comportar.

``` javascript
import { mapGetters } from 'vuex';

export default {
  methods: {
    doSomething() {
      myPromiseBasedFunction()
        .then(res => {
          this.$store.dispatch('App/setSuccess', {
            status: true,
            message: res.message
          });
        })
        .catch(err => {
          this.$store.dispatch('App/setError', {
            status: true,
            message: err.message,
          });
        });
    },
  },
};
```

Caso você passe uma string como payload, o componente irá normalizar o objeto para:
``` javascript
{
  status: true,
  message: payload,
}
```

### Login

Controla se `@/App` será renderizado.

Você pode controlar este estado de outro módulo. Por exemplo:
``` javascript
const root = { root: true };
const token = new Token();
const user = new User({
  name: 'john_doe',
  pass: 'pass@123',
});

const Module = {
  state: {...},
  getters: {...},
  mutations: {...},
  actions: {
    authUser: ({ dispatch }) => {
      user.login()
        .then(token => {
          token.set(token)
          dispatch('App/setLogin', true, root);
        });
    },
  },
};
```
