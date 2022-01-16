import Vue from 'vue';
import App from './App.vue';
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBJQbmKemAm5KTJVlSjXWWMpU1qcxeab_U',
  },
  installComponents: false,
});

Vue.component('google-map', VueGoogleMaps.Map);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
