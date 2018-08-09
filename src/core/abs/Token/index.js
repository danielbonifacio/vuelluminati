import App from '@/core/Config/app.json';
import Cookie from '@/core/abs/Cookie';

const cookie = new Cookie({ force: true });

function check(storage, key) {
  if (storage === 'local') {
    if (window.localStorage.getItem(key) !== null) return true;
    return false;
  }

  if (storage === 'session') {
    if (window.sessionStorage.getItem(key) !== null) return true;
    return false;
  }

  return false;
}

class Token {
  constructor(options = {}) {
    this.key = options.key || App.tokenKey;
    this.mode = options.mode || App.tokenStorage;
  }

  get = function getToken() {
    if (this.mode === 'cookie') return cookie.get(this.key);

    if (this.mode === 'session') return window.sessionStorage.getItem(this.key);

    throw new Error(`O modo ${this.mode} não suporta este método`);
  }

  check = function checkToken() {
    if (this.mode === 'cookie') return cookie.check(this.key);

    if (this.mode === 'session') return check('session', this.key);

    if (this.mode === 'local') return check('local', this.key);

    throw new Error(`O modo ${this.mode} não suporta este método`);
  }

  set = function setToken(value) {
    if (this.mode === 'cookie') return cookie.set(this.key, value, 24);

    if (this.mode === 'session') return window.sessionStorage.setItem(this.key, value);

    if (this.mode === 'local') return window.localStorage.setItem(this.key, value);

    throw new Error(`O modo ${this.mode} não suporta este método`);
  }
}

export default Token;
