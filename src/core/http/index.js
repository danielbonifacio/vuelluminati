/*
 * Axios é uma biblioteca que facilita as requisições XHR
 * Este arquivo é responsável por normalizar todas as requisições
 * ------
 * As requisições que partem para o servidor só serão aceitas caso possuam um header de authorization
 * Este header deverá conter um Token que está armazenado no localStorage
 * ------
 * O Axios deverá ser acessado diretamente da instância do vue por meio do prototipado $http
 * Ex: $http.get('url de requisição').then(...)
 */

import Axios from 'axios'
import Config from '../config'

// Todas as requisições feitas com o Axios, por padrão receberão estes headers
Axios.defaults.headers.common['Authorization'] = window.localStorage.getItem(Config.app.token.key);
Axios.defaults.headers.common['Content-Type'] = 'application/json'; // Normalizando o tipo de envio de dados nas requisições

export default Axios;
