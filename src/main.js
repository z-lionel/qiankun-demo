import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { runAfterFirstMounted, setDefaultMountApp } from './global';
import routes from './router';

const router = createRouter({
  history: createWebHistory('/'), 
  routes,                    
});

createApp(App).use(router).mount('#app') 

registerMicroApps([
  {
    name: 'reactapp',
    entry:'//localhost:6032',
    container: '#container',
    activeRule: '/react17',
  },
  {
    name: 'vueapp',
    entry:'//localhost:6031',
    container: '#container',
    activeRule: '/vue3',
  },
],{
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
    return Promise.resolve()
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      return Promise.resolve()
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
      return Promise.resolve()
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      return Promise.resolve()
    }
  ]
});


addGlobalUncaughtErrorHandler((error) => {
  console.log('error', error)
})

setDefaultMountApp('/react17')  

start();  

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});


