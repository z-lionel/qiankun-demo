import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './public-path';
import routes from './router';

let instance = null;
let history = null;

const render = (props = {}) => {

  const {container} = props;
  history = createWebHistory( window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/');
  const router = createRouter({
    history,
    routes,                    
  });
  
  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : '#app') 
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('vue app bootstraped')
}
  
export async function mount (props) {
  console.log('props from main app', props)
  props.onGlobalStateChange((state, prev) => {
    console.log('onGlobalStateChange', state, prev)
  })
  render(props)
}

export async function unmount () {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  history.destroy();
}
