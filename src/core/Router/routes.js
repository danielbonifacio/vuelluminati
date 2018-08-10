import Home from 'Views/Home';
import NotFound from 'Views/404';
import Teste from 'Views/Teste';

const Routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Início',
    },
  },
  {
    path: '/teste',
    component: Teste,
    name: 'Teste',
    meta: {
      title: 'Teste os componentes',
    },
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
    meta: {
      title: 'Página não encontrada',
    },
  },
  {
    path: '*',
    redirect: {
      name: 'NotFound',
    },
  },
];

export default Routes;
