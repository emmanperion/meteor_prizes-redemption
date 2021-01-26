import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });
});
