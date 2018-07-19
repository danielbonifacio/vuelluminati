<template>
  <!-- Componente Raiz -->
  <div id="app">
    <o-loading :state="Loading"/>
    <router-view />
  </div>
</template>

<script>
import LoadingOrganism from '@/components/organisms/Loading'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('App')

export default {
  name: 'App',
  components: {
    'o-loading': LoadingOrganism
  },
  data: () => ({
    load: true
  }),
  computed: mapGetters(['Logged', 'Loading', 'Success', 'Error']),
  created () {
    this.$store.dispatch('App/Loading', true)
    this.$http
      .get(this.$app)
      .then(this.$store.dispatch('App/Loading', false))
  }
}

</script>

<style lang="scss">
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
