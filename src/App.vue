<template>
  <!-- Componente Raiz -->
  <div id="app">
    <the-success/>
    <the-error/>
    <the-loading/>

    <router-view />
  </div>
</template>

<script>
  import TheLoading from 'Components/TheLoading';
  import TheError from 'Components/TheError';
  import TheSuccess from 'Components/TheSuccess';

  import { mapGetters } from 'vuex';

  export default {
    name: 'App',
    components: {
      TheLoading,
      TheError,
      TheSuccess,
    },
    data: () => ({
      load: true
    }),
  }
</script>

<style lang="scss">
@import "~@/assets/scss/normalize";
@import "~@/assets/scss/animations";

#app {
  // Alinhamento
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  // Tamanho
  height: 100vh;

  // Cores
  background-color: $white;
  color: $blue;
}
</style>
