
const MY_AWESOME_STATE = 'MY_AWESOME_STATE';

const MyCustomModule = {
  namespaced: true,
  state: {
    my_awesome_state: 'My Cool Value of my Awesome State',
  },
  getters: {
    MyAwesomeState: state => state.my_awesome_state,
  },
  mutations: {
    [MY_AWESOME_STATE]: (state, payload) => {
      state.my_awesome_state = payload;
    },
  },
  actions: {
    setMyAwesomeState: ({ commit }, payload) => {
      commit([MY_AWESOME_STATE], payload);
    },
  },
};

export default MyCustomModule;
