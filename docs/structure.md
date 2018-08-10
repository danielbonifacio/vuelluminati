# Estrutura

A estrutura que o Vuelluminati segue é de simples entendimento:
cada diretório tem uma **responsabilidade**, e cada aninhamento, uma **especialidade**.

Você não precisa conhecer a fundo como tudo é feito para utilizar o Vuelluminati, mas, certamente, irá visitar alguns diretórios com frequência:

```
src
├── assets/scss/vars.scss # variaveis scss
├── components   # componentes
├── core         # core da aplicação
    ├── Config   # arquivos de configuração
    ├── Router   # gerenciador de rotas (vue-router)
    └── Store    # módulos da aplicação (vuex)
└── views   # componentes Pai que serão chamados pelas rotas
```

Como esta é uma versão muito nova, essa estrutura poderá ser modificada com o passar do tempo. Não se preocupe! Um guia de upgrade será informado em todas as atualizações e nenhuma alteração brusca irá ocorrer em versões minor ou patch.

## Atalhos

Na hora de importar arquivos com o webpack, alguns atalhos estão disponíveis:

|atalho      |destino         |
|------------|----------------|
|`@`         |/src            |
|`Core`      |/src/core       |
|`Views`     |/src/views      |
|`Components`|/src/components |

*Exemplo de uso:*

``` javascript
// eg.js
import Config from 'Core/Config';
import MyCoolView from 'Views/MyCoolView';
import MyAwesomeComponent from 'Components/MyAwesomeCompoents';
```

``` css
/* eg.scss */
@import "~@/assets/scss/my-custom-style.scss";
```

Você pode criar novos atalhos em: `/lummi/modules/build/webpack.base.conf.js` *linha 27*
