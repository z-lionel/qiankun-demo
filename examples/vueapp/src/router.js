
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('./view/Home.vue') },
  { path: '/demo', name: 'demo',  component: () => import('./view/Demo.vue')},
  { path: '/user', name: 'user',  component: () => import('./view/User.vue')}
]



export default routes;

