import axios from './http.config';

const Http = {
  get: url => new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => resolve(res))
      .catch(err => reject(err));
  }),
  post: (url, post) => new Promise((resolve, reject) => {
    axios
      .post(url, post)
      .then(res => resolve(res))
      .catch(err => reject(err));
  }),
};

export default Http;
