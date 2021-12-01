import { getMountedApps, navigateToUrl } from 'single-spa';

const firstMountLogLabel = '[qiankun] first app mounted';
export function runAfterFirstMounted(effect) {
  // can not use addEventListener once option for ie support
  window.addEventListener('single-spa:first-mount', function listener() {
    if (process.env.NODE_ENV === 'development') {
      console.timeEnd(firstMountLogLabel);
    }
    effect();
    window.removeEventListener('single-spa:first-mount', listener);
  });
}


export function setDefaultMountApp(defaultAppLink) {
    // can not use addEventListener once option for ie support
    window.addEventListener('single-spa:no-app-change', function listener() {
    const mountedApps = getMountedApps();
    if (!mountedApps.length) {
            console.log('跳转路由', defaultAppLink)
            navigateToUrl(defaultAppLink);
        }
      window.removeEventListener('single-spa:no-app-change', listener);
    });
  }