## Módulo da aplicação

O Módulo App traz consigo alguns states padrão:

- `Loading` *Boolean*
- `Error` *Object*
- `Success` *Object*
- `Login` *Boolean*

### Loading

Controla se o componente `TheLoading` irá aparecer ou não na tela.

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

### Error

Controla como o componente `TheError` deve se comportar.

``` javascript
import { mapGetters } from 'vuex';

export default {
  methods: {
    doSomething() {
      myPromiseBasedFunction()
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