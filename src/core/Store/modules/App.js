const SET_LOADING = 'SET_LOADING';
const SET_LOGIN = 'SET_LOGIN';
const SET_ERROR = 'SET_ERROR';
const SET_SUCCESS = 'SET_SUCCESS';

/**
 * Normaliza um objeto payload para inserção na mutation
 * @param {object, string} payload Payload à ser normalizado
 */
const normalize = (payload) => {
  const newPayload = {};

  if (typeof payload === 'object') {
    newPayload.status = payload.status || true;
    newPayload.message = payload.message || '';
    return newPayload;
  }

  if (typeof payload === 'string') {
    newPayload.status = true;
    newPayload.message = payload;
    return newPayload;
  }

  if (typeof payload === 'boolean') {
    newPayload.status = false;
    return newPayload;
  }

  throw new SyntaxError('O payload precisa ser um objeto ou uma string');
};

const App = {
  namespaced: true,
  state: {
    loading: false,
    login: false,
    error: {
      status: false,
      message: 'Error',
    },
    success: {
      status: false,
      message: 'Success',
    },
  },
  mutations: {
    [SET_LOADING]: (state, payload) => {
      state.loading = payload;
    },
    [SET_LOGIN]: (state, payload) => {
      state.login = payload;
    },
    [SET_ERROR]: (state, payload) => {
      state.error = payload;
    },
    [SET_SUCCESS]: (state, payload) => {
      state.success = payload;
    },
  },
  actions: {
    setLoading: ({ commit }, payload) => {
      commit(SET_LOADING, payload);
    },
    setLogin: ({ commit }, payload) => {
      commit(SET_LOGIN, payload);
    },
    setError: ({ commit }, errorPayload) => {
      const error = normalize(errorPayload);
      commit(SET_ERROR, error);
    },
    setSuccess: ({ commit }, successPayload) => {
      const success = normalize(successPayload);
      commit(SET_SUCCESS, success);
    },
  },
  getters: {
    Loading: state => state.loading,
    Login: state => state.login,
    Error: state => state.error,
    Success: state => state.success,
  },
};

export default App;
