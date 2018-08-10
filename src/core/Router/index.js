import Vue from 'vue';
import Config from 'Core/Config';
import Router from 'vue-router';
import Routes from './routes';

Vue.use(Router);

const router = new Router({
  routes: Routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${Config.app.title}`;
  next();
});

export default router;
