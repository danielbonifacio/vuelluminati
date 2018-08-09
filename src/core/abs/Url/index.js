class Url {
  constructor(options = {}) {
    this.url = options.url || window.location.href;
  }

  getParam = function getParameter(param) {
    const parameter = param
      .replace(/[[]/, '\\[')
      .replace(/[\]]/, '\\]');

    const regexS = `[\\?&]${parameter}=([^&#]*)`;
    const regex = new RegExp(regexS);
    const results = regex.exec(this.url);
    return results == null ? null : results[1];
  }
}

export default Url;
