import Vue from 'vue';
import Config from 'Core/Config';
import Store from 'Core/Store';
import Http from 'Core/Http';
import './polyfill.min';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

/**
 * Classes
 * @var Http HTTP requests management
 * @var Store State management pattern
 */
Vue.prototype.$http = Http;
Vue.prototype.$store = Store;

/**
 * Shortcuts
 * @var $api Url of api
 * @var $app Url of app
 * @var $config Access to configuration inside vue
 */
Vue.prototype.$api = Config.envs[Config.env].api;
Vue.prototype.$app = Config.envs[Config.env].app;
Vue.prototype.$apm = `${Config.envs[Config.env].api}/${Config.envs[Config.env].module}`;
Vue.prototype.$module = Config.envs[Config.env].module;
Vue.prototype.$config = Config;

export default Vue;
