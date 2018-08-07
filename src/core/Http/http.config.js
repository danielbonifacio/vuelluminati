import axios from 'axios';
import Config from 'Core/Config';
import Token from 'Core/abs/Token';

const Headers = {};

const token = new Token({
  key: Config.app.tokenKey,
  mode: Config.app.tokenMode,
});

// Caso exista um token setado
if (token.check()) {
  Headers.Authorization = `Bearer ${token.get()}`;
}

Headers['Content-Type'] = 'application/json';

/**
 * Adiciona aos headers do Axios tudo que for necessário
 * O Token não pode ser enviado como [object, Object]
 */
Object.keys(Headers).map((key) => {
  axios.defaults.headers.common[key] = Headers[key];
  return '';
});

export default axios;
