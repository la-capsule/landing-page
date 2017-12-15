import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// Filters
Vue.filter('two_digits', (value) => {
  if (value < 0) {
    return '00';
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
