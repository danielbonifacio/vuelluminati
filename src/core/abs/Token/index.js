import App from '@/core/Config/app.json';
import Cookie from '@/core/abs/Cookie';

const cookie = new Cookie({ force: true });

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

    throw new Error(`O modo ${this.mode} não suporta este método`);
  }

  set = function setToken(value) {
    if (this.mode === 'cookie') return cookie.set(this.key, value, 24);

    throw new Error(`O modo ${this.mode} não suporta este método`);
  }
}

export default Token;
