import Vue from 'vue';
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import as global package
// import dayjs from 'dayjs';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
