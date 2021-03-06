class Cookie {
  constructor(options = {}) {
    this.force = options.force || true;
  }

  get = function getByName(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  check = function checkIfExists(name) {
    const cookieName = this.get(name);
    if (cookieName !== '') return true;
    return false;
  };

  set = function setCookie(name, value, time) {
    if (this.check(name) && this.force === false) {
      throw new Error(`O Cookie ${name} já existe. Para sobscrever o cookie, use a opção force: true`);
    }
    let date = new Date();
    date.setTime(date.getTime() + (time * 60 * 60 * 1000));
    date = date.toUTCString();
    document.cookie = `${name}=${value};expires=${date};path=/`;

    return true;
  }

  unset = function unsetCookie(name) {
    if (this.check(name) || this.force === true) {
      return Cookie.set(name, null, 0);
    }
    return false;
  }
}

export default Cookie;
