import Vue from 'vue';

const System = {
  namespaced: true,
  state: {
    version: '1.0.0',
    vueVersion: Vue.version,
  },
  getters: {
    Version: state => state.version,
    Vue: state => state.vueVersion,
  },
};

export default System;
