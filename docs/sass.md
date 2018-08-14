# Sass/Scss

Uma dificuldade de vários desenvolvedores é de recuperar variáveis sass dentro dos componentes.

O Vuelluminati, por meio da dependência `sass-resources-loader`, possibilita você a acessar todas as variáveis de `@/assets/vars.scss` em qualquer componente que use `lang="scss"` sem que você tenha que importar nada.

``` css
// vars.scss
$blue: #09f;
$white: #fff;
```

``` vue
<template>
  <div class="colored">
    I'm white with a blue background!
  </div>
</template>

<style lang="scss">
  .colored {
    color: $white;
    background: $blue;
  }
</style>
```

**Observação:** Não saia adicionando regras de elementos neste aquivo, pois cada componente irá carregar seu conteúdo, o que pode ser um problema em larga escala. Como variáveis não são renderizadas, este problema não ocorre neste cenário.

Caso queira adicionar um estilo global, importe ele componente pai `@/App.vue` ou dentro de um arquivo javascript, como `main.js`
