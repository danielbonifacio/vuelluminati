<template>
  <!-- Componente Raiz -->
  <div id="app">
    <o-loading :state="Loading"/>
    <o-error :state="Error.status"/>
    <o-success :state="Success.status"/>
    <router-view />
  </div>
</template>

<script>
import LoadingOrganism from '@/components/TheLoading'
import ErrorOrganism from '@/components/TheError'
import SuccessOrganism from '@/components/TheSuccess'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('App')

export default {
  name: 'App',
  components: {
    'o-loading': LoadingOrganism,
    'o-error': ErrorOrganism,
    'o-success': SuccessOrganism,
  },
  data: () => ({
    load: true
  }),
  computed: mapGetters(['Logged', 'Loading', 'Success', 'Error']),
  created () {
    this.$store.dispatch('App/Login', { user: 'foo', pass: 'bar' })
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
