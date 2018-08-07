import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/App';

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    App,
  },
});

export default Store;
