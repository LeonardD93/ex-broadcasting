
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');
 require('../sass/app.scss')
 
 import Vue from 'vue'
 
 window.Vue = require('vue');
 
 // router
 import router from './routes.js';
 window.router = router;


import Echo from "laravel-echo"

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'your-pusher-key',
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});

 window.Fire = new Vue();
 
 const app = new Vue({
     el: '#app',
     router,
 }).$mount('#app');