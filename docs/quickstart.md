# Quickstart

## Instalação
Não recomendamos instalar o vuelluminati em projetos já em andamento, pois será necessário **refatorar muito código**, dependendo do nível de complexidae da da aplicação.

Para criar um novo projeto com a estrutura, basta clonar o repositório **vuelluminati-structure** (estrutura limpa)

``` sh
# Clona o repositório
git clone https://github.com/danielbonifacio/vuelluminati-structure ./my-dir

# Navega para a pasta em que o repositório foi criado
cd my-dir

# Instala as dependências
npm install

# Gera os ambientes (necessário)
node lummi generate envs

# Inicia o servidor de desenvolvimento com hot update
npm run dev

# Compila para produção
npm run build
```

## Suporte

O Vuelluminati utiliza o ecossistema do Vue, logo, seu suporte será o mesmo das versões dos componentes do ecossistema instalados.

Você pode verificar todas as versões através do arquivo `package.json`.

**O Vuelluminati não pretende suportar nenhuma versão do Internet Explorer. Não irá levar em consideração nenhuma versão deste navegador para implementação de alguma feature futuramente. Caso pretenda dar suporte à este navegador, certifique-se de adicionar todos os pollyfills e workarounds necessários.**

Atualmente o suporte vai **parcialmente** até a versão 10 (já incluso polyfill de Promises).

O gerenciador da aplicação, [Lummi](/lummi), recomenda o **node 5.6.0** ou superior.

## Casos de uso
O Vuelluminati pretende servir desenvolvedores que se preocupam com escalabilidade da aplicação e rápido desenvolvimento e controle/deploy sobre seu projeto. Padronização de código, criação de componentes, módulos e classes com um comando, e tudo em uma estrutura simples e direta.

> Adotei este padrão em algumas aplicações, onde há forte comunicação com a API,
e todos os processos que vejo que são cansativos e repetitivos, tento automatizar, **sem tirar o meu controle**.

Este projeto é mantido por um único desenvolvedor, e conta com a colaboração da comunidade para melhorias.
