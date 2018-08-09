import Home from 'Views/Home';
import NotFound from 'Views/404';
import Teste from 'Views/Teste';

const Routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/teste',
    component: Teste,
    name: 'Teste',
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
  },
  {
    path: '*',
    redirect: {
      name: 'NotFound',
    },
  },
];

export default Routes;
