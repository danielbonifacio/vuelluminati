import axios from 'axios';
import Config from 'Core/Config';
import Token from 'Core/abs/Token';
import Url from 'Core/abs/Url';

const Headers = {};

const url = new Url({
  url: window.location.href,
});

const token = new Token({
  key: Config.app.tokenKey,
  mode: Config.app.tokenMode,
});

// Verifica se existe um parâmetro Token na url
if (url.getParam('token')) {
  token.set(url.getParam('token'));
}

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
