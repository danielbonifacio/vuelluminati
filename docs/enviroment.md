## Ambiente

Gerenciar ambientes com o Vuelluminati se torna muito fácil com o **Lummi**.

O Lummi é uma espécie de artisan para o vue, e foi projetado para a estrutura do vuelluminati.

Você consegue gerenciar os ambientes apenas pela linha de comando, e só precisa de ter o node (5.6.0+) instalado em sua máquina.

### Gerando ambientes

Caso você clone o repositório, e tente rodar `npm run dev` imediatamente após instalar as dependências, será alertado que existem 2 arquivos em falta:

- env.json
- envs.json

Estes são arquivos **particulares** e, por padrão, são ignorados pelo git.

Para gerar estes arquivos, execute o comando: `node lummi generate envs`

***Nota:*** *Caso deseje compartilhar seus ambientes através do git, basta remover o arquivo .gitignore dentro do diretório /src/core/Config*


### Visualizando ambientes

Por padrão, o Lummi gera dois ambientes: `prod` e `dev`, sendo `prod` um ambiente **protegido**.

Visualize todos os ambientes com o comando:
```
node lummi show envs
```

Você também pode visualizar apenas o ambiente atual, com o comando: `node lummi show env`

### Criando ambientes

Para criar um ambiente, você precisa entender suas propredades:

- `Name`: Nome do ambiente
- `Api`: URL base da API da aplicação (não geriada pelo vue)
- `App`: URL base da aplicação (link para acessar a aplicação)
- `Comment`: Descrição do ambiente (irá aparecer na listagem) *opcional*

Entendido o que cada proriedade é, adiciona um ambiente de exmeplo com o comando:

``` sh
node lummi add env exemplo https://api.eg https://app.eg "Apenas um env de exemplo"
```

Uma mensagem de sucesso irá aparecer na tela. Isso significa que seu ambiente está pronto para ser acessado.

### Deletando ambientes

Caso deseje deletar um ambiente específico, use o comando: `node lummi delete env NOME_DO_AMBIENTE`

Para deletar o ambiente que cadastrou no passo acima,:
```
node lummi delete env exemplo
```
Como mencionado acima, o ambiente `prod` é um ambiente **protegido** e não pode ser deletado, apenas atualizado.

**Cuidado!** O Lummi não pergunta se você tem certeza se deseja fazer algo. Você manda, ele faz sem questionar.

### Atualizando ambientes

Caso deseje atualizar um ambiente específico, use o comando:
```
node lummi update env NOME_DO_AMBIENTE API APP [COMENTARIO]
```

### Alternando entre ambientes

Criar ambientes se torna uma tarefa inútil se você não puder usar eles de forma inteligente.

Para alternar entre ambientes, use o comando:
```
node lummi change env NOME_DO_AMBIENTE
```

Obviamente, você só poderá alternar entre ambientes cadastrados.

### Acessando ambientes dentro da aplicação

Dentro da sua `vm` existem três atalhos: `$app`, `$api` e `$config` onde você pode acessar os valores do ambiente atual.

*Exemplo de uso:*

``` vue
<script>
  export default {
    data: () => ({
      api: this.$api,
      app: this.$app,
      env: this.$config.env,
    }),
  }
</script>

<template>
  <div>
    <p>App: {{ app }}</p>
    <p>Api: {{ api }}</p>
    <p>Env: {{ env }}</p>
  </div>
</template>
```
``` javascript
import Config from 'Core/Config';

const ENV = Config.env;
const API = Config.envs[ENV].api;
const APP = Config.envs[ENV].app;
```
