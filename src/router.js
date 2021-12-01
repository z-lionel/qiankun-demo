
const routes = [
  // { path: '/',  redirect: '/react17' },
  { path: '/home', name: 'home', component: () => import('./view/Home.vue') },
  { path: '/demo', name: 'demo',  component: () => import('./view/Demo.vue')}
]



export default routes;

