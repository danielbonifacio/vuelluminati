## Token

Em aplicações que necessitam de comunicação com API, geralmente, um token é enviado nos headers.

O Vuelluminati verifica **onload** se este token está setado na url.

Você deve passar o token pela url desta forma:
```
http://localhost:8080?token=SEU_TOKEN_AQUI
```

Por padrão, este observador só existe no carregamento da janela.

### Para onde vai?

O Token só é enviado nos cabeçalhos das requisições caso seja encontrado.

Esta validação é feita de forma automática e você pode encontrar ela em `Core/Http/http.config.js`

Uma requisição com token enviaria este header:

```
Authentication: Bearer SEU_TOKEN_AQUI
```


### Classe Token

Caso queira realizar modificações no token em ciclos diferentes, use a **classe** `Core/abs/Token`

*Exemplo:*

``` js
import Token from 'Core/abs/Token';
const token = new Token({
  mode: 'cookie',
});

export default {
  methods: {
    updateMyToken(token) {
      token.set(token);
    },
  },
};
```

O construtor da classe recupera, por padrão `mode` e `key` de `Core/Config/app.json`
