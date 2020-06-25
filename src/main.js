// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBeZfTzLV-cMRW1AxCUaZ4ez7JNcuD04Po",
  authDomain: "todolist-go-1f96a.firebaseapp.com",
  databaseURL: "https://todolist-go-1f96a.firebaseio.com",
  projectId: "todolist-go-1f96a",
  storageBucket: "todolist-go-1f96a.appspot.com",
  messagingSenderId: "818163230484",
  appId: "1:818163230484:web:87263264b0c02498318401",
  measurementId: "G-M1CLGBX89Q"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
